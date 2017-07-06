// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptLexicalGrammar.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptLexicalGrammarListener = require('./ECMAScriptLexicalGrammarListener').ECMAScriptLexicalGrammarListener;
var grammarFileName = "ECMAScriptLexicalGrammar.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003tQ\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e\n\u0002\f\u0002",
    "\u000e\u0002!\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003-\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u00044\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u00059\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000bI\n\u000b\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0002\u000f",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002",
    "\b\u0004\u000299;j\u0003\u0002kl\u0004\u0002\u0003\u0003\u0006\u0006",
    "\u0003\u0002\u0004\u0005\u0003\u0002\n+\u0003\u000208\u0002T\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0004,\u0003\u0002\u0002\u0002\u00063\u0003",
    "\u0002\u0002\u0002\b8\u0003\u0002\u0002\u0002\n:\u0003\u0002\u0002\u0002",
    "\f<\u0003\u0002\u0002\u0002\u000e>\u0003\u0002\u0002\u0002\u0010@\u0003",
    "\u0002\u0002\u0002\u0012B\u0003\u0002\u0002\u0002\u0014H\u0003\u0002",
    "\u0002\u0002\u0016J\u0003\u0002\u0002\u0002\u0018L\u0003\u0002\u0002",
    "\u0002\u001aN\u0003\u0002\u0002\u0002\u001c\u001e\u0005\u0004\u0003",
    "\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e!\u0003\u0002\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 \"\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002\"#",
    "\u0007\u0002\u0002\u0003#\u0003\u0003\u0002\u0002\u0002$-\u0007t\u0002",
    "\u0002%-\u0007s\u0002\u0002&-\u0007p\u0002\u0002\'-\u0005\u0006\u0004",
    "\u0002(-\u0005\f\u0007\u0002)-\u0005\u000e\b\u0002*-\u0007\u0007\u0002",
    "\u0002+-\u0005\u0012\n\u0002,$\u0003\u0002\u0002\u0002,%\u0003\u0002",
    "\u0002\u0002,&\u0003\u0002\u0002\u0002,\'\u0003\u0002\u0002\u0002,(",
    "\u0003\u0002\u0002\u0002,)\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002",
    "\u0002,+\u0003\u0002\u0002\u0002-\u0005\u0003\u0002\u0002\u0002.4\u0005",
    "\b\u0005\u0002/4\u0005\n\u0006\u000204\u0007n\u0002\u000214\u0007m\u0002",
    "\u000224\u0005\u0010\t\u00023.\u0003\u0002\u0002\u00023/\u0003\u0002",
    "\u0002\u000230\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000232\u0003",
    "\u0002\u0002\u00024\u0007\u0003\u0002\u0002\u000259\u0007o\u0002\u0002",
    "69\u0005\u0014\u000b\u000279\u0005\u001a\u000e\u000285\u0003\u0002\u0002",
    "\u000286\u0003\u0002\u0002\u000287\u0003\u0002\u0002\u00029\t\u0003",
    "\u0002\u0002\u0002:;\t\u0002\u0002\u0002;\u000b\u0003\u0002\u0002\u0002",
    "<=\t\u0003\u0002\u0002=\r\u0003\u0002\u0002\u0002>?\u0007:\u0002\u0002",
    "?\u000f\u0003\u0002\u0002\u0002@A\t\u0004\u0002\u0002A\u0011\u0003\u0002",
    "\u0002\u0002BC\t\u0005\u0002\u0002C\u0013\u0003\u0002\u0002\u0002DI",
    "\u0005\u0016\f\u0002EI\u0005\u0018\r\u0002FI\u0007\b\u0002\u0002GI\u0007",
    "\t\u0002\u0002HD\u0003\u0002\u0002\u0002HE\u0003\u0002\u0002\u0002H",
    "F\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002I\u0015\u0003\u0002",
    "\u0002\u0002JK\t\u0006\u0002\u0002K\u0017\u0003\u0002\u0002\u0002LM",
    "\u0007,\u0002\u0002M\u0019\u0003\u0002\u0002\u0002NO\t\u0007\u0002\u0002",
    "O\u001b\u0003\u0002\u0002\u0002\u0007\u001f,38H"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, "'await'", 
                     "'break'", "'case'", "'catch'", "'class'", "'const'", 
                     "'continue'", "'debugger'", "'default'", "'delete'", 
                     "'do'", "'else'", "'export'", "'extends'", "'finally'", 
                     "'for'", "'function'", "'if'", "'import'", "'in'", 
                     "'instanceof'", "'new'", "'return'", "'super'", "'switch'", 
                     "'this'", "'throw'", "'try'", "'typeof'", "'var'", 
                     "'void'", "'while'", "'with'", "'yield'", "'enum'", 
                     "'null'", "'true'", "'false'", "'as'", "'async'", "'from'", 
                     "'get'", "'let'", "'of'", "'set'", "'static'", "'target'", 
                     "'{'", "'}'", "'('", "')'", "'['", "']'", "'.'", "'...'", 
                     "';'", "','", "'<'", "'>'", "'<='", "'>='", "'=='", 
                     "'!='", "'==='", "'!=='", "'+'", "'-'", "'*'", "'%'", 
                     "'**'", "'++'", "'--'", "'<<'", "'>>'", "'>>>'", "'&'", 
                     "'|'", "'^'", "'!'", "'~'", "'&&'", "'||'", "'?'", 
                     "':'", "'='", "'+='", "'-='", "'*='", "'%='", "'**='", 
                     "'<<='", "'>>='", "'>>>='", "'&='", "'|='", "'^='", 
                     "'=>'" ];

var symbolicNames = [ null, "TemplateHead", "TemplateMiddle", "TemplateTail", 
                      "NoSubstitutionTemplate", "RegularExpressionLiteral", 
                      "NullLiteral", "BooleanLiteral", "Await", "Break", 
                      "Case", "Catch", "Class", "Const", "Continue", "Debugger", 
                      "Default", "Delete", "Do", "Else", "Export", "Extends", 
                      "Finally", "For", "Function", "If", "Import", "In", 
                      "Instanceof", "New", "Return", "Super", "Switch", 
                      "This", "Throw", "Try", "Typeof", "Var", "Void", "While", 
                      "With", "Yield", "Enum", "Null", "True", "False", 
                      "As", "Async", "From", "Get", "Let", "Of", "Set", 
                      "Static", "Target", "OpenBrace", "CloseBrace", "OpenParen", 
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
                      "StringLiteral", "NumericLiteral", "IdentifierName", 
                      "Comment", "MultiLineComment", "SingleLineComment", 
                      "LineTerminator", "WhiteSpace" ];

var ruleNames =  [ "file", "inputElement", "commonToken", "identifierName", 
                   "punctuator", "divPunctuator", "rightBracePunctuator", 
                   "template", "templateSubstitutionTail", "reservedWord", 
                   "keyword", "futureReservedWord", "miscIdentifier" ];

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
ECMAScriptLexicalGrammarParser.TemplateHead = 1;
ECMAScriptLexicalGrammarParser.TemplateMiddle = 2;
ECMAScriptLexicalGrammarParser.TemplateTail = 3;
ECMAScriptLexicalGrammarParser.NoSubstitutionTemplate = 4;
ECMAScriptLexicalGrammarParser.RegularExpressionLiteral = 5;
ECMAScriptLexicalGrammarParser.NullLiteral = 6;
ECMAScriptLexicalGrammarParser.BooleanLiteral = 7;
ECMAScriptLexicalGrammarParser.Await = 8;
ECMAScriptLexicalGrammarParser.Break = 9;
ECMAScriptLexicalGrammarParser.Case = 10;
ECMAScriptLexicalGrammarParser.Catch = 11;
ECMAScriptLexicalGrammarParser.Class = 12;
ECMAScriptLexicalGrammarParser.Const = 13;
ECMAScriptLexicalGrammarParser.Continue = 14;
ECMAScriptLexicalGrammarParser.Debugger = 15;
ECMAScriptLexicalGrammarParser.Default = 16;
ECMAScriptLexicalGrammarParser.Delete = 17;
ECMAScriptLexicalGrammarParser.Do = 18;
ECMAScriptLexicalGrammarParser.Else = 19;
ECMAScriptLexicalGrammarParser.Export = 20;
ECMAScriptLexicalGrammarParser.Extends = 21;
ECMAScriptLexicalGrammarParser.Finally = 22;
ECMAScriptLexicalGrammarParser.For = 23;
ECMAScriptLexicalGrammarParser.Function = 24;
ECMAScriptLexicalGrammarParser.If = 25;
ECMAScriptLexicalGrammarParser.Import = 26;
ECMAScriptLexicalGrammarParser.In = 27;
ECMAScriptLexicalGrammarParser.Instanceof = 28;
ECMAScriptLexicalGrammarParser.New = 29;
ECMAScriptLexicalGrammarParser.Return = 30;
ECMAScriptLexicalGrammarParser.Super = 31;
ECMAScriptLexicalGrammarParser.Switch = 32;
ECMAScriptLexicalGrammarParser.This = 33;
ECMAScriptLexicalGrammarParser.Throw = 34;
ECMAScriptLexicalGrammarParser.Try = 35;
ECMAScriptLexicalGrammarParser.Typeof = 36;
ECMAScriptLexicalGrammarParser.Var = 37;
ECMAScriptLexicalGrammarParser.Void = 38;
ECMAScriptLexicalGrammarParser.While = 39;
ECMAScriptLexicalGrammarParser.With = 40;
ECMAScriptLexicalGrammarParser.Yield = 41;
ECMAScriptLexicalGrammarParser.Enum = 42;
ECMAScriptLexicalGrammarParser.Null = 43;
ECMAScriptLexicalGrammarParser.True = 44;
ECMAScriptLexicalGrammarParser.False = 45;
ECMAScriptLexicalGrammarParser.As = 46;
ECMAScriptLexicalGrammarParser.Async = 47;
ECMAScriptLexicalGrammarParser.From = 48;
ECMAScriptLexicalGrammarParser.Get = 49;
ECMAScriptLexicalGrammarParser.Let = 50;
ECMAScriptLexicalGrammarParser.Of = 51;
ECMAScriptLexicalGrammarParser.Set = 52;
ECMAScriptLexicalGrammarParser.Static = 53;
ECMAScriptLexicalGrammarParser.Target = 54;
ECMAScriptLexicalGrammarParser.OpenBrace = 55;
ECMAScriptLexicalGrammarParser.CloseBrace = 56;
ECMAScriptLexicalGrammarParser.OpenParen = 57;
ECMAScriptLexicalGrammarParser.CloseParen = 58;
ECMAScriptLexicalGrammarParser.OpenBracket = 59;
ECMAScriptLexicalGrammarParser.CloseBracket = 60;
ECMAScriptLexicalGrammarParser.Dot = 61;
ECMAScriptLexicalGrammarParser.Spread = 62;
ECMAScriptLexicalGrammarParser.SemiColon = 63;
ECMAScriptLexicalGrammarParser.Comma = 64;
ECMAScriptLexicalGrammarParser.LessThan = 65;
ECMAScriptLexicalGrammarParser.GreaterThan = 66;
ECMAScriptLexicalGrammarParser.LessThanEquals = 67;
ECMAScriptLexicalGrammarParser.GreaterThanEquals = 68;
ECMAScriptLexicalGrammarParser.Equals = 69;
ECMAScriptLexicalGrammarParser.NotEquals = 70;
ECMAScriptLexicalGrammarParser.IdentityEquals = 71;
ECMAScriptLexicalGrammarParser.IdentityNotEquals = 72;
ECMAScriptLexicalGrammarParser.Plus = 73;
ECMAScriptLexicalGrammarParser.Minus = 74;
ECMAScriptLexicalGrammarParser.Multiply = 75;
ECMAScriptLexicalGrammarParser.Modulo = 76;
ECMAScriptLexicalGrammarParser.Power = 77;
ECMAScriptLexicalGrammarParser.PlusPlus = 78;
ECMAScriptLexicalGrammarParser.MinusMinus = 79;
ECMAScriptLexicalGrammarParser.LeftShiftArithmetic = 80;
ECMAScriptLexicalGrammarParser.RightShiftArithmetic = 81;
ECMAScriptLexicalGrammarParser.RightShiftLogical = 82;
ECMAScriptLexicalGrammarParser.BitAnd = 83;
ECMAScriptLexicalGrammarParser.BitOr = 84;
ECMAScriptLexicalGrammarParser.BitXor = 85;
ECMAScriptLexicalGrammarParser.Not = 86;
ECMAScriptLexicalGrammarParser.BitNot = 87;
ECMAScriptLexicalGrammarParser.And = 88;
ECMAScriptLexicalGrammarParser.Or = 89;
ECMAScriptLexicalGrammarParser.QuestionMark = 90;
ECMAScriptLexicalGrammarParser.Colon = 91;
ECMAScriptLexicalGrammarParser.Assign = 92;
ECMAScriptLexicalGrammarParser.PlusAssign = 93;
ECMAScriptLexicalGrammarParser.MinusAssign = 94;
ECMAScriptLexicalGrammarParser.MultiplyAssign = 95;
ECMAScriptLexicalGrammarParser.ModuloAssign = 96;
ECMAScriptLexicalGrammarParser.PowerAssign = 97;
ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign = 98;
ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign = 99;
ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign = 100;
ECMAScriptLexicalGrammarParser.BitAndAssign = 101;
ECMAScriptLexicalGrammarParser.BitOrAssign = 102;
ECMAScriptLexicalGrammarParser.BitXorAssign = 103;
ECMAScriptLexicalGrammarParser.FatArrow = 104;
ECMAScriptLexicalGrammarParser.Divide = 105;
ECMAScriptLexicalGrammarParser.DivideAssign = 106;
ECMAScriptLexicalGrammarParser.StringLiteral = 107;
ECMAScriptLexicalGrammarParser.NumericLiteral = 108;
ECMAScriptLexicalGrammarParser.IdentifierName = 109;
ECMAScriptLexicalGrammarParser.Comment = 110;
ECMAScriptLexicalGrammarParser.MultiLineComment = 111;
ECMAScriptLexicalGrammarParser.SingleLineComment = 112;
ECMAScriptLexicalGrammarParser.LineTerminator = 113;
ECMAScriptLexicalGrammarParser.WhiteSpace = 114;

ECMAScriptLexicalGrammarParser.RULE_file = 0;
ECMAScriptLexicalGrammarParser.RULE_inputElement = 1;
ECMAScriptLexicalGrammarParser.RULE_commonToken = 2;
ECMAScriptLexicalGrammarParser.RULE_identifierName = 3;
ECMAScriptLexicalGrammarParser.RULE_punctuator = 4;
ECMAScriptLexicalGrammarParser.RULE_divPunctuator = 5;
ECMAScriptLexicalGrammarParser.RULE_rightBracePunctuator = 6;
ECMAScriptLexicalGrammarParser.RULE_template = 7;
ECMAScriptLexicalGrammarParser.RULE_templateSubstitutionTail = 8;
ECMAScriptLexicalGrammarParser.RULE_reservedWord = 9;
ECMAScriptLexicalGrammarParser.RULE_keyword = 10;
ECMAScriptLexicalGrammarParser.RULE_futureReservedWord = 11;
ECMAScriptLexicalGrammarParser.RULE_miscIdentifier = 12;

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
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptLexicalGrammarParser.TemplateHead) | (1 << ECMAScriptLexicalGrammarParser.TemplateMiddle) | (1 << ECMAScriptLexicalGrammarParser.TemplateTail) | (1 << ECMAScriptLexicalGrammarParser.NoSubstitutionTemplate) | (1 << ECMAScriptLexicalGrammarParser.RegularExpressionLiteral) | (1 << ECMAScriptLexicalGrammarParser.NullLiteral) | (1 << ECMAScriptLexicalGrammarParser.BooleanLiteral) | (1 << ECMAScriptLexicalGrammarParser.Await) | (1 << ECMAScriptLexicalGrammarParser.Break) | (1 << ECMAScriptLexicalGrammarParser.Case) | (1 << ECMAScriptLexicalGrammarParser.Catch) | (1 << ECMAScriptLexicalGrammarParser.Class) | (1 << ECMAScriptLexicalGrammarParser.Const) | (1 << ECMAScriptLexicalGrammarParser.Continue) | (1 << ECMAScriptLexicalGrammarParser.Debugger) | (1 << ECMAScriptLexicalGrammarParser.Default) | (1 << ECMAScriptLexicalGrammarParser.Delete) | (1 << ECMAScriptLexicalGrammarParser.Do) | (1 << ECMAScriptLexicalGrammarParser.Else) | (1 << ECMAScriptLexicalGrammarParser.Export) | (1 << ECMAScriptLexicalGrammarParser.Extends) | (1 << ECMAScriptLexicalGrammarParser.Finally) | (1 << ECMAScriptLexicalGrammarParser.For) | (1 << ECMAScriptLexicalGrammarParser.Function) | (1 << ECMAScriptLexicalGrammarParser.If) | (1 << ECMAScriptLexicalGrammarParser.Import) | (1 << ECMAScriptLexicalGrammarParser.In) | (1 << ECMAScriptLexicalGrammarParser.Instanceof) | (1 << ECMAScriptLexicalGrammarParser.New) | (1 << ECMAScriptLexicalGrammarParser.Return) | (1 << ECMAScriptLexicalGrammarParser.Super))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ECMAScriptLexicalGrammarParser.Switch - 32)) | (1 << (ECMAScriptLexicalGrammarParser.This - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Throw - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Try - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Typeof - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Var - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Void - 32)) | (1 << (ECMAScriptLexicalGrammarParser.While - 32)) | (1 << (ECMAScriptLexicalGrammarParser.With - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Yield - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Enum - 32)) | (1 << (ECMAScriptLexicalGrammarParser.As - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Async - 32)) | (1 << (ECMAScriptLexicalGrammarParser.From - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Get - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Let - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Of - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Set - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Static - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Target - 32)) | (1 << (ECMAScriptLexicalGrammarParser.OpenBrace - 32)) | (1 << (ECMAScriptLexicalGrammarParser.CloseBrace - 32)) | (1 << (ECMAScriptLexicalGrammarParser.OpenParen - 32)) | (1 << (ECMAScriptLexicalGrammarParser.CloseParen - 32)) | (1 << (ECMAScriptLexicalGrammarParser.OpenBracket - 32)) | (1 << (ECMAScriptLexicalGrammarParser.CloseBracket - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Dot - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Spread - 32)) | (1 << (ECMAScriptLexicalGrammarParser.SemiColon - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (ECMAScriptLexicalGrammarParser.Comma - 64)) | (1 << (ECMAScriptLexicalGrammarParser.LessThan - 64)) | (1 << (ECMAScriptLexicalGrammarParser.GreaterThan - 64)) | (1 << (ECMAScriptLexicalGrammarParser.LessThanEquals - 64)) | (1 << (ECMAScriptLexicalGrammarParser.GreaterThanEquals - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Equals - 64)) | (1 << (ECMAScriptLexicalGrammarParser.NotEquals - 64)) | (1 << (ECMAScriptLexicalGrammarParser.IdentityEquals - 64)) | (1 << (ECMAScriptLexicalGrammarParser.IdentityNotEquals - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Plus - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Minus - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Multiply - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Modulo - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Power - 64)) | (1 << (ECMAScriptLexicalGrammarParser.PlusPlus - 64)) | (1 << (ECMAScriptLexicalGrammarParser.MinusMinus - 64)) | (1 << (ECMAScriptLexicalGrammarParser.LeftShiftArithmetic - 64)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftArithmetic - 64)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftLogical - 64)) | (1 << (ECMAScriptLexicalGrammarParser.BitAnd - 64)) | (1 << (ECMAScriptLexicalGrammarParser.BitOr - 64)) | (1 << (ECMAScriptLexicalGrammarParser.BitXor - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Not - 64)) | (1 << (ECMAScriptLexicalGrammarParser.BitNot - 64)) | (1 << (ECMAScriptLexicalGrammarParser.And - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Or - 64)) | (1 << (ECMAScriptLexicalGrammarParser.QuestionMark - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Colon - 64)) | (1 << (ECMAScriptLexicalGrammarParser.Assign - 64)) | (1 << (ECMAScriptLexicalGrammarParser.PlusAssign - 64)) | (1 << (ECMAScriptLexicalGrammarParser.MinusAssign - 64)) | (1 << (ECMAScriptLexicalGrammarParser.MultiplyAssign - 64)))) !== 0) || ((((_la - 96)) & ~0x1f) == 0 && ((1 << (_la - 96)) & ((1 << (ECMAScriptLexicalGrammarParser.ModuloAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.PowerAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.BitAndAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.BitOrAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.BitXorAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.FatArrow - 96)) | (1 << (ECMAScriptLexicalGrammarParser.Divide - 96)) | (1 << (ECMAScriptLexicalGrammarParser.DivideAssign - 96)) | (1 << (ECMAScriptLexicalGrammarParser.StringLiteral - 96)) | (1 << (ECMAScriptLexicalGrammarParser.NumericLiteral - 96)) | (1 << (ECMAScriptLexicalGrammarParser.IdentifierName - 96)) | (1 << (ECMAScriptLexicalGrammarParser.Comment - 96)) | (1 << (ECMAScriptLexicalGrammarParser.LineTerminator - 96)) | (1 << (ECMAScriptLexicalGrammarParser.WhiteSpace - 96)))) !== 0)) {
            this.state = 26;
            this.inputElement();
            this.state = 31;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 32;
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

InputElementContext.prototype.rightBracePunctuator = function() {
    return this.getTypedRuleContext(RightBracePunctuatorContext,0);
};

InputElementContext.prototype.RegularExpressionLiteral = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.RegularExpressionLiteral, 0);
};

InputElementContext.prototype.templateSubstitutionTail = function() {
    return this.getTypedRuleContext(TemplateSubstitutionTailContext,0);
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
        this.state = 42;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptLexicalGrammarParser.WhiteSpace:
            this.state = 34;
            this.match(ECMAScriptLexicalGrammarParser.WhiteSpace);
            break;
        case ECMAScriptLexicalGrammarParser.LineTerminator:
            this.state = 35;
            this.match(ECMAScriptLexicalGrammarParser.LineTerminator);
            break;
        case ECMAScriptLexicalGrammarParser.Comment:
            this.state = 36;
            this.match(ECMAScriptLexicalGrammarParser.Comment);
            break;
        case ECMAScriptLexicalGrammarParser.TemplateHead:
        case ECMAScriptLexicalGrammarParser.NoSubstitutionTemplate:
        case ECMAScriptLexicalGrammarParser.NullLiteral:
        case ECMAScriptLexicalGrammarParser.BooleanLiteral:
        case ECMAScriptLexicalGrammarParser.Await:
        case ECMAScriptLexicalGrammarParser.Break:
        case ECMAScriptLexicalGrammarParser.Case:
        case ECMAScriptLexicalGrammarParser.Catch:
        case ECMAScriptLexicalGrammarParser.Class:
        case ECMAScriptLexicalGrammarParser.Const:
        case ECMAScriptLexicalGrammarParser.Continue:
        case ECMAScriptLexicalGrammarParser.Debugger:
        case ECMAScriptLexicalGrammarParser.Default:
        case ECMAScriptLexicalGrammarParser.Delete:
        case ECMAScriptLexicalGrammarParser.Do:
        case ECMAScriptLexicalGrammarParser.Else:
        case ECMAScriptLexicalGrammarParser.Export:
        case ECMAScriptLexicalGrammarParser.Extends:
        case ECMAScriptLexicalGrammarParser.Finally:
        case ECMAScriptLexicalGrammarParser.For:
        case ECMAScriptLexicalGrammarParser.Function:
        case ECMAScriptLexicalGrammarParser.If:
        case ECMAScriptLexicalGrammarParser.Import:
        case ECMAScriptLexicalGrammarParser.In:
        case ECMAScriptLexicalGrammarParser.Instanceof:
        case ECMAScriptLexicalGrammarParser.New:
        case ECMAScriptLexicalGrammarParser.Return:
        case ECMAScriptLexicalGrammarParser.Super:
        case ECMAScriptLexicalGrammarParser.Switch:
        case ECMAScriptLexicalGrammarParser.This:
        case ECMAScriptLexicalGrammarParser.Throw:
        case ECMAScriptLexicalGrammarParser.Try:
        case ECMAScriptLexicalGrammarParser.Typeof:
        case ECMAScriptLexicalGrammarParser.Var:
        case ECMAScriptLexicalGrammarParser.Void:
        case ECMAScriptLexicalGrammarParser.While:
        case ECMAScriptLexicalGrammarParser.With:
        case ECMAScriptLexicalGrammarParser.Yield:
        case ECMAScriptLexicalGrammarParser.Enum:
        case ECMAScriptLexicalGrammarParser.As:
        case ECMAScriptLexicalGrammarParser.Async:
        case ECMAScriptLexicalGrammarParser.From:
        case ECMAScriptLexicalGrammarParser.Get:
        case ECMAScriptLexicalGrammarParser.Let:
        case ECMAScriptLexicalGrammarParser.Of:
        case ECMAScriptLexicalGrammarParser.Set:
        case ECMAScriptLexicalGrammarParser.Static:
        case ECMAScriptLexicalGrammarParser.Target:
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
            this.state = 37;
            this.commonToken();
            break;
        case ECMAScriptLexicalGrammarParser.Divide:
        case ECMAScriptLexicalGrammarParser.DivideAssign:
            this.state = 38;
            this.divPunctuator();
            break;
        case ECMAScriptLexicalGrammarParser.CloseBrace:
            this.state = 39;
            this.rightBracePunctuator();
            break;
        case ECMAScriptLexicalGrammarParser.RegularExpressionLiteral:
            this.state = 40;
            this.match(ECMAScriptLexicalGrammarParser.RegularExpressionLiteral);
            break;
        case ECMAScriptLexicalGrammarParser.TemplateMiddle:
        case ECMAScriptLexicalGrammarParser.TemplateTail:
            this.state = 41;
            this.templateSubstitutionTail();
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

CommonTokenContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
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

CommonTokenContext.prototype.template = function() {
    return this.getTypedRuleContext(TemplateContext,0);
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
        this.state = 49;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptLexicalGrammarParser.NullLiteral:
        case ECMAScriptLexicalGrammarParser.BooleanLiteral:
        case ECMAScriptLexicalGrammarParser.Await:
        case ECMAScriptLexicalGrammarParser.Break:
        case ECMAScriptLexicalGrammarParser.Case:
        case ECMAScriptLexicalGrammarParser.Catch:
        case ECMAScriptLexicalGrammarParser.Class:
        case ECMAScriptLexicalGrammarParser.Const:
        case ECMAScriptLexicalGrammarParser.Continue:
        case ECMAScriptLexicalGrammarParser.Debugger:
        case ECMAScriptLexicalGrammarParser.Default:
        case ECMAScriptLexicalGrammarParser.Delete:
        case ECMAScriptLexicalGrammarParser.Do:
        case ECMAScriptLexicalGrammarParser.Else:
        case ECMAScriptLexicalGrammarParser.Export:
        case ECMAScriptLexicalGrammarParser.Extends:
        case ECMAScriptLexicalGrammarParser.Finally:
        case ECMAScriptLexicalGrammarParser.For:
        case ECMAScriptLexicalGrammarParser.Function:
        case ECMAScriptLexicalGrammarParser.If:
        case ECMAScriptLexicalGrammarParser.Import:
        case ECMAScriptLexicalGrammarParser.In:
        case ECMAScriptLexicalGrammarParser.Instanceof:
        case ECMAScriptLexicalGrammarParser.New:
        case ECMAScriptLexicalGrammarParser.Return:
        case ECMAScriptLexicalGrammarParser.Super:
        case ECMAScriptLexicalGrammarParser.Switch:
        case ECMAScriptLexicalGrammarParser.This:
        case ECMAScriptLexicalGrammarParser.Throw:
        case ECMAScriptLexicalGrammarParser.Try:
        case ECMAScriptLexicalGrammarParser.Typeof:
        case ECMAScriptLexicalGrammarParser.Var:
        case ECMAScriptLexicalGrammarParser.Void:
        case ECMAScriptLexicalGrammarParser.While:
        case ECMAScriptLexicalGrammarParser.With:
        case ECMAScriptLexicalGrammarParser.Yield:
        case ECMAScriptLexicalGrammarParser.Enum:
        case ECMAScriptLexicalGrammarParser.As:
        case ECMAScriptLexicalGrammarParser.Async:
        case ECMAScriptLexicalGrammarParser.From:
        case ECMAScriptLexicalGrammarParser.Get:
        case ECMAScriptLexicalGrammarParser.Let:
        case ECMAScriptLexicalGrammarParser.Of:
        case ECMAScriptLexicalGrammarParser.Set:
        case ECMAScriptLexicalGrammarParser.Static:
        case ECMAScriptLexicalGrammarParser.Target:
        case ECMAScriptLexicalGrammarParser.IdentifierName:
            this.state = 44;
            this.identifierName();
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
            this.state = 45;
            this.punctuator();
            break;
        case ECMAScriptLexicalGrammarParser.NumericLiteral:
            this.state = 46;
            this.match(ECMAScriptLexicalGrammarParser.NumericLiteral);
            break;
        case ECMAScriptLexicalGrammarParser.StringLiteral:
            this.state = 47;
            this.match(ECMAScriptLexicalGrammarParser.StringLiteral);
            break;
        case ECMAScriptLexicalGrammarParser.TemplateHead:
        case ECMAScriptLexicalGrammarParser.NoSubstitutionTemplate:
            this.state = 48;
            this.template();
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

function IdentifierNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_identifierName;
    return this;
}

IdentifierNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierNameContext.prototype.constructor = IdentifierNameContext;

IdentifierNameContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.IdentifierName, 0);
};

IdentifierNameContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

IdentifierNameContext.prototype.miscIdentifier = function() {
    return this.getTypedRuleContext(MiscIdentifierContext,0);
};

IdentifierNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterIdentifierName(this);
	}
};

IdentifierNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitIdentifierName(this);
	}
};




ECMAScriptLexicalGrammarParser.IdentifierNameContext = IdentifierNameContext;

ECMAScriptLexicalGrammarParser.prototype.identifierName = function() {

    var localctx = new IdentifierNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScriptLexicalGrammarParser.RULE_identifierName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptLexicalGrammarParser.IdentifierName:
            this.state = 51;
            this.match(ECMAScriptLexicalGrammarParser.IdentifierName);
            break;
        case ECMAScriptLexicalGrammarParser.NullLiteral:
        case ECMAScriptLexicalGrammarParser.BooleanLiteral:
        case ECMAScriptLexicalGrammarParser.Await:
        case ECMAScriptLexicalGrammarParser.Break:
        case ECMAScriptLexicalGrammarParser.Case:
        case ECMAScriptLexicalGrammarParser.Catch:
        case ECMAScriptLexicalGrammarParser.Class:
        case ECMAScriptLexicalGrammarParser.Const:
        case ECMAScriptLexicalGrammarParser.Continue:
        case ECMAScriptLexicalGrammarParser.Debugger:
        case ECMAScriptLexicalGrammarParser.Default:
        case ECMAScriptLexicalGrammarParser.Delete:
        case ECMAScriptLexicalGrammarParser.Do:
        case ECMAScriptLexicalGrammarParser.Else:
        case ECMAScriptLexicalGrammarParser.Export:
        case ECMAScriptLexicalGrammarParser.Extends:
        case ECMAScriptLexicalGrammarParser.Finally:
        case ECMAScriptLexicalGrammarParser.For:
        case ECMAScriptLexicalGrammarParser.Function:
        case ECMAScriptLexicalGrammarParser.If:
        case ECMAScriptLexicalGrammarParser.Import:
        case ECMAScriptLexicalGrammarParser.In:
        case ECMAScriptLexicalGrammarParser.Instanceof:
        case ECMAScriptLexicalGrammarParser.New:
        case ECMAScriptLexicalGrammarParser.Return:
        case ECMAScriptLexicalGrammarParser.Super:
        case ECMAScriptLexicalGrammarParser.Switch:
        case ECMAScriptLexicalGrammarParser.This:
        case ECMAScriptLexicalGrammarParser.Throw:
        case ECMAScriptLexicalGrammarParser.Try:
        case ECMAScriptLexicalGrammarParser.Typeof:
        case ECMAScriptLexicalGrammarParser.Var:
        case ECMAScriptLexicalGrammarParser.Void:
        case ECMAScriptLexicalGrammarParser.While:
        case ECMAScriptLexicalGrammarParser.With:
        case ECMAScriptLexicalGrammarParser.Yield:
        case ECMAScriptLexicalGrammarParser.Enum:
            this.state = 52;
            this.reservedWord();
            break;
        case ECMAScriptLexicalGrammarParser.As:
        case ECMAScriptLexicalGrammarParser.Async:
        case ECMAScriptLexicalGrammarParser.From:
        case ECMAScriptLexicalGrammarParser.Get:
        case ECMAScriptLexicalGrammarParser.Let:
        case ECMAScriptLexicalGrammarParser.Of:
        case ECMAScriptLexicalGrammarParser.Set:
        case ECMAScriptLexicalGrammarParser.Static:
        case ECMAScriptLexicalGrammarParser.Target:
            this.state = 53;
            this.miscIdentifier();
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
    this.enterRule(localctx, 8, ECMAScriptLexicalGrammarParser.RULE_punctuator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        _la = this._input.LA(1);
        if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (ECMAScriptLexicalGrammarParser.OpenBrace - 55)) | (1 << (ECMAScriptLexicalGrammarParser.OpenParen - 55)) | (1 << (ECMAScriptLexicalGrammarParser.CloseParen - 55)) | (1 << (ECMAScriptLexicalGrammarParser.OpenBracket - 55)) | (1 << (ECMAScriptLexicalGrammarParser.CloseBracket - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Dot - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Spread - 55)) | (1 << (ECMAScriptLexicalGrammarParser.SemiColon - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Comma - 55)) | (1 << (ECMAScriptLexicalGrammarParser.LessThan - 55)) | (1 << (ECMAScriptLexicalGrammarParser.GreaterThan - 55)) | (1 << (ECMAScriptLexicalGrammarParser.LessThanEquals - 55)) | (1 << (ECMAScriptLexicalGrammarParser.GreaterThanEquals - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Equals - 55)) | (1 << (ECMAScriptLexicalGrammarParser.NotEquals - 55)) | (1 << (ECMAScriptLexicalGrammarParser.IdentityEquals - 55)) | (1 << (ECMAScriptLexicalGrammarParser.IdentityNotEquals - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Plus - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Minus - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Multiply - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Modulo - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Power - 55)) | (1 << (ECMAScriptLexicalGrammarParser.PlusPlus - 55)) | (1 << (ECMAScriptLexicalGrammarParser.MinusMinus - 55)) | (1 << (ECMAScriptLexicalGrammarParser.LeftShiftArithmetic - 55)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftArithmetic - 55)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftLogical - 55)) | (1 << (ECMAScriptLexicalGrammarParser.BitAnd - 55)) | (1 << (ECMAScriptLexicalGrammarParser.BitOr - 55)) | (1 << (ECMAScriptLexicalGrammarParser.BitXor - 55)) | (1 << (ECMAScriptLexicalGrammarParser.Not - 55)))) !== 0) || ((((_la - 87)) & ~0x1f) == 0 && ((1 << (_la - 87)) & ((1 << (ECMAScriptLexicalGrammarParser.BitNot - 87)) | (1 << (ECMAScriptLexicalGrammarParser.And - 87)) | (1 << (ECMAScriptLexicalGrammarParser.Or - 87)) | (1 << (ECMAScriptLexicalGrammarParser.QuestionMark - 87)) | (1 << (ECMAScriptLexicalGrammarParser.Colon - 87)) | (1 << (ECMAScriptLexicalGrammarParser.Assign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.PlusAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.MinusAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.MultiplyAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.ModuloAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.PowerAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.LeftShiftArithmeticAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftArithmeticAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.RightShiftLogicalAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.BitAndAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.BitOrAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.BitXorAssign - 87)) | (1 << (ECMAScriptLexicalGrammarParser.FatArrow - 87)))) !== 0))) {
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
    this.enterRule(localctx, 10, ECMAScriptLexicalGrammarParser.RULE_divPunctuator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
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

function RightBracePunctuatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_rightBracePunctuator;
    return this;
}

RightBracePunctuatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RightBracePunctuatorContext.prototype.constructor = RightBracePunctuatorContext;

RightBracePunctuatorContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.CloseBrace, 0);
};

RightBracePunctuatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterRightBracePunctuator(this);
	}
};

RightBracePunctuatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitRightBracePunctuator(this);
	}
};




ECMAScriptLexicalGrammarParser.RightBracePunctuatorContext = RightBracePunctuatorContext;

ECMAScriptLexicalGrammarParser.prototype.rightBracePunctuator = function() {

    var localctx = new RightBracePunctuatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ECMAScriptLexicalGrammarParser.RULE_rightBracePunctuator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(ECMAScriptLexicalGrammarParser.CloseBrace);
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

function TemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_template;
    return this;
}

TemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TemplateContext.prototype.constructor = TemplateContext;

TemplateContext.prototype.NoSubstitutionTemplate = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.NoSubstitutionTemplate, 0);
};

TemplateContext.prototype.TemplateHead = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.TemplateHead, 0);
};

TemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterTemplate(this);
	}
};

TemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitTemplate(this);
	}
};




ECMAScriptLexicalGrammarParser.TemplateContext = TemplateContext;

ECMAScriptLexicalGrammarParser.prototype.template = function() {

    var localctx = new TemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ECMAScriptLexicalGrammarParser.RULE_template);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptLexicalGrammarParser.TemplateHead || _la===ECMAScriptLexicalGrammarParser.NoSubstitutionTemplate)) {
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

function TemplateSubstitutionTailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_templateSubstitutionTail;
    return this;
}

TemplateSubstitutionTailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TemplateSubstitutionTailContext.prototype.constructor = TemplateSubstitutionTailContext;

TemplateSubstitutionTailContext.prototype.TemplateMiddle = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.TemplateMiddle, 0);
};

TemplateSubstitutionTailContext.prototype.TemplateTail = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.TemplateTail, 0);
};

TemplateSubstitutionTailContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterTemplateSubstitutionTail(this);
	}
};

TemplateSubstitutionTailContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitTemplateSubstitutionTail(this);
	}
};




ECMAScriptLexicalGrammarParser.TemplateSubstitutionTailContext = TemplateSubstitutionTailContext;

ECMAScriptLexicalGrammarParser.prototype.templateSubstitutionTail = function() {

    var localctx = new TemplateSubstitutionTailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ECMAScriptLexicalGrammarParser.RULE_templateSubstitutionTail);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptLexicalGrammarParser.TemplateMiddle || _la===ECMAScriptLexicalGrammarParser.TemplateTail)) {
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

function ReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_reservedWord;
    return this;
}

ReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedWordContext.prototype.constructor = ReservedWordContext;

ReservedWordContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

ReservedWordContext.prototype.futureReservedWord = function() {
    return this.getTypedRuleContext(FutureReservedWordContext,0);
};

ReservedWordContext.prototype.NullLiteral = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.NullLiteral, 0);
};

ReservedWordContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.BooleanLiteral, 0);
};

ReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterReservedWord(this);
	}
};

ReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitReservedWord(this);
	}
};




ECMAScriptLexicalGrammarParser.ReservedWordContext = ReservedWordContext;

ECMAScriptLexicalGrammarParser.prototype.reservedWord = function() {

    var localctx = new ReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScriptLexicalGrammarParser.RULE_reservedWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptLexicalGrammarParser.Await:
        case ECMAScriptLexicalGrammarParser.Break:
        case ECMAScriptLexicalGrammarParser.Case:
        case ECMAScriptLexicalGrammarParser.Catch:
        case ECMAScriptLexicalGrammarParser.Class:
        case ECMAScriptLexicalGrammarParser.Const:
        case ECMAScriptLexicalGrammarParser.Continue:
        case ECMAScriptLexicalGrammarParser.Debugger:
        case ECMAScriptLexicalGrammarParser.Default:
        case ECMAScriptLexicalGrammarParser.Delete:
        case ECMAScriptLexicalGrammarParser.Do:
        case ECMAScriptLexicalGrammarParser.Else:
        case ECMAScriptLexicalGrammarParser.Export:
        case ECMAScriptLexicalGrammarParser.Extends:
        case ECMAScriptLexicalGrammarParser.Finally:
        case ECMAScriptLexicalGrammarParser.For:
        case ECMAScriptLexicalGrammarParser.Function:
        case ECMAScriptLexicalGrammarParser.If:
        case ECMAScriptLexicalGrammarParser.Import:
        case ECMAScriptLexicalGrammarParser.In:
        case ECMAScriptLexicalGrammarParser.Instanceof:
        case ECMAScriptLexicalGrammarParser.New:
        case ECMAScriptLexicalGrammarParser.Return:
        case ECMAScriptLexicalGrammarParser.Super:
        case ECMAScriptLexicalGrammarParser.Switch:
        case ECMAScriptLexicalGrammarParser.This:
        case ECMAScriptLexicalGrammarParser.Throw:
        case ECMAScriptLexicalGrammarParser.Try:
        case ECMAScriptLexicalGrammarParser.Typeof:
        case ECMAScriptLexicalGrammarParser.Var:
        case ECMAScriptLexicalGrammarParser.Void:
        case ECMAScriptLexicalGrammarParser.While:
        case ECMAScriptLexicalGrammarParser.With:
        case ECMAScriptLexicalGrammarParser.Yield:
            this.state = 66;
            this.keyword();
            break;
        case ECMAScriptLexicalGrammarParser.Enum:
            this.state = 67;
            this.futureReservedWord();
            break;
        case ECMAScriptLexicalGrammarParser.NullLiteral:
            this.state = 68;
            this.match(ECMAScriptLexicalGrammarParser.NullLiteral);
            break;
        case ECMAScriptLexicalGrammarParser.BooleanLiteral:
            this.state = 69;
            this.match(ECMAScriptLexicalGrammarParser.BooleanLiteral);
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

function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.Await = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Await, 0);
};

KeywordContext.prototype.Break = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Break, 0);
};

KeywordContext.prototype.Case = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Case, 0);
};

KeywordContext.prototype.Catch = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Catch, 0);
};

KeywordContext.prototype.Class = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Class, 0);
};

KeywordContext.prototype.Const = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Const, 0);
};

KeywordContext.prototype.Continue = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Continue, 0);
};

KeywordContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Debugger, 0);
};

KeywordContext.prototype.Default = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Default, 0);
};

KeywordContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Delete, 0);
};

KeywordContext.prototype.Do = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Do, 0);
};

KeywordContext.prototype.Else = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Else, 0);
};

KeywordContext.prototype.Export = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Export, 0);
};

KeywordContext.prototype.Extends = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Extends, 0);
};

KeywordContext.prototype.Finally = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Finally, 0);
};

KeywordContext.prototype.For = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.For, 0);
};

KeywordContext.prototype.Function = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Function, 0);
};

KeywordContext.prototype.If = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.If, 0);
};

KeywordContext.prototype.Import = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Import, 0);
};

KeywordContext.prototype.In = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.In, 0);
};

KeywordContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Instanceof, 0);
};

KeywordContext.prototype.New = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.New, 0);
};

KeywordContext.prototype.Return = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Return, 0);
};

KeywordContext.prototype.Super = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Super, 0);
};

KeywordContext.prototype.Switch = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Switch, 0);
};

KeywordContext.prototype.This = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.This, 0);
};

KeywordContext.prototype.Throw = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Throw, 0);
};

KeywordContext.prototype.Try = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Try, 0);
};

KeywordContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Typeof, 0);
};

KeywordContext.prototype.Var = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Var, 0);
};

KeywordContext.prototype.Void = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Void, 0);
};

KeywordContext.prototype.While = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.While, 0);
};

KeywordContext.prototype.With = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.With, 0);
};

KeywordContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Yield, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitKeyword(this);
	}
};




ECMAScriptLexicalGrammarParser.KeywordContext = KeywordContext;

ECMAScriptLexicalGrammarParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScriptLexicalGrammarParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptLexicalGrammarParser.Await) | (1 << ECMAScriptLexicalGrammarParser.Break) | (1 << ECMAScriptLexicalGrammarParser.Case) | (1 << ECMAScriptLexicalGrammarParser.Catch) | (1 << ECMAScriptLexicalGrammarParser.Class) | (1 << ECMAScriptLexicalGrammarParser.Const) | (1 << ECMAScriptLexicalGrammarParser.Continue) | (1 << ECMAScriptLexicalGrammarParser.Debugger) | (1 << ECMAScriptLexicalGrammarParser.Default) | (1 << ECMAScriptLexicalGrammarParser.Delete) | (1 << ECMAScriptLexicalGrammarParser.Do) | (1 << ECMAScriptLexicalGrammarParser.Else) | (1 << ECMAScriptLexicalGrammarParser.Export) | (1 << ECMAScriptLexicalGrammarParser.Extends) | (1 << ECMAScriptLexicalGrammarParser.Finally) | (1 << ECMAScriptLexicalGrammarParser.For) | (1 << ECMAScriptLexicalGrammarParser.Function) | (1 << ECMAScriptLexicalGrammarParser.If) | (1 << ECMAScriptLexicalGrammarParser.Import) | (1 << ECMAScriptLexicalGrammarParser.In) | (1 << ECMAScriptLexicalGrammarParser.Instanceof) | (1 << ECMAScriptLexicalGrammarParser.New) | (1 << ECMAScriptLexicalGrammarParser.Return) | (1 << ECMAScriptLexicalGrammarParser.Super))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ECMAScriptLexicalGrammarParser.Switch - 32)) | (1 << (ECMAScriptLexicalGrammarParser.This - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Throw - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Try - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Typeof - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Var - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Void - 32)) | (1 << (ECMAScriptLexicalGrammarParser.While - 32)) | (1 << (ECMAScriptLexicalGrammarParser.With - 32)) | (1 << (ECMAScriptLexicalGrammarParser.Yield - 32)))) !== 0))) {
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

function FutureReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_futureReservedWord;
    return this;
}

FutureReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FutureReservedWordContext.prototype.constructor = FutureReservedWordContext;

FutureReservedWordContext.prototype.Enum = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Enum, 0);
};

FutureReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterFutureReservedWord(this);
	}
};

FutureReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitFutureReservedWord(this);
	}
};




ECMAScriptLexicalGrammarParser.FutureReservedWordContext = FutureReservedWordContext;

ECMAScriptLexicalGrammarParser.prototype.futureReservedWord = function() {

    var localctx = new FutureReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ECMAScriptLexicalGrammarParser.RULE_futureReservedWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(ECMAScriptLexicalGrammarParser.Enum);
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

function MiscIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptLexicalGrammarParser.RULE_miscIdentifier;
    return this;
}

MiscIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiscIdentifierContext.prototype.constructor = MiscIdentifierContext;

MiscIdentifierContext.prototype.As = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.As, 0);
};

MiscIdentifierContext.prototype.Async = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Async, 0);
};

MiscIdentifierContext.prototype.From = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.From, 0);
};

MiscIdentifierContext.prototype.Get = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Get, 0);
};

MiscIdentifierContext.prototype.Let = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Let, 0);
};

MiscIdentifierContext.prototype.Of = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Of, 0);
};

MiscIdentifierContext.prototype.Set = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Set, 0);
};

MiscIdentifierContext.prototype.Static = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Static, 0);
};

MiscIdentifierContext.prototype.Target = function() {
    return this.getToken(ECMAScriptLexicalGrammarParser.Target, 0);
};

MiscIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.enterMiscIdentifier(this);
	}
};

MiscIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptLexicalGrammarListener ) {
        listener.exitMiscIdentifier(this);
	}
};




ECMAScriptLexicalGrammarParser.MiscIdentifierContext = MiscIdentifierContext;

ECMAScriptLexicalGrammarParser.prototype.miscIdentifier = function() {

    var localctx = new MiscIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ECMAScriptLexicalGrammarParser.RULE_miscIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        _la = this._input.LA(1);
        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (ECMAScriptLexicalGrammarParser.As - 46)) | (1 << (ECMAScriptLexicalGrammarParser.Async - 46)) | (1 << (ECMAScriptLexicalGrammarParser.From - 46)) | (1 << (ECMAScriptLexicalGrammarParser.Get - 46)) | (1 << (ECMAScriptLexicalGrammarParser.Let - 46)) | (1 << (ECMAScriptLexicalGrammarParser.Of - 46)) | (1 << (ECMAScriptLexicalGrammarParser.Set - 46)) | (1 << (ECMAScriptLexicalGrammarParser.Static - 46)) | (1 << (ECMAScriptLexicalGrammarParser.Target - 46)))) !== 0))) {
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
