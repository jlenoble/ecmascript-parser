import gulp from 'gulp';
import mocha from 'gulp-mocha';
import _debug from 'gulp-debug';
import {noop} from 'gulp-util'
import './build';
import {makeParser} from './parse';

const debug = _debug; // noop

const testGlob = [
  'build/test/**/*.test.js',
];

export const test = () => {
  return gulp.src(testGlob)
    .pipe(debug())
    .pipe(mocha());
};

export const testSingleParser = grammar => {
  const task = function () {
    return gulp.src(`build/test/${grammar}.test.js`)
      .pipe(debug())
      .pipe(mocha());
  };

  Object.defineProperty(task, 'name', {value: `test ${grammar} grammar`});

  return task;
};

export const inspect = () => {
  return gulp.src(testGlob)
    .pipe(mocha({
      inspectBrk: true,
    }));
};

gulp.task('test', gulp.series(makeParser, 'copy', 'build', test));

gulp.task('debug', gulp.series(makeParser, 'copy', 'build', inspect));
