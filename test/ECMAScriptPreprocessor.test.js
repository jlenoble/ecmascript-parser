import 'babel-polyfill';
import {makeAllTests} from './helpers';

makeAllTests({
  grammar: 'ECMAScriptPreprocessor', runMode: 'pass', start: 0, end: -1,
});
