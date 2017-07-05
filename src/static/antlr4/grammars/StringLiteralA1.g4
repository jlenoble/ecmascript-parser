/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar StringLiteralA1;

// StringLiteral::
//    " DoubleStringCharacters[opt] "
//    ' SingleStringCharacters[opt] '
StringLiteral
: ('"' DoubleStringCharacters? '"'|'\'' SingleStringCharacters? '\'')
;

// DoubleStringCharacters::
//    DoubleStringCharacter DoubleStringCharacters[opt]
fragment
DoubleStringCharacters
: DoubleStringCharacter+
;

// SingleStringCharacters::
//    SingleStringCharacter SingleStringCharacters[opt]
fragment
SingleStringCharacters
: SingleStringCharacter+
;

// DoubleStringCharacter::
//    SourceCharacter but not one of " or \ or LineTerminator
//    \ EscapeSequence
//    LineContinuation
fragment
DoubleStringCharacter
: (~["\\\n\r\u2028\u2029]|'\\' EscapeSequence|LineContinuation)
;

// SingleStringCharacter::
//    SourceCharacter but not one of ' or \ or LineTerminator
//    \ EscapeSequence
//    LineContinuation
fragment
SingleStringCharacter
: (~['\\\n\r\u2028\u2029]|'\\' EscapeSequence|LineContinuation)
;

// LineContinuation::
//    \ LineTerminatorSequence
fragment
LineContinuation
: '\\' LineTerminatorSequence
;

// EscapeSequence::
//    CharacterEscapeSequence
//    0[lookahead ∉ DecimalDigit]
//    HexEscapeSequence
//    UnicodeEscapeSequence
fragment
EscapeSequence
: (CharacterEscapeSequence|'0'|HexEscapeSequence|UnicodeEscapeSequence)
;

// CharacterEscapeSequence::
//     SingleEscapeCharacter
//     NonEscapeCharacter
fragment
CharacterEscapeSequence
: (SingleEscapeCharacter|NonEscapeCharacter)
;

// SingleEscapeCharacter::one of
//     ' " \ b f n r t v
fragment
SingleEscapeCharacter
: ['"\\bfnrtv]
;

// NonEscapeCharacter::
//     SourceCharacter but not one of EscapeCharacter or LineTerminator
fragment
NonEscapeCharacter
: ~['"\\bfnrtuvx0-9\n\r\u2028\u2029]
;

// EscapeCharacter::
//     SingleEscapeCharacter
//     DecimalDigit
//     x
//     u
fragment
EscapeCharacter
: (SingleEscapeCharacter|DecimalDigit|[xu])
;

// HexEscapeSequence::
//     x HexDigit HexDigit
fragment
HexEscapeSequence
: 'x' HexDigit HexDigit
;
