import 'babel-polyfill';
import {makeAllTests} from './helpers';

makeAllTests({
  parserDir: 'build/src/static/antlr4/parsers',
  grammar: 'ECMAScript', rule: 'file',
  runMode: 'pass', start: 0, end: 3,
});
