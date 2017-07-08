import 'babel-polyfill';
import {makeTest, passFile, earlyFile, parseRunMode} from './helpers';

const grammar = 'ECMAScriptLexicalGrammar';
const listener = 'TranslatorLexicalGrammar';
const rule = 'file';
const skip = false;

const runMode = 'pass';
// 'all', 'pass', 'explicit', 'early', 'full'

const starts = {
  pass: 0,
  explicit: 0,
  early: 0,
};
const ends = {
  pass: -1,
  explicit: -1,
  early: -1,
};

const options = parseRunMode(runMode);

const end = test => {
  if (options[test]) {
    return options['full'] ? undefined : ends[test];
  }

  return -1;
};

const start = test => {
  if (options[test]) {
    return options['full'] ? 0 : starts[test];
  }

  return +Infinity;
};

const genPass = function* () {
  for (let i = 279; i <= 297; i++) {
    if (i === 282 || i === 293 || i === 295) {
      continue;
    }
    yield i;
  }
};

// doSkip: except for 268, they are all ambiguous possible regexp or div

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'pass' tests for`,
  grammar, listener, rule,
  files: passFile({end: end('pass'), start: start('pass'), skip,
    doSkip: [/* 268 */, 275, ...genPass(), 318, 319, 1791]}),
  dir: 'pass',
});

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'pass-explicit' tests for`,
  grammar, listener, rule,
  files: passFile({end: end('explicit'), start: start('explicit'), skip,
    doSkip: [118, /* 268 */, 275, ...genPass(), 295, 318, 319, 853, 885,
      899, 901, 1714, 1791, 1882]}),
  dir: 'pass-explicit',
});

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'early' tests for`,
  grammar, listener, rule,
  files: earlyFile({end: end('early'), start: start('early'), skip}),
  dir: 'early',
});

// Some tests fail for lexical reasons, others for syntactic reasons
// So skip altogether lexing tests

/* makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'fail' tests for`,
  grammar, listener, rule,
  files: failFile({end: end('fail'), start: start('fail'), skip}),
  dir: 'fail',
}); */
