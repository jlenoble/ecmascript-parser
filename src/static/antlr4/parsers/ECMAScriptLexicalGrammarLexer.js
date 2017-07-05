// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptLexicalGrammar.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007 \b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006\u001d\n\u0006\u0003\u0006\u0003\u0006",
    "\u0002\u0002\u0007\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\u0003\u0002\u0004\r\u0002\u000b\u000b\r\u000e\"\"\u00a2\u00a2",
    "\u1682\u1682\u1810\u1810\u2002\u200c\u2031\u2031\u2061\u2061\u3002\u3002",
    "\uff01\uff01\u0005\u0002\f\f\u000f\u000f\u202a\u202b\u0002 \u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002\u0002\u0002\u0005\u000f",
    "\u0003\u0002\u0002\u0002\u0007\u0011\u0003\u0002\u0002\u0002\t\u0015",
    "\u0003\u0002\u0002\u0002\u000b\u001c\u0003\u0002\u0002\u0002\r\u000e",
    "\u0005\u0007\u0004\u0002\u000e\u0004\u0003\u0002\u0002\u0002\u000f\u0010",
    "\u000b\u0002\u0002\u0002\u0010\u0006\u0003\u0002\u0002\u0002\u0011\u0012",
    "\t\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0014",
    "\b\u0004\u0002\u0002\u0014\b\u0003\u0002\u0002\u0002\u0015\u0016\t\u0003",
    "\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0018\b\u0005",
    "\u0002\u0002\u0018\n\u0003\u0002\u0002\u0002\u0019\u001a\u0007\u000f",
    "\u0002\u0002\u001a\u001d\u0007\f\u0002\u0002\u001b\u001d\u0005\t\u0005",
    "\u0002\u001c\u0019\u0003\u0002\u0002\u0002\u001c\u001b\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001f\b\u0006\u0002",
    "\u0002\u001f\f\u0003\u0002\u0002\u0002\u0004\u0002\u001c\u0003\u0002",
    "\u0003\u0002"].join("");


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
ECMAScriptLexicalGrammarLexer.InputElementDiv = 1;
ECMAScriptLexicalGrammarLexer.Token = 2;
ECMAScriptLexicalGrammarLexer.WhiteSpace = 3;
ECMAScriptLexicalGrammarLexer.LineTerminator = 4;
ECMAScriptLexicalGrammarLexer.LineTerminatorSequence = 5;

ECMAScriptLexicalGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ECMAScriptLexicalGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ECMAScriptLexicalGrammarLexer.prototype.literalNames = [  ];

ECMAScriptLexicalGrammarLexer.prototype.symbolicNames = [ null, "InputElementDiv", 
                                                          "Token", "WhiteSpace", 
                                                          "LineTerminator", 
                                                          "LineTerminatorSequence" ];

ECMAScriptLexicalGrammarLexer.prototype.ruleNames = [ "InputElementDiv", 
                                                      "Token", "WhiteSpace", 
                                                      "LineTerminator", 
                                                      "LineTerminatorSequence" ];

ECMAScriptLexicalGrammarLexer.prototype.grammarFileName = "ECMAScriptLexicalGrammar.g4";



exports.ECMAScriptLexicalGrammarLexer = ECMAScriptLexicalGrammarLexer;

