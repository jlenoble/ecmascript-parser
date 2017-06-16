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

export const debug = () => {
  return gulp.src(testGlob)
    .pipe(mocha({
      inspect: true,
      debugBrk: true,
    }));
};

gulp.task('test', gulp.series(gulp.series(makeParser, fixParser, 'build'),
  test));

gulp.task('debug', gulp.series(gulp.series(makeParser, fixParser, 'build'),
  debug));
