// Generated from /home/jason/Projets/testudoc/src/static/antlr4/grammars/Testudoc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TestudocListener = require('./TestudocListener').TestudocListener;
var grammarFileName = "Testudoc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\r-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004 \n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004+\u000b\u0004",
    "\u0003\u0004\u0002\u0003\u0006\u0005\u0002\u0004\u0006\u0002\u0004\u0003",
    "\u0002\u0004\u0005\u0003\u0002\u0006\u0007\u00020\u0002\t\u0003\u0002",
    "\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002",
    "\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002\u0002",
    "\n\u000b\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b",
    "\f\u0003\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000e\u0005",
    "\u0006\u0004\u0002\u000e\u000f\u0007\f\u0002\u0002\u000f\u0017\u0003",
    "\u0002\u0002\u0002\u0010\u0011\u0007\n\u0002\u0002\u0011\u0012\u0007",
    "\u0003\u0002\u0002\u0012\u0013\u0005\u0006\u0004\u0002\u0013\u0014\u0007",
    "\f\u0002\u0002\u0014\u0017\u0003\u0002\u0002\u0002\u0015\u0017\u0007",
    "\f\u0002\u0002\u0016\r\u0003\u0002\u0002\u0002\u0016\u0010\u0003\u0002",
    "\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0005\u0003\u0002",
    "\u0002\u0002\u0018\u0019\b\u0004\u0001\u0002\u0019 \u0007\u000b\u0002",
    "\u0002\u001a \u0007\n\u0002\u0002\u001b\u001c\u0007\b\u0002\u0002\u001c",
    "\u001d\u0005\u0006\u0004\u0002\u001d\u001e\u0007\t\u0002\u0002\u001e",
    " \u0003\u0002\u0002\u0002\u001f\u0018\u0003\u0002\u0002\u0002\u001f",
    "\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002\u0002 ",
    ")\u0003\u0002\u0002\u0002!\"\f\u0007\u0002\u0002\"#\t\u0002\u0002\u0002",
    "#(\u0005\u0006\u0004\b$%\f\u0006\u0002\u0002%&\t\u0003\u0002\u0002&",
    "(\u0005\u0006\u0004\u0007\'!\u0003\u0002\u0002\u0002\'$\u0003\u0002",
    "\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*\u0007\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002\u0007\u000b\u0016\u001f\')"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'*'", "'/'", "'+'", "'-'", "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "ID", 
                      "INT", "NEWLINE", "WS" ];

var ruleNames =  [ "file", "stat", "expr" ];

function TestudocParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TestudocParser.prototype = Object.create(antlr4.Parser.prototype);
TestudocParser.prototype.constructor = TestudocParser;

Object.defineProperty(TestudocParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TestudocParser.EOF = antlr4.Token.EOF;
TestudocParser.T__0 = 1;
TestudocParser.T__1 = 2;
TestudocParser.T__2 = 3;
TestudocParser.T__3 = 4;
TestudocParser.T__4 = 5;
TestudocParser.T__5 = 6;
TestudocParser.T__6 = 7;
TestudocParser.ID = 8;
TestudocParser.INT = 9;
TestudocParser.NEWLINE = 10;
TestudocParser.WS = 11;

TestudocParser.RULE_file = 0;
TestudocParser.RULE_stat = 1;
TestudocParser.RULE_expr = 2;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestudocParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof TestudocListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof TestudocListener ) {
        listener.exitFile(this);
	}
};




TestudocParser.FileContext = FileContext;

TestudocParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TestudocParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.stat();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TestudocParser.T__5) | (1 << TestudocParser.ID) | (1 << TestudocParser.INT) | (1 << TestudocParser.NEWLINE))) !== 0));
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

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestudocParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatContext.prototype.NEWLINE = function() {
    return this.getToken(TestudocParser.NEWLINE, 0);
};

StatContext.prototype.ID = function() {
    return this.getToken(TestudocParser.ID, 0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof TestudocListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof TestudocListener ) {
        listener.exitStat(this);
	}
};




TestudocParser.StatContext = StatContext;

TestudocParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TestudocParser.RULE_stat);
    try {
        this.state = 20;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 11;
            this.expr(0);
            this.state = 12;
            this.match(TestudocParser.NEWLINE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
            this.match(TestudocParser.ID);
            this.state = 15;
            this.match(TestudocParser.T__0);
            this.state = 16;
            this.expr(0);
            this.state = 17;
            this.match(TestudocParser.NEWLINE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 19;
            this.match(TestudocParser.NEWLINE);
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

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestudocParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.INT = function() {
    return this.getToken(TestudocParser.INT, 0);
};

ExprContext.prototype.ID = function() {
    return this.getToken(TestudocParser.ID, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof TestudocListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof TestudocListener ) {
        listener.exitExpr(this);
	}
};



TestudocParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, TestudocParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TestudocParser.INT:
            this.state = 23;
            this.match(TestudocParser.INT);
            break;
        case TestudocParser.ID:
            this.state = 24;
            this.match(TestudocParser.ID);
            break;
        case TestudocParser.T__5:
            this.state = 25;
            this.match(TestudocParser.T__5);
            this.state = 26;
            this.expr(0);
            this.state = 27;
            this.match(TestudocParser.T__6);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 39;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 37;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TestudocParser.RULE_expr);
                    this.state = 31;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 32;
                    _la = this._input.LA(1);
                    if(!(_la===TestudocParser.T__1 || _la===TestudocParser.T__2)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 33;
                    this.expr(6);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TestudocParser.RULE_expr);
                    this.state = 34;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 35;
                    _la = this._input.LA(1);
                    if(!(_la===TestudocParser.T__3 || _la===TestudocParser.T__4)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 36;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 41;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


TestudocParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TestudocParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TestudocParser = TestudocParser;
