import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {ECMAScriptLexicalGrammarListener} = require(path.join(base, rel,
  'ECMAScriptLexicalGrammarListener'));

const debug = true;

export class TranslatorLexicalGrammar extends ECMAScriptLexicalGrammarListener {
  enterFile (ctx) {
    debugger;
  }
  exitFile (ctx) {
    if (debug) {
      console.log('file:', ctx.getText());
    }
  }

  exitInputElement (ctx) {
    if (debug) {
      console.log('inputElement:', ctx.getText());
    }
  }
}
