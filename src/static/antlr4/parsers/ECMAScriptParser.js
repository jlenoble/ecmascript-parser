// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScript.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptListener = require('./ECMAScriptListener').ECMAScriptListener;
var grammarFileName = "ECMAScript.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0003\u001d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0005\u0002\u000b\n\u0002\u0003\u0003",
    "\u0007\u0003\u000e\n\u0003\f\u0003\u000e\u0003\u0011\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0007\u0004\u0016\n\u0004\f\u0004\u000e",
    "\u0004\u0019\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002",
    "\u0005\u0002\u0004\u0006\u0002\u0002\u0002\u001c\u0002\n\u0003\u0002",
    "\u0002\u0002\u0004\u000f\u0003\u0002\u0002\u0002\u0006\u0017\u0003\u0002",
    "\u0002\u0002\b\u000b\u0005\u0004\u0003\u0002\t\u000b\u0005\u0006\u0004",
    "\u0002\n\b\u0003\u0002\u0002\u0002\n\t\u0003\u0002\u0002\u0002\u000b",
    "\u0003\u0003\u0002\u0002\u0002\f\u000e\u0007\u0003\u0002\u0002\r\f\u0003",
    "\u0002\u0002\u0002\u000e\u0011\u0003\u0002\u0002\u0002\u000f\r\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0012\u0003",
    "\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0012\u0013\u0007",
    "\u0002\u0002\u0003\u0013\u0005\u0003\u0002\u0002\u0002\u0014\u0016\u0007",
    "\u0003\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016\u0019\u0003",
    "\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003",
    "\u0002\u0002\u0002\u0018\u001a\u0003\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u001a\u001b\u0007\u0002\u0002\u0003\u001b\u0007\u0003",
    "\u0002\u0002\u0002\u0005\n\u000f\u0017"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "Token" ];

var ruleNames =  [ "file", "script", "module" ];

function ECMAScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;


    return this;
}

ECMAScriptParser.prototype = Object.create(antlr4.Parser.prototype);
ECMAScriptParser.prototype.constructor = ECMAScriptParser;

Object.defineProperty(ECMAScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ECMAScriptParser.EOF = antlr4.Token.EOF;
ECMAScriptParser.Token = 1;

ECMAScriptParser.RULE_file = 0;
ECMAScriptParser.RULE_script = 1;
ECMAScriptParser.RULE_module = 2;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.script = function() {
    return this.getTypedRuleContext(ScriptContext,0);
};

FileContext.prototype.module = function() {
    return this.getTypedRuleContext(ModuleContext,0);
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFile(this);
	}
};




ECMAScriptParser.FileContext = FileContext;

ECMAScriptParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ECMAScriptParser.RULE_file);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 6;
            this.script();
            break;

        case 2:
            this.state = 7;
            this.module();
            break;

        }
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

function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptParser.EOF, 0);
};

ScriptContext.prototype.Token = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Token);
    } else {
        return this.getToken(ECMAScriptParser.Token, i);
    }
};


ScriptContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterScript(this);
	}
};

ScriptContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitScript(this);
	}
};




ECMAScriptParser.ScriptContext = ScriptContext;

ECMAScriptParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScriptParser.RULE_script);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptParser.Token) {
            this.state = 10;
            this.match(ECMAScriptParser.Token);
            this.state = 15;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 16;
        this.match(ECMAScriptParser.EOF);
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

function ModuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_module;
    return this;
}

ModuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleContext.prototype.constructor = ModuleContext;

ModuleContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptParser.EOF, 0);
};

ModuleContext.prototype.Token = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Token);
    } else {
        return this.getToken(ECMAScriptParser.Token, i);
    }
};


ModuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterModule(this);
	}
};

ModuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitModule(this);
	}
};




ECMAScriptParser.ModuleContext = ModuleContext;

ECMAScriptParser.prototype.module = function() {

    var localctx = new ModuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptParser.RULE_module);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptParser.Token) {
            this.state = 18;
            this.match(ECMAScriptParser.Token);
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 24;
        this.match(ECMAScriptParser.EOF);
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


exports.ECMAScriptParser = ECMAScriptParser;
