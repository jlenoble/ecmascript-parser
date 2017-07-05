import 'babel-polyfill';
import {makeTest, passFile, earlyFile, failFile} from './helpers';

const grammar = 'ECMAScriptLexicalGrammar';
const listener = 'TranslatorLexicalGrammar';
const rule = 'file';
const skip = false;

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'pass' tests for`,
  grammar, listener, rule,
  files: passFile({skip}),
  dir: 'pass',
});

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'pass-explicit' tests for`,
  grammar, listener, rule,
  files: passFile({skip}),
  dir: 'pass-explicit',
});

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'early' tests for`,
  grammar, listener, rule,
  files: earlyFile({skip}),
  dir: 'early',
});

makeTest({
  title: `ECMASCriptLexicalGrammar: Lexing 'fail' tests for`,
  grammar, listener, rule,
  files: failFile({skip}),
  dir: 'fail',
});
