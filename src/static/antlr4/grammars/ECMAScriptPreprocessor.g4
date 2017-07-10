grammar ECMAScriptPreprocessor;

@parser::members {
require('../helpers').makeMembers(ECMAScriptPreprocessorParser.prototype);
}

@lexer::members {
require('../helpers').makeMembers(ECMAScriptPreprocessorLexer.prototype);
}

file
: ANY* EOF
;

ANY
: .
;