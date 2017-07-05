grammar ECMAScript;

@parser::members {
}

file
: (script|module)
;

script
: Token* EOF
;

module
: Token* EOF
;

Token
: .
;