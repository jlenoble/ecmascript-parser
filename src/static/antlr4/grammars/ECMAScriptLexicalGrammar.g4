grammar ECMAScriptLexicalGrammar;

import
  RegularExpressionLiteral,
  Punctuator,
  StringLiteralA1,
  UnicodeEscapeSequence,
  NumericLiteralA1,
  IdentifierName,
  CommentA1,
  LineTerminator,
  WhiteSpace;

@lexer::members {
var path = require('path');
require(path.join(process.cwd(), 'build/src/static/antlr4/BaseLexer'))
  .addOwnMethodsTo(ECMAScriptLexicalGrammarLexer.prototype);
}

file
: inputElement* EOF
;

// SourceCharacter::
//    any Unicode code point

// InputElementDiv::
//    WhiteSpace
//    LineTerminator
//    Comment
//    CommonToken
//    DivPunctuator
//    RightBracePunctuator
// InputElementRegExp::
//    WhiteSpace
//    LineTerminator
//    Comment
//    CommonToken
//    RightBracePunctuator
//    RegularExpressionLiteral
inputElement
: (WhiteSpace|LineTerminator|Comment|commonToken|divPunctuator|CloseBrace
  |RegularExpressionLiteral)
;

// CommonToken::
//    IdentifierName
//    Punctuator
//    NumericLiteral
//    StringLiteral
//    Template
commonToken
: (IdentifierName|punctuator|NumericLiteral|StringLiteral)
;

// Punctuator::
//     { ( ) [ ]
//     . ... ; ,
//     < > <= >=
//     == != === !==
//     + - * % **
//     ++ --
//     << >> >>>
//     & | ^
//     ! ~
//     && ||
//     ? :
//     = += -= *= %= **= <<= >>= >>>= &= |= ^=
//     =>
punctuator
: (OpenBrace    | OpenParen   | CloseParen      | OpenBracket       | CloseBracket
| Dot           | Spread      | SemiColon       | Comma
| LessThan      | GreaterThan | LessThanEquals  | GreaterThanEquals
| Equals        | NotEquals   | IdentityEquals  | IdentityNotEquals
| Plus          | Minus       | Multiply        | Modulo            | Power
| PlusPlus      | MinusMinus
| LeftShiftArithmetic         | RightShiftArithmetic                | RightShiftLogical
| BitAnd        | BitOr       | BitXor
| Not           | BitNot
| And           | Or
| QuestionMark  | Colon
| Assign        | PlusAssign  | MinusAssign     | MultiplyAssign    | ModuloAssign      | PowerAssign
| LeftShiftArithmeticAssign   | RightShiftArithmeticAssign          | RightShiftLogicalAssign
| BitAndAssign  | BitOrAssign | BitXorAssign
| FatArrow)
;

// DivPunctuator::
//    /
//    /=
divPunctuator
: (Divide|DivideAssign)
;
