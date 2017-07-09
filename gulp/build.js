import gulp from 'gulp';
import babel from 'gulp-babel';

import sourcemaps from 'gulp-sourcemaps';

const buildDir = 'build';
const allSrcGlob = [
  'src/*.js',
  'src/static/antlr4/*.js',
  'test/*.js',
  'gulp/**/*.js',
];

export const build = () => {
  return gulp.src(allSrcGlob, {
    base: process.cwd(),
    since: gulp.lastRun(build),
  })
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir));
};

export const copy = () => {
  return gulp.src([
    'src/static/antlr4/parsers/*.js',
    'src/static/antlr4/parsers/*.tokens',
  ], {
    base: process.cwd(),
    since: gulp.lastRun(copy),
  })
    .pipe(gulp.dest(buildDir));
};

gulp.task('build', build);
gulp.task('copy', copy);
