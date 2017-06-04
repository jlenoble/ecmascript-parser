import gulp from 'gulp';
import antlr4 from 'gulp-antlr4';
import replace from 'gulp-replace';

const grammarGlob = [
  'src/static/antlr4/grammars/Testudoc.g4',
];
const parserDir = 'src/static/antlr4/parsers';
const parserGlob = 'src/static/antlr4/parsers/**/*.js';
const dataGlob = [
  'src/static/data/**/*.*',
];
const grammar = 'Testudoc';
const rule = 'file';
const listener = 'Translator';
const listenerDir = 'build/src/static/antlr4';

export const makeParser = () => {
  if (require && require.cache) {
    // Remove parser files from Babel cache
    Object.keys(require.cache).filter(key => {
      return key.includes(parserDir) ||
        key.includes(listenerDir);
    }).forEach(key => {
      delete require.cache[key];
    });
  }

  return gulp.src(grammarGlob, {since: gulp.lastRun(makeParser)})
    .pipe(antlr4({
      'listener': true,
      'parserDir': 'src/static/antlr4/parsers',
      'visitor': false,
    }));
};

export const fixParser = () => {
  return gulp.src(parserGlob, {since: gulp.lastRun(fixParser)})
    .pipe(replace(/ECMAScript/g, 'Testudoc'))
    .pipe(gulp.dest(parserDir));
};

export const translate = () => {
  return gulp.src(dataGlob)
    .pipe(antlr4({
      grammar, parserDir, listener, listenerDir, rule,
    }));
};

gulp.task('translate', gulp.series(makeParser, fixParser, translate));

export const parse = translate;

gulp.task('parse', gulp.series(makeParser, fixParser, translate));
