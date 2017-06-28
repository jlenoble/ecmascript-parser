/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar UnicodeEscapeSequence;

// UnicodeEscapeSequence::
//     'u' Hex4Digits
//     'u{' HexDigits '}'
fragment
UnicodeEscapeSequence
: 'u' Hex4Digits
| 'u{' HexDigits '}'
;

// Hex4Digits::
//   HexDigit HexDigit HexDigit HexDigit
fragment
Hex4Digits
: HexDigit HexDigit HexDigit HexDigit
;
