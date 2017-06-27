import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {ECMAScriptListener} = require(path.join(base, rel,
  'ECMAScriptListener'));

export class Translator extends ECMAScriptListener {
  enterFile (ctx) {
    debugger;
    console.log(ctx.getText());
  }
}
