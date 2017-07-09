import 'babel-polyfill';
import {makeAllTests} from './helpers';

makeAllTests({
  grammar: 'ECMAScript', runMode: 'fullpassexplicitearly', start: 0, end: 2,
});
