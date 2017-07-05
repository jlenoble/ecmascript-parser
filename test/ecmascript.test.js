import 'babel-polyfill';
import {makeTest, passFile, earlyFile, failFile} from './helpers';

const grammar = 'ECMAScript';
const listener = 'Translator';

makeTest({
  title: `ECMASCriptParser: Parsing 'pass' tests for`,
  grammar, listener,
  files: passFile(-1),
  dir: 'pass',
});

makeTest({
  title: `ECMASCriptParser: Parsing 'pass-explicit' tests for`,
  grammar, listener,
  files: passFile(-1),
  dir: 'pass-explicit',
});

makeTest({
  title: `ECMASCriptParser: Parsing 'early' tests for`,
  grammar, listener,
  files: earlyFile(-1),
  dir: 'early',
});

makeTest({
  title: `ECMASCriptParser: Parsing 'fail' tests for`,
  grammar, listener,
  files: failFile(-1),
  dir: 'fail',
  fail: true,
});
