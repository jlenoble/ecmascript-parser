// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptPassListener = require('./ECMAScriptPassListener').ECMAScriptPassListener;
var grammarFileName = "ECMAScriptPass.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003p<\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0005\u0002",
    "\u0018\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u001f\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006(\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0007\n5\n\n\f\n\u000e\n8\u000b\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0002\u0004\u0004\u0002\u0003\u0003gg\u0004\u0002",
    "??ff\u00027\u0002\u0017\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002",
    "\u0002\u0002\u0006 \u0003\u0002\u0002\u0002\b\"\u0003\u0002\u0002\u0002",
    "\n\'\u0003\u0002\u0002\u0002\f)\u0003\u0002\u0002\u0002\u000e+\u0003",
    "\u0002\u0002\u0002\u0010/\u0003\u0002\u0002\u0002\u00121\u0003\u0002",
    "\u0002\u0002\u00149\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u0004",
    "\u0003\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001a\u0007\u0002",
    "\u0002\u0003\u001a\u0003\u0003\u0002\u0002\u0002\u001b\u001f\u0005\u000e",
    "\b\u0002\u001c\u001f\u0007k\u0002\u0002\u001d\u001f\u0005\u0006\u0004",
    "\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002",
    "\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f\u0005\u0003\u0002\u0002",
    "\u0002 !\t\u0002\u0002\u0002!\u0007\u0003\u0002\u0002\u0002\"#\u0005",
    "\f\u0007\u0002#\t\u0003\u0002\u0002\u0002$(\u0005\f\u0007\u0002%(\u0007",
    "[\u0002\u0002&(\u0007:\u0002\u0002\'$\u0003\u0002\u0002\u0002\'%\u0003",
    "\u0002\u0002\u0002\'&\u0003\u0002\u0002\u0002(\u000b\u0003\u0002\u0002",
    "\u0002)*\u0007k\u0002\u0002*\r\u0003\u0002\u0002\u0002+,\u0005\u0010",
    "\t\u0002,-\u0005\u0012\n\u0002-.\u0007\u000b\u0002\u0002.\u000f\u0003",
    "\u0002\u0002\u0002/0\t\u0003\u0002\u00020\u0011\u0003\u0002\u0002\u0002",
    "16\u0005\u0014\u000b\u000223\u0007\f\u0002\u000235\u0005\u0014\u000b",
    "\u000242\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u000264\u0003\u0002",
    "\u0002\u000267\u0003\u0002\u0002\u00027\u0013\u0003\u0002\u0002\u0002",
    "86\u0003\u0002\u0002\u00029:\u0005\n\u0006\u0002:\u0015\u0003\u0002",
    "\u0002\u0002\u0006\u0017\u001e\'6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'{'", "'('", "')'", "'['", "']'", "'.'", 
                     "'...'", "';'", "','", "'<'", "'>'", "'<='", "'>='", 
                     "'=='", "'!='", "'==='", "'!=='", "'+'", "'-'", "'*'", 
                     "'%'", "'**'", "'++'", "'--'", "'<<'", "'>>'", "'>>>'", 
                     "'&'", "'|'", "'^'", "'!'", "'~'", "'&&'", "'||'", 
                     "'?'", "':'", "'='", "'+='", "'-='", "'*='", "'%='", 
                     "'**='", "'<<='", "'>>='", "'>>>='", "'&='", "'|='", 
                     "'^='", "'=>'", null, "'/'", "'/='", null, "'}'", "'await'", 
                     "'break'", "'case'", "'catch'", "'class'", "'const'", 
                     "'continue'", "'debugger'", "'default'", "'delete'", 
                     "'do'", "'else'", "'export'", "'extends'", "'finally'", 
                     "'for'", "'function'", "'if'", "'import'", "'in'", 
                     "'instanceof'", "'new'", "'return'", "'super'", "'switch'", 
                     "'this'", "'throw'", "'try'", "'typeof'", "'var'", 
                     "'void'", "'while'", "'with'", "'yield'", "'enum'", 
                     null, null, null, null, "'null'", null, "'true'", "'false'", 
                     "'async'", "'let'" ];

var symbolicNames = [ null, "NumericLiteral", "OpenBrace", "OpenParen", 
                      "CloseParen", "OpenBracket", "CloseBracket", "Dot", 
                      "Spread", "SemiColon", "Comma", "LessThan", "GreaterThan", 
                      "LessThanEquals", "GreaterThanEquals", "Equals", "NotEquals", 
                      "IdentityEquals", "IdentityNotEquals", "Plus", "Minus", 
                      "Multiply", "Modulo", "Power", "PlusPlus", "MinusMinus", 
                      "LeftShiftArithmetic", "RightShiftArithmetic", "RightShiftLogical", 
                      "BitAnd", "BitOr", "BitXOr", "Not", "BitNot", "And", 
                      "Or", "QuestionMark", "Colon", "Assign", "PlusAssign", 
                      "MinusAssign", "MultiplyAssign", "ModuloAssign", "PowerAssign", 
                      "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
                      "RightShiftLogicalAssign", "BitAndAssign", "BitOrAssign", 
                      "BitXorAssign", "FatArrow", "Punctuator", "Divide", 
                      "DivideAssign", "DivPunctuator", "CloseBrace", "Await", 
                      "Break", "Case", "Catch", "Class", "Const", "Continue", 
                      "Debugger", "Default", "Delete", "Do", "Else", "Export", 
                      "Extends", "Finally", "For", "Function", "If", "Import", 
                      "In", "Instanceof", "New", "Return", "Super", "Switch", 
                      "This", "Throw", "Try", "Typeof", "Var", "Void", "While", 
                      "With", "Yield", "Enum", "ReservedWord", "Keyword", 
                      "FutureReservedWord", "NullLiteral", "Null", "BooleanLiteral", 
                      "True", "False", "Async", "Let", "StringLiteral", 
                      "BinaryIntegerLiteral", "OctalIntegerLiteral", "HexIntegerLiteral", 
                      "IdentifierName", "MultiLineComment", "SingleLineComment", 
                      "WhiteSpace", "LineTerminator", "LineTerminatorSequence" ];

var ruleNames =  [ "file", "statement", "literal", "identifierReference", 
                   "bindingIdentifier", "identifier", "lexicalDeclaration", 
                   "letOrConst", "bindingList", "lexicalBinding" ];

function ECMAScriptPassParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ECMAScriptPassParser.prototype = Object.create(antlr4.Parser.prototype);
ECMAScriptPassParser.prototype.constructor = ECMAScriptPassParser;

Object.defineProperty(ECMAScriptPassParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ECMAScriptPassParser.EOF = antlr4.Token.EOF;
ECMAScriptPassParser.NumericLiteral = 1;
ECMAScriptPassParser.OpenBrace = 2;
ECMAScriptPassParser.OpenParen = 3;
ECMAScriptPassParser.CloseParen = 4;
ECMAScriptPassParser.OpenBracket = 5;
ECMAScriptPassParser.CloseBracket = 6;
ECMAScriptPassParser.Dot = 7;
ECMAScriptPassParser.Spread = 8;
ECMAScriptPassParser.SemiColon = 9;
ECMAScriptPassParser.Comma = 10;
ECMAScriptPassParser.LessThan = 11;
ECMAScriptPassParser.GreaterThan = 12;
ECMAScriptPassParser.LessThanEquals = 13;
ECMAScriptPassParser.GreaterThanEquals = 14;
ECMAScriptPassParser.Equals = 15;
ECMAScriptPassParser.NotEquals = 16;
ECMAScriptPassParser.IdentityEquals = 17;
ECMAScriptPassParser.IdentityNotEquals = 18;
ECMAScriptPassParser.Plus = 19;
ECMAScriptPassParser.Minus = 20;
ECMAScriptPassParser.Multiply = 21;
ECMAScriptPassParser.Modulo = 22;
ECMAScriptPassParser.Power = 23;
ECMAScriptPassParser.PlusPlus = 24;
ECMAScriptPassParser.MinusMinus = 25;
ECMAScriptPassParser.LeftShiftArithmetic = 26;
ECMAScriptPassParser.RightShiftArithmetic = 27;
ECMAScriptPassParser.RightShiftLogical = 28;
ECMAScriptPassParser.BitAnd = 29;
ECMAScriptPassParser.BitOr = 30;
ECMAScriptPassParser.BitXOr = 31;
ECMAScriptPassParser.Not = 32;
ECMAScriptPassParser.BitNot = 33;
ECMAScriptPassParser.And = 34;
ECMAScriptPassParser.Or = 35;
ECMAScriptPassParser.QuestionMark = 36;
ECMAScriptPassParser.Colon = 37;
ECMAScriptPassParser.Assign = 38;
ECMAScriptPassParser.PlusAssign = 39;
ECMAScriptPassParser.MinusAssign = 40;
ECMAScriptPassParser.MultiplyAssign = 41;
ECMAScriptPassParser.ModuloAssign = 42;
ECMAScriptPassParser.PowerAssign = 43;
ECMAScriptPassParser.LeftShiftArithmeticAssign = 44;
ECMAScriptPassParser.RightShiftArithmeticAssign = 45;
ECMAScriptPassParser.RightShiftLogicalAssign = 46;
ECMAScriptPassParser.BitAndAssign = 47;
ECMAScriptPassParser.BitOrAssign = 48;
ECMAScriptPassParser.BitXorAssign = 49;
ECMAScriptPassParser.FatArrow = 50;
ECMAScriptPassParser.Punctuator = 51;
ECMAScriptPassParser.Divide = 52;
ECMAScriptPassParser.DivideAssign = 53;
ECMAScriptPassParser.DivPunctuator = 54;
ECMAScriptPassParser.CloseBrace = 55;
ECMAScriptPassParser.Await = 56;
ECMAScriptPassParser.Break = 57;
ECMAScriptPassParser.Case = 58;
ECMAScriptPassParser.Catch = 59;
ECMAScriptPassParser.Class = 60;
ECMAScriptPassParser.Const = 61;
ECMAScriptPassParser.Continue = 62;
ECMAScriptPassParser.Debugger = 63;
ECMAScriptPassParser.Default = 64;
ECMAScriptPassParser.Delete = 65;
ECMAScriptPassParser.Do = 66;
ECMAScriptPassParser.Else = 67;
ECMAScriptPassParser.Export = 68;
ECMAScriptPassParser.Extends = 69;
ECMAScriptPassParser.Finally = 70;
ECMAScriptPassParser.For = 71;
ECMAScriptPassParser.Function = 72;
ECMAScriptPassParser.If = 73;
ECMAScriptPassParser.Import = 74;
ECMAScriptPassParser.In = 75;
ECMAScriptPassParser.Instanceof = 76;
ECMAScriptPassParser.New = 77;
ECMAScriptPassParser.Return = 78;
ECMAScriptPassParser.Super = 79;
ECMAScriptPassParser.Switch = 80;
ECMAScriptPassParser.This = 81;
ECMAScriptPassParser.Throw = 82;
ECMAScriptPassParser.Try = 83;
ECMAScriptPassParser.Typeof = 84;
ECMAScriptPassParser.Var = 85;
ECMAScriptPassParser.Void = 86;
ECMAScriptPassParser.While = 87;
ECMAScriptPassParser.With = 88;
ECMAScriptPassParser.Yield = 89;
ECMAScriptPassParser.Enum = 90;
ECMAScriptPassParser.ReservedWord = 91;
ECMAScriptPassParser.Keyword = 92;
ECMAScriptPassParser.FutureReservedWord = 93;
ECMAScriptPassParser.NullLiteral = 94;
ECMAScriptPassParser.Null = 95;
ECMAScriptPassParser.BooleanLiteral = 96;
ECMAScriptPassParser.True = 97;
ECMAScriptPassParser.False = 98;
ECMAScriptPassParser.Async = 99;
ECMAScriptPassParser.Let = 100;
ECMAScriptPassParser.StringLiteral = 101;
ECMAScriptPassParser.BinaryIntegerLiteral = 102;
ECMAScriptPassParser.OctalIntegerLiteral = 103;
ECMAScriptPassParser.HexIntegerLiteral = 104;
ECMAScriptPassParser.IdentifierName = 105;
ECMAScriptPassParser.MultiLineComment = 106;
ECMAScriptPassParser.SingleLineComment = 107;
ECMAScriptPassParser.WhiteSpace = 108;
ECMAScriptPassParser.LineTerminator = 109;
ECMAScriptPassParser.LineTerminatorSequence = 110;

ECMAScriptPassParser.RULE_file = 0;
ECMAScriptPassParser.RULE_statement = 1;
ECMAScriptPassParser.RULE_literal = 2;
ECMAScriptPassParser.RULE_identifierReference = 3;
ECMAScriptPassParser.RULE_bindingIdentifier = 4;
ECMAScriptPassParser.RULE_identifier = 5;
ECMAScriptPassParser.RULE_lexicalDeclaration = 6;
ECMAScriptPassParser.RULE_letOrConst = 7;
ECMAScriptPassParser.RULE_bindingList = 8;
ECMAScriptPassParser.RULE_lexicalBinding = 9;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptPassParser.EOF, 0);
};

FileContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFile(this);
	}
};




ECMAScriptPassParser.FileContext = FileContext;

ECMAScriptPassParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ECMAScriptPassParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.Const || ((((_la - 100)) & ~0x1f) == 0 && ((1 << (_la - 100)) & ((1 << (ECMAScriptPassParser.Let - 100)) | (1 << (ECMAScriptPassParser.StringLiteral - 100)) | (1 << (ECMAScriptPassParser.IdentifierName - 100)))) !== 0)) {
            this.state = 20;
            this.statement();
        }

        this.state = 23;
        this.match(ECMAScriptPassParser.EOF);
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

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.lexicalDeclaration = function() {
    return this.getTypedRuleContext(LexicalDeclarationContext,0);
};

StatementContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptPassParser.IdentifierName, 0);
};

StatementContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatement(this);
	}
};




ECMAScriptPassParser.StatementContext = StatementContext;

ECMAScriptPassParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScriptPassParser.RULE_statement);
    try {
        this.state = 28;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Let:
            this.enterOuterAlt(localctx, 1);
            this.state = 25;
            this.lexicalDeclaration();
            break;
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 2);
            this.state = 26;
            this.match(ECMAScriptPassParser.IdentifierName);
            break;
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.StringLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 27;
            this.literal();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptPassParser.NumericLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptPassParser.StringLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLiteral(this);
	}
};




ECMAScriptPassParser.LiteralContext = LiteralContext;

ECMAScriptPassParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptPassParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.StringLiteral)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

function IdentifierReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_identifierReference;
    return this;
}

IdentifierReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierReferenceContext.prototype.constructor = IdentifierReferenceContext;

IdentifierReferenceContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IdentifierReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterIdentifierReference(this);
	}
};

IdentifierReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitIdentifierReference(this);
	}
};




ECMAScriptPassParser.IdentifierReferenceContext = IdentifierReferenceContext;

ECMAScriptPassParser.prototype.identifierReference = function() {

    var localctx = new IdentifierReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScriptPassParser.RULE_identifierReference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.identifier();
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

function BindingIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_bindingIdentifier;
    return this;
}

BindingIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingIdentifierContext.prototype.constructor = BindingIdentifierContext;

BindingIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

BindingIdentifierContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptPassParser.Yield, 0);
};

BindingIdentifierContext.prototype.Await = function() {
    return this.getToken(ECMAScriptPassParser.Await, 0);
};

BindingIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBindingIdentifier(this);
	}
};

BindingIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBindingIdentifier(this);
	}
};




ECMAScriptPassParser.BindingIdentifierContext = BindingIdentifierContext;

ECMAScriptPassParser.prototype.bindingIdentifier = function() {

    var localctx = new BindingIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ECMAScriptPassParser.RULE_bindingIdentifier);
    try {
        this.state = 37;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 36;
            this.match(ECMAScriptPassParser.Await);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptPassParser.IdentifierName, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitIdentifier(this);
	}
};




ECMAScriptPassParser.IdentifierContext = IdentifierContext;

ECMAScriptPassParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ECMAScriptPassParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.match(ECMAScriptPassParser.IdentifierName);
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

function LexicalDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_lexicalDeclaration;
    return this;
}

LexicalDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LexicalDeclarationContext.prototype.constructor = LexicalDeclarationContext;

LexicalDeclarationContext.prototype.letOrConst = function() {
    return this.getTypedRuleContext(LetOrConstContext,0);
};

LexicalDeclarationContext.prototype.bindingList = function() {
    return this.getTypedRuleContext(BindingListContext,0);
};

LexicalDeclarationContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

LexicalDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLexicalDeclaration(this);
	}
};

LexicalDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLexicalDeclaration(this);
	}
};




ECMAScriptPassParser.LexicalDeclarationContext = LexicalDeclarationContext;

ECMAScriptPassParser.prototype.lexicalDeclaration = function() {

    var localctx = new LexicalDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ECMAScriptPassParser.RULE_lexicalDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.letOrConst();
        this.state = 42;
        this.bindingList();
        this.state = 43;
        this.match(ECMAScriptPassParser.SemiColon);
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

function LetOrConstContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_letOrConst;
    return this;
}

LetOrConstContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetOrConstContext.prototype.constructor = LetOrConstContext;

LetOrConstContext.prototype.Let = function() {
    return this.getToken(ECMAScriptPassParser.Let, 0);
};

LetOrConstContext.prototype.Const = function() {
    return this.getToken(ECMAScriptPassParser.Const, 0);
};

LetOrConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLetOrConst(this);
	}
};

LetOrConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLetOrConst(this);
	}
};




ECMAScriptPassParser.LetOrConstContext = LetOrConstContext;

ECMAScriptPassParser.prototype.letOrConst = function() {

    var localctx = new LetOrConstContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ECMAScriptPassParser.RULE_letOrConst);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptPassParser.Const || _la===ECMAScriptPassParser.Let)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

function BindingListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_bindingList;
    return this;
}

BindingListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingListContext.prototype.constructor = BindingListContext;

BindingListContext.prototype.lexicalBinding = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LexicalBindingContext);
    } else {
        return this.getTypedRuleContext(LexicalBindingContext,i);
    }
};

BindingListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


BindingListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBindingList(this);
	}
};

BindingListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBindingList(this);
	}
};




ECMAScriptPassParser.BindingListContext = BindingListContext;

ECMAScriptPassParser.prototype.bindingList = function() {

    var localctx = new BindingListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ECMAScriptPassParser.RULE_bindingList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.lexicalBinding();
        this.state = 52;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 48;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 49;
            this.lexicalBinding();
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function LexicalBindingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_lexicalBinding;
    return this;
}

LexicalBindingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LexicalBindingContext.prototype.constructor = LexicalBindingContext;

LexicalBindingContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

LexicalBindingContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLexicalBinding(this);
	}
};

LexicalBindingContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLexicalBinding(this);
	}
};




ECMAScriptPassParser.LexicalBindingContext = LexicalBindingContext;

ECMAScriptPassParser.prototype.lexicalBinding = function() {

    var localctx = new LexicalBindingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScriptPassParser.RULE_lexicalBinding);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.bindingIdentifier();
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


exports.ECMAScriptPassParser = ECMAScriptPassParser;
