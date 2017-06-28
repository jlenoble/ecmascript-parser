grammar ECMAScriptPass;
import
  BindingIdentifier,
  LexicalDeclaration,
  NumericLiteralB1,
  Punctuator,
  ReservedWord,
  StringLiteralA1,
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
| IdentifierName
| literal
;

literal
: NumericLiteral
| StringLiteral
;