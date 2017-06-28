// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u00071\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u0012\n\u0002\f\u0002\u000e",
    "\u0002\u0015\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    " \n\u0003\f\u0003\u000e\u0003#\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u00060\n\u0006\u0003\u0013\u0002",
    "\u0007\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\u0003",
    "\u0002\u0004\u0005\u0002\f\f\u000f\u000f\u202a\u202b\r\u0002\u000b\u000b",
    "\r\u000e\"\"\u0087\u0087\u00a2\u00a2\u1682\u1682\u2002\u200c\u2031\u2031",
    "\u2061\u2061\u3002\u3002\uff01\uff01\u00023\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0003\r\u0003\u0002\u0002\u0002\u0005\u001b\u0003\u0002",
    "\u0002\u0002\u0007&\u0003\u0002\u0002\u0002\t*\u0003\u0002\u0002\u0002",
    "\u000b/\u0003\u0002\u0002\u0002\r\u000e\u00071\u0002\u0002\u000e\u000f",
    "\u0007,\u0002\u0002\u000f\u0013\u0003\u0002\u0002\u0002\u0010\u0012",
    "\u000b\u0002\u0002\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0015",
    "\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0013\u0011",
    "\u0003\u0002\u0002\u0002\u0014\u0016\u0003\u0002\u0002\u0002\u0015\u0013",
    "\u0003\u0002\u0002\u0002\u0016\u0017\u0007,\u0002\u0002\u0017\u0018",
    "\u00071\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001a",
    "\b\u0002\u0002\u0002\u001a\u0004\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u00071\u0002\u0002\u001c\u001d\u00071\u0002\u0002\u001d!\u0003\u0002",
    "\u0002\u0002\u001e \n\u0002\u0002\u0002\u001f\u001e\u0003\u0002\u0002",
    "\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002!\"\u0003",
    "\u0002\u0002\u0002\"$\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002",
    "$%\b\u0003\u0002\u0002%\u0006\u0003\u0002\u0002\u0002&\'\t\u0003\u0002",
    "\u0002\'(\u0003\u0002\u0002\u0002()\b\u0004\u0002\u0002)\b\u0003\u0002",
    "\u0002\u0002*+\t\u0002\u0002\u0002+\n\u0003\u0002\u0002\u0002,-\u0007",
    "\u000f\u0002\u0002-0\u0007\f\u0002\u0002.0\u0005\t\u0005\u0002/,\u0003",
    "\u0002\u0002\u0002/.\u0003\u0002\u0002\u00020\f\u0003\u0002\u0002\u0002",
    "\u0006\u0002\u0013!/\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ECMAScriptPassLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ECMAScriptPassLexer.prototype = Object.create(antlr4.Lexer.prototype);
ECMAScriptPassLexer.prototype.constructor = ECMAScriptPassLexer;

ECMAScriptPassLexer.EOF = antlr4.Token.EOF;
ECMAScriptPassLexer.MultiLineComment = 1;
ECMAScriptPassLexer.SingleLineComment = 2;
ECMAScriptPassLexer.WhiteSpace = 3;
ECMAScriptPassLexer.LineTerminator = 4;
ECMAScriptPassLexer.LineTerminatorSequence = 5;

ECMAScriptPassLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ECMAScriptPassLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ECMAScriptPassLexer.prototype.literalNames = [  ];

ECMAScriptPassLexer.prototype.symbolicNames = [ null, "MultiLineComment", 
                                                "SingleLineComment", "WhiteSpace", 
                                                "LineTerminator", "LineTerminatorSequence" ];

ECMAScriptPassLexer.prototype.ruleNames = [ "MultiLineComment", "SingleLineComment", 
                                            "WhiteSpace", "LineTerminator", 
                                            "LineTerminatorSequence" ];

ECMAScriptPassLexer.prototype.grammarFileName = "ECMAScriptPass.g4";



exports.ECMAScriptPassLexer = ECMAScriptPassLexer;

