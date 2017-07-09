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

  yield* [280, 283, 289, 290, 294, 318]; // Context dependent RegExp or Divide

  yield 350; // Context dependent Template
  yield 1012; // advanced assignPattern initialization
  yield 1164; // Context dependent Template

  yield* [1183, 1184]; // yield/functionExpression name edge cases

  // yield* [987, 1049]; // Hanging due to very deep nesting
  yield* [1260, 1261, 1262, 1263, 1264]; // invalid ifStatement
  // yield* [1370, 1371]; // Hanging due to very deep nesting
  yield* [1417, 1418]; // yield/functionExpression name edge cases

  yield 1425; // Hanging due to very deep nesting
  yield 1529; // .target in utf16
  yield 1633; // Hanging due to very deep nesting
  yield 1791; // Context dependent RegExp or Divide
  yield 1840; // Context dependent Template
}

function* explicitSkipIndex () {
  yield 118; // Context dependent RegExp or Divide
  yield 174; // invalid ifStatement:
  // Statement => no function declaration
  // expressionStatement lookahead => no function expression

  yield 268; // ^@ character breaks Mocha error reporting

  yield* [279, 280, 283, 289, 290, 294, 295,
    318]; // Context dependent RegExp or Divide

  yield 350; // Context dependent Template

  yield* [853, 885, 899, 901]; // Context dependent RegExp or Divide

  yield 1012; // advanced assignPattern initialization
  yield 1164; // Context dependent Template

  yield* [1183, 1184]; // yield/functionExpression name edge cases

  // yield* [987, 1049]; // Hanging due to very deep nesting
  yield* [1260, 1261, 1262, 1263, 1264]; // invalid ifStatement
  // yield* [1370, 1371]; // Hanging due to very deep nesting
  yield* [1417, 1418]; // yield/functionExpression name edge cases

  yield 1425; // Hanging due to very deep nesting
  yield 1529; // .target in utf16
  yield 1633; // Hanging due to very deep nesting

  yield* [1714, 1791]; // Context dependent RegExp or Divide

  yield 1840; // Context dependent Template
  yield 1882; // Context dependent RegExp or Divide
}

function* earlySkipIndex () {
  yield 90; // advanced assignPattern initialization
  yield* [111, 112]; // yield/functionExpression name edge cases
  yield 135; // enum
  yield* [550, 552, 553]; // invalid ifStatement
  yield 558; // (...a) missing =>
  yield 560; // (((...a))) missing =>
}

function* failSkipIndex () {
  // yield* [254, 261]; // Hanging due to very deep nesting
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
    while (i > s) {
      s = skipIndex.next().value;
    }

    if (skip && i === s || doSkip.includes(i)) {
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

export function* passFile ({end = nPass, start = 0, skip = true,
  doSkip = [268]}) {
  yield* fileGen({
    index: index(start, end),
    moduleIndex: passModuleIndex(),
    skipIndex: passSkipIndex(),
    start, end, skip, doSkip,
  });
}

export function* explicitFile ({end = nPass, start = 0, skip = true,
  doSkip = [268]}) {
  yield* fileGen({
    index: index(start, end),
    moduleIndex: passModuleIndex(),
    skipIndex: explicitSkipIndex(),
    start, end, skip, doSkip,
  });
}

export function* earlyFile ({end = nEarly, start = 0, skip = true}) {
  yield* fileGen({
    index: index(start, end),
    moduleIndex: earlyModuleIndex(),
    skipIndex: earlySkipIndex(),
    start, end, skip, doSkip: [],
  });
}

export function* failFile ({end = nFail, start = 0, skip = true}) {
  yield* fileGen({
    index: index(start, end),
    moduleIndex: failModuleIndex(),
    skipIndex: failSkipIndex(),
    start, end, skip, doSkip: [],
  });
}

export const parseRunMode = mode => {
  const all = mode.includes('all');

  return {
    full: all || mode.includes('full'),
    pass: all || mode.includes('pass'),
    early: all || mode.includes('early'),
    fail: all || mode.includes('fail'),
    explicit: all || mode.includes('explicit'),
  };
};

export function makeTest ({
  title, grammar, listener, parserDir, listenerDir, rule, dir, files, fail,
}) {
  describe(title, function () {
    this.timeout(3600000); // eslint-disable-line no-invalid-this

    const muter = Muter(process.stderr, 'write'); // eslint-disable-line
    const _dir = path.join(process.cwd(), 'node_modules/test262-parser-tests/',
      dir);

    for (let file of files) {
      it(`file ${dir}/${file}`, muted(muter, function () {
        return new Promise((resolve, reject) => {
          translate(`${_dir}/${file}`, {
            grammar, parserDir, listenerDir, rule,
            listener: `${grammar}Translator`,
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

export function makeAllTests ({grammar, parserDir, listener, rule, skip = true,
  runMode, start = {}, end = {}, doSkip = [268]}) {
  listener || (listener = `${grammar}Translator`); // eslint-disable-line

  const options = parseRunMode(runMode);
  const _end = test => {
    if (options[test]) {
      return options['full'] ? undefined : (typeof end === 'number' && end) ||
        end[test] || -1;
    }

    return -1;
  };
  const _start = test => {
    if (options[test]) {
      return options['full'] ? 0 : (typeof start === 'number' && start) ||
        start[test] || 0;
    }

    return +Infinity;
  };

  // doSkip: except for 268, they are all ambiguous possible regexp or div

  makeTest({
    title: `${grammar}: Parsing 'pass' tests for`,
    grammar, parserDir, listener, rule,
    files: passFile({end: _end('pass'), start: _start('pass'), skip, doSkip}),
    dir: 'pass',
  });

  makeTest({
    title: `${grammar}: Parsing 'pass-explicit' tests for`,
    grammar, listener, rule,
    files: explicitFile({end: _end('explicit'), start: _start('explicit'), skip,
      doSkip}),
    dir: 'pass-explicit',
  });

  makeTest({
    title: `${grammar}: Lexing 'early' tests for`,
    grammar, parserDir, listener, rule,
    files: earlyFile({end: _end('early'), start: _start('early'), skip}),
    dir: 'early',
  });

  makeTest({
    title: `${grammar}: Parsing 'fail' tests for`,
    grammar, parserDir, listener, rule,
    files: failFile({end: _end('fail'), start: _start('fail'), skip}),
    dir: 'fail',
    fail: true,
  });
}
