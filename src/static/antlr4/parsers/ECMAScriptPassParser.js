// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptPassListener = require('./ECMAScriptPassListener').ECMAScriptPassListener;
var grammarFileName = "ECMAScriptPass.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003n\u01eb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "A\tA\u0003\u0002\u0005\u0002\u0084\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u008c\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u0091\n\u0004\f\u0004",
    "\u000e\u0004\u0094\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u009a\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u009f\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00aa\n\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0005\n\u00b1\n\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\n\u00b7\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0005\f\u00be\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0005\f\u00c9\n\f\u0003\f\u0003\f\u0005\f\u00cd",
    "\n\f\u0003\r\u0003\r\u0005\r\u00d1\n\r\u0003\r\u0003\r\u0005\r\u00d5",
    "\n\r\u0003\r\u0005\r\u00d8\n\r\u0003\r\u0003\r\u0003\r\u0005\r\u00dd",
    "\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00e3\n\r\u0003\r\u0007",
    "\r\u00e6\n\r\f\r\u000e\r\u00e9\u000b\r\u0003\u000e\u0006\u000e\u00ec",
    "\n\u000e\r\u000e\u000e\u000e\u00ed\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00f8\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00fc\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u0101\n\u0011\f\u0011\u000e",
    "\u0011\u0104\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u010b\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0118\n\u0016\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u011c\n\u0016\u0003\u0017\u0005\u0017\u011f",
    "\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0124\n\u0017",
    "\u0003\u0017\u0007\u0017\u0127\n\u0017\f\u0017\u000e\u0017\u012a\u000b",
    "\u0017\u0003\u0018\u0003\u0018\u0005\u0018\u012e\n\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0005\u001d\u0143\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u014e\n\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0005",
    " \u0155\n \u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0006\"\u015c\n\"\r",
    "\"\u000e\"\u015d\u0003#\u0003#\u0003#\u0006#\u0163\n#\r#\u000e#\u0164",
    "\u0003$\u0003$\u0005$\u0169\n$\u0003%\u0003%\u0005%\u016d\n%\u0003&",
    "\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0005)\u0177\n)",
    "\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003,\u0003",
    ",\u0003-\u0003-\u0003-\u0007-\u0186\n-\f-\u000e-\u0189\u000b-\u0003",
    ".\u0003.\u0003.\u0007.\u018e\n.\f.\u000e.\u0191\u000b.\u0003/\u0003",
    "/\u0005/\u0195\n/\u00030\u00030\u00050\u0199\n0\u00031\u00031\u0005",
    "1\u019d\n1\u00032\u00032\u00033\u00033\u00033\u00033\u00053\u01a5\n",
    "3\u00033\u00033\u00053\u01a9\n3\u00033\u00033\u00033\u00034\u00034\u0003",
    "4\u00035\u00035\u00036\u00036\u00037\u00037\u00037\u00037\u00037\u0003",
    "7\u00037\u00037\u00037\u00038\u00038\u00058\u01c0\n8\u00038\u00038\u0003",
    "8\u00038\u00038\u00038\u00038\u00039\u00039\u0003:\u0003:\u0003:\u0005",
    ":\u01ce\n:\u0005:\u01d0\n:\u0003;\u0003;\u0003;\u0007;\u01d5\n;\f;\u000e",
    ";\u01d8\u000b;\u0003<\u0003<\u0003=\u0003=\u0003>\u0005>\u01df\n>\u0003",
    "?\u0003?\u0003?\u0003?\u0005?\u01e5\n?\u0003@\u0003@\u0003A\u0003A\u0003",
    "A\u0002\u0003\u0018B\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd",
    "fhjlnprtvxz|~\u0080\u0002\u0007\u0005\u0002\u0003\u0003;<ee\u0005\u0002",
    "\u0003\u0003eeii\u0004\u0002*488\u0004\u0002BBdd\u0003\u0002=^\u0002",
    "\u01eb\u0002\u0083\u0003\u0002\u0002\u0002\u0004\u008b\u0003\u0002\u0002",
    "\u0002\u0006\u008d\u0003\u0002\u0002\u0002\b\u0099\u0003\u0002\u0002",
    "\u0002\n\u009e\u0003\u0002\u0002\u0002\f\u00a0\u0003\u0002\u0002\u0002",
    "\u000e\u00a9\u0003\u0002\u0002\u0002\u0010\u00ab\u0003\u0002\u0002\u0002",
    "\u0012\u00b6\u0003\u0002\u0002\u0002\u0014\u00b8\u0003\u0002\u0002\u0002",
    "\u0016\u00cc\u0003\u0002\u0002\u0002\u0018\u00d7\u0003\u0002\u0002\u0002",
    "\u001a\u00eb\u0003\u0002\u0002\u0002\u001c\u00ef\u0003\u0002\u0002\u0002",
    "\u001e\u00fb\u0003\u0002\u0002\u0002 \u00fd\u0003\u0002\u0002\u0002",
    "\"\u010a\u0003\u0002\u0002\u0002$\u010c\u0003\u0002\u0002\u0002&\u010e",
    "\u0003\u0002\u0002\u0002(\u0110\u0003\u0002\u0002\u0002*\u011b\u0003",
    "\u0002\u0002\u0002,\u011e\u0003\u0002\u0002\u0002.\u012d\u0003\u0002",
    "\u0002\u00020\u012f\u0003\u0002\u0002\u00022\u0131\u0003\u0002\u0002",
    "\u00024\u0133\u0003\u0002\u0002\u00026\u0136\u0003\u0002\u0002\u0002",
    "8\u0142\u0003\u0002\u0002\u0002:\u014d\u0003\u0002\u0002\u0002<\u014f",
    "\u0003\u0002\u0002\u0002>\u0154\u0003\u0002\u0002\u0002@\u0156\u0003",
    "\u0002\u0002\u0002B\u015b\u0003\u0002\u0002\u0002D\u0162\u0003\u0002",
    "\u0002\u0002F\u0168\u0003\u0002\u0002\u0002H\u016c\u0003\u0002\u0002",
    "\u0002J\u016e\u0003\u0002\u0002\u0002L\u0170\u0003\u0002\u0002\u0002",
    "N\u0172\u0003\u0002\u0002\u0002P\u0174\u0003\u0002\u0002\u0002R\u0178",
    "\u0003\u0002\u0002\u0002T\u017c\u0003\u0002\u0002\u0002V\u0180\u0003",
    "\u0002\u0002\u0002X\u0182\u0003\u0002\u0002\u0002Z\u018a\u0003\u0002",
    "\u0002\u0002\\\u0192\u0003\u0002\u0002\u0002^\u0196\u0003\u0002\u0002",
    "\u0002`\u019c\u0003\u0002\u0002\u0002b\u019e\u0003\u0002\u0002\u0002",
    "d\u01a0\u0003\u0002\u0002\u0002f\u01ad\u0003\u0002\u0002\u0002h\u01b0",
    "\u0003\u0002\u0002\u0002j\u01b2\u0003\u0002\u0002\u0002l\u01b4\u0003",
    "\u0002\u0002\u0002n\u01bd\u0003\u0002\u0002\u0002p\u01c8\u0003\u0002",
    "\u0002\u0002r\u01cf\u0003\u0002\u0002\u0002t\u01d1\u0003\u0002\u0002",
    "\u0002v\u01d9\u0003\u0002\u0002\u0002x\u01db\u0003\u0002\u0002\u0002",
    "z\u01de\u0003\u0002\u0002\u0002|\u01e4\u0003\u0002\u0002\u0002~\u01e6",
    "\u0003\u0002\u0002\u0002\u0080\u01e8\u0003\u0002\u0002\u0002\u0082\u0084",
    "\u0005B\"\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0083\u0084\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\u0007",
    "\u0002\u0002\u0003\u0086\u0003\u0003\u0002\u0002\u0002\u0087\u008c\u0007",
    "\f\u0002\u0002\u0088\u008c\u0006\u0003\u0002\u0002\u0089\u008c\u0006",
    "\u0003\u0003\u0002\u008a\u008c\u0006\u0003\u0004\u0002\u008b\u0087\u0003",
    "\u0002\u0002\u0002\u008b\u0088\u0003\u0002\u0002\u0002\u008b\u0089\u0003",
    "\u0002\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c\u0005\u0003",
    "\u0002\u0002\u0002\u008d\u0092\u0005:\u001e\u0002\u008e\u008f\u0007",
    "\r\u0002\u0002\u008f\u0091\u0005:\u001e\u0002\u0090\u008e\u0003\u0002",
    "\u0002\u0002\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0007\u0003\u0002",
    "\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u009a\u0005\f",
    "\u0007\u0002\u0096\u009a\u0007^\u0002\u0002\u0097\u0098\u0007=\u0002",
    "\u0002\u0098\u009a\u0007\u0018\u0002\u0002\u0099\u0095\u0003\u0002\u0002",
    "\u0002\u0099\u0096\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002",
    "\u0002\u009a\t\u0003\u0002\u0002\u0002\u009b\u009f\u0005\f\u0007\u0002",
    "\u009c\u009f\u0007^\u0002\u0002\u009d\u009f\u0007=\u0002\u0002\u009e",
    "\u009b\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e",
    "\u009d\u0003\u0002\u0002\u0002\u009f\u000b\u0003\u0002\u0002\u0002\u00a0",
    "\u00a1\u0007i\u0002\u0002\u00a1\r\u0003\u0002\u0002\u0002\u00a2\u00aa",
    "\u0005\b\u0005\u0002\u00a3\u00aa\u0005\u0010\t\u0002\u00a4\u00aa\u0005",
    "\u0016\f\u0002\u00a5\u00aa\u0005\u001e\u0010\u0002\u00a6\u00aa\u0005",
    "n8\u0002\u00a7\u00aa\u0007\u0004\u0002\u0002\u00a8\u00aa\u0005\u0012",
    "\n\u0002\u00a9\u00a2\u0003\u0002\u0002\u0002\u00a9\u00a3\u0003\u0002",
    "\u0002\u0002\u00a9\u00a4\u0003\u0002\u0002\u0002\u00a9\u00a5\u0003\u0002",
    "\u0002\u0002\u00a9\u00a6\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002",
    "\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002\u00aa\u000f\u0003\u0002",
    "\u0002\u0002\u00ab\u00ac\t\u0002\u0002\u0002\u00ac\u0011\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0007\u0006\u0002\u0002\u00ae\u00b0\u0005\u0006",
    "\u0004\u0002\u00af\u00b1\u0007\r\u0002\u0002\u00b0\u00af\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002",
    "\u0002\u0002\u00b2\u00b3\u0007\u0007\u0002\u0002\u00b3\u00b7\u0003\u0002",
    "\u0002\u0002\u00b4\u00b5\u0007\u0006\u0002\u0002\u00b5\u00b7\u0007\u0007",
    "\u0002\u0002\u00b6\u00ad\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002",
    "\u0002\u0002\u00b7\u0013\u0003\u0002\u0002\u0002\u00b8\u00b9\u00052",
    "\u001a\u0002\u00b9\u00ba\u0005*\u0016\u0002\u00ba\u0015\u0003\u0002",
    "\u0002\u0002\u00bb\u00bd\u0007\b\u0002\u0002\u00bc\u00be\u0005\u001a",
    "\u000e\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002",
    "\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf\u00cd\u0007\t",
    "\u0002\u0002\u00c0\u00c1\u0007\b\u0002\u0002\u00c1\u00c2\u0005\u0018",
    "\r\u0002\u00c2\u00c3\u0007\t\u0002\u0002\u00c3\u00cd\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0007\b\u0002\u0002\u00c5\u00c6\u0005\u0018\r\u0002",
    "\u00c6\u00c8\u0007\r\u0002\u0002\u00c7\u00c9\u0005\u001a\u000e\u0002",
    "\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\t\u0002\u0002",
    "\u00cb\u00cd\u0003\u0002\u0002\u0002\u00cc\u00bb\u0003\u0002\u0002\u0002",
    "\u00cc\u00c0\u0003\u0002\u0002\u0002\u00cc\u00c4\u0003\u0002\u0002\u0002",
    "\u00cd\u0017\u0003\u0002\u0002\u0002\u00ce\u00d0\b\r\u0001\u0002\u00cf",
    "\u00d1\u0005\u001a\u000e\u0002\u00d0\u00cf\u0003\u0002\u0002\u0002\u00d0",
    "\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2",
    "\u00d8\u0005:\u001e\u0002\u00d3\u00d5\u0005\u001a\u000e\u0002\u00d4",
    "\u00d3\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d8\u0005\u001c\u000f\u0002\u00d7",
    "\u00ce\u0003\u0002\u0002\u0002\u00d7\u00d4\u0003\u0002\u0002\u0002\u00d8",
    "\u00e7\u0003\u0002\u0002\u0002\u00d9\u00da\f\u0004\u0002\u0002\u00da",
    "\u00dc\u0007\r\u0002\u0002\u00db\u00dd\u0005\u001a\u000e\u0002\u00dc",
    "\u00db\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0003\u0002\u0002\u0002\u00de\u00e6\u0005:\u001e\u0002\u00df",
    "\u00e0\f\u0003\u0002\u0002\u00e0\u00e2\u0007\r\u0002\u0002\u00e1\u00e3",
    "\u0005\u001a\u000e\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e2\u00e3",
    "\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6",
    "\u0005\u001c\u000f\u0002\u00e5\u00d9\u0003\u0002\u0002\u0002\u00e5\u00df",
    "\u0003\u0002\u0002\u0002\u00e6\u00e9\u0003\u0002\u0002\u0002\u00e7\u00e5",
    "\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u0019",
    "\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00ea\u00ec",
    "\u0007\r\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed",
    "\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0003\u0002\u0002\u0002\u00ee\u001b\u0003\u0002\u0002\u0002\u00ef\u00f0",
    "\u0007\u000b\u0002\u0002\u00f0\u00f1\u0005:\u001e\u0002\u00f1\u001d",
    "\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007\u0005\u0002\u0002\u00f3\u00fc",
    "\u0007:\u0002\u0002\u00f4\u00f5\u0007\u0005\u0002\u0002\u00f5\u00f7",
    "\u0005 \u0011\u0002\u00f6\u00f8\u0007\r\u0002\u0002\u00f7\u00f6\u0003",
    "\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003",
    "\u0002\u0002\u0002\u00f9\u00fa\u0007:\u0002\u0002\u00fa\u00fc\u0003",
    "\u0002\u0002\u0002\u00fb\u00f2\u0003\u0002\u0002\u0002\u00fb\u00f4\u0003",
    "\u0002\u0002\u0002\u00fc\u001f\u0003\u0002\u0002\u0002\u00fd\u0102\u0005",
    "\"\u0012\u0002\u00fe\u00ff\u0007\r\u0002\u0002\u00ff\u0101\u0005\"\u0012",
    "\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0101\u0104\u0003\u0002\u0002",
    "\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002",
    "\u0002\u0103!\u0003\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002",
    "\u0002\u0105\u010b\u0005\b\u0005\u0002\u0106\u0107\u0005$\u0013\u0002",
    "\u0107\u0108\u0007(\u0002\u0002\u0108\u0109\u0005:\u001e\u0002\u0109",
    "\u010b\u0003\u0002\u0002\u0002\u010a\u0105\u0003\u0002\u0002\u0002\u010a",
    "\u0106\u0003\u0002\u0002\u0002\u010b#\u0003\u0002\u0002\u0002\u010c",
    "\u010d\u0005&\u0014\u0002\u010d%\u0003\u0002\u0002\u0002\u010e\u010f",
    "\t\u0003\u0002\u0002\u010f\'\u0003\u0002\u0002\u0002\u0110\u0111\u0005",
    "\u0014\u000b\u0002\u0111)\u0003\u0002\u0002\u0002\u0112\u0113\u0007",
    "\u0006\u0002\u0002\u0113\u011c\u0007\u0007\u0002\u0002\u0114\u0115\u0007",
    "\u0006\u0002\u0002\u0115\u0117\u0005,\u0017\u0002\u0116\u0118\u0007",
    "\r\u0002\u0002\u0117\u0116\u0003\u0002\u0002\u0002\u0117\u0118\u0003",
    "\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011a\u0007",
    "\u0007\u0002\u0002\u011a\u011c\u0003\u0002\u0002\u0002\u011b\u0112\u0003",
    "\u0002\u0002\u0002\u011b\u0114\u0003\u0002\u0002\u0002\u011c+\u0003",
    "\u0002\u0002\u0002\u011d\u011f\u0007\u000b\u0002\u0002\u011e\u011d\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u0120\u0003",
    "\u0002\u0002\u0002\u0120\u0128\u0005:\u001e\u0002\u0121\u0123\u0007",
    "\r\u0002\u0002\u0122\u0124\u0007\u000b\u0002\u0002\u0123\u0122\u0003",
    "\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0125\u0003",
    "\u0002\u0002\u0002\u0125\u0127\u0005:\u001e\u0002\u0126\u0121\u0003",
    "\u0002\u0002\u0002\u0127\u012a\u0003\u0002\u0002\u0002\u0128\u0126\u0003",
    "\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129-\u0003",
    "\u0002\u0002\u0002\u012a\u0128\u0003\u0002\u0002\u0002\u012b\u012e\u0005",
    "(\u0015\u0002\u012c\u012e\u00050\u0019\u0002\u012d\u012b\u0003\u0002",
    "\u0002\u0002\u012d\u012c\u0003\u0002\u0002\u0002\u012e/\u0003\u0002",
    "\u0002\u0002\u012f\u0130\u00052\u001a\u0002\u01301\u0003\u0002\u0002",
    "\u0002\u0131\u0132\u0005\u000e\b\u0002\u01323\u0003\u0002\u0002\u0002",
    "\u0133\u0134\u0007)\u0002\u0002\u0134\u0135\u00058\u001d\u0002\u0135",
    "5\u0003\u0002\u0002\u0002\u0136\u0137\u0007)\u0002\u0002\u0137\u0138",
    "\u0005:\u001e\u0002\u01387\u0003\u0002\u0002\u0002\u0139\u013a\u0005",
    ".\u0018\u0002\u013a\u013b\u0007)\u0002\u0002\u013b\u013c\u00058\u001d",
    "\u0002\u013c\u0143\u0003\u0002\u0002\u0002\u013d\u013e\u0005.\u0018",
    "\u0002\u013e\u013f\u0005<\u001f\u0002\u013f\u0140\u00058\u001d\u0002",
    "\u0140\u0143\u0003\u0002\u0002\u0002\u0141\u0143\u0005.\u0018\u0002",
    "\u0142\u0139\u0003\u0002\u0002\u0002\u0142\u013d\u0003\u0002\u0002\u0002",
    "\u0142\u0141\u0003\u0002\u0002\u0002\u01439\u0003\u0002\u0002\u0002",
    "\u0144\u0145\u0005.\u0018\u0002\u0145\u0146\u0007)\u0002\u0002\u0146",
    "\u0147\u0005:\u001e\u0002\u0147\u014e\u0003\u0002\u0002\u0002\u0148",
    "\u0149\u0005.\u0018\u0002\u0149\u014a\u0005<\u001f\u0002\u014a\u014b",
    "\u0005:\u001e\u0002\u014b\u014e\u0003\u0002\u0002\u0002\u014c\u014e",
    "\u0005.\u0018\u0002\u014d\u0144\u0003\u0002\u0002\u0002\u014d\u0148",
    "\u0003\u0002\u0002\u0002\u014d\u014c\u0003\u0002\u0002\u0002\u014e;",
    "\u0003\u0002\u0002\u0002\u014f\u0150\t\u0004\u0002\u0002\u0150=\u0003",
    "\u0002\u0002\u0002\u0151\u0155\u0005J&\u0002\u0152\u0155\u0005L\'\u0002",
    "\u0153\u0155\u0005j6\u0002\u0154\u0151\u0003\u0002\u0002\u0002\u0154",
    "\u0152\u0003\u0002\u0002\u0002\u0154\u0153\u0003\u0002\u0002\u0002\u0155",
    "?\u0003\u0002\u0002\u0002\u0156\u0157\u0005L\'\u0002\u0157A\u0003\u0002",
    "\u0002\u0002\u0158\u0159\u0005F$\u0002\u0159\u015a\u0005\u0004\u0003",
    "\u0002\u015a\u015c\u0003\u0002\u0002\u0002\u015b\u0158\u0003\u0002\u0002",
    "\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d\u015b\u0003\u0002\u0002",
    "\u0002\u015d\u015e\u0003\u0002\u0002\u0002\u015eC\u0003\u0002\u0002",
    "\u0002\u015f\u0160\u0005H%\u0002\u0160\u0161\u0005\u0004\u0003\u0002",
    "\u0161\u0163\u0003\u0002\u0002\u0002\u0162\u015f\u0003\u0002\u0002\u0002",
    "\u0163\u0164\u0003\u0002\u0002\u0002\u0164\u0162\u0003\u0002\u0002\u0002",
    "\u0164\u0165\u0003\u0002\u0002\u0002\u0165E\u0003\u0002\u0002\u0002",
    "\u0166\u0169\u0005> \u0002\u0167\u0169\u0005`1\u0002\u0168\u0166\u0003",
    "\u0002\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002\u0169G\u0003",
    "\u0002\u0002\u0002\u016a\u016d\u0005@!\u0002\u016b\u016d\u0005`1\u0002",
    "\u016c\u016a\u0003\u0002\u0002\u0002\u016c\u016b\u0003\u0002\u0002\u0002",
    "\u016dI\u0003\u0002\u0002\u0002\u016e\u016f\u0007\f\u0002\u0002\u016f",
    "K\u0003\u0002\u0002\u0002\u0170\u0171\u0005\u0006\u0004\u0002\u0171",
    "M\u0003\u0002\u0002\u0002\u0172\u0173\u0005P)\u0002\u0173O\u0003\u0002",
    "\u0002\u0002\u0174\u0176\u0005\n\u0006\u0002\u0175\u0177\u00056\u001c",
    "\u0002\u0176\u0175\u0003\u0002\u0002\u0002\u0176\u0177\u0003\u0002\u0002",
    "\u0002\u0177Q\u0003\u0002\u0002\u0002\u0178\u0179\u0005V,\u0002\u0179",
    "\u017a\u0005X-\u0002\u017a\u017b\u0007\f\u0002\u0002\u017bS\u0003\u0002",
    "\u0002\u0002\u017c\u017d\u0005V,\u0002\u017d\u017e\u0005Z.\u0002\u017e",
    "\u017f\u0007\f\u0002\u0002\u017fU\u0003\u0002\u0002\u0002\u0180\u0181",
    "\t\u0005\u0002\u0002\u0181W\u0003\u0002\u0002\u0002\u0182\u0187\u0005",
    "\\/\u0002\u0183\u0184\u0007\r\u0002\u0002\u0184\u0186\u0005\\/\u0002",
    "\u0185\u0183\u0003\u0002\u0002\u0002\u0186\u0189\u0003\u0002\u0002\u0002",
    "\u0187\u0185\u0003\u0002\u0002\u0002\u0187\u0188\u0003\u0002\u0002\u0002",
    "\u0188Y\u0003\u0002\u0002\u0002\u0189\u0187\u0003\u0002\u0002\u0002",
    "\u018a\u018f\u0005^0\u0002\u018b\u018c\u0007\r\u0002\u0002\u018c\u018e",
    "\u0005^0\u0002\u018d\u018b\u0003\u0002\u0002\u0002\u018e\u0191\u0003",
    "\u0002\u0002\u0002\u018f\u018d\u0003\u0002\u0002\u0002\u018f\u0190\u0003",
    "\u0002\u0002\u0002\u0190[\u0003\u0002\u0002\u0002\u0191\u018f\u0003",
    "\u0002\u0002\u0002\u0192\u0194\u0005\n\u0006\u0002\u0193\u0195\u0005",
    "4\u001b\u0002\u0194\u0193\u0003\u0002\u0002\u0002\u0194\u0195\u0003",
    "\u0002\u0002\u0002\u0195]\u0003\u0002\u0002\u0002\u0196\u0198\u0005",
    "\n\u0006\u0002\u0197\u0199\u00056\u001c\u0002\u0198\u0197\u0003\u0002",
    "\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0199_\u0003\u0002",
    "\u0002\u0002\u019a\u019d\u0005b2\u0002\u019b\u019d\u0005T+\u0002\u019c",
    "\u019a\u0003\u0002\u0002\u0002\u019c\u019b\u0003\u0002\u0002\u0002\u019d",
    "a\u0003\u0002\u0002\u0002\u019e\u019f\u0005l7\u0002\u019fc\u0003\u0002",
    "\u0002\u0002\u01a0\u01a1\u0007L\u0002\u0002\u01a1\u01a2\u0007\u0006",
    "\u0002\u0002\u01a2\u01a4\u0005R*\u0002\u01a3\u01a5\u0005\u0006\u0004",
    "\u0002\u01a4\u01a3\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003\u0002\u0002",
    "\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6\u01a8\u0007\f\u0002",
    "\u0002\u01a7\u01a9\u0005\u0006\u0004\u0002\u01a8\u01a7\u0003\u0002\u0002",
    "\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002",
    "\u0002\u01aa\u01ab\u0007\u0007\u0002\u0002\u01ab\u01ac\u0005> \u0002",
    "\u01ace\u0003\u0002\u0002\u0002\u01ad\u01ae\u0005V,\u0002\u01ae\u01af",
    "\u0005h5\u0002\u01afg\u0003\u0002\u0002\u0002\u01b0\u01b1\u0005\n\u0006",
    "\u0002\u01b1i\u0003\u0002\u0002\u0002\u01b2\u01b3\u0005d3\u0002\u01b3",
    "k\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007M\u0002\u0002\u01b5\u01b6",
    "\u0005\n\u0006\u0002\u01b6\u01b7\u0007\u0006\u0002\u0002\u01b7\u01b8",
    "\u0005r:\u0002\u01b8\u01b9\u0007\u0007\u0002\u0002\u01b9\u01ba\u0007",
    "\u0005\u0002\u0002\u01ba\u01bb\u0005x=\u0002\u01bb\u01bc\u0007:\u0002",
    "\u0002\u01bcm\u0003\u0002\u0002\u0002\u01bd\u01bf\u0007M\u0002\u0002",
    "\u01be\u01c0\u0005\n\u0006\u0002\u01bf\u01be\u0003\u0002\u0002\u0002",
    "\u01bf\u01c0\u0003\u0002\u0002\u0002\u01c0\u01c1\u0003\u0002\u0002\u0002",
    "\u01c1\u01c2\u0007\u0006\u0002\u0002\u01c2\u01c3\u0005r:\u0002\u01c3",
    "\u01c4\u0007\u0007\u0002\u0002\u01c4\u01c5\u0007\u0005\u0002\u0002\u01c5",
    "\u01c6\u0005x=\u0002\u01c6\u01c7\u0007:\u0002\u0002\u01c7o\u0003\u0002",
    "\u0002\u0002\u01c8\u01c9\u0005r:\u0002\u01c9q\u0003\u0002\u0002\u0002",
    "\u01ca\u01d0\u0003\u0002\u0002\u0002\u01cb\u01cd\u0005t;\u0002\u01cc",
    "\u01ce\u0007\r\u0002\u0002\u01cd\u01cc\u0003\u0002\u0002\u0002\u01cd",
    "\u01ce\u0003\u0002\u0002\u0002\u01ce\u01d0\u0003\u0002\u0002\u0002\u01cf",
    "\u01ca\u0003\u0002\u0002\u0002\u01cf\u01cb\u0003\u0002\u0002\u0002\u01d0",
    "s\u0003\u0002\u0002\u0002\u01d1\u01d6\u0005v<\u0002\u01d2\u01d3\u0007",
    "\r\u0002\u0002\u01d3\u01d5\u0005v<\u0002\u01d4\u01d2\u0003\u0002\u0002",
    "\u0002\u01d5\u01d8\u0003\u0002\u0002\u0002\u01d6\u01d4\u0003\u0002\u0002",
    "\u0002\u01d6\u01d7\u0003\u0002\u0002\u0002\u01d7u\u0003\u0002\u0002",
    "\u0002\u01d8\u01d6\u0003\u0002\u0002\u0002\u01d9\u01da\u0005N(\u0002",
    "\u01daw\u0003\u0002\u0002\u0002\u01db\u01dc\u0005z>\u0002\u01dcy\u0003",
    "\u0002\u0002\u0002\u01dd\u01df\u0005D#\u0002\u01de\u01dd\u0003\u0002",
    "\u0002\u0002\u01de\u01df\u0003\u0002\u0002\u0002\u01df{\u0003\u0002",
    "\u0002\u0002\u01e0\u01e5\u0005~@\u0002\u01e1\u01e5\u0005\u0080A\u0002",
    "\u01e2\u01e5\u0007;\u0002\u0002\u01e3\u01e5\u0007<\u0002\u0002\u01e4",
    "\u01e0\u0003\u0002\u0002\u0002\u01e4\u01e1\u0003\u0002\u0002\u0002\u01e4",
    "\u01e2\u0003\u0002\u0002\u0002\u01e4\u01e3\u0003\u0002\u0002\u0002\u01e5",
    "}\u0003\u0002\u0002\u0002\u01e6\u01e7\t\u0006\u0002\u0002\u01e7\u007f",
    "\u0003\u0002\u0002\u0002\u01e8\u01e9\u0007_\u0002\u0002\u01e9\u0081",
    "\u0003\u0002\u0002\u00024\u0083\u008b\u0092\u0099\u009e\u00a9\u00b0",
    "\u00b6\u00bd\u00c8\u00cc\u00d0\u00d4\u00d7\u00dc\u00e2\u00e5\u00e7\u00ed",
    "\u00f7\u00fb\u0102\u010a\u0117\u011b\u011e\u0123\u0128\u012d\u0142\u014d",
    "\u0154\u015d\u0164\u0168\u016c\u0176\u0187\u018f\u0194\u0198\u019c\u01a4",
    "\u01a8\u01bf\u01cd\u01cf\u01d6\u01de\u01e4"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'{'", "'('", "')'", "'['", "']'", 
                     "'.'", "'...'", "';'", "','", "'<'", "'>'", "'<='", 
                     "'>='", "'=='", "'!='", "'==='", "'!=='", "'+'", "'-'", 
                     "'*'", "'%'", "'**'", "'++'", "'--'", "'<<'", "'>>'", 
                     "'>>>'", "'&'", "'|'", "'^'", "'!'", "'~'", "'&&'", 
                     "'||'", "'?'", "':'", "'='", "'+='", "'-='", "'*='", 
                     "'%='", "'**='", "'<<='", "'>>='", "'>>>='", "'&='", 
                     "'|='", "'^='", "'=>'", null, "'/'", "'/='", null, 
                     "'}'", null, null, "'await'", "'break'", "'case'", 
                     "'catch'", "'class'", "'const'", "'continue'", "'debugger'", 
                     "'default'", "'delete'", "'do'", "'else'", "'export'", 
                     "'extends'", "'finally'", "'for'", "'function'", "'if'", 
                     "'import'", "'in'", "'instanceof'", "'new'", "'return'", 
                     "'super'", "'switch'", "'this'", "'throw'", "'try'", 
                     "'typeof'", "'var'", "'void'", "'while'", "'with'", 
                     "'yield'", "'enum'", "'null'", "'true'", "'false'", 
                     "'async'", "'let'" ];

var symbolicNames = [ null, "NumericLiteral", "RegularExpressionLiteral", 
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
                   "functionDeclaration", "functionExpression", "uniqueFormalParameters", 
                   "formalParameters", "formalParameterList", "formalParameter", 
                   "functionBody", "functionStatementList", "reservedWord", 
                   "keyword", "futureReservedWord" ];

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
ECMAScriptPassParser.NumericLiteral = 1;
ECMAScriptPassParser.RegularExpressionLiteral = 2;
ECMAScriptPassParser.OpenBrace = 3;
ECMAScriptPassParser.OpenParen = 4;
ECMAScriptPassParser.CloseParen = 5;
ECMAScriptPassParser.OpenBracket = 6;
ECMAScriptPassParser.CloseBracket = 7;
ECMAScriptPassParser.Dot = 8;
ECMAScriptPassParser.Spread = 9;
ECMAScriptPassParser.SemiColon = 10;
ECMAScriptPassParser.Comma = 11;
ECMAScriptPassParser.LessThan = 12;
ECMAScriptPassParser.GreaterThan = 13;
ECMAScriptPassParser.LessThanEquals = 14;
ECMAScriptPassParser.GreaterThanEquals = 15;
ECMAScriptPassParser.Equals = 16;
ECMAScriptPassParser.NotEquals = 17;
ECMAScriptPassParser.IdentityEquals = 18;
ECMAScriptPassParser.IdentityNotEquals = 19;
ECMAScriptPassParser.Plus = 20;
ECMAScriptPassParser.Minus = 21;
ECMAScriptPassParser.Multiply = 22;
ECMAScriptPassParser.Modulo = 23;
ECMAScriptPassParser.Power = 24;
ECMAScriptPassParser.PlusPlus = 25;
ECMAScriptPassParser.MinusMinus = 26;
ECMAScriptPassParser.LeftShiftArithmetic = 27;
ECMAScriptPassParser.RightShiftArithmetic = 28;
ECMAScriptPassParser.RightShiftLogical = 29;
ECMAScriptPassParser.BitAnd = 30;
ECMAScriptPassParser.BitOr = 31;
ECMAScriptPassParser.BitXOr = 32;
ECMAScriptPassParser.Not = 33;
ECMAScriptPassParser.BitNot = 34;
ECMAScriptPassParser.And = 35;
ECMAScriptPassParser.Or = 36;
ECMAScriptPassParser.QuestionMark = 37;
ECMAScriptPassParser.Colon = 38;
ECMAScriptPassParser.Assign = 39;
ECMAScriptPassParser.PlusAssign = 40;
ECMAScriptPassParser.MinusAssign = 41;
ECMAScriptPassParser.MultiplyAssign = 42;
ECMAScriptPassParser.ModuloAssign = 43;
ECMAScriptPassParser.PowerAssign = 44;
ECMAScriptPassParser.LeftShiftArithmeticAssign = 45;
ECMAScriptPassParser.RightShiftArithmeticAssign = 46;
ECMAScriptPassParser.RightShiftLogicalAssign = 47;
ECMAScriptPassParser.BitAndAssign = 48;
ECMAScriptPassParser.BitOrAssign = 49;
ECMAScriptPassParser.BitXorAssign = 50;
ECMAScriptPassParser.FatArrow = 51;
ECMAScriptPassParser.Punctuator = 52;
ECMAScriptPassParser.Divide = 53;
ECMAScriptPassParser.DivideAssign = 54;
ECMAScriptPassParser.DivPunctuator = 55;
ECMAScriptPassParser.CloseBrace = 56;
ECMAScriptPassParser.NullLiteral = 57;
ECMAScriptPassParser.BooleanLiteral = 58;
ECMAScriptPassParser.Await = 59;
ECMAScriptPassParser.Break = 60;
ECMAScriptPassParser.Case = 61;
ECMAScriptPassParser.Catch = 62;
ECMAScriptPassParser.Class = 63;
ECMAScriptPassParser.Const = 64;
ECMAScriptPassParser.Continue = 65;
ECMAScriptPassParser.Debugger = 66;
ECMAScriptPassParser.Default = 67;
ECMAScriptPassParser.Delete = 68;
ECMAScriptPassParser.Do = 69;
ECMAScriptPassParser.Else = 70;
ECMAScriptPassParser.Export = 71;
ECMAScriptPassParser.Extends = 72;
ECMAScriptPassParser.Finally = 73;
ECMAScriptPassParser.For = 74;
ECMAScriptPassParser.Function = 75;
ECMAScriptPassParser.If = 76;
ECMAScriptPassParser.Import = 77;
ECMAScriptPassParser.In = 78;
ECMAScriptPassParser.Instanceof = 79;
ECMAScriptPassParser.New = 80;
ECMAScriptPassParser.Return = 81;
ECMAScriptPassParser.Super = 82;
ECMAScriptPassParser.Switch = 83;
ECMAScriptPassParser.This = 84;
ECMAScriptPassParser.Throw = 85;
ECMAScriptPassParser.Try = 86;
ECMAScriptPassParser.Typeof = 87;
ECMAScriptPassParser.Var = 88;
ECMAScriptPassParser.Void = 89;
ECMAScriptPassParser.While = 90;
ECMAScriptPassParser.With = 91;
ECMAScriptPassParser.Yield = 92;
ECMAScriptPassParser.Enum = 93;
ECMAScriptPassParser.Null = 94;
ECMAScriptPassParser.True = 95;
ECMAScriptPassParser.False = 96;
ECMAScriptPassParser.Async = 97;
ECMAScriptPassParser.Let = 98;
ECMAScriptPassParser.StringLiteral = 99;
ECMAScriptPassParser.BinaryIntegerLiteral = 100;
ECMAScriptPassParser.OctalIntegerLiteral = 101;
ECMAScriptPassParser.HexIntegerLiteral = 102;
ECMAScriptPassParser.IdentifierName = 103;
ECMAScriptPassParser.MultiLineComment = 104;
ECMAScriptPassParser.SingleLineComment = 105;
ECMAScriptPassParser.WhiteSpace = 106;
ECMAScriptPassParser.LineTerminator = 107;
ECMAScriptPassParser.LineTerminatorSequence = 108;

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
ECMAScriptPassParser.RULE_functionDeclaration = 53;
ECMAScriptPassParser.RULE_functionExpression = 54;
ECMAScriptPassParser.RULE_uniqueFormalParameters = 55;
ECMAScriptPassParser.RULE_formalParameters = 56;
ECMAScriptPassParser.RULE_formalParameterList = 57;
ECMAScriptPassParser.RULE_formalParameter = 58;
ECMAScriptPassParser.RULE_functionBody = 59;
ECMAScriptPassParser.RULE_functionStatementList = 60;
ECMAScriptPassParser.RULE_reservedWord = 61;
ECMAScriptPassParser.RULE_keyword = 62;
ECMAScriptPassParser.RULE_futureReservedWord = 63;

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
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.SemiColon))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (ECMAScriptPassParser.NullLiteral - 57)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 57)) | (1 << (ECMAScriptPassParser.Await - 57)) | (1 << (ECMAScriptPassParser.Const - 57)) | (1 << (ECMAScriptPassParser.For - 57)) | (1 << (ECMAScriptPassParser.Function - 57)))) !== 0) || ((((_la - 92)) & ~0x1f) == 0 && ((1 << (_la - 92)) & ((1 << (ECMAScriptPassParser.Yield - 92)) | (1 << (ECMAScriptPassParser.Let - 92)) | (1 << (ECMAScriptPassParser.StringLiteral - 92)) | (1 << (ECMAScriptPassParser.IdentifierName - 92)))) !== 0)) {
            this.state = 128;
            this.statementList();
        }

        this.state = 131;
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
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.match(ECMAScriptPassParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
            if (!( this.lineTerminatorAhead())) {
                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 135;
            if (!( this._input.LT(1).type === ECMAScriptPassParser.EOF)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type === ECMAScriptPassParser.EOF");
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 136;
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
        this.state = 139;
        this.assignmentExpression_In();
        this.state = 144;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 140;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 141;
                this.assignmentExpression_In(); 
            }
            this.state = 146;
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
        this.state = 151;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 147;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 148;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 149;
            this.match(ECMAScriptPassParser.Await);
            this.state = 150;
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
        this.state = 156;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 153;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 154;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 155;
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
        this.state = 158;
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
        this.state = 167;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 160;
            this.identifierReference();
            break;
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 161;
            this.literal();
            break;
        case ECMAScriptPassParser.OpenBracket:
            this.enterOuterAlt(localctx, 3);
            this.state = 162;
            this.arrayLiteral();
            break;
        case ECMAScriptPassParser.OpenBrace:
            this.enterOuterAlt(localctx, 4);
            this.state = 163;
            this.objectLiteral();
            break;
        case ECMAScriptPassParser.Function:
            this.enterOuterAlt(localctx, 5);
            this.state = 164;
            this.functionExpression();
            break;
        case ECMAScriptPassParser.RegularExpressionLiteral:
            this.enterOuterAlt(localctx, 6);
            this.state = 165;
            this.match(ECMAScriptPassParser.RegularExpressionLiteral);
            break;
        case ECMAScriptPassParser.OpenParen:
            this.enterOuterAlt(localctx, 7);
            this.state = 166;
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
        this.state = 169;
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
        this.state = 180;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 171;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 172;
            this.expression_In();
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 173;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 176;
            this.match(ECMAScriptPassParser.CloseParen);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 179;
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
        this.state = 182;
        this.memberExpression();
        this.state = 183;
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
        this.state = 202;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 185;
            this.match(ECMAScriptPassParser.OpenBracket);
            this.state = 187;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 186;
                this.elision();
            }

            this.state = 189;
            this.match(ECMAScriptPassParser.CloseBracket);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(ECMAScriptPassParser.OpenBracket);
            this.state = 191;
            this.elementList(0);
            this.state = 192;
            this.match(ECMAScriptPassParser.CloseBracket);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 194;
            this.match(ECMAScriptPassParser.OpenBracket);
            this.state = 195;
            this.elementList(0);
            this.state = 196;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 197;
                this.elision();
            }

            this.state = 200;
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
        this.state = 213;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.state = 206;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 205;
                this.elision();
            }

            this.state = 208;
            this.assignmentExpression_In();
            break;

        case 2:
            this.state = 210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 209;
                this.elision();
            }

            this.state = 212;
            this.spreadElement();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 229;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 227;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ElementListContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_elementList);
                    this.state = 215;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 216;
                    this.match(ECMAScriptPassParser.Comma);
                    this.state = 218;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===ECMAScriptPassParser.Comma) {
                        this.state = 217;
                        this.elision();
                    }

                    this.state = 220;
                    this.assignmentExpression_In();
                    break;

                case 2:
                    localctx = new ElementListContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_elementList);
                    this.state = 221;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 222;
                    this.match(ECMAScriptPassParser.Comma);
                    this.state = 224;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===ECMAScriptPassParser.Comma) {
                        this.state = 223;
                        this.elision();
                    }

                    this.state = 226;
                    this.spreadElement();
                    break;

                } 
            }
            this.state = 231;
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
        this.state = 233; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 232;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 235; 
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
        this.state = 237;
        this.match(ECMAScriptPassParser.Spread);
        this.state = 238;
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
        this.state = 249;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 240;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 241;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 242;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 243;
            this.propertyDefinitionList();
            this.state = 245;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 244;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 247;
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
        this.state = 251;
        this.propertyDefinition();
        this.state = 256;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 252;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 253;
                this.propertyDefinition(); 
            }
            this.state = 258;
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
        this.state = 264;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 259;
            this.identifierReference();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 260;
            this.propertyName();
            this.state = 261;
            this.match(ECMAScriptPassParser.Colon);
            this.state = 262;
            this.assignmentExpression_In();
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
        this.state = 266;
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
        this.state = 268;
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
        this.state = 270;
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
        this.state = 281;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 272;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 273;
            this.match(ECMAScriptPassParser.CloseParen);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 274;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 275;
            this.argumentList();
            this.state = 277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 276;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 279;
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
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Spread) {
            this.state = 283;
            this.match(ECMAScriptPassParser.Spread);
        }

        this.state = 286;
        this.assignmentExpression_In();
        this.state = 294;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 287;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 289;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ECMAScriptPassParser.Spread) {
                    this.state = 288;
                    this.match(ECMAScriptPassParser.Spread);
                }

                this.state = 291;
                this.assignmentExpression_In(); 
            }
            this.state = 296;
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
        this.state = 299;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 297;
            this.callExpression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 298;
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
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
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
    this.enterRule(localctx, 48, ECMAScriptPassParser.RULE_memberExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
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
        this.state = 305;
        this.match(ECMAScriptPassParser.Assign);
        this.state = 306;
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
        this.state = 308;
        this.match(ECMAScriptPassParser.Assign);
        this.state = 309;
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
        this.state = 320;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AssignExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 311;
            this.leftHandSideExpression();
            this.state = 312;
            this.match(ECMAScriptPassParser.Assign);
            this.state = 313;
            this.assignmentExpression();
            break;

        case 2:
            localctx = new AssignmentOperatorExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 315;
            this.leftHandSideExpression();
            this.state = 316;
            this.assignmentOperator();
            this.state = 317;
            this.assignmentExpression();
            break;

        case 3:
            localctx = new LhsExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 319;
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
        this.state = 331;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AssignExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 322;
            this.leftHandSideExpression();
            this.state = 323;
            this.match(ECMAScriptPassParser.Assign);
            this.state = 324;
            this.assignmentExpression_In();
            break;

        case 2:
            localctx = new AssignmentOperatorExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 326;
            this.leftHandSideExpression();
            this.state = 327;
            this.assignmentOperator();
            this.state = 328;
            this.assignmentExpression_In();
            break;

        case 3:
            localctx = new LhsExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 330;
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
        this.state = 333;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (ECMAScriptPassParser.PlusAssign - 40)) | (1 << (ECMAScriptPassParser.MinusAssign - 40)) | (1 << (ECMAScriptPassParser.MultiplyAssign - 40)) | (1 << (ECMAScriptPassParser.ModuloAssign - 40)) | (1 << (ECMAScriptPassParser.PowerAssign - 40)) | (1 << (ECMAScriptPassParser.LeftShiftArithmeticAssign - 40)) | (1 << (ECMAScriptPassParser.RightShiftArithmeticAssign - 40)) | (1 << (ECMAScriptPassParser.RightShiftLogicalAssign - 40)) | (1 << (ECMAScriptPassParser.BitAndAssign - 40)) | (1 << (ECMAScriptPassParser.BitOrAssign - 40)) | (1 << (ECMAScriptPassParser.BitXorAssign - 40)) | (1 << (ECMAScriptPassParser.DivideAssign - 40)))) !== 0))) {
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
        this.state = 338;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.SemiColon:
            this.enterOuterAlt(localctx, 1);
            this.state = 335;
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
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.StringLiteral:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 2);
            this.state = 336;
            this.expressionStatement();
            break;
        case ECMAScriptPassParser.For:
            this.enterOuterAlt(localctx, 3);
            this.state = 337;
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
        this.state = 340;
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
        this.state = 345; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 342;
            this.statementListItem();
            this.state = 343;
            this.eos();
            this.state = 347; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.SemiColon))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (ECMAScriptPassParser.NullLiteral - 57)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 57)) | (1 << (ECMAScriptPassParser.Await - 57)) | (1 << (ECMAScriptPassParser.Const - 57)) | (1 << (ECMAScriptPassParser.For - 57)) | (1 << (ECMAScriptPassParser.Function - 57)))) !== 0) || ((((_la - 92)) & ~0x1f) == 0 && ((1 << (_la - 92)) & ((1 << (ECMAScriptPassParser.Yield - 92)) | (1 << (ECMAScriptPassParser.Let - 92)) | (1 << (ECMAScriptPassParser.StringLiteral - 92)) | (1 << (ECMAScriptPassParser.IdentifierName - 92)))) !== 0));
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
        this.state = 352; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 349;
            this.statementListItem_Return();
            this.state = 350;
            this.eos();
            this.state = 354; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (ECMAScriptPassParser.NullLiteral - 57)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 57)) | (1 << (ECMAScriptPassParser.Await - 57)) | (1 << (ECMAScriptPassParser.Const - 57)) | (1 << (ECMAScriptPassParser.Function - 57)))) !== 0) || ((((_la - 92)) & ~0x1f) == 0 && ((1 << (_la - 92)) & ((1 << (ECMAScriptPassParser.Yield - 92)) | (1 << (ECMAScriptPassParser.Let - 92)) | (1 << (ECMAScriptPassParser.StringLiteral - 92)) | (1 << (ECMAScriptPassParser.IdentifierName - 92)))) !== 0));
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
        this.state = 358;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 356;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 357;
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
        this.state = 362;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 360;
            this.statement_Return();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 361;
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
        this.state = 364;
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
        this.state = 366;
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
        this.state = 368;
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
        this.state = 370;
        this.bindingIdentifier();
        this.state = 372;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 371;
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
        this.state = 374;
        this.letOrConst();
        this.state = 375;
        this.bindingList();
        this.state = 376;
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
        this.state = 378;
        this.letOrConst();
        this.state = 379;
        this.bindingList_In();
        this.state = 380;
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
        this.state = 382;
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
        this.state = 384;
        this.lexicalBinding();
        this.state = 389;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 385;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 386;
            this.lexicalBinding();
            this.state = 391;
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
        this.state = 392;
        this.lexicalBinding_In();
        this.state = 397;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 393;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 394;
            this.lexicalBinding_In();
            this.state = 399;
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
        this.state = 400;
        this.bindingIdentifier();
        this.state = 402;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 401;
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
        this.state = 404;
        this.bindingIdentifier();
        this.state = 406;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 405;
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
        this.state = 410;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Function:
            this.enterOuterAlt(localctx, 1);
            this.state = 408;
            this.hoistableDeclaration();
            break;
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Let:
            this.enterOuterAlt(localctx, 2);
            this.state = 409;
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
        this.state = 412;
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
        this.state = 414;
        this.match(ECMAScriptPassParser.For);
        this.state = 415;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 416;
        this.lexicalDeclaration();
        this.state = 418;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (ECMAScriptPassParser.NullLiteral - 57)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 57)) | (1 << (ECMAScriptPassParser.Await - 57)) | (1 << (ECMAScriptPassParser.Function - 57)))) !== 0) || ((((_la - 92)) & ~0x1f) == 0 && ((1 << (_la - 92)) & ((1 << (ECMAScriptPassParser.Yield - 92)) | (1 << (ECMAScriptPassParser.StringLiteral - 92)) | (1 << (ECMAScriptPassParser.IdentifierName - 92)))) !== 0)) {
            this.state = 417;
            this.expression_In();
        }

        this.state = 420;
        this.match(ECMAScriptPassParser.SemiColon);
        this.state = 422;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (ECMAScriptPassParser.NullLiteral - 57)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 57)) | (1 << (ECMAScriptPassParser.Await - 57)) | (1 << (ECMAScriptPassParser.Function - 57)))) !== 0) || ((((_la - 92)) & ~0x1f) == 0 && ((1 << (_la - 92)) & ((1 << (ECMAScriptPassParser.Yield - 92)) | (1 << (ECMAScriptPassParser.StringLiteral - 92)) | (1 << (ECMAScriptPassParser.IdentifierName - 92)))) !== 0)) {
            this.state = 421;
            this.expression_In();
        }

        this.state = 424;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 425;
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
        this.state = 427;
        this.letOrConst();
        this.state = 428;
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
        this.state = 430;
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
        this.state = 432;
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
    this.enterRule(localctx, 106, ECMAScriptPassParser.RULE_functionDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 434;
        this.match(ECMAScriptPassParser.Function);
        this.state = 435;
        this.bindingIdentifier();
        this.state = 436;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 437;
        this.formalParameters();
        this.state = 438;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 439;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 440;
        this.functionBody();
        this.state = 441;
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
    this.enterRule(localctx, 108, ECMAScriptPassParser.RULE_functionExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.match(ECMAScriptPassParser.Function);
        this.state = 445;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Await || _la===ECMAScriptPassParser.Yield || _la===ECMAScriptPassParser.IdentifierName) {
            this.state = 444;
            this.bindingIdentifier();
        }

        this.state = 447;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 448;
        this.formalParameters();
        this.state = 449;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 450;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 451;
        this.functionBody();
        this.state = 452;
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
    this.enterRule(localctx, 110, ECMAScriptPassParser.RULE_uniqueFormalParameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 454;
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
    this.enterRule(localctx, 112, ECMAScriptPassParser.RULE_formalParameters);
    var _la = 0; // Token type
    try {
        this.state = 461;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.EOF:
        case ECMAScriptPassParser.CloseParen:
            this.enterOuterAlt(localctx, 1);

            break;
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 2);
            this.state = 457;
            this.formalParameterList();
            this.state = 459;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 458;
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
    this.enterRule(localctx, 114, ECMAScriptPassParser.RULE_formalParameterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this.formalParameter();
        this.state = 468;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 464;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 465;
                this.formalParameter(); 
            }
            this.state = 470;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
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
    this.enterRule(localctx, 116, ECMAScriptPassParser.RULE_formalParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
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
    this.enterRule(localctx, 118, ECMAScriptPassParser.RULE_functionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 473;
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
    this.enterRule(localctx, 120, ECMAScriptPassParser.RULE_functionStatementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 476;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBracket))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (ECMAScriptPassParser.NullLiteral - 57)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 57)) | (1 << (ECMAScriptPassParser.Await - 57)) | (1 << (ECMAScriptPassParser.Const - 57)) | (1 << (ECMAScriptPassParser.Function - 57)))) !== 0) || ((((_la - 92)) & ~0x1f) == 0 && ((1 << (_la - 92)) & ((1 << (ECMAScriptPassParser.Yield - 92)) | (1 << (ECMAScriptPassParser.Let - 92)) | (1 << (ECMAScriptPassParser.StringLiteral - 92)) | (1 << (ECMAScriptPassParser.IdentifierName - 92)))) !== 0)) {
            this.state = 475;
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
    this.enterRule(localctx, 122, ECMAScriptPassParser.RULE_reservedWord);
    try {
        this.state = 482;
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
            this.state = 478;
            this.keyword();
            break;
        case ECMAScriptPassParser.Enum:
            this.enterOuterAlt(localctx, 2);
            this.state = 479;
            this.futureReservedWord();
            break;
        case ECMAScriptPassParser.NullLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 480;
            this.match(ECMAScriptPassParser.NullLiteral);
            break;
        case ECMAScriptPassParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 4);
            this.state = 481;
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
    this.enterRule(localctx, 124, ECMAScriptPassParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
        _la = this._input.LA(1);
        if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ECMAScriptPassParser.Await - 59)) | (1 << (ECMAScriptPassParser.Break - 59)) | (1 << (ECMAScriptPassParser.Case - 59)) | (1 << (ECMAScriptPassParser.Catch - 59)) | (1 << (ECMAScriptPassParser.Class - 59)) | (1 << (ECMAScriptPassParser.Const - 59)) | (1 << (ECMAScriptPassParser.Continue - 59)) | (1 << (ECMAScriptPassParser.Debugger - 59)) | (1 << (ECMAScriptPassParser.Default - 59)) | (1 << (ECMAScriptPassParser.Delete - 59)) | (1 << (ECMAScriptPassParser.Do - 59)) | (1 << (ECMAScriptPassParser.Else - 59)) | (1 << (ECMAScriptPassParser.Export - 59)) | (1 << (ECMAScriptPassParser.Extends - 59)) | (1 << (ECMAScriptPassParser.Finally - 59)) | (1 << (ECMAScriptPassParser.For - 59)) | (1 << (ECMAScriptPassParser.Function - 59)) | (1 << (ECMAScriptPassParser.If - 59)) | (1 << (ECMAScriptPassParser.Import - 59)) | (1 << (ECMAScriptPassParser.In - 59)) | (1 << (ECMAScriptPassParser.Instanceof - 59)) | (1 << (ECMAScriptPassParser.New - 59)) | (1 << (ECMAScriptPassParser.Return - 59)) | (1 << (ECMAScriptPassParser.Super - 59)) | (1 << (ECMAScriptPassParser.Switch - 59)) | (1 << (ECMAScriptPassParser.This - 59)) | (1 << (ECMAScriptPassParser.Throw - 59)) | (1 << (ECMAScriptPassParser.Try - 59)) | (1 << (ECMAScriptPassParser.Typeof - 59)) | (1 << (ECMAScriptPassParser.Var - 59)) | (1 << (ECMAScriptPassParser.Void - 59)) | (1 << (ECMAScriptPassParser.While - 59)))) !== 0) || _la===ECMAScriptPassParser.With || _la===ECMAScriptPassParser.Yield)) {
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
    this.enterRule(localctx, 126, ECMAScriptPassParser.RULE_futureReservedWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 486;
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


exports.ECMAScriptPassParser = ECMAScriptPassParser;
