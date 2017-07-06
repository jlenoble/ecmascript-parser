// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptLexicalGrammar.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptLexicalGrammarListener = require('./ECMAScriptLexicalGrammarListener').ECMAScriptLexicalGrammarListener;
var grammarFileName = "ECMAScriptLexicalGrammar.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003?(\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0007\u0002\u000e",
    "\n\u0002\f\u0002\u000e\u0002\u0011\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u001c\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004\"\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b",
    "\n\u0002\u0004\u0003\u0002\u00044\u0003\u000256\u0002,\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0004\u001b\u0003\u0002\u0002\u0002\u0006!\u0003",
    "\u0002\u0002\u0002\b#\u0003\u0002\u0002\u0002\n%\u0003\u0002\u0002\u0002",
    "\f\u000e\u0005\u0004\u0003\u0002\r\f\u0003\u0002\u0002\u0002\u000e\u0011",
    "\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u000f\u0010",
    "\u0003\u0002\u0002\u0002\u0010\u0012\u0003\u0002\u0002\u0002\u0011\u000f",
    "\u0003\u0002\u0002\u0002\u0012\u0013\u0007\u0002\u0002\u0003\u0013\u0003",
    "\u0003\u0002\u0002\u0002\u0014\u001c\u0007?\u0002\u0002\u0015\u001c",
    "\u0007>\u0002\u0002\u0016\u001c\u0007;\u0002\u0002\u0017\u001c\u0005",
    "\u0006\u0004\u0002\u0018\u001c\u0005\n\u0006\u0002\u0019\u001c\u0007",
    "7\u0002\u0002\u001a\u001c\u0007\u0003\u0002\u0002\u001b\u0014\u0003",
    "\u0002\u0002\u0002\u001b\u0015\u0003\u0002\u0002\u0002\u001b\u0016\u0003",
    "\u0002\u0002\u0002\u001b\u0017\u0003\u0002\u0002\u0002\u001b\u0018\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002\u001d\"\u0007",
    ":\u0002\u0002\u001e\"\u0005\b\u0005\u0002\u001f\"\u00079\u0002\u0002",
    " \"\u00078\u0002\u0002!\u001d\u0003\u0002\u0002\u0002!\u001e\u0003\u0002",
    "\u0002\u0002!\u001f\u0003\u0002\u0002\u0002! \u0003\u0002\u0002\u0002",
    "\"\u0007\u0003\u0002\u0002\u0002#$\t\u0002\u0002\u0002$\t\u0003\u0002",
    "\u0002\u0002%&\t\u0003\u0002\u0002&\u000b\u0003\u0002\u0002\u0002\u0005",
    "\u000f\u001b!"].join("");


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
                     "'^='", "'=>'", null, null, "'}'" ];

var symbolicNames = [ null, "RegularExpressionLiteral", "OpenBrace", "OpenParen", 
                      "CloseParen", "OpenBracket", "CloseBracket", "Dot", 
                      "Spread", "SemiColon", "Comma", "LessThan", "GreaterThan", 
                      "LessThanEquals", "GreaterThanEquals", "Equals", "NotEquals", 
                      "IdentityEquals", "IdentityNotEquals", "Plus", "Minus", 
                      "Multiply", "Modulo", "Power", "PlusPlus", "MinusMinus", 
                      "LeftShiftArithmetic", "RightShiftArithmetic", "RightShiftLogical", 
                      "BitAnd", "BitOr", "BitXor", "Not", "BitNot", "And", 
                      "Or", "QuestionMark", "Colon", "Assign", "PlusAssign", 
                      "MinusAssign", "MultiplyAssign", "ModuloAssign", "PowerAssign", 
                      "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
                      "RightShiftLogicalAssign", "BitAndAssign", "BitOrAssign", 
                      "BitXorAssign", "FatArrow", "Divide", "DivideAssign", 
                      "CloseBrace", "StringLiteral", "NumericLiteral", "IdentifierName", 
                      "Comment", "MultiLineComment", "SingleLineComment", 
                      "LineTerminator", "WhiteSpace" ];

var ruleNames =  [ "file", "inputElement", "commonToken", "punctuator", 
                   "divPunctuator" ];

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
ECMAScriptLexicalGrammarParser.RegularExpressionLiteral = 1;
ECMAScriptLexicalGrammarParser.OpenBrace = 2;
ECMAScriptLexicalGrammarParser.OpenParen = 3;
ECMAScriptLexicalGrammarParser.CloseParen = 4;
ECMAScriptLexicalGrammarParser.OpenBracket = 5;
ECMAScriptLexicalGrammarParser.CloseBracket = 6;
ECMAScriptLexicalGrammarParser.Dot = 7;
ECMAScriptLexicalGrammarParser.Spread = 8;
ECMAScriptLexicalGrammarParser.SemiColon = 9;
ECMAScriptLexicalGrammarParser.Comma = 10;
ECMAScriptLexicalGrammarParser.LessThan = 11;
ECMAScriptLexicalGrammarParser.GreaterThan = 12;
ECMAScriptLexicalGrammarParser.LessThanEquals = 13;
ECMAScriptLexicalGrammarParser.GreaterThanEquals = 14;
ECMAScriptLexicalGrammarParser.Equals = 15;
ECMAScriptLexicalGrammarParser.NotEquals = 16;
ECMAScriptLexicalGrammarParser.IdentityEquals = 17;
ECMAScriptLexicalGrammarParser.IdentityNotEquals = 18;
ECMAScriptLexicalGrammarParser.Plus = 19;
ECMAScriptLexicalGrammarParser.Minus = 20;
ECMAScriptLexicalGrammarParser.Multiply = 21;
ECMAScriptLexicalGrammarParser.Modulo = 22;
ECMAScriptLexicalGrammarParser.Power = 23;
ECMAScriptLexicalGrammarParser.PlusPlus = 24;
ECMAScriptLexicalGrammarParser.MinusMinus = 25;
ECMAScriptLexicalGrammarParser.LeftShiftArithmetic = 26;
ECMAScriptLexicalGrammarParser.RightShiftArithmetic = 27;
ECMAScriptLexicalGrammarParser.RightShiftLogical = 28;
ECMAScriptLexicalGrammarParser.BitAnd = 29;
ECMAScriptLexicalGrammarParser.BitOr = 30;
ECMAScriptLexicalGrammarParser.BitXor = 31;
ECMAScriptLexicalGrammarParser.Not = 32;
ECMAScriptLexicalGrammarParser.BitNot = 33;
ECMAScriptLexicalGrammarParser.And = 34;
ECMAScriptLexicalGrammarParser.Or = 35;
ECMAScriptLexicalGrammarParser.QuestionMark = 36;
ECMAScriptLexicalGrammarParser.Colon = 37;
ECMAScriptLexicalGrammarParser.Assign = 38;
ECMAScriptLexicalGrammarParser.PlusAssign = 39;
ECMAScriptLexicalGrammarParser.MinusAssign = 40;
ECMAScriptLexicalGrammarParser.MultiplyAssign = 41;
ECMAScriptLexicalGrammarParser.ModuloAssign = 42;
ECMAScriptLexicalGrammarParser.PowerAssign = 43;
ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign = 44;
ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign = 45;
ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign = 46;
ECMAScriptLexicalGrammarParser.BitAndAssign = 47;
ECMAScriptLexicalGrammarParser.BitOrAssign = 48;
ECMAScriptLexicalGrammarParser.BitXorAssign = 49;
ECMAScriptLexicalGrammarParser.FatArrow = 50;
ECMAScriptLexicalGrammarParser.Divide = 51;
ECMAScriptLexicalGrammarParser.DivideAssign = 52;
ECMAScriptLexicalGrammarParser.CloseBrace = 53;
ECMAScriptLexicalGrammarParser.StringLiteral = 54;
ECMAScriptLexicalGrammarParser.NumericLiteral = 55;
ECMAScriptLexicalGrammarParser.IdentifierName = 56;
ECMAScriptLexicalGrammarParser.Comment = 57;
ECMAScriptLexicalGrammarParser.MultiLineComment = 58;
ECMAScriptLexicalGrammarParser.SingleLineComment = 59;
ECMAScriptLexicalGrammarParser.LineTerminator = 60;
ECMAScriptLexicalGrammarParser.WhiteSpace = 61;

ECMAScriptLexicalGrammarParser.RULE_file = 0;
ECMAScriptLexicalGrammarParser.RULE_inputElement = 1;
ECMAScriptLexicalGrammarParser.RULE_commonToken = 2;
ECMAScriptLexicalGrammarParser.RULE_punctuator = 3;
ECMAScriptLexicalGrammarParser.RULE_divPunctuator = 4;

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

FileContext.prototype.inputElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InputElementContext);
    } else {
        return this.getTypedRuleContext(InputElementContext,i);
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
        this.state = 13;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptLexicalGrammarParser.RegularExpressionLiteral) | (1 << ECMAScriptLexicalGrammarParser.OpenBrace) | (1 << ECMAScriptLexicalGrammarParser.OpenParen) | (1 << ECMAScriptLexicalGrammarParser.CloseParen) | (1 << ECMAScriptLexicalGrammarParser.OpenBracket) | (1 << ECMAScriptLexicalGrammarParser.CloseBracket) | (1 << ECMAScriptLexicalGrammarParser.Dot) | (1 << ECMAScriptLexicalGrammarParser.Spread) | (1 << ECMAScriptLexicalGrammarParser.SemiColon) | (1 << ECMAScriptLexicalGrammarParser.Comma) | (1 << ECMAScriptLexicalGrammarParser.LessThan) | (1 << ECMAScriptLexicalGrammarParser.GreaterThan) | (1 << ECMAScriptLexicalGrammarParser.LessThanEquals) | (1 << ECMAScriptLexicalGrammarParser.GreaterThanEquals) | (1 << ECMAScriptLexicalGrammarParser.Equals) | (1 << ECMAScriptLexicalGrammarParser.NotEquals) | (1 << ECMAScriptLexicalGrammarParser.IdentityEquals) | (1 << ECMAScriptLexicalGrammarParser.IdentityNotEquals) | (1 << ECMAScriptLexicalGrammarParser.Plus) | (1 << ECMAScriptLexicalGrammarParser.Minus) | (1 << ECMAScriptLexicalGrammarParser.Multiply) | (1 << ECMAScriptLexicalGrammarParser.Modulo) | (1 << ECMAScriptLexicalGrammarParser.Power) | (1 << ECMAScriptLexicalGrammarParser.PlusPlus) | (1 << ECMAScriptLexicalGrammarParser.MinusMinus) | (1 << ECMAScriptLexicalGrammarParser.LeftShiftArithmetic) | (1 << ECMAScriptLexicalGrammarParser.RightShiftArithmetic) | (1 << ECMAScriptLexicalGrammarParser.RightShiftLogical) | (1 << ECMAScriptLexicalGrammarParser.BitAnd) | (1 << ECMAScriptLexicalGrammarParser.BitOr) | (1 << ECMAScriptLexicalGrammarParser.BitXor))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ECMAScriptLexicalGrammarParser.Not - 32)) | (1 << (ECMAScriptLexicalGrammarParser.BitNot - 32)) | (1 << (ECMAScriptLexicalGrammarParser.And - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Or - 32)) | (1 << (ECMAScriptLexicalGrammarParser.QuestionMark - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Colon - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Assign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.PlusAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.MinusAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.MultiplyAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.ModuloAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.PowerAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.BitAndAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.BitOrAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.BitXorAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.FatArrow - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Divide - 32)) | (1 << (ECMAScriptLexicalGrammarParser.DivideAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.CloseBrace - 32)) | (1 << (ECMAScriptLexicalGrammarParser.StringLiteral - 32)) | (1 << (ECMAScriptLexicalGrammarParser.NumericLiteral - 32)) | (1 << (ECMAScriptLexicalGrammarParser.IdentifierName - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Comment - 32)) | (1 << (ECMAScriptLexicalGrammarParser.LineTerminator - 32)) | (1 << (ECMAScriptLexicalGrammarParser.WhiteSpace - 32)))) !== 0)) {
            this.state = 10;
            this.inputElement();
            this.state = 15;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 16;
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

function InputElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_inputElement;
    return this;
}

InputElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputElementContext.prototype.constructor = InputElementContext;

InputElementContext.prototype.WhiteSpace = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.WhiteSpace, 0);
};

InputElementContext.prototype.LineTerminator = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.LineTerminator, 0);
};

InputElementContext.prototype.Comment = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Comment, 0);
};

InputElementContext.prototype.commonToken = function() {
    return this.getTypedRuleContext(CommonTokenContext,0);
};

InputElementContext.prototype.divPunctuator = function() {
    return this.getTypedRuleContext(DivPunctuatorContext,0);
};

InputElementContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.CloseBrace, 0);
};

InputElementContext.prototype.RegularExpressionLiteral = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.RegularExpressionLiteral, 0);
};

InputElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterInputElement(this);
	}
};

InputElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitInputElement(this);
	}
};




ECMAScriptLexicalGrammarParser.InputElementContext = InputElementContext;

ECMAScriptLexicalGrammarParser.prototype.inputElement = function() {

    var localctx = new InputElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScriptLexicalGrammarParser.RULE_inputElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptLexicalGrammarParser.WhiteSpace:
            this.state = 18;
            this.match(ECMAScriptLexicalGrammarParser.WhiteSpace);
            break;
        case ECMAScriptLexicalGrammarParser.LineTerminator:
            this.state = 19;
            this.match(ECMAScriptLexicalGrammarParser.LineTerminator);
            break;
        case ECMAScriptLexicalGrammarParser.Comment:
            this.state = 20;
            this.match(ECMAScriptLexicalGrammarParser.Comment);
            break;
        case ECMAScriptLexicalGrammarParser.OpenBrace:
        case ECMAScriptLexicalGrammarParser.OpenParen:
        case ECMAScriptLexicalGrammarParser.CloseParen:
        case ECMAScriptLexicalGrammarParser.OpenBracket:
        case ECMAScriptLexicalGrammarParser.CloseBracket:
        case ECMAScriptLexicalGrammarParser.Dot:
        case ECMAScriptLexicalGrammarParser.Spread:
        case ECMAScriptLexicalGrammarParser.SemiColon:
        case ECMAScriptLexicalGrammarParser.Comma:
        case ECMAScriptLexicalGrammarParser.LessThan:
        case ECMAScriptLexicalGrammarParser.GreaterThan:
        case ECMAScriptLexicalGrammarParser.LessThanEquals:
        case ECMAScriptLexicalGrammarParser.GreaterThanEquals:
        case ECMAScriptLexicalGrammarParser.Equals:
        case ECMAScriptLexicalGrammarParser.NotEquals:
        case ECMAScriptLexicalGrammarParser.IdentityEquals:
        case ECMAScriptLexicalGrammarParser.IdentityNotEquals:
        case ECMAScriptLexicalGrammarParser.Plus:
        case ECMAScriptLexicalGrammarParser.Minus:
        case ECMAScriptLexicalGrammarParser.Multiply:
        case ECMAScriptLexicalGrammarParser.Modulo:
        case ECMAScriptLexicalGrammarParser.Power:
        case ECMAScriptLexicalGrammarParser.PlusPlus:
        case ECMAScriptLexicalGrammarParser.MinusMinus:
        case ECMAScriptLexicalGrammarParser.LeftShiftArithmetic:
        case ECMAScriptLexicalGrammarParser.RightShiftArithmetic:
        case ECMAScriptLexicalGrammarParser.RightShiftLogical:
        case ECMAScriptLexicalGrammarParser.BitAnd:
        case ECMAScriptLexicalGrammarParser.BitOr:
        case ECMAScriptLexicalGrammarParser.BitXor:
        case ECMAScriptLexicalGrammarParser.Not:
        case ECMAScriptLexicalGrammarParser.BitNot:
        case ECMAScriptLexicalGrammarParser.And:
        case ECMAScriptLexicalGrammarParser.Or:
        case ECMAScriptLexicalGrammarParser.QuestionMark:
        case ECMAScriptLexicalGrammarParser.Colon:
        case ECMAScriptLexicalGrammarParser.Assign:
        case ECMAScriptLexicalGrammarParser.PlusAssign:
        case ECMAScriptLexicalGrammarParser.MinusAssign:
        case ECMAScriptLexicalGrammarParser.MultiplyAssign:
        case ECMAScriptLexicalGrammarParser.ModuloAssign:
        case ECMAScriptLexicalGrammarParser.PowerAssign:
        case ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign:
        case ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign:
        case ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign:
        case ECMAScriptLexicalGrammarParser.BitAndAssign:
        case ECMAScriptLexicalGrammarParser.BitOrAssign:
        case ECMAScriptLexicalGrammarParser.BitXorAssign:
        case ECMAScriptLexicalGrammarParser.FatArrow:
        case ECMAScriptLexicalGrammarParser.StringLiteral:
        case ECMAScriptLexicalGrammarParser.NumericLiteral:
        case ECMAScriptLexicalGrammarParser.IdentifierName:
            this.state = 21;
            this.commonToken();
            break;
        case ECMAScriptLexicalGrammarParser.Divide:
        case ECMAScriptLexicalGrammarParser.DivideAssign:
            this.state = 22;
            this.divPunctuator();
            break;
        case ECMAScriptLexicalGrammarParser.CloseBrace:
            this.state = 23;
            this.match(ECMAScriptLexicalGrammarParser.CloseBrace);
            break;
        case ECMAScriptLexicalGrammarParser.RegularExpressionLiteral:
            this.state = 24;
            this.match(ECMAScriptLexicalGrammarParser.RegularExpressionLiteral);
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

function CommonTokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_commonToken;
    return this;
}

CommonTokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommonTokenContext.prototype.constructor = CommonTokenContext;

CommonTokenContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.IdentifierName, 0);
};

CommonTokenContext.prototype.punctuator = function() {
    return this.getTypedRuleContext(PunctuatorContext,0);
};

CommonTokenContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.NumericLiteral, 0);
};

CommonTokenContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.StringLiteral, 0);
};

CommonTokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterCommonToken(this);
	}
};

CommonTokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitCommonToken(this);
	}
};




ECMAScriptLexicalGrammarParser.CommonTokenContext = CommonTokenContext;

ECMAScriptLexicalGrammarParser.prototype.commonToken = function() {

    var localctx = new CommonTokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptLexicalGrammarParser.RULE_commonToken);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptLexicalGrammarParser.IdentifierName:
            this.state = 27;
            this.match(ECMAScriptLexicalGrammarParser.IdentifierName);
            break;
        case ECMAScriptLexicalGrammarParser.OpenBrace:
        case ECMAScriptLexicalGrammarParser.OpenParen:
        case ECMAScriptLexicalGrammarParser.CloseParen:
        case ECMAScriptLexicalGrammarParser.OpenBracket:
        case ECMAScriptLexicalGrammarParser.CloseBracket:
        case ECMAScriptLexicalGrammarParser.Dot:
        case ECMAScriptLexicalGrammarParser.Spread:
        case ECMAScriptLexicalGrammarParser.SemiColon:
        case ECMAScriptLexicalGrammarParser.Comma:
        case ECMAScriptLexicalGrammarParser.LessThan:
        case ECMAScriptLexicalGrammarParser.GreaterThan:
        case ECMAScriptLexicalGrammarParser.LessThanEquals:
        case ECMAScriptLexicalGrammarParser.GreaterThanEquals:
        case ECMAScriptLexicalGrammarParser.Equals:
        case ECMAScriptLexicalGrammarParser.NotEquals:
        case ECMAScriptLexicalGrammarParser.IdentityEquals:
        case ECMAScriptLexicalGrammarParser.IdentityNotEquals:
        case ECMAScriptLexicalGrammarParser.Plus:
        case ECMAScriptLexicalGrammarParser.Minus:
        case ECMAScriptLexicalGrammarParser.Multiply:
        case ECMAScriptLexicalGrammarParser.Modulo:
        case ECMAScriptLexicalGrammarParser.Power:
        case ECMAScriptLexicalGrammarParser.PlusPlus:
        case ECMAScriptLexicalGrammarParser.MinusMinus:
        case ECMAScriptLexicalGrammarParser.LeftShiftArithmetic:
        case ECMAScriptLexicalGrammarParser.RightShiftArithmetic:
        case ECMAScriptLexicalGrammarParser.RightShiftLogical:
        case ECMAScriptLexicalGrammarParser.BitAnd:
        case ECMAScriptLexicalGrammarParser.BitOr:
        case ECMAScriptLexicalGrammarParser.BitXor:
        case ECMAScriptLexicalGrammarParser.Not:
        case ECMAScriptLexicalGrammarParser.BitNot:
        case ECMAScriptLexicalGrammarParser.And:
        case ECMAScriptLexicalGrammarParser.Or:
        case ECMAScriptLexicalGrammarParser.QuestionMark:
        case ECMAScriptLexicalGrammarParser.Colon:
        case ECMAScriptLexicalGrammarParser.Assign:
        case ECMAScriptLexicalGrammarParser.PlusAssign:
        case ECMAScriptLexicalGrammarParser.MinusAssign:
        case ECMAScriptLexicalGrammarParser.MultiplyAssign:
        case ECMAScriptLexicalGrammarParser.ModuloAssign:
        case ECMAScriptLexicalGrammarParser.PowerAssign:
        case ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign:
        case ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign:
        case ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign:
        case ECMAScriptLexicalGrammarParser.BitAndAssign:
        case ECMAScriptLexicalGrammarParser.BitOrAssign:
        case ECMAScriptLexicalGrammarParser.BitXorAssign:
        case ECMAScriptLexicalGrammarParser.FatArrow:
            this.state = 28;
            this.punctuator();
            break;
        case ECMAScriptLexicalGrammarParser.NumericLiteral:
            this.state = 29;
            this.match(ECMAScriptLexicalGrammarParser.NumericLiteral);
            break;
        case ECMAScriptLexicalGrammarParser.StringLiteral:
            this.state = 30;
            this.match(ECMAScriptLexicalGrammarParser.StringLiteral);
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

function PunctuatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_punctuator;
    return this;
}

PunctuatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PunctuatorContext.prototype.constructor = PunctuatorContext;

PunctuatorContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.OpenBrace, 0);
};

PunctuatorContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.OpenParen, 0);
};

PunctuatorContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.CloseParen, 0);
};

PunctuatorContext.prototype.OpenBracket = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.OpenBracket, 0);
};

PunctuatorContext.prototype.CloseBracket = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.CloseBracket, 0);
};

PunctuatorContext.prototype.Dot = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Dot, 0);
};

PunctuatorContext.prototype.Spread = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Spread, 0);
};

PunctuatorContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.SemiColon, 0);
};

PunctuatorContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Comma, 0);
};

PunctuatorContext.prototype.LessThan = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.LessThan, 0);
};

PunctuatorContext.prototype.GreaterThan = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.GreaterThan, 0);
};

PunctuatorContext.prototype.LessThanEquals = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.LessThanEquals, 0);
};

PunctuatorContext.prototype.GreaterThanEquals = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.GreaterThanEquals, 0);
};

PunctuatorContext.prototype.Equals = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Equals, 0);
};

PunctuatorContext.prototype.NotEquals = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.NotEquals, 0);
};

PunctuatorContext.prototype.IdentityEquals = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.IdentityEquals, 0);
};

PunctuatorContext.prototype.IdentityNotEquals = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.IdentityNotEquals, 0);
};

PunctuatorContext.prototype.Plus = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Plus, 0);
};

PunctuatorContext.prototype.Minus = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Minus, 0);
};

PunctuatorContext.prototype.Multiply = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Multiply, 0);
};

PunctuatorContext.prototype.Modulo = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Modulo, 0);
};

PunctuatorContext.prototype.Power = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Power, 0);
};

PunctuatorContext.prototype.PlusPlus = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.PlusPlus, 0);
};

PunctuatorContext.prototype.MinusMinus = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.MinusMinus, 0);
};

PunctuatorContext.prototype.LeftShiftArithmetic = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.LeftShiftArithmetic, 0);
};

PunctuatorContext.prototype.RightShiftArithmetic = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.RightShiftArithmetic, 0);
};

PunctuatorContext.prototype.RightShiftLogical = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.RightShiftLogical, 0);
};

PunctuatorContext.prototype.BitAnd = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.BitAnd, 0);
};

PunctuatorContext.prototype.BitOr = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.BitOr, 0);
};

PunctuatorContext.prototype.BitXor = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.BitXor, 0);
};

PunctuatorContext.prototype.Not = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Not, 0);
};

PunctuatorContext.prototype.BitNot = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.BitNot, 0);
};

PunctuatorContext.prototype.And = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.And, 0);
};

PunctuatorContext.prototype.Or = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Or, 0);
};

PunctuatorContext.prototype.QuestionMark = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.QuestionMark, 0);
};

PunctuatorContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Colon, 0);
};

PunctuatorContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Assign, 0);
};

PunctuatorContext.prototype.PlusAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.PlusAssign, 0);
};

PunctuatorContext.prototype.MinusAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.MinusAssign, 0);
};

PunctuatorContext.prototype.MultiplyAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.MultiplyAssign, 0);
};

PunctuatorContext.prototype.ModuloAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.ModuloAssign, 0);
};

PunctuatorContext.prototype.PowerAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.PowerAssign, 0);
};

PunctuatorContext.prototype.LeftShiftArithmeticAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign, 0);
};

PunctuatorContext.prototype.RightShiftArithmeticAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign, 0);
};

PunctuatorContext.prototype.RightShiftLogicalAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign, 0);
};

PunctuatorContext.prototype.BitAndAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.BitAndAssign, 0);
};

PunctuatorContext.prototype.BitOrAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.BitOrAssign, 0);
};

PunctuatorContext.prototype.BitXorAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.BitXorAssign, 0);
};

PunctuatorContext.prototype.FatArrow = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.FatArrow, 0);
};

PunctuatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterPunctuator(this);
	}
};

PunctuatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitPunctuator(this);
	}
};




ECMAScriptLexicalGrammarParser.PunctuatorContext = PunctuatorContext;

ECMAScriptLexicalGrammarParser.prototype.punctuator = function() {

    var localctx = new PunctuatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScriptLexicalGrammarParser.RULE_punctuator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptLexicalGrammarParser.OpenBrace) | (1 << ECMAScriptLexicalGrammarParser.OpenParen) | (1 << ECMAScriptLexicalGrammarParser.CloseParen) | (1 << ECMAScriptLexicalGrammarParser.OpenBracket) | (1 << ECMAScriptLexicalGrammarParser.CloseBracket) | (1 << ECMAScriptLexicalGrammarParser.Dot) | (1 << ECMAScriptLexicalGrammarParser.Spread) | (1 << ECMAScriptLexicalGrammarParser.SemiColon) | (1 << ECMAScriptLexicalGrammarParser.Comma) | (1 << ECMAScriptLexicalGrammarParser.LessThan) | (1 << ECMAScriptLexicalGrammarParser.GreaterThan) | (1 << ECMAScriptLexicalGrammarParser.LessThanEquals) | (1 << ECMAScriptLexicalGrammarParser.GreaterThanEquals) | (1 << ECMAScriptLexicalGrammarParser.Equals) | (1 << ECMAScriptLexicalGrammarParser.NotEquals) | (1 << ECMAScriptLexicalGrammarParser.IdentityEquals) | (1 << ECMAScriptLexicalGrammarParser.IdentityNotEquals) | (1 << ECMAScriptLexicalGrammarParser.Plus) | (1 << ECMAScriptLexicalGrammarParser.Minus) | (1 << ECMAScriptLexicalGrammarParser.Multiply) | (1 << ECMAScriptLexicalGrammarParser.Modulo) | (1 << ECMAScriptLexicalGrammarParser.Power) | (1 << ECMAScriptLexicalGrammarParser.PlusPlus) | (1 << ECMAScriptLexicalGrammarParser.MinusMinus) | (1 << ECMAScriptLexicalGrammarParser.LeftShiftArithmetic) | (1 << ECMAScriptLexicalGrammarParser.RightShiftArithmetic) | (1 << ECMAScriptLexicalGrammarParser.RightShiftLogical) | (1 << ECMAScriptLexicalGrammarParser.BitAnd) | (1 << ECMAScriptLexicalGrammarParser.BitOr) | (1 << ECMAScriptLexicalGrammarParser.BitXor))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ECMAScriptLexicalGrammarParser.Not - 32)) | (1 << (ECMAScriptLexicalGrammarParser.BitNot - 32)) | (1 << (ECMAScriptLexicalGrammarParser.And - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Or - 32)) | (1 << (ECMAScriptLexicalGrammarParser.QuestionMark - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Colon - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Assign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.PlusAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.MinusAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.MultiplyAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.ModuloAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.PowerAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.BitAndAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.BitOrAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.BitXorAssign - 32)) | (1 << (ECMAScriptLexicalGrammarParser.FatArrow - 32)))) !== 0))) {
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

function DivPunctuatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_divPunctuator;
    return this;
}

DivPunctuatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivPunctuatorContext.prototype.constructor = DivPunctuatorContext;

DivPunctuatorContext.prototype.Divide = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Divide, 0);
};

DivPunctuatorContext.prototype.DivideAssign = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.DivideAssign, 0);
};

DivPunctuatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterDivPunctuator(this);
	}
};

DivPunctuatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitDivPunctuator(this);
	}
};




ECMAScriptLexicalGrammarParser.DivPunctuatorContext = DivPunctuatorContext;

ECMAScriptLexicalGrammarParser.prototype.divPunctuator = function() {

    var localctx = new DivPunctuatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ECMAScriptLexicalGrammarParser.RULE_divPunctuator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptLexicalGrammarParser.Divide || _la===ECMAScriptLexicalGrammarParser.DivideAssign)) {
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


exports.ECMAScriptLexicalGrammarParser = ECMAScriptLexicalGrammarParser;
