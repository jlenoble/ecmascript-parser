import gulp from 'gulp';
import del from 'del';

export const clean = () => {
  return del(['build', 'src/static/antlr4/parsers']);
};

gulp.task('clean', clean);
