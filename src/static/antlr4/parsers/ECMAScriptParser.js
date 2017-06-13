// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScript.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptListener = require('./ECMAScriptListener').ECMAScriptListener;
var grammarFileName = "ECMAScript.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003l]\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002$\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0006\u00077\n\u0007",
    "\r\u0007\u000e\u00078\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nE\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0007\fN\n\f\f\f\u000e",
    "\fQ\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0005\u000eY\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0002",
    "\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u0002\u0003\u0003\u000267\u0002T\u0002#\u0003\u0002\u0002\u0002",
    "\u0004%\u0003\u0002\u0002\u0002\u0006-\u0003\u0002\u0002\u0002\b/\u0003",
    "\u0002\u0002\u0002\n1\u0003\u0002\u0002\u0002\f6\u0003\u0002\u0002\u0002",
    "\u000e:\u0003\u0002\u0002\u0002\u0010<\u0003\u0002\u0002\u0002\u0012",
    "D\u0003\u0002\u0002\u0002\u0014F\u0003\u0002\u0002\u0002\u0016J\u0003",
    "\u0002\u0002\u0002\u0018R\u0003\u0002\u0002\u0002\u001aX\u0003\u0002",
    "\u0002\u0002\u001cZ\u0003\u0002\u0002\u0002\u001e\u001f\u0005\u0004",
    "\u0003\u0002\u001f \u0007\u0002\u0002\u0003 $\u0003\u0002\u0002\u0002",
    "!\"\u0007\u0003\u0002\u0002\"$\u0007\u0002\u0002\u0003#\u001e\u0003",
    "\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002$\u0003\u0003\u0002\u0002",
    "\u0002%&\u0007I\u0002\u0002&\'\u0005\u0006\u0004\u0002\'(\u0007\u0005",
    "\u0002\u0002()\u0007\u0006\u0002\u0002)*\u0007\u0004\u0002\u0002*+\u0005",
    "\b\u0005\u0002+,\u00078\u0002\u0002,\u0005\u0003\u0002\u0002\u0002-",
    ".\u0007i\u0002\u0002.\u0007\u0003\u0002\u0002\u0002/0\u0005\n\u0006",
    "\u00020\t\u0003\u0002\u0002\u000212\u0005\f\u0007\u00022\u000b\u0003",
    "\u0002\u0002\u000234\u0005\u000e\b\u000245\u0005\u001a\u000e\u00025",
    "7\u0003\u0002\u0002\u000263\u0003\u0002\u0002\u000278\u0003\u0002\u0002",
    "\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029\r\u0003",
    "\u0002\u0002\u0002:;\u0005\u0010\t\u0002;\u000f\u0003\u0002\u0002\u0002",
    "<=\u0005\u0012\n\u0002=\u0011\u0003\u0002\u0002\u0002>E\u0007d\u0002",
    "\u0002?E\u0005\u0014\u000b\u0002@A\u0007\u0005\u0002\u0002AB\u0005\u0012",
    "\n\u0002BC\u0007\u0006\u0002\u0002CE\u0003\u0002\u0002\u0002D>\u0003",
    "\u0002\u0002\u0002D?\u0003\u0002\u0002\u0002D@\u0003\u0002\u0002\u0002",
    "E\u0013\u0003\u0002\u0002\u0002FG\u0007\u0004\u0002\u0002GH\u0005\u0016",
    "\f\u0002HI\u00078\u0002\u0002I\u0015\u0003\u0002\u0002\u0002JO\u0005",
    "\u0018\r\u0002KL\u0007\f\u0002\u0002LN\u0005\u0018\r\u0002MK\u0003\u0002",
    "\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003",
    "\u0002\u0002\u0002P\u0017\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002",
    "\u0002RS\u0007i\u0002\u0002ST\u0007\'\u0002\u0002TU\u0007\u0003\u0002",
    "\u0002U\u0019\u0003\u0002\u0002\u0002VY\u0007\u000b\u0002\u0002WY\u0006",
    "\u000e\u0002\u0002XV\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002",
    "Y\u001b\u0003\u0002\u0002\u0002Z[\t\u0002\u0002\u0002[\u001d\u0003\u0002",
    "\u0002\u0002\u0007#8DOX"].join("");


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
                     "'^='", "'=>'", null, "'/'", "'/='", "'}'", "'await'", 
                     "'break'", "'case'", "'catch'", "'class'", "'const'", 
                     "'continue'", "'debugger'", "'default'", "'delete'", 
                     "'do'", "'else'", "'export'", "'extends'", "'finally'", 
                     "'for'", "'function'", "'if'", "'import'", "'in'", 
                     "'instanceof'", "'new'", "'return'", "'super'", "'switch'", 
                     "'this'", "'throw'", "'try'", "'typeof'", "'var'", 
                     "'void'", "'while'", "'with'", "'yield'", "'enum'", 
                     null, null, null, null, "'null'", null, "'true'", "'false'" ];

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
                      "DivideAssign", "CloseBrace", "Await", "Break", "Case", 
                      "Catch", "Class", "Const", "Continue", "Debugger", 
                      "Default", "Delete", "Do", "Else", "Export", "Extends", 
                      "Finally", "For", "Function", "If", "Import", "In", 
                      "InstanceOf", "New", "Return", "Super", "Switch", 
                      "This", "Throw", "Try", "TypeOf", "Var", "Void", "While", 
                      "With", "Yield", "Enum", "ReservedWord", "Keyword", 
                      "FutureReservedWord", "NullLiteral", "Null", "BooleanLiteral", 
                      "True", "False", "StringLiteral", "DecimalLiteral", 
                      "BinaryIntegerLiteral", "OctalIntegerLiteral", "HexIntegerLiteral", 
                      "IdentifierName", "WhiteSpace", "LineTerminator", 
                      "LineTerminatorSequence" ];

var ruleNames =  [ "file", "functionDeclaration", "identifier", "functionBody", 
                   "functionStatementList", "statementList_Return", "statementListItem_Return", 
                   "statement_Return", "expressionStatement", "objectLiteral", 
                   "propertyDefinitionList", "propertyDefinition", "eos", 
                   "divPunctuator" ];

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
ECMAScriptParser.NumericLiteral = 1;
ECMAScriptParser.OpenBrace = 2;
ECMAScriptParser.OpenParen = 3;
ECMAScriptParser.CloseParen = 4;
ECMAScriptParser.OpenBracket = 5;
ECMAScriptParser.CloseBracket = 6;
ECMAScriptParser.Dot = 7;
ECMAScriptParser.Spread = 8;
ECMAScriptParser.SemiColon = 9;
ECMAScriptParser.Comma = 10;
ECMAScriptParser.LessThan = 11;
ECMAScriptParser.GreaterThan = 12;
ECMAScriptParser.LessThanEquals = 13;
ECMAScriptParser.GreaterThanEquals = 14;
ECMAScriptParser.Equals = 15;
ECMAScriptParser.NotEquals = 16;
ECMAScriptParser.IdentityEquals = 17;
ECMAScriptParser.IdentityNotEquals = 18;
ECMAScriptParser.Plus = 19;
ECMAScriptParser.Minus = 20;
ECMAScriptParser.Multiply = 21;
ECMAScriptParser.Modulo = 22;
ECMAScriptParser.Power = 23;
ECMAScriptParser.PlusPlus = 24;
ECMAScriptParser.MinusMinus = 25;
ECMAScriptParser.LeftShiftArithmetic = 26;
ECMAScriptParser.RightShiftArithmetic = 27;
ECMAScriptParser.RightShiftLogical = 28;
ECMAScriptParser.BitAnd = 29;
ECMAScriptParser.BitOr = 30;
ECMAScriptParser.BitXOr = 31;
ECMAScriptParser.Not = 32;
ECMAScriptParser.BitNot = 33;
ECMAScriptParser.And = 34;
ECMAScriptParser.Or = 35;
ECMAScriptParser.QuestionMark = 36;
ECMAScriptParser.Colon = 37;
ECMAScriptParser.Assign = 38;
ECMAScriptParser.PlusAssign = 39;
ECMAScriptParser.MinusAssign = 40;
ECMAScriptParser.MultiplyAssign = 41;
ECMAScriptParser.ModuloAssign = 42;
ECMAScriptParser.PowerAssign = 43;
ECMAScriptParser.LeftShiftArithmeticAssign = 44;
ECMAScriptParser.RightShiftArithmeticAssign = 45;
ECMAScriptParser.RightShiftLogicalAssign = 46;
ECMAScriptParser.BitAndAssign = 47;
ECMAScriptParser.BitOrAssign = 48;
ECMAScriptParser.BitXorAssign = 49;
ECMAScriptParser.FatArrow = 50;
ECMAScriptParser.Punctuator = 51;
ECMAScriptParser.Divide = 52;
ECMAScriptParser.DivideAssign = 53;
ECMAScriptParser.CloseBrace = 54;
ECMAScriptParser.Await = 55;
ECMAScriptParser.Break = 56;
ECMAScriptParser.Case = 57;
ECMAScriptParser.Catch = 58;
ECMAScriptParser.Class = 59;
ECMAScriptParser.Const = 60;
ECMAScriptParser.Continue = 61;
ECMAScriptParser.Debugger = 62;
ECMAScriptParser.Default = 63;
ECMAScriptParser.Delete = 64;
ECMAScriptParser.Do = 65;
ECMAScriptParser.Else = 66;
ECMAScriptParser.Export = 67;
ECMAScriptParser.Extends = 68;
ECMAScriptParser.Finally = 69;
ECMAScriptParser.For = 70;
ECMAScriptParser.Function = 71;
ECMAScriptParser.If = 72;
ECMAScriptParser.Import = 73;
ECMAScriptParser.In = 74;
ECMAScriptParser.InstanceOf = 75;
ECMAScriptParser.New = 76;
ECMAScriptParser.Return = 77;
ECMAScriptParser.Super = 78;
ECMAScriptParser.Switch = 79;
ECMAScriptParser.This = 80;
ECMAScriptParser.Throw = 81;
ECMAScriptParser.Try = 82;
ECMAScriptParser.TypeOf = 83;
ECMAScriptParser.Var = 84;
ECMAScriptParser.Void = 85;
ECMAScriptParser.While = 86;
ECMAScriptParser.With = 87;
ECMAScriptParser.Yield = 88;
ECMAScriptParser.Enum = 89;
ECMAScriptParser.ReservedWord = 90;
ECMAScriptParser.Keyword = 91;
ECMAScriptParser.FutureReservedWord = 92;
ECMAScriptParser.NullLiteral = 93;
ECMAScriptParser.Null = 94;
ECMAScriptParser.BooleanLiteral = 95;
ECMAScriptParser.True = 96;
ECMAScriptParser.False = 97;
ECMAScriptParser.StringLiteral = 98;
ECMAScriptParser.DecimalLiteral = 99;
ECMAScriptParser.BinaryIntegerLiteral = 100;
ECMAScriptParser.OctalIntegerLiteral = 101;
ECMAScriptParser.HexIntegerLiteral = 102;
ECMAScriptParser.IdentifierName = 103;
ECMAScriptParser.WhiteSpace = 104;
ECMAScriptParser.LineTerminator = 105;
ECMAScriptParser.LineTerminatorSequence = 106;

ECMAScriptParser.RULE_file = 0;
ECMAScriptParser.RULE_functionDeclaration = 1;
ECMAScriptParser.RULE_identifier = 2;
ECMAScriptParser.RULE_functionBody = 3;
ECMAScriptParser.RULE_functionStatementList = 4;
ECMAScriptParser.RULE_statementList_Return = 5;
ECMAScriptParser.RULE_statementListItem_Return = 6;
ECMAScriptParser.RULE_statement_Return = 7;
ECMAScriptParser.RULE_expressionStatement = 8;
ECMAScriptParser.RULE_objectLiteral = 9;
ECMAScriptParser.RULE_propertyDefinitionList = 10;
ECMAScriptParser.RULE_propertyDefinition = 11;
ECMAScriptParser.RULE_eos = 12;
ECMAScriptParser.RULE_divPunctuator = 13;

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

FileContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

FileContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptParser.EOF, 0);
};

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
        this.state = 33;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.Function:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.functionDeclaration();
            this.state = 29;
            this.match(ECMAScriptParser.EOF);
            break;
        case ECMAScriptParser.NumericLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.match(ECMAScriptParser.NumericLiteral);
            this.state = 32;
            this.match(ECMAScriptParser.EOF);
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

function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(ECMAScriptParser.Function, 0);
};

FunctionDeclarationContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

FunctionDeclarationContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

FunctionDeclarationContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

FunctionDeclarationContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFunctionDeclaration(this);
	}
};




ECMAScriptParser.FunctionDeclarationContext = FunctionDeclarationContext;

ECMAScriptParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScriptParser.RULE_functionDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(ECMAScriptParser.Function);
        this.state = 36;
        this.identifier();
        this.state = 37;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 38;
        this.match(ECMAScriptParser.CloseParen);
        this.state = 39;
        this.match(ECMAScriptParser.OpenBrace);
        this.state = 40;
        this.functionBody();
        this.state = 41;
        this.match(ECMAScriptParser.CloseBrace);
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
    this.ruleIndex = ECMAScriptParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptParser.IdentifierName, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitIdentifier(this);
	}
};




ECMAScriptParser.IdentifierContext = IdentifierContext;

ECMAScriptParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(ECMAScriptParser.IdentifierName);
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

function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.functionStatementList = function() {
    return this.getTypedRuleContext(FunctionStatementListContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFunctionBody(this);
	}
};




ECMAScriptParser.FunctionBodyContext = FunctionBodyContext;

ECMAScriptParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScriptParser.RULE_functionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.functionStatementList();
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

function FunctionStatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_functionStatementList;
    return this;
}

FunctionStatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionStatementListContext.prototype.constructor = FunctionStatementListContext;

FunctionStatementListContext.prototype.statementList_Return = function() {
    return this.getTypedRuleContext(StatementList_ReturnContext,0);
};

FunctionStatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFunctionStatementList(this);
	}
};

FunctionStatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFunctionStatementList(this);
	}
};




ECMAScriptParser.FunctionStatementListContext = FunctionStatementListContext;

ECMAScriptParser.prototype.functionStatementList = function() {

    var localctx = new FunctionStatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ECMAScriptParser.RULE_functionStatementList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.statementList_Return();
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

function StatementList_ReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_statementList_Return;
    return this;
}

StatementList_ReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementList_ReturnContext.prototype.constructor = StatementList_ReturnContext;

StatementList_ReturnContext.prototype.statementListItem_Return = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementListItem_ReturnContext);
    } else {
        return this.getTypedRuleContext(StatementListItem_ReturnContext,i);
    }
};

StatementList_ReturnContext.prototype.eos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EosContext);
    } else {
        return this.getTypedRuleContext(EosContext,i);
    }
};

StatementList_ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterStatementList_Return(this);
	}
};

StatementList_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitStatementList_Return(this);
	}
};




ECMAScriptParser.StatementList_ReturnContext = StatementList_ReturnContext;

ECMAScriptParser.prototype.statementList_Return = function() {

    var localctx = new StatementList_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ECMAScriptParser.RULE_statementList_Return);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 49;
            this.statementListItem_Return();
            this.state = 50;
            this.eos();
            this.state = 54; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ECMAScriptParser.OpenBrace || _la===ECMAScriptParser.OpenParen || _la===ECMAScriptParser.StringLiteral);
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

function StatementListItem_ReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_statementListItem_Return;
    return this;
}

StatementListItem_ReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListItem_ReturnContext.prototype.constructor = StatementListItem_ReturnContext;

StatementListItem_ReturnContext.prototype.statement_Return = function() {
    return this.getTypedRuleContext(Statement_ReturnContext,0);
};

StatementListItem_ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterStatementListItem_Return(this);
	}
};

StatementListItem_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitStatementListItem_Return(this);
	}
};




ECMAScriptParser.StatementListItem_ReturnContext = StatementListItem_ReturnContext;

ECMAScriptParser.prototype.statementListItem_Return = function() {

    var localctx = new StatementListItem_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ECMAScriptParser.RULE_statementListItem_Return);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.statement_Return();
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

function Statement_ReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_statement_Return;
    return this;
}

Statement_ReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_ReturnContext.prototype.constructor = Statement_ReturnContext;

Statement_ReturnContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

Statement_ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterStatement_Return(this);
	}
};

Statement_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitStatement_Return(this);
	}
};




ECMAScriptParser.Statement_ReturnContext = Statement_ReturnContext;

ECMAScriptParser.prototype.statement_Return = function() {

    var localctx = new Statement_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ECMAScriptParser.RULE_statement_Return);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.expressionStatement();
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

function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptParser.StringLiteral, 0);
};

ExpressionStatementContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};

ExpressionStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ExpressionStatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

ExpressionStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitExpressionStatement(this);
	}
};




ECMAScriptParser.ExpressionStatementContext = ExpressionStatementContext;

ECMAScriptParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ECMAScriptParser.RULE_expressionStatement);
    try {
        this.state = 66;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.match(ECMAScriptParser.StringLiteral);
            break;
        case ECMAScriptParser.OpenBrace:
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.objectLiteral();
            break;
        case ECMAScriptParser.OpenParen:
            this.enterOuterAlt(localctx, 3);
            this.state = 62;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 63;
            this.expressionStatement();
            this.state = 64;
            this.match(ECMAScriptParser.CloseParen);
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

function ObjectLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

ObjectLiteralContext.prototype.propertyDefinitionList = function() {
    return this.getTypedRuleContext(PropertyDefinitionListContext,0);
};

ObjectLiteralContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

ObjectLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitObjectLiteral(this);
	}
};




ECMAScriptParser.ObjectLiteralContext = ObjectLiteralContext;

ECMAScriptParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScriptParser.RULE_objectLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(ECMAScriptParser.OpenBrace);
        this.state = 69;
        this.propertyDefinitionList();
        this.state = 70;
        this.match(ECMAScriptParser.CloseBrace);
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

function PropertyDefinitionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_propertyDefinitionList;
    return this;
}

PropertyDefinitionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDefinitionListContext.prototype.constructor = PropertyDefinitionListContext;

PropertyDefinitionListContext.prototype.propertyDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyDefinitionContext);
    } else {
        return this.getTypedRuleContext(PropertyDefinitionContext,i);
    }
};

PropertyDefinitionListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


PropertyDefinitionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertyDefinitionList(this);
	}
};

PropertyDefinitionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertyDefinitionList(this);
	}
};




ECMAScriptParser.PropertyDefinitionListContext = PropertyDefinitionListContext;

ECMAScriptParser.prototype.propertyDefinitionList = function() {

    var localctx = new PropertyDefinitionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScriptParser.RULE_propertyDefinitionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.propertyDefinition();
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptParser.Comma) {
            this.state = 73;
            this.match(ECMAScriptParser.Comma);
            this.state = 74;
            this.propertyDefinition();
            this.state = 79;
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

function PropertyDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_propertyDefinition;
    return this;
}

PropertyDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDefinitionContext.prototype.constructor = PropertyDefinitionContext;

PropertyDefinitionContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptParser.IdentifierName, 0);
};

PropertyDefinitionContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptParser.Colon, 0);
};

PropertyDefinitionContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptParser.NumericLiteral, 0);
};

PropertyDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertyDefinition(this);
	}
};

PropertyDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertyDefinition(this);
	}
};




ECMAScriptParser.PropertyDefinitionContext = PropertyDefinitionContext;

ECMAScriptParser.prototype.propertyDefinition = function() {

    var localctx = new PropertyDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ECMAScriptParser.RULE_propertyDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(ECMAScriptParser.IdentifierName);
        this.state = 81;
        this.match(ECMAScriptParser.Colon);
        this.state = 82;
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

function EosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptParser.SemiColon, 0);
};

EosContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterEos(this);
	}
};

EosContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitEos(this);
	}
};




ECMAScriptParser.EosContext = EosContext;

ECMAScriptParser.prototype.eos = function() {

    var localctx = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ECMAScriptParser.RULE_eos);
    try {
        this.state = 86;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 84;
            this.match(ECMAScriptParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 85;
            if (!( this._input.LT(1).type == ECMAScriptParser.CloseBrace)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type == ECMAScriptParser.CloseBrace");
            }
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

function DivPunctuatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_divPunctuator;
    return this;
}

DivPunctuatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivPunctuatorContext.prototype.constructor = DivPunctuatorContext;

DivPunctuatorContext.prototype.Divide = function() {
    return this.getToken(ECMAScriptParser.Divide, 0);
};

DivPunctuatorContext.prototype.DivideAssign = function() {
    return this.getToken(ECMAScriptParser.DivideAssign, 0);
};

DivPunctuatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterDivPunctuator(this);
	}
};

DivPunctuatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitDivPunctuator(this);
	}
};




ECMAScriptParser.DivPunctuatorContext = DivPunctuatorContext;

ECMAScriptParser.prototype.divPunctuator = function() {

    var localctx = new DivPunctuatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ECMAScriptParser.RULE_divPunctuator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptParser.Divide || _la===ECMAScriptParser.DivideAssign)) {
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


ECMAScriptParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 12:
			return this.eos_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ECMAScriptParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this._input.LT(1).type == ECMAScriptParser.CloseBrace;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ECMAScriptParser = ECMAScriptParser;
