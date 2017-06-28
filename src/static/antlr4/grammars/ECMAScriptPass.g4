grammar ECMAScriptPass;
import
  BindingIdentifier,
  LexicalDeclaration,
  NumericLiteralB1,
  Punctuator,
  ReservedWord,
  UnicodeEscapeSequence,
  NumericLiteralA1,
  IdentifierName,
  Comment,
  WhiteSpace;

file
: statement? EOF
;

statement
: lexicalDeclaration
| literal
;

literal
: IdentifierName
| NumericLiteral
;