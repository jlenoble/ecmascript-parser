import 'babel-polyfill';
import {makeTest, passFile, earlyFile, failFile} from './helpers';

const grammar = 'ECMAScriptLexicalGrammar';
const listener = 'TranslatorLexicalGrammar';
const rule = 'file';
const skip = false;

const runMode = 'pass'; // 'all' (default), 'none', 'pass',
// 'pass-explicit', 'early', 'fail'

const starts = {
  pass: 1714,
  early: 0,
  fail: 0,
};
const ends = {
  //pass: 1714,
  early: -1,
  fail: -1,
};

const end = test => {
  switch (runMode) {
  case 'none':
    return -1;

  case 'pass': case 'early': case 'fail':
    return (test === runMode) ? ends[test] : -1;

  case 'pass-explicit':
    return (test === 'pass') ? ends[test] : -1;

  case 'all': default:
    return;
  }
};

const start = test => {
  switch (runMode) {
  case 'none':
    return +Infinity;

  case 'pass': case 'early': case 'fail':
    return (test === runMode) ? starts[test] : +Infinity;

  case 'pass-explicit':
    return (test === 'pass') ? starts[test] : +Infinity;

  case 'all': default:
    return 0;
  }
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
  files: passFile({end: end('pass-explicit'), start: start('pass-explicit'),
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
