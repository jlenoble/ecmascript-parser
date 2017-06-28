grammar ECMAScriptPass;
import
  PrimaryExpression,
  LeftHandSideExpression,
  BindingIdentifier,
  LexicalDeclaration,
  AssignmentExpression,
  ObjectLiteral,
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
| primaryExpression
;
