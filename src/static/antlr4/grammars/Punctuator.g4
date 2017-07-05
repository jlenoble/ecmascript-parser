/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar Punctuator;

OpenBrace                  : '{';
OpenParen                  : '(';
CloseParen                 : ')';
OpenBracket                : '[';
CloseBracket               : ']';

Dot                        : '.';
Spread                     : '...';
SemiColon                  : ';';
Comma                      : ',';

LessThan                   : '<';
GreaterThan                : '>';
LessThanEquals             : '<=';
GreaterThanEquals          : '>=';

Equals                     : '==';
NotEquals                  : '!=';
IdentityEquals             : '===';
IdentityNotEquals          : '!==';

Plus                       : '+';
Minus                      : '-';
Multiply                   : '*';
Modulo                     : '%';
Power                      : '**';

PlusPlus                   : '++';
MinusMinus                 : '--';

LeftShiftArithmetic        : '<<';
RightShiftArithmetic       : '>>';
RightShiftLogical          : '>>>';

BitAnd                     : '&';
BitOr                      : '|';
BitXor                     : '^';

Not                        : '!';
BitNot                     : '~';

And                        : '&&';
Or                         : '||';

QuestionMark               : '?';
Colon                      : ':';

Assign                     : '=';
PlusAssign                 : '+=';
MinusAssign                : '-=';
MultiplyAssign             : '*=';
ModuloAssign               : '%=';
PowerAssign                : '**=';

LeftShiftArithmeticAssign  : '<<=';
RightShiftArithmeticAssign : '>>=';
RightShiftLogicalAssign    : '>>>=';

BitAndAssign               : '&=';
BitOrAssign                : '|=';
BitXorAssign               : '^=';

FatArrow                   : '=>';

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
Punctuator
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

Divide                     : '/';
DivideAssign               : '/=';

// DivPunctuator::
//    /
//    /=
DivPunctuator
: (Divide|DivideAssign)
;

// RightBracePunctuator::
//    }
CloseBrace                 : '}';
