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

gulp.task('test', gulp.series(gulp.series(makeParser, fixParser, 'build'),
  test));
