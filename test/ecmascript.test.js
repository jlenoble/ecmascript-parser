import 'babel-polyfill';
import {makeTest, passFile, earlyFile, failFile} from './helpers';

const grammar = 'ECMAScriptPass';
const listener = 'TranslatorPass';

makeTest({
  grammar, listener,
  files: passFile(10),
  dir: 'pass',
});

makeTest({
  grammar, listener,
  files: passFile(-1),
  dir: 'pass-explicit',
});

makeTest({
  grammar, listener,
  files: earlyFile(-1),
  dir: 'early',
});

makeTest({
  grammar, listener,
  files: failFile(-1),
  dir: 'fail',
  fail: true,
});
