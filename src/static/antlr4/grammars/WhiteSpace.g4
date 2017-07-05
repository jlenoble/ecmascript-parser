/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar WhiteSpace;

// WhiteSpace::
//     <TAB>      U+0009    CHARACTER TABULATION          <HT>, &Tab;
//     <VT>       U+000B    LINE TABULATION
//     <FF>       U+000C    FORM FEED
//     <SP>       U+0020    SPACE
//     <NBSP>     U+00A0    NO-BREAK SPACE                &nbsp;
//     <ZWNBSP>   U+FEFF    ZERO WIDTH NO-BREAK SPACE
//
//     <USP> Other category “Zs”: Any other Unicode “Space_Separator” code point
// After some Googling and excluding the "line terminators":
//                U+180E    MONGOLIAN VOWEL SEPARATOR
//                U+1680    OGHAM SPACE MARK
//                U+2000    EN QUAD
//                U+2001    EM QUAD
//                U+2002    EN SPACE                      &ensp;
//                U+2003    EM SPACE                      &emsp;
//                U+2004    THREE-PER-EM SPACE            &emsp13;
//                U+2005    FOUR-PER-EM SPACE             &emsp14;
//                U+2006    SIX-PER-EM SPACE
//                U+2007    FIGURE SPACE                  &numsp;
//                U+2008    PUNCTUATION SPACE             &puncsp;
//                U+2009    THIN SPACE                    &thinsp;
//                U+200A    HAIR SPACE                    &hairsp;
//                U+202F    NARROW NO-BREAK SPACE
//     <MMSP>     U+205F    MEDIUM MATHEMATICAL SPACE     &MediumSpace;
//                U+3000    IDEOGRAPHIC SPACE
WhiteSpace
: [\t\u000b\u000c\u0020\u00a0\ufeff\u1680\u180e\u2000-\u200a\u202f\u205f\u3000] -> channel(HIDDEN)
;
