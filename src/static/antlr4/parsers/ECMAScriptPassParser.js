// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptPassListener = require('./ECMAScriptPassListener').ECMAScriptPassListener;
var grammarFileName = "ECMAScriptPass.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003p\u024a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004F\tF\u0004G\tG\u0004",
    "H\tH\u0003\u0002\u0005\u0002\u0092\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u009a\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u009f\n\u0004\f\u0004",
    "\u000e\u0004\u00a2\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u00a8\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u00ad\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00b9\n\b\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0005\n\u00c0\n\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u00c6\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0005\f\u00cd\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00d8\n\f\u0003\f\u0003\f\u0005",
    "\f\u00dc\n\f\u0003\r\u0003\r\u0005\r\u00e0\n\r\u0003\r\u0003\r\u0005",
    "\r\u00e4\n\r\u0003\r\u0005\r\u00e7\n\r\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u00ec\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00f2\n\r\u0003",
    "\r\u0007\r\u00f5\n\r\f\r\u000e\r\u00f8\u000b\r\u0003\u000e\u0006\u000e",
    "\u00fb\n\u000e\r\u000e\u000e\u000e\u00fc\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u0107\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u010b\n\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u0110\n\u0011\f\u0011",
    "\u000e\u0011\u0113\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u011b\n\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0128\n",
    "\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u012c\n\u0016\u0003\u0017",
    "\u0005\u0017\u012f\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u0134\n\u0017\u0003\u0017\u0007\u0017\u0137\n\u0017\f\u0017\u000e",
    "\u0017\u013a\u000b\u0017\u0003\u0018\u0003\u0018\u0005\u0018\u013e\n",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0143\n\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u014b\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0155",
    "\n\u001a\f\u001a\u000e\u001a\u0158\u000b\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0005\u001d\u0169\n\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0005\u001e\u0174\n\u001e\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0005 \u017c\n \u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0006\"\u0183\n\"\r\"\u000e\"\u0184\u0003#\u0003#\u0003#\u0006#\u018a",
    "\n#\r#\u000e#\u018b\u0003$\u0003$\u0005$\u0190\n$\u0003%\u0003%\u0005",
    "%\u0194\n%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003",
    ")\u0005)\u019e\n)\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003",
    "+\u0003,\u0003,\u0003-\u0003-\u0003-\u0007-\u01ad\n-\f-\u000e-\u01b0",
    "\u000b-\u0003.\u0003.\u0003.\u0007.\u01b5\n.\f.\u000e.\u01b8\u000b.",
    "\u0003/\u0003/\u0005/\u01bc\n/\u00030\u00030\u00050\u01c0\n0\u00031",
    "\u00031\u00051\u01c4\n1\u00032\u00032\u00033\u00033\u00033\u00033\u0005",
    "3\u01cc\n3\u00033\u00033\u00053\u01d0\n3\u00033\u00033\u00033\u0003",
    "4\u00034\u00034\u00035\u00035\u00036\u00036\u00037\u00037\u00037\u0003",
    "8\u00038\u00038\u00078\u01e2\n8\f8\u000e8\u01e5\u000b8\u00039\u0003",
    "9\u00039\u00079\u01ea\n9\f9\u000e9\u01ed\u000b9\u0003:\u0003:\u0005",
    ":\u01f1\n:\u0003;\u0003;\u0005;\u01f5\n;\u0003<\u0003<\u0003<\u0003",
    "<\u0003<\u0003<\u0003<\u0003<\u0003<\u0003=\u0003=\u0005=\u0202\n=\u0003",
    "=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003>\u0003>\u0003?\u0003",
    "?\u0003?\u0005?\u0210\n?\u0005?\u0212\n?\u0003@\u0003@\u0003@\u0007",
    "@\u0217\n@\f@\u000e@\u021a\u000b@\u0003A\u0003A\u0003B\u0003B\u0003",
    "C\u0005C\u0221\nC\u0003D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003",
    "D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003",
    "D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003D\u0005D\u023c\nD\u0003",
    "E\u0003E\u0003F\u0003F\u0003F\u0003F\u0005F\u0244\nF\u0003G\u0003G\u0003",
    "H\u0003H\u0003H\u0002\u0004\u00182I\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLN",
    "PRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c",
    "\u008e\u0002\u0007\u0005\u0002\u0005\u0005=>gg\u0005\u0002\u0005\u0005",
    "ggkk\u0004\u0002,6::\u0004\u0002DDff\u0003\u0002?`\u0002\u0250\u0002",
    "\u0091\u0003\u0002\u0002\u0002\u0004\u0099\u0003\u0002\u0002\u0002\u0006",
    "\u009b\u0003\u0002\u0002\u0002\b\u00a7\u0003\u0002\u0002\u0002\n\u00ac",
    "\u0003\u0002\u0002\u0002\f\u00ae\u0003\u0002\u0002\u0002\u000e\u00b8",
    "\u0003\u0002\u0002\u0002\u0010\u00ba\u0003\u0002\u0002\u0002\u0012\u00c5",
    "\u0003\u0002\u0002\u0002\u0014\u00c7\u0003\u0002\u0002\u0002\u0016\u00db",
    "\u0003\u0002\u0002\u0002\u0018\u00e6\u0003\u0002\u0002\u0002\u001a\u00fa",
    "\u0003\u0002\u0002\u0002\u001c\u00fe\u0003\u0002\u0002\u0002\u001e\u010a",
    "\u0003\u0002\u0002\u0002 \u010c\u0003\u0002\u0002\u0002\"\u011a\u0003",
    "\u0002\u0002\u0002$\u011c\u0003\u0002\u0002\u0002&\u011e\u0003\u0002",
    "\u0002\u0002(\u0120\u0003\u0002\u0002\u0002*\u012b\u0003\u0002\u0002",
    "\u0002,\u012e\u0003\u0002\u0002\u0002.\u013d\u0003\u0002\u0002\u0002",
    "0\u0142\u0003\u0002\u0002\u00022\u014a\u0003\u0002\u0002\u00024\u0159",
    "\u0003\u0002\u0002\u00026\u015c\u0003\u0002\u0002\u00028\u0168\u0003",
    "\u0002\u0002\u0002:\u0173\u0003\u0002\u0002\u0002<\u0175\u0003\u0002",
    "\u0002\u0002>\u017b\u0003\u0002\u0002\u0002@\u017d\u0003\u0002\u0002",
    "\u0002B\u0182\u0003\u0002\u0002\u0002D\u0189\u0003\u0002\u0002\u0002",
    "F\u018f\u0003\u0002\u0002\u0002H\u0193\u0003\u0002\u0002\u0002J\u0195",
    "\u0003\u0002\u0002\u0002L\u0197\u0003\u0002\u0002\u0002N\u0199\u0003",
    "\u0002\u0002\u0002P\u019b\u0003\u0002\u0002\u0002R\u019f\u0003\u0002",
    "\u0002\u0002T\u01a3\u0003\u0002\u0002\u0002V\u01a7\u0003\u0002\u0002",
    "\u0002X\u01a9\u0003\u0002\u0002\u0002Z\u01b1\u0003\u0002\u0002\u0002",
    "\\\u01b9\u0003\u0002\u0002\u0002^\u01bd\u0003\u0002\u0002\u0002`\u01c3",
    "\u0003\u0002\u0002\u0002b\u01c5\u0003\u0002\u0002\u0002d\u01c7\u0003",
    "\u0002\u0002\u0002f\u01d4\u0003\u0002\u0002\u0002h\u01d7\u0003\u0002",
    "\u0002\u0002j\u01d9\u0003\u0002\u0002\u0002l\u01db\u0003\u0002\u0002",
    "\u0002n\u01de\u0003\u0002\u0002\u0002p\u01e6\u0003\u0002\u0002\u0002",
    "r\u01ee\u0003\u0002\u0002\u0002t\u01f2\u0003\u0002\u0002\u0002v\u01f6",
    "\u0003\u0002\u0002\u0002x\u01ff\u0003\u0002\u0002\u0002z\u020a\u0003",
    "\u0002\u0002\u0002|\u0211\u0003\u0002\u0002\u0002~\u0213\u0003\u0002",
    "\u0002\u0002\u0080\u021b\u0003\u0002\u0002\u0002\u0082\u021d\u0003\u0002",
    "\u0002\u0002\u0084\u0220\u0003\u0002\u0002\u0002\u0086\u023b\u0003\u0002",
    "\u0002\u0002\u0088\u023d\u0003\u0002\u0002\u0002\u008a\u0243\u0003\u0002",
    "\u0002\u0002\u008c\u0245\u0003\u0002\u0002\u0002\u008e\u0247\u0003\u0002",
    "\u0002\u0002\u0090\u0092\u0005B\"\u0002\u0091\u0090\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0007\u0002\u0002\u0003\u0094\u0003\u0003\u0002\u0002",
    "\u0002\u0095\u009a\u0007\u000e\u0002\u0002\u0096\u009a\u0006\u0003\u0002",
    "\u0002\u0097\u009a\u0006\u0003\u0003\u0002\u0098\u009a\u0006\u0003\u0004",
    "\u0002\u0099\u0095\u0003\u0002\u0002\u0002\u0099\u0096\u0003\u0002\u0002",
    "\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099\u0098\u0003\u0002\u0002",
    "\u0002\u009a\u0005\u0003\u0002\u0002\u0002\u009b\u00a0\u0005:\u001e",
    "\u0002\u009c\u009d\u0007\u000f\u0002\u0002\u009d\u009f\u0005:\u001e",
    "\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002",
    "\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002",
    "\u0002\u00a1\u0007\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002",
    "\u0002\u00a3\u00a8\u0005\f\u0007\u0002\u00a4\u00a8\u0007`\u0002\u0002",
    "\u00a5\u00a6\u0007?\u0002\u0002\u00a6\u00a8\u0007\u001a\u0002\u0002",
    "\u00a7\u00a3\u0003\u0002\u0002\u0002\u00a7\u00a4\u0003\u0002\u0002\u0002",
    "\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\t\u0003\u0002\u0002\u0002",
    "\u00a9\u00ad\u0005\f\u0007\u0002\u00aa\u00ad\u0007`\u0002\u0002\u00ab",
    "\u00ad\u0007?\u0002\u0002\u00ac\u00a9\u0003\u0002\u0002\u0002\u00ac",
    "\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad",
    "\u000b\u0003\u0002\u0002\u0002\u00ae\u00af\u0007k\u0002\u0002\u00af",
    "\r\u0003\u0002\u0002\u0002\u00b0\u00b9\u0007X\u0002\u0002\u00b1\u00b9",
    "\u0005\b\u0005\u0002\u00b2\u00b9\u0005\u0010\t\u0002\u00b3\u00b9\u0005",
    "\u0016\f\u0002\u00b4\u00b9\u0005\u001e\u0010\u0002\u00b5\u00b9\u0005",
    "x=\u0002\u00b6\u00b9\u0007\u0006\u0002\u0002\u00b7\u00b9\u0005\u0012",
    "\n\u0002\u00b8\u00b0\u0003\u0002\u0002\u0002\u00b8\u00b1\u0003\u0002",
    "\u0002\u0002\u00b8\u00b2\u0003\u0002\u0002\u0002\u00b8\u00b3\u0003\u0002",
    "\u0002\u0002\u00b8\u00b4\u0003\u0002\u0002\u0002\u00b8\u00b5\u0003\u0002",
    "\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b7\u0003\u0002",
    "\u0002\u0002\u00b9\u000f\u0003\u0002\u0002\u0002\u00ba\u00bb\t\u0002",
    "\u0002\u0002\u00bb\u0011\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\b",
    "\u0002\u0002\u00bd\u00bf\u0005\u0006\u0004\u0002\u00be\u00c0\u0007\u000f",
    "\u0002\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007\t",
    "\u0002\u0002\u00c2\u00c6\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\b",
    "\u0002\u0002\u00c4\u00c6\u0007\t\u0002\u0002\u00c5\u00bc\u0003\u0002",
    "\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6\u0013\u0003\u0002",
    "\u0002\u0002\u00c7\u00c8\u00052\u001a\u0002\u00c8\u00c9\u0005*\u0016",
    "\u0002\u00c9\u0015\u0003\u0002\u0002\u0002\u00ca\u00cc\u0007\n\u0002",
    "\u0002\u00cb\u00cd\u0005\u001a\u000e\u0002\u00cc\u00cb\u0003\u0002\u0002",
    "\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002",
    "\u0002\u00ce\u00dc\u0007\u000b\u0002\u0002\u00cf\u00d0\u0007\n\u0002",
    "\u0002\u00d0\u00d1\u0005\u0018\r\u0002\u00d1\u00d2\u0007\u000b\u0002",
    "\u0002\u00d2\u00dc\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007\n\u0002",
    "\u0002\u00d4\u00d5\u0005\u0018\r\u0002\u00d5\u00d7\u0007\u000f\u0002",
    "\u0002\u00d6\u00d8\u0005\u001a\u000e\u0002\u00d7\u00d6\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002",
    "\u0002\u00d9\u00da\u0007\u000b\u0002\u0002\u00da\u00dc\u0003\u0002\u0002",
    "\u0002\u00db\u00ca\u0003\u0002\u0002\u0002\u00db\u00cf\u0003\u0002\u0002",
    "\u0002\u00db\u00d3\u0003\u0002\u0002\u0002\u00dc\u0017\u0003\u0002\u0002",
    "\u0002\u00dd\u00df\b\r\u0001\u0002\u00de\u00e0\u0005\u001a\u000e\u0002",
    "\u00df\u00de\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002",
    "\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e7\u0005:\u001e\u0002",
    "\u00e2\u00e4\u0005\u001a\u000e\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002",
    "\u00e5\u00e7\u0005\u001c\u000f\u0002\u00e6\u00dd\u0003\u0002\u0002\u0002",
    "\u00e6\u00e3\u0003\u0002\u0002\u0002\u00e7\u00f6\u0003\u0002\u0002\u0002",
    "\u00e8\u00e9\f\u0004\u0002\u0002\u00e9\u00eb\u0007\u000f\u0002\u0002",
    "\u00ea\u00ec\u0005\u001a\u000e\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002",
    "\u00ed\u00f5\u0005:\u001e\u0002\u00ee\u00ef\f\u0003\u0002\u0002\u00ef",
    "\u00f1\u0007\u000f\u0002\u0002\u00f0\u00f2\u0005\u001a\u000e\u0002\u00f1",
    "\u00f0\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f5\u0005\u001c\u000f\u0002\u00f4",
    "\u00e8\u0003\u0002\u0002\u0002\u00f4\u00ee\u0003\u0002\u0002\u0002\u00f5",
    "\u00f8\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0003\u0002\u0002\u0002\u00f7\u0019\u0003\u0002\u0002\u0002\u00f8",
    "\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fb\u0007\u000f\u0002\u0002\u00fa",
    "\u00f9\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc",
    "\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd",
    "\u001b\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007\r\u0002\u0002\u00ff",
    "\u0100\u0005:\u001e\u0002\u0100\u001d\u0003\u0002\u0002\u0002\u0101",
    "\u0102\u0007\u0007\u0002\u0002\u0102\u010b\u0007<\u0002\u0002\u0103",
    "\u0104\u0007\u0007\u0002\u0002\u0104\u0106\u0005 \u0011\u0002\u0105",
    "\u0107\u0007\u000f\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0106",
    "\u0107\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108",
    "\u0109\u0007<\u0002\u0002\u0109\u010b\u0003\u0002\u0002\u0002\u010a",
    "\u0101\u0003\u0002\u0002\u0002\u010a\u0103\u0003\u0002\u0002\u0002\u010b",
    "\u001f\u0003\u0002\u0002\u0002\u010c\u0111\u0005\"\u0012\u0002\u010d",
    "\u010e\u0007\u000f\u0002\u0002\u010e\u0110\u0005\"\u0012\u0002\u010f",
    "\u010d\u0003\u0002\u0002\u0002\u0110\u0113\u0003\u0002\u0002\u0002\u0111",
    "\u010f\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112",
    "!\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0114",
    "\u011b\u0005\b\u0005\u0002\u0115\u0116\u0005$\u0013\u0002\u0116\u0117",
    "\u0007*\u0002\u0002\u0117\u0118\u0005:\u001e\u0002\u0118\u011b\u0003",
    "\u0002\u0002\u0002\u0119\u011b\u0005\u0086D\u0002\u011a\u0114\u0003",
    "\u0002\u0002\u0002\u011a\u0115\u0003\u0002\u0002\u0002\u011a\u0119\u0003",
    "\u0002\u0002\u0002\u011b#\u0003\u0002\u0002\u0002\u011c\u011d\u0005",
    "&\u0014\u0002\u011d%\u0003\u0002\u0002\u0002\u011e\u011f\t\u0003\u0002",
    "\u0002\u011f\'\u0003\u0002\u0002\u0002\u0120\u0121\u0005\u0014\u000b",
    "\u0002\u0121)\u0003\u0002\u0002\u0002\u0122\u0123\u0007\b\u0002\u0002",
    "\u0123\u012c\u0007\t\u0002\u0002\u0124\u0125\u0007\b\u0002\u0002\u0125",
    "\u0127\u0005,\u0017\u0002\u0126\u0128\u0007\u000f\u0002\u0002\u0127",
    "\u0126\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128",
    "\u0129\u0003\u0002\u0002\u0002\u0129\u012a\u0007\t\u0002\u0002\u012a",
    "\u012c\u0003\u0002\u0002\u0002\u012b\u0122\u0003\u0002\u0002\u0002\u012b",
    "\u0124\u0003\u0002\u0002\u0002\u012c+\u0003\u0002\u0002\u0002\u012d",
    "\u012f\u0007\r\u0002\u0002\u012e\u012d\u0003\u0002\u0002\u0002\u012e",
    "\u012f\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130",
    "\u0138\u0005:\u001e\u0002\u0131\u0133\u0007\u000f\u0002\u0002\u0132",
    "\u0134\u0007\r\u0002\u0002\u0133\u0132\u0003\u0002\u0002\u0002\u0133",
    "\u0134\u0003\u0002\u0002\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135",
    "\u0137\u0005:\u001e\u0002\u0136\u0131\u0003\u0002\u0002\u0002\u0137",
    "\u013a\u0003\u0002\u0002\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0138",
    "\u0139\u0003\u0002\u0002\u0002\u0139-\u0003\u0002\u0002\u0002\u013a",
    "\u0138\u0003\u0002\u0002\u0002\u013b\u013e\u0005(\u0015\u0002\u013c",
    "\u013e\u00050\u0019\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013d",
    "\u013c\u0003\u0002\u0002\u0002\u013e/\u0003\u0002\u0002\u0002\u013f",
    "\u0143\u00052\u001a\u0002\u0140\u0141\u0007T\u0002\u0002\u0141\u0143",
    "\u00050\u0019\u0002\u0142\u013f\u0003\u0002\u0002\u0002\u0142\u0140",
    "\u0003\u0002\u0002\u0002\u01431\u0003\u0002\u0002\u0002\u0144\u0145",
    "\b\u001a\u0001\u0002\u0145\u014b\u0005\u000e\b\u0002\u0146\u0147\u0007",
    "T\u0002\u0002\u0147\u0148\u00052\u001a\u0002\u0148\u0149\u0005*\u0016",
    "\u0002\u0149\u014b\u0003\u0002\u0002\u0002\u014a\u0144\u0003\u0002\u0002",
    "\u0002\u014a\u0146\u0003\u0002\u0002\u0002\u014b\u0156\u0003\u0002\u0002",
    "\u0002\u014c\u014d\f\u0005\u0002\u0002\u014d\u014e\u0007\n\u0002\u0002",
    "\u014e\u014f\u0005\u0006\u0004\u0002\u014f\u0150\u0007\u000b\u0002\u0002",
    "\u0150\u0155\u0003\u0002\u0002\u0002\u0151\u0152\f\u0004\u0002\u0002",
    "\u0152\u0153\u0007\f\u0002\u0002\u0153\u0155\u0007k\u0002\u0002\u0154",
    "\u014c\u0003\u0002\u0002\u0002\u0154\u0151\u0003\u0002\u0002\u0002\u0155",
    "\u0158\u0003\u0002\u0002\u0002\u0156\u0154\u0003\u0002\u0002\u0002\u0156",
    "\u0157\u0003\u0002\u0002\u0002\u01573\u0003\u0002\u0002\u0002\u0158",
    "\u0156\u0003\u0002\u0002\u0002\u0159\u015a\u0007+\u0002\u0002\u015a",
    "\u015b\u00058\u001d\u0002\u015b5\u0003\u0002\u0002\u0002\u015c\u015d",
    "\u0007+\u0002\u0002\u015d\u015e\u0005:\u001e\u0002\u015e7\u0003\u0002",
    "\u0002\u0002\u015f\u0160\u0005.\u0018\u0002\u0160\u0161\u0007+\u0002",
    "\u0002\u0161\u0162\u00058\u001d\u0002\u0162\u0169\u0003\u0002\u0002",
    "\u0002\u0163\u0164\u0005.\u0018\u0002\u0164\u0165\u0005<\u001f\u0002",
    "\u0165\u0166\u00058\u001d\u0002\u0166\u0169\u0003\u0002\u0002\u0002",
    "\u0167\u0169\u0005.\u0018\u0002\u0168\u015f\u0003\u0002\u0002\u0002",
    "\u0168\u0163\u0003\u0002\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002",
    "\u01699\u0003\u0002\u0002\u0002\u016a\u016b\u0005.\u0018\u0002\u016b",
    "\u016c\u0007+\u0002\u0002\u016c\u016d\u0005:\u001e\u0002\u016d\u0174",
    "\u0003\u0002\u0002\u0002\u016e\u016f\u0005.\u0018\u0002\u016f\u0170",
    "\u0005<\u001f\u0002\u0170\u0171\u0005:\u001e\u0002\u0171\u0174\u0003",
    "\u0002\u0002\u0002\u0172\u0174\u0005.\u0018\u0002\u0173\u016a\u0003",
    "\u0002\u0002\u0002\u0173\u016e\u0003\u0002\u0002\u0002\u0173\u0172\u0003",
    "\u0002\u0002\u0002\u0174;\u0003\u0002\u0002\u0002\u0175\u0176\t\u0004",
    "\u0002\u0002\u0176=\u0003\u0002\u0002\u0002\u0177\u017c\u0005l7\u0002",
    "\u0178\u017c\u0005J&\u0002\u0179\u017c\u0005L\'\u0002\u017a\u017c\u0005",
    "j6\u0002\u017b\u0177\u0003\u0002\u0002\u0002\u017b\u0178\u0003\u0002",
    "\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017b\u017a\u0003\u0002",
    "\u0002\u0002\u017c?\u0003\u0002\u0002\u0002\u017d\u017e\u0005L\'\u0002",
    "\u017eA\u0003\u0002\u0002\u0002\u017f\u0180\u0005F$\u0002\u0180\u0181",
    "\u0005\u0004\u0003\u0002\u0181\u0183\u0003\u0002\u0002\u0002\u0182\u017f",
    "\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0182",
    "\u0003\u0002\u0002\u0002\u0184\u0185\u0003\u0002\u0002\u0002\u0185C",
    "\u0003\u0002\u0002\u0002\u0186\u0187\u0005H%\u0002\u0187\u0188\u0005",
    "\u0004\u0003\u0002\u0188\u018a\u0003\u0002\u0002\u0002\u0189\u0186\u0003",
    "\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018b\u0189\u0003",
    "\u0002\u0002\u0002\u018b\u018c\u0003\u0002\u0002\u0002\u018cE\u0003",
    "\u0002\u0002\u0002\u018d\u0190\u0005> \u0002\u018e\u0190\u0005`1\u0002",
    "\u018f\u018d\u0003\u0002\u0002\u0002\u018f\u018e\u0003\u0002\u0002\u0002",
    "\u0190G\u0003\u0002\u0002\u0002\u0191\u0194\u0005@!\u0002\u0192\u0194",
    "\u0005`1\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0193\u0192\u0003",
    "\u0002\u0002\u0002\u0194I\u0003\u0002\u0002\u0002\u0195\u0196\u0007",
    "\u000e\u0002\u0002\u0196K\u0003\u0002\u0002\u0002\u0197\u0198\u0005",
    "\u0006\u0004\u0002\u0198M\u0003\u0002\u0002\u0002\u0199\u019a\u0005",
    "P)\u0002\u019aO\u0003\u0002\u0002\u0002\u019b\u019d\u0005\n\u0006\u0002",
    "\u019c\u019e\u00056\u001c\u0002\u019d\u019c\u0003\u0002\u0002\u0002",
    "\u019d\u019e\u0003\u0002\u0002\u0002\u019eQ\u0003\u0002\u0002\u0002",
    "\u019f\u01a0\u0005V,\u0002\u01a0\u01a1\u0005X-\u0002\u01a1\u01a2\u0007",
    "\u000e\u0002\u0002\u01a2S\u0003\u0002\u0002\u0002\u01a3\u01a4\u0005",
    "V,\u0002\u01a4\u01a5\u0005Z.\u0002\u01a5\u01a6\u0007\u000e\u0002\u0002",
    "\u01a6U\u0003\u0002\u0002\u0002\u01a7\u01a8\t\u0005\u0002\u0002\u01a8",
    "W\u0003\u0002\u0002\u0002\u01a9\u01ae\u0005\\/\u0002\u01aa\u01ab\u0007",
    "\u000f\u0002\u0002\u01ab\u01ad\u0005\\/\u0002\u01ac\u01aa\u0003\u0002",
    "\u0002\u0002\u01ad\u01b0\u0003\u0002\u0002\u0002\u01ae\u01ac\u0003\u0002",
    "\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01afY\u0003\u0002",
    "\u0002\u0002\u01b0\u01ae\u0003\u0002\u0002\u0002\u01b1\u01b6\u0005^",
    "0\u0002\u01b2\u01b3\u0007\u000f\u0002\u0002\u01b3\u01b5\u0005^0\u0002",
    "\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b5\u01b8\u0003\u0002\u0002\u0002",
    "\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003\u0002\u0002\u0002",
    "\u01b7[\u0003\u0002\u0002\u0002\u01b8\u01b6\u0003\u0002\u0002\u0002",
    "\u01b9\u01bb\u0005\n\u0006\u0002\u01ba\u01bc\u00054\u001b\u0002\u01bb",
    "\u01ba\u0003\u0002\u0002\u0002\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc",
    "]\u0003\u0002\u0002\u0002\u01bd\u01bf\u0005\n\u0006\u0002\u01be\u01c0",
    "\u00056\u001c\u0002\u01bf\u01be\u0003\u0002\u0002\u0002\u01bf\u01c0",
    "\u0003\u0002\u0002\u0002\u01c0_\u0003\u0002\u0002\u0002\u01c1\u01c4",
    "\u0005b2\u0002\u01c2\u01c4\u0005T+\u0002\u01c3\u01c1\u0003\u0002\u0002",
    "\u0002\u01c3\u01c2\u0003\u0002\u0002\u0002\u01c4a\u0003\u0002\u0002",
    "\u0002\u01c5\u01c6\u0005v<\u0002\u01c6c\u0003\u0002\u0002\u0002\u01c7",
    "\u01c8\u0007N\u0002\u0002\u01c8\u01c9\u0007\b\u0002\u0002\u01c9\u01cb",
    "\u0005R*\u0002\u01ca\u01cc\u0005\u0006\u0004\u0002\u01cb\u01ca\u0003",
    "\u0002\u0002\u0002\u01cb\u01cc\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003",
    "\u0002\u0002\u0002\u01cd\u01cf\u0007\u000e\u0002\u0002\u01ce\u01d0\u0005",
    "\u0006\u0004\u0002\u01cf\u01ce\u0003\u0002\u0002\u0002\u01cf\u01d0\u0003",
    "\u0002\u0002\u0002\u01d0\u01d1\u0003\u0002\u0002\u0002\u01d1\u01d2\u0007",
    "\t\u0002\u0002\u01d2\u01d3\u0005> \u0002\u01d3e\u0003\u0002\u0002\u0002",
    "\u01d4\u01d5\u0005V,\u0002\u01d5\u01d6\u0005h5\u0002\u01d6g\u0003\u0002",
    "\u0002\u0002\u01d7\u01d8\u0005\n\u0006\u0002\u01d8i\u0003\u0002\u0002",
    "\u0002\u01d9\u01da\u0005d3\u0002\u01dak\u0003\u0002\u0002\u0002\u01db",
    "\u01dc\u0007\\\u0002\u0002\u01dc\u01dd\u0005p9\u0002\u01ddm\u0003\u0002",
    "\u0002\u0002\u01de\u01e3\u0005r:\u0002\u01df\u01e0\u0007\u000f\u0002",
    "\u0002\u01e0\u01e2\u0005r:\u0002\u01e1\u01df\u0003\u0002\u0002\u0002",
    "\u01e2\u01e5\u0003\u0002\u0002\u0002\u01e3\u01e1\u0003\u0002\u0002\u0002",
    "\u01e3\u01e4\u0003\u0002\u0002\u0002\u01e4o\u0003\u0002\u0002\u0002",
    "\u01e5\u01e3\u0003\u0002\u0002\u0002\u01e6\u01eb\u0005t;\u0002\u01e7",
    "\u01e8\u0007\u000f\u0002\u0002\u01e8\u01ea\u0005t;\u0002\u01e9\u01e7",
    "\u0003\u0002\u0002\u0002\u01ea\u01ed\u0003\u0002\u0002\u0002\u01eb\u01e9",
    "\u0003\u0002\u0002\u0002\u01eb\u01ec\u0003\u0002\u0002\u0002\u01ecq",
    "\u0003\u0002\u0002\u0002\u01ed\u01eb\u0003\u0002\u0002\u0002\u01ee\u01f0",
    "\u0005\n\u0006\u0002\u01ef\u01f1\u00054\u001b\u0002\u01f0\u01ef\u0003",
    "\u0002\u0002\u0002\u01f0\u01f1\u0003\u0002\u0002\u0002\u01f1s\u0003",
    "\u0002\u0002\u0002\u01f2\u01f4\u0005\n\u0006\u0002\u01f3\u01f5\u0005",
    "6\u001c\u0002\u01f4\u01f3\u0003\u0002\u0002\u0002\u01f4\u01f5\u0003",
    "\u0002\u0002\u0002\u01f5u\u0003\u0002\u0002\u0002\u01f6\u01f7\u0007",
    "O\u0002\u0002\u01f7\u01f8\u0005\n\u0006\u0002\u01f8\u01f9\u0007\b\u0002",
    "\u0002\u01f9\u01fa\u0005|?\u0002\u01fa\u01fb\u0007\t\u0002\u0002\u01fb",
    "\u01fc\u0007\u0007\u0002\u0002\u01fc\u01fd\u0005\u0082B\u0002\u01fd",
    "\u01fe\u0007<\u0002\u0002\u01few\u0003\u0002\u0002\u0002\u01ff\u0201",
    "\u0007O\u0002\u0002\u0200\u0202\u0005\n\u0006\u0002\u0201\u0200\u0003",
    "\u0002\u0002\u0002\u0201\u0202\u0003\u0002\u0002\u0002\u0202\u0203\u0003",
    "\u0002\u0002\u0002\u0203\u0204\u0007\b\u0002\u0002\u0204\u0205\u0005",
    "|?\u0002\u0205\u0206\u0007\t\u0002\u0002\u0206\u0207\u0007\u0007\u0002",
    "\u0002\u0207\u0208\u0005\u0082B\u0002\u0208\u0209\u0007<\u0002\u0002",
    "\u0209y\u0003\u0002\u0002\u0002\u020a\u020b\u0005|?\u0002\u020b{\u0003",
    "\u0002\u0002\u0002\u020c\u0212\u0003\u0002\u0002\u0002\u020d\u020f\u0005",
    "~@\u0002\u020e\u0210\u0007\u000f\u0002\u0002\u020f\u020e\u0003\u0002",
    "\u0002\u0002\u020f\u0210\u0003\u0002\u0002\u0002\u0210\u0212\u0003\u0002",
    "\u0002\u0002\u0211\u020c\u0003\u0002\u0002\u0002\u0211\u020d\u0003\u0002",
    "\u0002\u0002\u0212}\u0003\u0002\u0002\u0002\u0213\u0218\u0005\u0080",
    "A\u0002\u0214\u0215\u0007\u000f\u0002\u0002\u0215\u0217\u0005\u0080",
    "A\u0002\u0216\u0214\u0003\u0002\u0002\u0002\u0217\u021a\u0003\u0002",
    "\u0002\u0002\u0218\u0216\u0003\u0002\u0002\u0002\u0218\u0219\u0003\u0002",
    "\u0002\u0002\u0219\u007f\u0003\u0002\u0002\u0002\u021a\u0218\u0003\u0002",
    "\u0002\u0002\u021b\u021c\u0005N(\u0002\u021c\u0081\u0003\u0002\u0002",
    "\u0002\u021d\u021e\u0005\u0084C\u0002\u021e\u0083\u0003\u0002\u0002",
    "\u0002\u021f\u0221\u0005D#\u0002\u0220\u021f\u0003\u0002\u0002\u0002",
    "\u0220\u0221\u0003\u0002\u0002\u0002\u0221\u0085\u0003\u0002\u0002\u0002",
    "\u0222\u0223\u0005$\u0013\u0002\u0223\u0224\u0007\b\u0002\u0002\u0224",
    "\u0225\u0005z>\u0002\u0225\u0226\u0007\t\u0002\u0002\u0226\u0227\u0007",
    "\u0007\u0002\u0002\u0227\u0228\u0005\u0082B\u0002\u0228\u0229\u0007",
    "<\u0002\u0002\u0229\u023c\u0003\u0002\u0002\u0002\u022a\u022b\u0007",
    "\u0003\u0002\u0002\u022b\u022c\u0005$\u0013\u0002\u022c\u022d\u0007",
    "\b\u0002\u0002\u022d\u022e\u0007\t\u0002\u0002\u022e\u022f\u0007\u0007",
    "\u0002\u0002\u022f\u0230\u0005\u0082B\u0002\u0230\u0231\u0007<\u0002",
    "\u0002\u0231\u023c\u0003\u0002\u0002\u0002\u0232\u0233\u0007\u0004\u0002",
    "\u0002\u0233\u0234\u0005$\u0013\u0002\u0234\u0235\u0007\b\u0002\u0002",
    "\u0235\u0236\u0005\u0088E\u0002\u0236\u0237\u0007\t\u0002\u0002\u0237",
    "\u0238\u0007\u0007\u0002\u0002\u0238\u0239\u0005\u0082B\u0002\u0239",
    "\u023a\u0007<\u0002\u0002\u023a\u023c\u0003\u0002\u0002\u0002\u023b",
    "\u0222\u0003\u0002\u0002\u0002\u023b\u022a\u0003\u0002\u0002\u0002\u023b",
    "\u0232\u0003\u0002\u0002\u0002\u023c\u0087\u0003\u0002\u0002\u0002\u023d",
    "\u023e\u0005\u0080A\u0002\u023e\u0089\u0003\u0002\u0002\u0002\u023f",
    "\u0244\u0005\u008cG\u0002\u0240\u0244\u0005\u008eH\u0002\u0241\u0244",
    "\u0007=\u0002\u0002\u0242\u0244\u0007>\u0002\u0002\u0243\u023f\u0003",
    "\u0002\u0002\u0002\u0243\u0240\u0003\u0002\u0002\u0002\u0243\u0241\u0003",
    "\u0002\u0002\u0002\u0243\u0242\u0003\u0002\u0002\u0002\u0244\u008b\u0003",
    "\u0002\u0002\u0002\u0245\u0246\t\u0006\u0002\u0002\u0246\u008d\u0003",
    "\u0002\u0002\u0002\u0247\u0248\u0007a\u0002\u0002\u0248\u008f\u0003",
    "\u0002\u0002\u0002=\u0091\u0099\u00a0\u00a7\u00ac\u00b8\u00bf\u00c5",
    "\u00cc\u00d7\u00db\u00df\u00e3\u00e6\u00eb\u00f1\u00f4\u00f6\u00fc\u0106",
    "\u010a\u0111\u011a\u0127\u012b\u012e\u0133\u0138\u013d\u0142\u014a\u0154",
    "\u0156\u0168\u0173\u017b\u0184\u018b\u018f\u0193\u019d\u01ae\u01b6\u01bb",
    "\u01bf\u01c3\u01cb\u01cf\u01e3\u01eb\u01f0\u01f4\u0201\u020f\u0211\u0218",
    "\u0220\u023b\u0243"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'get'", "'set'", null, null, "'{'", "'('", "')'", 
                     "'['", "']'", "'.'", "'...'", "';'", "','", "'<'", 
                     "'>'", "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", 
                     "'+'", "'-'", "'*'", "'%'", "'**'", "'++'", "'--'", 
                     "'<<'", "'>>'", "'>>>'", "'&'", "'|'", "'^'", "'!'", 
                     "'~'", "'&&'", "'||'", "'?'", "':'", "'='", "'+='", 
                     "'-='", "'*='", "'%='", "'**='", "'<<='", "'>>='", 
                     "'>>>='", "'&='", "'|='", "'^='", "'=>'", null, "'/'", 
                     "'/='", null, "'}'", null, null, "'await'", "'break'", 
                     "'case'", "'catch'", "'class'", "'const'", "'continue'", 
                     "'debugger'", "'default'", "'delete'", "'do'", "'else'", 
                     "'export'", "'extends'", "'finally'", "'for'", "'function'", 
                     "'if'", "'import'", "'in'", "'instanceof'", "'new'", 
                     "'return'", "'super'", "'switch'", "'this'", "'throw'", 
                     "'try'", "'typeof'", "'var'", "'void'", "'while'", 
                     "'with'", "'yield'", "'enum'", "'null'", "'true'", 
                     "'false'", "'async'", "'let'" ];

var symbolicNames = [ null, null, null, "NumericLiteral", "RegularExpressionLiteral", 
                      "OpenBrace", "OpenParen", "CloseParen", "OpenBracket", 
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
                      "CloseBrace", "NullLiteral", "BooleanLiteral", "Await", 
                      "Break", "Case", "Catch", "Class", "Const", "Continue", 
                      "Debugger", "Default", "Delete", "Do", "Else", "Export", 
                      "Extends", "Finally", "For", "Function", "If", "Import", 
                      "In", "Instanceof", "New", "Return", "Super", "Switch", 
                      "This", "Throw", "Try", "Typeof", "Var", "Void", "While", 
                      "With", "Yield", "Enum", "Null", "True", "False", 
                      "Async", "Let", "StringLiteral", "BinaryIntegerLiteral", 
                      "OctalIntegerLiteral", "HexIntegerLiteral", "IdentifierName", 
                      "MultiLineComment", "SingleLineComment", "WhiteSpace", 
                      "LineTerminator", "LineTerminatorSequence" ];

var ruleNames =  [ "file", "eos", "expression_In", "identifierReference", 
                   "bindingIdentifier", "identifier", "primaryExpression", 
                   "literal", "coverParenthesizedExpressionAndArrowParameterList", 
                   "coverCallExpressionAndAsyncArrowHead", "arrayLiteral", 
                   "elementList", "elision", "spreadElement", "objectLiteral", 
                   "propertyDefinitionList", "propertyDefinition", "propertyName", 
                   "literalPropertyName", "callExpression", "arguments", 
                   "argumentList", "leftHandSideExpression", "newExpression", 
                   "memberExpression", "initializer", "initializer_In", 
                   "assignmentExpression", "assignmentExpression_In", "assignmentOperator", 
                   "statement", "statement_Return", "statementList", "statementList_Return", 
                   "statementListItem", "statementListItem_Return", "emptyStatement", 
                   "expressionStatement", "bindingElement", "singleNameBinding", 
                   "lexicalDeclaration", "lexicalDeclaration_In", "letOrConst", 
                   "bindingList", "bindingList_In", "lexicalBinding", "lexicalBinding_In", 
                   "declaration", "hoistableDeclaration", "iterationStatement", 
                   "forDeclaration", "forBinding", "breakableStatement", 
                   "variableStatement", "variableDeclarationList", "variableDeclarationList_In", 
                   "variableDeclaration", "variableDeclaration_In", "functionDeclaration", 
                   "functionExpression", "uniqueFormalParameters", "formalParameters", 
                   "formalParameterList", "formalParameter", "functionBody", 
                   "functionStatementList", "methodDefinition", "propertySetParameterList", 
                   "reservedWord", "keyword", "futureReservedWord" ];

function ECMAScriptPassParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	/**
	 * Returns true if, on the current index of the parser's
	 * token stream, a token exists on the HIDDEN channel which
	 * either is a line terminator, or is a multi line comment that
	 * contains a line terminator.
	 * @returns {Boolean}
	 */
	ECMAScriptPassParser.prototype.lineTerminatorAhead = function() {
	// ECMAScript® 2018 Language Specification - Section 5.1.2
	// Simple white space and single-line comments are discarded and do not appear
	// in the stream of input elements for the syntactic grammar. A MultiLineComment
	// (that is, a comment of the form /*…*/ regardless of whether it spans more
	// than one line) is likewise simply discarded if it contains no line
	// terminator; but if a MultiLineComment contains one or more line terminators,
	// then it is replaced by a single line terminator, which becomes part of the
	// stream of input elements for the syntactic grammar.
	  var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken
	    .call(this).tokenIndex - 1;
	  var ahead = this._input.get(possibleIndexEosToken);

	  if (ahead.channel !== antlr4.Lexer.HIDDEN)
	    return false;

	  var text = ahead.text;
	  var type = ahead.type;

	  return (
	    type === ECMAScriptPassParser.MultiLineComment &&
	    text.indexOf('\r') !== -1 ||
	    text.indexOf('\n') !== -1 ||
	    text.indexOf('\u2028') !== -1 ||
	    text.indexOf('\u2029') !== -1
	  ) || (type === ECMAScriptPassParser.LineTerminator);
	};

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
ECMAScriptPassParser.T__0 = 1;
ECMAScriptPassParser.T__1 = 2;
ECMAScriptPassParser.NumericLiteral = 3;
ECMAScriptPassParser.RegularExpressionLiteral = 4;
ECMAScriptPassParser.OpenBrace = 5;
ECMAScriptPassParser.OpenParen = 6;
ECMAScriptPassParser.CloseParen = 7;
ECMAScriptPassParser.OpenBracket = 8;
ECMAScriptPassParser.CloseBracket = 9;
ECMAScriptPassParser.Dot = 10;
ECMAScriptPassParser.Spread = 11;
ECMAScriptPassParser.SemiColon = 12;
ECMAScriptPassParser.Comma = 13;
ECMAScriptPassParser.LessThan = 14;
ECMAScriptPassParser.GreaterThan = 15;
ECMAScriptPassParser.LessThanEquals = 16;
ECMAScriptPassParser.GreaterThanEquals = 17;
ECMAScriptPassParser.Equals = 18;
ECMAScriptPassParser.NotEquals = 19;
ECMAScriptPassParser.IdentityEquals = 20;
ECMAScriptPassParser.IdentityNotEquals = 21;
ECMAScriptPassParser.Plus = 22;
ECMAScriptPassParser.Minus = 23;
ECMAScriptPassParser.Multiply = 24;
ECMAScriptPassParser.Modulo = 25;
ECMAScriptPassParser.Power = 26;
ECMAScriptPassParser.PlusPlus = 27;
ECMAScriptPassParser.MinusMinus = 28;
ECMAScriptPassParser.LeftShiftArithmetic = 29;
ECMAScriptPassParser.RightShiftArithmetic = 30;
ECMAScriptPassParser.RightShiftLogical = 31;
ECMAScriptPassParser.BitAnd = 32;
ECMAScriptPassParser.BitOr = 33;
ECMAScriptPassParser.BitXOr = 34;
ECMAScriptPassParser.Not = 35;
ECMAScriptPassParser.BitNot = 36;
ECMAScriptPassParser.And = 37;
ECMAScriptPassParser.Or = 38;
ECMAScriptPassParser.QuestionMark = 39;
ECMAScriptPassParser.Colon = 40;
ECMAScriptPassParser.Assign = 41;
ECMAScriptPassParser.PlusAssign = 42;
ECMAScriptPassParser.MinusAssign = 43;
ECMAScriptPassParser.MultiplyAssign = 44;
ECMAScriptPassParser.ModuloAssign = 45;
ECMAScriptPassParser.PowerAssign = 46;
ECMAScriptPassParser.LeftShiftArithmeticAssign = 47;
ECMAScriptPassParser.RightShiftArithmeticAssign = 48;
ECMAScriptPassParser.RightShiftLogicalAssign = 49;
ECMAScriptPassParser.BitAndAssign = 50;
ECMAScriptPassParser.BitOrAssign = 51;
ECMAScriptPassParser.BitXorAssign = 52;
ECMAScriptPassParser.FatArrow = 53;
ECMAScriptPassParser.Punctuator = 54;
ECMAScriptPassParser.Divide = 55;
ECMAScriptPassParser.DivideAssign = 56;
ECMAScriptPassParser.DivPunctuator = 57;
ECMAScriptPassParser.CloseBrace = 58;
ECMAScriptPassParser.NullLiteral = 59;
ECMAScriptPassParser.BooleanLiteral = 60;
ECMAScriptPassParser.Await = 61;
ECMAScriptPassParser.Break = 62;
ECMAScriptPassParser.Case = 63;
ECMAScriptPassParser.Catch = 64;
ECMAScriptPassParser.Class = 65;
ECMAScriptPassParser.Const = 66;
ECMAScriptPassParser.Continue = 67;
ECMAScriptPassParser.Debugger = 68;
ECMAScriptPassParser.Default = 69;
ECMAScriptPassParser.Delete = 70;
ECMAScriptPassParser.Do = 71;
ECMAScriptPassParser.Else = 72;
ECMAScriptPassParser.Export = 73;
ECMAScriptPassParser.Extends = 74;
ECMAScriptPassParser.Finally = 75;
ECMAScriptPassParser.For = 76;
ECMAScriptPassParser.Function = 77;
ECMAScriptPassParser.If = 78;
ECMAScriptPassParser.Import = 79;
ECMAScriptPassParser.In = 80;
ECMAScriptPassParser.Instanceof = 81;
ECMAScriptPassParser.New = 82;
ECMAScriptPassParser.Return = 83;
ECMAScriptPassParser.Super = 84;
ECMAScriptPassParser.Switch = 85;
ECMAScriptPassParser.This = 86;
ECMAScriptPassParser.Throw = 87;
ECMAScriptPassParser.Try = 88;
ECMAScriptPassParser.Typeof = 89;
ECMAScriptPassParser.Var = 90;
ECMAScriptPassParser.Void = 91;
ECMAScriptPassParser.While = 92;
ECMAScriptPassParser.With = 93;
ECMAScriptPassParser.Yield = 94;
ECMAScriptPassParser.Enum = 95;
ECMAScriptPassParser.Null = 96;
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
ECMAScriptPassParser.RULE_eos = 1;
ECMAScriptPassParser.RULE_expression_In = 2;
ECMAScriptPassParser.RULE_identifierReference = 3;
ECMAScriptPassParser.RULE_bindingIdentifier = 4;
ECMAScriptPassParser.RULE_identifier = 5;
ECMAScriptPassParser.RULE_primaryExpression = 6;
ECMAScriptPassParser.RULE_literal = 7;
ECMAScriptPassParser.RULE_coverParenthesizedExpressionAndArrowParameterList = 8;
ECMAScriptPassParser.RULE_coverCallExpressionAndAsyncArrowHead = 9;
ECMAScriptPassParser.RULE_arrayLiteral = 10;
ECMAScriptPassParser.RULE_elementList = 11;
ECMAScriptPassParser.RULE_elision = 12;
ECMAScriptPassParser.RULE_spreadElement = 13;
ECMAScriptPassParser.RULE_objectLiteral = 14;
ECMAScriptPassParser.RULE_propertyDefinitionList = 15;
ECMAScriptPassParser.RULE_propertyDefinition = 16;
ECMAScriptPassParser.RULE_propertyName = 17;
ECMAScriptPassParser.RULE_literalPropertyName = 18;
ECMAScriptPassParser.RULE_callExpression = 19;
ECMAScriptPassParser.RULE_arguments = 20;
ECMAScriptPassParser.RULE_argumentList = 21;
ECMAScriptPassParser.RULE_leftHandSideExpression = 22;
ECMAScriptPassParser.RULE_newExpression = 23;
ECMAScriptPassParser.RULE_memberExpression = 24;
ECMAScriptPassParser.RULE_initializer = 25;
ECMAScriptPassParser.RULE_initializer_In = 26;
ECMAScriptPassParser.RULE_assignmentExpression = 27;
ECMAScriptPassParser.RULE_assignmentExpression_In = 28;
ECMAScriptPassParser.RULE_assignmentOperator = 29;
ECMAScriptPassParser.RULE_statement = 30;
ECMAScriptPassParser.RULE_statement_Return = 31;
ECMAScriptPassParser.RULE_statementList = 32;
ECMAScriptPassParser.RULE_statementList_Return = 33;
ECMAScriptPassParser.RULE_statementListItem = 34;
ECMAScriptPassParser.RULE_statementListItem_Return = 35;
ECMAScriptPassParser.RULE_emptyStatement = 36;
ECMAScriptPassParser.RULE_expressionStatement = 37;
ECMAScriptPassParser.RULE_bindingElement = 38;
ECMAScriptPassParser.RULE_singleNameBinding = 39;
ECMAScriptPassParser.RULE_lexicalDeclaration = 40;
ECMAScriptPassParser.RULE_lexicalDeclaration_In = 41;
ECMAScriptPassParser.RULE_letOrConst = 42;
ECMAScriptPassParser.RULE_bindingList = 43;
ECMAScriptPassParser.RULE_bindingList_In = 44;
ECMAScriptPassParser.RULE_lexicalBinding = 45;
ECMAScriptPassParser.RULE_lexicalBinding_In = 46;
ECMAScriptPassParser.RULE_declaration = 47;
ECMAScriptPassParser.RULE_hoistableDeclaration = 48;
ECMAScriptPassParser.RULE_iterationStatement = 49;
ECMAScriptPassParser.RULE_forDeclaration = 50;
ECMAScriptPassParser.RULE_forBinding = 51;
ECMAScriptPassParser.RULE_breakableStatement = 52;
ECMAScriptPassParser.RULE_variableStatement = 53;
ECMAScriptPassParser.RULE_variableDeclarationList = 54;
ECMAScriptPassParser.RULE_variableDeclarationList_In = 55;
ECMAScriptPassParser.RULE_variableDeclaration = 56;
ECMAScriptPassParser.RULE_variableDeclaration_In = 57;
ECMAScriptPassParser.RULE_functionDeclaration = 58;
ECMAScriptPassParser.RULE_functionExpression = 59;
ECMAScriptPassParser.RULE_uniqueFormalParameters = 60;
ECMAScriptPassParser.RULE_formalParameters = 61;
ECMAScriptPassParser.RULE_formalParameterList = 62;
ECMAScriptPassParser.RULE_formalParameter = 63;
ECMAScriptPassParser.RULE_functionBody = 64;
ECMAScriptPassParser.RULE_functionStatementList = 65;
ECMAScriptPassParser.RULE_methodDefinition = 66;
ECMAScriptPassParser.RULE_propertySetParameterList = 67;
ECMAScriptPassParser.RULE_reservedWord = 68;
ECMAScriptPassParser.RULE_keyword = 69;
ECMAScriptPassParser.RULE_futureReservedWord = 70;

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
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.SemiColon))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ECMAScriptPassParser.NullLiteral - 59)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 59)) | (1 << (ECMAScriptPassParser.Await - 59)) | (1 << (ECMAScriptPassParser.Const - 59)) | (1 << (ECMAScriptPassParser.For - 59)) | (1 << (ECMAScriptPassParser.Function - 59)) | (1 << (ECMAScriptPassParser.New - 59)) | (1 << (ECMAScriptPassParser.This - 59)) | (1 << (ECMAScriptPassParser.Var - 59)))) !== 0) || ((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (ECMAScriptPassParser.Yield - 94)) | (1 << (ECMAScriptPassParser.Let - 94)) | (1 << (ECMAScriptPassParser.StringLiteral - 94)) | (1 << (ECMAScriptPassParser.IdentifierName - 94)))) !== 0)) {
            this.state = 142;
            this.statementList();
        }

        this.state = 145;
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
        this.state = 151;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 147;
            this.match(ECMAScriptPassParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 148;
            if (!( this.lineTerminatorAhead())) {
                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 149;
            if (!( this._input.LT(1).type === ECMAScriptPassParser.EOF)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type === ECMAScriptPassParser.EOF");
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 150;
            if (!( this._input.LT(1).type === ECMAScriptPassParser.CloseBrace)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type === ECMAScriptPassParser.CloseBrace");
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
        this.state = 153;
        this.assignmentExpression_In();
        this.state = 158;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 154;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 155;
                this.assignmentExpression_In(); 
            }
            this.state = 160;
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
        this.state = 165;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 161;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 163;
            this.match(ECMAScriptPassParser.Await);
            this.state = 164;
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
        this.state = 170;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 168;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 169;
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
        this.state = 172;
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

PrimaryExpressionContext.prototype.This = function() {
    return this.getToken(ECMAScriptPassParser.This, 0);
};

PrimaryExpressionContext.prototype.identifierReference = function() {
    return this.getTypedRuleContext(IdentifierReferenceContext,0);
};

PrimaryExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryExpressionContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};

PrimaryExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};

PrimaryExpressionContext.prototype.functionExpression = function() {
    return this.getTypedRuleContext(FunctionExpressionContext,0);
};

PrimaryExpressionContext.prototype.RegularExpressionLiteral = function() {
    return this.getToken(ECMAScriptPassParser.RegularExpressionLiteral, 0);
};

PrimaryExpressionContext.prototype.coverParenthesizedExpressionAndArrowParameterList = function() {
    return this.getTypedRuleContext(CoverParenthesizedExpressionAndArrowParameterListContext,0);
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
        this.state = 182;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.This:
            this.enterOuterAlt(localctx, 1);
            this.state = 174;
            this.match(ECMAScriptPassParser.This);
            break;
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
            this.identifierReference();
            break;
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.StringLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 176;
            this.literal();
            break;
        case ECMAScriptPassParser.OpenBracket:
            this.enterOuterAlt(localctx, 4);
            this.state = 177;
            this.arrayLiteral();
            break;
        case ECMAScriptPassParser.OpenBrace:
            this.enterOuterAlt(localctx, 5);
            this.state = 178;
            this.objectLiteral();
            break;
        case ECMAScriptPassParser.Function:
            this.enterOuterAlt(localctx, 6);
            this.state = 179;
            this.functionExpression();
            break;
        case ECMAScriptPassParser.RegularExpressionLiteral:
            this.enterOuterAlt(localctx, 7);
            this.state = 180;
            this.match(ECMAScriptPassParser.RegularExpressionLiteral);
            break;
        case ECMAScriptPassParser.OpenParen:
            this.enterOuterAlt(localctx, 8);
            this.state = 181;
            this.coverParenthesizedExpressionAndArrowParameterList();
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
        this.state = 184;
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

function CoverParenthesizedExpressionAndArrowParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_coverParenthesizedExpressionAndArrowParameterList;
    return this;
}

CoverParenthesizedExpressionAndArrowParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoverParenthesizedExpressionAndArrowParameterListContext.prototype.constructor = CoverParenthesizedExpressionAndArrowParameterListContext;

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.expression_In = function() {
    return this.getTypedRuleContext(Expression_InContext,0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCoverParenthesizedExpressionAndArrowParameterList(this);
	}
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCoverParenthesizedExpressionAndArrowParameterList(this);
	}
};




ECMAScriptPassParser.CoverParenthesizedExpressionAndArrowParameterListContext = CoverParenthesizedExpressionAndArrowParameterListContext;

ECMAScriptPassParser.prototype.coverParenthesizedExpressionAndArrowParameterList = function() {

    var localctx = new CoverParenthesizedExpressionAndArrowParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ECMAScriptPassParser.RULE_coverParenthesizedExpressionAndArrowParameterList);
    var _la = 0; // Token type
    try {
        this.state = 195;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 187;
            this.expression_In();
            this.state = 189;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 188;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 191;
            this.match(ECMAScriptPassParser.CloseParen);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 194;
            this.match(ECMAScriptPassParser.CloseParen);
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

function CoverCallExpressionAndAsyncArrowHeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_coverCallExpressionAndAsyncArrowHead;
    return this;
}

CoverCallExpressionAndAsyncArrowHeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoverCallExpressionAndAsyncArrowHeadContext.prototype.constructor = CoverCallExpressionAndAsyncArrowHeadContext;

CoverCallExpressionAndAsyncArrowHeadContext.prototype.memberExpression = function() {
    return this.getTypedRuleContext(MemberExpressionContext,0);
};

CoverCallExpressionAndAsyncArrowHeadContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

CoverCallExpressionAndAsyncArrowHeadContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCoverCallExpressionAndAsyncArrowHead(this);
	}
};

CoverCallExpressionAndAsyncArrowHeadContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCoverCallExpressionAndAsyncArrowHead(this);
	}
};




ECMAScriptPassParser.CoverCallExpressionAndAsyncArrowHeadContext = CoverCallExpressionAndAsyncArrowHeadContext;

ECMAScriptPassParser.prototype.coverCallExpressionAndAsyncArrowHead = function() {

    var localctx = new CoverCallExpressionAndAsyncArrowHeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScriptPassParser.RULE_coverCallExpressionAndAsyncArrowHead);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.memberExpression(0);
        this.state = 198;
        this.arguments();
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
    this.ruleIndex = ECMAScriptPassParser.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.OpenBracket = function() {
    return this.getToken(ECMAScriptPassParser.OpenBracket, 0);
};

ArrayLiteralContext.prototype.CloseBracket = function() {
    return this.getToken(ECMAScriptPassParser.CloseBracket, 0);
};

ArrayLiteralContext.prototype.elision = function() {
    return this.getTypedRuleContext(ElisionContext,0);
};

ArrayLiteralContext.prototype.elementList = function() {
    return this.getTypedRuleContext(ElementListContext,0);
};

ArrayLiteralContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitArrayLiteral(this);
	}
};




ECMAScriptPassParser.ArrayLiteralContext = ArrayLiteralContext;

ECMAScriptPassParser.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScriptPassParser.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.state = 217;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 200;
            this.match(ECMAScriptPassParser.OpenBracket);
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 201;
                this.elision();
            }

            this.state = 204;
            this.match(ECMAScriptPassParser.CloseBracket);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 205;
            this.match(ECMAScriptPassParser.OpenBracket);
            this.state = 206;
            this.elementList(0);
            this.state = 207;
            this.match(ECMAScriptPassParser.CloseBracket);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 209;
            this.match(ECMAScriptPassParser.OpenBracket);
            this.state = 210;
            this.elementList(0);
            this.state = 211;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 212;
                this.elision();
            }

            this.state = 215;
            this.match(ECMAScriptPassParser.CloseBracket);
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

function ElementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_elementList;
    return this;
}

ElementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListContext.prototype.constructor = ElementListContext;

ElementListContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};

ElementListContext.prototype.elision = function() {
    return this.getTypedRuleContext(ElisionContext,0);
};

ElementListContext.prototype.spreadElement = function() {
    return this.getTypedRuleContext(SpreadElementContext,0);
};

ElementListContext.prototype.elementList = function() {
    return this.getTypedRuleContext(ElementListContext,0);
};

ElementListContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

ElementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterElementList(this);
	}
};

ElementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitElementList(this);
	}
};



ECMAScriptPassParser.prototype.elementList = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ElementListContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, ECMAScriptPassParser.RULE_elementList, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 220;
                this.elision();
            }

            this.state = 223;
            this.assignmentExpression_In();
            break;

        case 2:
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 224;
                this.elision();
            }

            this.state = 227;
            this.spreadElement();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 244;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 242;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ElementListContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_elementList);
                    this.state = 230;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 231;
                    this.match(ECMAScriptPassParser.Comma);
                    this.state = 233;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===ECMAScriptPassParser.Comma) {
                        this.state = 232;
                        this.elision();
                    }

                    this.state = 235;
                    this.assignmentExpression_In();
                    break;

                case 2:
                    localctx = new ElementListContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_elementList);
                    this.state = 236;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 237;
                    this.match(ECMAScriptPassParser.Comma);
                    this.state = 239;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===ECMAScriptPassParser.Comma) {
                        this.state = 238;
                        this.elision();
                    }

                    this.state = 241;
                    this.spreadElement();
                    break;

                } 
            }
            this.state = 246;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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

function ElisionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_elision;
    return this;
}

ElisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElisionContext.prototype.constructor = ElisionContext;

ElisionContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


ElisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterElision(this);
	}
};

ElisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitElision(this);
	}
};




ECMAScriptPassParser.ElisionContext = ElisionContext;

ECMAScriptPassParser.prototype.elision = function() {

    var localctx = new ElisionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ECMAScriptPassParser.RULE_elision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 247;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 250; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ECMAScriptPassParser.Comma);
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

function SpreadElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_spreadElement;
    return this;
}

SpreadElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpreadElementContext.prototype.constructor = SpreadElementContext;

SpreadElementContext.prototype.Spread = function() {
    return this.getToken(ECMAScriptPassParser.Spread, 0);
};

SpreadElementContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};

SpreadElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterSpreadElement(this);
	}
};

SpreadElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitSpreadElement(this);
	}
};




ECMAScriptPassParser.SpreadElementContext = SpreadElementContext;

ECMAScriptPassParser.prototype.spreadElement = function() {

    var localctx = new SpreadElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ECMAScriptPassParser.RULE_spreadElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.match(ECMAScriptPassParser.Spread);
        this.state = 253;
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
    this.enterRule(localctx, 28, ECMAScriptPassParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.state = 264;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 255;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 256;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 257;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 258;
            this.propertyDefinitionList();
            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 259;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 262;
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
    this.enterRule(localctx, 30, ECMAScriptPassParser.RULE_propertyDefinitionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.propertyDefinition();
        this.state = 271;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 267;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 268;
                this.propertyDefinition(); 
            }
            this.state = 273;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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

PropertyDefinitionContext.prototype.identifierReference = function() {
    return this.getTypedRuleContext(IdentifierReferenceContext,0);
};

PropertyDefinitionContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyDefinitionContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptPassParser.Colon, 0);
};

PropertyDefinitionContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};

PropertyDefinitionContext.prototype.methodDefinition = function() {
    return this.getTypedRuleContext(MethodDefinitionContext,0);
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
    this.enterRule(localctx, 32, ECMAScriptPassParser.RULE_propertyDefinition);
    try {
        this.state = 280;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 274;
            this.identifierReference();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 275;
            this.propertyName();
            this.state = 276;
            this.match(ECMAScriptPassParser.Colon);
            this.state = 277;
            this.assignmentExpression_In();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 279;
            this.methodDefinition();
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
    this.enterRule(localctx, 34, ECMAScriptPassParser.RULE_propertyName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
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
    this.enterRule(localctx, 36, ECMAScriptPassParser.RULE_literalPropertyName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
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

function CallExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_callExpression;
    return this;
}

CallExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallExpressionContext.prototype.constructor = CallExpressionContext;

CallExpressionContext.prototype.coverCallExpressionAndAsyncArrowHead = function() {
    return this.getTypedRuleContext(CoverCallExpressionAndAsyncArrowHeadContext,0);
};

CallExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCallExpression(this);
	}
};

CallExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCallExpression(this);
	}
};




ECMAScriptPassParser.CallExpressionContext = CallExpressionContext;

ECMAScriptPassParser.prototype.callExpression = function() {

    var localctx = new CallExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ECMAScriptPassParser.RULE_callExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.coverCallExpressionAndAsyncArrowHead();
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
    this.ruleIndex = ECMAScriptPassParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

ArgumentsContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

ArgumentsContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

ArgumentsContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitArguments(this);
	}
};




ECMAScriptPassParser.ArgumentsContext = ArgumentsContext;

ECMAScriptPassParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ECMAScriptPassParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.state = 297;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 288;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 289;
            this.match(ECMAScriptPassParser.CloseParen);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 290;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 291;
            this.argumentList();
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 292;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 295;
            this.match(ECMAScriptPassParser.CloseParen);
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

function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.assignmentExpression_In = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentExpression_InContext);
    } else {
        return this.getTypedRuleContext(AssignmentExpression_InContext,i);
    }
};

ArgumentListContext.prototype.Spread = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Spread);
    } else {
        return this.getToken(ECMAScriptPassParser.Spread, i);
    }
};


ArgumentListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


ArgumentListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterArgumentList(this);
	}
};

ArgumentListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitArgumentList(this);
	}
};




ECMAScriptPassParser.ArgumentListContext = ArgumentListContext;

ECMAScriptPassParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ECMAScriptPassParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Spread) {
            this.state = 299;
            this.match(ECMAScriptPassParser.Spread);
        }

        this.state = 302;
        this.assignmentExpression_In();
        this.state = 310;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 303;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 305;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ECMAScriptPassParser.Spread) {
                    this.state = 304;
                    this.match(ECMAScriptPassParser.Spread);
                }

                this.state = 307;
                this.assignmentExpression_In(); 
            }
            this.state = 312;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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

LeftHandSideExpressionContext.prototype.callExpression = function() {
    return this.getTypedRuleContext(CallExpressionContext,0);
};

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
    this.enterRule(localctx, 44, ECMAScriptPassParser.RULE_leftHandSideExpression);
    try {
        this.state = 315;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 313;
            this.callExpression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 314;
            this.newExpression();
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

NewExpressionContext.prototype.New = function() {
    return this.getToken(ECMAScriptPassParser.New, 0);
};

NewExpressionContext.prototype.newExpression = function() {
    return this.getTypedRuleContext(NewExpressionContext,0);
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
    this.enterRule(localctx, 46, ECMAScriptPassParser.RULE_newExpression);
    try {
        this.state = 320;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 317;
            this.memberExpression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 318;
            this.match(ECMAScriptPassParser.New);
            this.state = 319;
            this.newExpression();
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

MemberExpressionContext.prototype.New = function() {
    return this.getToken(ECMAScriptPassParser.New, 0);
};

MemberExpressionContext.prototype.memberExpression = function() {
    return this.getTypedRuleContext(MemberExpressionContext,0);
};

MemberExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

MemberExpressionContext.prototype.OpenBracket = function() {
    return this.getToken(ECMAScriptPassParser.OpenBracket, 0);
};

MemberExpressionContext.prototype.expression_In = function() {
    return this.getTypedRuleContext(Expression_InContext,0);
};

MemberExpressionContext.prototype.CloseBracket = function() {
    return this.getToken(ECMAScriptPassParser.CloseBracket, 0);
};

MemberExpressionContext.prototype.Dot = function() {
    return this.getToken(ECMAScriptPassParser.Dot, 0);
};

MemberExpressionContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptPassParser.IdentifierName, 0);
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



ECMAScriptPassParser.prototype.memberExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MemberExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 48;
    this.enterRecursionRule(localctx, 48, ECMAScriptPassParser.RULE_memberExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.RegularExpressionLiteral:
        case ECMAScriptPassParser.OpenBrace:
        case ECMAScriptPassParser.OpenParen:
        case ECMAScriptPassParser.OpenBracket:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Function:
        case ECMAScriptPassParser.This:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.StringLiteral:
        case ECMAScriptPassParser.IdentifierName:
            this.state = 323;
            this.primaryExpression();
            break;
        case ECMAScriptPassParser.New:
            this.state = 324;
            this.match(ECMAScriptPassParser.New);
            this.state = 325;
            this.memberExpression(0);
            this.state = 326;
            this.arguments();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 340;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 338;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MemberExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_memberExpression);
                    this.state = 330;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 331;
                    this.match(ECMAScriptPassParser.OpenBracket);
                    this.state = 332;
                    this.expression_In();
                    this.state = 333;
                    this.match(ECMAScriptPassParser.CloseBracket);
                    break;

                case 2:
                    localctx = new MemberExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_memberExpression);
                    this.state = 335;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 336;
                    this.match(ECMAScriptPassParser.Dot);
                    this.state = 337;
                    this.match(ECMAScriptPassParser.IdentifierName);
                    break;

                } 
            }
            this.state = 342;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
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

function InitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_initializer;
    return this;
}

InitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitializerContext.prototype.constructor = InitializerContext;

InitializerContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptPassParser.Assign, 0);
};

InitializerContext.prototype.assignmentExpression = function() {
    return this.getTypedRuleContext(AssignmentExpressionContext,0);
};

InitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterInitializer(this);
	}
};

InitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitInitializer(this);
	}
};




ECMAScriptPassParser.InitializerContext = InitializerContext;

ECMAScriptPassParser.prototype.initializer = function() {

    var localctx = new InitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ECMAScriptPassParser.RULE_initializer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(ECMAScriptPassParser.Assign);
        this.state = 344;
        this.assignmentExpression();
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

function Initializer_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_initializer_In;
    return this;
}

Initializer_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Initializer_InContext.prototype.constructor = Initializer_InContext;

Initializer_InContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptPassParser.Assign, 0);
};

Initializer_InContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};

Initializer_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterInitializer_In(this);
	}
};

Initializer_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitInitializer_In(this);
	}
};




ECMAScriptPassParser.Initializer_InContext = Initializer_InContext;

ECMAScriptPassParser.prototype.initializer_In = function() {

    var localctx = new Initializer_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ECMAScriptPassParser.RULE_initializer_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(ECMAScriptPassParser.Assign);
        this.state = 347;
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

function AssignmentExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_assignmentExpression;
    return this;
}

AssignmentExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;


 
AssignmentExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LhsExpressionContext(parser, ctx) {
	AssignmentExpressionContext.call(this, parser);
    AssignmentExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LhsExpressionContext.prototype = Object.create(AssignmentExpressionContext.prototype);
LhsExpressionContext.prototype.constructor = LhsExpressionContext;

ECMAScriptPassParser.LhsExpressionContext = LhsExpressionContext;

LhsExpressionContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};
LhsExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLhsExpression(this);
	}
};

LhsExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLhsExpression(this);
	}
};


function AssignExpressionContext(parser, ctx) {
	AssignmentExpressionContext.call(this, parser);
    AssignmentExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignExpressionContext.prototype = Object.create(AssignmentExpressionContext.prototype);
AssignExpressionContext.prototype.constructor = AssignExpressionContext;

ECMAScriptPassParser.AssignExpressionContext = AssignExpressionContext;

AssignExpressionContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};

AssignExpressionContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptPassParser.Assign, 0);
};

AssignExpressionContext.prototype.assignmentExpression = function() {
    return this.getTypedRuleContext(AssignmentExpressionContext,0);
};
AssignExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignExpression(this);
	}
};

AssignExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitAssignExpression(this);
	}
};


function AssignmentOperatorExpressionContext(parser, ctx) {
	AssignmentExpressionContext.call(this, parser);
    AssignmentExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentOperatorExpressionContext.prototype = Object.create(AssignmentExpressionContext.prototype);
AssignmentOperatorExpressionContext.prototype.constructor = AssignmentOperatorExpressionContext;

ECMAScriptPassParser.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;

AssignmentOperatorExpressionContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};

AssignmentOperatorExpressionContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};

AssignmentOperatorExpressionContext.prototype.assignmentExpression = function() {
    return this.getTypedRuleContext(AssignmentExpressionContext,0);
};
AssignmentOperatorExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignmentOperatorExpression(this);
	}
};

AssignmentOperatorExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitAssignmentOperatorExpression(this);
	}
};



ECMAScriptPassParser.AssignmentExpressionContext = AssignmentExpressionContext;

ECMAScriptPassParser.prototype.assignmentExpression = function() {

    var localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ECMAScriptPassParser.RULE_assignmentExpression);
    try {
        this.state = 358;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AssignExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 349;
            this.leftHandSideExpression();
            this.state = 350;
            this.match(ECMAScriptPassParser.Assign);
            this.state = 351;
            this.assignmentExpression();
            break;

        case 2:
            localctx = new AssignmentOperatorExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 353;
            this.leftHandSideExpression();
            this.state = 354;
            this.assignmentOperator();
            this.state = 355;
            this.assignmentExpression();
            break;

        case 3:
            localctx = new LhsExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 357;
            this.leftHandSideExpression();
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


function AssignExpression_InContext(parser, ctx) {
	AssignmentExpression_InContext.call(this, parser);
    AssignmentExpression_InContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignExpression_InContext.prototype = Object.create(AssignmentExpression_InContext.prototype);
AssignExpression_InContext.prototype.constructor = AssignExpression_InContext;

ECMAScriptPassParser.AssignExpression_InContext = AssignExpression_InContext;

AssignExpression_InContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};

AssignExpression_InContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptPassParser.Assign, 0);
};

AssignExpression_InContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};
AssignExpression_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignExpression_In(this);
	}
};

AssignExpression_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitAssignExpression_In(this);
	}
};


function AssignmentOperatorExpression_InContext(parser, ctx) {
	AssignmentExpression_InContext.call(this, parser);
    AssignmentExpression_InContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentOperatorExpression_InContext.prototype = Object.create(AssignmentExpression_InContext.prototype);
AssignmentOperatorExpression_InContext.prototype.constructor = AssignmentOperatorExpression_InContext;

ECMAScriptPassParser.AssignmentOperatorExpression_InContext = AssignmentOperatorExpression_InContext;

AssignmentOperatorExpression_InContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};

AssignmentOperatorExpression_InContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};

AssignmentOperatorExpression_InContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};
AssignmentOperatorExpression_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignmentOperatorExpression_In(this);
	}
};

AssignmentOperatorExpression_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitAssignmentOperatorExpression_In(this);
	}
};



ECMAScriptPassParser.AssignmentExpression_InContext = AssignmentExpression_InContext;

ECMAScriptPassParser.prototype.assignmentExpression_In = function() {

    var localctx = new AssignmentExpression_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ECMAScriptPassParser.RULE_assignmentExpression_In);
    try {
        this.state = 369;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AssignExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 360;
            this.leftHandSideExpression();
            this.state = 361;
            this.match(ECMAScriptPassParser.Assign);
            this.state = 362;
            this.assignmentExpression_In();
            break;

        case 2:
            localctx = new AssignmentOperatorExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 364;
            this.leftHandSideExpression();
            this.state = 365;
            this.assignmentOperator();
            this.state = 366;
            this.assignmentExpression_In();
            break;

        case 3:
            localctx = new LhsExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 368;
            this.leftHandSideExpression();
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
    this.enterRule(localctx, 58, ECMAScriptPassParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        _la = this._input.LA(1);
        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (ECMAScriptPassParser.PlusAssign - 42)) | (1 << (ECMAScriptPassParser.MinusAssign - 42)) | (1 << (ECMAScriptPassParser.MultiplyAssign - 42)) | (1 << (ECMAScriptPassParser.ModuloAssign - 42)) | (1 << (ECMAScriptPassParser.PowerAssign - 42)) | (1 << (ECMAScriptPassParser.LeftShiftArithmeticAssign - 42)) | (1 << (ECMAScriptPassParser.RightShiftArithmeticAssign - 42)) | (1 << (ECMAScriptPassParser.RightShiftLogicalAssign - 42)) | (1 << (ECMAScriptPassParser.BitAndAssign - 42)) | (1 << (ECMAScriptPassParser.BitOrAssign - 42)) | (1 << (ECMAScriptPassParser.BitXorAssign - 42)) | (1 << (ECMAScriptPassParser.DivideAssign - 42)))) !== 0))) {
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

StatementContext.prototype.variableStatement = function() {
    return this.getTypedRuleContext(VariableStatementContext,0);
};

StatementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.breakableStatement = function() {
    return this.getTypedRuleContext(BreakableStatementContext,0);
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
    this.enterRule(localctx, 60, ECMAScriptPassParser.RULE_statement);
    try {
        this.state = 377;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Var:
            this.enterOuterAlt(localctx, 1);
            this.state = 373;
            this.variableStatement();
            break;
        case ECMAScriptPassParser.SemiColon:
            this.enterOuterAlt(localctx, 2);
            this.state = 374;
            this.emptyStatement();
            break;
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.RegularExpressionLiteral:
        case ECMAScriptPassParser.OpenBrace:
        case ECMAScriptPassParser.OpenParen:
        case ECMAScriptPassParser.OpenBracket:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Function:
        case ECMAScriptPassParser.New:
        case ECMAScriptPassParser.This:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.StringLiteral:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 3);
            this.state = 375;
            this.expressionStatement();
            break;
        case ECMAScriptPassParser.For:
            this.enterOuterAlt(localctx, 4);
            this.state = 376;
            this.breakableStatement();
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

function Statement_ReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statement_Return;
    return this;
}

Statement_ReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_ReturnContext.prototype.constructor = Statement_ReturnContext;

Statement_ReturnContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

Statement_ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatement_Return(this);
	}
};

Statement_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatement_Return(this);
	}
};




ECMAScriptPassParser.Statement_ReturnContext = Statement_ReturnContext;

ECMAScriptPassParser.prototype.statement_Return = function() {

    var localctx = new Statement_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ECMAScriptPassParser.RULE_statement_Return);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
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
    this.enterRule(localctx, 64, ECMAScriptPassParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 381;
            this.statementListItem();
            this.state = 382;
            this.eos();
            this.state = 386; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.SemiColon))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ECMAScriptPassParser.NullLiteral - 59)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 59)) | (1 << (ECMAScriptPassParser.Await - 59)) | (1 << (ECMAScriptPassParser.Const - 59)) | (1 << (ECMAScriptPassParser.For - 59)) | (1 << (ECMAScriptPassParser.Function - 59)) | (1 << (ECMAScriptPassParser.New - 59)) | (1 << (ECMAScriptPassParser.This - 59)) | (1 << (ECMAScriptPassParser.Var - 59)))) !== 0) || ((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (ECMAScriptPassParser.Yield - 94)) | (1 << (ECMAScriptPassParser.Let - 94)) | (1 << (ECMAScriptPassParser.StringLiteral - 94)) | (1 << (ECMAScriptPassParser.IdentifierName - 94)))) !== 0));
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
    this.ruleIndex = ECMAScriptPassParser.RULE_statementList_Return;
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatementList_Return(this);
	}
};

StatementList_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatementList_Return(this);
	}
};




ECMAScriptPassParser.StatementList_ReturnContext = StatementList_ReturnContext;

ECMAScriptPassParser.prototype.statementList_Return = function() {

    var localctx = new StatementList_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ECMAScriptPassParser.RULE_statementList_Return);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 391; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 388;
            this.statementListItem_Return();
            this.state = 389;
            this.eos();
            this.state = 393; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ECMAScriptPassParser.NullLiteral - 59)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 59)) | (1 << (ECMAScriptPassParser.Await - 59)) | (1 << (ECMAScriptPassParser.Const - 59)) | (1 << (ECMAScriptPassParser.Function - 59)) | (1 << (ECMAScriptPassParser.New - 59)) | (1 << (ECMAScriptPassParser.This - 59)))) !== 0) || ((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (ECMAScriptPassParser.Yield - 94)) | (1 << (ECMAScriptPassParser.Let - 94)) | (1 << (ECMAScriptPassParser.StringLiteral - 94)) | (1 << (ECMAScriptPassParser.IdentifierName - 94)))) !== 0));
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
    this.enterRule(localctx, 68, ECMAScriptPassParser.RULE_statementListItem);
    try {
        this.state = 397;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 395;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 396;
            this.declaration();
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

function StatementListItem_ReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statementListItem_Return;
    return this;
}

StatementListItem_ReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListItem_ReturnContext.prototype.constructor = StatementListItem_ReturnContext;

StatementListItem_ReturnContext.prototype.statement_Return = function() {
    return this.getTypedRuleContext(Statement_ReturnContext,0);
};

StatementListItem_ReturnContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

StatementListItem_ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatementListItem_Return(this);
	}
};

StatementListItem_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatementListItem_Return(this);
	}
};




ECMAScriptPassParser.StatementListItem_ReturnContext = StatementListItem_ReturnContext;

ECMAScriptPassParser.prototype.statementListItem_Return = function() {

    var localctx = new StatementListItem_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ECMAScriptPassParser.RULE_statementListItem_Return);
    try {
        this.state = 401;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 399;
            this.statement_Return();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 400;
            this.declaration();
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
    this.enterRule(localctx, 72, ECMAScriptPassParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
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
    this.enterRule(localctx, 74, ECMAScriptPassParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
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

function BindingElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_bindingElement;
    return this;
}

BindingElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingElementContext.prototype.constructor = BindingElementContext;

BindingElementContext.prototype.singleNameBinding = function() {
    return this.getTypedRuleContext(SingleNameBindingContext,0);
};

BindingElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBindingElement(this);
	}
};

BindingElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBindingElement(this);
	}
};




ECMAScriptPassParser.BindingElementContext = BindingElementContext;

ECMAScriptPassParser.prototype.bindingElement = function() {

    var localctx = new BindingElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ECMAScriptPassParser.RULE_bindingElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.singleNameBinding();
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

function SingleNameBindingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_singleNameBinding;
    return this;
}

SingleNameBindingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleNameBindingContext.prototype.constructor = SingleNameBindingContext;

SingleNameBindingContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

SingleNameBindingContext.prototype.initializer_In = function() {
    return this.getTypedRuleContext(Initializer_InContext,0);
};

SingleNameBindingContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterSingleNameBinding(this);
	}
};

SingleNameBindingContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitSingleNameBinding(this);
	}
};




ECMAScriptPassParser.SingleNameBindingContext = SingleNameBindingContext;

ECMAScriptPassParser.prototype.singleNameBinding = function() {

    var localctx = new SingleNameBindingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ECMAScriptPassParser.RULE_singleNameBinding);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.bindingIdentifier();
        this.state = 411;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 410;
            this.initializer_In();
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
    this.enterRule(localctx, 80, ECMAScriptPassParser.RULE_lexicalDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this.letOrConst();
        this.state = 414;
        this.bindingList();
        this.state = 415;
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
    this.enterRule(localctx, 82, ECMAScriptPassParser.RULE_lexicalDeclaration_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this.letOrConst();
        this.state = 418;
        this.bindingList_In();
        this.state = 419;
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
    this.enterRule(localctx, 84, ECMAScriptPassParser.RULE_letOrConst);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 421;
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
    this.enterRule(localctx, 86, ECMAScriptPassParser.RULE_bindingList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        this.lexicalBinding();
        this.state = 428;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 424;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 425;
            this.lexicalBinding();
            this.state = 430;
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
    this.enterRule(localctx, 88, ECMAScriptPassParser.RULE_bindingList_In);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        this.lexicalBinding_In();
        this.state = 436;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 432;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 433;
            this.lexicalBinding_In();
            this.state = 438;
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

LexicalBindingContext.prototype.initializer = function() {
    return this.getTypedRuleContext(InitializerContext,0);
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
    this.enterRule(localctx, 90, ECMAScriptPassParser.RULE_lexicalBinding);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 439;
        this.bindingIdentifier();
        this.state = 441;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 440;
            this.initializer();
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

LexicalBinding_InContext.prototype.initializer_In = function() {
    return this.getTypedRuleContext(Initializer_InContext,0);
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
    this.enterRule(localctx, 92, ECMAScriptPassParser.RULE_lexicalBinding_In);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.bindingIdentifier();
        this.state = 445;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 444;
            this.initializer_In();
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

DeclarationContext.prototype.hoistableDeclaration = function() {
    return this.getTypedRuleContext(HoistableDeclarationContext,0);
};

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
    this.enterRule(localctx, 94, ECMAScriptPassParser.RULE_declaration);
    try {
        this.state = 449;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Function:
            this.enterOuterAlt(localctx, 1);
            this.state = 447;
            this.hoistableDeclaration();
            break;
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Let:
            this.enterOuterAlt(localctx, 2);
            this.state = 448;
            this.lexicalDeclaration_In();
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

function HoistableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_hoistableDeclaration;
    return this;
}

HoistableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HoistableDeclarationContext.prototype.constructor = HoistableDeclarationContext;

HoistableDeclarationContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

HoistableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterHoistableDeclaration(this);
	}
};

HoistableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitHoistableDeclaration(this);
	}
};




ECMAScriptPassParser.HoistableDeclarationContext = HoistableDeclarationContext;

ECMAScriptPassParser.prototype.hoistableDeclaration = function() {

    var localctx = new HoistableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, ECMAScriptPassParser.RULE_hoistableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.functionDeclaration();
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
    this.ruleIndex = ECMAScriptPassParser.RULE_iterationStatement;
    return this;
}

IterationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterationStatementContext.prototype.constructor = IterationStatementContext;

IterationStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptPassParser.For, 0);
};

IterationStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

IterationStatementContext.prototype.lexicalDeclaration = function() {
    return this.getTypedRuleContext(LexicalDeclarationContext,0);
};

IterationStatementContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

IterationStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

IterationStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

IterationStatementContext.prototype.expression_In = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expression_InContext);
    } else {
        return this.getTypedRuleContext(Expression_InContext,i);
    }
};

IterationStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterIterationStatement(this);
	}
};

IterationStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitIterationStatement(this);
	}
};




ECMAScriptPassParser.IterationStatementContext = IterationStatementContext;

ECMAScriptPassParser.prototype.iterationStatement = function() {

    var localctx = new IterationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, ECMAScriptPassParser.RULE_iterationStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 453;
        this.match(ECMAScriptPassParser.For);
        this.state = 454;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 455;
        this.lexicalDeclaration();
        this.state = 457;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ECMAScriptPassParser.NullLiteral - 59)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 59)) | (1 << (ECMAScriptPassParser.Await - 59)) | (1 << (ECMAScriptPassParser.Function - 59)) | (1 << (ECMAScriptPassParser.New - 59)) | (1 << (ECMAScriptPassParser.This - 59)))) !== 0) || ((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (ECMAScriptPassParser.Yield - 94)) | (1 << (ECMAScriptPassParser.StringLiteral - 94)) | (1 << (ECMAScriptPassParser.IdentifierName - 94)))) !== 0)) {
            this.state = 456;
            this.expression_In();
        }

        this.state = 459;
        this.match(ECMAScriptPassParser.SemiColon);
        this.state = 461;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ECMAScriptPassParser.NullLiteral - 59)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 59)) | (1 << (ECMAScriptPassParser.Await - 59)) | (1 << (ECMAScriptPassParser.Function - 59)) | (1 << (ECMAScriptPassParser.New - 59)) | (1 << (ECMAScriptPassParser.This - 59)))) !== 0) || ((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (ECMAScriptPassParser.Yield - 94)) | (1 << (ECMAScriptPassParser.StringLiteral - 94)) | (1 << (ECMAScriptPassParser.IdentifierName - 94)))) !== 0)) {
            this.state = 460;
            this.expression_In();
        }

        this.state = 463;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 464;
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

function ForDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_forDeclaration;
    return this;
}

ForDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForDeclarationContext.prototype.constructor = ForDeclarationContext;

ForDeclarationContext.prototype.letOrConst = function() {
    return this.getTypedRuleContext(LetOrConstContext,0);
};

ForDeclarationContext.prototype.forBinding = function() {
    return this.getTypedRuleContext(ForBindingContext,0);
};

ForDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterForDeclaration(this);
	}
};

ForDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitForDeclaration(this);
	}
};




ECMAScriptPassParser.ForDeclarationContext = ForDeclarationContext;

ECMAScriptPassParser.prototype.forDeclaration = function() {

    var localctx = new ForDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, ECMAScriptPassParser.RULE_forDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 466;
        this.letOrConst();
        this.state = 467;
        this.forBinding();
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

function ForBindingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_forBinding;
    return this;
}

ForBindingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForBindingContext.prototype.constructor = ForBindingContext;

ForBindingContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

ForBindingContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterForBinding(this);
	}
};

ForBindingContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitForBinding(this);
	}
};




ECMAScriptPassParser.ForBindingContext = ForBindingContext;

ECMAScriptPassParser.prototype.forBinding = function() {

    var localctx = new ForBindingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, ECMAScriptPassParser.RULE_forBinding);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
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

function BreakableStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_breakableStatement;
    return this;
}

BreakableStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakableStatementContext.prototype.constructor = BreakableStatementContext;

BreakableStatementContext.prototype.iterationStatement = function() {
    return this.getTypedRuleContext(IterationStatementContext,0);
};

BreakableStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBreakableStatement(this);
	}
};

BreakableStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBreakableStatement(this);
	}
};




ECMAScriptPassParser.BreakableStatementContext = BreakableStatementContext;

ECMAScriptPassParser.prototype.breakableStatement = function() {

    var localctx = new BreakableStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, ECMAScriptPassParser.RULE_breakableStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        this.iterationStatement();
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
    this.ruleIndex = ECMAScriptPassParser.RULE_variableStatement;
    return this;
}

VariableStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableStatementContext.prototype.constructor = VariableStatementContext;

VariableStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScriptPassParser.Var, 0);
};

VariableStatementContext.prototype.variableDeclarationList_In = function() {
    return this.getTypedRuleContext(VariableDeclarationList_InContext,0);
};

VariableStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterVariableStatement(this);
	}
};

VariableStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitVariableStatement(this);
	}
};




ECMAScriptPassParser.VariableStatementContext = VariableStatementContext;

ECMAScriptPassParser.prototype.variableStatement = function() {

    var localctx = new VariableStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, ECMAScriptPassParser.RULE_variableStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 473;
        this.match(ECMAScriptPassParser.Var);
        this.state = 474;
        this.variableDeclarationList_In();
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
    this.ruleIndex = ECMAScriptPassParser.RULE_variableDeclarationList;
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

VariableDeclarationListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


VariableDeclarationListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterVariableDeclarationList(this);
	}
};

VariableDeclarationListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitVariableDeclarationList(this);
	}
};




ECMAScriptPassParser.VariableDeclarationListContext = VariableDeclarationListContext;

ECMAScriptPassParser.prototype.variableDeclarationList = function() {

    var localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, ECMAScriptPassParser.RULE_variableDeclarationList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 476;
        this.variableDeclaration();
        this.state = 481;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 477;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 478;
            this.variableDeclaration();
            this.state = 483;
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

function VariableDeclarationList_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_variableDeclarationList_In;
    return this;
}

VariableDeclarationList_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationList_InContext.prototype.constructor = VariableDeclarationList_InContext;

VariableDeclarationList_InContext.prototype.variableDeclaration_In = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableDeclaration_InContext);
    } else {
        return this.getTypedRuleContext(VariableDeclaration_InContext,i);
    }
};

VariableDeclarationList_InContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


VariableDeclarationList_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterVariableDeclarationList_In(this);
	}
};

VariableDeclarationList_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitVariableDeclarationList_In(this);
	}
};




ECMAScriptPassParser.VariableDeclarationList_InContext = VariableDeclarationList_InContext;

ECMAScriptPassParser.prototype.variableDeclarationList_In = function() {

    var localctx = new VariableDeclarationList_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, ECMAScriptPassParser.RULE_variableDeclarationList_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
        this.variableDeclaration_In();
        this.state = 489;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 485;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 486;
                this.variableDeclaration_In(); 
            }
            this.state = 491;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
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
    this.ruleIndex = ECMAScriptPassParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

VariableDeclarationContext.prototype.initializer = function() {
    return this.getTypedRuleContext(InitializerContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitVariableDeclaration(this);
	}
};




ECMAScriptPassParser.VariableDeclarationContext = VariableDeclarationContext;

ECMAScriptPassParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, ECMAScriptPassParser.RULE_variableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 492;
        this.bindingIdentifier();
        this.state = 494;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 493;
            this.initializer();
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

function VariableDeclaration_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_variableDeclaration_In;
    return this;
}

VariableDeclaration_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclaration_InContext.prototype.constructor = VariableDeclaration_InContext;

VariableDeclaration_InContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

VariableDeclaration_InContext.prototype.initializer_In = function() {
    return this.getTypedRuleContext(Initializer_InContext,0);
};

VariableDeclaration_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterVariableDeclaration_In(this);
	}
};

VariableDeclaration_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitVariableDeclaration_In(this);
	}
};




ECMAScriptPassParser.VariableDeclaration_InContext = VariableDeclaration_InContext;

ECMAScriptPassParser.prototype.variableDeclaration_In = function() {

    var localctx = new VariableDeclaration_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, ECMAScriptPassParser.RULE_variableDeclaration_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 496;
        this.bindingIdentifier();
        this.state = 498;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        if(la_===1) {
            this.state = 497;
            this.initializer_In();

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
    this.ruleIndex = ECMAScriptPassParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

FunctionDeclarationContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

FunctionDeclarationContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

FunctionDeclarationContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

FunctionDeclarationContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

FunctionDeclarationContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptPassParser.OpenBrace, 0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptPassParser.CloseBrace, 0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFunctionDeclaration(this);
	}
};




ECMAScriptPassParser.FunctionDeclarationContext = FunctionDeclarationContext;

ECMAScriptPassParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, ECMAScriptPassParser.RULE_functionDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 500;
        this.match(ECMAScriptPassParser.Function);
        this.state = 501;
        this.bindingIdentifier();
        this.state = 502;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 503;
        this.formalParameters();
        this.state = 504;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 505;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 506;
        this.functionBody();
        this.state = 507;
        this.match(ECMAScriptPassParser.CloseBrace);
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

function FunctionExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_functionExpression;
    return this;
}

FunctionExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

FunctionExpressionContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

FunctionExpressionContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

FunctionExpressionContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

FunctionExpressionContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

FunctionExpressionContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptPassParser.OpenBrace, 0);
};

FunctionExpressionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionExpressionContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptPassParser.CloseBrace, 0);
};

FunctionExpressionContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFunctionExpression(this);
	}
};




ECMAScriptPassParser.FunctionExpressionContext = FunctionExpressionContext;

ECMAScriptPassParser.prototype.functionExpression = function() {

    var localctx = new FunctionExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, ECMAScriptPassParser.RULE_functionExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 509;
        this.match(ECMAScriptPassParser.Function);
        this.state = 511;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Await || _la===ECMAScriptPassParser.Yield || _la===ECMAScriptPassParser.IdentifierName) {
            this.state = 510;
            this.bindingIdentifier();
        }

        this.state = 513;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 514;
        this.formalParameters();
        this.state = 515;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 516;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 517;
        this.functionBody();
        this.state = 518;
        this.match(ECMAScriptPassParser.CloseBrace);
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

function UniqueFormalParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_uniqueFormalParameters;
    return this;
}

UniqueFormalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UniqueFormalParametersContext.prototype.constructor = UniqueFormalParametersContext;

UniqueFormalParametersContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

UniqueFormalParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterUniqueFormalParameters(this);
	}
};

UniqueFormalParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitUniqueFormalParameters(this);
	}
};




ECMAScriptPassParser.UniqueFormalParametersContext = UniqueFormalParametersContext;

ECMAScriptPassParser.prototype.uniqueFormalParameters = function() {

    var localctx = new UniqueFormalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, ECMAScriptPassParser.RULE_uniqueFormalParameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 520;
        this.formalParameters();
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

function FormalParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_formalParameters;
    return this;
}

FormalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParametersContext.prototype.constructor = FormalParametersContext;

FormalParametersContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FormalParametersContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

FormalParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFormalParameters(this);
	}
};

FormalParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFormalParameters(this);
	}
};




ECMAScriptPassParser.FormalParametersContext = FormalParametersContext;

ECMAScriptPassParser.prototype.formalParameters = function() {

    var localctx = new FormalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, ECMAScriptPassParser.RULE_formalParameters);
    var _la = 0; // Token type
    try {
        this.state = 527;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.CloseParen:
            this.enterOuterAlt(localctx, 1);

            break;
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 2);
            this.state = 523;
            this.formalParameterList();
            this.state = 525;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 524;
                this.match(ECMAScriptPassParser.Comma);
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

function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.formalParameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParameterContext);
    } else {
        return this.getTypedRuleContext(FormalParameterContext,i);
    }
};

FormalParameterListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFormalParameterList(this);
	}
};




ECMAScriptPassParser.FormalParameterListContext = FormalParameterListContext;

ECMAScriptPassParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, ECMAScriptPassParser.RULE_formalParameterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 529;
        this.formalParameter();
        this.state = 534;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 530;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 531;
                this.formalParameter(); 
            }
            this.state = 536;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
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

function FormalParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_formalParameter;
    return this;
}

FormalParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterContext.prototype.constructor = FormalParameterContext;

FormalParameterContext.prototype.bindingElement = function() {
    return this.getTypedRuleContext(BindingElementContext,0);
};

FormalParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFormalParameter(this);
	}
};

FormalParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFormalParameter(this);
	}
};




ECMAScriptPassParser.FormalParameterContext = FormalParameterContext;

ECMAScriptPassParser.prototype.formalParameter = function() {

    var localctx = new FormalParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, ECMAScriptPassParser.RULE_formalParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 537;
        this.bindingElement();
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
    this.ruleIndex = ECMAScriptPassParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.functionStatementList = function() {
    return this.getTypedRuleContext(FunctionStatementListContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFunctionBody(this);
	}
};




ECMAScriptPassParser.FunctionBodyContext = FunctionBodyContext;

ECMAScriptPassParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, ECMAScriptPassParser.RULE_functionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 539;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_functionStatementList;
    return this;
}

FunctionStatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionStatementListContext.prototype.constructor = FunctionStatementListContext;

FunctionStatementListContext.prototype.statementList_Return = function() {
    return this.getTypedRuleContext(StatementList_ReturnContext,0);
};

FunctionStatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFunctionStatementList(this);
	}
};

FunctionStatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFunctionStatementList(this);
	}
};




ECMAScriptPassParser.FunctionStatementListContext = FunctionStatementListContext;

ECMAScriptPassParser.prototype.functionStatementList = function() {

    var localctx = new FunctionStatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, ECMAScriptPassParser.RULE_functionStatementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 542;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ECMAScriptPassParser.NullLiteral - 59)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 59)) | (1 << (ECMAScriptPassParser.Await - 59)) | (1 << (ECMAScriptPassParser.Const - 59)) | (1 << (ECMAScriptPassParser.Function - 59)) | (1 << (ECMAScriptPassParser.New - 59)) | (1 << (ECMAScriptPassParser.This - 59)))) !== 0) || ((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (ECMAScriptPassParser.Yield - 94)) | (1 << (ECMAScriptPassParser.Let - 94)) | (1 << (ECMAScriptPassParser.StringLiteral - 94)) | (1 << (ECMAScriptPassParser.IdentifierName - 94)))) !== 0)) {
            this.state = 541;
            this.statementList_Return();
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

function MethodDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_methodDefinition;
    return this;
}

MethodDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodDefinitionContext.prototype.constructor = MethodDefinitionContext;

MethodDefinitionContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

MethodDefinitionContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

MethodDefinitionContext.prototype.uniqueFormalParameters = function() {
    return this.getTypedRuleContext(UniqueFormalParametersContext,0);
};

MethodDefinitionContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

MethodDefinitionContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptPassParser.OpenBrace, 0);
};

MethodDefinitionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

MethodDefinitionContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptPassParser.CloseBrace, 0);
};

MethodDefinitionContext.prototype.propertySetParameterList = function() {
    return this.getTypedRuleContext(PropertySetParameterListContext,0);
};

MethodDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterMethodDefinition(this);
	}
};

MethodDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitMethodDefinition(this);
	}
};




ECMAScriptPassParser.MethodDefinitionContext = MethodDefinitionContext;

ECMAScriptPassParser.prototype.methodDefinition = function() {

    var localctx = new MethodDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, ECMAScriptPassParser.RULE_methodDefinition);
    try {
        this.state = 569;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.StringLiteral:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 544;
            this.propertyName();
            this.state = 545;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 546;
            this.uniqueFormalParameters();
            this.state = 547;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 548;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 549;
            this.functionBody();
            this.state = 550;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;
        case ECMAScriptPassParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 552;
            this.match(ECMAScriptPassParser.T__0);
            this.state = 553;
            this.propertyName();
            this.state = 554;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 555;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 556;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 557;
            this.functionBody();
            this.state = 558;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;
        case ECMAScriptPassParser.T__1:
            this.enterOuterAlt(localctx, 3);
            this.state = 560;
            this.match(ECMAScriptPassParser.T__1);
            this.state = 561;
            this.propertyName();
            this.state = 562;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 563;
            this.propertySetParameterList();
            this.state = 564;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 565;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 566;
            this.functionBody();
            this.state = 567;
            this.match(ECMAScriptPassParser.CloseBrace);
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
    this.ruleIndex = ECMAScriptPassParser.RULE_propertySetParameterList;
    return this;
}

PropertySetParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertySetParameterListContext.prototype.constructor = PropertySetParameterListContext;

PropertySetParameterListContext.prototype.formalParameter = function() {
    return this.getTypedRuleContext(FormalParameterContext,0);
};

PropertySetParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertySetParameterList(this);
	}
};

PropertySetParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertySetParameterList(this);
	}
};




ECMAScriptPassParser.PropertySetParameterListContext = PropertySetParameterListContext;

ECMAScriptPassParser.prototype.propertySetParameterList = function() {

    var localctx = new PropertySetParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, ECMAScriptPassParser.RULE_propertySetParameterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 571;
        this.formalParameter();
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
    this.enterRule(localctx, 136, ECMAScriptPassParser.RULE_reservedWord);
    try {
        this.state = 577;
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
            this.state = 573;
            this.keyword();
            break;
        case ECMAScriptPassParser.Enum:
            this.enterOuterAlt(localctx, 2);
            this.state = 574;
            this.futureReservedWord();
            break;
        case ECMAScriptPassParser.NullLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 575;
            this.match(ECMAScriptPassParser.NullLiteral);
            break;
        case ECMAScriptPassParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 4);
            this.state = 576;
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
    this.enterRule(localctx, 138, ECMAScriptPassParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 579;
        _la = this._input.LA(1);
        if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (ECMAScriptPassParser.Await - 61)) | (1 << (ECMAScriptPassParser.Break - 61)) | (1 << (ECMAScriptPassParser.Case - 61)) | (1 << (ECMAScriptPassParser.Catch - 61)) | (1 << (ECMAScriptPassParser.Class - 61)) | (1 << (ECMAScriptPassParser.Const - 61)) | (1 << (ECMAScriptPassParser.Continue - 61)) | (1 << (ECMAScriptPassParser.Debugger - 61)) | (1 << (ECMAScriptPassParser.Default - 61)) | (1 << (ECMAScriptPassParser.Delete - 61)) | (1 << (ECMAScriptPassParser.Do - 61)) | (1 << (ECMAScriptPassParser.Else - 61)) | (1 << (ECMAScriptPassParser.Export - 61)) | (1 << (ECMAScriptPassParser.Extends - 61)) | (1 << (ECMAScriptPassParser.Finally - 61)) | (1 << (ECMAScriptPassParser.For - 61)) | (1 << (ECMAScriptPassParser.Function - 61)) | (1 << (ECMAScriptPassParser.If - 61)) | (1 << (ECMAScriptPassParser.Import - 61)) | (1 << (ECMAScriptPassParser.In - 61)) | (1 << (ECMAScriptPassParser.Instanceof - 61)) | (1 << (ECMAScriptPassParser.New - 61)) | (1 << (ECMAScriptPassParser.Return - 61)) | (1 << (ECMAScriptPassParser.Super - 61)) | (1 << (ECMAScriptPassParser.Switch - 61)) | (1 << (ECMAScriptPassParser.This - 61)) | (1 << (ECMAScriptPassParser.Throw - 61)) | (1 << (ECMAScriptPassParser.Try - 61)) | (1 << (ECMAScriptPassParser.Typeof - 61)) | (1 << (ECMAScriptPassParser.Var - 61)) | (1 << (ECMAScriptPassParser.Void - 61)) | (1 << (ECMAScriptPassParser.While - 61)))) !== 0) || _la===ECMAScriptPassParser.With || _la===ECMAScriptPassParser.Yield)) {
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
    this.enterRule(localctx, 140, ECMAScriptPassParser.RULE_futureReservedWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 581;
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
	case 11:
			return this.elementList_sempred(localctx, predIndex);
	case 24:
			return this.memberExpression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ECMAScriptPassParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.lineTerminatorAhead();
		case 1:
			return this._input.LT(1).type === ECMAScriptPassParser.EOF;
		case 2:
			return this._input.LT(1).type === ECMAScriptPassParser.CloseBrace;
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptPassParser.prototype.elementList_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptPassParser.prototype.memberExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ECMAScriptPassParser = ECMAScriptPassParser;
