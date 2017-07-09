import 'babel-polyfill';
import {makeAllTests} from './helpers';

makeAllTests({
  parserDir: 'build/src/static/antlr4/parsers',
  grammar: 'ECMAScriptPreprocessor', rule: 'file',
  runMode: 'pass', start: 0, end: -1,
});
