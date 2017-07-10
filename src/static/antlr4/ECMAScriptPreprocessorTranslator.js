import path from 'path';

const base = path.join(process.cwd(), 'build');
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {ECMAScriptPreprocessorListener} = require(path.join(base, rel,
  'ECMAScriptPreprocessorListener'));

const debug = true;

export class ECMAScriptPreprocessorTranslator
  extends ECMAScriptPreprocessorListener {
  enterFile () {
    if (debug) {
      debugger;
    }
  }
  exitFile (ctx) {
    if (debug) {
      console.log('File', ctx.getText());
    }
  }
}
