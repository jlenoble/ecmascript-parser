import gulp from 'gulp';
import './build';
import {test, testSingleGrammar} from './test';
import {makeSingleParser} from './parse';

const grammars = [
  'ECMAScript',
];
const globs = {};

const antlr4Dir = 'src/static/antlr4';

const allSrcGlob = [
  'src/**/*.js',
  `!${antlr4Dir}/parsers/**/*.js`,
  'test/**/*.js',
];

const allBuildGlob = [
  'build/src/**/*.js',
  `!build/${antlr4Dir}/parsers/**/*.js`,
  'build/test/**/*.js',
].concat(grammars.map(grammar => {
  return `!build/test/${grammar}.test.js`;
}));

// const dataGlob = [
//   'src/static/data/**/*',
// ];

grammars.forEach(grammar => {
  const otherGrammars = grammars.filter(gram => gram !== grammar);
  const excludePattern = otherGrammars.map(grammar => {
    return `!${antlr4Dir}/grammars/${grammar}.g4`;
  });

  globs[grammar] = [
    `${antlr4Dir}/grammars/*.g4`,
  ]
    .concat(excludePattern)
    .concat([
      `build/${antlr4Dir}/${grammar}BaseLexer.js`,
      `build/${antlr4Dir}/${grammar}BaseParser.js`,
      `build/${antlr4Dir}/${grammar}Translator.js`,
    ]);
});

export const watch = done => {
  gulp.watch(allSrcGlob, gulp.parallel('build', 'copy'));
  gulp.watch(allBuildGlob, test);

  grammars.forEach(grammar => {
    gulp.watch(globs[grammar], gulp.series(
      makeSingleParser(grammar), testSingleGrammar(grammar)));

    gulp.watch(`build/test/${grammar}.test.js`, testSingleGrammar(grammar));
  });

  // gulp.watch(dataGlob, test);
  done();
};

gulp.task('watch', watch);
