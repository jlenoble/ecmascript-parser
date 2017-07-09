import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {ECMAScriptListener} = require(path.join(base, rel,
  'ECMAScriptListener'));

const debug = true;

export class Translator extends ECMAScriptListener {
  enterFile (ctx) {
    debugger;
  }
  exitFile (ctx) {
    if (debug) {
      console.log('file:', ctx.getText());
    }
  }

  exitDeclaration (ctx) {
    if (debug) {
      console.log('Declaration:', ctx.getText());
    }
  }

  exitStatement (ctx) {
    if (debug) {
      console.log('Statement:', ctx.getText());
    }
  }

  exitExpression (ctx) {
    if (debug) {
      console.log('Expression:', ctx.getText());
    }
  }
}
