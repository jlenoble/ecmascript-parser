/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar CommentA1;

// Comment::
//     MultiLineComment
//     SingleLineComment

// MultiLineComment::
//     '/*' MultiLineCommentChars[opt] '*/'
// MultiLineCommentChars::
//     MultiLineNotAsteriskChar MultiLineCommentChars[opt]
//     '*' PostAsteriskCommentChars[opt]
// PostAsteriskCommentChars::
//     MultiLineNotForwardSlashOrAsteriskChar MultiLineCommentChars[opt]
//     '*' PostAsteriskCommentChars[opt]
// MultiLineNotAsteriskChar::
//     SourceCharacter but not '*'
// MultiLineNotForwardSlashOrAsteriskChar::
//     SourceCharacter but not one of '/' or '*'
MultiLineComment
: '/*' .*? '*/' -> channel(HIDDEN)
;

// SingleLineComment::
//     '//' SingleLineCommentChars[opt]
// SingleLineCommentChars::
//     SingleLineCommentChar SingleLineCommentChars[opt]
// SingleLineCommentChar::
//     SourceCharacter but not LineTerminator
SingleLineComment
: '//' ~[\n\r\u2028\u2029]* -> channel(HIDDEN)
;
