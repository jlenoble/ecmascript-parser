grammar ECMAScriptPass;
import
  PrimaryExpression,
  LeftHandSideExpression,
  BindingIdentifier,
  LexicalDeclaration,
  AssignmentExpression,
  ObjectLiteral,
  NumericLiteralB1,
  LexicalGrammar;

file
: statement? EOF
;

statement
: lexicalDeclaration
| IdentifierName
| primaryExpression
;
