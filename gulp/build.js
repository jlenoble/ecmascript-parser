import gulp from 'gulp';
import babel from 'gulp-babel';

import sourcemaps from 'gulp-sourcemaps';

const buildDir = 'build';
const allSrcGlob = [
  'src/*.js',
  'src/static/antlr4/Translator*.js',
  'test/**/*.js',
  'gulp/**/*.js'
];

export const build = () => {
  return gulp.src(allSrcGlob, {
    base: process.cwd(),
    since: gulp.lastRun(build)
  })
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir));
};

gulp.task('build', build);
