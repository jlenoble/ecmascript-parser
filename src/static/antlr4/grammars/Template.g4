/* Source: ECMAScript® 2018 Language Specification - Annex A-1 and A-2 */

grammar Template;

// TemplateLiteral[Yield, Await]:
//    NoSubstitutionTemplate
//    TemplateHead Expression[+In, ?Yield, ?Await] TemplateSpans[?Yield, ?Await]
templateLiteral
: NoSubstitutionTemplate
/*| TemplateHead expression_In templateSpans*/
;
/*templateLiteral_Yield
: NoSubstitutionTemplate
| TemplateHead expression_In_Yield templateSpans_Yield
;
templateLiteral_Await
: NoSubstitutionTemplate
| TemplateHead expression_In_Await templateSpans_Await
;
templateLiteral_Yield_Await
: NoSubstitutionTemplate
| TemplateHead expression_In_Yield_Await templateSpans_Yield_Await
;*/

// TemplateSpans[Yield, Await]:
//    TemplateTail
//    TemplateMiddleList[?Yield, ?Await] TemplateTail
/*templateSpans
: TemplateTail
| templateMiddleList TemplateTail
;
templateSpans_Yield
: TemplateTail
| templateMiddleList_Yield TemplateTail
;
templateSpans_Await
: TemplateTail
| templateMiddleList_Await TemplateTail
;
templateSpans_Yield_Await
: TemplateTail
| templateMiddleList_Yield_Await TemplateTail
;*/

// TemplateMiddleList[Yield, Await]:
//    TemplateMiddle Expression[+In, ?Yield, ?Await]
//    TemplateMiddleList[?Yield, ?Await] TemplateMiddle Expression[+In, ?Yield, ?Await]
/*templateMiddleList
: TemplateMiddle expression_In+
;
templateMiddleList_Yield
: TemplateMiddle expression_In_Yield+
;
templateMiddleList_Await
: TemplateMiddle expression_In_Await+
;
templateMiddleList_Yield_Await
: TemplateMiddle expression_In_Yield_Await+
;*/

// Template::
//    NoSubstitutionTemplate
//    TemplateHead

// NoSubstitutionTemplate::
//    ` TemplateCharacters[opt] `
NoSubstitutionTemplate
: '`' TemplateCharacters? '`'
;

// TemplateHead::
//    ` TemplateCharacters[opt] ${
/*TemplateHead
: '`' TemplateCharacters? '${'
;*/

// TemplateSubstitutionTail::
//    TemplateMiddle
//    TemplateTail
/*TemplateSubstitutionTail
: TemplateMiddle
| TemplateTail
;*/

// TemplateMiddle::
//    } TemplateCharacters[opt] ${
/*TemplateMiddle
: '}' TemplateCharacters? '${'
;*/

// TemplateTail::
//    } TemplateCharacters[opt] `
/*TemplateTail
: '}' TemplateCharacters? '`'
;*/

// TemplateCharacters::
//    TemplateCharacter TemplateCharacters[opt]
fragment
TemplateCharacters
: TemplateCharacter+
;

// TemplateCharacter::
//    $ [lookahead ≠ {]
//    \ EscapeSequence
//    LineContinuation
//    LineTerminatorSequence
//    SourceCharacter but not one of ` or \ or $ or LineTerminator
fragment
TemplateCharacter
: '$'
| '\\' EscapeSequence
| LineContinuation
| LineTerminatorSequence
| ~[`\\$\n\r\u2028\u2029]
;
