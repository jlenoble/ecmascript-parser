import 'babel-polyfill';
import {makeTest, passFile, explicitFile, earlyFile, failFile,
  parseRunMode} from './helpers';

const grammar = 'ECMAScript';
const listener = 'Translator';
const rule = 'file';
const skip = true;

const runMode = 'fail';
// 'all', 'pass', 'explicit', 'early', 'fail', 'full'

const starts = {
  pass: 1370,
  explicit: 0,
  early: 0,
  fail: 0,
};
const ends = {
  pass: 1370,
  explicit: -1,
  early: -1,
  fail: 30,
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

// doSkip: except for 268, they are all ambiguous possible regexp or div

makeTest({
  title: `ECMASCript: Lexing 'pass' tests for`,
  grammar, listener, rule,
  files: passFile({end: end('pass'), start: start('pass'), skip}),
  dir: 'pass',
});

makeTest({
  title: `ECMASCript: Lexing 'pass-explicit' tests for`,
  grammar, listener, rule,
  files: explicitFile({end: end('explicit'), start: start('explicit'), skip}),
  dir: 'pass-explicit',
});

makeTest({
  title: `ECMASCript: Lexing 'early' tests for`,
  grammar, listener, rule,
  files: earlyFile({end: end('early'), start: start('early'), skip}),
  dir: 'early',
});

makeTest({
  title: `ECMASCript: Lexing 'fail' tests for`,
  grammar, listener, rule,
  files: failFile({end: end('fail'), start: start('fail'), skip}),
  dir: 'fail',
  fail: true,
});
