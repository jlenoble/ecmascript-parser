grammar ECMAScriptPass;
import
  UnicodeEscapeSequence,
  NumericLiteralA1,
  IdentifierName,
  Comment,
  WhiteSpace;

file
: literal? EOF
;

literal
: IdentifierName
| NumericLiteral
;