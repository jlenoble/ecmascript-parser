/* Source: ECMAScript® 2018 Language Specification - Section 11.8.6 */
lexer grammar Template;

// Template::
//     NoSubstitutionTemplate
//     TemplateHead
Template
: NoSubstitutionTemplate
| TemplateHead
;

// NoSubstitutionTemplate::
//     ` TemplateCharacters[opt] `
fragment
NoSubstitutionTemplate
: '`' TemplateCharacters? '`'
;

// TemplateHead::
//     ` TemplateCharacters[opt] ${
fragment
TemplateHead
: '`' TemplateCharacters? '${'
;

// TemplateSubstitutionTail::
//     TemplateMiddle
//     TemplateTail
fragment
TemplateSubstitutionTail
: TemplateMiddle
| TemplateTail
;

// TemplateMiddle::
//     } TemplateCharacters[opt] ${
fragment
TemplateMiddle
: '}' TemplateCharacters? '${'
;

// TemplateTail::
//     } TemplateCharacters[opt] `
fragment
TemplateTail
: '}' TemplateCharacters? '`'
;

// TemplateCharacters::
//     TemplateCharacter TemplateCharacters[opt]
fragment
TemplateCharacters
: TemplateCharacter+
;

// TemplateCharacter::
//     $ [lookahead ≠ {]
//     \ EscapeSequence
//     LineContinuation
//     LineTerminatorSequence
//     SourceCharacter but not one of ` or \ or $ or LineTerminator
fragment
TemplateCharacter
:>>>>>>>>>>>>>>>>>>>>>>
|>>>>>>>>>>>>>>>>>>>>>
|>>>>>>>>>>>>>>>>>>>>>>>>>>>
|>>>>>>>>>>>>>>>>>>>>>>>>>>
|>>>>>>>>>>>>>>>>>>>>>>>>>>
;
