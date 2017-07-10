grammar ECMAScriptPreprocessor;

@parser::members {
require('../helpers').makeParserMembers(ECMAScriptPreprocessorParser.prototype);
}

@lexer::members {
require('../helpers').makeLexerMembers(ECMAScriptPreprocessorLexer.prototype);
}

file
: ANY* EOF
;

ANY
: .
;