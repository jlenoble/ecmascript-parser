/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */
lexer grammar LexicalGrammar;

// Any unicode character from U+0000 to U+10ffff
// Don't know how to write a pattern for that, so wild guess: Use wild card
fragment SOURCE_CHARACTER
: .
;
