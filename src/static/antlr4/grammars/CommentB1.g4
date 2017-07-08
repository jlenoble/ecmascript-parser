/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar CommentB1;

// Comment::
//    MultiLineComment
//    SingleLineComment
//    SingleLineHTMLOpenComment
//    SingleLineHTMLCloseComment
//    SingleLineDelimitedComment

// MultiLineComment::
//    /* FirstCommentLine[opt] LineTerminator MultiLineCommentChars[opt] */
//        HTMLCloseComment[opt]
// FirstCommentLine::
//    SingleLineDelimitedCommentChars
MultiLineComment
: '/*' SingleLineDelimitedCommentChars? LineTerminator .*? '*/'
  HTMLCloseComment? -> channel(HIDDEN)
;

// SingleLineHTMLOpenComment::
//    <!-- SingleLineCommentChars[opt]
SingleLineHTMLOpenComment
: '<!--' ~[\n\r\u2028\u2029]* -> channel(HIDDEN)
;

// SingleLineHTMLCloseComment::
//    LineTerminatorSequence HTMLCloseComment
SingleLineHTMLCloseComment
: LineTerminatorSequence HTMLCloseComment -> channel(HIDDEN)
;

// SingleLineDelimitedComment::
//    /* SingleLineDelimitedCommentChars[opt] */
SingleLineDelimitedComment
: '/*' ~[\n\r\u2028\u2029]*? '*/' -> channel(HIDDEN)
;

LeadingHTMLCloseComment
: {this.isStartOfFile()}? HTMLCloseComment -> channel(HIDDEN)
;

// HTMLCloseComment::
//    WhiteSpaceSequence[opt] SingleLineDelimitedCommentSequence[opt] -->
//        SingleLineCommentChars[opt]
fragment
HTMLCloseComment
: WhiteSpace? SingleLineDelimitedCommentSequence? '--' '>' ~[\n\r\u2028\u2029]*
;

// WhiteSpaceSequence::
//    WhiteSpace WhiteSpaceSequence[opt]
// SingleLineDelimitedCommentSequence::
//    SingleLineDelimitedComment WhiteSpaceSequence[opt]
//        SingleLineDelimitedCommentSequence[opt]
fragment
SingleLineDelimitedCommentSequence
: SingleLineDelimitedComment WhiteSpace? (SingleLineDelimitedComment
  WhiteSpace? )*
;

// SingleLineDelimitedCommentChars::
//    SingleLineNotAsteriskChar SingleLineDelimitedCommentChars[opt]
//    * SingleLinePostAsteriskCommentChars[opt]
fragment
SingleLineDelimitedCommentChars
: SingleLineNotAsteriskChar SingleLineDelimitedCommentChars?
| Multiply SingleLinePostAsteriskCommentChars?
;

// SingleLineNotAsteriskChar::
//    SourceCharacter but not one of * or LineTerminator
fragment
SingleLineNotAsteriskChar
: ~[*\n\r\u2028\u2029]
;

// SingleLinePostAsteriskCommentChars::
//    SingleLineNotForwardSlashOrAsteriskChar
//        SingleLineDelimitedCommentChars[opt]
//    * SingleLinePostAsteriskCommentChars[opt]
fragment
SingleLinePostAsteriskCommentChars
: SingleLineNotForwardSlashOrAsteriskChar SingleLineDelimitedCommentChars?
| Multiply SingleLinePostAsteriskCommentChars?
;

// SingleLineNotForwardSlashOrAsteriskChar::
//    SourceCharacter but not one of / or * or LineTerminator
fragment
SingleLineNotForwardSlashOrAsteriskChar
: ~[*/\n\r\u2028\u2029]
;

// Similar to a MultiLineComment that contains a line terminator code point,
// a SingleLineHTMLCloseComment is considered to be a LineTerminator for
// purposes of parsing by the syntactic grammar.
