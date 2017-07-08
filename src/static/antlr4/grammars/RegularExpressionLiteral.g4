/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar RegularExpressionLiteral;

// RegularExpressionLiteral::
//     / RegularExpressionBody / RegularExpressionFlags
RegularExpressionLiteral
: {this.isValidContextForRegExp()}? '/' RegularExpressionBody
  '/' RegularExpressionFlags
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
: (~[\n\r\u2028\u2029*\\/[]|RegularExpressionBackslashSequence
  |RegularExpressionClass)
;

// RegularExpressionChar::
//     RegularExpressionNonTerminator but not one of \ or / or [
//     RegularExpressionBackslashSequence
//     RegularExpressionClass
fragment
RegularExpressionChar
: (~[\n\r\u2028\u2029\\/[]|RegularExpressionBackslashSequence
  |RegularExpressionClass)
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
: ~[\n\r\u2028\u2029]
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
: (~[\n\r\u2028\u2029\\\]]|RegularExpressionBackslashSequence)
;

// RegularExpressionFlags::
//     [empty]
//     RegularExpressionFlags IdentifierPart
fragment
RegularExpressionFlags
: IdentifierPart*
;
