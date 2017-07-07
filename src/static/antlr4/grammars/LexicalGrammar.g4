/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

// A.1 Lexical Grammar
grammar LexicalGrammar;
import
  Template,
  RegularExpressionLiteral,
  Punctuator,
  ReservedWord,
  StringLiteralA1,
  UnicodeEscapeSequence,
  NumericLiteralA1,
  IdentifierName,
  CommentA1,
  WhiteSpace,
  LineTerminator;

// TemplateLiteral[Yield, Await]:
//    NoSubstitutionTemplate
//    TemplateHead Expression[+In, ?Yield, ?Await] TemplateSpans[?Yield, ?Await]
templateLiteral
: (TemplateHead expression templateSpans|NoSubstitutionTemplate)
;

// TemplateSpans[Yield, Await]:
//    TemplateTail
//    TemplateMiddleList[?Yield, ?Await] TemplateTail
templateSpans
: templateMiddleList? TemplateTail
;

// TemplateMiddleList[Yield, Await]:
//    TemplateMiddle Expression[+In, ?Yield, ?Await]
//    TemplateMiddleList[?Yield, ?Await] TemplateMiddle Expression[+In, ?Yield, ?Await]
templateMiddleList
: TemplateMiddle expression+
;

identifierName
: (IdentifierName|reservedWord|miscIdentifier)
;
