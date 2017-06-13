/* Source: ECMAScript® 2018 Language Specification - Annex B-1 */

lexer grammar StringLiteralB1;
import StringLiteralA1;

// B.1.2 String Literals
// The syntax and semantics of 11.8.4 is extended as follows except that this extension is not allowed for strict mode code:

// Syntax

// EscapeSequence::
//    CharacterEscapeSequence
//    LegacyOctalEscapeSequence
//    HexEscapeSequence
//    UnicodeEscapeSequence
fragment
EscapeSequence
: CharacterEscapeSequence
| LegacyOctalEscapeSequence
| HexEscapeSequence
| UnicodeEscapeSequence
;

// LegacyOctalEscapeSequence::
//    OctalDigit [lookahead ∉ OctalDigit]
//    ZeroToThree OctalDigit [lookahead ∉ OctalDigit]
//    FourToSeven OctalDigit
//    ZeroToThree OctalDigit OctalDigit
fragment
LegacyOctalEscapeSequence
: OctalDigit
| ZeroToThree OctalDigit
| FourToSeven OctalDigit
| ZeroToThree OctalDigit OctalDigit
;

// ZeroToThree::one of
//    0123
fragment
ZeroToThree
: [0-3]
;

// FourToSeven::one of
//    4567
fragment
FourToSeven
: [4-7]
;

// This definition of EscapeSequence is not used in strict mode or when parsing TemplateCharacter.

/*
B.1.2.1 Static Semantics
The SV of EscapeSequence::LegacyOctalEscapeSequence is the SV of the LegacyOctalEscapeSequence.
The SV of LegacyOctalEscapeSequence::OctalDigit is the code unit whose value is the MV of the OctalDigit.
The SV of LegacyOctalEscapeSequence::ZeroToThreeOctalDigit is the code unit whose value is (8 times the MV of the ZeroToThree) plus the MV of the OctalDigit.
The SV of LegacyOctalEscapeSequence::FourToSevenOctalDigit is the code unit whose value is (8 times the MV of the FourToSeven) plus the MV of the OctalDigit.
The SV of LegacyOctalEscapeSequence::ZeroToThreeOctalDigitOctalDigit is the code unit whose value is (64 (that is, 82) times the MV of the ZeroToThree) plus (8 times the MV of the first OctalDigit) plus the MV of the second OctalDigit.
The MV of ZeroToThree::0 is 0.
The MV of ZeroToThree::1 is 1.
The MV of ZeroToThree::2 is 2.
The MV of ZeroToThree::3 is 3.
The MV of FourToSeven::4 is 4.
The MV of FourToSeven::5 is 5.
The MV of FourToSeven::6 is 6.
The MV of FourToSeven::7 is 7.
*/
