/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar NumericLiteralA1;
import IdentifierName;

// NumericLiteral::
//    DecimalLiteral
//    BinaryIntegerLiteral
//    OctalIntegerLiteral
//    HexIntegerLiteral
NumericLiteral
: DecimalLiteral
| BinaryIntegerLiteral
| OctalIntegerLiteral
| HexIntegerLiteral
;

// DecimalLiteral::
//    DecimalIntegerLiteral . DecimalDigits[opt] ExponentPart[opt]
//    . DecimalDigits ExponentPart[opt]
//    DecimalIntegerLiteral ExponentPart[opt]
DecimalLiteral
: DecimalIntegerLiteral '.' DecimalDigits? ExponentPart?
| '.' DecimalDigits ExponentPart?
| DecimalIntegerLiteral ExponentPart?
;

// DecimalIntegerLiteral::
//    0
//    NonZeroDigit DecimalDigits[opt]
fragment
DecimalIntegerLiteral
: '0'
| NonZeroDigit DecimalDigits?
;

// DecimalDigits::
//    DecimalDigit
//    DecimalDigits DecimalDigit
fragment
DecimalDigits
: DecimalDigit+
;

// DecimalDigit::one of
//     0123456789
fragment
DecimalDigit
: [0-9]
;

// NonZeroDigit::one of
//     123456789
fragment
NonZeroDigit
: [1-9]
;

// ExponentPart::
//    ExponentIndicator SignedInteger
fragment
ExponentPart
: ExponentIndicator SignedInteger
;

// ExponentIndicator::one of
//    eE
fragment
ExponentIndicator
: [eE]
;

// SignedInteger::
//    DecimalDigits
//    + DecimalDigits
//    - DecimalDigits
fragment
SignedInteger
: DecimalDigits
| '+' DecimalDigits
| '-' DecimalDigits
;

// BinaryIntegerLiteral::
//    0b BinaryDigits
//    0B BinaryDigits
BinaryIntegerLiteral
: '0b' BinaryDigits
| '0B' BinaryDigits
;

// BinaryDigits::
//    BinaryDigit
//    BinaryDigits BinaryDigit
fragment
BinaryDigits
: BinaryDigit+
;

// BinaryDigit::one of
//    01
fragment
BinaryDigit
: [01]
;

// OctalIntegerLiteral::
//    0o OctalDigits
//    0O OctalDigits
OctalIntegerLiteral
: '0o' OctalDigits
| '0O' OctalDigits
;

// OctalDigits::
//    OctalDigit
//    OctalDigits OctalDigit
fragment
OctalDigits
: OctalDigit+
;

// OctalDigit::one of
//    01234567
fragment
OctalDigit
: [0-7]
;

// HexIntegerLiteral::
//    0x HexDigits
//    0X HexDigits
HexIntegerLiteral
: '0x' HexDigits
| '0X' HexDigits
;

// HexDigits::
//     HexDigit
//     HexDigits HexDigit
fragment
HexDigits
: HexDigit+
;

// HexDigit::one of
//     0123456789abcdefABCDEF
fragment
HexDigit
: [0-9a-fA-F]
;
