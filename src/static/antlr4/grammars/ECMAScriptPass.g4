grammar ECMAScriptPass;
import
  Expressions,
  Statements,
  LexicalDeclaration,
  NumericLiteralB1,
  LexicalGrammar;

file
: statementList? EOF
;

eos
: SemiColon
| {this._input.LT(1).type === ECMAScriptPassParser.EOF}?
;
