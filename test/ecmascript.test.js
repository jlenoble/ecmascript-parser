import 'babel-polyfill';
import {makeTest, passFile, earlyFile, failFile} from './helpers';

const grammar = 'ECMAScript';
const listener = 'Translator';
const skip = true;

makeTest({
  title: `ECMASCriptParser: Parsing 'pass' tests for`,
  grammar, listener,
  files: passFile({end: -1, skip}),
  dir: 'pass',
});

makeTest({
  title: `ECMASCriptParser: Parsing 'pass-explicit' tests for`,
  grammar, listener,
  files: passFile({end: -1, skip}),
  dir: 'pass-explicit',
});

makeTest({
  title: `ECMASCriptParser: Parsing 'early' tests for`,
  grammar, listener,
  files: earlyFile({end: -1, skip}),
  dir: 'early',
});

makeTest({
  title: `ECMASCriptParser: Parsing 'fail' tests for`,
  grammar, listener,
  files: failFile({end: -1, skip}),
  dir: 'fail',
  fail: true,
});
