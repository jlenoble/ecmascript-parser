grammar ECMAScriptLexicalGrammar;

import WhiteSpace;

file
: InputElementDiv* EOF
;

// InputElementDiv::
//    WhiteSpace
//    LineTerminator
//    Comment
//    CommonToken
//    DivPunctuator
//    RightBracePunctuator
InputElementDiv
: WhiteSpace
;

Token
: .
;
