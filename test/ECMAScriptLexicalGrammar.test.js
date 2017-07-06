import 'babel-polyfill';
import {makeTest, passFile, earlyFile, failFile} from './helpers';

const grammar = 'ECMAScriptLexicalGrammar';
const listener = 'TranslatorLexicalGrammar';
const rule = 'file';
const skip = false;

const runMode = 'pass';
// 'all', 'pass', 'explicit', 'early', 'fail', 'full'

const starts = {
  pass: 290,
  explicit: 0,
  early: 0,
  fail: 0,
};
const ends = {
  pass: 300,
  explicit: -1,
  early: -1,
  fail: -1,
};

const parseRunMode = mode => {
  const all = mode.includes('all');

  return {
    full: all || mode.includes('full'),
    pass: all || mode.includes('pass'),
    early: all || mode.includes('early'),
    fail: all || mode.includes('fail'),
    explicit: all || mode.includes('explicit'),
  };
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

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'pass' tests for`,
  grammar, listener, rule,
  files: passFile({end: end('pass'), start: start('pass'), skip}),
  dir: 'pass',
});

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'pass-explicit' tests for`,
  grammar, listener, rule,
  files: passFile({end: end('explicit'), start: start('explicit'),
    skip}),
  dir: 'pass-explicit',
});

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'early' tests for`,
  grammar, listener, rule,
  files: earlyFile({end: end('early'), start: start('early'), skip}),
  dir: 'early',
});

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'fail' tests for`,
  grammar, listener, rule,
  files: failFile({end: end('fail'), start: start('fail'), skip}),
  dir: 'fail',
});
