import {makeTest} from './helpers';

makeTest({
  grammar: 'NumericLiteral',
  dir: 'lexical-grammar',
  files: [
    'NumericLiteral1',
    'NumericLiteral2',
    'NumericLiteral3',
    'NumericLiteral4',
  ],
});
