lexer grammar EOS;

EOS
: Discard? (LineTerminatorSequence|EOSComment) Discard? -> channel(HIDDEN)
;

Discard
: (WhiteSpace|DiscardableComment)+ -> channel(HIDDEN)
;

fragment
EOSComment
: MultiLineComment
| SingleLineHTMLCloseComment
;

fragment
DiscardableComment
: SingleLineHTMLOpenComment
| LeadingHTMLCloseComment
| SingleLineDelimitedComment
| SingleLineComment
;
