import gulp from 'gulp';
import antlr4 from 'gulp-antlr4';
// import replace from 'gulp-replace';

const antlr4Dir = 'src/static/antlr4';

const grammarGlob = [
  'src/static/antlr4/grammars/ECMAScript*.g4',
];
const parserDir = 'src/static/antlr4/parsers';
// const parserGlob = 'src/static/antlr4/parsers/**/*.js';
const dataGlob = [
  'node_modules/test262-parser-tests/pass/*.js',
];
const grammar = 'ECMAScript';
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

  return gulp.src(grammarGlob)
    .pipe(antlr4({
      'listener': true,
      'parserDir': 'src/static/antlr4/parsers',
      'visitor': false,
    }));
};

export const makeSingleParser = grammar => {
  const task = function () {
    if (require && require.cache) {
      // Remove parser files from Babel cache
      Object.keys(require.cache).filter(key => {
        return key.includes(parserDir) ||
          key.includes(listenerDir);
      }).forEach(key => {
        delete require.cache[key];
      });
    }

    return gulp.src(`${antlr4Dir}/grammars/${grammar}.g4`)
      .pipe(antlr4({
        listener: true,
        parserDir,
        visitor: false,
      }));
  };

  Object.defineProperty(task, 'name', {value: `make ${grammar} grammar`});

  return task;
};

export const fixParser = done => {
  /* return gulp.src(parserGlob, {since: gulp.lastRun(fixParser)})
    .pipe(replace(/ECMAScript/g, 'ECMAScriptParser'))
    .pipe(gulp.dest(parserDir));*/
  done();
};

export const translate = (file, options = {}) => {
  return gulp.src(file || dataGlob)
    .pipe(antlr4({
      grammar: options.grammar || grammar,
      listener: options.listener || listener,
      parserDir: options.parserDir || parserDir,
      listenerDir: options.listenerDir || listenerDir,
      rule: options.rule || rule,
    }));
};

export const makeTranslate = grammar => {
  const task = function (file) {
    return gulp.src(file, rule)
      .pipe(antlr4({
        grammar: rammar,
        listener: `${grammar}Translator`,
        parserDir, listenerDir, rule,
      }));
  };

  Object.defineProperty(task, 'name', {value: `translate using the grammar ${
    grammar} and the target ${rule}`});

  return task;
};

gulp.task('translate', gulp.series(makeParser, fixParser, translate));

export const parse = translate;

gulp.task('parse', gulp.series(/* makeParser, fixParser, */translate));
