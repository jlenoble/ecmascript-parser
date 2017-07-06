/* Source: ECMAScript® 2018 Language Specification - Annex A-1 and A-2 */

lexer grammar Template;

// TemplateHead::
//    ` TemplateCharacters[opt] ${
TemplateHead
: '`' (TemplateCharacter|'{'|'}')*? '${'
;

// TemplateMiddle::
//    } TemplateCharacters[opt] ${
TemplateMiddle
: '}' (TemplateCharacter|'{')*? '${'
;

// TemplateTail::
//    } TemplateCharacters[opt] `
TemplateTail
: '}' TemplateCharacter*? '`'
;

// NoSubstitutionTemplate::
//    ` TemplateCharacters[opt] `
NoSubstitutionTemplate
: '`' TemplateCharacter*? '`'
;

// TemplateCharacters::
//    TemplateCharacter TemplateCharacters[opt]
// TemplateCharacter::
//    $ [lookahead ≠ {]
//    \ EscapeSequence
//    LineContinuation
//    LineTerminatorSequence
//    SourceCharacter but not one of ` or \ or $ or LineTerminator
fragment
TemplateCharacter
: ('$'|'\\' EscapeSequence|LineContinuation|LineTerminatorSequence
  |~[`{}\\$\n\r\u2028\u2029])
;
