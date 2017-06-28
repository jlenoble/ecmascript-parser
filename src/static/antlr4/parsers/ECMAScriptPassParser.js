// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptPassListener = require('./ECMAScriptPassListener').ECMAScriptPassListener;
var grammarFileName = "ECMAScriptPass.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003o;\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0005\u0002",
    "\u0018\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u001e\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\'\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0007\n4\n\n\f\n\u000e\n7\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0002\u0004\u0004\u0002ffjj\u0004\u0002>>ee\u00025\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0004\u001d\u0003\u0002\u0002\u0002\u0006",
    "\u001f\u0003\u0002\u0002\u0002\b!\u0003\u0002\u0002\u0002\n&\u0003\u0002",
    "\u0002\u0002\f(\u0003\u0002\u0002\u0002\u000e*\u0003\u0002\u0002\u0002",
    "\u0010.\u0003\u0002\u0002\u0002\u00120\u0003\u0002\u0002\u0002\u0014",
    "8\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u0004\u0003\u0002\u0017",
    "\u0016\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018",
    "\u0019\u0003\u0002\u0002\u0002\u0019\u001a\u0007\u0002\u0002\u0003\u001a",
    "\u0003\u0003\u0002\u0002\u0002\u001b\u001e\u0005\u000e\b\u0002\u001c",
    "\u001e\u0005\u0006\u0004\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d",
    "\u001c\u0003\u0002\u0002\u0002\u001e\u0005\u0003\u0002\u0002\u0002\u001f",
    " \t\u0002\u0002\u0002 \u0007\u0003\u0002\u0002\u0002!\"\u0005\f\u0007",
    "\u0002\"\t\u0003\u0002\u0002\u0002#\'\u0005\f\u0007\u0002$\'\u0007Z",
    "\u0002\u0002%\'\u00079\u0002\u0002&#\u0003\u0002\u0002\u0002&$\u0003",
    "\u0002\u0002\u0002&%\u0003\u0002\u0002\u0002\'\u000b\u0003\u0002\u0002",
    "\u0002()\u0007j\u0002\u0002)\r\u0003\u0002\u0002\u0002*+\u0005\u0010",
    "\t\u0002+,\u0005\u0012\n\u0002,-\u0007\n\u0002\u0002-\u000f\u0003\u0002",
    "\u0002\u0002./\t\u0003\u0002\u0002/\u0011\u0003\u0002\u0002\u000205",
    "\u0005\u0014\u000b\u000212\u0007\u000b\u0002\u000224\u0005\u0014\u000b",
    "\u000231\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u00026\u0013\u0003\u0002\u0002\u0002",
    "75\u0003\u0002\u0002\u000289\u0005\n\u0006\u00029\u0015\u0003\u0002",
    "\u0002\u0002\u0006\u0017\u001d&5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'('", "')'", "'['", "']'", "'.'", "'...'", 
                     "';'", "','", "'<'", "'>'", "'<='", "'>='", "'=='", 
                     "'!='", "'==='", "'!=='", "'+'", "'-'", "'*'", "'%'", 
                     "'**'", "'++'", "'--'", "'<<'", "'>>'", "'>>>'", "'&'", 
                     "'|'", "'^'", "'!'", "'~'", "'&&'", "'||'", "'?'", 
                     "':'", "'='", "'+='", "'-='", "'*='", "'%='", "'**='", 
                     "'<<='", "'>>='", "'>>>='", "'&='", "'|='", "'^='", 
                     "'=>'", null, "'/'", "'/='", null, "'}'", "'await'", 
                     "'break'", "'case'", "'catch'", "'class'", "'const'", 
                     "'continue'", "'debugger'", "'default'", "'delete'", 
                     "'do'", "'else'", "'export'", "'extends'", "'finally'", 
                     "'for'", "'function'", "'if'", "'import'", "'in'", 
                     "'instanceof'", "'new'", "'return'", "'super'", "'switch'", 
                     "'this'", "'throw'", "'try'", "'typeof'", "'var'", 
                     "'void'", "'while'", "'with'", "'yield'", "'enum'", 
                     null, null, null, null, "'null'", null, "'true'", "'false'", 
                     "'async'", "'let'" ];

var symbolicNames = [ null, "OpenBrace", "OpenParen", "CloseParen", "OpenBracket", 
                      "CloseBracket", "Dot", "Spread", "SemiColon", "Comma", 
                      "LessThan", "GreaterThan", "LessThanEquals", "GreaterThanEquals", 
                      "Equals", "NotEquals", "IdentityEquals", "IdentityNotEquals", 
                      "Plus", "Minus", "Multiply", "Modulo", "Power", "PlusPlus", 
                      "MinusMinus", "LeftShiftArithmetic", "RightShiftArithmetic", 
                      "RightShiftLogical", "BitAnd", "BitOr", "BitXOr", 
                      "Not", "BitNot", "And", "Or", "QuestionMark", "Colon", 
                      "Assign", "PlusAssign", "MinusAssign", "MultiplyAssign", 
                      "ModuloAssign", "PowerAssign", "LeftShiftArithmeticAssign", 
                      "RightShiftArithmeticAssign", "RightShiftLogicalAssign", 
                      "BitAndAssign", "BitOrAssign", "BitXorAssign", "FatArrow", 
                      "Punctuator", "Divide", "DivideAssign", "DivPunctuator", 
                      "CloseBrace", "Await", "Break", "Case", "Catch", "Class", 
                      "Const", "Continue", "Debugger", "Default", "Delete", 
                      "Do", "Else", "Export", "Extends", "Finally", "For", 
                      "Function", "If", "Import", "In", "Instanceof", "New", 
                      "Return", "Super", "Switch", "This", "Throw", "Try", 
                      "Typeof", "Var", "Void", "While", "With", "Yield", 
                      "Enum", "ReservedWord", "Keyword", "FutureReservedWord", 
                      "NullLiteral", "Null", "BooleanLiteral", "True", "False", 
                      "Async", "Let", "NumericLiteral", "BinaryIntegerLiteral", 
                      "OctalIntegerLiteral", "HexIntegerLiteral", "IdentifierName", 
                      "MultiLineComment", "SingleLineComment", "WhiteSpace", 
                      "LineTerminator", "LineTerminatorSequence" ];

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
ECMAScriptPassParser.OpenBrace = 1;
ECMAScriptPassParser.OpenParen = 2;
ECMAScriptPassParser.CloseParen = 3;
ECMAScriptPassParser.OpenBracket = 4;
ECMAScriptPassParser.CloseBracket = 5;
ECMAScriptPassParser.Dot = 6;
ECMAScriptPassParser.Spread = 7;
ECMAScriptPassParser.SemiColon = 8;
ECMAScriptPassParser.Comma = 9;
ECMAScriptPassParser.LessThan = 10;
ECMAScriptPassParser.GreaterThan = 11;
ECMAScriptPassParser.LessThanEquals = 12;
ECMAScriptPassParser.GreaterThanEquals = 13;
ECMAScriptPassParser.Equals = 14;
ECMAScriptPassParser.NotEquals = 15;
ECMAScriptPassParser.IdentityEquals = 16;
ECMAScriptPassParser.IdentityNotEquals = 17;
ECMAScriptPassParser.Plus = 18;
ECMAScriptPassParser.Minus = 19;
ECMAScriptPassParser.Multiply = 20;
ECMAScriptPassParser.Modulo = 21;
ECMAScriptPassParser.Power = 22;
ECMAScriptPassParser.PlusPlus = 23;
ECMAScriptPassParser.MinusMinus = 24;
ECMAScriptPassParser.LeftShiftArithmetic = 25;
ECMAScriptPassParser.RightShiftArithmetic = 26;
ECMAScriptPassParser.RightShiftLogical = 27;
ECMAScriptPassParser.BitAnd = 28;
ECMAScriptPassParser.BitOr = 29;
ECMAScriptPassParser.BitXOr = 30;
ECMAScriptPassParser.Not = 31;
ECMAScriptPassParser.BitNot = 32;
ECMAScriptPassParser.And = 33;
ECMAScriptPassParser.Or = 34;
ECMAScriptPassParser.QuestionMark = 35;
ECMAScriptPassParser.Colon = 36;
ECMAScriptPassParser.Assign = 37;
ECMAScriptPassParser.PlusAssign = 38;
ECMAScriptPassParser.MinusAssign = 39;
ECMAScriptPassParser.MultiplyAssign = 40;
ECMAScriptPassParser.ModuloAssign = 41;
ECMAScriptPassParser.PowerAssign = 42;
ECMAScriptPassParser.LeftShiftArithmeticAssign = 43;
ECMAScriptPassParser.RightShiftArithmeticAssign = 44;
ECMAScriptPassParser.RightShiftLogicalAssign = 45;
ECMAScriptPassParser.BitAndAssign = 46;
ECMAScriptPassParser.BitOrAssign = 47;
ECMAScriptPassParser.BitXorAssign = 48;
ECMAScriptPassParser.FatArrow = 49;
ECMAScriptPassParser.Punctuator = 50;
ECMAScriptPassParser.Divide = 51;
ECMAScriptPassParser.DivideAssign = 52;
ECMAScriptPassParser.DivPunctuator = 53;
ECMAScriptPassParser.CloseBrace = 54;
ECMAScriptPassParser.Await = 55;
ECMAScriptPassParser.Break = 56;
ECMAScriptPassParser.Case = 57;
ECMAScriptPassParser.Catch = 58;
ECMAScriptPassParser.Class = 59;
ECMAScriptPassParser.Const = 60;
ECMAScriptPassParser.Continue = 61;
ECMAScriptPassParser.Debugger = 62;
ECMAScriptPassParser.Default = 63;
ECMAScriptPassParser.Delete = 64;
ECMAScriptPassParser.Do = 65;
ECMAScriptPassParser.Else = 66;
ECMAScriptPassParser.Export = 67;
ECMAScriptPassParser.Extends = 68;
ECMAScriptPassParser.Finally = 69;
ECMAScriptPassParser.For = 70;
ECMAScriptPassParser.Function = 71;
ECMAScriptPassParser.If = 72;
ECMAScriptPassParser.Import = 73;
ECMAScriptPassParser.In = 74;
ECMAScriptPassParser.Instanceof = 75;
ECMAScriptPassParser.New = 76;
ECMAScriptPassParser.Return = 77;
ECMAScriptPassParser.Super = 78;
ECMAScriptPassParser.Switch = 79;
ECMAScriptPassParser.This = 80;
ECMAScriptPassParser.Throw = 81;
ECMAScriptPassParser.Try = 82;
ECMAScriptPassParser.Typeof = 83;
ECMAScriptPassParser.Var = 84;
ECMAScriptPassParser.Void = 85;
ECMAScriptPassParser.While = 86;
ECMAScriptPassParser.With = 87;
ECMAScriptPassParser.Yield = 88;
ECMAScriptPassParser.Enum = 89;
ECMAScriptPassParser.ReservedWord = 90;
ECMAScriptPassParser.Keyword = 91;
ECMAScriptPassParser.FutureReservedWord = 92;
ECMAScriptPassParser.NullLiteral = 93;
ECMAScriptPassParser.Null = 94;
ECMAScriptPassParser.BooleanLiteral = 95;
ECMAScriptPassParser.True = 96;
ECMAScriptPassParser.False = 97;
ECMAScriptPassParser.Async = 98;
ECMAScriptPassParser.Let = 99;
ECMAScriptPassParser.NumericLiteral = 100;
ECMAScriptPassParser.BinaryIntegerLiteral = 101;
ECMAScriptPassParser.OctalIntegerLiteral = 102;
ECMAScriptPassParser.HexIntegerLiteral = 103;
ECMAScriptPassParser.IdentifierName = 104;
ECMAScriptPassParser.MultiLineComment = 105;
ECMAScriptPassParser.SingleLineComment = 106;
ECMAScriptPassParser.WhiteSpace = 107;
ECMAScriptPassParser.LineTerminator = 108;
ECMAScriptPassParser.LineTerminatorSequence = 109;

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
        if(_la===ECMAScriptPassParser.Const || ((((_la - 99)) & ~0x1f) == 0 && ((1 << (_la - 99)) & ((1 << (ECMAScriptPassParser.Let - 99)) | (1 << (ECMAScriptPassParser.NumericLiteral - 99)) | (1 << (ECMAScriptPassParser.IdentifierName - 99)))) !== 0)) {
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
        this.state = 27;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Let:
            this.enterOuterAlt(localctx, 1);
            this.state = 25;
            this.lexicalDeclaration();
            break;
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 2);
            this.state = 26;
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

LiteralContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptPassParser.IdentifierName, 0);
};

LiteralContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptPassParser.NumericLiteral, 0);
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
        this.state = 29;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.IdentifierName)) {
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
        this.state = 31;
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
        this.state = 36;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 33;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 34;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 35;
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
        this.state = 38;
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
        this.state = 40;
        this.letOrConst();
        this.state = 41;
        this.bindingList();
        this.state = 42;
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
        this.state = 44;
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
        this.state = 46;
        this.lexicalBinding();
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 47;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 48;
            this.lexicalBinding();
            this.state = 53;
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
        this.state = 54;
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
