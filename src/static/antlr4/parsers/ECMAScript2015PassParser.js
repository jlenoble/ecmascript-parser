// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScript2015Pass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScript2015PassListener = require('./ECMAScript2015PassListener').ECMAScript2015PassListener;
var grammarFileName = "ECMAScript2015Pass.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003j\u0270\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u0003\u0002\u0005",
    "\u0002r\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003w\n\u0003",
    "\r\u0003\u000e\u0003x\u0003\u0004\u0003\u0004\u0005\u0004}\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u008e\n\u0005\u0003\u0006",
    "\u0003\u0006\u0005\u0006\u0092\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0006\u0007\u0097\n\u0007\r\u0007\u000e\u0007\u0098\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t\u00a2\n\t\f\t\u000e",
    "\t\u00a5\u000b\t\u0003\n\u0003\n\u0005\n\u00a9\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u00b9\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00cc\n\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00d0\n\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00d4\n\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00de\n\u000f\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u00e2\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00f8\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00fd",
    "\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u0104\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u010b\n\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u011d\n\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u0121\n\u0015\u0005\u0015\u0123\n\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0006\u0016\u0128\n\u0016\r\u0016\u000e\u0016",
    "\u0129\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0130",
    "\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0135\n\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u014d\n",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u015f",
    "\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0003 \u0007 \u0169\n \f \u000e \u016c\u000b \u0003!",
    "\u0005!\u016f\n!\u0003\"\u0003\"\u0005\"\u0173\n\"\u0003\"\u0005\"\u0176",
    "\n\"\u0003\"\u0005\"\u0179\n\"\u0003\"\u0003\"\u0003#\u0005#\u017e\n",
    "#\u0003#\u0003#\u0003#\u0005#\u0183\n#\u0003#\u0007#\u0186\n#\f#\u000e",
    "#\u0189\u000b#\u0003$\u0006$\u018c\n$\r$\u000e$\u018d\u0003%\u0003%",
    "\u0003%\u0003%\u0003%\u0005%\u0195\n%\u0003%\u0003%\u0005%\u0199\n%",
    "\u0003&\u0003&\u0003&\u0007&\u019e\n&\f&\u000e&\u01a1\u000b&\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0005\'\u01b6\n\'\u0003(\u0003(\u0003(\u0005(\u01bb\n(\u0003)\u0003",
    ")\u0003*\u0003*\u0005*\u01c1\n*\u0003*\u0003*\u0003+\u0003+\u0003+\u0007",
    "+\u01c8\n+\f+\u000e+\u01cb\u000b+\u0003,\u0003,\u0003,\u0007,\u01d0",
    "\n,\f,\u000e,\u01d3\u000b,\u0003-\u0003-\u0003-\u0005-\u01d8\n-\u0003",
    "-\u0003-\u0005-\u01dc\n-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0005-\u01e6\n-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0005-\u0203\n-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0007-\u0246\n-\f",
    "-\u000e-\u0249\u000b-\u0003.\u0003.\u0003/\u0003/\u0005/\u024f\n/\u0003",
    "0\u00030\u00031\u00031\u00051\u0255\n1\u00032\u00032\u00032\u00052\u025a",
    "\n2\u00033\u00033\u00034\u00034\u00035\u00035\u00035\u00035\u00036\u0003",
    "6\u00036\u00036\u00037\u00037\u00037\u00037\u00057\u026c\n7\u00038\u0003",
    "8\u00038\u0002\u0003X9\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd",
    "fhjln\u0002\r\u0003\u0002\u0017\u0019\u0003\u0002\u0013\u0014\u0003",
    "\u0002\u001a\u001c\u0003\u0002\u001d \u0003\u0002!$\u0003\u0002*4\u0005",
    "\u0002\u0003\u000356ee\u0003\u000279\u0003\u000256\u0003\u0002:S\u0003",
    "\u0002Tc\u0002\u02a5\u0002q\u0003\u0002\u0002\u0002\u0004v\u0003\u0002",
    "\u0002\u0002\u0006|\u0003\u0002\u0002\u0002\b\u008d\u0003\u0002\u0002",
    "\u0002\n\u008f\u0003\u0002\u0002\u0002\f\u0096\u0003\u0002\u0002\u0002",
    "\u000e\u009a\u0003\u0002\u0002\u0002\u0010\u009e\u0003\u0002\u0002\u0002",
    "\u0012\u00a6\u0003\u0002\u0002\u0002\u0014\u00aa\u0003\u0002\u0002\u0002",
    "\u0016\u00ad\u0003\u0002\u0002\u0002\u0018\u00af\u0003\u0002\u0002\u0002",
    "\u001a\u00b1\u0003\u0002\u0002\u0002\u001c\u00f7\u0003\u0002\u0002\u0002",
    "\u001e\u00f9\u0003\u0002\u0002\u0002 \u0100\u0003\u0002\u0002\u0002",
    "\"\u0107\u0003\u0002\u0002\u0002$\u010e\u0003\u0002\u0002\u0002&\u0114",
    "\u0003\u0002\u0002\u0002(\u011a\u0003\u0002\u0002\u0002*\u0127\u0003",
    "\u0002\u0002\u0002,\u012b\u0003\u0002\u0002\u0002.\u0131\u0003\u0002",
    "\u0002\u00020\u0136\u0003\u0002\u0002\u00022\u013a\u0003\u0002\u0002",
    "\u00024\u014c\u0003\u0002\u0002\u00026\u014e\u0003\u0002\u0002\u0002",
    "8\u0154\u0003\u0002\u0002\u0002:\u0157\u0003\u0002\u0002\u0002<\u015a",
    "\u0003\u0002\u0002\u0002>\u0165\u0003\u0002\u0002\u0002@\u016e\u0003",
    "\u0002\u0002\u0002B\u0170\u0003\u0002\u0002\u0002D\u017d\u0003\u0002",
    "\u0002\u0002F\u018b\u0003\u0002\u0002\u0002H\u0198\u0003\u0002\u0002",
    "\u0002J\u019a\u0003\u0002\u0002\u0002L\u01b5\u0003\u0002\u0002\u0002",
    "N\u01ba\u0003\u0002\u0002\u0002P\u01bc\u0003\u0002\u0002\u0002R\u01be",
    "\u0003\u0002\u0002\u0002T\u01c4\u0003\u0002\u0002\u0002V\u01cc\u0003",
    "\u0002\u0002\u0002X\u0202\u0003\u0002\u0002\u0002Z\u024a\u0003\u0002",
    "\u0002\u0002\\\u024e\u0003\u0002\u0002\u0002^\u0250\u0003\u0002\u0002",
    "\u0002`\u0254\u0003\u0002\u0002\u0002b\u0259\u0003\u0002\u0002\u0002",
    "d\u025b\u0003\u0002\u0002\u0002f\u025d\u0003\u0002\u0002\u0002h\u025f",
    "\u0003\u0002\u0002\u0002j\u0263\u0003\u0002\u0002\u0002l\u026b\u0003",
    "\u0002\u0002\u0002n\u026d\u0003\u0002\u0002\u0002pr\u0005\u0004\u0003",
    "\u0002qp\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rs\u0003\u0002",
    "\u0002\u0002st\u0007\u0002\u0002\u0003t\u0003\u0003\u0002\u0002\u0002",
    "uw\u0005\u0006\u0004\u0002vu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002",
    "\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y\u0005\u0003",
    "\u0002\u0002\u0002z}\u0005\b\u0005\u0002{}\u0005<\u001f\u0002|z\u0003",
    "\u0002\u0002\u0002|{\u0003\u0002\u0002\u0002}\u0007\u0003\u0002\u0002",
    "\u0002~\u008e\u0005\n\u0006\u0002\u007f\u008e\u0005\u000e\b\u0002\u0080",
    "\u008e\u0005\u0016\f\u0002\u0081\u008e\u0005\u0018\r\u0002\u0082\u008e",
    "\u0005\u001a\u000e\u0002\u0083\u008e\u0005\u001c\u000f\u0002\u0084\u008e",
    "\u0005\u001e\u0010\u0002\u0085\u008e\u0005 \u0011\u0002\u0086\u008e",
    "\u0005\"\u0012\u0002\u0087\u008e\u0005$\u0013\u0002\u0088\u008e\u0005",
    "0\u0019\u0002\u0089\u008e\u0005&\u0014\u0002\u008a\u008e\u00052\u001a",
    "\u0002\u008b\u008e\u00054\u001b\u0002\u008c\u008e\u0005:\u001e\u0002",
    "\u008d~\u0003\u0002\u0002\u0002\u008d\u007f\u0003\u0002\u0002\u0002",
    "\u008d\u0080\u0003\u0002\u0002\u0002\u008d\u0081\u0003\u0002\u0002\u0002",
    "\u008d\u0082\u0003\u0002\u0002\u0002\u008d\u0083\u0003\u0002\u0002\u0002",
    "\u008d\u0084\u0003\u0002\u0002\u0002\u008d\u0085\u0003\u0002\u0002\u0002",
    "\u008d\u0086\u0003\u0002\u0002\u0002\u008d\u0087\u0003\u0002\u0002\u0002",
    "\u008d\u0088\u0003\u0002\u0002\u0002\u008d\u0089\u0003\u0002\u0002\u0002",
    "\u008d\u008a\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002",
    "\u008d\u008c\u0003\u0002\u0002\u0002\u008e\t\u0003\u0002\u0002\u0002",
    "\u008f\u0091\u0007\t\u0002\u0002\u0090\u0092\u0005\f\u0007\u0002\u0091",
    "\u0090\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092",
    "\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0007\n\u0002\u0002\u0094",
    "\u000b\u0003\u0002\u0002\u0002\u0095\u0097\u0005\b\u0005\u0002\u0096",
    "\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\r\u0003\u0002\u0002\u0002\u009a\u009b\u0007A\u0002\u0002\u009b\u009c",
    "\u0005\u0010\t\u0002\u009c\u009d\u0005l7\u0002\u009d\u000f\u0003\u0002",
    "\u0002\u0002\u009e\u00a3\u0005\u0012\n\u0002\u009f\u00a0\u0007\f\u0002",
    "\u0002\u00a0\u00a2\u0005\u0012\n\u0002\u00a1\u009f\u0003\u0002\u0002",
    "\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u0011\u0003\u0002\u0002",
    "\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a8\u0007d\u0002",
    "\u0002\u00a7\u00a9\u0005\u0014\u000b\u0002\u00a8\u00a7\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u0013\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0007\r\u0002\u0002\u00ab\u00ac\u0005X-\u0002\u00ac",
    "\u0015\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\u000b\u0002\u0002\u00ae",
    "\u0017\u0003\u0002\u0002\u0002\u00af\u00b0\u0005V,\u0002\u00b0\u0019",
    "\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007O\u0002\u0002\u00b2\u00b3",
    "\u0007\u0007\u0002\u0002\u00b3\u00b4\u0005V,\u0002\u00b4\u00b5\u0007",
    "\b\u0002\u0002\u00b5\u00b8\u0005\b\u0005\u0002\u00b6\u00b7\u0007?\u0002",
    "\u0002\u00b7\u00b9\u0005\b\u0005\u0002\u00b8\u00b6\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u001b\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0007;\u0002\u0002\u00bb\u00bc\u0005\b\u0005\u0002",
    "\u00bc\u00bd\u0007I\u0002\u0002\u00bd\u00be\u0007\u0007\u0002\u0002",
    "\u00be\u00bf\u0005V,\u0002\u00bf\u00c0\u0007\b\u0002\u0002\u00c0\u00c1",
    "\u0005l7\u0002\u00c1\u00f8\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007",
    "I\u0002\u0002\u00c3\u00c4\u0007\u0007\u0002\u0002\u00c4\u00c5\u0005",
    "V,\u0002\u00c5\u00c6\u0007\b\u0002\u0002\u00c6\u00c7\u0005\b\u0005\u0002",
    "\u00c7\u00f8\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007G\u0002\u0002",
    "\u00c9\u00cb\u0007\u0007\u0002\u0002\u00ca\u00cc\u0005V,\u0002\u00cb",
    "\u00ca\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc",
    "\u00cd\u0003\u0002\u0002\u0002\u00cd\u00cf\u0007\u000b\u0002\u0002\u00ce",
    "\u00d0\u0005V,\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00cf\u00d0",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3",
    "\u0007\u000b\u0002\u0002\u00d2\u00d4\u0005V,\u0002\u00d3\u00d2\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003",
    "\u0002\u0002\u0002\u00d5\u00d6\u0007\b\u0002\u0002\u00d6\u00f8\u0005",
    "\b\u0005\u0002\u00d7\u00d8\u0007G\u0002\u0002\u00d8\u00d9\u0007\u0007",
    "\u0002\u0002\u00d9\u00da\u0007A\u0002\u0002\u00da\u00db\u0005\u0010",
    "\t\u0002\u00db\u00dd\u0007\u000b\u0002\u0002\u00dc\u00de\u0005V,\u0002",
    "\u00dd\u00dc\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002",
    "\u00de\u00df\u0003\u0002\u0002\u0002\u00df\u00e1\u0007\u000b\u0002\u0002",
    "\u00e0\u00e2\u0005V,\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e1",
    "\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0007\b\u0002\u0002\u00e4\u00e5\u0005\b\u0005\u0002\u00e5\u00f8",
    "\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007G\u0002\u0002\u00e7\u00e8",
    "\u0007\u0007\u0002\u0002\u00e8\u00e9\u0005X-\u0002\u00e9\u00ea\u0007",
    "R\u0002\u0002\u00ea\u00eb\u0005V,\u0002\u00eb\u00ec\u0007\b\u0002\u0002",
    "\u00ec\u00ed\u0005\b\u0005\u0002\u00ed\u00f8\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\u0007G\u0002\u0002\u00ef\u00f0\u0007\u0007\u0002\u0002",
    "\u00f0\u00f1\u0007A\u0002\u0002\u00f1\u00f2\u0005\u0012\n\u0002\u00f2",
    "\u00f3\u0007R\u0002\u0002\u00f3\u00f4\u0005V,\u0002\u00f4\u00f5\u0007",
    "\b\u0002\u0002\u00f5\u00f6\u0005\b\u0005\u0002\u00f6\u00f8\u0003\u0002",
    "\u0002\u0002\u00f7\u00ba\u0003\u0002\u0002\u0002\u00f7\u00c2\u0003\u0002",
    "\u0002\u0002\u00f7\u00c8\u0003\u0002\u0002\u0002\u00f7\u00d7\u0003\u0002",
    "\u0002\u0002\u00f7\u00e6\u0003\u0002\u0002\u0002\u00f7\u00ee\u0003\u0002",
    "\u0002\u0002\u00f8\u001d\u0003\u0002\u0002\u0002\u00f9\u00fc\u0007F",
    "\u0002\u0002\u00fa\u00fb\u0006\u0010\u0002\u0002\u00fb\u00fd\u0007d",
    "\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002",
    "\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u00ff\u0005l",
    "7\u0002\u00ff\u001f\u0003\u0002\u0002\u0002\u0100\u0103\u0007:\u0002",
    "\u0002\u0101\u0102\u0006\u0011\u0003\u0002\u0102\u0104\u0007d\u0002",
    "\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0106\u0005l7\u0002",
    "\u0106!\u0003\u0002\u0002\u0002\u0107\u010a\u0007D\u0002\u0002\u0108",
    "\u0109\u0006\u0012\u0004\u0002\u0109\u010b\u0005V,\u0002\u010a\u0108",
    "\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b\u010c",
    "\u0003\u0002\u0002\u0002\u010c\u010d\u0005l7\u0002\u010d#\u0003\u0002",
    "\u0002\u0002\u010e\u010f\u0007M\u0002\u0002\u010f\u0110\u0007\u0007",
    "\u0002\u0002\u0110\u0111\u0005V,\u0002\u0111\u0112\u0007\b\u0002\u0002",
    "\u0112\u0113\u0005\b\u0005\u0002\u0113%\u0003\u0002\u0002\u0002\u0114",
    "\u0115\u0007H\u0002\u0002\u0115\u0116\u0007\u0007\u0002\u0002\u0116",
    "\u0117\u0005V,\u0002\u0117\u0118\u0007\b\u0002\u0002\u0118\u0119\u0005",
    "(\u0015\u0002\u0119\'\u0003\u0002\u0002\u0002\u011a\u011c\u0007\t\u0002",
    "\u0002\u011b\u011d\u0005*\u0016\u0002\u011c\u011b\u0003\u0002\u0002",
    "\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d\u0122\u0003\u0002\u0002",
    "\u0002\u011e\u0120\u0005.\u0018\u0002\u011f\u0121\u0005*\u0016\u0002",
    "\u0120\u011f\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002",
    "\u0121\u0123\u0003\u0002\u0002\u0002\u0122\u011e\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002",
    "\u0124\u0125\u0007\n\u0002\u0002\u0125)\u0003\u0002\u0002\u0002\u0126",
    "\u0128\u0005,\u0017\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u0128",
    "\u0129\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u0129",
    "\u012a\u0003\u0002\u0002\u0002\u012a+\u0003\u0002\u0002\u0002\u012b",
    "\u012c\u0007>\u0002\u0002\u012c\u012d\u0005V,\u0002\u012d\u012f\u0007",
    "\u000f\u0002\u0002\u012e\u0130\u0005\f\u0007\u0002\u012f\u012e\u0003",
    "\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130-\u0003",
    "\u0002\u0002\u0002\u0131\u0132\u0007N\u0002\u0002\u0132\u0134\u0007",
    "\u000f\u0002\u0002\u0133\u0135\u0005\f\u0007\u0002\u0134\u0133\u0003",
    "\u0002\u0002\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135/\u0003",
    "\u0002\u0002\u0002\u0136\u0137\u0007d\u0002\u0002\u0137\u0138\u0007",
    "\u000f\u0002\u0002\u0138\u0139\u0005\b\u0005\u0002\u01391\u0003\u0002",
    "\u0002\u0002\u013a\u013b\u0007P\u0002\u0002\u013b\u013c\u0006\u001a",
    "\u0005\u0002\u013c\u013d\u0005V,\u0002\u013d\u013e\u0005l7\u0002\u013e",
    "3\u0003\u0002\u0002\u0002\u013f\u0140\u0007S\u0002\u0002\u0140\u0141",
    "\u0005\n\u0006\u0002\u0141\u0142\u00056\u001c\u0002\u0142\u014d\u0003",
    "\u0002\u0002\u0002\u0143\u0144\u0007S\u0002\u0002\u0144\u0145\u0005",
    "\n\u0006\u0002\u0145\u0146\u00058\u001d\u0002\u0146\u014d\u0003\u0002",
    "\u0002\u0002\u0147\u0148\u0007S\u0002\u0002\u0148\u0149\u0005\n\u0006",
    "\u0002\u0149\u014a\u00056\u001c\u0002\u014a\u014b\u00058\u001d\u0002",
    "\u014b\u014d\u0003\u0002\u0002\u0002\u014c\u013f\u0003\u0002\u0002\u0002",
    "\u014c\u0143\u0003\u0002\u0002\u0002\u014c\u0147\u0003\u0002\u0002\u0002",
    "\u014d5\u0003\u0002\u0002\u0002\u014e\u014f\u0007B\u0002\u0002\u014f",
    "\u0150\u0007\u0007\u0002\u0002\u0150\u0151\u0007d\u0002\u0002\u0151",
    "\u0152\u0007\b\u0002\u0002\u0152\u0153\u0005\n\u0006\u0002\u01537\u0003",
    "\u0002\u0002\u0002\u0154\u0155\u0007C\u0002\u0002\u0155\u0156\u0005",
    "\n\u0006\u0002\u01569\u0003\u0002\u0002\u0002\u0157\u0158\u0007J\u0002",
    "\u0002\u0158\u0159\u0005l7\u0002\u0159;\u0003\u0002\u0002\u0002\u015a",
    "\u015b\u0007K\u0002\u0002\u015b\u015c\u0007d\u0002\u0002\u015c\u015e",
    "\u0007\u0007\u0002\u0002\u015d\u015f\u0005> \u0002\u015e\u015d\u0003",
    "\u0002\u0002\u0002\u015e\u015f\u0003\u0002\u0002\u0002\u015f\u0160\u0003",
    "\u0002\u0002\u0002\u0160\u0161\u0007\b\u0002\u0002\u0161\u0162\u0007",
    "\t\u0002\u0002\u0162\u0163\u0005@!\u0002\u0163\u0164\u0007\n\u0002\u0002",
    "\u0164=\u0003\u0002\u0002\u0002\u0165\u016a\u0007d\u0002\u0002\u0166",
    "\u0167\u0007\f\u0002\u0002\u0167\u0169\u0007d\u0002\u0002\u0168\u0166",
    "\u0003\u0002\u0002\u0002\u0169\u016c\u0003\u0002\u0002\u0002\u016a\u0168",
    "\u0003\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b?",
    "\u0003\u0002\u0002\u0002\u016c\u016a\u0003\u0002\u0002\u0002\u016d\u016f",
    "\u0005\u0004\u0003\u0002\u016e\u016d\u0003\u0002\u0002\u0002\u016e\u016f",
    "\u0003\u0002\u0002\u0002\u016fA\u0003\u0002\u0002\u0002\u0170\u0172",
    "\u0007\u0005\u0002\u0002\u0171\u0173\u0005D#\u0002\u0172\u0171\u0003",
    "\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002\u0173\u0175\u0003",
    "\u0002\u0002\u0002\u0174\u0176\u0007\f\u0002\u0002\u0175\u0174\u0003",
    "\u0002\u0002\u0002\u0175\u0176\u0003\u0002\u0002\u0002\u0176\u0178\u0003",
    "\u0002\u0002\u0002\u0177\u0179\u0005F$\u0002\u0178\u0177\u0003\u0002",
    "\u0002\u0002\u0178\u0179\u0003\u0002\u0002\u0002\u0179\u017a\u0003\u0002",
    "\u0002\u0002\u017a\u017b\u0007\u0006\u0002\u0002\u017bC\u0003\u0002",
    "\u0002\u0002\u017c\u017e\u0005F$\u0002\u017d\u017c\u0003\u0002\u0002",
    "\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e\u017f\u0003\u0002\u0002",
    "\u0002\u017f\u0187\u0005X-\u0002\u0180\u0182\u0007\f\u0002\u0002\u0181",
    "\u0183\u0005F$\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0182\u0183",
    "\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0186",
    "\u0005X-\u0002\u0185\u0180\u0003\u0002\u0002\u0002\u0186\u0189\u0003",
    "\u0002\u0002\u0002\u0187\u0185\u0003\u0002\u0002\u0002\u0187\u0188\u0003",
    "\u0002\u0002\u0002\u0188E\u0003\u0002\u0002\u0002\u0189\u0187\u0003",
    "\u0002\u0002\u0002\u018a\u018c\u0007\f\u0002\u0002\u018b\u018a\u0003",
    "\u0002\u0002\u0002\u018c\u018d\u0003\u0002\u0002\u0002\u018d\u018b\u0003",
    "\u0002\u0002\u0002\u018d\u018e\u0003\u0002\u0002\u0002\u018eG\u0003",
    "\u0002\u0002\u0002\u018f\u0190\u0007\t\u0002\u0002\u0190\u0199\u0007",
    "\n\u0002\u0002\u0191\u0192\u0007\t\u0002\u0002\u0192\u0194\u0005J&\u0002",
    "\u0193\u0195\u0007\f\u0002\u0002\u0194\u0193\u0003\u0002\u0002\u0002",
    "\u0194\u0195\u0003\u0002\u0002\u0002\u0195\u0196\u0003\u0002\u0002\u0002",
    "\u0196\u0197\u0007\n\u0002\u0002\u0197\u0199\u0003\u0002\u0002\u0002",
    "\u0198\u018f\u0003\u0002\u0002\u0002\u0198\u0191\u0003\u0002\u0002\u0002",
    "\u0199I\u0003\u0002\u0002\u0002\u019a\u019f\u0005L\'\u0002\u019b\u019c",
    "\u0007\f\u0002\u0002\u019c\u019e\u0005L\'\u0002\u019d\u019b\u0003\u0002",
    "\u0002\u0002\u019e\u01a1\u0003\u0002\u0002\u0002\u019f\u019d\u0003\u0002",
    "\u0002\u0002\u019f\u01a0\u0003\u0002\u0002\u0002\u01a0K\u0003\u0002",
    "\u0002\u0002\u01a1\u019f\u0003\u0002\u0002\u0002\u01a2\u01a3\u0005N",
    "(\u0002\u01a3\u01a4\u0007\u000f\u0002\u0002\u01a4\u01a5\u0005X-\u0002",
    "\u01a5\u01b6\u0003\u0002\u0002\u0002\u01a6\u01a7\u0005h5\u0002\u01a7",
    "\u01a8\u0007\u0007\u0002\u0002\u01a8\u01a9\u0007\b\u0002\u0002\u01a9",
    "\u01aa\u0007\t\u0002\u0002\u01aa\u01ab\u0005@!\u0002\u01ab\u01ac\u0007",
    "\n\u0002\u0002\u01ac\u01b6\u0003\u0002\u0002\u0002\u01ad\u01ae\u0005",
    "j6\u0002\u01ae\u01af\u0007\u0007\u0002\u0002\u01af\u01b0\u0005P)\u0002",
    "\u01b0\u01b1\u0007\b\u0002\u0002\u01b1\u01b2\u0007\t\u0002\u0002\u01b2",
    "\u01b3\u0005@!\u0002\u01b3\u01b4\u0007\n\u0002\u0002\u01b4\u01b6\u0003",
    "\u0002\u0002\u0002\u01b5\u01a2\u0003\u0002\u0002\u0002\u01b5\u01a6\u0003",
    "\u0002\u0002\u0002\u01b5\u01ad\u0003\u0002\u0002\u0002\u01b6M\u0003",
    "\u0002\u0002\u0002\u01b7\u01bb\u0005`1\u0002\u01b8\u01bb\u0007e\u0002",
    "\u0002\u01b9\u01bb\u0005^0\u0002\u01ba\u01b7\u0003\u0002\u0002\u0002",
    "\u01ba\u01b8\u0003\u0002\u0002\u0002\u01ba\u01b9\u0003\u0002\u0002\u0002",
    "\u01bbO\u0003\u0002\u0002\u0002\u01bc\u01bd\u0007d\u0002\u0002\u01bd",
    "Q\u0003\u0002\u0002\u0002\u01be\u01c0\u0007\u0007\u0002\u0002\u01bf",
    "\u01c1\u0005T+\u0002\u01c0\u01bf\u0003\u0002\u0002\u0002\u01c0\u01c1",
    "\u0003\u0002\u0002\u0002\u01c1\u01c2\u0003\u0002\u0002\u0002\u01c2\u01c3",
    "\u0007\b\u0002\u0002\u01c3S\u0003\u0002\u0002\u0002\u01c4\u01c9\u0005",
    "X-\u0002\u01c5\u01c6\u0007\f\u0002\u0002\u01c6\u01c8\u0005X-\u0002\u01c7",
    "\u01c5\u0003\u0002\u0002\u0002\u01c8\u01cb\u0003\u0002\u0002\u0002\u01c9",
    "\u01c7\u0003\u0002\u0002\u0002\u01c9\u01ca\u0003\u0002\u0002\u0002\u01ca",
    "U\u0003\u0002\u0002\u0002\u01cb\u01c9\u0003\u0002\u0002\u0002\u01cc",
    "\u01d1\u0005X-\u0002\u01cd\u01ce\u0007\f\u0002\u0002\u01ce\u01d0\u0005",
    "X-\u0002\u01cf\u01cd\u0003\u0002\u0002\u0002\u01d0\u01d3\u0003\u0002",
    "\u0002\u0002\u01d1\u01cf\u0003\u0002\u0002\u0002\u01d1\u01d2\u0003\u0002",
    "\u0002\u0002\u01d2W\u0003\u0002\u0002\u0002\u01d3\u01d1\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\b-\u0001\u0002\u01d5\u01d7\u0007K\u0002\u0002",
    "\u01d6\u01d8\u0007d\u0002\u0002\u01d7\u01d6\u0003\u0002\u0002\u0002",
    "\u01d7\u01d8\u0003\u0002\u0002\u0002\u01d8\u01d9\u0003\u0002\u0002\u0002",
    "\u01d9\u01db\u0007\u0007\u0002\u0002\u01da\u01dc\u0005> \u0002\u01db",
    "\u01da\u0003\u0002\u0002\u0002\u01db\u01dc\u0003\u0002\u0002\u0002\u01dc",
    "\u01dd\u0003\u0002\u0002\u0002\u01dd\u01de\u0007\b\u0002\u0002\u01de",
    "\u01df\u0007\t\u0002\u0002\u01df\u01e0\u0005@!\u0002\u01e0\u01e1\u0007",
    "\n\u0002\u0002\u01e1\u0203\u0003\u0002\u0002\u0002\u01e2\u01e3\u0007",
    "@\u0002\u0002\u01e3\u01e5\u0005X-\u0002\u01e4\u01e6\u0005R*\u0002\u01e5",
    "\u01e4\u0003\u0002\u0002\u0002\u01e5\u01e6\u0003\u0002\u0002\u0002\u01e6",
    "\u0203\u0003\u0002\u0002\u0002\u01e7\u01e8\u0007Q\u0002\u0002\u01e8",
    "\u0203\u0005X- \u01e9\u01ea\u0007E\u0002\u0002\u01ea\u0203\u0005X-\u001f",
    "\u01eb\u01ec\u0007=\u0002\u0002\u01ec\u0203\u0005X-\u001e\u01ed\u01ee",
    "\u0007\u0011\u0002\u0002\u01ee\u0203\u0005X-\u001d\u01ef\u01f0\u0007",
    "\u0012\u0002\u0002\u01f0\u0203\u0005X-\u001c\u01f1\u01f2\u0007\u0013",
    "\u0002\u0002\u01f2\u0203\u0005X-\u001b\u01f3\u01f4\u0007\u0014\u0002",
    "\u0002\u01f4\u0203\u0005X-\u001a\u01f5\u01f6\u0007\u0015\u0002\u0002",
    "\u01f6\u0203\u0005X-\u0019\u01f7\u01f8\u0007\u0016\u0002\u0002\u01f8",
    "\u0203\u0005X-\u0018\u01f9\u0203\u0007L\u0002\u0002\u01fa\u0203\u0007",
    "d\u0002\u0002\u01fb\u0203\u0005\\/\u0002\u01fc\u0203\u0005B\"\u0002",
    "\u01fd\u0203\u0005H%\u0002\u01fe\u01ff\u0007\u0007\u0002\u0002\u01ff",
    "\u0200\u0005V,\u0002\u0200\u0201\u0007\b\u0002\u0002\u0201\u0203\u0003",
    "\u0002\u0002\u0002\u0202\u01d4\u0003\u0002\u0002\u0002\u0202\u01e2\u0003",
    "\u0002\u0002\u0002\u0202\u01e7\u0003\u0002\u0002\u0002\u0202\u01e9\u0003",
    "\u0002\u0002\u0002\u0202\u01eb\u0003\u0002\u0002\u0002\u0202\u01ed\u0003",
    "\u0002\u0002\u0002\u0202\u01ef\u0003\u0002\u0002\u0002\u0202\u01f1\u0003",
    "\u0002\u0002\u0002\u0202\u01f3\u0003\u0002\u0002\u0002\u0202\u01f5\u0003",
    "\u0002\u0002\u0002\u0202\u01f7\u0003\u0002\u0002\u0002\u0202\u01f9\u0003",
    "\u0002\u0002\u0002\u0202\u01fa\u0003\u0002\u0002\u0002\u0202\u01fb\u0003",
    "\u0002\u0002\u0002\u0202\u01fc\u0003\u0002\u0002\u0002\u0202\u01fd\u0003",
    "\u0002\u0002\u0002\u0202\u01fe\u0003\u0002\u0002\u0002\u0203\u0247\u0003",
    "\u0002\u0002\u0002\u0204\u0205\f\u0017\u0002\u0002\u0205\u0206\t\u0002",
    "\u0002\u0002\u0206\u0246\u0005X-\u0018\u0207\u0208\f\u0016\u0002\u0002",
    "\u0208\u0209\t\u0003\u0002\u0002\u0209\u0246\u0005X-\u0017\u020a\u020b",
    "\f\u0015\u0002\u0002\u020b\u020c\t\u0004\u0002\u0002\u020c\u0246\u0005",
    "X-\u0016\u020d\u020e\f\u0014\u0002\u0002\u020e\u020f\t\u0005\u0002\u0002",
    "\u020f\u0246\u0005X-\u0015\u0210\u0211\f\u0013\u0002\u0002\u0211\u0212",
    "\u0007<\u0002\u0002\u0212\u0246\u0005X-\u0014\u0213\u0214\f\u0012\u0002",
    "\u0002\u0214\u0215\u0007R\u0002\u0002\u0215\u0246\u0005X-\u0013\u0216",
    "\u0217\f\u0011\u0002\u0002\u0217\u0218\t\u0006\u0002\u0002\u0218\u0246",
    "\u0005X-\u0012\u0219\u021a\f\u0010\u0002\u0002\u021a\u021b\u0007%\u0002",
    "\u0002\u021b\u0246\u0005X-\u0011\u021c\u021d\f\u000f\u0002\u0002\u021d",
    "\u021e\u0007&\u0002\u0002\u021e\u0246\u0005X-\u0010\u021f\u0220\f\u000e",
    "\u0002\u0002\u0220\u0221\u0007\'\u0002\u0002\u0221\u0246\u0005X-\u000f",
    "\u0222\u0223\f\r\u0002\u0002\u0223\u0224\u0007(\u0002\u0002\u0224\u0246",
    "\u0005X-\u000e\u0225\u0226\f\f\u0002\u0002\u0226\u0227\u0007)\u0002",
    "\u0002\u0227\u0246\u0005X-\r\u0228\u0229\f\u000b\u0002\u0002\u0229\u022a",
    "\u0007\u000e\u0002\u0002\u022a\u022b\u0005X-\u0002\u022b\u022c\u0007",
    "\u000f\u0002\u0002\u022c\u022d\u0005X-\f\u022d\u0246\u0003\u0002\u0002",
    "\u0002\u022e\u022f\f&\u0002\u0002\u022f\u0230\u0007\u0005\u0002\u0002",
    "\u0230\u0231\u0005V,\u0002\u0231\u0232\u0007\u0006\u0002\u0002\u0232",
    "\u0246\u0003\u0002\u0002\u0002\u0233\u0234\f%\u0002\u0002\u0234\u0235",
    "\u0007\u0010\u0002\u0002\u0235\u0246\u0005`1\u0002\u0236\u0237\f$\u0002",
    "\u0002\u0237\u0246\u0005R*\u0002\u0238\u0239\f\"\u0002\u0002\u0239\u023a",
    "\u0006-\u0017\u0002\u023a\u0246\u0007\u0011\u0002\u0002\u023b\u023c",
    "\f!\u0002\u0002\u023c\u023d\u0006-\u0019\u0002\u023d\u0246\u0007\u0012",
    "\u0002\u0002\u023e\u023f\f\n\u0002\u0002\u023f\u0240\u0007\r\u0002\u0002",
    "\u0240\u0246\u0005V,\u0002\u0241\u0242\f\t\u0002\u0002\u0242\u0243\u0005",
    "Z.\u0002\u0243\u0244\u0005V,\u0002\u0244\u0246\u0003\u0002\u0002\u0002",
    "\u0245\u0204\u0003\u0002\u0002\u0002\u0245\u0207\u0003\u0002\u0002\u0002",
    "\u0245\u020a\u0003\u0002\u0002\u0002\u0245\u020d\u0003\u0002\u0002\u0002",
    "\u0245\u0210\u0003\u0002\u0002\u0002\u0245\u0213\u0003\u0002\u0002\u0002",
    "\u0245\u0216\u0003\u0002\u0002\u0002\u0245\u0219\u0003\u0002\u0002\u0002",
    "\u0245\u021c\u0003\u0002\u0002\u0002\u0245\u021f\u0003\u0002\u0002\u0002",
    "\u0245\u0222\u0003\u0002\u0002\u0002\u0245\u0225\u0003\u0002\u0002\u0002",
    "\u0245\u0228\u0003\u0002\u0002\u0002\u0245\u022e\u0003\u0002\u0002\u0002",
    "\u0245\u0233\u0003\u0002\u0002\u0002\u0245\u0236\u0003\u0002\u0002\u0002",
    "\u0245\u0238\u0003\u0002\u0002\u0002\u0245\u023b\u0003\u0002\u0002\u0002",
    "\u0245\u023e\u0003\u0002\u0002\u0002\u0245\u0241\u0003\u0002\u0002\u0002",
    "\u0246\u0249\u0003\u0002\u0002\u0002\u0247\u0245\u0003\u0002\u0002\u0002",
    "\u0247\u0248\u0003\u0002\u0002\u0002\u0248Y\u0003\u0002\u0002\u0002",
    "\u0249\u0247\u0003\u0002\u0002\u0002\u024a\u024b\t\u0007\u0002\u0002",
    "\u024b[\u0003\u0002\u0002\u0002\u024c\u024f\t\b\u0002\u0002\u024d\u024f",
    "\u0005^0\u0002\u024e\u024c\u0003\u0002\u0002\u0002\u024e\u024d\u0003",
    "\u0002\u0002\u0002\u024f]\u0003\u0002\u0002\u0002\u0250\u0251\t\t\u0002",
    "\u0002\u0251_\u0003\u0002\u0002\u0002\u0252\u0255\u0007d\u0002\u0002",
    "\u0253\u0255\u0005b2\u0002\u0254\u0252\u0003\u0002\u0002\u0002\u0254",
    "\u0253\u0003\u0002\u0002\u0002\u0255a\u0003\u0002\u0002\u0002\u0256",
    "\u025a\u0005d3\u0002\u0257\u025a\u0005f4\u0002\u0258\u025a\t\n\u0002",
    "\u0002\u0259\u0256\u0003\u0002\u0002\u0002\u0259\u0257\u0003\u0002\u0002",
    "\u0002\u0259\u0258\u0003\u0002\u0002\u0002\u025ac\u0003\u0002\u0002",
    "\u0002\u025b\u025c\t\u000b\u0002\u0002\u025ce\u0003\u0002\u0002\u0002",
    "\u025d\u025e\t\f\u0002\u0002\u025eg\u0003\u0002\u0002\u0002\u025f\u0260",
    "\u00065\u001c\u0002\u0260\u0261\u0007d\u0002\u0002\u0261\u0262\u0005",
    "N(\u0002\u0262i\u0003\u0002\u0002\u0002\u0263\u0264\u00066\u001d\u0002",
    "\u0264\u0265\u0007d\u0002\u0002\u0265\u0266\u0005N(\u0002\u0266k\u0003",
    "\u0002\u0002\u0002\u0267\u026c\u0007\u000b\u0002\u0002\u0268\u026c\u0007",
    "\u0002\u0002\u0003\u0269\u026c\u00067\u001e\u0002\u026a\u026c\u0006",
    "7\u001f\u0002\u026b\u0267\u0003\u0002\u0002\u0002\u026b\u0268\u0003",
    "\u0002\u0002\u0002\u026b\u0269\u0003\u0002\u0002\u0002\u026b\u026a\u0003",
    "\u0002\u0002\u0002\u026cm\u0003\u0002\u0002\u0002\u026d\u026e\u0007",
    "\u0002\u0002\u0003\u026eo\u0003\u0002\u0002\u00027qx|\u008d\u0091\u0098",
    "\u00a3\u00a8\u00b8\u00cb\u00cf\u00d3\u00dd\u00e1\u00f7\u00fc\u0103\u010a",
    "\u011c\u0120\u0122\u0129\u012f\u0134\u014c\u015e\u016a\u016e\u0172\u0175",
    "\u0178\u017d\u0182\u0187\u018d\u0194\u0198\u019f\u01b5\u01ba\u01c0\u01c9",
    "\u01d1\u01d7\u01db\u01e5\u0202\u0245\u0247\u024e\u0254\u0259\u026b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'['", "']'", "'('", "')'", "'{'", 
                     "'}'", "';'", "','", "'='", "'?'", "':'", "'.'", "'++'", 
                     "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", 
                     "'>>'", "'<<'", "'>>>'", "'<'", "'>'", "'<='", "'>='", 
                     "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", 
                     "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", 
                     "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", 
                     "'null'", null, null, null, null, "'break'", "'do'", 
                     "'instanceof'", "'typeof'", "'case'", "'else'", "'new'", 
                     "'var'", "'catch'", "'finally'", "'return'", "'void'", 
                     "'continue'", "'for'", "'switch'", "'while'", "'debugger'", 
                     "'function'", "'this'", "'with'", "'default'", "'if'", 
                     "'throw'", "'delete'", "'in'", "'try'", "'class'", 
                     "'enum'", "'extends'", "'super'", "'const'", "'export'", 
                     "'import'" ];

var symbolicNames = [ null, "RegularExpressionLiteral", "LineTerminator", 
                      "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
                      "OpenBrace", "CloseBrace", "SemiColon", "Comma", "Assign", 
                      "QuestionMark", "Colon", "Dot", "PlusPlus", "MinusMinus", 
                      "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
                      "Modulus", "RightShiftArithmetic", "LeftShiftArithmetic", 
                      "RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", 
                      "GreaterThanEquals", "Equals", "NotEquals", "IdentityEquals", 
                      "IdentityNotEquals", "BitAnd", "BitXOr", "BitOr", 
                      "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
                      "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
                      "RightShiftArithmeticAssign", "RightShiftLogicalAssign", 
                      "BitAndAssign", "BitXorAssign", "BitOrAssign", "NullLiteral", 
                      "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", 
                      "OctalIntegerLiteral", "Break", "Do", "Instanceof", 
                      "Typeof", "Case", "Else", "New", "Var", "Catch", "Finally", 
                      "Return", "Void", "Continue", "For", "Switch", "While", 
                      "Debugger", "Function", "This", "With", "Default", 
                      "If", "Throw", "Delete", "In", "Try", "Class", "Enum", 
                      "Extends", "Super", "Const", "Export", "Import", "Implements", 
                      "Let", "Private", "Public", "Interface", "Package", 
                      "Protected", "Static", "Yield", "Identifier", "StringLiteral", 
                      "WhiteSpaces", "MultiLineComment", "SingleLineComment", 
                      "UnexpectedCharacter", "IdentifierName" ];

var ruleNames =  [ "program", "sourceElements", "sourceElement", "statement", 
                   "block", "statementList", "variableStatement", "variableDeclarationList", 
                   "variableDeclaration", "initialiser", "emptyStatement", 
                   "expressionStatement", "ifStatement", "iterationStatement", 
                   "continueStatement", "breakStatement", "returnStatement", 
                   "withStatement", "switchStatement", "caseBlock", "caseClauses", 
                   "caseClause", "defaultClause", "labelledStatement", "throwStatement", 
                   "tryStatement", "catchProduction", "finallyProduction", 
                   "debuggerStatement", "functionDeclaration", "formalParameterList", 
                   "functionBody", "arrayLiteral", "elementList", "elision", 
                   "objectLiteral", "propertyNameAndValueList", "propertyAssignment", 
                   "propertyName", "propertySetParameterList", "arguments", 
                   "argumentList", "expressionSequence", "singleExpression", 
                   "assignmentOperator", "literal", "numericLiteral", "identifierName", 
                   "reservedWord", "keyword", "futureReservedWord", "getter", 
                   "setter", "eos", "eof" ];

function ECMAScript2015PassParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	/**
	 * Returns true if, on the current index of the parser's token stream,
	 * a token of the given type exists on the HIDDEN channel.
	 * @param type {Number} The type of the token on the HIDDEN channel to check.
	 * @returns {Boolean}
	 */
	ECMAScriptPassParser.prototype.here = function(type) {
	    var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
	    var ahead = this._input.get(possibleIndexEosToken);
	    return (ahead.channel == antlr4.Lexer.HIDDEN) && (ahead.type == type);
	};

	/**
	 * Returns true if, on the current index of the parser's
	 * token stream, a token exists on the HIDDEN channel which
	 * either is a line terminator, or is a multi line comment that
	 * contains a line terminator.
	 * @returns {Boolean}
	 */
	ECMAScriptPassParser.prototype.lineTerminatorAhead = function() {
	    var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
	    var ahead = this._input.get(possibleIndexEosToken);

	    if (ahead.channel != antlr4.Lexer.HIDDEN)
	        return false;

	    var text = ahead.text;
	    var type = ahead.type;

	    return (type == ECMAScriptPassParser.MultiLineComment && text.indexOf("\r") !== -1 || text.indexOf("\n") !== -1) ||
	            (type == ECMAScriptPassParser.LineTerminator);
	};

    return this;
}

ECMAScript2015PassParser.prototype = Object.create(antlr4.Parser.prototype);
ECMAScript2015PassParser.prototype.constructor = ECMAScript2015PassParser;

Object.defineProperty(ECMAScript2015PassParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ECMAScript2015PassParser.EOF = antlr4.Token.EOF;
ECMAScript2015PassParser.RegularExpressionLiteral = 1;
ECMAScript2015PassParser.LineTerminator = 2;
ECMAScript2015PassParser.OpenBracket = 3;
ECMAScript2015PassParser.CloseBracket = 4;
ECMAScript2015PassParser.OpenParen = 5;
ECMAScript2015PassParser.CloseParen = 6;
ECMAScript2015PassParser.OpenBrace = 7;
ECMAScript2015PassParser.CloseBrace = 8;
ECMAScript2015PassParser.SemiColon = 9;
ECMAScript2015PassParser.Comma = 10;
ECMAScript2015PassParser.Assign = 11;
ECMAScript2015PassParser.QuestionMark = 12;
ECMAScript2015PassParser.Colon = 13;
ECMAScript2015PassParser.Dot = 14;
ECMAScript2015PassParser.PlusPlus = 15;
ECMAScript2015PassParser.MinusMinus = 16;
ECMAScript2015PassParser.Plus = 17;
ECMAScript2015PassParser.Minus = 18;
ECMAScript2015PassParser.BitNot = 19;
ECMAScript2015PassParser.Not = 20;
ECMAScript2015PassParser.Multiply = 21;
ECMAScript2015PassParser.Divide = 22;
ECMAScript2015PassParser.Modulus = 23;
ECMAScript2015PassParser.RightShiftArithmetic = 24;
ECMAScript2015PassParser.LeftShiftArithmetic = 25;
ECMAScript2015PassParser.RightShiftLogical = 26;
ECMAScript2015PassParser.LessThan = 27;
ECMAScript2015PassParser.MoreThan = 28;
ECMAScript2015PassParser.LessThanEquals = 29;
ECMAScript2015PassParser.GreaterThanEquals = 30;
ECMAScript2015PassParser.Equals = 31;
ECMAScript2015PassParser.NotEquals = 32;
ECMAScript2015PassParser.IdentityEquals = 33;
ECMAScript2015PassParser.IdentityNotEquals = 34;
ECMAScript2015PassParser.BitAnd = 35;
ECMAScript2015PassParser.BitXOr = 36;
ECMAScript2015PassParser.BitOr = 37;
ECMAScript2015PassParser.And = 38;
ECMAScript2015PassParser.Or = 39;
ECMAScript2015PassParser.MultiplyAssign = 40;
ECMAScript2015PassParser.DivideAssign = 41;
ECMAScript2015PassParser.ModulusAssign = 42;
ECMAScript2015PassParser.PlusAssign = 43;
ECMAScript2015PassParser.MinusAssign = 44;
ECMAScript2015PassParser.LeftShiftArithmeticAssign = 45;
ECMAScript2015PassParser.RightShiftArithmeticAssign = 46;
ECMAScript2015PassParser.RightShiftLogicalAssign = 47;
ECMAScript2015PassParser.BitAndAssign = 48;
ECMAScript2015PassParser.BitXorAssign = 49;
ECMAScript2015PassParser.BitOrAssign = 50;
ECMAScript2015PassParser.NullLiteral = 51;
ECMAScript2015PassParser.BooleanLiteral = 52;
ECMAScript2015PassParser.DecimalLiteral = 53;
ECMAScript2015PassParser.HexIntegerLiteral = 54;
ECMAScript2015PassParser.OctalIntegerLiteral = 55;
ECMAScript2015PassParser.Break = 56;
ECMAScript2015PassParser.Do = 57;
ECMAScript2015PassParser.Instanceof = 58;
ECMAScript2015PassParser.Typeof = 59;
ECMAScript2015PassParser.Case = 60;
ECMAScript2015PassParser.Else = 61;
ECMAScript2015PassParser.New = 62;
ECMAScript2015PassParser.Var = 63;
ECMAScript2015PassParser.Catch = 64;
ECMAScript2015PassParser.Finally = 65;
ECMAScript2015PassParser.Return = 66;
ECMAScript2015PassParser.Void = 67;
ECMAScript2015PassParser.Continue = 68;
ECMAScript2015PassParser.For = 69;
ECMAScript2015PassParser.Switch = 70;
ECMAScript2015PassParser.While = 71;
ECMAScript2015PassParser.Debugger = 72;
ECMAScript2015PassParser.Function = 73;
ECMAScript2015PassParser.This = 74;
ECMAScript2015PassParser.With = 75;
ECMAScript2015PassParser.Default = 76;
ECMAScript2015PassParser.If = 77;
ECMAScript2015PassParser.Throw = 78;
ECMAScript2015PassParser.Delete = 79;
ECMAScript2015PassParser.In = 80;
ECMAScript2015PassParser.Try = 81;
ECMAScript2015PassParser.Class = 82;
ECMAScript2015PassParser.Enum = 83;
ECMAScript2015PassParser.Extends = 84;
ECMAScript2015PassParser.Super = 85;
ECMAScript2015PassParser.Const = 86;
ECMAScript2015PassParser.Export = 87;
ECMAScript2015PassParser.Import = 88;
ECMAScript2015PassParser.Implements = 89;
ECMAScript2015PassParser.Let = 90;
ECMAScript2015PassParser.Private = 91;
ECMAScript2015PassParser.Public = 92;
ECMAScript2015PassParser.Interface = 93;
ECMAScript2015PassParser.Package = 94;
ECMAScript2015PassParser.Protected = 95;
ECMAScript2015PassParser.Static = 96;
ECMAScript2015PassParser.Yield = 97;
ECMAScript2015PassParser.Identifier = 98;
ECMAScript2015PassParser.StringLiteral = 99;
ECMAScript2015PassParser.WhiteSpaces = 100;
ECMAScript2015PassParser.MultiLineComment = 101;
ECMAScript2015PassParser.SingleLineComment = 102;
ECMAScript2015PassParser.UnexpectedCharacter = 103;
ECMAScript2015PassParser.IdentifierName = 104;

ECMAScript2015PassParser.RULE_program = 0;
ECMAScript2015PassParser.RULE_sourceElements = 1;
ECMAScript2015PassParser.RULE_sourceElement = 2;
ECMAScript2015PassParser.RULE_statement = 3;
ECMAScript2015PassParser.RULE_block = 4;
ECMAScript2015PassParser.RULE_statementList = 5;
ECMAScript2015PassParser.RULE_variableStatement = 6;
ECMAScript2015PassParser.RULE_variableDeclarationList = 7;
ECMAScript2015PassParser.RULE_variableDeclaration = 8;
ECMAScript2015PassParser.RULE_initialiser = 9;
ECMAScript2015PassParser.RULE_emptyStatement = 10;
ECMAScript2015PassParser.RULE_expressionStatement = 11;
ECMAScript2015PassParser.RULE_ifStatement = 12;
ECMAScript2015PassParser.RULE_iterationStatement = 13;
ECMAScript2015PassParser.RULE_continueStatement = 14;
ECMAScript2015PassParser.RULE_breakStatement = 15;
ECMAScript2015PassParser.RULE_returnStatement = 16;
ECMAScript2015PassParser.RULE_withStatement = 17;
ECMAScript2015PassParser.RULE_switchStatement = 18;
ECMAScript2015PassParser.RULE_caseBlock = 19;
ECMAScript2015PassParser.RULE_caseClauses = 20;
ECMAScript2015PassParser.RULE_caseClause = 21;
ECMAScript2015PassParser.RULE_defaultClause = 22;
ECMAScript2015PassParser.RULE_labelledStatement = 23;
ECMAScript2015PassParser.RULE_throwStatement = 24;
ECMAScript2015PassParser.RULE_tryStatement = 25;
ECMAScript2015PassParser.RULE_catchProduction = 26;
ECMAScript2015PassParser.RULE_finallyProduction = 27;
ECMAScript2015PassParser.RULE_debuggerStatement = 28;
ECMAScript2015PassParser.RULE_functionDeclaration = 29;
ECMAScript2015PassParser.RULE_formalParameterList = 30;
ECMAScript2015PassParser.RULE_functionBody = 31;
ECMAScript2015PassParser.RULE_arrayLiteral = 32;
ECMAScript2015PassParser.RULE_elementList = 33;
ECMAScript2015PassParser.RULE_elision = 34;
ECMAScript2015PassParser.RULE_objectLiteral = 35;
ECMAScript2015PassParser.RULE_propertyNameAndValueList = 36;
ECMAScript2015PassParser.RULE_propertyAssignment = 37;
ECMAScript2015PassParser.RULE_propertyName = 38;
ECMAScript2015PassParser.RULE_propertySetParameterList = 39;
ECMAScript2015PassParser.RULE_arguments = 40;
ECMAScript2015PassParser.RULE_argumentList = 41;
ECMAScript2015PassParser.RULE_expressionSequence = 42;
ECMAScript2015PassParser.RULE_singleExpression = 43;
ECMAScript2015PassParser.RULE_assignmentOperator = 44;
ECMAScript2015PassParser.RULE_literal = 45;
ECMAScript2015PassParser.RULE_numericLiteral = 46;
ECMAScript2015PassParser.RULE_identifierName = 47;
ECMAScript2015PassParser.RULE_reservedWord = 48;
ECMAScript2015PassParser.RULE_keyword = 49;
ECMAScript2015PassParser.RULE_futureReservedWord = 50;
ECMAScript2015PassParser.RULE_getter = 51;
ECMAScript2015PassParser.RULE_setter = 52;
ECMAScript2015PassParser.RULE_eos = 53;
ECMAScript2015PassParser.RULE_eof = 54;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(ECMAScript2015PassParser.EOF, 0);
};

ProgramContext.prototype.sourceElements = function() {
    return this.getTypedRuleContext(SourceElementsContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitProgram(this);
	}
};




ECMAScript2015PassParser.ProgramContext = ProgramContext;

ECMAScript2015PassParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ECMAScript2015PassParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.SemiColon) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Break - 51)) | (1 << (ECMAScript2015PassParser.Do - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Var - 51)) | (1 << (ECMAScript2015PassParser.Return - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Continue - 51)) | (1 << (ECMAScript2015PassParser.For - 51)) | (1 << (ECMAScript2015PassParser.Switch - 51)) | (1 << (ECMAScript2015PassParser.While - 51)) | (1 << (ECMAScript2015PassParser.Debugger - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.With - 51)) | (1 << (ECMAScript2015PassParser.If - 51)) | (1 << (ECMAScript2015PassParser.Throw - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)) | (1 << (ECMAScript2015PassParser.Try - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
            this.state = 110;
            this.sourceElements();
        }

        this.state = 113;
        this.match(ECMAScript2015PassParser.EOF);
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

function SourceElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_sourceElements;
    return this;
}

SourceElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceElementsContext.prototype.constructor = SourceElementsContext;

SourceElementsContext.prototype.sourceElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceElementContext);
    } else {
        return this.getTypedRuleContext(SourceElementContext,i);
    }
};

SourceElementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterSourceElements(this);
	}
};

SourceElementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitSourceElements(this);
	}
};




ECMAScript2015PassParser.SourceElementsContext = SourceElementsContext;

ECMAScript2015PassParser.prototype.sourceElements = function() {

    var localctx = new SourceElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScript2015PassParser.RULE_sourceElements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 115;
            this.sourceElement();
            this.state = 118; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.SemiColon) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Break - 51)) | (1 << (ECMAScript2015PassParser.Do - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Var - 51)) | (1 << (ECMAScript2015PassParser.Return - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Continue - 51)) | (1 << (ECMAScript2015PassParser.For - 51)) | (1 << (ECMAScript2015PassParser.Switch - 51)) | (1 << (ECMAScript2015PassParser.While - 51)) | (1 << (ECMAScript2015PassParser.Debugger - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.With - 51)) | (1 << (ECMAScript2015PassParser.If - 51)) | (1 << (ECMAScript2015PassParser.Throw - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)) | (1 << (ECMAScript2015PassParser.Try - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral);
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

function SourceElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_sourceElement;
    return this;
}

SourceElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceElementContext.prototype.constructor = SourceElementContext;

SourceElementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

SourceElementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

SourceElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterSourceElement(this);
	}
};

SourceElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitSourceElement(this);
	}
};




ECMAScript2015PassParser.SourceElementContext = SourceElementContext;

ECMAScript2015PassParser.prototype.sourceElement = function() {

    var localctx = new SourceElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScript2015PassParser.RULE_sourceElement);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.functionDeclaration();
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

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.variableStatement = function() {
    return this.getTypedRuleContext(VariableStatementContext,0);
};

StatementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.iterationStatement = function() {
    return this.getTypedRuleContext(IterationStatementContext,0);
};

StatementContext.prototype.continueStatement = function() {
    return this.getTypedRuleContext(ContinueStatementContext,0);
};

StatementContext.prototype.breakStatement = function() {
    return this.getTypedRuleContext(BreakStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.withStatement = function() {
    return this.getTypedRuleContext(WithStatementContext,0);
};

StatementContext.prototype.labelledStatement = function() {
    return this.getTypedRuleContext(LabelledStatementContext,0);
};

StatementContext.prototype.switchStatement = function() {
    return this.getTypedRuleContext(SwitchStatementContext,0);
};

StatementContext.prototype.throwStatement = function() {
    return this.getTypedRuleContext(ThrowStatementContext,0);
};

StatementContext.prototype.tryStatement = function() {
    return this.getTypedRuleContext(TryStatementContext,0);
};

StatementContext.prototype.debuggerStatement = function() {
    return this.getTypedRuleContext(DebuggerStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitStatement(this);
	}
};




ECMAScript2015PassParser.StatementContext = StatementContext;

ECMAScript2015PassParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScript2015PassParser.RULE_statement);
    try {
        this.state = 139;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.variableStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
            this.emptyStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 127;
            this.expressionStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 128;
            this.ifStatement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 129;
            this.iterationStatement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 130;
            this.continueStatement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 131;
            this.breakStatement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 132;
            this.returnStatement();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 133;
            this.withStatement();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 134;
            this.labelledStatement();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 135;
            this.switchStatement();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 136;
            this.throwStatement();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 137;
            this.tryStatement();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 138;
            this.debuggerStatement();
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

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitBlock(this);
	}
};




ECMAScript2015PassParser.BlockContext = BlockContext;

ECMAScript2015PassParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ECMAScript2015PassParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(ECMAScript2015PassParser.OpenBrace);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.SemiColon) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Break - 51)) | (1 << (ECMAScript2015PassParser.Do - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Var - 51)) | (1 << (ECMAScript2015PassParser.Return - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Continue - 51)) | (1 << (ECMAScript2015PassParser.For - 51)) | (1 << (ECMAScript2015PassParser.Switch - 51)) | (1 << (ECMAScript2015PassParser.While - 51)) | (1 << (ECMAScript2015PassParser.Debugger - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.With - 51)) | (1 << (ECMAScript2015PassParser.If - 51)) | (1 << (ECMAScript2015PassParser.Throw - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)) | (1 << (ECMAScript2015PassParser.Try - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
            this.state = 142;
            this.statementList();
        }

        this.state = 145;
        this.match(ECMAScript2015PassParser.CloseBrace);
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
    this.ruleIndex = ECMAScript2015PassParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitStatementList(this);
	}
};




ECMAScript2015PassParser.StatementListContext = StatementListContext;

ECMAScript2015PassParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ECMAScript2015PassParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 147;
            this.statement();
            this.state = 150; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.SemiColon) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Break - 51)) | (1 << (ECMAScript2015PassParser.Do - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Var - 51)) | (1 << (ECMAScript2015PassParser.Return - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Continue - 51)) | (1 << (ECMAScript2015PassParser.For - 51)) | (1 << (ECMAScript2015PassParser.Switch - 51)) | (1 << (ECMAScript2015PassParser.While - 51)) | (1 << (ECMAScript2015PassParser.Debugger - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.With - 51)) | (1 << (ECMAScript2015PassParser.If - 51)) | (1 << (ECMAScript2015PassParser.Throw - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)) | (1 << (ECMAScript2015PassParser.Try - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral);
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

function VariableStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_variableStatement;
    return this;
}

VariableStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableStatementContext.prototype.constructor = VariableStatementContext;

VariableStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScript2015PassParser.Var, 0);
};

VariableStatementContext.prototype.variableDeclarationList = function() {
    return this.getTypedRuleContext(VariableDeclarationListContext,0);
};

VariableStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

VariableStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterVariableStatement(this);
	}
};

VariableStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitVariableStatement(this);
	}
};




ECMAScript2015PassParser.VariableStatementContext = VariableStatementContext;

ECMAScript2015PassParser.prototype.variableStatement = function() {

    var localctx = new VariableStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ECMAScript2015PassParser.RULE_variableStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(ECMAScript2015PassParser.Var);
        this.state = 153;
        this.variableDeclarationList();
        this.state = 154;
        this.eos();
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

function VariableDeclarationListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_variableDeclarationList;
    return this;
}

VariableDeclarationListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationListContext.prototype.constructor = VariableDeclarationListContext;

VariableDeclarationListContext.prototype.variableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(VariableDeclarationContext,i);
    }
};

VariableDeclarationListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterVariableDeclarationList(this);
	}
};

VariableDeclarationListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitVariableDeclarationList(this);
	}
};




ECMAScript2015PassParser.VariableDeclarationListContext = VariableDeclarationListContext;

ECMAScript2015PassParser.prototype.variableDeclarationList = function() {

    var localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ECMAScript2015PassParser.RULE_variableDeclarationList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.variableDeclaration();
        this.state = 161;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 157;
                this.match(ECMAScript2015PassParser.Comma);
                this.state = 158;
                this.variableDeclaration(); 
            }
            this.state = 163;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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

function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

VariableDeclarationContext.prototype.initialiser = function() {
    return this.getTypedRuleContext(InitialiserContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitVariableDeclaration(this);
	}
};




ECMAScript2015PassParser.VariableDeclarationContext = VariableDeclarationContext;

ECMAScript2015PassParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ECMAScript2015PassParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(ECMAScript2015PassParser.Identifier);
        this.state = 166;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 165;
            this.initialiser();

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

function InitialiserContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_initialiser;
    return this;
}

InitialiserContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitialiserContext.prototype.constructor = InitialiserContext;

InitialiserContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

InitialiserContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterInitialiser(this);
	}
};

InitialiserContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitInitialiser(this);
	}
};




ECMAScript2015PassParser.InitialiserContext = InitialiserContext;

ECMAScript2015PassParser.prototype.initialiser = function() {

    var localctx = new InitialiserContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScript2015PassParser.RULE_initialiser);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(ECMAScript2015PassParser.Assign);
        this.state = 169;
        this.singleExpression(0);
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
    this.ruleIndex = ECMAScript2015PassParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScript2015PassParser.SemiColon, 0);
};

EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitEmptyStatement(this);
	}
};




ECMAScript2015PassParser.EmptyStatementContext = EmptyStatementContext;

ECMAScript2015PassParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScript2015PassParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(ECMAScript2015PassParser.SemiColon);
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
    this.ruleIndex = ECMAScript2015PassParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitExpressionStatement(this);
	}
};




ECMAScript2015PassParser.ExpressionStatementContext = ExpressionStatementContext;

ECMAScript2015PassParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ECMAScript2015PassParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.expressionSequence();
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

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.If = function() {
    return this.getToken(ECMAScript2015PassParser.If, 0);
};

IfStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

IfStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

IfStatementContext.prototype.Else = function() {
    return this.getToken(ECMAScript2015PassParser.Else, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitIfStatement(this);
	}
};




ECMAScript2015PassParser.IfStatementContext = IfStatementContext;

ECMAScript2015PassParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ECMAScript2015PassParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(ECMAScript2015PassParser.If);
        this.state = 176;
        this.match(ECMAScript2015PassParser.OpenParen);
        this.state = 177;
        this.expressionSequence();
        this.state = 178;
        this.match(ECMAScript2015PassParser.CloseParen);
        this.state = 179;
        this.statement();
        this.state = 182;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 180;
            this.match(ECMAScript2015PassParser.Else);
            this.state = 181;
            this.statement();

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

function IterationStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_iterationStatement;
    return this;
}

IterationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterationStatementContext.prototype.constructor = IterationStatementContext;


 
IterationStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DoStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoStatementContext.prototype = Object.create(IterationStatementContext.prototype);
DoStatementContext.prototype.constructor = DoStatementContext;

ECMAScript2015PassParser.DoStatementContext = DoStatementContext;

DoStatementContext.prototype.Do = function() {
    return this.getToken(ECMAScript2015PassParser.Do, 0);
};

DoStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

DoStatementContext.prototype.While = function() {
    return this.getToken(ECMAScript2015PassParser.While, 0);
};

DoStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

DoStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};
DoStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterDoStatement(this);
	}
};

DoStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitDoStatement(this);
	}
};


function ForVarStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForVarStatementContext.prototype = Object.create(IterationStatementContext.prototype);
ForVarStatementContext.prototype.constructor = ForVarStatementContext;

ECMAScript2015PassParser.ForVarStatementContext = ForVarStatementContext;

ForVarStatementContext.prototype.For = function() {
    return this.getToken(ECMAScript2015PassParser.For, 0);
};

ForVarStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScript2015PassParser.Var, 0);
};

ForVarStatementContext.prototype.variableDeclarationList = function() {
    return this.getTypedRuleContext(VariableDeclarationListContext,0);
};

ForVarStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ForVarStatementContext.prototype.expressionSequence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionSequenceContext);
    } else {
        return this.getTypedRuleContext(ExpressionSequenceContext,i);
    }
};
ForVarStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterForVarStatement(this);
	}
};

ForVarStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitForVarStatement(this);
	}
};


function ForVarInStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForVarInStatementContext.prototype = Object.create(IterationStatementContext.prototype);
ForVarInStatementContext.prototype.constructor = ForVarInStatementContext;

ECMAScript2015PassParser.ForVarInStatementContext = ForVarInStatementContext;

ForVarInStatementContext.prototype.For = function() {
    return this.getToken(ECMAScript2015PassParser.For, 0);
};

ForVarInStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScript2015PassParser.Var, 0);
};

ForVarInStatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

ForVarInStatementContext.prototype.In = function() {
    return this.getToken(ECMAScript2015PassParser.In, 0);
};

ForVarInStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ForVarInStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
ForVarInStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterForVarInStatement(this);
	}
};

ForVarInStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitForVarInStatement(this);
	}
};


function WhileStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileStatementContext.prototype = Object.create(IterationStatementContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

ECMAScript2015PassParser.WhileStatementContext = WhileStatementContext;

WhileStatementContext.prototype.While = function() {
    return this.getToken(ECMAScript2015PassParser.While, 0);
};

WhileStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

WhileStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitWhileStatement(this);
	}
};


function ForStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForStatementContext.prototype = Object.create(IterationStatementContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ECMAScript2015PassParser.ForStatementContext = ForStatementContext;

ForStatementContext.prototype.For = function() {
    return this.getToken(ECMAScript2015PassParser.For, 0);
};

ForStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ForStatementContext.prototype.expressionSequence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionSequenceContext);
    } else {
        return this.getTypedRuleContext(ExpressionSequenceContext,i);
    }
};
ForStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterForStatement(this);
	}
};

ForStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitForStatement(this);
	}
};


function ForInStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForInStatementContext.prototype = Object.create(IterationStatementContext.prototype);
ForInStatementContext.prototype.constructor = ForInStatementContext;

ECMAScript2015PassParser.ForInStatementContext = ForInStatementContext;

ForInStatementContext.prototype.For = function() {
    return this.getToken(ECMAScript2015PassParser.For, 0);
};

ForInStatementContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ForInStatementContext.prototype.In = function() {
    return this.getToken(ECMAScript2015PassParser.In, 0);
};

ForInStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ForInStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
ForInStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterForInStatement(this);
	}
};

ForInStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitForInStatement(this);
	}
};



ECMAScript2015PassParser.IterationStatementContext = IterationStatementContext;

ECMAScript2015PassParser.prototype.iterationStatement = function() {

    var localctx = new IterationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ECMAScript2015PassParser.RULE_iterationStatement);
    var _la = 0; // Token type
    try {
        this.state = 245;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DoStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.match(ECMAScript2015PassParser.Do);
            this.state = 185;
            this.statement();
            this.state = 186;
            this.match(ECMAScript2015PassParser.While);
            this.state = 187;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 188;
            this.expressionSequence();
            this.state = 189;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 190;
            this.eos();
            break;

        case 2:
            localctx = new WhileStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 192;
            this.match(ECMAScript2015PassParser.While);
            this.state = 193;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 194;
            this.expressionSequence();
            this.state = 195;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 196;
            this.statement();
            break;

        case 3:
            localctx = new ForStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 198;
            this.match(ECMAScript2015PassParser.For);
            this.state = 199;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 201;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
                this.state = 200;
                this.expressionSequence();
            }

            this.state = 203;
            this.match(ECMAScript2015PassParser.SemiColon);
            this.state = 205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
                this.state = 204;
                this.expressionSequence();
            }

            this.state = 207;
            this.match(ECMAScript2015PassParser.SemiColon);
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
                this.state = 208;
                this.expressionSequence();
            }

            this.state = 211;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 212;
            this.statement();
            break;

        case 4:
            localctx = new ForVarStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 213;
            this.match(ECMAScript2015PassParser.For);
            this.state = 214;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 215;
            this.match(ECMAScript2015PassParser.Var);
            this.state = 216;
            this.variableDeclarationList();
            this.state = 217;
            this.match(ECMAScript2015PassParser.SemiColon);
            this.state = 219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
                this.state = 218;
                this.expressionSequence();
            }

            this.state = 221;
            this.match(ECMAScript2015PassParser.SemiColon);
            this.state = 223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
                this.state = 222;
                this.expressionSequence();
            }

            this.state = 225;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 226;
            this.statement();
            break;

        case 5:
            localctx = new ForInStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 228;
            this.match(ECMAScript2015PassParser.For);
            this.state = 229;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 230;
            this.singleExpression(0);
            this.state = 231;
            this.match(ECMAScript2015PassParser.In);
            this.state = 232;
            this.expressionSequence();
            this.state = 233;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 234;
            this.statement();
            break;

        case 6:
            localctx = new ForVarInStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 236;
            this.match(ECMAScript2015PassParser.For);
            this.state = 237;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 238;
            this.match(ECMAScript2015PassParser.Var);
            this.state = 239;
            this.variableDeclaration();
            this.state = 240;
            this.match(ECMAScript2015PassParser.In);
            this.state = 241;
            this.expressionSequence();
            this.state = 242;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 243;
            this.statement();
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

function ContinueStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_continueStatement;
    return this;
}

ContinueStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueStatementContext.prototype.constructor = ContinueStatementContext;

ContinueStatementContext.prototype.Continue = function() {
    return this.getToken(ECMAScript2015PassParser.Continue, 0);
};

ContinueStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ContinueStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

ContinueStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterContinueStatement(this);
	}
};

ContinueStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitContinueStatement(this);
	}
};




ECMAScript2015PassParser.ContinueStatementContext = ContinueStatementContext;

ECMAScript2015PassParser.prototype.continueStatement = function() {

    var localctx = new ContinueStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ECMAScript2015PassParser.RULE_continueStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.match(ECMAScript2015PassParser.Continue);
        this.state = 250;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 248;
            if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
            }
            this.state = 249;
            this.match(ECMAScript2015PassParser.Identifier);

        }
        this.state = 252;
        this.eos();
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

function BreakStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_breakStatement;
    return this;
}

BreakStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakStatementContext.prototype.constructor = BreakStatementContext;

BreakStatementContext.prototype.Break = function() {
    return this.getToken(ECMAScript2015PassParser.Break, 0);
};

BreakStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

BreakStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

BreakStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterBreakStatement(this);
	}
};

BreakStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitBreakStatement(this);
	}
};




ECMAScript2015PassParser.BreakStatementContext = BreakStatementContext;

ECMAScript2015PassParser.prototype.breakStatement = function() {

    var localctx = new BreakStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ECMAScript2015PassParser.RULE_breakStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this.match(ECMAScript2015PassParser.Break);
        this.state = 257;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 255;
            if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
            }
            this.state = 256;
            this.match(ECMAScript2015PassParser.Identifier);

        }
        this.state = 259;
        this.eos();
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

function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.Return = function() {
    return this.getToken(ECMAScript2015PassParser.Return, 0);
};

ReturnStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ReturnStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitReturnStatement(this);
	}
};




ECMAScript2015PassParser.ReturnStatementContext = ReturnStatementContext;

ECMAScript2015PassParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ECMAScript2015PassParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.match(ECMAScript2015PassParser.Return);
        this.state = 264;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 262;
            if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
            }
            this.state = 263;
            this.expressionSequence();

        }
        this.state = 266;
        this.eos();
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

function WithStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_withStatement;
    return this;
}

WithStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithStatementContext.prototype.constructor = WithStatementContext;

WithStatementContext.prototype.With = function() {
    return this.getToken(ECMAScript2015PassParser.With, 0);
};

WithStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

WithStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

WithStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterWithStatement(this);
	}
};

WithStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitWithStatement(this);
	}
};




ECMAScript2015PassParser.WithStatementContext = WithStatementContext;

ECMAScript2015PassParser.prototype.withStatement = function() {

    var localctx = new WithStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ECMAScript2015PassParser.RULE_withStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(ECMAScript2015PassParser.With);
        this.state = 269;
        this.match(ECMAScript2015PassParser.OpenParen);
        this.state = 270;
        this.expressionSequence();
        this.state = 271;
        this.match(ECMAScript2015PassParser.CloseParen);
        this.state = 272;
        this.statement();
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

function SwitchStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_switchStatement;
    return this;
}

SwitchStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwitchStatementContext.prototype.constructor = SwitchStatementContext;

SwitchStatementContext.prototype.Switch = function() {
    return this.getToken(ECMAScript2015PassParser.Switch, 0);
};

SwitchStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

SwitchStatementContext.prototype.caseBlock = function() {
    return this.getTypedRuleContext(CaseBlockContext,0);
};

SwitchStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterSwitchStatement(this);
	}
};

SwitchStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitSwitchStatement(this);
	}
};




ECMAScript2015PassParser.SwitchStatementContext = SwitchStatementContext;

ECMAScript2015PassParser.prototype.switchStatement = function() {

    var localctx = new SwitchStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ECMAScript2015PassParser.RULE_switchStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(ECMAScript2015PassParser.Switch);
        this.state = 275;
        this.match(ECMAScript2015PassParser.OpenParen);
        this.state = 276;
        this.expressionSequence();
        this.state = 277;
        this.match(ECMAScript2015PassParser.CloseParen);
        this.state = 278;
        this.caseBlock();
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

function CaseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_caseBlock;
    return this;
}

CaseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseBlockContext.prototype.constructor = CaseBlockContext;

CaseBlockContext.prototype.caseClauses = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaseClausesContext);
    } else {
        return this.getTypedRuleContext(CaseClausesContext,i);
    }
};

CaseBlockContext.prototype.defaultClause = function() {
    return this.getTypedRuleContext(DefaultClauseContext,0);
};

CaseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterCaseBlock(this);
	}
};

CaseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitCaseBlock(this);
	}
};




ECMAScript2015PassParser.CaseBlockContext = CaseBlockContext;

ECMAScript2015PassParser.prototype.caseBlock = function() {

    var localctx = new CaseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ECMAScript2015PassParser.RULE_caseBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(ECMAScript2015PassParser.OpenBrace);
        this.state = 282;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScript2015PassParser.Case) {
            this.state = 281;
            this.caseClauses();
        }

        this.state = 288;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScript2015PassParser.Default) {
            this.state = 284;
            this.defaultClause();
            this.state = 286;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScript2015PassParser.Case) {
                this.state = 285;
                this.caseClauses();
            }

        }

        this.state = 290;
        this.match(ECMAScript2015PassParser.CloseBrace);
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

function CaseClausesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_caseClauses;
    return this;
}

CaseClausesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseClausesContext.prototype.constructor = CaseClausesContext;

CaseClausesContext.prototype.caseClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaseClauseContext);
    } else {
        return this.getTypedRuleContext(CaseClauseContext,i);
    }
};

CaseClausesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterCaseClauses(this);
	}
};

CaseClausesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitCaseClauses(this);
	}
};




ECMAScript2015PassParser.CaseClausesContext = CaseClausesContext;

ECMAScript2015PassParser.prototype.caseClauses = function() {

    var localctx = new CaseClausesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ECMAScript2015PassParser.RULE_caseClauses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 292;
            this.caseClause();
            this.state = 295; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ECMAScript2015PassParser.Case);
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

function CaseClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_caseClause;
    return this;
}

CaseClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseClauseContext.prototype.constructor = CaseClauseContext;

CaseClauseContext.prototype.Case = function() {
    return this.getToken(ECMAScript2015PassParser.Case, 0);
};

CaseClauseContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

CaseClauseContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

CaseClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterCaseClause(this);
	}
};

CaseClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitCaseClause(this);
	}
};




ECMAScript2015PassParser.CaseClauseContext = CaseClauseContext;

ECMAScript2015PassParser.prototype.caseClause = function() {

    var localctx = new CaseClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ECMAScript2015PassParser.RULE_caseClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this.match(ECMAScript2015PassParser.Case);
        this.state = 298;
        this.expressionSequence();
        this.state = 299;
        this.match(ECMAScript2015PassParser.Colon);
        this.state = 301;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.SemiColon) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Break - 51)) | (1 << (ECMAScript2015PassParser.Do - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Var - 51)) | (1 << (ECMAScript2015PassParser.Return - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Continue - 51)) | (1 << (ECMAScript2015PassParser.For - 51)) | (1 << (ECMAScript2015PassParser.Switch - 51)) | (1 << (ECMAScript2015PassParser.While - 51)) | (1 << (ECMAScript2015PassParser.Debugger - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.With - 51)) | (1 << (ECMAScript2015PassParser.If - 51)) | (1 << (ECMAScript2015PassParser.Throw - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)) | (1 << (ECMAScript2015PassParser.Try - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
            this.state = 300;
            this.statementList();
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

function DefaultClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_defaultClause;
    return this;
}

DefaultClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultClauseContext.prototype.constructor = DefaultClauseContext;

DefaultClauseContext.prototype.Default = function() {
    return this.getToken(ECMAScript2015PassParser.Default, 0);
};

DefaultClauseContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

DefaultClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterDefaultClause(this);
	}
};

DefaultClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitDefaultClause(this);
	}
};




ECMAScript2015PassParser.DefaultClauseContext = DefaultClauseContext;

ECMAScript2015PassParser.prototype.defaultClause = function() {

    var localctx = new DefaultClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ECMAScript2015PassParser.RULE_defaultClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.match(ECMAScript2015PassParser.Default);
        this.state = 304;
        this.match(ECMAScript2015PassParser.Colon);
        this.state = 306;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.SemiColon) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Break - 51)) | (1 << (ECMAScript2015PassParser.Do - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Var - 51)) | (1 << (ECMAScript2015PassParser.Return - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Continue - 51)) | (1 << (ECMAScript2015PassParser.For - 51)) | (1 << (ECMAScript2015PassParser.Switch - 51)) | (1 << (ECMAScript2015PassParser.While - 51)) | (1 << (ECMAScript2015PassParser.Debugger - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.With - 51)) | (1 << (ECMAScript2015PassParser.If - 51)) | (1 << (ECMAScript2015PassParser.Throw - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)) | (1 << (ECMAScript2015PassParser.Try - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
            this.state = 305;
            this.statementList();
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

function LabelledStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_labelledStatement;
    return this;
}

LabelledStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelledStatementContext.prototype.constructor = LabelledStatementContext;

LabelledStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

LabelledStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

LabelledStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterLabelledStatement(this);
	}
};

LabelledStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitLabelledStatement(this);
	}
};




ECMAScript2015PassParser.LabelledStatementContext = LabelledStatementContext;

ECMAScript2015PassParser.prototype.labelledStatement = function() {

    var localctx = new LabelledStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ECMAScript2015PassParser.RULE_labelledStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this.match(ECMAScript2015PassParser.Identifier);
        this.state = 309;
        this.match(ECMAScript2015PassParser.Colon);
        this.state = 310;
        this.statement();
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

function ThrowStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_throwStatement;
    return this;
}

ThrowStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowStatementContext.prototype.constructor = ThrowStatementContext;

ThrowStatementContext.prototype.Throw = function() {
    return this.getToken(ECMAScript2015PassParser.Throw, 0);
};

ThrowStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ThrowStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ThrowStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterThrowStatement(this);
	}
};

ThrowStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitThrowStatement(this);
	}
};




ECMAScript2015PassParser.ThrowStatementContext = ThrowStatementContext;

ECMAScript2015PassParser.prototype.throwStatement = function() {

    var localctx = new ThrowStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ECMAScript2015PassParser.RULE_throwStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        this.match(ECMAScript2015PassParser.Throw);
        this.state = 313;
        if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
            throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
        }
        this.state = 314;
        this.expressionSequence();
        this.state = 315;
        this.eos();
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

function TryStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_tryStatement;
    return this;
}

TryStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TryStatementContext.prototype.constructor = TryStatementContext;

TryStatementContext.prototype.Try = function() {
    return this.getToken(ECMAScript2015PassParser.Try, 0);
};

TryStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

TryStatementContext.prototype.catchProduction = function() {
    return this.getTypedRuleContext(CatchProductionContext,0);
};

TryStatementContext.prototype.finallyProduction = function() {
    return this.getTypedRuleContext(FinallyProductionContext,0);
};

TryStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterTryStatement(this);
	}
};

TryStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitTryStatement(this);
	}
};




ECMAScript2015PassParser.TryStatementContext = TryStatementContext;

ECMAScript2015PassParser.prototype.tryStatement = function() {

    var localctx = new TryStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ECMAScript2015PassParser.RULE_tryStatement);
    try {
        this.state = 330;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 317;
            this.match(ECMAScript2015PassParser.Try);
            this.state = 318;
            this.block();
            this.state = 319;
            this.catchProduction();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 321;
            this.match(ECMAScript2015PassParser.Try);
            this.state = 322;
            this.block();
            this.state = 323;
            this.finallyProduction();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 325;
            this.match(ECMAScript2015PassParser.Try);
            this.state = 326;
            this.block();
            this.state = 327;
            this.catchProduction();
            this.state = 328;
            this.finallyProduction();
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

function CatchProductionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_catchProduction;
    return this;
}

CatchProductionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CatchProductionContext.prototype.constructor = CatchProductionContext;

CatchProductionContext.prototype.Catch = function() {
    return this.getToken(ECMAScript2015PassParser.Catch, 0);
};

CatchProductionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

CatchProductionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

CatchProductionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterCatchProduction(this);
	}
};

CatchProductionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitCatchProduction(this);
	}
};




ECMAScript2015PassParser.CatchProductionContext = CatchProductionContext;

ECMAScript2015PassParser.prototype.catchProduction = function() {

    var localctx = new CatchProductionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ECMAScript2015PassParser.RULE_catchProduction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(ECMAScript2015PassParser.Catch);
        this.state = 333;
        this.match(ECMAScript2015PassParser.OpenParen);
        this.state = 334;
        this.match(ECMAScript2015PassParser.Identifier);
        this.state = 335;
        this.match(ECMAScript2015PassParser.CloseParen);
        this.state = 336;
        this.block();
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

function FinallyProductionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_finallyProduction;
    return this;
}

FinallyProductionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FinallyProductionContext.prototype.constructor = FinallyProductionContext;

FinallyProductionContext.prototype.Finally = function() {
    return this.getToken(ECMAScript2015PassParser.Finally, 0);
};

FinallyProductionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FinallyProductionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterFinallyProduction(this);
	}
};

FinallyProductionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitFinallyProduction(this);
	}
};




ECMAScript2015PassParser.FinallyProductionContext = FinallyProductionContext;

ECMAScript2015PassParser.prototype.finallyProduction = function() {

    var localctx = new FinallyProductionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ECMAScript2015PassParser.RULE_finallyProduction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(ECMAScript2015PassParser.Finally);
        this.state = 339;
        this.block();
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

function DebuggerStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_debuggerStatement;
    return this;
}

DebuggerStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DebuggerStatementContext.prototype.constructor = DebuggerStatementContext;

DebuggerStatementContext.prototype.Debugger = function() {
    return this.getToken(ECMAScript2015PassParser.Debugger, 0);
};

DebuggerStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

DebuggerStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterDebuggerStatement(this);
	}
};

DebuggerStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitDebuggerStatement(this);
	}
};




ECMAScript2015PassParser.DebuggerStatementContext = DebuggerStatementContext;

ECMAScript2015PassParser.prototype.debuggerStatement = function() {

    var localctx = new DebuggerStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ECMAScript2015PassParser.RULE_debuggerStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this.match(ECMAScript2015PassParser.Debugger);
        this.state = 342;
        this.eos();
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
    this.ruleIndex = ECMAScript2015PassParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(ECMAScript2015PassParser.Function, 0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitFunctionDeclaration(this);
	}
};




ECMAScript2015PassParser.FunctionDeclarationContext = FunctionDeclarationContext;

ECMAScript2015PassParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ECMAScript2015PassParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.match(ECMAScript2015PassParser.Function);
        this.state = 345;
        this.match(ECMAScript2015PassParser.Identifier);
        this.state = 346;
        this.match(ECMAScript2015PassParser.OpenParen);
        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScript2015PassParser.Identifier) {
            this.state = 347;
            this.formalParameterList();
        }

        this.state = 350;
        this.match(ECMAScript2015PassParser.CloseParen);
        this.state = 351;
        this.match(ECMAScript2015PassParser.OpenBrace);
        this.state = 352;
        this.functionBody();
        this.state = 353;
        this.match(ECMAScript2015PassParser.CloseBrace);
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

function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScript2015PassParser.Identifier);
    } else {
        return this.getToken(ECMAScript2015PassParser.Identifier, i);
    }
};


FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitFormalParameterList(this);
	}
};




ECMAScript2015PassParser.FormalParameterListContext = FormalParameterListContext;

ECMAScript2015PassParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ECMAScript2015PassParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this.match(ECMAScript2015PassParser.Identifier);
        this.state = 360;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScript2015PassParser.Comma) {
            this.state = 356;
            this.match(ECMAScript2015PassParser.Comma);
            this.state = 357;
            this.match(ECMAScript2015PassParser.Identifier);
            this.state = 362;
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

function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.sourceElements = function() {
    return this.getTypedRuleContext(SourceElementsContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitFunctionBody(this);
	}
};




ECMAScript2015PassParser.FunctionBodyContext = FunctionBodyContext;

ECMAScript2015PassParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ECMAScript2015PassParser.RULE_functionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.SemiColon) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Break - 51)) | (1 << (ECMAScript2015PassParser.Do - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Var - 51)) | (1 << (ECMAScript2015PassParser.Return - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Continue - 51)) | (1 << (ECMAScript2015PassParser.For - 51)) | (1 << (ECMAScript2015PassParser.Switch - 51)) | (1 << (ECMAScript2015PassParser.While - 51)) | (1 << (ECMAScript2015PassParser.Debugger - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.With - 51)) | (1 << (ECMAScript2015PassParser.If - 51)) | (1 << (ECMAScript2015PassParser.Throw - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)) | (1 << (ECMAScript2015PassParser.Try - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
            this.state = 363;
            this.sourceElements();
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

function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.elementList = function() {
    return this.getTypedRuleContext(ElementListContext,0);
};

ArrayLiteralContext.prototype.elision = function() {
    return this.getTypedRuleContext(ElisionContext,0);
};

ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitArrayLiteral(this);
	}
};




ECMAScript2015PassParser.ArrayLiteralContext = ArrayLiteralContext;

ECMAScript2015PassParser.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ECMAScript2015PassParser.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        this.match(ECMAScript2015PassParser.OpenBracket);
        this.state = 368;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 367;
            this.elementList();

        }
        this.state = 371;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        if(la_===1) {
            this.state = 370;
            this.match(ECMAScript2015PassParser.Comma);

        }
        this.state = 374;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScript2015PassParser.Comma) {
            this.state = 373;
            this.elision();
        }

        this.state = 376;
        this.match(ECMAScript2015PassParser.CloseBracket);
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

function ElementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_elementList;
    return this;
}

ElementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListContext.prototype.constructor = ElementListContext;

ElementListContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ElementListContext.prototype.elision = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElisionContext);
    } else {
        return this.getTypedRuleContext(ElisionContext,i);
    }
};

ElementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterElementList(this);
	}
};

ElementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitElementList(this);
	}
};




ECMAScript2015PassParser.ElementListContext = ElementListContext;

ECMAScript2015PassParser.prototype.elementList = function() {

    var localctx = new ElementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ECMAScript2015PassParser.RULE_elementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScript2015PassParser.Comma) {
            this.state = 378;
            this.elision();
        }

        this.state = 381;
        this.singleExpression(0);
        this.state = 389;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 382;
                this.match(ECMAScript2015PassParser.Comma);
                this.state = 384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ECMAScript2015PassParser.Comma) {
                    this.state = 383;
                    this.elision();
                }

                this.state = 386;
                this.singleExpression(0); 
            }
            this.state = 391;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
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

function ElisionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_elision;
    return this;
}

ElisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElisionContext.prototype.constructor = ElisionContext;


ElisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterElision(this);
	}
};

ElisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitElision(this);
	}
};




ECMAScript2015PassParser.ElisionContext = ElisionContext;

ECMAScript2015PassParser.prototype.elision = function() {

    var localctx = new ElisionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ECMAScript2015PassParser.RULE_elision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 393; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 392;
            this.match(ECMAScript2015PassParser.Comma);
            this.state = 395; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ECMAScript2015PassParser.Comma);
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
    this.ruleIndex = ECMAScript2015PassParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.propertyNameAndValueList = function() {
    return this.getTypedRuleContext(PropertyNameAndValueListContext,0);
};

ObjectLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitObjectLiteral(this);
	}
};




ECMAScript2015PassParser.ObjectLiteralContext = ObjectLiteralContext;

ECMAScript2015PassParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ECMAScript2015PassParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.state = 406;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 397;
            this.match(ECMAScript2015PassParser.OpenBrace);
            this.state = 398;
            this.match(ECMAScript2015PassParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 399;
            this.match(ECMAScript2015PassParser.OpenBrace);
            this.state = 400;
            this.propertyNameAndValueList();
            this.state = 402;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScript2015PassParser.Comma) {
                this.state = 401;
                this.match(ECMAScript2015PassParser.Comma);
            }

            this.state = 404;
            this.match(ECMAScript2015PassParser.CloseBrace);
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

function PropertyNameAndValueListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_propertyNameAndValueList;
    return this;
}

PropertyNameAndValueListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameAndValueListContext.prototype.constructor = PropertyNameAndValueListContext;

PropertyNameAndValueListContext.prototype.propertyAssignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyAssignmentContext);
    } else {
        return this.getTypedRuleContext(PropertyAssignmentContext,i);
    }
};

PropertyNameAndValueListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPropertyNameAndValueList(this);
	}
};

PropertyNameAndValueListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPropertyNameAndValueList(this);
	}
};




ECMAScript2015PassParser.PropertyNameAndValueListContext = PropertyNameAndValueListContext;

ECMAScript2015PassParser.prototype.propertyNameAndValueList = function() {

    var localctx = new PropertyNameAndValueListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, ECMAScript2015PassParser.RULE_propertyNameAndValueList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        this.propertyAssignment();
        this.state = 413;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 409;
                this.match(ECMAScript2015PassParser.Comma);
                this.state = 410;
                this.propertyAssignment(); 
            }
            this.state = 415;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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

function PropertyAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_propertyAssignment;
    return this;
}

PropertyAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignmentContext.prototype.constructor = PropertyAssignmentContext;


 
PropertyAssignmentContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PropertyExpressionAssignmentContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyExpressionAssignmentContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertyExpressionAssignmentContext.prototype.constructor = PropertyExpressionAssignmentContext;

ECMAScript2015PassParser.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;

PropertyExpressionAssignmentContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyExpressionAssignmentContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PropertyExpressionAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPropertyExpressionAssignment(this);
	}
};

PropertyExpressionAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPropertyExpressionAssignment(this);
	}
};


function PropertySetterContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertySetterContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertySetterContext.prototype.constructor = PropertySetterContext;

ECMAScript2015PassParser.PropertySetterContext = PropertySetterContext;

PropertySetterContext.prototype.setter = function() {
    return this.getTypedRuleContext(SetterContext,0);
};

PropertySetterContext.prototype.propertySetParameterList = function() {
    return this.getTypedRuleContext(PropertySetParameterListContext,0);
};

PropertySetterContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};
PropertySetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPropertySetter(this);
	}
};

PropertySetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPropertySetter(this);
	}
};


function PropertyGetterContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyGetterContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertyGetterContext.prototype.constructor = PropertyGetterContext;

ECMAScript2015PassParser.PropertyGetterContext = PropertyGetterContext;

PropertyGetterContext.prototype.getter = function() {
    return this.getTypedRuleContext(GetterContext,0);
};

PropertyGetterContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};
PropertyGetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPropertyGetter(this);
	}
};

PropertyGetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPropertyGetter(this);
	}
};



ECMAScript2015PassParser.PropertyAssignmentContext = PropertyAssignmentContext;

ECMAScript2015PassParser.prototype.propertyAssignment = function() {

    var localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ECMAScript2015PassParser.RULE_propertyAssignment);
    try {
        this.state = 435;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PropertyExpressionAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 416;
            this.propertyName();
            this.state = 417;
            this.match(ECMAScript2015PassParser.Colon);
            this.state = 418;
            this.singleExpression(0);
            break;

        case 2:
            localctx = new PropertyGetterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 420;
            this.getter();
            this.state = 421;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 422;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 423;
            this.match(ECMAScript2015PassParser.OpenBrace);
            this.state = 424;
            this.functionBody();
            this.state = 425;
            this.match(ECMAScript2015PassParser.CloseBrace);
            break;

        case 3:
            localctx = new PropertySetterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 427;
            this.setter();
            this.state = 428;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 429;
            this.propertySetParameterList();
            this.state = 430;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 431;
            this.match(ECMAScript2015PassParser.OpenBrace);
            this.state = 432;
            this.functionBody();
            this.state = 433;
            this.match(ECMAScript2015PassParser.CloseBrace);
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

function PropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};

PropertyNameContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.StringLiteral, 0);
};

PropertyNameContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPropertyName(this);
	}
};




ECMAScript2015PassParser.PropertyNameContext = PropertyNameContext;

ECMAScript2015PassParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ECMAScript2015PassParser.RULE_propertyName);
    try {
        this.state = 440;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScript2015PassParser.NullLiteral:
        case ECMAScript2015PassParser.BooleanLiteral:
        case ECMAScript2015PassParser.Break:
        case ECMAScript2015PassParser.Do:
        case ECMAScript2015PassParser.Instanceof:
        case ECMAScript2015PassParser.Typeof:
        case ECMAScript2015PassParser.Case:
        case ECMAScript2015PassParser.Else:
        case ECMAScript2015PassParser.New:
        case ECMAScript2015PassParser.Var:
        case ECMAScript2015PassParser.Catch:
        case ECMAScript2015PassParser.Finally:
        case ECMAScript2015PassParser.Return:
        case ECMAScript2015PassParser.Void:
        case ECMAScript2015PassParser.Continue:
        case ECMAScript2015PassParser.For:
        case ECMAScript2015PassParser.Switch:
        case ECMAScript2015PassParser.While:
        case ECMAScript2015PassParser.Debugger:
        case ECMAScript2015PassParser.Function:
        case ECMAScript2015PassParser.This:
        case ECMAScript2015PassParser.With:
        case ECMAScript2015PassParser.Default:
        case ECMAScript2015PassParser.If:
        case ECMAScript2015PassParser.Throw:
        case ECMAScript2015PassParser.Delete:
        case ECMAScript2015PassParser.In:
        case ECMAScript2015PassParser.Try:
        case ECMAScript2015PassParser.Class:
        case ECMAScript2015PassParser.Enum:
        case ECMAScript2015PassParser.Extends:
        case ECMAScript2015PassParser.Super:
        case ECMAScript2015PassParser.Const:
        case ECMAScript2015PassParser.Export:
        case ECMAScript2015PassParser.Import:
        case ECMAScript2015PassParser.Implements:
        case ECMAScript2015PassParser.Let:
        case ECMAScript2015PassParser.Private:
        case ECMAScript2015PassParser.Public:
        case ECMAScript2015PassParser.Interface:
        case ECMAScript2015PassParser.Package:
        case ECMAScript2015PassParser.Protected:
        case ECMAScript2015PassParser.Static:
        case ECMAScript2015PassParser.Yield:
        case ECMAScript2015PassParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 437;
            this.identifierName();
            break;
        case ECMAScript2015PassParser.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 438;
            this.match(ECMAScript2015PassParser.StringLiteral);
            break;
        case ECMAScript2015PassParser.DecimalLiteral:
        case ECMAScript2015PassParser.HexIntegerLiteral:
        case ECMAScript2015PassParser.OctalIntegerLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 439;
            this.numericLiteral();
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

function PropertySetParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_propertySetParameterList;
    return this;
}

PropertySetParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertySetParameterListContext.prototype.constructor = PropertySetParameterListContext;

PropertySetParameterListContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

PropertySetParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPropertySetParameterList(this);
	}
};

PropertySetParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPropertySetParameterList(this);
	}
};




ECMAScript2015PassParser.PropertySetParameterListContext = PropertySetParameterListContext;

ECMAScript2015PassParser.prototype.propertySetParameterList = function() {

    var localctx = new PropertySetParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ECMAScript2015PassParser.RULE_propertySetParameterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this.match(ECMAScript2015PassParser.Identifier);
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

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitArguments(this);
	}
};




ECMAScript2015PassParser.ArgumentsContext = ArgumentsContext;

ECMAScript2015PassParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ECMAScript2015PassParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 444;
        this.match(ECMAScript2015PassParser.OpenParen);
        this.state = 446;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RegularExpressionLiteral) | (1 << ECMAScript2015PassParser.OpenBracket) | (1 << ECMAScript2015PassParser.OpenParen) | (1 << ECMAScript2015PassParser.OpenBrace) | (1 << ECMAScript2015PassParser.PlusPlus) | (1 << ECMAScript2015PassParser.MinusMinus) | (1 << ECMAScript2015PassParser.Plus) | (1 << ECMAScript2015PassParser.Minus) | (1 << ECMAScript2015PassParser.BitNot) | (1 << ECMAScript2015PassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScript2015PassParser.NullLiteral - 51)) | (1 << (ECMAScript2015PassParser.BooleanLiteral - 51)) | (1 << (ECMAScript2015PassParser.DecimalLiteral - 51)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScript2015PassParser.Typeof - 51)) | (1 << (ECMAScript2015PassParser.New - 51)) | (1 << (ECMAScript2015PassParser.Void - 51)) | (1 << (ECMAScript2015PassParser.Function - 51)) | (1 << (ECMAScript2015PassParser.This - 51)) | (1 << (ECMAScript2015PassParser.Delete - 51)))) !== 0) || _la===ECMAScript2015PassParser.Identifier || _la===ECMAScript2015PassParser.StringLiteral) {
            this.state = 445;
            this.argumentList();
        }

        this.state = 448;
        this.match(ECMAScript2015PassParser.CloseParen);
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

function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ArgumentListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterArgumentList(this);
	}
};

ArgumentListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitArgumentList(this);
	}
};




ECMAScript2015PassParser.ArgumentListContext = ArgumentListContext;

ECMAScript2015PassParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, ECMAScript2015PassParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 450;
        this.singleExpression(0);
        this.state = 455;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScript2015PassParser.Comma) {
            this.state = 451;
            this.match(ECMAScript2015PassParser.Comma);
            this.state = 452;
            this.singleExpression(0);
            this.state = 457;
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

function ExpressionSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_expressionSequence;
    return this;
}

ExpressionSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionSequenceContext.prototype.constructor = ExpressionSequenceContext;

ExpressionSequenceContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ExpressionSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterExpressionSequence(this);
	}
};

ExpressionSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitExpressionSequence(this);
	}
};




ECMAScript2015PassParser.ExpressionSequenceContext = ExpressionSequenceContext;

ECMAScript2015PassParser.prototype.expressionSequence = function() {

    var localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, ECMAScript2015PassParser.RULE_expressionSequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 458;
        this.singleExpression(0);
        this.state = 463;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 459;
                this.match(ECMAScript2015PassParser.Comma);
                this.state = 460;
                this.singleExpression(0); 
            }
            this.state = 465;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
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

function SingleExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_singleExpression;
    return this;
}

SingleExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleExpressionContext.prototype.constructor = SingleExpressionContext;


 
SingleExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function TernaryExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
TernaryExpressionContext.prototype.constructor = TernaryExpressionContext;

ECMAScript2015PassParser.TernaryExpressionContext = TernaryExpressionContext;

TernaryExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
TernaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitTernaryExpression(this);
	}
};


function LogicalAndExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalAndExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalAndExpressionContext.prototype.constructor = LogicalAndExpressionContext;

ECMAScript2015PassParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

LogicalAndExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
LogicalAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterLogicalAndExpression(this);
	}
};

LogicalAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitLogicalAndExpression(this);
	}
};


function PreIncrementExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreIncrementExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PreIncrementExpressionContext.prototype.constructor = PreIncrementExpressionContext;

ECMAScript2015PassParser.PreIncrementExpressionContext = PreIncrementExpressionContext;

PreIncrementExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PreIncrementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPreIncrementExpression(this);
	}
};

PreIncrementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPreIncrementExpression(this);
	}
};


function ObjectLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ObjectLiteralExpressionContext.prototype.constructor = ObjectLiteralExpressionContext;

ECMAScript2015PassParser.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;

ObjectLiteralExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};
ObjectLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterObjectLiteralExpression(this);
	}
};

ObjectLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitObjectLiteralExpression(this);
	}
};


function InExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
InExpressionContext.prototype.constructor = InExpressionContext;

ECMAScript2015PassParser.InExpressionContext = InExpressionContext;

InExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

InExpressionContext.prototype.In = function() {
    return this.getToken(ECMAScript2015PassParser.In, 0);
};
InExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterInExpression(this);
	}
};

InExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitInExpression(this);
	}
};


function LogicalOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalOrExpressionContext.prototype.constructor = LogicalOrExpressionContext;

ECMAScript2015PassParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

LogicalOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
LogicalOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterLogicalOrExpression(this);
	}
};

LogicalOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitLogicalOrExpression(this);
	}
};


function NotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

ECMAScript2015PassParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
NotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterNotExpression(this);
	}
};

NotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitNotExpression(this);
	}
};


function PreDecreaseExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreDecreaseExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PreDecreaseExpressionContext.prototype.constructor = PreDecreaseExpressionContext;

ECMAScript2015PassParser.PreDecreaseExpressionContext = PreDecreaseExpressionContext;

PreDecreaseExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PreDecreaseExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPreDecreaseExpression(this);
	}
};

PreDecreaseExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPreDecreaseExpression(this);
	}
};


function ArgumentsExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgumentsExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArgumentsExpressionContext.prototype.constructor = ArgumentsExpressionContext;

ECMAScript2015PassParser.ArgumentsExpressionContext = ArgumentsExpressionContext;

ArgumentsExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArgumentsExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
ArgumentsExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterArgumentsExpression(this);
	}
};

ArgumentsExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitArgumentsExpression(this);
	}
};


function ThisExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ThisExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ThisExpressionContext.prototype.constructor = ThisExpressionContext;

ECMAScript2015PassParser.ThisExpressionContext = ThisExpressionContext;

ThisExpressionContext.prototype.This = function() {
    return this.getToken(ECMAScript2015PassParser.This, 0);
};
ThisExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterThisExpression(this);
	}
};

ThisExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitThisExpression(this);
	}
};


function FunctionExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

ECMAScript2015PassParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.Function = function() {
    return this.getToken(ECMAScript2015PassParser.Function, 0);
};

FunctionExpressionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionExpressionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

FunctionExpressionContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitFunctionExpression(this);
	}
};


function UnaryMinusExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
UnaryMinusExpressionContext.prototype.constructor = UnaryMinusExpressionContext;

ECMAScript2015PassParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

UnaryMinusExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
UnaryMinusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitUnaryMinusExpression(this);
	}
};


function PostDecreaseExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostDecreaseExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PostDecreaseExpressionContext.prototype.constructor = PostDecreaseExpressionContext;

ECMAScript2015PassParser.PostDecreaseExpressionContext = PostDecreaseExpressionContext;

PostDecreaseExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PostDecreaseExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPostDecreaseExpression(this);
	}
};

PostDecreaseExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPostDecreaseExpression(this);
	}
};


function AssignmentExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

ECMAScript2015PassParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

AssignmentExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitAssignmentExpression(this);
	}
};


function TypeofExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeofExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
TypeofExpressionContext.prototype.constructor = TypeofExpressionContext;

ECMAScript2015PassParser.TypeofExpressionContext = TypeofExpressionContext;

TypeofExpressionContext.prototype.Typeof = function() {
    return this.getToken(ECMAScript2015PassParser.Typeof, 0);
};

TypeofExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
TypeofExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterTypeofExpression(this);
	}
};

TypeofExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitTypeofExpression(this);
	}
};


function InstanceofExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InstanceofExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
InstanceofExpressionContext.prototype.constructor = InstanceofExpressionContext;

ECMAScript2015PassParser.InstanceofExpressionContext = InstanceofExpressionContext;

InstanceofExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

InstanceofExpressionContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScript2015PassParser.Instanceof, 0);
};
InstanceofExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterInstanceofExpression(this);
	}
};

InstanceofExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitInstanceofExpression(this);
	}
};


function UnaryPlusExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPlusExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
UnaryPlusExpressionContext.prototype.constructor = UnaryPlusExpressionContext;

ECMAScript2015PassParser.UnaryPlusExpressionContext = UnaryPlusExpressionContext;

UnaryPlusExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
UnaryPlusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterUnaryPlusExpression(this);
	}
};

UnaryPlusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitUnaryPlusExpression(this);
	}
};


function DeleteExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeleteExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
DeleteExpressionContext.prototype.constructor = DeleteExpressionContext;

ECMAScript2015PassParser.DeleteExpressionContext = DeleteExpressionContext;

DeleteExpressionContext.prototype.Delete = function() {
    return this.getToken(ECMAScript2015PassParser.Delete, 0);
};

DeleteExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
DeleteExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterDeleteExpression(this);
	}
};

DeleteExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitDeleteExpression(this);
	}
};


function EqualityExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
EqualityExpressionContext.prototype.constructor = EqualityExpressionContext;

ECMAScript2015PassParser.EqualityExpressionContext = EqualityExpressionContext;

EqualityExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
EqualityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitEqualityExpression(this);
	}
};


function BitXOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitXOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitXOrExpressionContext.prototype.constructor = BitXOrExpressionContext;

ECMAScript2015PassParser.BitXOrExpressionContext = BitXOrExpressionContext;

BitXOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
BitXOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterBitXOrExpression(this);
	}
};

BitXOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitBitXOrExpression(this);
	}
};


function MultiplicativeExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

ECMAScript2015PassParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};


function BitShiftExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitShiftExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitShiftExpressionContext.prototype.constructor = BitShiftExpressionContext;

ECMAScript2015PassParser.BitShiftExpressionContext = BitShiftExpressionContext;

BitShiftExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
BitShiftExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterBitShiftExpression(this);
	}
};

BitShiftExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitBitShiftExpression(this);
	}
};


function ParenthesizedExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesizedExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ParenthesizedExpressionContext.prototype.constructor = ParenthesizedExpressionContext;

ECMAScript2015PassParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

ParenthesizedExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
ParenthesizedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterParenthesizedExpression(this);
	}
};

ParenthesizedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitParenthesizedExpression(this);
	}
};


function AdditiveExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

ECMAScript2015PassParser.AdditiveExpressionContext = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitAdditiveExpression(this);
	}
};


function RelationalExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
RelationalExpressionContext.prototype.constructor = RelationalExpressionContext;

ECMAScript2015PassParser.RelationalExpressionContext = RelationalExpressionContext;

RelationalExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
RelationalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitRelationalExpression(this);
	}
};


function PostIncrementExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostIncrementExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PostIncrementExpressionContext.prototype.constructor = PostIncrementExpressionContext;

ECMAScript2015PassParser.PostIncrementExpressionContext = PostIncrementExpressionContext;

PostIncrementExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PostIncrementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterPostIncrementExpression(this);
	}
};

PostIncrementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitPostIncrementExpression(this);
	}
};


function BitNotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitNotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitNotExpressionContext.prototype.constructor = BitNotExpressionContext;

ECMAScript2015PassParser.BitNotExpressionContext = BitNotExpressionContext;

BitNotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
BitNotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterBitNotExpression(this);
	}
};

BitNotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitBitNotExpression(this);
	}
};


function NewExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
NewExpressionContext.prototype.constructor = NewExpressionContext;

ECMAScript2015PassParser.NewExpressionContext = NewExpressionContext;

NewExpressionContext.prototype.New = function() {
    return this.getToken(ECMAScript2015PassParser.New, 0);
};

NewExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

NewExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
NewExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterNewExpression(this);
	}
};

NewExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitNewExpression(this);
	}
};


function LiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LiteralExpressionContext.prototype.constructor = LiteralExpressionContext;

ECMAScript2015PassParser.LiteralExpressionContext = LiteralExpressionContext;

LiteralExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterLiteralExpression(this);
	}
};

LiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitLiteralExpression(this);
	}
};


function ArrayLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrayLiteralExpressionContext.prototype.constructor = ArrayLiteralExpressionContext;

ECMAScript2015PassParser.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;

ArrayLiteralExpressionContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};
ArrayLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterArrayLiteralExpression(this);
	}
};

ArrayLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitArrayLiteralExpression(this);
	}
};


function MemberDotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberDotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberDotExpressionContext.prototype.constructor = MemberDotExpressionContext;

ECMAScript2015PassParser.MemberDotExpressionContext = MemberDotExpressionContext;

MemberDotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberDotExpressionContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};
MemberDotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterMemberDotExpression(this);
	}
};

MemberDotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitMemberDotExpression(this);
	}
};


function MemberIndexExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberIndexExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberIndexExpressionContext.prototype.constructor = MemberIndexExpressionContext;

ECMAScript2015PassParser.MemberIndexExpressionContext = MemberIndexExpressionContext;

MemberIndexExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberIndexExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
MemberIndexExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterMemberIndexExpression(this);
	}
};

MemberIndexExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitMemberIndexExpression(this);
	}
};


function IdentifierExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

ECMAScript2015PassParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitIdentifierExpression(this);
	}
};


function BitAndExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitAndExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitAndExpressionContext.prototype.constructor = BitAndExpressionContext;

ECMAScript2015PassParser.BitAndExpressionContext = BitAndExpressionContext;

BitAndExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
BitAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterBitAndExpression(this);
	}
};

BitAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitBitAndExpression(this);
	}
};


function BitOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitOrExpressionContext.prototype.constructor = BitOrExpressionContext;

ECMAScript2015PassParser.BitOrExpressionContext = BitOrExpressionContext;

BitOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};
BitOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterBitOrExpression(this);
	}
};

BitOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitBitOrExpression(this);
	}
};


function AssignmentOperatorExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentOperatorExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentOperatorExpressionContext.prototype.constructor = AssignmentOperatorExpressionContext;

ECMAScript2015PassParser.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;

AssignmentOperatorExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

AssignmentOperatorExpressionContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};

AssignmentOperatorExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
AssignmentOperatorExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterAssignmentOperatorExpression(this);
	}
};

AssignmentOperatorExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitAssignmentOperatorExpression(this);
	}
};


function VoidExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VoidExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
VoidExpressionContext.prototype.constructor = VoidExpressionContext;

ECMAScript2015PassParser.VoidExpressionContext = VoidExpressionContext;

VoidExpressionContext.prototype.Void = function() {
    return this.getToken(ECMAScript2015PassParser.Void, 0);
};

VoidExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
VoidExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterVoidExpression(this);
	}
};

VoidExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitVoidExpression(this);
	}
};



ECMAScript2015PassParser.prototype.singleExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SingleExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 86;
    this.enterRecursionRule(localctx, 86, ECMAScript2015PassParser.RULE_singleExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 512;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScript2015PassParser.Function:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 467;
            this.match(ECMAScript2015PassParser.Function);
            this.state = 469;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScript2015PassParser.Identifier) {
                this.state = 468;
                this.match(ECMAScript2015PassParser.Identifier);
            }

            this.state = 471;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 473;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScript2015PassParser.Identifier) {
                this.state = 472;
                this.formalParameterList();
            }

            this.state = 475;
            this.match(ECMAScript2015PassParser.CloseParen);
            this.state = 476;
            this.match(ECMAScript2015PassParser.OpenBrace);
            this.state = 477;
            this.functionBody();
            this.state = 478;
            this.match(ECMAScript2015PassParser.CloseBrace);
            break;
        case ECMAScript2015PassParser.New:
            localctx = new NewExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 480;
            this.match(ECMAScript2015PassParser.New);
            this.state = 481;
            this.singleExpression(0);
            this.state = 483;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
            if(la_===1) {
                this.state = 482;
                this.arguments();

            }
            break;
        case ECMAScript2015PassParser.Delete:
            localctx = new DeleteExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 485;
            this.match(ECMAScript2015PassParser.Delete);
            this.state = 486;
            this.singleExpression(30);
            break;
        case ECMAScript2015PassParser.Void:
            localctx = new VoidExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 487;
            this.match(ECMAScript2015PassParser.Void);
            this.state = 488;
            this.singleExpression(29);
            break;
        case ECMAScript2015PassParser.Typeof:
            localctx = new TypeofExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 489;
            this.match(ECMAScript2015PassParser.Typeof);
            this.state = 490;
            this.singleExpression(28);
            break;
        case ECMAScript2015PassParser.PlusPlus:
            localctx = new PreIncrementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 491;
            this.match(ECMAScript2015PassParser.PlusPlus);
            this.state = 492;
            this.singleExpression(27);
            break;
        case ECMAScript2015PassParser.MinusMinus:
            localctx = new PreDecreaseExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 493;
            this.match(ECMAScript2015PassParser.MinusMinus);
            this.state = 494;
            this.singleExpression(26);
            break;
        case ECMAScript2015PassParser.Plus:
            localctx = new UnaryPlusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 495;
            this.match(ECMAScript2015PassParser.Plus);
            this.state = 496;
            this.singleExpression(25);
            break;
        case ECMAScript2015PassParser.Minus:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 497;
            this.match(ECMAScript2015PassParser.Minus);
            this.state = 498;
            this.singleExpression(24);
            break;
        case ECMAScript2015PassParser.BitNot:
            localctx = new BitNotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 499;
            this.match(ECMAScript2015PassParser.BitNot);
            this.state = 500;
            this.singleExpression(23);
            break;
        case ECMAScript2015PassParser.Not:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 501;
            this.match(ECMAScript2015PassParser.Not);
            this.state = 502;
            this.singleExpression(22);
            break;
        case ECMAScript2015PassParser.This:
            localctx = new ThisExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 503;
            this.match(ECMAScript2015PassParser.This);
            break;
        case ECMAScript2015PassParser.Identifier:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 504;
            this.match(ECMAScript2015PassParser.Identifier);
            break;
        case ECMAScript2015PassParser.RegularExpressionLiteral:
        case ECMAScript2015PassParser.NullLiteral:
        case ECMAScript2015PassParser.BooleanLiteral:
        case ECMAScript2015PassParser.DecimalLiteral:
        case ECMAScript2015PassParser.HexIntegerLiteral:
        case ECMAScript2015PassParser.OctalIntegerLiteral:
        case ECMAScript2015PassParser.StringLiteral:
            localctx = new LiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 505;
            this.literal();
            break;
        case ECMAScript2015PassParser.OpenBracket:
            localctx = new ArrayLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 506;
            this.arrayLiteral();
            break;
        case ECMAScript2015PassParser.OpenBrace:
            localctx = new ObjectLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 507;
            this.objectLiteral();
            break;
        case ECMAScript2015PassParser.OpenParen:
            localctx = new ParenthesizedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 508;
            this.match(ECMAScript2015PassParser.OpenParen);
            this.state = 509;
            this.expressionSequence();
            this.state = 510;
            this.match(ECMAScript2015PassParser.CloseParen);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 581;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 579;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 514;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 515;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.Multiply) | (1 << ECMAScript2015PassParser.Divide) | (1 << ECMAScript2015PassParser.Modulus))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 516;
                    this.singleExpression(22);
                    break;

                case 2:
                    localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 517;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 518;
                    _la = this._input.LA(1);
                    if(!(_la===ECMAScript2015PassParser.Plus || _la===ECMAScript2015PassParser.Minus)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 519;
                    this.singleExpression(21);
                    break;

                case 3:
                    localctx = new BitShiftExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 520;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 521;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.RightShiftArithmetic) | (1 << ECMAScript2015PassParser.LeftShiftArithmetic) | (1 << ECMAScript2015PassParser.RightShiftLogical))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 522;
                    this.singleExpression(20);
                    break;

                case 4:
                    localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 523;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 524;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScript2015PassParser.LessThan) | (1 << ECMAScript2015PassParser.MoreThan) | (1 << ECMAScript2015PassParser.LessThanEquals) | (1 << ECMAScript2015PassParser.GreaterThanEquals))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 525;
                    this.singleExpression(19);
                    break;

                case 5:
                    localctx = new InstanceofExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 526;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 527;
                    this.match(ECMAScript2015PassParser.Instanceof);
                    this.state = 528;
                    this.singleExpression(18);
                    break;

                case 6:
                    localctx = new InExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 529;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 530;
                    this.match(ECMAScript2015PassParser.In);
                    this.state = 531;
                    this.singleExpression(17);
                    break;

                case 7:
                    localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 532;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 533;
                    _la = this._input.LA(1);
                    if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (ECMAScript2015PassParser.Equals - 31)) | (1 << (ECMAScript2015PassParser.NotEquals - 31)) | (1 << (ECMAScript2015PassParser.IdentityEquals - 31)) | (1 << (ECMAScript2015PassParser.IdentityNotEquals - 31)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 534;
                    this.singleExpression(16);
                    break;

                case 8:
                    localctx = new BitAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 535;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 536;
                    this.match(ECMAScript2015PassParser.BitAnd);
                    this.state = 537;
                    this.singleExpression(15);
                    break;

                case 9:
                    localctx = new BitXOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 538;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 539;
                    this.match(ECMAScript2015PassParser.BitXOr);
                    this.state = 540;
                    this.singleExpression(14);
                    break;

                case 10:
                    localctx = new BitOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 541;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 542;
                    this.match(ECMAScript2015PassParser.BitOr);
                    this.state = 543;
                    this.singleExpression(13);
                    break;

                case 11:
                    localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 544;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 545;
                    this.match(ECMAScript2015PassParser.And);
                    this.state = 546;
                    this.singleExpression(12);
                    break;

                case 12:
                    localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 547;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 548;
                    this.match(ECMAScript2015PassParser.Or);
                    this.state = 549;
                    this.singleExpression(11);
                    break;

                case 13:
                    localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 550;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 551;
                    this.match(ECMAScript2015PassParser.QuestionMark);
                    this.state = 552;
                    this.singleExpression(0);
                    this.state = 553;
                    this.match(ECMAScript2015PassParser.Colon);
                    this.state = 554;
                    this.singleExpression(10);
                    break;

                case 14:
                    localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 556;
                    if (!( this.precpred(this._ctx, 36))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
                    }
                    this.state = 557;
                    this.match(ECMAScript2015PassParser.OpenBracket);
                    this.state = 558;
                    this.expressionSequence();
                    this.state = 559;
                    this.match(ECMAScript2015PassParser.CloseBracket);
                    break;

                case 15:
                    localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 561;
                    if (!( this.precpred(this._ctx, 35))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                    }
                    this.state = 562;
                    this.match(ECMAScript2015PassParser.Dot);
                    this.state = 563;
                    this.identifierName();
                    break;

                case 16:
                    localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 564;
                    if (!( this.precpred(this._ctx, 34))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
                    }
                    this.state = 565;
                    this.arguments();
                    break;

                case 17:
                    localctx = new PostIncrementExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 566;
                    if (!( this.precpred(this._ctx, 32))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
                    }
                    this.state = 567;
                    if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                        throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
                    }
                    this.state = 568;
                    this.match(ECMAScript2015PassParser.PlusPlus);
                    break;

                case 18:
                    localctx = new PostDecreaseExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 569;
                    if (!( this.precpred(this._ctx, 31))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                    }
                    this.state = 570;
                    if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                        throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
                    }
                    this.state = 571;
                    this.match(ECMAScript2015PassParser.MinusMinus);
                    break;

                case 19:
                    localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 572;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 573;
                    this.match(ECMAScript2015PassParser.Assign);
                    this.state = 574;
                    this.expressionSequence();
                    break;

                case 20:
                    localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScript2015PassParser.RULE_singleExpression);
                    this.state = 575;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 576;
                    this.assignmentOperator();
                    this.state = 577;
                    this.expressionSequence();
                    break;

                } 
            }
            this.state = 583;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
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

function AssignmentOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;


AssignmentOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitAssignmentOperator(this);
	}
};




ECMAScript2015PassParser.AssignmentOperatorContext = AssignmentOperatorContext;

ECMAScript2015PassParser.prototype.assignmentOperator = function() {

    var localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, ECMAScript2015PassParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 584;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (ECMAScript2015PassParser.MultiplyAssign - 40)) | (1 << (ECMAScript2015PassParser.DivideAssign - 40)) | (1 << (ECMAScript2015PassParser.ModulusAssign - 40)) | (1 << (ECMAScript2015PassParser.PlusAssign - 40)) | (1 << (ECMAScript2015PassParser.MinusAssign - 40)) | (1 << (ECMAScript2015PassParser.LeftShiftArithmeticAssign - 40)) | (1 << (ECMAScript2015PassParser.RightShiftArithmeticAssign - 40)) | (1 << (ECMAScript2015PassParser.RightShiftLogicalAssign - 40)) | (1 << (ECMAScript2015PassParser.BitAndAssign - 40)) | (1 << (ECMAScript2015PassParser.BitXorAssign - 40)) | (1 << (ECMAScript2015PassParser.BitOrAssign - 40)))) !== 0))) {
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

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.NullLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.BooleanLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.StringLiteral, 0);
};

LiteralContext.prototype.RegularExpressionLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.RegularExpressionLiteral, 0);
};

LiteralContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitLiteral(this);
	}
};




ECMAScript2015PassParser.LiteralContext = LiteralContext;

ECMAScript2015PassParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, ECMAScript2015PassParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.state = 588;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScript2015PassParser.RegularExpressionLiteral:
        case ECMAScript2015PassParser.NullLiteral:
        case ECMAScript2015PassParser.BooleanLiteral:
        case ECMAScript2015PassParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 586;
            _la = this._input.LA(1);
            if(!(_la===ECMAScript2015PassParser.RegularExpressionLiteral || _la===ECMAScript2015PassParser.NullLiteral || _la===ECMAScript2015PassParser.BooleanLiteral || _la===ECMAScript2015PassParser.StringLiteral)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case ECMAScript2015PassParser.DecimalLiteral:
        case ECMAScript2015PassParser.HexIntegerLiteral:
        case ECMAScript2015PassParser.OctalIntegerLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 587;
            this.numericLiteral();
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

function NumericLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_numericLiteral;
    return this;
}

NumericLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;

NumericLiteralContext.prototype.DecimalLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.DecimalLiteral, 0);
};

NumericLiteralContext.prototype.HexIntegerLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.HexIntegerLiteral, 0);
};

NumericLiteralContext.prototype.OctalIntegerLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.OctalIntegerLiteral, 0);
};

NumericLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterNumericLiteral(this);
	}
};

NumericLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitNumericLiteral(this);
	}
};




ECMAScript2015PassParser.NumericLiteralContext = NumericLiteralContext;

ECMAScript2015PassParser.prototype.numericLiteral = function() {

    var localctx = new NumericLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, ECMAScript2015PassParser.RULE_numericLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 590;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (ECMAScript2015PassParser.DecimalLiteral - 53)) | (1 << (ECMAScript2015PassParser.HexIntegerLiteral - 53)) | (1 << (ECMAScript2015PassParser.OctalIntegerLiteral - 53)))) !== 0))) {
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

function IdentifierNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_identifierName;
    return this;
}

IdentifierNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierNameContext.prototype.constructor = IdentifierNameContext;

IdentifierNameContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

IdentifierNameContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

IdentifierNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterIdentifierName(this);
	}
};

IdentifierNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitIdentifierName(this);
	}
};




ECMAScript2015PassParser.IdentifierNameContext = IdentifierNameContext;

ECMAScript2015PassParser.prototype.identifierName = function() {

    var localctx = new IdentifierNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, ECMAScript2015PassParser.RULE_identifierName);
    try {
        this.state = 594;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScript2015PassParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 592;
            this.match(ECMAScript2015PassParser.Identifier);
            break;
        case ECMAScript2015PassParser.NullLiteral:
        case ECMAScript2015PassParser.BooleanLiteral:
        case ECMAScript2015PassParser.Break:
        case ECMAScript2015PassParser.Do:
        case ECMAScript2015PassParser.Instanceof:
        case ECMAScript2015PassParser.Typeof:
        case ECMAScript2015PassParser.Case:
        case ECMAScript2015PassParser.Else:
        case ECMAScript2015PassParser.New:
        case ECMAScript2015PassParser.Var:
        case ECMAScript2015PassParser.Catch:
        case ECMAScript2015PassParser.Finally:
        case ECMAScript2015PassParser.Return:
        case ECMAScript2015PassParser.Void:
        case ECMAScript2015PassParser.Continue:
        case ECMAScript2015PassParser.For:
        case ECMAScript2015PassParser.Switch:
        case ECMAScript2015PassParser.While:
        case ECMAScript2015PassParser.Debugger:
        case ECMAScript2015PassParser.Function:
        case ECMAScript2015PassParser.This:
        case ECMAScript2015PassParser.With:
        case ECMAScript2015PassParser.Default:
        case ECMAScript2015PassParser.If:
        case ECMAScript2015PassParser.Throw:
        case ECMAScript2015PassParser.Delete:
        case ECMAScript2015PassParser.In:
        case ECMAScript2015PassParser.Try:
        case ECMAScript2015PassParser.Class:
        case ECMAScript2015PassParser.Enum:
        case ECMAScript2015PassParser.Extends:
        case ECMAScript2015PassParser.Super:
        case ECMAScript2015PassParser.Const:
        case ECMAScript2015PassParser.Export:
        case ECMAScript2015PassParser.Import:
        case ECMAScript2015PassParser.Implements:
        case ECMAScript2015PassParser.Let:
        case ECMAScript2015PassParser.Private:
        case ECMAScript2015PassParser.Public:
        case ECMAScript2015PassParser.Interface:
        case ECMAScript2015PassParser.Package:
        case ECMAScript2015PassParser.Protected:
        case ECMAScript2015PassParser.Static:
        case ECMAScript2015PassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 593;
            this.reservedWord();
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

function ReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_reservedWord;
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
    return this.getToken(ECMAScript2015PassParser.NullLiteral, 0);
};

ReservedWordContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScript2015PassParser.BooleanLiteral, 0);
};

ReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterReservedWord(this);
	}
};

ReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitReservedWord(this);
	}
};




ECMAScript2015PassParser.ReservedWordContext = ReservedWordContext;

ECMAScript2015PassParser.prototype.reservedWord = function() {

    var localctx = new ReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, ECMAScript2015PassParser.RULE_reservedWord);
    var _la = 0; // Token type
    try {
        this.state = 599;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScript2015PassParser.Break:
        case ECMAScript2015PassParser.Do:
        case ECMAScript2015PassParser.Instanceof:
        case ECMAScript2015PassParser.Typeof:
        case ECMAScript2015PassParser.Case:
        case ECMAScript2015PassParser.Else:
        case ECMAScript2015PassParser.New:
        case ECMAScript2015PassParser.Var:
        case ECMAScript2015PassParser.Catch:
        case ECMAScript2015PassParser.Finally:
        case ECMAScript2015PassParser.Return:
        case ECMAScript2015PassParser.Void:
        case ECMAScript2015PassParser.Continue:
        case ECMAScript2015PassParser.For:
        case ECMAScript2015PassParser.Switch:
        case ECMAScript2015PassParser.While:
        case ECMAScript2015PassParser.Debugger:
        case ECMAScript2015PassParser.Function:
        case ECMAScript2015PassParser.This:
        case ECMAScript2015PassParser.With:
        case ECMAScript2015PassParser.Default:
        case ECMAScript2015PassParser.If:
        case ECMAScript2015PassParser.Throw:
        case ECMAScript2015PassParser.Delete:
        case ECMAScript2015PassParser.In:
        case ECMAScript2015PassParser.Try:
            this.enterOuterAlt(localctx, 1);
            this.state = 596;
            this.keyword();
            break;
        case ECMAScript2015PassParser.Class:
        case ECMAScript2015PassParser.Enum:
        case ECMAScript2015PassParser.Extends:
        case ECMAScript2015PassParser.Super:
        case ECMAScript2015PassParser.Const:
        case ECMAScript2015PassParser.Export:
        case ECMAScript2015PassParser.Import:
        case ECMAScript2015PassParser.Implements:
        case ECMAScript2015PassParser.Let:
        case ECMAScript2015PassParser.Private:
        case ECMAScript2015PassParser.Public:
        case ECMAScript2015PassParser.Interface:
        case ECMAScript2015PassParser.Package:
        case ECMAScript2015PassParser.Protected:
        case ECMAScript2015PassParser.Static:
        case ECMAScript2015PassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 597;
            this.futureReservedWord();
            break;
        case ECMAScript2015PassParser.NullLiteral:
        case ECMAScript2015PassParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 598;
            _la = this._input.LA(1);
            if(!(_la===ECMAScript2015PassParser.NullLiteral || _la===ECMAScript2015PassParser.BooleanLiteral)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
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
    this.ruleIndex = ECMAScript2015PassParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.Break = function() {
    return this.getToken(ECMAScript2015PassParser.Break, 0);
};

KeywordContext.prototype.Do = function() {
    return this.getToken(ECMAScript2015PassParser.Do, 0);
};

KeywordContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScript2015PassParser.Instanceof, 0);
};

KeywordContext.prototype.Typeof = function() {
    return this.getToken(ECMAScript2015PassParser.Typeof, 0);
};

KeywordContext.prototype.Case = function() {
    return this.getToken(ECMAScript2015PassParser.Case, 0);
};

KeywordContext.prototype.Else = function() {
    return this.getToken(ECMAScript2015PassParser.Else, 0);
};

KeywordContext.prototype.New = function() {
    return this.getToken(ECMAScript2015PassParser.New, 0);
};

KeywordContext.prototype.Var = function() {
    return this.getToken(ECMAScript2015PassParser.Var, 0);
};

KeywordContext.prototype.Catch = function() {
    return this.getToken(ECMAScript2015PassParser.Catch, 0);
};

KeywordContext.prototype.Finally = function() {
    return this.getToken(ECMAScript2015PassParser.Finally, 0);
};

KeywordContext.prototype.Return = function() {
    return this.getToken(ECMAScript2015PassParser.Return, 0);
};

KeywordContext.prototype.Void = function() {
    return this.getToken(ECMAScript2015PassParser.Void, 0);
};

KeywordContext.prototype.Continue = function() {
    return this.getToken(ECMAScript2015PassParser.Continue, 0);
};

KeywordContext.prototype.For = function() {
    return this.getToken(ECMAScript2015PassParser.For, 0);
};

KeywordContext.prototype.Switch = function() {
    return this.getToken(ECMAScript2015PassParser.Switch, 0);
};

KeywordContext.prototype.While = function() {
    return this.getToken(ECMAScript2015PassParser.While, 0);
};

KeywordContext.prototype.Debugger = function() {
    return this.getToken(ECMAScript2015PassParser.Debugger, 0);
};

KeywordContext.prototype.Function = function() {
    return this.getToken(ECMAScript2015PassParser.Function, 0);
};

KeywordContext.prototype.This = function() {
    return this.getToken(ECMAScript2015PassParser.This, 0);
};

KeywordContext.prototype.With = function() {
    return this.getToken(ECMAScript2015PassParser.With, 0);
};

KeywordContext.prototype.Default = function() {
    return this.getToken(ECMAScript2015PassParser.Default, 0);
};

KeywordContext.prototype.If = function() {
    return this.getToken(ECMAScript2015PassParser.If, 0);
};

KeywordContext.prototype.Throw = function() {
    return this.getToken(ECMAScript2015PassParser.Throw, 0);
};

KeywordContext.prototype.Delete = function() {
    return this.getToken(ECMAScript2015PassParser.Delete, 0);
};

KeywordContext.prototype.In = function() {
    return this.getToken(ECMAScript2015PassParser.In, 0);
};

KeywordContext.prototype.Try = function() {
    return this.getToken(ECMAScript2015PassParser.Try, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitKeyword(this);
	}
};




ECMAScript2015PassParser.KeywordContext = KeywordContext;

ECMAScript2015PassParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, ECMAScript2015PassParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 601;
        _la = this._input.LA(1);
        if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScript2015PassParser.Break - 56)) | (1 << (ECMAScript2015PassParser.Do - 56)) | (1 << (ECMAScript2015PassParser.Instanceof - 56)) | (1 << (ECMAScript2015PassParser.Typeof - 56)) | (1 << (ECMAScript2015PassParser.Case - 56)) | (1 << (ECMAScript2015PassParser.Else - 56)) | (1 << (ECMAScript2015PassParser.New - 56)) | (1 << (ECMAScript2015PassParser.Var - 56)) | (1 << (ECMAScript2015PassParser.Catch - 56)) | (1 << (ECMAScript2015PassParser.Finally - 56)) | (1 << (ECMAScript2015PassParser.Return - 56)) | (1 << (ECMAScript2015PassParser.Void - 56)) | (1 << (ECMAScript2015PassParser.Continue - 56)) | (1 << (ECMAScript2015PassParser.For - 56)) | (1 << (ECMAScript2015PassParser.Switch - 56)) | (1 << (ECMAScript2015PassParser.While - 56)) | (1 << (ECMAScript2015PassParser.Debugger - 56)) | (1 << (ECMAScript2015PassParser.Function - 56)) | (1 << (ECMAScript2015PassParser.This - 56)) | (1 << (ECMAScript2015PassParser.With - 56)) | (1 << (ECMAScript2015PassParser.Default - 56)) | (1 << (ECMAScript2015PassParser.If - 56)) | (1 << (ECMAScript2015PassParser.Throw - 56)) | (1 << (ECMAScript2015PassParser.Delete - 56)) | (1 << (ECMAScript2015PassParser.In - 56)) | (1 << (ECMAScript2015PassParser.Try - 56)))) !== 0))) {
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
    this.ruleIndex = ECMAScript2015PassParser.RULE_futureReservedWord;
    return this;
}

FutureReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FutureReservedWordContext.prototype.constructor = FutureReservedWordContext;

FutureReservedWordContext.prototype.Class = function() {
    return this.getToken(ECMAScript2015PassParser.Class, 0);
};

FutureReservedWordContext.prototype.Enum = function() {
    return this.getToken(ECMAScript2015PassParser.Enum, 0);
};

FutureReservedWordContext.prototype.Extends = function() {
    return this.getToken(ECMAScript2015PassParser.Extends, 0);
};

FutureReservedWordContext.prototype.Super = function() {
    return this.getToken(ECMAScript2015PassParser.Super, 0);
};

FutureReservedWordContext.prototype.Const = function() {
    return this.getToken(ECMAScript2015PassParser.Const, 0);
};

FutureReservedWordContext.prototype.Export = function() {
    return this.getToken(ECMAScript2015PassParser.Export, 0);
};

FutureReservedWordContext.prototype.Import = function() {
    return this.getToken(ECMAScript2015PassParser.Import, 0);
};

FutureReservedWordContext.prototype.Implements = function() {
    return this.getToken(ECMAScript2015PassParser.Implements, 0);
};

FutureReservedWordContext.prototype.Let = function() {
    return this.getToken(ECMAScript2015PassParser.Let, 0);
};

FutureReservedWordContext.prototype.Private = function() {
    return this.getToken(ECMAScript2015PassParser.Private, 0);
};

FutureReservedWordContext.prototype.Public = function() {
    return this.getToken(ECMAScript2015PassParser.Public, 0);
};

FutureReservedWordContext.prototype.Interface = function() {
    return this.getToken(ECMAScript2015PassParser.Interface, 0);
};

FutureReservedWordContext.prototype.Package = function() {
    return this.getToken(ECMAScript2015PassParser.Package, 0);
};

FutureReservedWordContext.prototype.Protected = function() {
    return this.getToken(ECMAScript2015PassParser.Protected, 0);
};

FutureReservedWordContext.prototype.Static = function() {
    return this.getToken(ECMAScript2015PassParser.Static, 0);
};

FutureReservedWordContext.prototype.Yield = function() {
    return this.getToken(ECMAScript2015PassParser.Yield, 0);
};

FutureReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterFutureReservedWord(this);
	}
};

FutureReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitFutureReservedWord(this);
	}
};




ECMAScript2015PassParser.FutureReservedWordContext = FutureReservedWordContext;

ECMAScript2015PassParser.prototype.futureReservedWord = function() {

    var localctx = new FutureReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, ECMAScript2015PassParser.RULE_futureReservedWord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 603;
        _la = this._input.LA(1);
        if(!(((((_la - 82)) & ~0x1f) == 0 && ((1 << (_la - 82)) & ((1 << (ECMAScript2015PassParser.Class - 82)) | (1 << (ECMAScript2015PassParser.Enum - 82)) | (1 << (ECMAScript2015PassParser.Extends - 82)) | (1 << (ECMAScript2015PassParser.Super - 82)) | (1 << (ECMAScript2015PassParser.Const - 82)) | (1 << (ECMAScript2015PassParser.Export - 82)) | (1 << (ECMAScript2015PassParser.Import - 82)) | (1 << (ECMAScript2015PassParser.Implements - 82)) | (1 << (ECMAScript2015PassParser.Let - 82)) | (1 << (ECMAScript2015PassParser.Private - 82)) | (1 << (ECMAScript2015PassParser.Public - 82)) | (1 << (ECMAScript2015PassParser.Interface - 82)) | (1 << (ECMAScript2015PassParser.Package - 82)) | (1 << (ECMAScript2015PassParser.Protected - 82)) | (1 << (ECMAScript2015PassParser.Static - 82)) | (1 << (ECMAScript2015PassParser.Yield - 82)))) !== 0))) {
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

function GetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_getter;
    return this;
}

GetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetterContext.prototype.constructor = GetterContext;

GetterContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

GetterContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

GetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterGetter(this);
	}
};

GetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitGetter(this);
	}
};




ECMAScript2015PassParser.GetterContext = GetterContext;

ECMAScript2015PassParser.prototype.getter = function() {

    var localctx = new GetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, ECMAScript2015PassParser.RULE_getter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 605;
        if (!( this._input.LT(1).text.startsWith("get"))) {
            throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).text.startsWith(\"get\")");
        }
        this.state = 606;
        this.match(ECMAScript2015PassParser.Identifier);
        this.state = 607;
        this.propertyName();
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

function SetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_setter;
    return this;
}

SetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetterContext.prototype.constructor = SetterContext;

SetterContext.prototype.Identifier = function() {
    return this.getToken(ECMAScript2015PassParser.Identifier, 0);
};

SetterContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

SetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterSetter(this);
	}
};

SetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitSetter(this);
	}
};




ECMAScript2015PassParser.SetterContext = SetterContext;

ECMAScript2015PassParser.prototype.setter = function() {

    var localctx = new SetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, ECMAScript2015PassParser.RULE_setter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 609;
        if (!( this._input.LT(1).text.startsWith("set"))) {
            throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).text.startsWith(\"set\")");
        }
        this.state = 610;
        this.match(ECMAScript2015PassParser.Identifier);
        this.state = 611;
        this.propertyName();
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
    this.ruleIndex = ECMAScript2015PassParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScript2015PassParser.SemiColon, 0);
};

EosContext.prototype.EOF = function() {
    return this.getToken(ECMAScript2015PassParser.EOF, 0);
};

EosContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterEos(this);
	}
};

EosContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitEos(this);
	}
};




ECMAScript2015PassParser.EosContext = EosContext;

ECMAScript2015PassParser.prototype.eos = function() {

    var localctx = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, ECMAScript2015PassParser.RULE_eos);
    try {
        this.state = 617;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 613;
            this.match(ECMAScript2015PassParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 614;
            this.match(ECMAScript2015PassParser.EOF);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 615;
            if (!( this.lineTerminatorAhead())) {
                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 616;
            if (!( this._input.LT(1).type == ECMAScriptPassParser.CloseBrace)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type == ECMAScriptPassParser.CloseBrace");
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

function EofContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScript2015PassParser.RULE_eof;
    return this;
}

EofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EofContext.prototype.constructor = EofContext;

EofContext.prototype.EOF = function() {
    return this.getToken(ECMAScript2015PassParser.EOF, 0);
};

EofContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.enterEof(this);
	}
};

EofContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScript2015PassListener ) {
        listener.exitEof(this);
	}
};




ECMAScript2015PassParser.EofContext = EofContext;

ECMAScript2015PassParser.prototype.eof = function() {

    var localctx = new EofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, ECMAScript2015PassParser.RULE_eof);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 619;
        this.match(ECMAScript2015PassParser.EOF);
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


ECMAScript2015PassParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 14:
			return this.continueStatement_sempred(localctx, predIndex);
	case 15:
			return this.breakStatement_sempred(localctx, predIndex);
	case 16:
			return this.returnStatement_sempred(localctx, predIndex);
	case 24:
			return this.throwStatement_sempred(localctx, predIndex);
	case 43:
			return this.singleExpression_sempred(localctx, predIndex);
	case 51:
			return this.getter_sempred(localctx, predIndex);
	case 52:
			return this.setter_sempred(localctx, predIndex);
	case 53:
			return this.eos_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ECMAScript2015PassParser.prototype.continueStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScript2015PassParser.prototype.breakStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScript2015PassParser.prototype.returnStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScript2015PassParser.prototype.throwStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScript2015PassParser.prototype.singleExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 21);
		case 5:
			return this.precpred(this._ctx, 20);
		case 6:
			return this.precpred(this._ctx, 19);
		case 7:
			return this.precpred(this._ctx, 18);
		case 8:
			return this.precpred(this._ctx, 17);
		case 9:
			return this.precpred(this._ctx, 16);
		case 10:
			return this.precpred(this._ctx, 15);
		case 11:
			return this.precpred(this._ctx, 14);
		case 12:
			return this.precpred(this._ctx, 13);
		case 13:
			return this.precpred(this._ctx, 12);
		case 14:
			return this.precpred(this._ctx, 11);
		case 15:
			return this.precpred(this._ctx, 10);
		case 16:
			return this.precpred(this._ctx, 9);
		case 17:
			return this.precpred(this._ctx, 36);
		case 18:
			return this.precpred(this._ctx, 35);
		case 19:
			return this.precpred(this._ctx, 34);
		case 20:
			return this.precpred(this._ctx, 32);
		case 21:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		case 22:
			return this.precpred(this._ctx, 31);
		case 23:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		case 24:
			return this.precpred(this._ctx, 8);
		case 25:
			return this.precpred(this._ctx, 7);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScript2015PassParser.prototype.getter_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 26:
			return this._input.LT(1).text.startsWith("get");
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScript2015PassParser.prototype.setter_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 27:
			return this._input.LT(1).text.startsWith("set");
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScript2015PassParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 28:
			return this.lineTerminatorAhead();
		case 29:
			return this._input.LT(1).type == ECMAScriptPassParser.CloseBrace;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ECMAScript2015PassParser = ECMAScript2015PassParser;
