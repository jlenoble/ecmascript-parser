// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScript.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptListener = require('./ECMAScriptListener').ECMAScriptListener;
var grammarFileName = "ECMAScript.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003lZ\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003\u0002",
    "\u0005\u0002!\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0006\u00074\n\u0007\r\u0007\u000e\u00075\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\nB\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0007\fK\n\f\f\f\u000e\fN\u000b\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0005\u000eV\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0002\u0002\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u0002\u0003\u0003\u000256\u0002",
    "Q\u0002 \u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006",
    "*\u0003\u0002\u0002\u0002\b,\u0003\u0002\u0002\u0002\n.\u0003\u0002",
    "\u0002\u0002\f3\u0003\u0002\u0002\u0002\u000e7\u0003\u0002\u0002\u0002",
    "\u00109\u0003\u0002\u0002\u0002\u0012A\u0003\u0002\u0002\u0002\u0014",
    "C\u0003\u0002\u0002\u0002\u0016G\u0003\u0002\u0002\u0002\u0018O\u0003",
    "\u0002\u0002\u0002\u001aU\u0003\u0002\u0002\u0002\u001cW\u0003\u0002",
    "\u0002\u0002\u001e!\u0005\u0004\u0003\u0002\u001f!\u0007d\u0002\u0002",
    " \u001e\u0003\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!\u0003",
    "\u0003\u0002\u0002\u0002\"#\u0007H\u0002\u0002#$\u0005\u0006\u0004\u0002",
    "$%\u0007\u0004\u0002\u0002%&\u0007\u0005\u0002\u0002&\'\u0007\u0003",
    "\u0002\u0002\'(\u0005\b\u0005\u0002()\u00077\u0002\u0002)\u0005\u0003",
    "\u0002\u0002\u0002*+\u0007i\u0002\u0002+\u0007\u0003\u0002\u0002\u0002",
    ",-\u0005\n\u0006\u0002-\t\u0003\u0002\u0002\u0002./\u0005\f\u0007\u0002",
    "/\u000b\u0003\u0002\u0002\u000201\u0005\u000e\b\u000212\u0005\u001a",
    "\u000e\u000224\u0003\u0002\u0002\u000230\u0003\u0002\u0002\u000245\u0003",
    "\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u0002",
    "6\r\u0003\u0002\u0002\u000278\u0005\u0010\t\u00028\u000f\u0003\u0002",
    "\u0002\u00029:\u0005\u0012\n\u0002:\u0011\u0003\u0002\u0002\u0002;B",
    "\u0007c\u0002\u0002<B\u0005\u0014\u000b\u0002=>\u0007\u0004\u0002\u0002",
    ">?\u0005\u0012\n\u0002?@\u0007\u0005\u0002\u0002@B\u0003\u0002\u0002",
    "\u0002A;\u0003\u0002\u0002\u0002A<\u0003\u0002\u0002\u0002A=\u0003\u0002",
    "\u0002\u0002B\u0013\u0003\u0002\u0002\u0002CD\u0007\u0003\u0002\u0002",
    "DE\u0005\u0016\f\u0002EF\u00077\u0002\u0002F\u0015\u0003\u0002\u0002",
    "\u0002GL\u0005\u0018\r\u0002HI\u0007\u000b\u0002\u0002IK\u0005\u0018",
    "\r\u0002JH\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002M\u0017\u0003\u0002\u0002",
    "\u0002NL\u0003\u0002\u0002\u0002OP\u0007i\u0002\u0002PQ\u0007&\u0002",
    "\u0002QR\u0007d\u0002\u0002R\u0019\u0003\u0002\u0002\u0002SV\u0007\n",
    "\u0002\u0002TV\u0006\u000e\u0002\u0002US\u0003\u0002\u0002\u0002UT\u0003",
    "\u0002\u0002\u0002V\u001b\u0003\u0002\u0002\u0002WX\t\u0002\u0002\u0002",
    "X\u001d\u0003\u0002\u0002\u0002\u0007 5ALU"].join("");


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
                     "'=>'", null, "'/'", "'/='", "'}'", "'await'", "'break'", 
                     "'case'", "'catch'", "'class'", "'const'", "'continue'", 
                     "'debugger'", "'default'", "'delete'", "'do'", "'else'", 
                     "'export'", "'extends'", "'finally'", "'for'", "'function'", 
                     "'if'", "'import'", "'in'", "'instanceof'", "'new'", 
                     "'return'", "'super'", "'switch'", "'this'", "'throw'", 
                     "'try'", "'typeof'", "'var'", "'void'", "'while'", 
                     "'with'", "'yield'", "'enum'", null, null, null, null, 
                     "'null'", null, "'true'", "'false'" ];

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
                      "Punctuator", "Divide", "DivideAssign", "CloseBrace", 
                      "Await", "Break", "Case", "Catch", "Class", "Const", 
                      "Continue", "Debugger", "Default", "Delete", "Do", 
                      "Else", "Export", "Extends", "Finally", "For", "Function", 
                      "If", "Import", "In", "InstanceOf", "New", "Return", 
                      "Super", "Switch", "This", "Throw", "Try", "TypeOf", 
                      "Var", "Void", "While", "With", "Yield", "Enum", "ReservedWord", 
                      "Keyword", "FutureReservedWord", "NullLiteral", "Null", 
                      "BooleanLiteral", "True", "False", "StringLiteral", 
                      "NumericLiteral", "DecimalLiteral", "BinaryIntegerLiteral", 
                      "OctalIntegerLiteral", "HexIntegerLiteral", "IdentifierName", 
                      "WhiteSpace", "LineTerminator", "LineTerminatorSequence" ];

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
ECMAScriptParser.OpenBrace = 1;
ECMAScriptParser.OpenParen = 2;
ECMAScriptParser.CloseParen = 3;
ECMAScriptParser.OpenBracket = 4;
ECMAScriptParser.CloseBracket = 5;
ECMAScriptParser.Dot = 6;
ECMAScriptParser.Spread = 7;
ECMAScriptParser.SemiColon = 8;
ECMAScriptParser.Comma = 9;
ECMAScriptParser.LessThan = 10;
ECMAScriptParser.GreaterThan = 11;
ECMAScriptParser.LessThanEquals = 12;
ECMAScriptParser.GreaterThanEquals = 13;
ECMAScriptParser.Equals = 14;
ECMAScriptParser.NotEquals = 15;
ECMAScriptParser.IdentityEquals = 16;
ECMAScriptParser.IdentityNotEquals = 17;
ECMAScriptParser.Plus = 18;
ECMAScriptParser.Minus = 19;
ECMAScriptParser.Multiply = 20;
ECMAScriptParser.Modulo = 21;
ECMAScriptParser.Power = 22;
ECMAScriptParser.PlusPlus = 23;
ECMAScriptParser.MinusMinus = 24;
ECMAScriptParser.LeftShiftArithmetic = 25;
ECMAScriptParser.RightShiftArithmetic = 26;
ECMAScriptParser.RightShiftLogical = 27;
ECMAScriptParser.BitAnd = 28;
ECMAScriptParser.BitOr = 29;
ECMAScriptParser.BitXOr = 30;
ECMAScriptParser.Not = 31;
ECMAScriptParser.BitNot = 32;
ECMAScriptParser.And = 33;
ECMAScriptParser.Or = 34;
ECMAScriptParser.QuestionMark = 35;
ECMAScriptParser.Colon = 36;
ECMAScriptParser.Assign = 37;
ECMAScriptParser.PlusAssign = 38;
ECMAScriptParser.MinusAssign = 39;
ECMAScriptParser.MultiplyAssign = 40;
ECMAScriptParser.ModuloAssign = 41;
ECMAScriptParser.PowerAssign = 42;
ECMAScriptParser.LeftShiftArithmeticAssign = 43;
ECMAScriptParser.RightShiftArithmeticAssign = 44;
ECMAScriptParser.RightShiftLogicalAssign = 45;
ECMAScriptParser.BitAndAssign = 46;
ECMAScriptParser.BitOrAssign = 47;
ECMAScriptParser.BitXorAssign = 48;
ECMAScriptParser.FatArrow = 49;
ECMAScriptParser.Punctuator = 50;
ECMAScriptParser.Divide = 51;
ECMAScriptParser.DivideAssign = 52;
ECMAScriptParser.CloseBrace = 53;
ECMAScriptParser.Await = 54;
ECMAScriptParser.Break = 55;
ECMAScriptParser.Case = 56;
ECMAScriptParser.Catch = 57;
ECMAScriptParser.Class = 58;
ECMAScriptParser.Const = 59;
ECMAScriptParser.Continue = 60;
ECMAScriptParser.Debugger = 61;
ECMAScriptParser.Default = 62;
ECMAScriptParser.Delete = 63;
ECMAScriptParser.Do = 64;
ECMAScriptParser.Else = 65;
ECMAScriptParser.Export = 66;
ECMAScriptParser.Extends = 67;
ECMAScriptParser.Finally = 68;
ECMAScriptParser.For = 69;
ECMAScriptParser.Function = 70;
ECMAScriptParser.If = 71;
ECMAScriptParser.Import = 72;
ECMAScriptParser.In = 73;
ECMAScriptParser.InstanceOf = 74;
ECMAScriptParser.New = 75;
ECMAScriptParser.Return = 76;
ECMAScriptParser.Super = 77;
ECMAScriptParser.Switch = 78;
ECMAScriptParser.This = 79;
ECMAScriptParser.Throw = 80;
ECMAScriptParser.Try = 81;
ECMAScriptParser.TypeOf = 82;
ECMAScriptParser.Var = 83;
ECMAScriptParser.Void = 84;
ECMAScriptParser.While = 85;
ECMAScriptParser.With = 86;
ECMAScriptParser.Yield = 87;
ECMAScriptParser.Enum = 88;
ECMAScriptParser.ReservedWord = 89;
ECMAScriptParser.Keyword = 90;
ECMAScriptParser.FutureReservedWord = 91;
ECMAScriptParser.NullLiteral = 92;
ECMAScriptParser.Null = 93;
ECMAScriptParser.BooleanLiteral = 94;
ECMAScriptParser.True = 95;
ECMAScriptParser.False = 96;
ECMAScriptParser.StringLiteral = 97;
ECMAScriptParser.NumericLiteral = 98;
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
        this.state = 30;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.Function:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.functionDeclaration();
            break;
        case ECMAScriptParser.NumericLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.match(ECMAScriptParser.NumericLiteral);
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
        this.state = 32;
        this.match(ECMAScriptParser.Function);
        this.state = 33;
        this.identifier();
        this.state = 34;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 35;
        this.match(ECMAScriptParser.CloseParen);
        this.state = 36;
        this.match(ECMAScriptParser.OpenBrace);
        this.state = 37;
        this.functionBody();
        this.state = 38;
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
        this.state = 40;
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
        this.state = 42;
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
        this.state = 44;
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
        this.state = 49; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 46;
            this.statementListItem_Return();
            this.state = 47;
            this.eos();
            this.state = 51; 
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
        this.state = 53;
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
        this.state = 55;
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
        this.state = 63;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.match(ECMAScriptParser.StringLiteral);
            break;
        case ECMAScriptParser.OpenBrace:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.objectLiteral();
            break;
        case ECMAScriptParser.OpenParen:
            this.enterOuterAlt(localctx, 3);
            this.state = 59;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 60;
            this.expressionStatement();
            this.state = 61;
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
        this.state = 65;
        this.match(ECMAScriptParser.OpenBrace);
        this.state = 66;
        this.propertyDefinitionList();
        this.state = 67;
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
        this.state = 69;
        this.propertyDefinition();
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptParser.Comma) {
            this.state = 70;
            this.match(ECMAScriptParser.Comma);
            this.state = 71;
            this.propertyDefinition();
            this.state = 76;
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
        this.state = 77;
        this.match(ECMAScriptParser.IdentifierName);
        this.state = 78;
        this.match(ECMAScriptParser.Colon);
        this.state = 79;
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
        this.state = 83;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.match(ECMAScriptParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
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
        this.state = 85;
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
