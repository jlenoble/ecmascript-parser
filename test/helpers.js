import {translate} from '../gulp/parse';
import Muter, {muted} from 'muter';
import path from 'path';

const nPass = 1955;
const nEarly = 647;
const nFail = 998;

function* passModuleIndex () {
  yield* [397, 398];

  for (let i = 400; i <= 409; i++) {
    yield i;
  }

  for (let i = 411; i <= 420; i++) {
    yield i;
  }

  yield* [422, 423, 523, 546, 551];

  for (let i = 1051; i <= 1070; i++) {
    yield i;
  }

  for (let i = 1116; i <= 1127; i++) {
    yield i;
  }

  yield* [1132, 1333];

  for (let i = 1686; i <= 1695; i++) {
    yield i;
  }

  for (let i = 1698; i <= 1701; i++) {
    yield i;
  }
}

function* earlyModuleIndex () {
  for (let i = 147; i <= 150; i++) {
    yield i;
  }

  for (let i = 160; i <= 165; i++) {
    yield i;
  }

  yield* [293, 295, 304, 306, 311, 320, 328, 333, 426, 437];

  for (let i = 503; i <= 508; i++) {
    yield i;
  }

  for (let i = 510; i <= 515; i++) {
    yield i;
  }

  for (let i = 517; i <= 526; i++) {
    yield i;
  }

  for (let i = 528; i <= 536; i++) {
    yield i;
  }

  yield* [538, 539];

  for (let i = 541; i <= 545; i++) {
    yield i;
  }
}

function* failModuleIndex () {
  yield 584;

  for (let i = 712; i <= 715; i++) {
    yield i;
  }

  for (let i = 723; i <= 743; i++) {
    yield i;
  }

  for (let i = 745; i <= 762; i++) {
    yield i;
  }

  yield* [794, 912, 913, 924, 965];
}

function* passSkipIndex () {
  yield 174; // invalid ifStatement:
  // Statement => no function declaration
  // expressionStatement lookahead => no function expression

  yield 268; // ^@ character breaks Mocha error reporting

  yield* [987, 1049]; // Hanging due to very deep nesting

  yield* [1260, 1261, 1262, 1263, 1264]; // invalid ifStatement

  yield* [1370, 1371, 1425, 1633]; // Hanging due to very deep nesting
}

function* earlySkipIndex () {
}

function* failSkipIndex () {
  yield* [254, 261]; // Hanging due to very deep nesting
}

function* index (start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export function* fileGen ({
  index,
  moduleIndex,
  skipIndex,
  skip,
  doSkip,
}) {
  let m = moduleIndex.next().value;
  let s = skipIndex.next().value;

  for (let i of index) {
    if (skip && i === s || i === doSkip) {
      s = skipIndex.next().value;
      continue;
    }

    while (i > m) {
      m = moduleIndex.next().value;
    }

    if (i === m) {
      m = moduleIndex.next().value;
      yield i + '.module.js';
    } else {
      yield i + '.script.js';
    }
  }
}

export function* passFile ({end = nPass, start = 0, skip = true}) {
  yield* fileGen({
    index: index(start, end),
    moduleIndex: passModuleIndex(),
    skipIndex: passSkipIndex(),
    start, end, skip, doSkip: 268,
  });
}

export function* earlyFile ({end = nEarly, start = 0, skip = true}) {
  yield* fileGen({
    index: index(start, end),
    moduleIndex: earlyModuleIndex(),
    skipIndex: earlySkipIndex(),
    start, end, skip,
  });
}

export function* failFile ({end = nFail, start = 0, skip = true}) {
  yield* fileGen({
    index: index(start, end),
    moduleIndex: failModuleIndex(),
    skipIndex: failSkipIndex(),
    start, end, skip,
  });
}

export function makeTest ({
  title, grammar, listener, parserDir, listenerDir, rule, dir, files, fail,
}) {
  describe(title, function () {
    this.timeout(60000); // eslint-disable-line no-invalid-this

    const muter = Muter(process.stderr, 'write'); // eslint-disable-line
    const _dir = path.join(process.cwd(), 'node_modules/test262-parser-tests/',
      dir);

    for (let file of files) {
      it(`file ${dir}/${file}`, muted(muter, function () {
        return new Promise((resolve, reject) => {
          translate(`${_dir}/${file}`, {
            grammar, listener, parserDir, listenerDir,
            rule: rule || (file.includes('.module.js') ? 'module' : 'script'),
          })
            .on('error', reject)
            .on('finish', () => {
              const logs = muter.getLogs();
              muter.forget();

              if (fail) {
                if (logs) {
                  resolve();
                } else {
                  reject(new Error(`Test fail/${file} should have failed`));
                }
              } else {
                if (logs) {
                  reject(new Error(logs));
                } else {
                  resolve();
                }
              }
            });
        });
      }));
    }
  });
}
