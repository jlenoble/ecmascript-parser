import 'babel-polyfill';
import {makeTest, passFile, earlyFile, failFile} from './helpers';

const grammar = 'ECMAScript';
const listener = 'Translator';

makeTest({
  grammar, listener,
  files: passFile(),
  dir: 'pass',
});

makeTest({
  grammar, listener,
  files: passFile(),
  dir: 'pass-explicit',
});

makeTest({
  grammar, listener,
  files: earlyFile(),
  dir: 'early',
});

makeTest({
  grammar, listener,
  files: failFile(),
  dir: 'fail',
  fail: false,
});
