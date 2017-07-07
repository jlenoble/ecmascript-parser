// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScript.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptListener = require('./ECMAScriptListener').ECMAScriptListener;
var grammarFileName = "ECMAScript.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003l\u01b0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003h\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004o",
    "\n\u0004\u0003\u0005\u0006\u0005r\n\u0005\r\u0005\u000e\u0005s\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0005",
    "\b}\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u0096\n\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010",
    "\u009f\n\u0010\f\u0010\u000e\u0010\u00a2\u000b\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0007\u0014\u00ad\n\u0014\f\u0014\u000e\u0014\u00b0",
    "\u000b\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u00b8\n\u0017\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u00bc\n\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00c5\n\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0005\u001a\u00e0\n\u001a\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u00e7\n\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0005\u001d\u00ec\n\u001d\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u00f0\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0005",
    "\u001f\u00f5\n\u001f\u0005\u001f\u00f7\n\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u0101\n\u001f\u0003 \u0003 \u0007 \u0105\n \f \u000e \u0108",
    "\u000b \u0003 \u0005 \u010b\n \u0003 \u0003 \u0006 \u010f\n \r \u000e",
    " \u0110\u0003 \u0005 \u0114\n \u0003 \u0007 \u0117\n \f \u000e \u011a",
    "\u000b \u0005 \u011c\n \u0003 \u0007 \u011f\n \f \u000e \u0122\u000b",
    " \u0003 \u0003 \u0003!\u0003!\u0003!\u0007!\u0129\n!\f!\u000e!\u012c",
    "\u000b!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005",
    "\"\u0135\n\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0005$\u013c\n$\u0003",
    "%\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0005\'\u0146",
    "\n\'\u0005\'\u0148\n\'\u0003\'\u0003\'\u0003(\u0005(\u014d\n(\u0003",
    "(\u0003(\u0003(\u0003(\u0007(\u0153\n(\f(\u000e(\u0156\u000b(\u0003",
    ")\u0003)\u0003)\u0003*\u0003*\u0003*\u0007*\u015e\n*\f*\u000e*\u0161",
    "\u000b*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005",
    "+\u016b\n+\u0005+\u016d\n+\u0003+\u0003+\u0003+\u0005+\u0172\n+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0005+\u0182\n+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0005+\u018c\n+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0007+\u0198\n+\f+\u000e+\u019b",
    "\u000b+\u0003,\u0003,\u0003-\u0003-\u0003-\u0005-\u01a2\n-\u0003.\u0003",
    ".\u0003.\u0003.\u0005.\u01a8\n.\u0003/\u0003/\u00030\u00030\u00031\u0003",
    "1\u00031\u0002\u0003T2\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`\u0002",
    "\u0005\b\u0002\u0016\u0017\u001b\u001c#$CCVVXX\u0003\u0002:[\u0003\u0002",
    "`h\u0002\u01ba\u0002b\u0003\u0002\u0002\u0002\u0004g\u0003\u0002\u0002",
    "\u0002\u0006n\u0003\u0002\u0002\u0002\bq\u0003\u0002\u0002\u0002\nu",
    "\u0003\u0002\u0002\u0002\fw\u0003\u0002\u0002\u0002\u000ey\u0003\u0002",
    "\u0002\u0002\u0010\u0080\u0003\u0002\u0002\u0002\u0012\u0083\u0003\u0002",
    "\u0002\u0002\u0014\u0087\u0003\u0002\u0002\u0002\u0016\u0089\u0003\u0002",
    "\u0002\u0002\u0018\u008c\u0003\u0002\u0002\u0002\u001a\u008e\u0003\u0002",
    "\u0002\u0002\u001c\u0097\u0003\u0002\u0002\u0002\u001e\u009b\u0003\u0002",
    "\u0002\u0002 \u00a3\u0003\u0002\u0002\u0002\"\u00a5\u0003\u0002\u0002",
    "\u0002$\u00a7\u0003\u0002\u0002\u0002&\u00a9\u0003\u0002\u0002\u0002",
    "(\u00b1\u0003\u0002\u0002\u0002*\u00b3\u0003\u0002\u0002\u0002,\u00b7",
    "\u0003\u0002\u0002\u0002.\u00b9\u0003\u0002\u0002\u00020\u00c4\u0003",
    "\u0002\u0002\u00022\u00df\u0003\u0002\u0002\u00024\u00e1\u0003\u0002",
    "\u0002\u00026\u00e6\u0003\u0002\u0002\u00028\u00eb\u0003\u0002\u0002",
    "\u0002:\u00ef\u0003\u0002\u0002\u0002<\u0100\u0003\u0002\u0002\u0002",
    ">\u0102\u0003\u0002\u0002\u0002@\u0125\u0003\u0002\u0002\u0002B\u0134",
    "\u0003\u0002\u0002\u0002D\u0136\u0003\u0002\u0002\u0002F\u013b\u0003",
    "\u0002\u0002\u0002H\u013d\u0003\u0002\u0002\u0002J\u0140\u0003\u0002",
    "\u0002\u0002L\u0142\u0003\u0002\u0002\u0002N\u014c\u0003\u0002\u0002",
    "\u0002P\u0157\u0003\u0002\u0002\u0002R\u015a\u0003\u0002\u0002\u0002",
    "T\u018b\u0003\u0002\u0002\u0002V\u019c\u0003\u0002\u0002\u0002X\u01a1",
    "\u0003\u0002\u0002\u0002Z\u01a7\u0003\u0002\u0002\u0002\\\u01a9\u0003",
    "\u0002\u0002\u0002^\u01ab\u0003\u0002\u0002\u0002`\u01ad\u0003\u0002",
    "\u0002\u0002bc\u0005\b\u0005\u0002cd\u0007\u0002\u0002\u0003d\u0003",
    "\u0003\u0002\u0002\u0002eh\u0007\f\u0002\u0002fh\u0006\u0003\u0002\u0002",
    "ge\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002h\u0005\u0003\u0002",
    "\u0002\u0002io\u0005\u001c\u000f\u0002jo\u0005\u0012\n\u0002ko\u0005",
    "\u001a\u000e\u0002lm\u0006\u0004\u0003\u0002mo\u0005\u000e\b\u0002n",
    "i\u0003\u0002\u0002\u0002nj\u0003\u0002\u0002\u0002nk\u0003\u0002\u0002",
    "\u0002nl\u0003\u0002\u0002\u0002o\u0007\u0003\u0002\u0002\u0002pr\u0005",
    "\n\u0006\u0002qp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s",
    "q\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002t\t\u0003\u0002\u0002",
    "\u0002uv\u0005\u0006\u0004\u0002v\u000b\u0003\u0002\u0002\u0002wx\u0007",
    "\f\u0002\u0002x\r\u0003\u0002\u0002\u0002yz\u0007P\u0002\u0002z|\u0006",
    "\b\u0004\u0002{}\u0005T+\u0002|{\u0003\u0002\u0002\u0002|}\u0003\u0002",
    "\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f\u0005\u0004\u0003\u0002",
    "\u007f\u000f\u0003\u0002\u0002\u0002\u0080\u0081\u0007A\u0002\u0002",
    "\u0081\u0082\u0005\u0004\u0003\u0002\u0082\u0011\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0006\n\u0005\u0002\u0084\u0085\u0005R*\u0002\u0085\u0086",
    "\u0005\u0004\u0003\u0002\u0086\u0013\u0003\u0002\u0002\u0002\u0087\u0088",
    "\u0005\u0018\r\u0002\u0088\u0015\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0007\u000b\u0002\u0002\u008a\u008b\u00058\u001d\u0002\u008b\u0017",
    "\u0003\u0002\u0002\u0002\u008c\u008d\u00058\u001d\u0002\u008d\u0019",
    "\u0003\u0002\u0002\u0002\u008e\u008f\u0007K\u0002\u0002\u008f\u0090",
    "\u0007\u0006\u0002\u0002\u0090\u0091\u0005R*\u0002\u0091\u0092\u0007",
    "\u0007\u0002\u0002\u0092\u0095\u0005\u0006\u0004\u0002\u0093\u0094\u0007",
    "E\u0002\u0002\u0094\u0096\u0005\u0006\u0004\u0002\u0095\u0093\u0003",
    "\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u001b\u0003",
    "\u0002\u0002\u0002\u0097\u0098\u0007W\u0002\u0002\u0098\u0099\u0005",
    "\u001e\u0010\u0002\u0099\u009a\u0005\u0004\u0003\u0002\u009a\u001d\u0003",
    "\u0002\u0002\u0002\u009b\u00a0\u0005 \u0011\u0002\u009c\u009d\u0007",
    "\r\u0002\u0002\u009d\u009f\u0005 \u0011\u0002\u009e\u009c\u0003\u0002",
    "\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u001f\u0003\u0002",
    "\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a4\u00058",
    "\u001d\u0002\u00a4!\u0003\u0002\u0002\u0002\u00a5\u00a6\u0005$\u0013",
    "\u0002\u00a6#\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8%\u0003\u0002\u0002\u0002\u00a9\u00ae\u0005*\u0016\u0002",
    "\u00aa\u00ab\u0007\r\u0002\u0002\u00ab\u00ad\u0005*\u0016\u0002\u00ac",
    "\u00aa\u0003\u0002\u0002\u0002\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae",
    "\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af",
    "\'\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1",
    "\u00b2\u0005\u0016\f\u0002\u00b2)\u0003\u0002\u0002\u0002\u00b3\u00b4",
    "\u0005\u0014\u000b\u0002\u00b4+\u0003\u0002\u0002\u0002\u00b5\u00b8",
    "\u00058\u001d\u0002\u00b6\u00b8\u0005<\u001f\u0002\u00b7\u00b5\u0003",
    "\u0002\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8-\u0003",
    "\u0002\u0002\u0002\u00b9\u00bb\b\u0018\u0001\u0002\u00ba\u00bc\u0005",
    "\b\u0005\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be\b",
    "\u0018\u0001\u0002\u00be/\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007",
    "\u0004\u0002\u0002\u00c0\u00c1\u0005.\u0018\u0002\u00c1\u00c2\u0007",
    "\u0005\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3\u00c5\u0005",
    "T+\u0002\u00c4\u00bf\u0003\u0002\u0002\u0002\u00c4\u00c3\u0003\u0002",
    "\u0002\u0002\u00c51\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007c\u0002",
    "\u0002\u00c7\u00c8\u0005D#\u0002\u00c8\u00c9\u0007\u0006\u0002\u0002",
    "\u00c9\u00ca\u0007\u0007\u0002\u0002\u00ca\u00cb\u0007\u0004\u0002\u0002",
    "\u00cb\u00cc\u0005.\u0018\u0002\u00cc\u00cd\u0007\u0005\u0002\u0002",
    "\u00cd\u00e0\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007f\u0002\u0002",
    "\u00cf\u00d0\u0005D#\u0002\u00d0\u00d1\u0007\u0006\u0002\u0002\u00d1",
    "\u00d2\u00054\u001b\u0002\u00d2\u00d3\u0007\u0007\u0002\u0002\u00d3",
    "\u00d4\u0007\u0004\u0002\u0002\u00d4\u00d5\u0005.\u0018\u0002\u00d5",
    "\u00d6\u0007\u0005\u0002\u0002\u00d6\u00e0\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0005D#\u0002\u00d8\u00d9\u0007\u0006\u0002\u0002\u00d9\u00da",
    "\u0005\"\u0012\u0002\u00da\u00db\u0007\u0007\u0002\u0002\u00db\u00dc",
    "\u0007\u0004\u0002\u0002\u00dc\u00dd\u0005.\u0018\u0002\u00dd\u00de",
    "\u0007\u0005\u0002\u0002\u00de\u00e0\u0003\u0002\u0002\u0002\u00df\u00c6",
    "\u0003\u0002\u0002\u0002\u00df\u00ce\u0003\u0002\u0002\u0002\u00df\u00d7",
    "\u0003\u0002\u0002\u0002\u00e03\u0003\u0002\u0002\u0002\u00e1\u00e2",
    "\u0005*\u0016\u0002\u00e25\u0003\u0002\u0002\u0002\u00e3\u00e7\u0005",
    ":\u001e\u0002\u00e4\u00e5\u0006\u001c\u0006\u0002\u00e5\u00e7\u0007",
    "[\u0002\u0002\u00e6\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003",
    "\u0002\u0002\u0002\u00e77\u0003\u0002\u0002\u0002\u00e8\u00ec\u0005",
    ":\u001e\u0002\u00e9\u00ea\u0006\u001d\u0007\u0002\u00ea\u00ec\u0007",
    "[\u0002\u0002\u00eb\u00e8\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003",
    "\u0002\u0002\u0002\u00ec9\u0003\u0002\u0002\u0002\u00ed\u00f0\u0007",
    "j\u0002\u0002\u00ee\u00f0\u0005`1\u0002\u00ef\u00ed\u0003\u0002\u0002",
    "\u0002\u00ef\u00ee\u0003\u0002\u0002\u0002\u00f0;\u0003\u0002\u0002",
    "\u0002\u00f1\u00f6\u0007\u0006\u0002\u0002\u00f2\u00f4\u0005R*\u0002",
    "\u00f3\u00f5\u0007\r\u0002\u0002\u00f4\u00f3\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f7\u0003\u0002\u0002\u0002",
    "\u00f6\u00f2\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002",
    "\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u0101\u0007\u0007\u0002\u0002",
    "\u00f9\u00fa\u0007\u0006\u0002\u0002\u00fa\u00fb\u0005R*\u0002\u00fb",
    "\u00fc\u0007\r\u0002\u0002\u00fc\u00fd\u0007\u000b\u0002\u0002\u00fd",
    "\u00fe\u00058\u001d\u0002\u00fe\u00ff\u0007\u0007\u0002\u0002\u00ff",
    "\u0101\u0003\u0002\u0002\u0002\u0100\u00f1\u0003\u0002\u0002\u0002\u0100",
    "\u00f9\u0003\u0002\u0002\u0002\u0101=\u0003\u0002\u0002\u0002\u0102",
    "\u0106\u0007\b\u0002\u0002\u0103\u0105\u0007\r\u0002\u0002\u0104\u0103",
    "\u0003\u0002\u0002\u0002\u0105\u0108\u0003\u0002\u0002\u0002\u0106\u0104",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u011b",
    "\u0003\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010b",
    "\u0007\u000b\u0002\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010a\u010b",
    "\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u0118",
    "\u0005T+\u0002\u010d\u010f\u0007\r\u0002\u0002\u010e\u010d\u0003\u0002",
    "\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002",
    "\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0113\u0003\u0002",
    "\u0002\u0002\u0112\u0114\u0007\u000b\u0002\u0002\u0113\u0112\u0003\u0002",
    "\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002",
    "\u0002\u0002\u0115\u0117\u0005T+\u0002\u0116\u010e\u0003\u0002\u0002",
    "\u0002\u0117\u011a\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011c\u0003\u0002\u0002",
    "\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011b\u010a\u0003\u0002\u0002",
    "\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u0120\u0003\u0002\u0002",
    "\u0002\u011d\u011f\u0007\r\u0002\u0002\u011e\u011d\u0003\u0002\u0002",
    "\u0002\u011f\u0122\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002\u0002",
    "\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0123\u0003\u0002\u0002",
    "\u0002\u0122\u0120\u0003\u0002\u0002\u0002\u0123\u0124\u0007\t\u0002",
    "\u0002\u0124?\u0003\u0002\u0002\u0002\u0125\u012a\u0005B\"\u0002\u0126",
    "\u0127\u0007\r\u0002\u0002\u0127\u0129\u0005B\"\u0002\u0128\u0126\u0003",
    "\u0002\u0002\u0002\u0129\u012c\u0003\u0002\u0002\u0002\u012a\u0128\u0003",
    "\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012bA\u0003",
    "\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012d\u0135\u0005",
    "2\u001a\u0002\u012e\u0135\u0005H%\u0002\u012f\u0130\u0005D#\u0002\u0130",
    "\u0131\u0007(\u0002\u0002\u0131\u0132\u0005T+\u0002\u0132\u0135\u0003",
    "\u0002\u0002\u0002\u0133\u0135\u00056\u001c\u0002\u0134\u012d\u0003",
    "\u0002\u0002\u0002\u0134\u012e\u0003\u0002\u0002\u0002\u0134\u012f\u0003",
    "\u0002\u0002\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0135C\u0003",
    "\u0002\u0002\u0002\u0136\u0137\u0005F$\u0002\u0137E\u0003\u0002\u0002",
    "\u0002\u0138\u013c\u0005X-\u0002\u0139\u013c\u0007i\u0002\u0002\u013a",
    "\u013c\u0007\u0003\u0002\u0002\u013b\u0138\u0003\u0002\u0002\u0002\u013b",
    "\u0139\u0003\u0002\u0002\u0002\u013b\u013a\u0003\u0002\u0002\u0002\u013c",
    "G\u0003\u0002\u0002\u0002\u013d\u013e\u00056\u001c\u0002\u013e\u013f",
    "\u0005P)\u0002\u013fI\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002",
    "\u0002\u0002\u0141K\u0003\u0002\u0002\u0002\u0142\u0147\u0007\u0006",
    "\u0002\u0002\u0143\u0145\u0005N(\u0002\u0144\u0146\u0007\r\u0002\u0002",
    "\u0145\u0144\u0003\u0002\u0002\u0002\u0145\u0146\u0003\u0002\u0002\u0002",
    "\u0146\u0148\u0003\u0002\u0002\u0002\u0147\u0143\u0003\u0002\u0002\u0002",
    "\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u0149\u0003\u0002\u0002\u0002",
    "\u0149\u014a\u0007\u0007\u0002\u0002\u014aM\u0003\u0002\u0002\u0002",
    "\u014b\u014d\u0007\u000b\u0002\u0002\u014c\u014b\u0003\u0002\u0002\u0002",
    "\u014c\u014d\u0003\u0002\u0002\u0002\u014d\u014e\u0003\u0002\u0002\u0002",
    "\u014e\u0154\u0005R*\u0002\u014f\u0150\u0007\r\u0002\u0002\u0150\u0151",
    "\u0007\u000b\u0002\u0002\u0151\u0153\u0005R*\u0002\u0152\u014f\u0003",
    "\u0002\u0002\u0002\u0153\u0156\u0003\u0002\u0002\u0002\u0154\u0152\u0003",
    "\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002\u0155O\u0003",
    "\u0002\u0002\u0002\u0156\u0154\u0003\u0002\u0002\u0002\u0157\u0158\u0007",
    ")\u0002\u0002\u0158\u0159\u0005T+\u0002\u0159Q\u0003\u0002\u0002\u0002",
    "\u015a\u015f\u0005T+\u0002\u015b\u015c\u0007\r\u0002\u0002\u015c\u015e",
    "\u0005T+\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015e\u0161\u0003",
    "\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u015f\u0160\u0003",
    "\u0002\u0002\u0002\u0160S\u0003\u0002\u0002\u0002\u0161\u015f\u0003",
    "\u0002\u0002\u0002\u0162\u0163\b+\u0001\u0002\u0163\u018c\u0007S\u0002",
    "\u0002\u0164\u018c\u00056\u001c\u0002\u0165\u018c\u0007\u0003\u0002",
    "\u0002\u0166\u018c\u0005> \u0002\u0167\u016c\u0007\u0004\u0002\u0002",
    "\u0168\u016a\u0005@!\u0002\u0169\u016b\u0007\r\u0002\u0002\u016a\u0169",
    "\u0003\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016d",
    "\u0003\u0002\u0002\u0002\u016c\u0168\u0003\u0002\u0002\u0002\u016c\u016d",
    "\u0003\u0002\u0002\u0002\u016d\u016e\u0003\u0002\u0002\u0002\u016e\u018c",
    "\u0007\u0005\u0002\u0002\u016f\u0171\u0007J\u0002\u0002\u0170\u0172",
    "\u00058\u001d\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0171\u0172",
    "\u0003\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002\u0173\u0174",
    "\u0007\u0006\u0002\u0002\u0174\u0175\u0005$\u0013\u0002\u0175\u0176",
    "\u0007\u0007\u0002\u0002\u0176\u0177\u0007\u0004\u0002\u0002\u0177\u0178",
    "\u0005.\u0018\u0002\u0178\u0179\u0007\u0005\u0002\u0002\u0179\u018c",
    "\u0003\u0002\u0002\u0002\u017a\u017b\u0007\u0006\u0002\u0002\u017b\u017c",
    "\u0005R*\u0002\u017c\u017d\u0007\u0007\u0002\u0002\u017d\u018c\u0003",
    "\u0002\u0002\u0002\u017e\u017f\u0007O\u0002\u0002\u017f\u0181\u0005",
    "T+\u0002\u0180\u0182\u0005L\'\u0002\u0181\u0180\u0003\u0002\u0002\u0002",
    "\u0181\u0182\u0003\u0002\u0002\u0002\u0182\u018c\u0003\u0002\u0002\u0002",
    "\u0183\u0184\u0005V,\u0002\u0184\u0185\u0005T+\u0005\u0185\u018c\u0003",
    "\u0002\u0002\u0002\u0186\u0187\u0005,\u0017\u0002\u0187\u0188\u0006",
    "+\b\u0002\u0188\u0189\u00075\u0002\u0002\u0189\u018a\u00050\u0019\u0002",
    "\u018a\u018c\u0003\u0002\u0002\u0002\u018b\u0162\u0003\u0002\u0002\u0002",
    "\u018b\u0164\u0003\u0002\u0002\u0002\u018b\u0165\u0003\u0002\u0002\u0002",
    "\u018b\u0166\u0003\u0002\u0002\u0002\u018b\u0167\u0003\u0002\u0002\u0002",
    "\u018b\u016f\u0003\u0002\u0002\u0002\u018b\u017a\u0003\u0002\u0002\u0002",
    "\u018b\u017e\u0003\u0002\u0002\u0002\u018b\u0183\u0003\u0002\u0002\u0002",
    "\u018b\u0186\u0003\u0002\u0002\u0002\u018c\u0199\u0003\u0002\u0002\u0002",
    "\u018d\u018e\f\u0003\u0002\u0002\u018e\u018f\u0007)\u0002\u0002\u018f",
    "\u0198\u0005T+\u0004\u0190\u0191\f\b\u0002\u0002\u0191\u0198\u0005L",
    "\'\u0002\u0192\u0193\f\u0007\u0002\u0002\u0193\u0194\u0007\b\u0002\u0002",
    "\u0194\u0195\u0005R*\u0002\u0195\u0196\u0007\t\u0002\u0002\u0196\u0198",
    "\u0003\u0002\u0002\u0002\u0197\u018d\u0003\u0002\u0002\u0002\u0197\u0190",
    "\u0003\u0002\u0002\u0002\u0197\u0192\u0003\u0002\u0002\u0002\u0198\u019b",
    "\u0003\u0002\u0002\u0002\u0199\u0197\u0003\u0002\u0002\u0002\u0199\u019a",
    "\u0003\u0002\u0002\u0002\u019aU\u0003\u0002\u0002\u0002\u019b\u0199",
    "\u0003\u0002\u0002\u0002\u019c\u019d\t\u0002\u0002\u0002\u019dW\u0003",
    "\u0002\u0002\u0002\u019e\u01a2\u0007j\u0002\u0002\u019f\u01a2\u0005",
    "Z.\u0002\u01a0\u01a2\u0005`1\u0002\u01a1\u019e\u0003\u0002\u0002\u0002",
    "\u01a1\u019f\u0003\u0002\u0002\u0002\u01a1\u01a0\u0003\u0002\u0002\u0002",
    "\u01a2Y\u0003\u0002\u0002\u0002\u01a3\u01a8\u0005\\/\u0002\u01a4\u01a8",
    "\u0005^0\u0002\u01a5\u01a8\u00078\u0002\u0002\u01a6\u01a8\u00079\u0002",
    "\u0002\u01a7\u01a3\u0003\u0002\u0002\u0002\u01a7\u01a4\u0003\u0002\u0002",
    "\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a7\u01a6\u0003\u0002\u0002",
    "\u0002\u01a8[\u0003\u0002\u0002\u0002\u01a9\u01aa\t\u0003\u0002\u0002",
    "\u01aa]\u0003\u0002\u0002\u0002\u01ab\u01ac\u0007\\\u0002\u0002\u01ac",
    "_\u0003\u0002\u0002\u0002\u01ad\u01ae\t\u0004\u0002\u0002\u01aea\u0003",
    "\u0002\u0002\u0002+gns|\u0095\u00a0\u00ae\u00b7\u00bb\u00c4\u00df\u00e6",
    "\u00eb\u00ef\u00f4\u00f6\u0100\u0106\u010a\u0110\u0113\u0118\u011b\u0120",
    "\u012a\u0134\u013b\u0145\u0147\u014c\u0154\u015f\u016a\u016c\u0171\u0181",
    "\u018b\u0197\u0199\u01a1\u01a7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'{'", "'}'", "'('", "')'", "'['", "']'", 
                     "'.'", "'...'", "';'", "','", "'<'", "'>'", "'<='", 
                     "'>='", "'=='", "'!='", "'==='", "'!=='", "'+'", "'-'", 
                     "'*'", "'%'", "'**'", "'++'", "'--'", "'<<'", "'>>'", 
                     "'>>>'", "'&'", "'|'", "'^'", "'!'", "'~'", "'&&'", 
                     "'||'", "'?'", "':'", "'='", "'+='", "'-='", "'*='", 
                     "'%='", "'**='", "'<<='", "'>>='", "'>>>='", "'&='", 
                     "'|='", "'^='", "'=>'", null, null, null, null, "'await'", 
                     "'break'", "'case'", "'catch'", "'class'", "'const'", 
                     "'continue'", "'debugger'", "'default'", "'delete'", 
                     "'do'", "'else'", "'export'", "'extends'", "'finally'", 
                     "'for'", "'function'", "'if'", "'import'", "'in'", 
                     "'instanceof'", "'new'", "'return'", "'super'", "'switch'", 
                     "'this'", "'throw'", "'try'", "'typeof'", "'var'", 
                     "'void'", "'while'", "'with'", "'yield'", "'enum'", 
                     "'null'", "'true'", "'false'", "'as'", "'async'", "'from'", 
                     "'get'", "'let'", "'of'", "'set'", "'static'", "'target'" ];

var symbolicNames = [ null, "NumericLiteral", "OpenBrace", "CloseBrace", 
                      "OpenParen", "CloseParen", "OpenBracket", "CloseBracket", 
                      "Dot", "Spread", "SemiColon", "Comma", "LessThan", 
                      "GreaterThan", "LessThanEquals", "GreaterThanEquals", 
                      "Equals", "NotEquals", "IdentityEquals", "IdentityNotEquals", 
                      "Plus", "Minus", "Multiply", "Modulo", "Power", "PlusPlus", 
                      "MinusMinus", "LeftShiftArithmetic", "RightShiftArithmetic", 
                      "RightShiftLogical", "BitAnd", "BitOr", "BitXor", 
                      "Not", "BitNot", "And", "Or", "QuestionMark", "Colon", 
                      "Assign", "PlusAssign", "MinusAssign", "MultiplyAssign", 
                      "ModuloAssign", "PowerAssign", "LeftShiftArithmeticAssign", 
                      "RightShiftArithmeticAssign", "RightShiftLogicalAssign", 
                      "BitAndAssign", "BitOrAssign", "BitXorAssign", "FatArrow", 
                      "Divide", "DivideAssign", "NullLiteral", "BooleanLiteral", 
                      "Await", "Break", "Case", "Catch", "Class", "Const", 
                      "Continue", "Debugger", "Default", "Delete", "Do", 
                      "Else", "Export", "Extends", "Finally", "For", "Function", 
                      "If", "Import", "In", "Instanceof", "New", "Return", 
                      "Super", "Switch", "This", "Throw", "Try", "Typeof", 
                      "Var", "Void", "While", "With", "Yield", "Enum", "Null", 
                      "True", "False", "As", "Async", "From", "Get", "Let", 
                      "Of", "Set", "Static", "Target", "StringLiteral", 
                      "IdentifierName", "WhiteSpace", "LineTerminator" ];

var ruleNames =  [ "file", "eos", "statement", "statementList", "statementListItem", 
                   "emptyStatement", "returnStatement", "debuggerStatement", 
                   "expressionStatement", "bindingElement", "bindingRestElement", 
                   "singleNameBinding", "ifStatement", "variableStatement", 
                   "variableDeclarationList", "variableDeclaration", "uniqueFormalParameters", 
                   "formalParameters", "formalParameterList", "functionRestParameter", 
                   "formalParameter", "arrowParameters", "functionBody", 
                   "conciseBody", "methodDefinition", "propertySetParameterList", 
                   "identifierReference", "bindingIdentifier", "identifier", 
                   "coverParenthesizedExpressionAndArrowParameterList", 
                   "arrayLiteral", "propertyDefinitionList", "propertyDefinition", 
                   "propertyName", "literalPropertyName", "coverInitializedName", 
                   "callExpression", "arguments", "argumentList", "initializer", 
                   "expressionList", "expression", "unaryOperator", "identifierName", 
                   "reservedWord", "keyword", "futureReservedWord", "miscIdentifier" ];

function ECMAScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	var path = require('path');
	require(path.join(process.cwd(), 'build/src/static/antlr4/BaseParser'))
	  .addOwnMethodsTo(ECMAScriptParser.prototype);

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
ECMAScriptParser.CloseBrace = 3;
ECMAScriptParser.OpenParen = 4;
ECMAScriptParser.CloseParen = 5;
ECMAScriptParser.OpenBracket = 6;
ECMAScriptParser.CloseBracket = 7;
ECMAScriptParser.Dot = 8;
ECMAScriptParser.Spread = 9;
ECMAScriptParser.SemiColon = 10;
ECMAScriptParser.Comma = 11;
ECMAScriptParser.LessThan = 12;
ECMAScriptParser.GreaterThan = 13;
ECMAScriptParser.LessThanEquals = 14;
ECMAScriptParser.GreaterThanEquals = 15;
ECMAScriptParser.Equals = 16;
ECMAScriptParser.NotEquals = 17;
ECMAScriptParser.IdentityEquals = 18;
ECMAScriptParser.IdentityNotEquals = 19;
ECMAScriptParser.Plus = 20;
ECMAScriptParser.Minus = 21;
ECMAScriptParser.Multiply = 22;
ECMAScriptParser.Modulo = 23;
ECMAScriptParser.Power = 24;
ECMAScriptParser.PlusPlus = 25;
ECMAScriptParser.MinusMinus = 26;
ECMAScriptParser.LeftShiftArithmetic = 27;
ECMAScriptParser.RightShiftArithmetic = 28;
ECMAScriptParser.RightShiftLogical = 29;
ECMAScriptParser.BitAnd = 30;
ECMAScriptParser.BitOr = 31;
ECMAScriptParser.BitXor = 32;
ECMAScriptParser.Not = 33;
ECMAScriptParser.BitNot = 34;
ECMAScriptParser.And = 35;
ECMAScriptParser.Or = 36;
ECMAScriptParser.QuestionMark = 37;
ECMAScriptParser.Colon = 38;
ECMAScriptParser.Assign = 39;
ECMAScriptParser.PlusAssign = 40;
ECMAScriptParser.MinusAssign = 41;
ECMAScriptParser.MultiplyAssign = 42;
ECMAScriptParser.ModuloAssign = 43;
ECMAScriptParser.PowerAssign = 44;
ECMAScriptParser.LeftShiftArithmeticAssign = 45;
ECMAScriptParser.RightShiftArithmeticAssign = 46;
ECMAScriptParser.RightShiftLogicalAssign = 47;
ECMAScriptParser.BitAndAssign = 48;
ECMAScriptParser.BitOrAssign = 49;
ECMAScriptParser.BitXorAssign = 50;
ECMAScriptParser.FatArrow = 51;
ECMAScriptParser.Divide = 52;
ECMAScriptParser.DivideAssign = 53;
ECMAScriptParser.NullLiteral = 54;
ECMAScriptParser.BooleanLiteral = 55;
ECMAScriptParser.Await = 56;
ECMAScriptParser.Break = 57;
ECMAScriptParser.Case = 58;
ECMAScriptParser.Catch = 59;
ECMAScriptParser.Class = 60;
ECMAScriptParser.Const = 61;
ECMAScriptParser.Continue = 62;
ECMAScriptParser.Debugger = 63;
ECMAScriptParser.Default = 64;
ECMAScriptParser.Delete = 65;
ECMAScriptParser.Do = 66;
ECMAScriptParser.Else = 67;
ECMAScriptParser.Export = 68;
ECMAScriptParser.Extends = 69;
ECMAScriptParser.Finally = 70;
ECMAScriptParser.For = 71;
ECMAScriptParser.Function = 72;
ECMAScriptParser.If = 73;
ECMAScriptParser.Import = 74;
ECMAScriptParser.In = 75;
ECMAScriptParser.Instanceof = 76;
ECMAScriptParser.New = 77;
ECMAScriptParser.Return = 78;
ECMAScriptParser.Super = 79;
ECMAScriptParser.Switch = 80;
ECMAScriptParser.This = 81;
ECMAScriptParser.Throw = 82;
ECMAScriptParser.Try = 83;
ECMAScriptParser.Typeof = 84;
ECMAScriptParser.Var = 85;
ECMAScriptParser.Void = 86;
ECMAScriptParser.While = 87;
ECMAScriptParser.With = 88;
ECMAScriptParser.Yield = 89;
ECMAScriptParser.Enum = 90;
ECMAScriptParser.Null = 91;
ECMAScriptParser.True = 92;
ECMAScriptParser.False = 93;
ECMAScriptParser.As = 94;
ECMAScriptParser.Async = 95;
ECMAScriptParser.From = 96;
ECMAScriptParser.Get = 97;
ECMAScriptParser.Let = 98;
ECMAScriptParser.Of = 99;
ECMAScriptParser.Set = 100;
ECMAScriptParser.Static = 101;
ECMAScriptParser.Target = 102;
ECMAScriptParser.StringLiteral = 103;
ECMAScriptParser.IdentifierName = 104;
ECMAScriptParser.WhiteSpace = 105;
ECMAScriptParser.LineTerminator = 106;

ECMAScriptParser.RULE_file = 0;
ECMAScriptParser.RULE_eos = 1;
ECMAScriptParser.RULE_statement = 2;
ECMAScriptParser.RULE_statementList = 3;
ECMAScriptParser.RULE_statementListItem = 4;
ECMAScriptParser.RULE_emptyStatement = 5;
ECMAScriptParser.RULE_returnStatement = 6;
ECMAScriptParser.RULE_debuggerStatement = 7;
ECMAScriptParser.RULE_expressionStatement = 8;
ECMAScriptParser.RULE_bindingElement = 9;
ECMAScriptParser.RULE_bindingRestElement = 10;
ECMAScriptParser.RULE_singleNameBinding = 11;
ECMAScriptParser.RULE_ifStatement = 12;
ECMAScriptParser.RULE_variableStatement = 13;
ECMAScriptParser.RULE_variableDeclarationList = 14;
ECMAScriptParser.RULE_variableDeclaration = 15;
ECMAScriptParser.RULE_uniqueFormalParameters = 16;
ECMAScriptParser.RULE_formalParameters = 17;
ECMAScriptParser.RULE_formalParameterList = 18;
ECMAScriptParser.RULE_functionRestParameter = 19;
ECMAScriptParser.RULE_formalParameter = 20;
ECMAScriptParser.RULE_arrowParameters = 21;
ECMAScriptParser.RULE_functionBody = 22;
ECMAScriptParser.RULE_conciseBody = 23;
ECMAScriptParser.RULE_methodDefinition = 24;
ECMAScriptParser.RULE_propertySetParameterList = 25;
ECMAScriptParser.RULE_identifierReference = 26;
ECMAScriptParser.RULE_bindingIdentifier = 27;
ECMAScriptParser.RULE_identifier = 28;
ECMAScriptParser.RULE_coverParenthesizedExpressionAndArrowParameterList = 29;
ECMAScriptParser.RULE_arrayLiteral = 30;
ECMAScriptParser.RULE_propertyDefinitionList = 31;
ECMAScriptParser.RULE_propertyDefinition = 32;
ECMAScriptParser.RULE_propertyName = 33;
ECMAScriptParser.RULE_literalPropertyName = 34;
ECMAScriptParser.RULE_coverInitializedName = 35;
ECMAScriptParser.RULE_callExpression = 36;
ECMAScriptParser.RULE_arguments = 37;
ECMAScriptParser.RULE_argumentList = 38;
ECMAScriptParser.RULE_initializer = 39;
ECMAScriptParser.RULE_expressionList = 40;
ECMAScriptParser.RULE_expression = 41;
ECMAScriptParser.RULE_unaryOperator = 42;
ECMAScriptParser.RULE_identifierName = 43;
ECMAScriptParser.RULE_reservedWord = 44;
ECMAScriptParser.RULE_keyword = 45;
ECMAScriptParser.RULE_futureReservedWord = 46;
ECMAScriptParser.RULE_miscIdentifier = 47;

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

FileContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

FileContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptParser.EOF, 0);
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
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.statementList();
        this.state = 97;
        this.match(ECMAScriptParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.enterRule(localctx, 2, ECMAScriptParser.RULE_eos);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.match(ECMAScriptParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            if (!( this.mayInsertSemiColon())) {
                throw new antlr4.error.FailedPredicateException(this, "this.mayInsertSemiColon()");
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

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.variableStatement = function() {
    return this.getTypedRuleContext(VariableStatementContext,0);
};

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitStatement(this);
	}
};




ECMAScriptParser.StatementContext = StatementContext;

ECMAScriptParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptParser.RULE_statement);
    try {
        this.state = 108;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.variableStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 104;
            this.expressionStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 105;
            this.ifStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 106;
            if (!( this.canReturn())) {
                throw new antlr4.error.FailedPredicateException(this, "this.canReturn()");
            }
            this.state = 107;
            this.returnStatement();
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

function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_statementList;
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

StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitStatementList(this);
	}
};




ECMAScriptParser.StatementListContext = StatementListContext;

ECMAScriptParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScriptParser.RULE_statementList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 110;
        		this.statementListItem();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 113; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptParser.RULE_statementListItem;
    return this;
}

StatementListItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListItemContext.prototype.constructor = StatementListItemContext;

StatementListItemContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

StatementListItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterStatementListItem(this);
	}
};

StatementListItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitStatementListItem(this);
	}
};




ECMAScriptParser.StatementListItemContext = StatementListItemContext;

ECMAScriptParser.prototype.statementListItem = function() {

    var localctx = new StatementListItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ECMAScriptParser.RULE_statementListItem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
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

function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptParser.SemiColon, 0);
};

EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitEmptyStatement(this);
	}
};




ECMAScriptParser.EmptyStatementContext = EmptyStatementContext;

ECMAScriptParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ECMAScriptParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(ECMAScriptParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.Return = function() {
    return this.getToken(ECMAScriptParser.Return, 0);
};

ReturnStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitReturnStatement(this);
	}
};




ECMAScriptParser.ReturnStatementContext = ReturnStatementContext;

ECMAScriptParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ECMAScriptParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(ECMAScriptParser.Return);
        this.state = 120;
        if (!( this.noLineTerminatorHere())) {
            throw new antlr4.error.FailedPredicateException(this, "this.noLineTerminatorHere()");
        }
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 121;
            this.expression(0);

        }
        this.state = 124;
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

function DebuggerStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_debuggerStatement;
    return this;
}

DebuggerStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DebuggerStatementContext.prototype.constructor = DebuggerStatementContext;

DebuggerStatementContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptParser.Debugger, 0);
};

DebuggerStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

DebuggerStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterDebuggerStatement(this);
	}
};

DebuggerStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitDebuggerStatement(this);
	}
};




ECMAScriptParser.DebuggerStatementContext = DebuggerStatementContext;

ECMAScriptParser.prototype.debuggerStatement = function() {

    var localctx = new DebuggerStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ECMAScriptParser.RULE_debuggerStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.match(ECMAScriptParser.Debugger);
        this.state = 127;
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

ExpressionStatementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
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
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        if (!( this.isValidExpressionStatement())) {
            throw new antlr4.error.FailedPredicateException(this, "this.isValidExpressionStatement()");
        }
        this.state = 130;
        this.expressionList();
        this.state = 131;
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

function BindingElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_bindingElement;
    return this;
}

BindingElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingElementContext.prototype.constructor = BindingElementContext;

BindingElementContext.prototype.singleNameBinding = function() {
    return this.getTypedRuleContext(SingleNameBindingContext,0);
};

BindingElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBindingElement(this);
	}
};

BindingElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBindingElement(this);
	}
};




ECMAScriptParser.BindingElementContext = BindingElementContext;

ECMAScriptParser.prototype.bindingElement = function() {

    var localctx = new BindingElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScriptParser.RULE_bindingElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
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

function BindingRestElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_bindingRestElement;
    return this;
}

BindingRestElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingRestElementContext.prototype.constructor = BindingRestElementContext;

BindingRestElementContext.prototype.Spread = function() {
    return this.getToken(ECMAScriptParser.Spread, 0);
};

BindingRestElementContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

BindingRestElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBindingRestElement(this);
	}
};

BindingRestElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBindingRestElement(this);
	}
};




ECMAScriptParser.BindingRestElementContext = BindingRestElementContext;

ECMAScriptParser.prototype.bindingRestElement = function() {

    var localctx = new BindingRestElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScriptParser.RULE_bindingRestElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(ECMAScriptParser.Spread);
        this.state = 136;
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

function SingleNameBindingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_singleNameBinding;
    return this;
}

SingleNameBindingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleNameBindingContext.prototype.constructor = SingleNameBindingContext;

SingleNameBindingContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

SingleNameBindingContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterSingleNameBinding(this);
	}
};

SingleNameBindingContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitSingleNameBinding(this);
	}
};




ECMAScriptParser.SingleNameBindingContext = SingleNameBindingContext;

ECMAScriptParser.prototype.singleNameBinding = function() {

    var localctx = new SingleNameBindingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ECMAScriptParser.RULE_singleNameBinding);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
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

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.If = function() {
    return this.getToken(ECMAScriptParser.If, 0);
};

IfStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

IfStatementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

IfStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
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
    return this.getToken(ECMAScriptParser.Else, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitIfStatement(this);
	}
};




ECMAScriptParser.IfStatementContext = IfStatementContext;

ECMAScriptParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ECMAScriptParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(ECMAScriptParser.If);
        this.state = 141;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 142;
        this.expressionList();
        this.state = 143;
        this.match(ECMAScriptParser.CloseParen);
        this.state = 144;
        this.statement();
        this.state = 147;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        if(la_===1) {
            this.state = 145;
            this.match(ECMAScriptParser.Else);
            this.state = 146;
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

function VariableStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_variableStatement;
    return this;
}

VariableStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableStatementContext.prototype.constructor = VariableStatementContext;

VariableStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScriptParser.Var, 0);
};

VariableStatementContext.prototype.variableDeclarationList = function() {
    return this.getTypedRuleContext(VariableDeclarationListContext,0);
};

VariableStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

VariableStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterVariableStatement(this);
	}
};

VariableStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitVariableStatement(this);
	}
};




ECMAScriptParser.VariableStatementContext = VariableStatementContext;

ECMAScriptParser.prototype.variableStatement = function() {

    var localctx = new VariableStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ECMAScriptParser.RULE_variableStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(ECMAScriptParser.Var);
        this.state = 150;
        this.variableDeclarationList();
        this.state = 151;
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
    this.ruleIndex = ECMAScriptParser.RULE_variableDeclarationList;
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
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


VariableDeclarationListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterVariableDeclarationList(this);
	}
};

VariableDeclarationListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitVariableDeclarationList(this);
	}
};




ECMAScriptParser.VariableDeclarationListContext = VariableDeclarationListContext;

ECMAScriptParser.prototype.variableDeclarationList = function() {

    var localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ECMAScriptParser.RULE_variableDeclarationList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.variableDeclaration();
        this.state = 158;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 154;
                this.match(ECMAScriptParser.Comma);
                this.state = 155;
                this.variableDeclaration(); 
            }
            this.state = 160;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
    this.ruleIndex = ECMAScriptParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitVariableDeclaration(this);
	}
};




ECMAScriptParser.VariableDeclarationContext = VariableDeclarationContext;

ECMAScriptParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ECMAScriptParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
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

function UniqueFormalParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_uniqueFormalParameters;
    return this;
}

UniqueFormalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UniqueFormalParametersContext.prototype.constructor = UniqueFormalParametersContext;

UniqueFormalParametersContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

UniqueFormalParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterUniqueFormalParameters(this);
	}
};

UniqueFormalParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitUniqueFormalParameters(this);
	}
};




ECMAScriptParser.UniqueFormalParametersContext = UniqueFormalParametersContext;

ECMAScriptParser.prototype.uniqueFormalParameters = function() {

    var localctx = new UniqueFormalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ECMAScriptParser.RULE_uniqueFormalParameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
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
    this.ruleIndex = ECMAScriptParser.RULE_formalParameters;
    return this;
}

FormalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParametersContext.prototype.constructor = FormalParametersContext;


FormalParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFormalParameters(this);
	}
};

FormalParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFormalParameters(this);
	}
};




ECMAScriptParser.FormalParametersContext = FormalParametersContext;

ECMAScriptParser.prototype.formalParameters = function() {

    var localctx = new FormalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ECMAScriptParser.RULE_formalParameters);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptParser.RULE_formalParameterList;
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
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFormalParameterList(this);
	}
};




ECMAScriptParser.FormalParameterListContext = FormalParameterListContext;

ECMAScriptParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ECMAScriptParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.formalParameter();
        this.state = 172;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptParser.Comma) {
            this.state = 168;
            this.match(ECMAScriptParser.Comma);
            this.state = 169;
            this.formalParameter();
            this.state = 174;
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

function FunctionRestParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_functionRestParameter;
    return this;
}

FunctionRestParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionRestParameterContext.prototype.constructor = FunctionRestParameterContext;

FunctionRestParameterContext.prototype.bindingRestElement = function() {
    return this.getTypedRuleContext(BindingRestElementContext,0);
};

FunctionRestParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFunctionRestParameter(this);
	}
};

FunctionRestParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFunctionRestParameter(this);
	}
};




ECMAScriptParser.FunctionRestParameterContext = FunctionRestParameterContext;

ECMAScriptParser.prototype.functionRestParameter = function() {

    var localctx = new FunctionRestParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ECMAScriptParser.RULE_functionRestParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.bindingRestElement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptParser.RULE_formalParameter;
    return this;
}

FormalParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterContext.prototype.constructor = FormalParameterContext;

FormalParameterContext.prototype.bindingElement = function() {
    return this.getTypedRuleContext(BindingElementContext,0);
};

FormalParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFormalParameter(this);
	}
};

FormalParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFormalParameter(this);
	}
};




ECMAScriptParser.FormalParameterContext = FormalParameterContext;

ECMAScriptParser.prototype.formalParameter = function() {

    var localctx = new FormalParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ECMAScriptParser.RULE_formalParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
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

function ArrowParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_arrowParameters;
    return this;
}

ArrowParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrowParametersContext.prototype.constructor = ArrowParametersContext;

ArrowParametersContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

ArrowParametersContext.prototype.coverParenthesizedExpressionAndArrowParameterList = function() {
    return this.getTypedRuleContext(CoverParenthesizedExpressionAndArrowParameterListContext,0);
};

ArrowParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArrowParameters(this);
	}
};

ArrowParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArrowParameters(this);
	}
};




ECMAScriptParser.ArrowParametersContext = ArrowParametersContext;

ECMAScriptParser.prototype.arrowParameters = function() {

    var localctx = new ArrowParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ECMAScriptParser.RULE_arrowParameters);
    try {
        this.state = 181;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 179;
            this.bindingIdentifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
            this.coverParenthesizedExpressionAndArrowParameterList();
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

FunctionBodyContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
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
    this.enterRule(localctx, 44, ECMAScriptParser.RULE_functionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.enterFunctionBody()
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 184;
            this.statementList();

        }
        this.exitFunctionBody()
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConciseBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_conciseBody;
    return this;
}

ConciseBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConciseBodyContext.prototype.constructor = ConciseBodyContext;

ConciseBodyContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

ConciseBodyContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

ConciseBodyContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

ConciseBodyContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConciseBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterConciseBody(this);
	}
};

ConciseBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitConciseBody(this);
	}
};




ECMAScriptParser.ConciseBodyContext = ConciseBodyContext;

ECMAScriptParser.prototype.conciseBody = function() {

    var localctx = new ConciseBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ECMAScriptParser.RULE_conciseBody);
    try {
        this.state = 194;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 189;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 190;
            this.functionBody();
            this.state = 191;
            this.match(ECMAScriptParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.expression(0);
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

function MethodDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_methodDefinition;
    return this;
}

MethodDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodDefinitionContext.prototype.constructor = MethodDefinitionContext;

MethodDefinitionContext.prototype.Get = function() {
    return this.getToken(ECMAScriptParser.Get, 0);
};

MethodDefinitionContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

MethodDefinitionContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

MethodDefinitionContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

MethodDefinitionContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

MethodDefinitionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

MethodDefinitionContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

MethodDefinitionContext.prototype.Set = function() {
    return this.getToken(ECMAScriptParser.Set, 0);
};

MethodDefinitionContext.prototype.propertySetParameterList = function() {
    return this.getTypedRuleContext(PropertySetParameterListContext,0);
};

MethodDefinitionContext.prototype.uniqueFormalParameters = function() {
    return this.getTypedRuleContext(UniqueFormalParametersContext,0);
};

MethodDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterMethodDefinition(this);
	}
};

MethodDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitMethodDefinition(this);
	}
};




ECMAScriptParser.MethodDefinitionContext = MethodDefinitionContext;

ECMAScriptParser.prototype.methodDefinition = function() {

    var localctx = new MethodDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ECMAScriptParser.RULE_methodDefinition);
    try {
        this.state = 221;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 196;
            this.match(ECMAScriptParser.Get);
            this.state = 197;
            this.propertyName();
            this.state = 198;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 199;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 200;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 201;
            this.functionBody();
            this.state = 202;
            this.match(ECMAScriptParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.match(ECMAScriptParser.Set);
            this.state = 205;
            this.propertyName();
            this.state = 206;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 207;
            this.propertySetParameterList();
            this.state = 208;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 209;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 210;
            this.functionBody();
            this.state = 211;
            this.match(ECMAScriptParser.CloseBrace);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 213;
            this.propertyName();
            this.state = 214;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 215;
            this.uniqueFormalParameters();
            this.state = 216;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 217;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 218;
            this.functionBody();
            this.state = 219;
            this.match(ECMAScriptParser.CloseBrace);
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

function PropertySetParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_propertySetParameterList;
    return this;
}

PropertySetParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertySetParameterListContext.prototype.constructor = PropertySetParameterListContext;

PropertySetParameterListContext.prototype.formalParameter = function() {
    return this.getTypedRuleContext(FormalParameterContext,0);
};

PropertySetParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertySetParameterList(this);
	}
};

PropertySetParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertySetParameterList(this);
	}
};




ECMAScriptParser.PropertySetParameterListContext = PropertySetParameterListContext;

ECMAScriptParser.prototype.propertySetParameterList = function() {

    var localctx = new PropertySetParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ECMAScriptParser.RULE_propertySetParameterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
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

function IdentifierReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_identifierReference;
    return this;
}

IdentifierReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierReferenceContext.prototype.constructor = IdentifierReferenceContext;

IdentifierReferenceContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IdentifierReferenceContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptParser.Yield, 0);
};

IdentifierReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterIdentifierReference(this);
	}
};

IdentifierReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitIdentifierReference(this);
	}
};




ECMAScriptParser.IdentifierReferenceContext = IdentifierReferenceContext;

ECMAScriptParser.prototype.identifierReference = function() {

    var localctx = new IdentifierReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ECMAScriptParser.RULE_identifierReference);
    try {
        this.state = 228;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 225;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 226;
            if (!( !this.canYield())) {
                throw new antlr4.error.FailedPredicateException(this, "!this.canYield()");
            }
            this.state = 227;
            this.match(ECMAScriptParser.Yield);
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

function BindingIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_bindingIdentifier;
    return this;
}

BindingIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingIdentifierContext.prototype.constructor = BindingIdentifierContext;

BindingIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

BindingIdentifierContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptParser.Yield, 0);
};

BindingIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBindingIdentifier(this);
	}
};

BindingIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBindingIdentifier(this);
	}
};




ECMAScriptParser.BindingIdentifierContext = BindingIdentifierContext;

ECMAScriptParser.prototype.bindingIdentifier = function() {

    var localctx = new BindingIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ECMAScriptParser.RULE_bindingIdentifier);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 230;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 231;
            if (!( !this.canYield())) {
                throw new antlr4.error.FailedPredicateException(this, "!this.canYield()");
            }
            this.state = 232;
            this.match(ECMAScriptParser.Yield);
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

IdentifierContext.prototype.miscIdentifier = function() {
    return this.getTypedRuleContext(MiscIdentifierContext,0);
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
    this.enterRule(localctx, 56, ECMAScriptParser.RULE_identifier);
    try {
        this.state = 237;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 235;
            this.match(ECMAScriptParser.IdentifierName);
            break;
        case ECMAScriptParser.As:
        case ECMAScriptParser.Async:
        case ECMAScriptParser.From:
        case ECMAScriptParser.Get:
        case ECMAScriptParser.Let:
        case ECMAScriptParser.Of:
        case ECMAScriptParser.Set:
        case ECMAScriptParser.Static:
        case ECMAScriptParser.Target:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
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

function CoverParenthesizedExpressionAndArrowParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_coverParenthesizedExpressionAndArrowParameterList;
    return this;
}

CoverParenthesizedExpressionAndArrowParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoverParenthesizedExpressionAndArrowParameterListContext.prototype.constructor = CoverParenthesizedExpressionAndArrowParameterListContext;

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptParser.Comma, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.Spread = function() {
    return this.getToken(ECMAScriptParser.Spread, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterCoverParenthesizedExpressionAndArrowParameterList(this);
	}
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitCoverParenthesizedExpressionAndArrowParameterList(this);
	}
};




ECMAScriptParser.CoverParenthesizedExpressionAndArrowParameterListContext = CoverParenthesizedExpressionAndArrowParameterListContext;

ECMAScriptParser.prototype.coverParenthesizedExpressionAndArrowParameterList = function() {

    var localctx = new CoverParenthesizedExpressionAndArrowParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ECMAScriptParser.RULE_coverParenthesizedExpressionAndArrowParameterList);
    var _la = 0; // Token type
    try {
        this.state = 254;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 239;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 244;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            if(la_===1) {
                this.state = 240;
                this.expressionList();
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ECMAScriptParser.Comma) {
                    this.state = 241;
                    this.match(ECMAScriptParser.Comma);
                }


            }
            this.state = 246;
            this.match(ECMAScriptParser.CloseParen);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 247;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 248;
            this.expressionList();
            this.state = 249;
            this.match(ECMAScriptParser.Comma);
            this.state = 250;
            this.match(ECMAScriptParser.Spread);
            this.state = 251;
            this.bindingIdentifier();
            this.state = 252;
            this.match(ECMAScriptParser.CloseParen);
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

function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.OpenBracket = function() {
    return this.getToken(ECMAScriptParser.OpenBracket, 0);
};

ArrayLiteralContext.prototype.CloseBracket = function() {
    return this.getToken(ECMAScriptParser.CloseBracket, 0);
};

ArrayLiteralContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


ArrayLiteralContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArrayLiteralContext.prototype.Spread = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Spread);
    } else {
        return this.getToken(ECMAScriptParser.Spread, i);
    }
};


ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArrayLiteral(this);
	}
};




ECMAScriptParser.ArrayLiteralContext = ArrayLiteralContext;

ECMAScriptParser.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ECMAScriptParser.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.match(ECMAScriptParser.OpenBracket);
        this.state = 260;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 257;
                this.match(ECMAScriptParser.Comma); 
            }
            this.state = 262;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

        this.state = 281;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 264;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
            if(la_===1) {
                this.state = 263;
                this.match(ECMAScriptParser.Spread);

            }
            this.state = 266;
            this.expression(0);
            this.state = 278;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 268; 
                    this._errHandler.sync(this);
                    var _alt = 1;
                    do {
                    	switch (_alt) {
                    	case 1:
                    		this.state = 267;
                    		this.match(ECMAScriptParser.Comma);
                    		break;
                    	default:
                    		throw new antlr4.error.NoViableAltException(this);
                    	}
                    	this.state = 270; 
                    	this._errHandler.sync(this);
                    	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                    this.state = 273;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
                    if(la_===1) {
                        this.state = 272;
                        this.match(ECMAScriptParser.Spread);

                    }
                    this.state = 275;
                    this.expression(0); 
                }
                this.state = 280;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
            }


        }
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptParser.Comma) {
            this.state = 283;
            this.match(ECMAScriptParser.Comma);
            this.state = 288;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 289;
        this.match(ECMAScriptParser.CloseBracket);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.enterRule(localctx, 62, ECMAScriptParser.RULE_propertyDefinitionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.propertyDefinition();
        this.state = 296;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 292;
                this.match(ECMAScriptParser.Comma);
                this.state = 293;
                this.propertyDefinition(); 
            }
            this.state = 298;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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

PropertyDefinitionContext.prototype.methodDefinition = function() {
    return this.getTypedRuleContext(MethodDefinitionContext,0);
};

PropertyDefinitionContext.prototype.coverInitializedName = function() {
    return this.getTypedRuleContext(CoverInitializedNameContext,0);
};

PropertyDefinitionContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyDefinitionContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptParser.Colon, 0);
};

PropertyDefinitionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PropertyDefinitionContext.prototype.identifierReference = function() {
    return this.getTypedRuleContext(IdentifierReferenceContext,0);
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
    this.enterRule(localctx, 64, ECMAScriptParser.RULE_propertyDefinition);
    try {
        this.state = 306;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 299;
            this.methodDefinition();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 300;
            this.coverInitializedName();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 301;
            this.propertyName();
            this.state = 302;
            this.match(ECMAScriptParser.Colon);
            this.state = 303;
            this.expression(0);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 305;
            this.identifierReference();
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
    this.ruleIndex = ECMAScriptParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.literalPropertyName = function() {
    return this.getTypedRuleContext(LiteralPropertyNameContext,0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertyName(this);
	}
};




ECMAScriptParser.PropertyNameContext = PropertyNameContext;

ECMAScriptParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ECMAScriptParser.RULE_propertyName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
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
    this.ruleIndex = ECMAScriptParser.RULE_literalPropertyName;
    return this;
}

LiteralPropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralPropertyNameContext.prototype.constructor = LiteralPropertyNameContext;

LiteralPropertyNameContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};

LiteralPropertyNameContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptParser.StringLiteral, 0);
};

LiteralPropertyNameContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptParser.NumericLiteral, 0);
};

LiteralPropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterLiteralPropertyName(this);
	}
};

LiteralPropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitLiteralPropertyName(this);
	}
};




ECMAScriptParser.LiteralPropertyNameContext = LiteralPropertyNameContext;

ECMAScriptParser.prototype.literalPropertyName = function() {

    var localctx = new LiteralPropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ECMAScriptParser.RULE_literalPropertyName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.NullLiteral:
        case ECMAScriptParser.BooleanLiteral:
        case ECMAScriptParser.Await:
        case ECMAScriptParser.Break:
        case ECMAScriptParser.Case:
        case ECMAScriptParser.Catch:
        case ECMAScriptParser.Class:
        case ECMAScriptParser.Const:
        case ECMAScriptParser.Continue:
        case ECMAScriptParser.Debugger:
        case ECMAScriptParser.Default:
        case ECMAScriptParser.Delete:
        case ECMAScriptParser.Do:
        case ECMAScriptParser.Else:
        case ECMAScriptParser.Export:
        case ECMAScriptParser.Extends:
        case ECMAScriptParser.Finally:
        case ECMAScriptParser.For:
        case ECMAScriptParser.Function:
        case ECMAScriptParser.If:
        case ECMAScriptParser.Import:
        case ECMAScriptParser.In:
        case ECMAScriptParser.Instanceof:
        case ECMAScriptParser.New:
        case ECMAScriptParser.Return:
        case ECMAScriptParser.Super:
        case ECMAScriptParser.Switch:
        case ECMAScriptParser.This:
        case ECMAScriptParser.Throw:
        case ECMAScriptParser.Try:
        case ECMAScriptParser.Typeof:
        case ECMAScriptParser.Var:
        case ECMAScriptParser.Void:
        case ECMAScriptParser.While:
        case ECMAScriptParser.With:
        case ECMAScriptParser.Yield:
        case ECMAScriptParser.Enum:
        case ECMAScriptParser.As:
        case ECMAScriptParser.Async:
        case ECMAScriptParser.From:
        case ECMAScriptParser.Get:
        case ECMAScriptParser.Let:
        case ECMAScriptParser.Of:
        case ECMAScriptParser.Set:
        case ECMAScriptParser.Static:
        case ECMAScriptParser.Target:
        case ECMAScriptParser.IdentifierName:
            this.state = 310;
            this.identifierName();
            break;
        case ECMAScriptParser.StringLiteral:
            this.state = 311;
            this.match(ECMAScriptParser.StringLiteral);
            break;
        case ECMAScriptParser.NumericLiteral:
            this.state = 312;
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

function CoverInitializedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_coverInitializedName;
    return this;
}

CoverInitializedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoverInitializedNameContext.prototype.constructor = CoverInitializedNameContext;

CoverInitializedNameContext.prototype.identifierReference = function() {
    return this.getTypedRuleContext(IdentifierReferenceContext,0);
};

CoverInitializedNameContext.prototype.initializer = function() {
    return this.getTypedRuleContext(InitializerContext,0);
};

CoverInitializedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterCoverInitializedName(this);
	}
};

CoverInitializedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitCoverInitializedName(this);
	}
};




ECMAScriptParser.CoverInitializedNameContext = CoverInitializedNameContext;

ECMAScriptParser.prototype.coverInitializedName = function() {

    var localctx = new CoverInitializedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ECMAScriptParser.RULE_coverInitializedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        this.identifierReference();
        this.state = 316;
        this.initializer();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptParser.RULE_callExpression;
    return this;
}

CallExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallExpressionContext.prototype.constructor = CallExpressionContext;


CallExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterCallExpression(this);
	}
};

CallExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitCallExpression(this);
	}
};




ECMAScriptParser.CallExpressionContext = CallExpressionContext;

ECMAScriptParser.prototype.callExpression = function() {

    var localctx = new CallExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, ECMAScriptParser.RULE_callExpression);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ArgumentsContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

ArgumentsContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

ArgumentsContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptParser.Comma, 0);
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArguments(this);
	}
};




ECMAScriptParser.ArgumentsContext = ArgumentsContext;

ECMAScriptParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ECMAScriptParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 325;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 321;
            this.argumentList();
            this.state = 323;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptParser.Comma) {
                this.state = 322;
                this.match(ECMAScriptParser.Comma);
            }


        }
        this.state = 327;
        this.match(ECMAScriptParser.CloseParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.expressionList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionListContext);
    } else {
        return this.getTypedRuleContext(ExpressionListContext,i);
    }
};

ArgumentListContext.prototype.Spread = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Spread);
    } else {
        return this.getToken(ECMAScriptParser.Spread, i);
    }
};


ArgumentListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


ArgumentListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArgumentList(this);
	}
};

ArgumentListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArgumentList(this);
	}
};




ECMAScriptParser.ArgumentListContext = ArgumentListContext;

ECMAScriptParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ECMAScriptParser.RULE_argumentList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        if(la_===1) {
            this.state = 329;
            this.match(ECMAScriptParser.Spread);

        }
        this.state = 332;
        this.expressionList();
        this.state = 338;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 333;
                this.match(ECMAScriptParser.Comma);
                this.state = 334;
                this.match(ECMAScriptParser.Spread);
                this.state = 335;
                this.expressionList(); 
            }
            this.state = 340;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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

function InitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_initializer;
    return this;
}

InitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitializerContext.prototype.constructor = InitializerContext;

InitializerContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptParser.Assign, 0);
};

InitializerContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterInitializer(this);
	}
};

InitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitInitializer(this);
	}
};




ECMAScriptParser.InitializerContext = InitializerContext;

ECMAScriptParser.prototype.initializer = function() {

    var localctx = new InitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ECMAScriptParser.RULE_initializer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this.match(ECMAScriptParser.Assign);
        this.state = 342;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitExpressionList(this);
	}
};




ECMAScriptParser.ExpressionListContext = ExpressionListContext;

ECMAScriptParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ECMAScriptParser.RULE_expressionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.expression(0);
        this.state = 349;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 345;
                this.match(ECMAScriptParser.Comma);
                this.state = 346;
                this.expression(0); 
            }
            this.state = 351;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
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

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.This = function() {
    return this.getToken(ECMAScriptParser.This, 0);
};

ExpressionContext.prototype.identifierReference = function() {
    return this.getTypedRuleContext(IdentifierReferenceContext,0);
};

ExpressionContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptParser.NumericLiteral, 0);
};

ExpressionContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};

ExpressionContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

ExpressionContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

ExpressionContext.prototype.propertyDefinitionList = function() {
    return this.getTypedRuleContext(PropertyDefinitionListContext,0);
};

ExpressionContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptParser.Comma, 0);
};

ExpressionContext.prototype.Function = function() {
    return this.getToken(ECMAScriptParser.Function, 0);
};

ExpressionContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ExpressionContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

ExpressionContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

ExpressionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

ExpressionContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

ExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionContext.prototype.New = function() {
    return this.getToken(ECMAScriptParser.New, 0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

ExpressionContext.prototype.unaryOperator = function() {
    return this.getTypedRuleContext(UnaryOperatorContext,0);
};

ExpressionContext.prototype.arrowParameters = function() {
    return this.getTypedRuleContext(ArrowParametersContext,0);
};

ExpressionContext.prototype.FatArrow = function() {
    return this.getToken(ECMAScriptParser.FatArrow, 0);
};

ExpressionContext.prototype.conciseBody = function() {
    return this.getTypedRuleContext(ConciseBodyContext,0);
};

ExpressionContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptParser.Assign, 0);
};

ExpressionContext.prototype.OpenBracket = function() {
    return this.getToken(ECMAScriptParser.OpenBracket, 0);
};

ExpressionContext.prototype.CloseBracket = function() {
    return this.getToken(ECMAScriptParser.CloseBracket, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitExpression(this);
	}
};



ECMAScriptParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 82;
    this.enterRecursionRule(localctx, 82, ECMAScriptParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 393;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.state = 353;
            this.match(ECMAScriptParser.This);
            break;

        case 2:
            this.state = 354;
            this.identifierReference();
            break;

        case 3:
            this.state = 355;
            this.match(ECMAScriptParser.NumericLiteral);
            break;

        case 4:
            this.state = 356;
            this.arrayLiteral();
            break;

        case 5:
            this.state = 357;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 362;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
            if(la_===1) {
                this.state = 358;
                this.propertyDefinitionList();
                this.state = 360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ECMAScriptParser.Comma) {
                    this.state = 359;
                    this.match(ECMAScriptParser.Comma);
                }


            }
            this.state = 364;
            this.match(ECMAScriptParser.CloseBrace);
            break;

        case 6:
            this.state = 365;
            this.match(ECMAScriptParser.Function);
            this.state = 367;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
            if(la_===1) {
                this.state = 366;
                this.bindingIdentifier();

            }
            this.state = 369;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 370;
            this.formalParameters();
            this.state = 371;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 372;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 373;
            this.functionBody();
            this.state = 374;
            this.match(ECMAScriptParser.CloseBrace);
            break;

        case 7:
            this.state = 376;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 377;
            this.expressionList();
            this.state = 378;
            this.match(ECMAScriptParser.CloseParen);
            break;

        case 8:
            this.state = 380;
            this.match(ECMAScriptParser.New);
            this.state = 381;
            this.expression(0);
            this.state = 383;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
            if(la_===1) {
                this.state = 382;
                this.arguments();

            }
            break;

        case 9:
            this.state = 385;
            this.unaryOperator();
            this.state = 386;
            this.expression(3);
            break;

        case 10:
            this.state = 388;
            this.arrowParameters();
            this.state = 389;
            if (!( this.noLineTerminatorHere())) {
                throw new antlr4.error.FailedPredicateException(this, "this.noLineTerminatorHere()");
            }
            this.state = 390;
            this.match(ECMAScriptParser.FatArrow);
            this.state = 391;
            this.conciseBody();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 407;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 405;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_expression);
                    this.state = 395;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 396;
                    this.match(ECMAScriptParser.Assign);
                    this.state = 397;
                    this.expression(2);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_expression);
                    this.state = 398;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 399;
                    this.arguments();
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_expression);
                    this.state = 400;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 401;
                    this.match(ECMAScriptParser.OpenBracket);
                    this.state = 402;
                    this.expressionList();
                    this.state = 403;
                    this.match(ECMAScriptParser.CloseBracket);
                    break;

                } 
            }
            this.state = 409;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
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

function UnaryOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_unaryOperator;
    return this;
}

UnaryOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryOperatorContext.prototype.constructor = UnaryOperatorContext;

UnaryOperatorContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptParser.Delete, 0);
};

UnaryOperatorContext.prototype.Void = function() {
    return this.getToken(ECMAScriptParser.Void, 0);
};

UnaryOperatorContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptParser.Typeof, 0);
};

UnaryOperatorContext.prototype.PlusPlus = function() {
    return this.getToken(ECMAScriptParser.PlusPlus, 0);
};

UnaryOperatorContext.prototype.MinusMinus = function() {
    return this.getToken(ECMAScriptParser.MinusMinus, 0);
};

UnaryOperatorContext.prototype.Plus = function() {
    return this.getToken(ECMAScriptParser.Plus, 0);
};

UnaryOperatorContext.prototype.Minus = function() {
    return this.getToken(ECMAScriptParser.Minus, 0);
};

UnaryOperatorContext.prototype.BitNot = function() {
    return this.getToken(ECMAScriptParser.BitNot, 0);
};

UnaryOperatorContext.prototype.Not = function() {
    return this.getToken(ECMAScriptParser.Not, 0);
};

UnaryOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterUnaryOperator(this);
	}
};

UnaryOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitUnaryOperator(this);
	}
};




ECMAScriptParser.UnaryOperatorContext = UnaryOperatorContext;

ECMAScriptParser.prototype.unaryOperator = function() {

    var localctx = new UnaryOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, ECMAScriptParser.RULE_unaryOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 410;
        _la = this._input.LA(1);
        if(!(((((_la - 20)) & ~0x1f) == 0 && ((1 << (_la - 20)) & ((1 << (ECMAScriptParser.Plus - 20)) | (1 << (ECMAScriptParser.Minus - 20)) | (1 << (ECMAScriptParser.PlusPlus - 20)) | (1 << (ECMAScriptParser.MinusMinus - 20)) | (1 << (ECMAScriptParser.Not - 20)) | (1 << (ECMAScriptParser.BitNot - 20)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (ECMAScriptParser.Delete - 65)) | (1 << (ECMAScriptParser.Typeof - 65)) | (1 << (ECMAScriptParser.Void - 65)))) !== 0))) {
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
    this.ruleIndex = ECMAScriptParser.RULE_identifierName;
    return this;
}

IdentifierNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierNameContext.prototype.constructor = IdentifierNameContext;

IdentifierNameContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptParser.IdentifierName, 0);
};

IdentifierNameContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

IdentifierNameContext.prototype.miscIdentifier = function() {
    return this.getTypedRuleContext(MiscIdentifierContext,0);
};

IdentifierNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterIdentifierName(this);
	}
};

IdentifierNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitIdentifierName(this);
	}
};




ECMAScriptParser.IdentifierNameContext = IdentifierNameContext;

ECMAScriptParser.prototype.identifierName = function() {

    var localctx = new IdentifierNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, ECMAScriptParser.RULE_identifierName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.IdentifierName:
            this.state = 412;
            this.match(ECMAScriptParser.IdentifierName);
            break;
        case ECMAScriptParser.NullLiteral:
        case ECMAScriptParser.BooleanLiteral:
        case ECMAScriptParser.Await:
        case ECMAScriptParser.Break:
        case ECMAScriptParser.Case:
        case ECMAScriptParser.Catch:
        case ECMAScriptParser.Class:
        case ECMAScriptParser.Const:
        case ECMAScriptParser.Continue:
        case ECMAScriptParser.Debugger:
        case ECMAScriptParser.Default:
        case ECMAScriptParser.Delete:
        case ECMAScriptParser.Do:
        case ECMAScriptParser.Else:
        case ECMAScriptParser.Export:
        case ECMAScriptParser.Extends:
        case ECMAScriptParser.Finally:
        case ECMAScriptParser.For:
        case ECMAScriptParser.Function:
        case ECMAScriptParser.If:
        case ECMAScriptParser.Import:
        case ECMAScriptParser.In:
        case ECMAScriptParser.Instanceof:
        case ECMAScriptParser.New:
        case ECMAScriptParser.Return:
        case ECMAScriptParser.Super:
        case ECMAScriptParser.Switch:
        case ECMAScriptParser.This:
        case ECMAScriptParser.Throw:
        case ECMAScriptParser.Try:
        case ECMAScriptParser.Typeof:
        case ECMAScriptParser.Var:
        case ECMAScriptParser.Void:
        case ECMAScriptParser.While:
        case ECMAScriptParser.With:
        case ECMAScriptParser.Yield:
        case ECMAScriptParser.Enum:
            this.state = 413;
            this.reservedWord();
            break;
        case ECMAScriptParser.As:
        case ECMAScriptParser.Async:
        case ECMAScriptParser.From:
        case ECMAScriptParser.Get:
        case ECMAScriptParser.Let:
        case ECMAScriptParser.Of:
        case ECMAScriptParser.Set:
        case ECMAScriptParser.Static:
        case ECMAScriptParser.Target:
            this.state = 414;
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

function ReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_reservedWord;
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
    return this.getToken(ECMAScriptParser.NullLiteral, 0);
};

ReservedWordContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScriptParser.BooleanLiteral, 0);
};

ReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterReservedWord(this);
	}
};

ReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitReservedWord(this);
	}
};




ECMAScriptParser.ReservedWordContext = ReservedWordContext;

ECMAScriptParser.prototype.reservedWord = function() {

    var localctx = new ReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, ECMAScriptParser.RULE_reservedWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 421;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.Await:
        case ECMAScriptParser.Break:
        case ECMAScriptParser.Case:
        case ECMAScriptParser.Catch:
        case ECMAScriptParser.Class:
        case ECMAScriptParser.Const:
        case ECMAScriptParser.Continue:
        case ECMAScriptParser.Debugger:
        case ECMAScriptParser.Default:
        case ECMAScriptParser.Delete:
        case ECMAScriptParser.Do:
        case ECMAScriptParser.Else:
        case ECMAScriptParser.Export:
        case ECMAScriptParser.Extends:
        case ECMAScriptParser.Finally:
        case ECMAScriptParser.For:
        case ECMAScriptParser.Function:
        case ECMAScriptParser.If:
        case ECMAScriptParser.Import:
        case ECMAScriptParser.In:
        case ECMAScriptParser.Instanceof:
        case ECMAScriptParser.New:
        case ECMAScriptParser.Return:
        case ECMAScriptParser.Super:
        case ECMAScriptParser.Switch:
        case ECMAScriptParser.This:
        case ECMAScriptParser.Throw:
        case ECMAScriptParser.Try:
        case ECMAScriptParser.Typeof:
        case ECMAScriptParser.Var:
        case ECMAScriptParser.Void:
        case ECMAScriptParser.While:
        case ECMAScriptParser.With:
        case ECMAScriptParser.Yield:
            this.state = 417;
            this.keyword();
            break;
        case ECMAScriptParser.Enum:
            this.state = 418;
            this.futureReservedWord();
            break;
        case ECMAScriptParser.NullLiteral:
            this.state = 419;
            this.match(ECMAScriptParser.NullLiteral);
            break;
        case ECMAScriptParser.BooleanLiteral:
            this.state = 420;
            this.match(ECMAScriptParser.BooleanLiteral);
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
    this.ruleIndex = ECMAScriptParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.Await = function() {
    return this.getToken(ECMAScriptParser.Await, 0);
};

KeywordContext.prototype.Break = function() {
    return this.getToken(ECMAScriptParser.Break, 0);
};

KeywordContext.prototype.Case = function() {
    return this.getToken(ECMAScriptParser.Case, 0);
};

KeywordContext.prototype.Catch = function() {
    return this.getToken(ECMAScriptParser.Catch, 0);
};

KeywordContext.prototype.Class = function() {
    return this.getToken(ECMAScriptParser.Class, 0);
};

KeywordContext.prototype.Const = function() {
    return this.getToken(ECMAScriptParser.Const, 0);
};

KeywordContext.prototype.Continue = function() {
    return this.getToken(ECMAScriptParser.Continue, 0);
};

KeywordContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptParser.Debugger, 0);
};

KeywordContext.prototype.Default = function() {
    return this.getToken(ECMAScriptParser.Default, 0);
};

KeywordContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptParser.Delete, 0);
};

KeywordContext.prototype.Do = function() {
    return this.getToken(ECMAScriptParser.Do, 0);
};

KeywordContext.prototype.Else = function() {
    return this.getToken(ECMAScriptParser.Else, 0);
};

KeywordContext.prototype.Export = function() {
    return this.getToken(ECMAScriptParser.Export, 0);
};

KeywordContext.prototype.Extends = function() {
    return this.getToken(ECMAScriptParser.Extends, 0);
};

KeywordContext.prototype.Finally = function() {
    return this.getToken(ECMAScriptParser.Finally, 0);
};

KeywordContext.prototype.For = function() {
    return this.getToken(ECMAScriptParser.For, 0);
};

KeywordContext.prototype.Function = function() {
    return this.getToken(ECMAScriptParser.Function, 0);
};

KeywordContext.prototype.If = function() {
    return this.getToken(ECMAScriptParser.If, 0);
};

KeywordContext.prototype.Import = function() {
    return this.getToken(ECMAScriptParser.Import, 0);
};

KeywordContext.prototype.In = function() {
    return this.getToken(ECMAScriptParser.In, 0);
};

KeywordContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScriptParser.Instanceof, 0);
};

KeywordContext.prototype.New = function() {
    return this.getToken(ECMAScriptParser.New, 0);
};

KeywordContext.prototype.Return = function() {
    return this.getToken(ECMAScriptParser.Return, 0);
};

KeywordContext.prototype.Super = function() {
    return this.getToken(ECMAScriptParser.Super, 0);
};

KeywordContext.prototype.Switch = function() {
    return this.getToken(ECMAScriptParser.Switch, 0);
};

KeywordContext.prototype.This = function() {
    return this.getToken(ECMAScriptParser.This, 0);
};

KeywordContext.prototype.Throw = function() {
    return this.getToken(ECMAScriptParser.Throw, 0);
};

KeywordContext.prototype.Try = function() {
    return this.getToken(ECMAScriptParser.Try, 0);
};

KeywordContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptParser.Typeof, 0);
};

KeywordContext.prototype.Var = function() {
    return this.getToken(ECMAScriptParser.Var, 0);
};

KeywordContext.prototype.Void = function() {
    return this.getToken(ECMAScriptParser.Void, 0);
};

KeywordContext.prototype.While = function() {
    return this.getToken(ECMAScriptParser.While, 0);
};

KeywordContext.prototype.With = function() {
    return this.getToken(ECMAScriptParser.With, 0);
};

KeywordContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptParser.Yield, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitKeyword(this);
	}
};




ECMAScriptParser.KeywordContext = KeywordContext;

ECMAScriptParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, ECMAScriptParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        _la = this._input.LA(1);
        if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptParser.Await - 56)) | (1 << (ECMAScriptParser.Break - 56)) | (1 << (ECMAScriptParser.Case - 56)) | (1 << (ECMAScriptParser.Catch - 56)) | (1 << (ECMAScriptParser.Class - 56)) | (1 << (ECMAScriptParser.Const - 56)) | (1 << (ECMAScriptParser.Continue - 56)) | (1 << (ECMAScriptParser.Debugger - 56)) | (1 << (ECMAScriptParser.Default - 56)) | (1 << (ECMAScriptParser.Delete - 56)) | (1 << (ECMAScriptParser.Do - 56)) | (1 << (ECMAScriptParser.Else - 56)) | (1 << (ECMAScriptParser.Export - 56)) | (1 << (ECMAScriptParser.Extends - 56)) | (1 << (ECMAScriptParser.Finally - 56)) | (1 << (ECMAScriptParser.For - 56)) | (1 << (ECMAScriptParser.Function - 56)) | (1 << (ECMAScriptParser.If - 56)) | (1 << (ECMAScriptParser.Import - 56)) | (1 << (ECMAScriptParser.In - 56)) | (1 << (ECMAScriptParser.Instanceof - 56)) | (1 << (ECMAScriptParser.New - 56)) | (1 << (ECMAScriptParser.Return - 56)) | (1 << (ECMAScriptParser.Super - 56)) | (1 << (ECMAScriptParser.Switch - 56)) | (1 << (ECMAScriptParser.This - 56)) | (1 << (ECMAScriptParser.Throw - 56)) | (1 << (ECMAScriptParser.Try - 56)) | (1 << (ECMAScriptParser.Typeof - 56)) | (1 << (ECMAScriptParser.Var - 56)) | (1 << (ECMAScriptParser.Void - 56)) | (1 << (ECMAScriptParser.While - 56)))) !== 0) || _la===ECMAScriptParser.With || _la===ECMAScriptParser.Yield)) {
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
    this.ruleIndex = ECMAScriptParser.RULE_futureReservedWord;
    return this;
}

FutureReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FutureReservedWordContext.prototype.constructor = FutureReservedWordContext;

FutureReservedWordContext.prototype.Enum = function() {
    return this.getToken(ECMAScriptParser.Enum, 0);
};

FutureReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFutureReservedWord(this);
	}
};

FutureReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFutureReservedWord(this);
	}
};




ECMAScriptParser.FutureReservedWordContext = FutureReservedWordContext;

ECMAScriptParser.prototype.futureReservedWord = function() {

    var localctx = new FutureReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, ECMAScriptParser.RULE_futureReservedWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 425;
        this.match(ECMAScriptParser.Enum);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptParser.RULE_miscIdentifier;
    return this;
}

MiscIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiscIdentifierContext.prototype.constructor = MiscIdentifierContext;

MiscIdentifierContext.prototype.As = function() {
    return this.getToken(ECMAScriptParser.As, 0);
};

MiscIdentifierContext.prototype.Async = function() {
    return this.getToken(ECMAScriptParser.Async, 0);
};

MiscIdentifierContext.prototype.From = function() {
    return this.getToken(ECMAScriptParser.From, 0);
};

MiscIdentifierContext.prototype.Get = function() {
    return this.getToken(ECMAScriptParser.Get, 0);
};

MiscIdentifierContext.prototype.Let = function() {
    return this.getToken(ECMAScriptParser.Let, 0);
};

MiscIdentifierContext.prototype.Of = function() {
    return this.getToken(ECMAScriptParser.Of, 0);
};

MiscIdentifierContext.prototype.Set = function() {
    return this.getToken(ECMAScriptParser.Set, 0);
};

MiscIdentifierContext.prototype.Static = function() {
    return this.getToken(ECMAScriptParser.Static, 0);
};

MiscIdentifierContext.prototype.Target = function() {
    return this.getToken(ECMAScriptParser.Target, 0);
};

MiscIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterMiscIdentifier(this);
	}
};

MiscIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitMiscIdentifier(this);
	}
};




ECMAScriptParser.MiscIdentifierContext = MiscIdentifierContext;

ECMAScriptParser.prototype.miscIdentifier = function() {

    var localctx = new MiscIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, ECMAScriptParser.RULE_miscIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        _la = this._input.LA(1);
        if(!(((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (ECMAScriptParser.As - 94)) | (1 << (ECMAScriptParser.Async - 94)) | (1 << (ECMAScriptParser.From - 94)) | (1 << (ECMAScriptParser.Get - 94)) | (1 << (ECMAScriptParser.Let - 94)) | (1 << (ECMAScriptParser.Of - 94)) | (1 << (ECMAScriptParser.Set - 94)) | (1 << (ECMAScriptParser.Static - 94)) | (1 << (ECMAScriptParser.Target - 94)))) !== 0))) {
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
	case 1:
			return this.eos_sempred(localctx, predIndex);
	case 2:
			return this.statement_sempred(localctx, predIndex);
	case 6:
			return this.returnStatement_sempred(localctx, predIndex);
	case 8:
			return this.expressionStatement_sempred(localctx, predIndex);
	case 26:
			return this.identifierReference_sempred(localctx, predIndex);
	case 27:
			return this.bindingIdentifier_sempred(localctx, predIndex);
	case 41:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ECMAScriptParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.mayInsertSemiColon();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.statement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.canReturn();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.returnStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.noLineTerminatorHere();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.expressionStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.isValidExpressionStatement();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.identifierReference_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return !this.canYield();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.bindingIdentifier_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return !this.canYield();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.noLineTerminatorHere();
		case 7:
			return this.precpred(this._ctx, 1);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ECMAScriptParser = ECMAScriptParser;
