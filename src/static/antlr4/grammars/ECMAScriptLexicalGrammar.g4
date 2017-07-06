grammar ECMAScriptLexicalGrammar;

import
  StringLiteralB1,
  Template,
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
// InputElementRegExpOrTemplateTail::
//    WhiteSpace
//    LineTerminator
//    Comment
//    CommonToken
//    RegularExpressionLiteral
//    TemplateSubstitutionTail
// InputElementTemplateTail::
//    WhiteSpace
//    LineTerminator
//    Comment
//    CommonToken
//    DivPunctuator
//    TemplateSubstitutionTail
inputElement
: (WhiteSpace|LineTerminator|Comment|commonToken|divPunctuator
  |rightBracePunctuator|RegularExpressionLiteral|templateSubstitutionTail)
;

// CommonToken::
//    IdentifierName
//    Punctuator
//    NumericLiteral
//    StringLiteral
//    Template
commonToken
: (IdentifierName|punctuator|NumericLiteral|StringLiteral|template)
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

// RightBracePunctuator::
//    }
rightBracePunctuator
: CloseBrace
;

// Template::
//    NoSubstitutionTemplate
//    TemplateHead
template
: (NoSubstitutionTemplate|TemplateHead)
;

// TemplateSubstitutionTail::
//    TemplateMiddle
//    TemplateTail
templateSubstitutionTail
: (TemplateMiddle|TemplateTail)
;
