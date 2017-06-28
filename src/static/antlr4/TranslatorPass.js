import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {ECMAScriptPassListener} = require(path.join(base, rel,
  'ECMAScriptPassListener'));

export class TranslatorPass extends ECMAScriptPassListener {
  enterFile (ctx) {
    debugger;
  }
}
