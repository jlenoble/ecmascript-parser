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
  enterFunctionExpression (ctx) {
    debugger;
    console.log('func expression', ctx.getText());
  }
  enterFunctionDeclaration (ctx) {
    debugger;
    console.log('func declaration', ctx.getText());
  }
  enterObjectLiteral (ctx) {
    debugger;
    console.log('object literal', ctx.getText());
  }
  enterPrimaryExpression (ctx) {
    debugger;
    console.log('primary expression', ctx.getText());
  }
}
