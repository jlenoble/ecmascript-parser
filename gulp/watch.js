import gulp from 'gulp';
import {build} from './build';
import {test} from './test';
import {makeParser, fixParser} from './parse';

const allSrcGlob = [
  'src/**/*.js',
  '!src/static/antlr4/parsers/**/*.js',
  'test/**/*.js',
];
const allBuildGlob = [
  'build/src/*.js',
  'build/test/**/*.js',
];
const grammarGlob = [
  'src/static/antlr4/grammars/**/*.g4',
  'build/src/static/antlr4/*.js',
];
const dataGlob = [
  'src/static/data/**/*.*',
  'src/static/antlr4/parsers/ECMAScript*Parser.js',
];

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(allBuildGlob, test);
  gulp.watch(grammarGlob, gulp.series(makeParser, fixParser));
  gulp.watch(dataGlob, test);
  done();
};

gulp.task('watch', watch);
