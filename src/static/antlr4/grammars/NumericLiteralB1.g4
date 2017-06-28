/* Source: ECMAScript® 2018 Language Specification - Annex B-1 */

lexer grammar NumericLiteralB1;

// B.1.1 Numeric Literals
// The syntax and semantics of 11.8.3 is extended as follows except that this
// extension is not allowed for strict mode code:

// Syntax

// NumericLiteral::
// DecimalLiteral
// BinaryIntegerLiteral
// OctalIntegerLiteral
// HexIntegerLiteral
// LegacyOctalIntegerLiteral
NumericLiteral
: DecimalLiteral
| BinaryIntegerLiteral
| OctalIntegerLiteral
| HexIntegerLiteral
| LegacyOctalIntegerLiteral
;

// LegacyOctalIntegerLiteral::
// 0 OctalDigit
// LegacyOctalIntegerLiteral OctalDigit
fragment
LegacyOctalIntegerLiteral
: '0' OctalDigit+
;

// DecimalIntegerLiteral::
// 0
// NonZeroDigit DecimalDigits[opt]
// NonOctalDecimalIntegerLiteral
fragment
DecimalIntegerLiteral
: '0'
| NonZeroDigit DecimalDigits?
| NonOctalDecimalIntegerLiteral
;

// NonOctalDecimalIntegerLiteral::
// 0 NonOctalDigit
// LegacyOctalLikeDecimalIntegerLiteral NonOctalDigit
// NonOctalDecimalIntegerLiteral DecimalDigit
fragment
NonOctalDecimalIntegerLiteral
: '0' NonOctalDigit DecimalDigit*
| LegacyOctalLikeDecimalIntegerLiteral NonOctalDigit DecimalDigit*
;

// LegacyOctalLikeDecimalIntegerLiteral::
// 0 OctalDigit
// LegacyOctalLikeDecimalIntegerLiteral OctalDigit
fragment
LegacyOctalLikeDecimalIntegerLiteral
: '0' OctalDigit+
;

// NonOctalDigit::one of
// 8 9
fragment
NonOctalDigit
: [89]
;

/*
B.1.1.1 Static Semantics
The MV of LegacyOctalIntegerLiteral::0OctalDigit is the MV of OctalDigit.
The MV of LegacyOctalIntegerLiteral::LegacyOctalIntegerLiteralOctalDigit is (the MV of LegacyOctalIntegerLiteral times 8) plus the MV of OctalDigit.
The MV of DecimalIntegerLiteral::NonOctalDecimalIntegerLiteral is the MV of NonOctalDecimalIntegerLiteral.
The MV of NonOctalDecimalIntegerLiteral::0NonOctalDigit is the MV of NonOctalDigit.
The MV of NonOctalDecimalIntegerLiteral::LegacyOctalLikeDecimalIntegerLiteralNonOctalDigit is (the MV of LegacyOctalLikeDecimalIntegerLiteral times 10) plus the MV of NonOctalDigit.
The MV of NonOctalDecimalIntegerLiteral::NonOctalDecimalIntegerLiteralDecimalDigit is (the MV of NonOctalDecimalIntegerLiteral times 10) plus the MV of DecimalDigit.
The MV of LegacyOctalLikeDecimalIntegerLiteral::0OctalDigit is the MV of OctalDigit.
The MV of LegacyOctalLikeDecimalIntegerLiteral::LegacyOctalLikeDecimalIntegerLiteralOctalDigit is (the MV of LegacyOctalLikeDecimalIntegerLiteral times 10) plus the MV of OctalDigit.
The MV of NonOctalDigit::8 is 8.
The MV of NonOctalDigit::9 is 9.
*/
