import 'babel-polyfill';
import {makeTest, passFile, earlyFile, failFile} from './helpers';

const grammar = 'ECMAScript';
const listener = 'Translator';
const rule = 'file';
const skip = false;

const runMode = 'passexplicit';
// 'all', 'pass', 'explicit', 'early', 'fail', 'full'

const starts = {
  pass: 981,
  explicit: 924,
  early: 0,
  fail: 0,
};
const ends = {
  pass: 987,
  explicit: 924,
  early: -1,
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
  files: passFile({end: end('explicit'), start: start('explicit'), skip}),
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
