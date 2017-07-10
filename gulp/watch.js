import gulp from 'gulp';
import path from 'path';
import './build';
import {test, testSingleParser} from './test';
import {makeSingleParser} from './parse';

const grammars = [
  'ECMAScript',
  'ECMAScriptPreprocessor',
];
const globs = {};

const antlr4Dir = 'src/static/antlr4';
const grammarDir = path.join(antlr4Dir, 'grammars');
const parserDir = path.join(antlr4Dir, 'parsers');

const parserFiles = [`${parserDir}/**/*.js`];
const customFiles = ['src/static/antlr4/*.js'];
const customTestFiles = grammars.map(grammar => {
  return `test/${grammar}.test.js`;
});

// const dataGlob = [
//   'src/static/data/**/*',
// ];

// All files that must pass through Babel,
// so exclude generated parser files
const allSrcGlob = [
  'src/**/*.js',
  ...parserFiles.map(file => '!' + file),
  'test/**/*.js',
];

// All files that when changed trigger all tests,
// so exclude parser files and custom files in build/src dir
// and custom test files in build/test dir
const allBuildGlob = [
  'build/src/**/*.js',
  ...parserFiles.map(file => '!' + path.join('build', file)),
  ...customFiles.map(file => '!' + path.join('build', file)),
  'build/test/**/*.js',
  ...customTestFiles.map(file => '!' + path.join('build', file)),
];

export const watch = done => {
  gulp.watch(allSrcGlob, gulp.parallel('build'));
  gulp.watch(allBuildGlob, test);

  // Individual tasks
  grammars.forEach(grammar => {
    const otherGrammars = grammars.filter(gram => gram !== grammar);

    globs[grammar] = {
      // Grammars that must trigger a remake of a top single one,
      // So exclude the other top grammars and copied parser files
      // But do include all custm js files and dependencies
      // to relink parser to current files
      remakeSingleParser: [
        `${grammarDir}/*.g4`,
        ...otherGrammars.map(grammar => `!${grammarDir}/${grammar}.g4`),
        `build/src/**/*.js`,
        ...parserFiles.map(file => '!' + path.join('build', file)),
        ...otherGrammars.reduce((array, grammar) => {
          return array.concat([
            `!build/${antlr4Dir}/${grammar}BaseParser.js`,
            `!build/${antlr4Dir}/${grammar}BaseLexer.js`,
            `!build/${antlr4Dir}/${grammar}Translator.js`,
          ]);
        }, []),
      ],
      copySingleParser: [
        `${parserDir}/${grammar}.tokens`,
        `${parserDir}/${grammar}Lexer.tokens`,
        `${parserDir}/${grammar}Lexer.js`,
        `${parserDir}/${grammar}Parser.js`,
        `${parserDir}/${grammar}Listener.js`,
      ],
      testSingleParser: [
        `build/${parserDir}/${grammar}Parser.js`, // Only one: don't trigger 3x
        `build/test/${grammar}.test.js`,
      ],
    };

    gulp.watch(globs[grammar].remakeSingleParser, makeSingleParser(grammar));
    gulp.watch(globs[grammar].copySingleParser, gulp.parallel('copy'));
    gulp.watch(globs[grammar].testSingleParser, testSingleParser(grammar));
  });

  // gulp.watch(dataGlob, test);
  done();
};

gulp.task('watch', watch);
