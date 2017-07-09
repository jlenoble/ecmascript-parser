import gulp from 'gulp';
import mocha from 'gulp-mocha';
import './build';
import {makeParser, fixParser} from './parse';

const testGlob = [
  'build/test/**/*.test.js',
];

export const test = () => {
  return gulp.src(testGlob)
    .pipe(mocha());
};

export const testSingleGrammar = grammar => {
  const task =  function () {
    return gulp.src(`build/test/${grammar}.test.js`)
      .pipe(mocha());
  };

  Object.defineProperty(task, 'name', {value: `test${grammar}Parser`});

  return task;
};

export const debug = () => {
  return gulp.src(testGlob)
    .pipe(mocha({
      inspectBrk: true,
    }));
};

gulp.task('test', gulp.series(makeParser, fixParser, 'build', test));

gulp.task('debug', gulp.series(makeParser, fixParser, 'build', debug));
