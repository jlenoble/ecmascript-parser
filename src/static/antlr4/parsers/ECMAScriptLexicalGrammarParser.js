// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptLexicalGrammar.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptLexicalGrammarListener = require('./ECMAScriptLexicalGrammarListener').ECMAScriptLexicalGrammarListener;
var grammarFileName = "ECMAScriptLexicalGrammar.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007\r\u0004\u0002\t\u0002\u0003\u0002\u0007\u0002\u0006\n\u0002",
    "\f\u0002\u000e\u0002\t\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0002\u0002\u0002\u0002\f\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0004\u0006\u0007\u0003\u0002\u0002\u0005\u0004\u0003\u0002",
    "\u0002\u0002\u0006\t\u0003\u0002\u0002\u0002\u0007\u0005\u0003\u0002",
    "\u0002\u0002\u0007\b\u0003\u0002\u0002\u0002\b\n\u0003\u0002\u0002\u0002",
    "\t\u0007\u0003\u0002\u0002\u0002\n\u000b\u0007\u0002\u0002\u0003\u000b",
    "\u0003\u0003\u0002\u0002\u0002\u0003\u0007"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "InputElementDiv", "Token", "WhiteSpace", "LineTerminator", 
                      "LineTerminatorSequence" ];

var ruleNames =  [ "file" ];

function ECMAScriptLexicalGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ECMAScriptLexicalGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
ECMAScriptLexicalGrammarParser.prototype.constructor = ECMAScriptLexicalGrammarParser;

Object.defineProperty(ECMAScriptLexicalGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ECMAScriptLexicalGrammarParser.EOF = antlr4.Token.EOF;
ECMAScriptLexicalGrammarParser.InputElementDiv = 1;
ECMAScriptLexicalGrammarParser.Token = 2;
ECMAScriptLexicalGrammarParser.WhiteSpace = 3;
ECMAScriptLexicalGrammarParser.LineTerminator = 4;
ECMAScriptLexicalGrammarParser.LineTerminatorSequence = 5;

ECMAScriptLexicalGrammarParser.RULE_file = 0;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.EOF, 0);
};

FileContext.prototype.InputElementDiv = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptLexicalGrammarParser.InputElementDiv);
    } else {
        return this.getToken(ECMAScriptLexicalGrammarParser.InputElementDiv, i);
    }
};


FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitFile(this);
	}
};




ECMAScriptLexicalGrammarParser.FileContext = FileContext;

ECMAScriptLexicalGrammarParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ECMAScriptLexicalGrammarParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptLexicalGrammarParser.InputElementDiv) {
            this.state = 2;
            this.match(ECMAScriptLexicalGrammarParser.InputElementDiv);
            this.state = 7;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 8;
        this.match(ECMAScriptLexicalGrammarParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ECMAScriptLexicalGrammarParser = ECMAScriptLexicalGrammarParser;
