import 'babel-polyfill';
import {makeAllTests} from './helpers';

makeAllTests({
  grammar: 'ECMAScript', runMode: 'pass', start: 0, end: 2,
});