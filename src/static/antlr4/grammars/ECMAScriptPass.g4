grammar ECMAScriptPass;
import
  Expressions,
  Statements,
  LexicalDeclaration,
  NumericLiteralB1,
  LexicalGrammar;

file
: statementList?
;

eos
: SemiColon
| EOF
;
