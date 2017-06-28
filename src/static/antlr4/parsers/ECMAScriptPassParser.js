// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptPassListener = require('./ECMAScriptPassListener').ECMAScriptPassListener;
var grammarFileName = "ECMAScriptPass.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003m\u00b8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0003\u0002\u0005\u0002B\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003H\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004M\n\u0004\f\u0004\u000e\u0004P\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005V",
    "\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006[\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0005\bb\n\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nk\n\n\u0003\n\u0003",
    "\n\u0005\no\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000bt\n\u000b",
    "\f\u000b\u000e\u000bw\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0006\u0015\u0090\n\u0015\r\u0015\u000e\u0015\u0091\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u0096\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u00a5\n",
    "\u001b\f\u001b\u000e\u001b\u00a8\u000b\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u00b2\n\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003",
    " \u0002\u0002!\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>\u0002\u0007\u0005\u0002\u0003",
    "\u0003:;dd\u0005\u0002\u0003\u0003ddhh\u0004\u0002)377\u0004\u0002A",
    "Acc\u0003\u0002<]\u0002\u00aa\u0002A\u0003\u0002\u0002\u0002\u0004G",
    "\u0003\u0002\u0002\u0002\u0006I\u0003\u0002\u0002\u0002\bU\u0003\u0002",
    "\u0002\u0002\nZ\u0003\u0002\u0002\u0002\f\\\u0003\u0002\u0002\u0002",
    "\u000ea\u0003\u0002\u0002\u0002\u0010c\u0003\u0002\u0002\u0002\u0012",
    "n\u0003\u0002\u0002\u0002\u0014p\u0003\u0002\u0002\u0002\u0016x\u0003",
    "\u0002\u0002\u0002\u0018|\u0003\u0002\u0002\u0002\u001a~\u0003\u0002",
    "\u0002\u0002\u001c\u0080\u0003\u0002\u0002\u0002\u001e\u0082\u0003\u0002",
    "\u0002\u0002 \u0084\u0003\u0002\u0002\u0002\"\u0086\u0003\u0002\u0002",
    "\u0002$\u0088\u0003\u0002\u0002\u0002&\u008a\u0003\u0002\u0002\u0002",
    "(\u008f\u0003\u0002\u0002\u0002*\u0095\u0003\u0002\u0002\u0002,\u0097",
    "\u0003\u0002\u0002\u0002.\u0099\u0003\u0002\u0002\u00020\u009b\u0003",
    "\u0002\u0002\u00022\u009f\u0003\u0002\u0002\u00024\u00a1\u0003\u0002",
    "\u0002\u00026\u00a9\u0003\u0002\u0002\u00028\u00ab\u0003\u0002\u0002",
    "\u0002:\u00b1\u0003\u0002\u0002\u0002<\u00b3\u0003\u0002\u0002\u0002",
    ">\u00b5\u0003\u0002\u0002\u0002@B\u0005(\u0015\u0002A@\u0003\u0002\u0002",
    "\u0002AB\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0007\u0002",
    "\u0002\u0003D\u0003\u0003\u0002\u0002\u0002EH\u0007\u000b\u0002\u0002",
    "FH\u0006\u0003\u0002\u0002GE\u0003\u0002\u0002\u0002GF\u0003\u0002\u0002",
    "\u0002H\u0005\u0003\u0002\u0002\u0002IN\u0005\"\u0012\u0002JK\u0007",
    "\f\u0002\u0002KM\u0005\"\u0012\u0002LJ\u0003\u0002\u0002\u0002MP\u0003",
    "\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002",
    "O\u0007\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QV\u0005\f",
    "\u0007\u0002RV\u0007]\u0002\u0002ST\u0007<\u0002\u0002TV\u0007\u0017",
    "\u0002\u0002UQ\u0003\u0002\u0002\u0002UR\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002V\t\u0003\u0002\u0002\u0002W[\u0005\f\u0007\u0002",
    "X[\u0007]\u0002\u0002Y[\u0007<\u0002\u0002ZW\u0003\u0002\u0002\u0002",
    "ZX\u0003\u0002\u0002\u0002ZY\u0003\u0002\u0002\u0002[\u000b\u0003\u0002",
    "\u0002\u0002\\]\u0007h\u0002\u0002]\r\u0003\u0002\u0002\u0002^b\u0005",
    "\b\u0005\u0002_b\u0005\u0010\t\u0002`b\u0005\u0012\n\u0002a^\u0003\u0002",
    "\u0002\u0002a_\u0003\u0002\u0002\u0002a`\u0003\u0002\u0002\u0002b\u000f",
    "\u0003\u0002\u0002\u0002cd\t\u0002\u0002\u0002d\u0011\u0003\u0002\u0002",
    "\u0002ef\u0007\u0004\u0002\u0002fo\u00079\u0002\u0002gh\u0007\u0004",
    "\u0002\u0002hj\u0005\u0014\u000b\u0002ik\u0007\f\u0002\u0002ji\u0003",
    "\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002",
    "lm\u00079\u0002\u0002mo\u0003\u0002\u0002\u0002ne\u0003\u0002\u0002",
    "\u0002ng\u0003\u0002\u0002\u0002o\u0013\u0003\u0002\u0002\u0002pu\u0005",
    "\u0016\f\u0002qr\u0007\f\u0002\u0002rt\u0005\u0016\f\u0002sq\u0003\u0002",
    "\u0002\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002v\u0015\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002",
    "\u0002xy\u0005\u0018\r\u0002yz\u0007\'\u0002\u0002z{\u0005\"\u0012\u0002",
    "{\u0017\u0003\u0002\u0002\u0002|}\u0005\u001a\u000e\u0002}\u0019\u0003",
    "\u0002\u0002\u0002~\u007f\t\u0003\u0002\u0002\u007f\u001b\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0005\u001e\u0010\u0002\u0081\u001d\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0005 \u0011\u0002\u0083\u001f\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0005\u000e\b\u0002\u0085!\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0005\u001c\u000f\u0002\u0087#\u0003\u0002\u0002",
    "\u0002\u0088\u0089\t\u0004\u0002\u0002\u0089%\u0003\u0002\u0002\u0002",
    "\u008a\u008b\u0005.\u0018\u0002\u008b\'\u0003\u0002\u0002\u0002\u008c",
    "\u008d\u0005*\u0016\u0002\u008d\u008e\u0005\u0004\u0003\u0002\u008e",
    "\u0090\u0003\u0002\u0002\u0002\u008f\u008c\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0003\u0002\u0002\u0002\u0092)\u0003\u0002\u0002\u0002\u0093",
    "\u0096\u0005&\u0014\u0002\u0094\u0096\u00058\u001d\u0002\u0095\u0093",
    "\u0003\u0002\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0096+",
    "\u0003\u0002\u0002\u0002\u0097\u0098\u0007\u000b\u0002\u0002\u0098-",
    "\u0003\u0002\u0002\u0002\u0099\u009a\u0005\u0006\u0004\u0002\u009a/",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u00052\u001a\u0002\u009c\u009d",
    "\u00054\u001b\u0002\u009d\u009e\u0007\u000b\u0002\u0002\u009e1\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\t\u0005\u0002\u0002\u00a03\u0003\u0002",
    "\u0002\u0002\u00a1\u00a6\u00056\u001c\u0002\u00a2\u00a3\u0007\f\u0002",
    "\u0002\u00a3\u00a5\u00056\u001c\u0002\u00a4\u00a2\u0003\u0002\u0002",
    "\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a75\u0003\u0002\u0002",
    "\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9\u00aa\u0005\n\u0006",
    "\u0002\u00aa7\u0003\u0002\u0002\u0002\u00ab\u00ac\u00050\u0019\u0002",
    "\u00ac9\u0003\u0002\u0002\u0002\u00ad\u00b2\u0005<\u001f\u0002\u00ae",
    "\u00b2\u0005> \u0002\u00af\u00b2\u0007:\u0002\u0002\u00b0\u00b2\u0007",
    ";\u0002\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002\u00b1\u00ae\u0003",
    "\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003",
    "\u0002\u0002\u0002\u00b2;\u0003\u0002\u0002\u0002\u00b3\u00b4\t\u0006",
    "\u0002\u0002\u00b4=\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007^\u0002",
    "\u0002\u00b6?\u0003\u0002\u0002\u0002\u000fAGNUZajnu\u0091\u0095\u00a6",
    "\u00b1"].join("");


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
                     "'^='", "'=>'", null, "'/'", "'/='", null, "'}'", null, 
                     null, "'await'", "'break'", "'case'", "'catch'", "'class'", 
                     "'const'", "'continue'", "'debugger'", "'default'", 
                     "'delete'", "'do'", "'else'", "'export'", "'extends'", 
                     "'finally'", "'for'", "'function'", "'if'", "'import'", 
                     "'in'", "'instanceof'", "'new'", "'return'", "'super'", 
                     "'switch'", "'this'", "'throw'", "'try'", "'typeof'", 
                     "'var'", "'void'", "'while'", "'with'", "'yield'", 
                     "'enum'", "'null'", "'true'", "'false'", "'async'", 
                     "'let'" ];

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
                      "DivideAssign", "DivPunctuator", "CloseBrace", "NullLiteral", 
                      "BooleanLiteral", "Await", "Break", "Case", "Catch", 
                      "Class", "Const", "Continue", "Debugger", "Default", 
                      "Delete", "Do", "Else", "Export", "Extends", "Finally", 
                      "For", "Function", "If", "Import", "In", "Instanceof", 
                      "New", "Return", "Super", "Switch", "This", "Throw", 
                      "Try", "Typeof", "Var", "Void", "While", "With", "Yield", 
                      "Enum", "Null", "True", "False", "Async", "Let", "StringLiteral", 
                      "BinaryIntegerLiteral", "OctalIntegerLiteral", "HexIntegerLiteral", 
                      "IdentifierName", "MultiLineComment", "SingleLineComment", 
                      "WhiteSpace", "LineTerminator", "LineTerminatorSequence" ];

var ruleNames =  [ "file", "eos", "expression_In", "identifierReference", 
                   "bindingIdentifier", "identifier", "primaryExpression", 
                   "literal", "objectLiteral", "propertyDefinitionList", 
                   "propertyDefinition", "propertyName", "literalPropertyName", 
                   "leftHandSideExpression", "newExpression", "memberExpression", 
                   "assignmentExpression_In", "assignmentOperator", "statement", 
                   "statementList", "statementListItem", "emptyStatement", 
                   "expressionStatement", "lexicalDeclaration_In", "letOrConst", 
                   "bindingList_In", "lexicalBinding_In", "declaration", 
                   "reservedWord", "keyword", "futureReservedWord" ];

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
ECMAScriptPassParser.NullLiteral = 56;
ECMAScriptPassParser.BooleanLiteral = 57;
ECMAScriptPassParser.Await = 58;
ECMAScriptPassParser.Break = 59;
ECMAScriptPassParser.Case = 60;
ECMAScriptPassParser.Catch = 61;
ECMAScriptPassParser.Class = 62;
ECMAScriptPassParser.Const = 63;
ECMAScriptPassParser.Continue = 64;
ECMAScriptPassParser.Debugger = 65;
ECMAScriptPassParser.Default = 66;
ECMAScriptPassParser.Delete = 67;
ECMAScriptPassParser.Do = 68;
ECMAScriptPassParser.Else = 69;
ECMAScriptPassParser.Export = 70;
ECMAScriptPassParser.Extends = 71;
ECMAScriptPassParser.Finally = 72;
ECMAScriptPassParser.For = 73;
ECMAScriptPassParser.Function = 74;
ECMAScriptPassParser.If = 75;
ECMAScriptPassParser.Import = 76;
ECMAScriptPassParser.In = 77;
ECMAScriptPassParser.Instanceof = 78;
ECMAScriptPassParser.New = 79;
ECMAScriptPassParser.Return = 80;
ECMAScriptPassParser.Super = 81;
ECMAScriptPassParser.Switch = 82;
ECMAScriptPassParser.This = 83;
ECMAScriptPassParser.Throw = 84;
ECMAScriptPassParser.Try = 85;
ECMAScriptPassParser.Typeof = 86;
ECMAScriptPassParser.Var = 87;
ECMAScriptPassParser.Void = 88;
ECMAScriptPassParser.While = 89;
ECMAScriptPassParser.With = 90;
ECMAScriptPassParser.Yield = 91;
ECMAScriptPassParser.Enum = 92;
ECMAScriptPassParser.Null = 93;
ECMAScriptPassParser.True = 94;
ECMAScriptPassParser.False = 95;
ECMAScriptPassParser.Async = 96;
ECMAScriptPassParser.Let = 97;
ECMAScriptPassParser.StringLiteral = 98;
ECMAScriptPassParser.BinaryIntegerLiteral = 99;
ECMAScriptPassParser.OctalIntegerLiteral = 100;
ECMAScriptPassParser.HexIntegerLiteral = 101;
ECMAScriptPassParser.IdentifierName = 102;
ECMAScriptPassParser.MultiLineComment = 103;
ECMAScriptPassParser.SingleLineComment = 104;
ECMAScriptPassParser.WhiteSpace = 105;
ECMAScriptPassParser.LineTerminator = 106;
ECMAScriptPassParser.LineTerminatorSequence = 107;

ECMAScriptPassParser.RULE_file = 0;
ECMAScriptPassParser.RULE_eos = 1;
ECMAScriptPassParser.RULE_expression_In = 2;
ECMAScriptPassParser.RULE_identifierReference = 3;
ECMAScriptPassParser.RULE_bindingIdentifier = 4;
ECMAScriptPassParser.RULE_identifier = 5;
ECMAScriptPassParser.RULE_primaryExpression = 6;
ECMAScriptPassParser.RULE_literal = 7;
ECMAScriptPassParser.RULE_objectLiteral = 8;
ECMAScriptPassParser.RULE_propertyDefinitionList = 9;
ECMAScriptPassParser.RULE_propertyDefinition = 10;
ECMAScriptPassParser.RULE_propertyName = 11;
ECMAScriptPassParser.RULE_literalPropertyName = 12;
ECMAScriptPassParser.RULE_leftHandSideExpression = 13;
ECMAScriptPassParser.RULE_newExpression = 14;
ECMAScriptPassParser.RULE_memberExpression = 15;
ECMAScriptPassParser.RULE_assignmentExpression_In = 16;
ECMAScriptPassParser.RULE_assignmentOperator = 17;
ECMAScriptPassParser.RULE_statement = 18;
ECMAScriptPassParser.RULE_statementList = 19;
ECMAScriptPassParser.RULE_statementListItem = 20;
ECMAScriptPassParser.RULE_emptyStatement = 21;
ECMAScriptPassParser.RULE_expressionStatement = 22;
ECMAScriptPassParser.RULE_lexicalDeclaration_In = 23;
ECMAScriptPassParser.RULE_letOrConst = 24;
ECMAScriptPassParser.RULE_bindingList_In = 25;
ECMAScriptPassParser.RULE_lexicalBinding_In = 26;
ECMAScriptPassParser.RULE_declaration = 27;
ECMAScriptPassParser.RULE_reservedWord = 28;
ECMAScriptPassParser.RULE_keyword = 29;
ECMAScriptPassParser.RULE_futureReservedWord = 30;

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

FileContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
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
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.OpenBrace || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptPassParser.NullLiteral - 56)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 56)) | (1 << (ECMAScriptPassParser.Await - 56)) | (1 << (ECMAScriptPassParser.Const - 56)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (ECMAScriptPassParser.Yield - 91)) | (1 << (ECMAScriptPassParser.Let - 91)) | (1 << (ECMAScriptPassParser.StringLiteral - 91)) | (1 << (ECMAScriptPassParser.IdentifierName - 91)))) !== 0)) {
            this.state = 62;
            this.statementList();
        }

        this.state = 65;
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

function EosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

EosContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterEos(this);
	}
};

EosContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitEos(this);
	}
};




ECMAScriptPassParser.EosContext = EosContext;

ECMAScriptPassParser.prototype.eos = function() {

    var localctx = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScriptPassParser.RULE_eos);
    try {
        this.state = 69;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 67;
            this.match(ECMAScriptPassParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            if (!( this._input.LT(1).type === ECMAScriptPassParser.EOF)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type === ECMAScriptPassParser.EOF");
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

function Expression_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_expression_In;
    return this;
}

Expression_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_InContext.prototype.constructor = Expression_InContext;

Expression_InContext.prototype.assignmentExpression_In = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentExpression_InContext);
    } else {
        return this.getTypedRuleContext(AssignmentExpression_InContext,i);
    }
};

Expression_InContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


Expression_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterExpression_In(this);
	}
};

Expression_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitExpression_In(this);
	}
};




ECMAScriptPassParser.Expression_InContext = Expression_InContext;

ECMAScriptPassParser.prototype.expression_In = function() {

    var localctx = new Expression_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptPassParser.RULE_expression_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.assignmentExpression_In();
        this.state = 76;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 72;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 73;
                this.assignmentExpression_In(); 
            }
            this.state = 78;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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

IdentifierReferenceContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptPassParser.Yield, 0);
};

IdentifierReferenceContext.prototype.Await = function() {
    return this.getToken(ECMAScriptPassParser.Await, 0);
};

IdentifierReferenceContext.prototype.Multiply = function() {
    return this.getToken(ECMAScriptPassParser.Multiply, 0);
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
        this.state = 83;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 79;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 80;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 81;
            this.match(ECMAScriptPassParser.Await);
            this.state = 82;
            this.match(ECMAScriptPassParser.Multiply);
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
        this.state = 88;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 87;
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
        this.state = 90;
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

function PrimaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_primaryExpression;
    return this;
}

PrimaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;

PrimaryExpressionContext.prototype.identifierReference = function() {
    return this.getTypedRuleContext(IdentifierReferenceContext,0);
};

PrimaryExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};

PrimaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPrimaryExpression(this);
	}
};




ECMAScriptPassParser.PrimaryExpressionContext = PrimaryExpressionContext;

ECMAScriptPassParser.prototype.primaryExpression = function() {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ECMAScriptPassParser.RULE_primaryExpression);
    try {
        this.state = 95;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.identifierReference();
            break;
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.literal();
            break;
        case ECMAScriptPassParser.OpenBrace:
            this.enterOuterAlt(localctx, 3);
            this.state = 94;
            this.objectLiteral();
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

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(ECMAScriptPassParser.NullLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScriptPassParser.BooleanLiteral, 0);
};

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
    this.enterRule(localctx, 14, ECMAScriptPassParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.NullLiteral || _la===ECMAScriptPassParser.BooleanLiteral || _la===ECMAScriptPassParser.StringLiteral)) {
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

function ObjectLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptPassParser.OpenBrace, 0);
};

ObjectLiteralContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptPassParser.CloseBrace, 0);
};

ObjectLiteralContext.prototype.propertyDefinitionList = function() {
    return this.getTypedRuleContext(PropertyDefinitionListContext,0);
};

ObjectLiteralContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

ObjectLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitObjectLiteral(this);
	}
};




ECMAScriptPassParser.ObjectLiteralContext = ObjectLiteralContext;

ECMAScriptPassParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ECMAScriptPassParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.state = 108;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 100;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 101;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 102;
            this.propertyDefinitionList();
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 103;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 106;
            this.match(ECMAScriptPassParser.CloseBrace);
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

function PropertyDefinitionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_propertyDefinitionList;
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
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


PropertyDefinitionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyDefinitionList(this);
	}
};

PropertyDefinitionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertyDefinitionList(this);
	}
};




ECMAScriptPassParser.PropertyDefinitionListContext = PropertyDefinitionListContext;

ECMAScriptPassParser.prototype.propertyDefinitionList = function() {

    var localctx = new PropertyDefinitionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScriptPassParser.RULE_propertyDefinitionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.propertyDefinition();
        this.state = 115;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 111;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 112;
                this.propertyDefinition(); 
            }
            this.state = 117;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
    this.ruleIndex = ECMAScriptPassParser.RULE_propertyDefinition;
    return this;
}

PropertyDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDefinitionContext.prototype.constructor = PropertyDefinitionContext;

PropertyDefinitionContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyDefinitionContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptPassParser.Colon, 0);
};

PropertyDefinitionContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};

PropertyDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyDefinition(this);
	}
};

PropertyDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertyDefinition(this);
	}
};




ECMAScriptPassParser.PropertyDefinitionContext = PropertyDefinitionContext;

ECMAScriptPassParser.prototype.propertyDefinition = function() {

    var localctx = new PropertyDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScriptPassParser.RULE_propertyDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.propertyName();
        this.state = 119;
        this.match(ECMAScriptPassParser.Colon);
        this.state = 120;
        this.assignmentExpression_In();
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

function PropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.literalPropertyName = function() {
    return this.getTypedRuleContext(LiteralPropertyNameContext,0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertyName(this);
	}
};




ECMAScriptPassParser.PropertyNameContext = PropertyNameContext;

ECMAScriptPassParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ECMAScriptPassParser.RULE_propertyName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.literalPropertyName();
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

function LiteralPropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_literalPropertyName;
    return this;
}

LiteralPropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralPropertyNameContext.prototype.constructor = LiteralPropertyNameContext;

LiteralPropertyNameContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptPassParser.IdentifierName, 0);
};

LiteralPropertyNameContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptPassParser.StringLiteral, 0);
};

LiteralPropertyNameContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptPassParser.NumericLiteral, 0);
};

LiteralPropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLiteralPropertyName(this);
	}
};

LiteralPropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLiteralPropertyName(this);
	}
};




ECMAScriptPassParser.LiteralPropertyNameContext = LiteralPropertyNameContext;

ECMAScriptPassParser.prototype.literalPropertyName = function() {

    var localctx = new LiteralPropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ECMAScriptPassParser.RULE_literalPropertyName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.StringLiteral || _la===ECMAScriptPassParser.IdentifierName)) {
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

function LeftHandSideExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_leftHandSideExpression;
    return this;
}

LeftHandSideExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LeftHandSideExpressionContext.prototype.constructor = LeftHandSideExpressionContext;

LeftHandSideExpressionContext.prototype.newExpression = function() {
    return this.getTypedRuleContext(NewExpressionContext,0);
};

LeftHandSideExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLeftHandSideExpression(this);
	}
};

LeftHandSideExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLeftHandSideExpression(this);
	}
};




ECMAScriptPassParser.LeftHandSideExpressionContext = LeftHandSideExpressionContext;

ECMAScriptPassParser.prototype.leftHandSideExpression = function() {

    var localctx = new LeftHandSideExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ECMAScriptPassParser.RULE_leftHandSideExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.newExpression();
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

function NewExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_newExpression;
    return this;
}

NewExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NewExpressionContext.prototype.constructor = NewExpressionContext;

NewExpressionContext.prototype.memberExpression = function() {
    return this.getTypedRuleContext(MemberExpressionContext,0);
};

NewExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterNewExpression(this);
	}
};

NewExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitNewExpression(this);
	}
};




ECMAScriptPassParser.NewExpressionContext = NewExpressionContext;

ECMAScriptPassParser.prototype.newExpression = function() {

    var localctx = new NewExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ECMAScriptPassParser.RULE_newExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.memberExpression();
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

function MemberExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_memberExpression;
    return this;
}

MemberExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemberExpressionContext.prototype.constructor = MemberExpressionContext;

MemberExpressionContext.prototype.primaryExpression = function() {
    return this.getTypedRuleContext(PrimaryExpressionContext,0);
};

MemberExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterMemberExpression(this);
	}
};

MemberExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitMemberExpression(this);
	}
};




ECMAScriptPassParser.MemberExpressionContext = MemberExpressionContext;

ECMAScriptPassParser.prototype.memberExpression = function() {

    var localctx = new MemberExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ECMAScriptPassParser.RULE_memberExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.primaryExpression();
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

function AssignmentExpression_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_assignmentExpression_In;
    return this;
}

AssignmentExpression_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentExpression_InContext.prototype.constructor = AssignmentExpression_InContext;


 
AssignmentExpression_InContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LhsExpression_InContext(parser, ctx) {
	AssignmentExpression_InContext.call(this, parser);
    AssignmentExpression_InContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LhsExpression_InContext.prototype = Object.create(AssignmentExpression_InContext.prototype);
LhsExpression_InContext.prototype.constructor = LhsExpression_InContext;

ECMAScriptPassParser.LhsExpression_InContext = LhsExpression_InContext;

LhsExpression_InContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};
LhsExpression_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLhsExpression_In(this);
	}
};

LhsExpression_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLhsExpression_In(this);
	}
};



ECMAScriptPassParser.AssignmentExpression_InContext = AssignmentExpression_InContext;

ECMAScriptPassParser.prototype.assignmentExpression_In = function() {

    var localctx = new AssignmentExpression_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ECMAScriptPassParser.RULE_assignmentExpression_In);
    try {
        localctx = new LhsExpression_InContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.leftHandSideExpression();
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

function AssignmentOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;

AssignmentOperatorContext.prototype.PlusAssign = function() {
    return this.getToken(ECMAScriptPassParser.PlusAssign, 0);
};

AssignmentOperatorContext.prototype.MinusAssign = function() {
    return this.getToken(ECMAScriptPassParser.MinusAssign, 0);
};

AssignmentOperatorContext.prototype.MultiplyAssign = function() {
    return this.getToken(ECMAScriptPassParser.MultiplyAssign, 0);
};

AssignmentOperatorContext.prototype.DivideAssign = function() {
    return this.getToken(ECMAScriptPassParser.DivideAssign, 0);
};

AssignmentOperatorContext.prototype.ModuloAssign = function() {
    return this.getToken(ECMAScriptPassParser.ModuloAssign, 0);
};

AssignmentOperatorContext.prototype.PowerAssign = function() {
    return this.getToken(ECMAScriptPassParser.PowerAssign, 0);
};

AssignmentOperatorContext.prototype.LeftShiftArithmeticAssign = function() {
    return this.getToken(ECMAScriptPassParser.LeftShiftArithmeticAssign, 0);
};

AssignmentOperatorContext.prototype.RightShiftArithmeticAssign = function() {
    return this.getToken(ECMAScriptPassParser.RightShiftArithmeticAssign, 0);
};

AssignmentOperatorContext.prototype.RightShiftLogicalAssign = function() {
    return this.getToken(ECMAScriptPassParser.RightShiftLogicalAssign, 0);
};

AssignmentOperatorContext.prototype.BitAndAssign = function() {
    return this.getToken(ECMAScriptPassParser.BitAndAssign, 0);
};

AssignmentOperatorContext.prototype.BitOrAssign = function() {
    return this.getToken(ECMAScriptPassParser.BitOrAssign, 0);
};

AssignmentOperatorContext.prototype.BitXorAssign = function() {
    return this.getToken(ECMAScriptPassParser.BitXorAssign, 0);
};

AssignmentOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitAssignmentOperator(this);
	}
};




ECMAScriptPassParser.AssignmentOperatorContext = AssignmentOperatorContext;

ECMAScriptPassParser.prototype.assignmentOperator = function() {

    var localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ECMAScriptPassParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        _la = this._input.LA(1);
        if(!(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (ECMAScriptPassParser.PlusAssign - 39)) | (1 << (ECMAScriptPassParser.MinusAssign - 39)) | (1 << (ECMAScriptPassParser.MultiplyAssign - 39)) | (1 << (ECMAScriptPassParser.ModuloAssign - 39)) | (1 << (ECMAScriptPassParser.PowerAssign - 39)) | (1 << (ECMAScriptPassParser.LeftShiftArithmeticAssign - 39)) | (1 << (ECMAScriptPassParser.RightShiftArithmeticAssign - 39)) | (1 << (ECMAScriptPassParser.RightShiftLogicalAssign - 39)) | (1 << (ECMAScriptPassParser.BitAndAssign - 39)) | (1 << (ECMAScriptPassParser.BitOrAssign - 39)) | (1 << (ECMAScriptPassParser.BitXorAssign - 39)) | (1 << (ECMAScriptPassParser.DivideAssign - 39)))) !== 0))) {
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

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
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
    this.enterRule(localctx, 36, ECMAScriptPassParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
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

function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statementListItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementListItemContext);
    } else {
        return this.getTypedRuleContext(StatementListItemContext,i);
    }
};

StatementListContext.prototype.eos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EosContext);
    } else {
        return this.getTypedRuleContext(EosContext,i);
    }
};

StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatementList(this);
	}
};




ECMAScriptPassParser.StatementListContext = StatementListContext;

ECMAScriptPassParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ECMAScriptPassParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 138;
            this.statementListItem();
            this.state = 139;
            this.eos();
            this.state = 143; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.OpenBrace || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptPassParser.NullLiteral - 56)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 56)) | (1 << (ECMAScriptPassParser.Await - 56)) | (1 << (ECMAScriptPassParser.Const - 56)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (ECMAScriptPassParser.Yield - 91)) | (1 << (ECMAScriptPassParser.Let - 91)) | (1 << (ECMAScriptPassParser.StringLiteral - 91)) | (1 << (ECMAScriptPassParser.IdentifierName - 91)))) !== 0));
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

function StatementListItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statementListItem;
    return this;
}

StatementListItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListItemContext.prototype.constructor = StatementListItemContext;

StatementListItemContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

StatementListItemContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

StatementListItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatementListItem(this);
	}
};

StatementListItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatementListItem(this);
	}
};




ECMAScriptPassParser.StatementListItemContext = StatementListItemContext;

ECMAScriptPassParser.prototype.statementListItem = function() {

    var localctx = new StatementListItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ECMAScriptPassParser.RULE_statementListItem);
    try {
        this.state = 147;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.OpenBrace:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.StringLiteral:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 145;
            this.statement();
            break;
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Let:
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.declaration();
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

function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitEmptyStatement(this);
	}
};




ECMAScriptPassParser.EmptyStatementContext = EmptyStatementContext;

ECMAScriptPassParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ECMAScriptPassParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
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

function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expression_In = function() {
    return this.getTypedRuleContext(Expression_InContext,0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitExpressionStatement(this);
	}
};




ECMAScriptPassParser.ExpressionStatementContext = ExpressionStatementContext;

ECMAScriptPassParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ECMAScriptPassParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.expression_In();
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

function LexicalDeclaration_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_lexicalDeclaration_In;
    return this;
}

LexicalDeclaration_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LexicalDeclaration_InContext.prototype.constructor = LexicalDeclaration_InContext;

LexicalDeclaration_InContext.prototype.letOrConst = function() {
    return this.getTypedRuleContext(LetOrConstContext,0);
};

LexicalDeclaration_InContext.prototype.bindingList_In = function() {
    return this.getTypedRuleContext(BindingList_InContext,0);
};

LexicalDeclaration_InContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

LexicalDeclaration_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLexicalDeclaration_In(this);
	}
};

LexicalDeclaration_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLexicalDeclaration_In(this);
	}
};




ECMAScriptPassParser.LexicalDeclaration_InContext = LexicalDeclaration_InContext;

ECMAScriptPassParser.prototype.lexicalDeclaration_In = function() {

    var localctx = new LexicalDeclaration_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ECMAScriptPassParser.RULE_lexicalDeclaration_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.letOrConst();
        this.state = 154;
        this.bindingList_In();
        this.state = 155;
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
    this.enterRule(localctx, 48, ECMAScriptPassParser.RULE_letOrConst);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
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

function BindingList_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_bindingList_In;
    return this;
}

BindingList_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingList_InContext.prototype.constructor = BindingList_InContext;

BindingList_InContext.prototype.lexicalBinding_In = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LexicalBinding_InContext);
    } else {
        return this.getTypedRuleContext(LexicalBinding_InContext,i);
    }
};

BindingList_InContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


BindingList_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBindingList_In(this);
	}
};

BindingList_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBindingList_In(this);
	}
};




ECMAScriptPassParser.BindingList_InContext = BindingList_InContext;

ECMAScriptPassParser.prototype.bindingList_In = function() {

    var localctx = new BindingList_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ECMAScriptPassParser.RULE_bindingList_In);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.lexicalBinding_In();
        this.state = 164;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 160;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 161;
            this.lexicalBinding_In();
            this.state = 166;
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

function LexicalBinding_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_lexicalBinding_In;
    return this;
}

LexicalBinding_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LexicalBinding_InContext.prototype.constructor = LexicalBinding_InContext;

LexicalBinding_InContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

LexicalBinding_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLexicalBinding_In(this);
	}
};

LexicalBinding_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLexicalBinding_In(this);
	}
};




ECMAScriptPassParser.LexicalBinding_InContext = LexicalBinding_InContext;

ECMAScriptPassParser.prototype.lexicalBinding_In = function() {

    var localctx = new LexicalBinding_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ECMAScriptPassParser.RULE_lexicalBinding_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
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

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.lexicalDeclaration_In = function() {
    return this.getTypedRuleContext(LexicalDeclaration_InContext,0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitDeclaration(this);
	}
};




ECMAScriptPassParser.DeclarationContext = DeclarationContext;

ECMAScriptPassParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ECMAScriptPassParser.RULE_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.lexicalDeclaration_In();
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
    this.ruleIndex = ECMAScriptPassParser.RULE_reservedWord;
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
    return this.getToken(ECMAScriptPassParser.NullLiteral, 0);
};

ReservedWordContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScriptPassParser.BooleanLiteral, 0);
};

ReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterReservedWord(this);
	}
};

ReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitReservedWord(this);
	}
};




ECMAScriptPassParser.ReservedWordContext = ReservedWordContext;

ECMAScriptPassParser.prototype.reservedWord = function() {

    var localctx = new ReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ECMAScriptPassParser.RULE_reservedWord);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Break:
        case ECMAScriptPassParser.Case:
        case ECMAScriptPassParser.Catch:
        case ECMAScriptPassParser.Class:
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Continue:
        case ECMAScriptPassParser.Debugger:
        case ECMAScriptPassParser.Default:
        case ECMAScriptPassParser.Delete:
        case ECMAScriptPassParser.Do:
        case ECMAScriptPassParser.Else:
        case ECMAScriptPassParser.Export:
        case ECMAScriptPassParser.Extends:
        case ECMAScriptPassParser.Finally:
        case ECMAScriptPassParser.For:
        case ECMAScriptPassParser.Function:
        case ECMAScriptPassParser.If:
        case ECMAScriptPassParser.Import:
        case ECMAScriptPassParser.In:
        case ECMAScriptPassParser.Instanceof:
        case ECMAScriptPassParser.New:
        case ECMAScriptPassParser.Return:
        case ECMAScriptPassParser.Super:
        case ECMAScriptPassParser.Switch:
        case ECMAScriptPassParser.This:
        case ECMAScriptPassParser.Throw:
        case ECMAScriptPassParser.Try:
        case ECMAScriptPassParser.Typeof:
        case ECMAScriptPassParser.Var:
        case ECMAScriptPassParser.Void:
        case ECMAScriptPassParser.While:
        case ECMAScriptPassParser.With:
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 1);
            this.state = 171;
            this.keyword();
            break;
        case ECMAScriptPassParser.Enum:
            this.enterOuterAlt(localctx, 2);
            this.state = 172;
            this.futureReservedWord();
            break;
        case ECMAScriptPassParser.NullLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 173;
            this.match(ECMAScriptPassParser.NullLiteral);
            break;
        case ECMAScriptPassParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 4);
            this.state = 174;
            this.match(ECMAScriptPassParser.BooleanLiteral);
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
    this.ruleIndex = ECMAScriptPassParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.Await = function() {
    return this.getToken(ECMAScriptPassParser.Await, 0);
};

KeywordContext.prototype.Break = function() {
    return this.getToken(ECMAScriptPassParser.Break, 0);
};

KeywordContext.prototype.Case = function() {
    return this.getToken(ECMAScriptPassParser.Case, 0);
};

KeywordContext.prototype.Catch = function() {
    return this.getToken(ECMAScriptPassParser.Catch, 0);
};

KeywordContext.prototype.Class = function() {
    return this.getToken(ECMAScriptPassParser.Class, 0);
};

KeywordContext.prototype.Const = function() {
    return this.getToken(ECMAScriptPassParser.Const, 0);
};

KeywordContext.prototype.Continue = function() {
    return this.getToken(ECMAScriptPassParser.Continue, 0);
};

KeywordContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptPassParser.Debugger, 0);
};

KeywordContext.prototype.Default = function() {
    return this.getToken(ECMAScriptPassParser.Default, 0);
};

KeywordContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptPassParser.Delete, 0);
};

KeywordContext.prototype.Do = function() {
    return this.getToken(ECMAScriptPassParser.Do, 0);
};

KeywordContext.prototype.Else = function() {
    return this.getToken(ECMAScriptPassParser.Else, 0);
};

KeywordContext.prototype.Export = function() {
    return this.getToken(ECMAScriptPassParser.Export, 0);
};

KeywordContext.prototype.Extends = function() {
    return this.getToken(ECMAScriptPassParser.Extends, 0);
};

KeywordContext.prototype.Finally = function() {
    return this.getToken(ECMAScriptPassParser.Finally, 0);
};

KeywordContext.prototype.For = function() {
    return this.getToken(ECMAScriptPassParser.For, 0);
};

KeywordContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

KeywordContext.prototype.If = function() {
    return this.getToken(ECMAScriptPassParser.If, 0);
};

KeywordContext.prototype.Import = function() {
    return this.getToken(ECMAScriptPassParser.Import, 0);
};

KeywordContext.prototype.In = function() {
    return this.getToken(ECMAScriptPassParser.In, 0);
};

KeywordContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScriptPassParser.Instanceof, 0);
};

KeywordContext.prototype.New = function() {
    return this.getToken(ECMAScriptPassParser.New, 0);
};

KeywordContext.prototype.Return = function() {
    return this.getToken(ECMAScriptPassParser.Return, 0);
};

KeywordContext.prototype.Super = function() {
    return this.getToken(ECMAScriptPassParser.Super, 0);
};

KeywordContext.prototype.Switch = function() {
    return this.getToken(ECMAScriptPassParser.Switch, 0);
};

KeywordContext.prototype.This = function() {
    return this.getToken(ECMAScriptPassParser.This, 0);
};

KeywordContext.prototype.Throw = function() {
    return this.getToken(ECMAScriptPassParser.Throw, 0);
};

KeywordContext.prototype.Try = function() {
    return this.getToken(ECMAScriptPassParser.Try, 0);
};

KeywordContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptPassParser.Typeof, 0);
};

KeywordContext.prototype.Var = function() {
    return this.getToken(ECMAScriptPassParser.Var, 0);
};

KeywordContext.prototype.Void = function() {
    return this.getToken(ECMAScriptPassParser.Void, 0);
};

KeywordContext.prototype.While = function() {
    return this.getToken(ECMAScriptPassParser.While, 0);
};

KeywordContext.prototype.With = function() {
    return this.getToken(ECMAScriptPassParser.With, 0);
};

KeywordContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptPassParser.Yield, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitKeyword(this);
	}
};




ECMAScriptPassParser.KeywordContext = KeywordContext;

ECMAScriptPassParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ECMAScriptPassParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        _la = this._input.LA(1);
        if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (ECMAScriptPassParser.Await - 58)) | (1 << (ECMAScriptPassParser.Break - 58)) | (1 << (ECMAScriptPassParser.Case - 58)) | (1 << (ECMAScriptPassParser.Catch - 58)) | (1 << (ECMAScriptPassParser.Class - 58)) | (1 << (ECMAScriptPassParser.Const - 58)) | (1 << (ECMAScriptPassParser.Continue - 58)) | (1 << (ECMAScriptPassParser.Debugger - 58)) | (1 << (ECMAScriptPassParser.Default - 58)) | (1 << (ECMAScriptPassParser.Delete - 58)) | (1 << (ECMAScriptPassParser.Do - 58)) | (1 << (ECMAScriptPassParser.Else - 58)) | (1 << (ECMAScriptPassParser.Export - 58)) | (1 << (ECMAScriptPassParser.Extends - 58)) | (1 << (ECMAScriptPassParser.Finally - 58)) | (1 << (ECMAScriptPassParser.For - 58)) | (1 << (ECMAScriptPassParser.Function - 58)) | (1 << (ECMAScriptPassParser.If - 58)) | (1 << (ECMAScriptPassParser.Import - 58)) | (1 << (ECMAScriptPassParser.In - 58)) | (1 << (ECMAScriptPassParser.Instanceof - 58)) | (1 << (ECMAScriptPassParser.New - 58)) | (1 << (ECMAScriptPassParser.Return - 58)) | (1 << (ECMAScriptPassParser.Super - 58)) | (1 << (ECMAScriptPassParser.Switch - 58)) | (1 << (ECMAScriptPassParser.This - 58)) | (1 << (ECMAScriptPassParser.Throw - 58)) | (1 << (ECMAScriptPassParser.Try - 58)) | (1 << (ECMAScriptPassParser.Typeof - 58)) | (1 << (ECMAScriptPassParser.Var - 58)) | (1 << (ECMAScriptPassParser.Void - 58)) | (1 << (ECMAScriptPassParser.While - 58)))) !== 0) || _la===ECMAScriptPassParser.With || _la===ECMAScriptPassParser.Yield)) {
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
    this.ruleIndex = ECMAScriptPassParser.RULE_futureReservedWord;
    return this;
}

FutureReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FutureReservedWordContext.prototype.constructor = FutureReservedWordContext;

FutureReservedWordContext.prototype.Enum = function() {
    return this.getToken(ECMAScriptPassParser.Enum, 0);
};

FutureReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFutureReservedWord(this);
	}
};

FutureReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFutureReservedWord(this);
	}
};




ECMAScriptPassParser.FutureReservedWordContext = FutureReservedWordContext;

ECMAScriptPassParser.prototype.futureReservedWord = function() {

    var localctx = new FutureReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ECMAScriptPassParser.RULE_futureReservedWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(ECMAScriptPassParser.Enum);
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


ECMAScriptPassParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.eos_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ECMAScriptPassParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this._input.LT(1).type === ECMAScriptPassParser.EOF;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ECMAScriptPassParser = ECMAScriptPassParser;
