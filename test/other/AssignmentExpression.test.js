import {makeTest} from './helpers';

makeTest({
  grammar: 'AssignmentExpression',
  dir: 'lexical-grammar',
  files: [
    'AssignmentExpression1',
    'AssignmentExpression2',
    'AssignmentExpression3',
    'AssignmentExpression4',
  ],
});
