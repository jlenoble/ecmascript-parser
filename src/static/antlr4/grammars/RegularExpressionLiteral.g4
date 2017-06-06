/* Source: ECMAScript® 2018 Language Specification - Section 11.8.5 */
lexer grammar RegularExpressionLiteral;

// RegularExpressionLiteral::
//     / RegularExpressionBody / RegularExpressionFlags
RegularExpressionLiteral
: '/' RegularExpressionBody '/' RegularExpressionFlags
;

// RegularExpressionBody::
//     RegularExpressionFirstChar RegularExpressionChars
// RegularExpressionChars::
//     [empty]
//     RegularExpressionChars RegularExpressionChar
fragment
RegularExpressionBody
: RegularExpressionFirstChar RegularExpressionChar*
;

// RegularExpressionFirstChar::
//     RegularExpressionNonTerminator but not one of * or \ or / or [
//     RegularExpressionBackslashSequence
//     RegularExpressionClass
fragment
RegularExpressionFirstChar
:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
| RegularExpressionBackslashSequence
| RegularExpressionClass
;

// RegularExpressionChar::
//     RegularExpressionNonTerminator but not one of \ or / or [
//     RegularExpressionBackslashSequence
//     RegularExpressionClass
fragment
RegularExpressionChar
:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
| RegularExpressionBackslashSequence
| RegularExpressionClass
;

// RegularExpressionBackslashSequence::
//     \ RegularExpressionNonTerminator
fragment
RegularExpressionBackslashSequence
: '\\' RegularExpressionNonTerminator
;

// RegularExpressionNonTerminator::
//     SourceCharacter but not LineTerminator
fragment
RegularExpressionNonTerminator
:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
;

// RegularExpressionClass::
//     [ RegularExpressionClassChars ]
// RegularExpressionClassChars::
//     [empty]
//     RegularExpressionClassChars RegularExpressionClassChar
fragment
RegularExpressionClass
: '[' RegularExpressionClassChar* ']'
;

// RegularExpressionClassChar::
//     RegularExpressionNonTerminator but not one of ] or \
//     RegularExpressionBackslashSequence
fragment
RegularExpressionClassChar
:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
| RegularExpressionBackslashSequence
;

// RegularExpressionFlags::
//     [empty]
//     RegularExpressionFlags IdentifierPart
fragment
RegularExpressionFlags
:
| RegularExpressionFlags IdentifierPart
;
