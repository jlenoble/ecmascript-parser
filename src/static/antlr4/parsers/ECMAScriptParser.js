// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScript.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptListener = require('./ECMAScriptListener').ECMAScriptListener;
var grammarFileName = "ECMAScript.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00037\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0005\u0002\u0004\u0003\u0002",
    "\u0002\u0002\u0004\u0005\u0007\u0004\u0002\u0002\u0005\u0003\u0003\u0002",
    "\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, "'await'", "'break'", "'case'", "'catch'", 
                     "'class'", "'const'", "'continue'", "'debugger'", "'default'", 
                     "'delete'", "'do'", "'else'", "'export'", "'extends'", 
                     "'finally'", "'for'", "'function'", "'if'", "'import'", 
                     "'in'", "'instanceof'", "'new'", "'return'", "'super'", 
                     "'switch'", "'this'", "'throw'", "'try'", "'typeof'", 
                     "'var'", "'void'", "'while'", "'with'", "'yield'", 
                     "'enum'", null, "'null'", null, "'true'", "'false'" ];

var symbolicNames = [ null, "StringLiteral", "NumericLiteral", "DecimalLiteral", 
                      "BinaryIntegerLiteral", "OctalIntegerLiteral", "HexIntegerLiteral", 
                      "IdentifierName", "ReservedWord", "Keyword", "FutureReservedWord", 
                      "Await", "Break", "Case", "Catch", "Class", "Const", 
                      "Continue", "Debugger", "Default", "Delete", "Do", 
                      "Else", "Export", "Extends", "Finally", "For", "Function", 
                      "If", "Import", "In", "InstanceOf", "New", "Return", 
                      "Super", "Switch", "This", "Throw", "Try", "TypeOf", 
                      "Var", "Void", "While", "With", "Yield", "Enum", "NullLiteral", 
                      "Null", "BooleanLiteral", "True", "False", "WhiteSpace", 
                      "LineTerminator", "LineTerminatorSequence" ];

var ruleNames =  [ "file" ];

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
ECMAScriptParser.StringLiteral = 1;
ECMAScriptParser.NumericLiteral = 2;
ECMAScriptParser.DecimalLiteral = 3;
ECMAScriptParser.BinaryIntegerLiteral = 4;
ECMAScriptParser.OctalIntegerLiteral = 5;
ECMAScriptParser.HexIntegerLiteral = 6;
ECMAScriptParser.IdentifierName = 7;
ECMAScriptParser.ReservedWord = 8;
ECMAScriptParser.Keyword = 9;
ECMAScriptParser.FutureReservedWord = 10;
ECMAScriptParser.Await = 11;
ECMAScriptParser.Break = 12;
ECMAScriptParser.Case = 13;
ECMAScriptParser.Catch = 14;
ECMAScriptParser.Class = 15;
ECMAScriptParser.Const = 16;
ECMAScriptParser.Continue = 17;
ECMAScriptParser.Debugger = 18;
ECMAScriptParser.Default = 19;
ECMAScriptParser.Delete = 20;
ECMAScriptParser.Do = 21;
ECMAScriptParser.Else = 22;
ECMAScriptParser.Export = 23;
ECMAScriptParser.Extends = 24;
ECMAScriptParser.Finally = 25;
ECMAScriptParser.For = 26;
ECMAScriptParser.Function = 27;
ECMAScriptParser.If = 28;
ECMAScriptParser.Import = 29;
ECMAScriptParser.In = 30;
ECMAScriptParser.InstanceOf = 31;
ECMAScriptParser.New = 32;
ECMAScriptParser.Return = 33;
ECMAScriptParser.Super = 34;
ECMAScriptParser.Switch = 35;
ECMAScriptParser.This = 36;
ECMAScriptParser.Throw = 37;
ECMAScriptParser.Try = 38;
ECMAScriptParser.TypeOf = 39;
ECMAScriptParser.Var = 40;
ECMAScriptParser.Void = 41;
ECMAScriptParser.While = 42;
ECMAScriptParser.With = 43;
ECMAScriptParser.Yield = 44;
ECMAScriptParser.Enum = 45;
ECMAScriptParser.NullLiteral = 46;
ECMAScriptParser.Null = 47;
ECMAScriptParser.BooleanLiteral = 48;
ECMAScriptParser.True = 49;
ECMAScriptParser.False = 50;
ECMAScriptParser.WhiteSpace = 51;
ECMAScriptParser.LineTerminator = 52;
ECMAScriptParser.LineTerminatorSequence = 53;

ECMAScriptParser.RULE_file = 0;

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

FileContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptParser.NumericLiteral, 0);
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
        this.state = 2;
        this.match(ECMAScriptParser.NumericLiteral);
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
