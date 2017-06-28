grammar ECMAScriptPass;
import
  Expressions,
  Statements,
  NumericLiteralB1,
  LexicalGrammar;

file
: statementList? EOF
;

eos
: SemiColon
| {this._input.LT(1).type === ECMAScriptPassParser.EOF}?
;
