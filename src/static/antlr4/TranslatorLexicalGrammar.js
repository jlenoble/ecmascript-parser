import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {ECMAScriptLexicalGrammarListener} = require(path.join(base, rel,
  'ECMAScriptLexicalGrammarListener'));

export class TranslatorLexicalGrammar extends ECMAScriptLexicalGrammarListener {
  enterFile (ctx) {
    debugger;
    console.log(ctx.getText());
  }
}
