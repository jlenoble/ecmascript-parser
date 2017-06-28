import {makeTest} from './helpers';

makeTest({
  grammar: 'Comment',
  dir: 'lexical-grammar',
  files: [
    'MultiLineComment',
    'SingleLineComment',
  ],
});
