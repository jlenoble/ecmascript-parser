// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptLexicalGrammar.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0003\u0007\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0003\u0003\u0003\u0002\u0002\u0002\u0006\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0003\u0005\u0003\u0002\u0002\u0002\u0005\u0006",
    "\u000b\u0002\u0002\u0002\u0006\u0004\u0003\u0002\u0002\u0002\u0003\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ECMAScriptLexicalGrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ECMAScriptLexicalGrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
ECMAScriptLexicalGrammarLexer.prototype.constructor = ECMAScriptLexicalGrammarLexer;

ECMAScriptLexicalGrammarLexer.EOF = antlr4.Token.EOF;
ECMAScriptLexicalGrammarLexer.Token = 1;

ECMAScriptLexicalGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ECMAScriptLexicalGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ECMAScriptLexicalGrammarLexer.prototype.literalNames = [  ];

ECMAScriptLexicalGrammarLexer.prototype.symbolicNames = [ null, "Token" ];

ECMAScriptLexicalGrammarLexer.prototype.ruleNames = [ "Token" ];

ECMAScriptLexicalGrammarLexer.prototype.grammarFileName = "ECMAScriptLexicalGrammar.g4";



exports.ECMAScriptLexicalGrammarLexer = ECMAScriptLexicalGrammarLexer;

