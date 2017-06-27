// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptPassListener = require('./ECMAScriptPassListener').ECMAScriptPassListener;
var grammarFileName = "ECMAScriptPass.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003i\u0274\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0005\u0003v\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0006\u0004{\n\u0004\r\u0004\u000e\u0004|\u0003\u0005",
    "\u0003\u0005\u0005\u0005\u0081\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u0092\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007",
    "\u0096\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0006\b\u009b\n\b\r\b",
    "\u000e\b\u009c\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u00a6\n\n\f\n\u000e\n\u00a9\u000b\n\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00ad\n\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00bd\n\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d0\n",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d4\n\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00d8\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00e2\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00e6\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u00fc\n\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0101\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0108\n\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u010f",
    "\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u0121\n\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0125\n\u0016\u0005",
    "\u0016\u0127\n\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0006\u0017",
    "\u012c\n\u0017\r\u0017\u000e\u0017\u012d\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0005\u0018\u0134\n\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u0139\n\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0005\u001c\u0151\n\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003",
    " \u0003 \u0005 \u0163\n \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0007!\u016d\n!\f!\u000e!\u0170\u000b!\u0003\"\u0005\"\u0173",
    "\n\"\u0003#\u0003#\u0005#\u0177\n#\u0003#\u0005#\u017a\n#\u0003#\u0005",
    "#\u017d\n#\u0003#\u0003#\u0003$\u0005$\u0182\n$\u0003$\u0003$\u0003",
    "$\u0005$\u0187\n$\u0003$\u0007$\u018a\n$\f$\u000e$\u018d\u000b$\u0003",
    "%\u0006%\u0190\n%\r%\u000e%\u0191\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0005&\u0199\n&\u0003&\u0003&\u0005&\u019d\n&\u0003\'\u0003\'\u0003",
    "\'\u0007\'\u01a2\n\'\f\'\u000e\'\u01a5\u000b\'\u0003(\u0003(\u0003(",
    "\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0005(\u01ba\n(\u0003)\u0003",
    ")\u0003)\u0005)\u01bf\n)\u0003*\u0003*\u0003+\u0003+\u0005+\u01c5\n",
    "+\u0003+\u0003+\u0003,\u0003,\u0003,\u0007,\u01cc\n,\f,\u000e,\u01cf",
    "\u000b,\u0003-\u0003-\u0003-\u0007-\u01d4\n-\f-\u000e-\u01d7\u000b-",
    "\u0003.\u0003.\u0003.\u0005.\u01dc\n.\u0003.\u0003.\u0005.\u01e0\n.",
    "\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0005.\u01ea",
    "\n.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0005.\u0207\n.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0007.\u024a\n.\f.\u000e.\u024d\u000b",
    ".\u0003/\u0003/\u00030\u00030\u00050\u0253\n0\u00031\u00031\u00032\u0003",
    "2\u00052\u0259\n2\u00033\u00033\u00033\u00053\u025e\n3\u00034\u0003",
    "4\u00035\u00035\u00036\u00036\u00036\u00036\u00037\u00037\u00037\u0003",
    "7\u00038\u00038\u00038\u00038\u00058\u0270\n8\u00039\u00039\u00039\u0002",
    "\u0003Z:\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnp\u0002",
    "\r\u0003\u0002\u0017\u0019\u0003\u0002\u0013\u0014\u0003\u0002\u001a",
    "\u001c\u0003\u0002\u001d \u0003\u0002!$\u0003\u0002*4\u0005\u0002\u0003",
    "\u000356ee\u0003\u000279\u0003\u000256\u0003\u0002:S\u0003\u0002Tc\u0002",
    "\u02a8\u0002r\u0003\u0002\u0002\u0002\u0004u\u0003\u0002\u0002\u0002",
    "\u0006z\u0003\u0002\u0002\u0002\b\u0080\u0003\u0002\u0002\u0002\n\u0091",
    "\u0003\u0002\u0002\u0002\f\u0093\u0003\u0002\u0002\u0002\u000e\u009a",
    "\u0003\u0002\u0002\u0002\u0010\u009e\u0003\u0002\u0002\u0002\u0012\u00a2",
    "\u0003\u0002\u0002\u0002\u0014\u00aa\u0003\u0002\u0002\u0002\u0016\u00ae",
    "\u0003\u0002\u0002\u0002\u0018\u00b1\u0003\u0002\u0002\u0002\u001a\u00b3",
    "\u0003\u0002\u0002\u0002\u001c\u00b5\u0003\u0002\u0002\u0002\u001e\u00fb",
    "\u0003\u0002\u0002\u0002 \u00fd\u0003\u0002\u0002\u0002\"\u0104\u0003",
    "\u0002\u0002\u0002$\u010b\u0003\u0002\u0002\u0002&\u0112\u0003\u0002",
    "\u0002\u0002(\u0118\u0003\u0002\u0002\u0002*\u011e\u0003\u0002\u0002",
    "\u0002,\u012b\u0003\u0002\u0002\u0002.\u012f\u0003\u0002\u0002\u0002",
    "0\u0135\u0003\u0002\u0002\u00022\u013a\u0003\u0002\u0002\u00024\u013e",
    "\u0003\u0002\u0002\u00026\u0150\u0003\u0002\u0002\u00028\u0152\u0003",
    "\u0002\u0002\u0002:\u0158\u0003\u0002\u0002\u0002<\u015b\u0003\u0002",
    "\u0002\u0002>\u015e\u0003\u0002\u0002\u0002@\u0169\u0003\u0002\u0002",
    "\u0002B\u0172\u0003\u0002\u0002\u0002D\u0174\u0003\u0002\u0002\u0002",
    "F\u0181\u0003\u0002\u0002\u0002H\u018f\u0003\u0002\u0002\u0002J\u019c",
    "\u0003\u0002\u0002\u0002L\u019e\u0003\u0002\u0002\u0002N\u01b9\u0003",
    "\u0002\u0002\u0002P\u01be\u0003\u0002\u0002\u0002R\u01c0\u0003\u0002",
    "\u0002\u0002T\u01c2\u0003\u0002\u0002\u0002V\u01c8\u0003\u0002\u0002",
    "\u0002X\u01d0\u0003\u0002\u0002\u0002Z\u0206\u0003\u0002\u0002\u0002",
    "\\\u024e\u0003\u0002\u0002\u0002^\u0252\u0003\u0002\u0002\u0002`\u0254",
    "\u0003\u0002\u0002\u0002b\u0258\u0003\u0002\u0002\u0002d\u025d\u0003",
    "\u0002\u0002\u0002f\u025f\u0003\u0002\u0002\u0002h\u0261\u0003\u0002",
    "\u0002\u0002j\u0263\u0003\u0002\u0002\u0002l\u0267\u0003\u0002\u0002",
    "\u0002n\u026f\u0003\u0002\u0002\u0002p\u0271\u0003\u0002\u0002\u0002",
    "rs\u0005\u0004\u0003\u0002s\u0003\u0003\u0002\u0002\u0002tv\u0005\u0006",
    "\u0004\u0002ut\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vw\u0003",
    "\u0002\u0002\u0002wx\u0007\u0002\u0002\u0003x\u0005\u0003\u0002\u0002",
    "\u0002y{\u0005\b\u0005\u0002zy\u0003\u0002\u0002\u0002{|\u0003\u0002",
    "\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u0007",
    "\u0003\u0002\u0002\u0002~\u0081\u0005\n\u0006\u0002\u007f\u0081\u0005",
    "> \u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u007f\u0003\u0002\u0002",
    "\u0002\u0081\t\u0003\u0002\u0002\u0002\u0082\u0092\u0005\f\u0007\u0002",
    "\u0083\u0092\u0005\u0010\t\u0002\u0084\u0092\u0005\u0018\r\u0002\u0085",
    "\u0092\u0005\u001a\u000e\u0002\u0086\u0092\u0005\u001c\u000f\u0002\u0087",
    "\u0092\u0005\u001e\u0010\u0002\u0088\u0092\u0005 \u0011\u0002\u0089",
    "\u0092\u0005\"\u0012\u0002\u008a\u0092\u0005$\u0013\u0002\u008b\u0092",
    "\u0005&\u0014\u0002\u008c\u0092\u00052\u001a\u0002\u008d\u0092\u0005",
    "(\u0015\u0002\u008e\u0092\u00054\u001b\u0002\u008f\u0092\u00056\u001c",
    "\u0002\u0090\u0092\u0005<\u001f\u0002\u0091\u0082\u0003\u0002\u0002",
    "\u0002\u0091\u0083\u0003\u0002\u0002\u0002\u0091\u0084\u0003\u0002\u0002",
    "\u0002\u0091\u0085\u0003\u0002\u0002\u0002\u0091\u0086\u0003\u0002\u0002",
    "\u0002\u0091\u0087\u0003\u0002\u0002\u0002\u0091\u0088\u0003\u0002\u0002",
    "\u0002\u0091\u0089\u0003\u0002\u0002\u0002\u0091\u008a\u0003\u0002\u0002",
    "\u0002\u0091\u008b\u0003\u0002\u0002\u0002\u0091\u008c\u0003\u0002\u0002",
    "\u0002\u0091\u008d\u0003\u0002\u0002\u0002\u0091\u008e\u0003\u0002\u0002",
    "\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091\u0090\u0003\u0002\u0002",
    "\u0002\u0092\u000b\u0003\u0002\u0002\u0002\u0093\u0095\u0007\t\u0002",
    "\u0002\u0094\u0096\u0005\u000e\b\u0002\u0095\u0094\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0007\n\u0002\u0002\u0098\r\u0003\u0002\u0002\u0002",
    "\u0099\u009b\u0005\n\u0006\u0002\u009a\u0099\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u000f\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0007A\u0002\u0002\u009f\u00a0\u0005\u0012\n\u0002\u00a0",
    "\u00a1\u0005n8\u0002\u00a1\u0011\u0003\u0002\u0002\u0002\u00a2\u00a7",
    "\u0005\u0014\u000b\u0002\u00a3\u00a4\u0007\f\u0002\u0002\u00a4\u00a6",
    "\u0005\u0014\u000b\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a9",
    "\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0003\u0002\u0002\u0002\u00a8\u0013\u0003\u0002\u0002\u0002\u00a9\u00a7",
    "\u0003\u0002\u0002\u0002\u00aa\u00ac\u0007d\u0002\u0002\u00ab\u00ad",
    "\u0005\u0016\f\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0003\u0002\u0002\u0002\u00ad\u0015\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0007\r\u0002\u0002\u00af\u00b0\u0005Z.\u0002\u00b0\u0017\u0003\u0002",
    "\u0002\u0002\u00b1\u00b2\u0007\u000b\u0002\u0002\u00b2\u0019\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0005X-\u0002\u00b4\u001b\u0003\u0002\u0002",
    "\u0002\u00b5\u00b6\u0007O\u0002\u0002\u00b6\u00b7\u0007\u0007\u0002",
    "\u0002\u00b7\u00b8\u0005X-\u0002\u00b8\u00b9\u0007\b\u0002\u0002\u00b9",
    "\u00bc\u0005\n\u0006\u0002\u00ba\u00bb\u0007?\u0002\u0002\u00bb\u00bd",
    "\u0005\n\u0006\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd",
    "\u0003\u0002\u0002\u0002\u00bd\u001d\u0003\u0002\u0002\u0002\u00be\u00bf",
    "\u0007;\u0002\u0002\u00bf\u00c0\u0005\n\u0006\u0002\u00c0\u00c1\u0007",
    "I\u0002\u0002\u00c1\u00c2\u0007\u0007\u0002\u0002\u00c2\u00c3\u0005",
    "X-\u0002\u00c3\u00c4\u0007\b\u0002\u0002\u00c4\u00c5\u0005n8\u0002\u00c5",
    "\u00fc\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007I\u0002\u0002\u00c7",
    "\u00c8\u0007\u0007\u0002\u0002\u00c8\u00c9\u0005X-\u0002\u00c9\u00ca",
    "\u0007\b\u0002\u0002\u00ca\u00cb\u0005\n\u0006\u0002\u00cb\u00fc\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0007G\u0002\u0002\u00cd\u00cf\u0007",
    "\u0007\u0002\u0002\u00ce\u00d0\u0005X-\u0002\u00cf\u00ce\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002",
    "\u0002\u0002\u00d1\u00d3\u0007\u000b\u0002\u0002\u00d2\u00d4\u0005X",
    "-\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002",
    "\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d7\u0007\u000b",
    "\u0002\u0002\u00d6\u00d8\u0005X-\u0002\u00d7\u00d6\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002",
    "\u0002\u00d9\u00da\u0007\b\u0002\u0002\u00da\u00fc\u0005\n\u0006\u0002",
    "\u00db\u00dc\u0007G\u0002\u0002\u00dc\u00dd\u0007\u0007\u0002\u0002",
    "\u00dd\u00de\u0007A\u0002\u0002\u00de\u00df\u0005\u0012\n\u0002\u00df",
    "\u00e1\u0007\u000b\u0002\u0002\u00e0\u00e2\u0005X-\u0002\u00e1\u00e0",
    "\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e3",
    "\u0003\u0002\u0002\u0002\u00e3\u00e5\u0007\u000b\u0002\u0002\u00e4\u00e6",
    "\u0005X-\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003",
    "\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007",
    "\b\u0002\u0002\u00e8\u00e9\u0005\n\u0006\u0002\u00e9\u00fc\u0003\u0002",
    "\u0002\u0002\u00ea\u00eb\u0007G\u0002\u0002\u00eb\u00ec\u0007\u0007",
    "\u0002\u0002\u00ec\u00ed\u0005Z.\u0002\u00ed\u00ee\u0007R\u0002\u0002",
    "\u00ee\u00ef\u0005X-\u0002\u00ef\u00f0\u0007\b\u0002\u0002\u00f0\u00f1",
    "\u0005\n\u0006\u0002\u00f1\u00fc\u0003\u0002\u0002\u0002\u00f2\u00f3",
    "\u0007G\u0002\u0002\u00f3\u00f4\u0007\u0007\u0002\u0002\u00f4\u00f5",
    "\u0007A\u0002\u0002\u00f5\u00f6\u0005\u0014\u000b\u0002\u00f6\u00f7",
    "\u0007R\u0002\u0002\u00f7\u00f8\u0005X-\u0002\u00f8\u00f9\u0007\b\u0002",
    "\u0002\u00f9\u00fa\u0005\n\u0006\u0002\u00fa\u00fc\u0003\u0002\u0002",
    "\u0002\u00fb\u00be\u0003\u0002\u0002\u0002\u00fb\u00c6\u0003\u0002\u0002",
    "\u0002\u00fb\u00cc\u0003\u0002\u0002\u0002\u00fb\u00db\u0003\u0002\u0002",
    "\u0002\u00fb\u00ea\u0003\u0002\u0002\u0002\u00fb\u00f2\u0003\u0002\u0002",
    "\u0002\u00fc\u001f\u0003\u0002\u0002\u0002\u00fd\u0100\u0007F\u0002",
    "\u0002\u00fe\u00ff\u0006\u0011\u0002\u0002\u00ff\u0101\u0007d\u0002",
    "\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002",
    "\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0103\u0005n8\u0002",
    "\u0103!\u0003\u0002\u0002\u0002\u0104\u0107\u0007:\u0002\u0002\u0105",
    "\u0106\u0006\u0012\u0003\u0002\u0106\u0108\u0007d\u0002\u0002\u0107",
    "\u0105\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108",
    "\u0109\u0003\u0002\u0002\u0002\u0109\u010a\u0005n8\u0002\u010a#\u0003",
    "\u0002\u0002\u0002\u010b\u010e\u0007D\u0002\u0002\u010c\u010d\u0006",
    "\u0013\u0004\u0002\u010d\u010f\u0005X-\u0002\u010e\u010c\u0003\u0002",
    "\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002",
    "\u0002\u0002\u0110\u0111\u0005n8\u0002\u0111%\u0003\u0002\u0002\u0002",
    "\u0112\u0113\u0007M\u0002\u0002\u0113\u0114\u0007\u0007\u0002\u0002",
    "\u0114\u0115\u0005X-\u0002\u0115\u0116\u0007\b\u0002\u0002\u0116\u0117",
    "\u0005\n\u0006\u0002\u0117\'\u0003\u0002\u0002\u0002\u0118\u0119\u0007",
    "H\u0002\u0002\u0119\u011a\u0007\u0007\u0002\u0002\u011a\u011b\u0005",
    "X-\u0002\u011b\u011c\u0007\b\u0002\u0002\u011c\u011d\u0005*\u0016\u0002",
    "\u011d)\u0003\u0002\u0002\u0002\u011e\u0120\u0007\t\u0002\u0002\u011f",
    "\u0121\u0005,\u0017\u0002\u0120\u011f\u0003\u0002\u0002\u0002\u0120",
    "\u0121\u0003\u0002\u0002\u0002\u0121\u0126\u0003\u0002\u0002\u0002\u0122",
    "\u0124\u00050\u0019\u0002\u0123\u0125\u0005,\u0017\u0002\u0124\u0123",
    "\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0127",
    "\u0003\u0002\u0002\u0002\u0126\u0122\u0003\u0002\u0002\u0002\u0126\u0127",
    "\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128\u0129",
    "\u0007\n\u0002\u0002\u0129+\u0003\u0002\u0002\u0002\u012a\u012c\u0005",
    ".\u0018\u0002\u012b\u012a\u0003\u0002\u0002\u0002\u012c\u012d\u0003",
    "\u0002\u0002\u0002\u012d\u012b\u0003\u0002\u0002\u0002\u012d\u012e\u0003",
    "\u0002\u0002\u0002\u012e-\u0003\u0002\u0002\u0002\u012f\u0130\u0007",
    ">\u0002\u0002\u0130\u0131\u0005X-\u0002\u0131\u0133\u0007\u000f\u0002",
    "\u0002\u0132\u0134\u0005\u000e\b\u0002\u0133\u0132\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134/\u0003\u0002\u0002",
    "\u0002\u0135\u0136\u0007N\u0002\u0002\u0136\u0138\u0007\u000f\u0002",
    "\u0002\u0137\u0139\u0005\u000e\b\u0002\u0138\u0137\u0003\u0002\u0002",
    "\u0002\u0138\u0139\u0003\u0002\u0002\u0002\u01391\u0003\u0002\u0002",
    "\u0002\u013a\u013b\u0007d\u0002\u0002\u013b\u013c\u0007\u000f\u0002",
    "\u0002\u013c\u013d\u0005\n\u0006\u0002\u013d3\u0003\u0002\u0002\u0002",
    "\u013e\u013f\u0007P\u0002\u0002\u013f\u0140\u0006\u001b\u0005\u0002",
    "\u0140\u0141\u0005X-\u0002\u0141\u0142\u0005n8\u0002\u01425\u0003\u0002",
    "\u0002\u0002\u0143\u0144\u0007S\u0002\u0002\u0144\u0145\u0005\f\u0007",
    "\u0002\u0145\u0146\u00058\u001d\u0002\u0146\u0151\u0003\u0002\u0002",
    "\u0002\u0147\u0148\u0007S\u0002\u0002\u0148\u0149\u0005\f\u0007\u0002",
    "\u0149\u014a\u0005:\u001e\u0002\u014a\u0151\u0003\u0002\u0002\u0002",
    "\u014b\u014c\u0007S\u0002\u0002\u014c\u014d\u0005\f\u0007\u0002\u014d",
    "\u014e\u00058\u001d\u0002\u014e\u014f\u0005:\u001e\u0002\u014f\u0151",
    "\u0003\u0002\u0002\u0002\u0150\u0143\u0003\u0002\u0002\u0002\u0150\u0147",
    "\u0003\u0002\u0002\u0002\u0150\u014b\u0003\u0002\u0002\u0002\u01517",
    "\u0003\u0002\u0002\u0002\u0152\u0153\u0007B\u0002\u0002\u0153\u0154",
    "\u0007\u0007\u0002\u0002\u0154\u0155\u0007d\u0002\u0002\u0155\u0156",
    "\u0007\b\u0002\u0002\u0156\u0157\u0005\f\u0007\u0002\u01579\u0003\u0002",
    "\u0002\u0002\u0158\u0159\u0007C\u0002\u0002\u0159\u015a\u0005\f\u0007",
    "\u0002\u015a;\u0003\u0002\u0002\u0002\u015b\u015c\u0007J\u0002\u0002",
    "\u015c\u015d\u0005n8\u0002\u015d=\u0003\u0002\u0002\u0002\u015e\u015f",
    "\u0007K\u0002\u0002\u015f\u0160\u0007d\u0002\u0002\u0160\u0162\u0007",
    "\u0007\u0002\u0002\u0161\u0163\u0005@!\u0002\u0162\u0161\u0003\u0002",
    "\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002",
    "\u0002\u0002\u0164\u0165\u0007\b\u0002\u0002\u0165\u0166\u0007\t\u0002",
    "\u0002\u0166\u0167\u0005B\"\u0002\u0167\u0168\u0007\n\u0002\u0002\u0168",
    "?\u0003\u0002\u0002\u0002\u0169\u016e\u0007d\u0002\u0002\u016a\u016b",
    "\u0007\f\u0002\u0002\u016b\u016d\u0007d\u0002\u0002\u016c\u016a\u0003",
    "\u0002\u0002\u0002\u016d\u0170\u0003\u0002\u0002\u0002\u016e\u016c\u0003",
    "\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016fA\u0003",
    "\u0002\u0002\u0002\u0170\u016e\u0003\u0002\u0002\u0002\u0171\u0173\u0005",
    "\u0006\u0004\u0002\u0172\u0171\u0003\u0002\u0002\u0002\u0172\u0173\u0003",
    "\u0002\u0002\u0002\u0173C\u0003\u0002\u0002\u0002\u0174\u0176\u0007",
    "\u0005\u0002\u0002\u0175\u0177\u0005F$\u0002\u0176\u0175\u0003\u0002",
    "\u0002\u0002\u0176\u0177\u0003\u0002\u0002\u0002\u0177\u0179\u0003\u0002",
    "\u0002\u0002\u0178\u017a\u0007\f\u0002\u0002\u0179\u0178\u0003\u0002",
    "\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017a\u017c\u0003\u0002",
    "\u0002\u0002\u017b\u017d\u0005H%\u0002\u017c\u017b\u0003\u0002\u0002",
    "\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002",
    "\u0002\u017e\u017f\u0007\u0006\u0002\u0002\u017fE\u0003\u0002\u0002",
    "\u0002\u0180\u0182\u0005H%\u0002\u0181\u0180\u0003\u0002\u0002\u0002",
    "\u0181\u0182\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002\u0002\u0002",
    "\u0183\u018b\u0005Z.\u0002\u0184\u0186\u0007\f\u0002\u0002\u0185\u0187",
    "\u0005H%\u0002\u0186\u0185\u0003\u0002\u0002\u0002\u0186\u0187\u0003",
    "\u0002\u0002\u0002\u0187\u0188\u0003\u0002\u0002\u0002\u0188\u018a\u0005",
    "Z.\u0002\u0189\u0184\u0003\u0002\u0002\u0002\u018a\u018d\u0003\u0002",
    "\u0002\u0002\u018b\u0189\u0003\u0002\u0002\u0002\u018b\u018c\u0003\u0002",
    "\u0002\u0002\u018cG\u0003\u0002\u0002\u0002\u018d\u018b\u0003\u0002",
    "\u0002\u0002\u018e\u0190\u0007\f\u0002\u0002\u018f\u018e\u0003\u0002",
    "\u0002\u0002\u0190\u0191\u0003\u0002\u0002\u0002\u0191\u018f\u0003\u0002",
    "\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192I\u0003\u0002",
    "\u0002\u0002\u0193\u0194\u0007\t\u0002\u0002\u0194\u019d\u0007\n\u0002",
    "\u0002\u0195\u0196\u0007\t\u0002\u0002\u0196\u0198\u0005L\'\u0002\u0197",
    "\u0199\u0007\f\u0002\u0002\u0198\u0197\u0003\u0002\u0002\u0002\u0198",
    "\u0199\u0003\u0002\u0002\u0002\u0199\u019a\u0003\u0002\u0002\u0002\u019a",
    "\u019b\u0007\n\u0002\u0002\u019b\u019d\u0003\u0002\u0002\u0002\u019c",
    "\u0193\u0003\u0002\u0002\u0002\u019c\u0195\u0003\u0002\u0002\u0002\u019d",
    "K\u0003\u0002\u0002\u0002\u019e\u01a3\u0005N(\u0002\u019f\u01a0\u0007",
    "\f\u0002\u0002\u01a0\u01a2\u0005N(\u0002\u01a1\u019f\u0003\u0002\u0002",
    "\u0002\u01a2\u01a5\u0003\u0002\u0002\u0002\u01a3\u01a1\u0003\u0002\u0002",
    "\u0002\u01a3\u01a4\u0003\u0002\u0002\u0002\u01a4M\u0003\u0002\u0002",
    "\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002\u01a6\u01a7\u0005P)\u0002",
    "\u01a7\u01a8\u0007\u000f\u0002\u0002\u01a8\u01a9\u0005Z.\u0002\u01a9",
    "\u01ba\u0003\u0002\u0002\u0002\u01aa\u01ab\u0005j6\u0002\u01ab\u01ac",
    "\u0007\u0007\u0002\u0002\u01ac\u01ad\u0007\b\u0002\u0002\u01ad\u01ae",
    "\u0007\t\u0002\u0002\u01ae\u01af\u0005B\"\u0002\u01af\u01b0\u0007\n",
    "\u0002\u0002\u01b0\u01ba\u0003\u0002\u0002\u0002\u01b1\u01b2\u0005l",
    "7\u0002\u01b2\u01b3\u0007\u0007\u0002\u0002\u01b3\u01b4\u0005R*\u0002",
    "\u01b4\u01b5\u0007\b\u0002\u0002\u01b5\u01b6\u0007\t\u0002\u0002\u01b6",
    "\u01b7\u0005B\"\u0002\u01b7\u01b8\u0007\n\u0002\u0002\u01b8\u01ba\u0003",
    "\u0002\u0002\u0002\u01b9\u01a6\u0003\u0002\u0002\u0002\u01b9\u01aa\u0003",
    "\u0002\u0002\u0002\u01b9\u01b1\u0003\u0002\u0002\u0002\u01baO\u0003",
    "\u0002\u0002\u0002\u01bb\u01bf\u0005b2\u0002\u01bc\u01bf\u0007e\u0002",
    "\u0002\u01bd\u01bf\u0005`1\u0002\u01be\u01bb\u0003\u0002\u0002\u0002",
    "\u01be\u01bc\u0003\u0002\u0002\u0002\u01be\u01bd\u0003\u0002\u0002\u0002",
    "\u01bfQ\u0003\u0002\u0002\u0002\u01c0\u01c1\u0007d\u0002\u0002\u01c1",
    "S\u0003\u0002\u0002\u0002\u01c2\u01c4\u0007\u0007\u0002\u0002\u01c3",
    "\u01c5\u0005V,\u0002\u01c4\u01c3\u0003\u0002\u0002\u0002\u01c4\u01c5",
    "\u0003\u0002\u0002\u0002\u01c5\u01c6\u0003\u0002\u0002\u0002\u01c6\u01c7",
    "\u0007\b\u0002\u0002\u01c7U\u0003\u0002\u0002\u0002\u01c8\u01cd\u0005",
    "Z.\u0002\u01c9\u01ca\u0007\f\u0002\u0002\u01ca\u01cc\u0005Z.\u0002\u01cb",
    "\u01c9\u0003\u0002\u0002\u0002\u01cc\u01cf\u0003\u0002\u0002\u0002\u01cd",
    "\u01cb\u0003\u0002\u0002\u0002\u01cd\u01ce\u0003\u0002\u0002\u0002\u01ce",
    "W\u0003\u0002\u0002\u0002\u01cf\u01cd\u0003\u0002\u0002\u0002\u01d0",
    "\u01d5\u0005Z.\u0002\u01d1\u01d2\u0007\f\u0002\u0002\u01d2\u01d4\u0005",
    "Z.\u0002\u01d3\u01d1\u0003\u0002\u0002\u0002\u01d4\u01d7\u0003\u0002",
    "\u0002\u0002\u01d5\u01d3\u0003\u0002\u0002\u0002\u01d5\u01d6\u0003\u0002",
    "\u0002\u0002\u01d6Y\u0003\u0002\u0002\u0002\u01d7\u01d5\u0003\u0002",
    "\u0002\u0002\u01d8\u01d9\b.\u0001\u0002\u01d9\u01db\u0007K\u0002\u0002",
    "\u01da\u01dc\u0007d\u0002\u0002\u01db\u01da\u0003\u0002\u0002\u0002",
    "\u01db\u01dc\u0003\u0002\u0002\u0002\u01dc\u01dd\u0003\u0002\u0002\u0002",
    "\u01dd\u01df\u0007\u0007\u0002\u0002\u01de\u01e0\u0005@!\u0002\u01df",
    "\u01de\u0003\u0002\u0002\u0002\u01df\u01e0\u0003\u0002\u0002\u0002\u01e0",
    "\u01e1\u0003\u0002\u0002\u0002\u01e1\u01e2\u0007\b\u0002\u0002\u01e2",
    "\u01e3\u0007\t\u0002\u0002\u01e3\u01e4\u0005B\"\u0002\u01e4\u01e5\u0007",
    "\n\u0002\u0002\u01e5\u0207\u0003\u0002\u0002\u0002\u01e6\u01e7\u0007",
    "@\u0002\u0002\u01e7\u01e9\u0005Z.\u0002\u01e8\u01ea\u0005T+\u0002\u01e9",
    "\u01e8\u0003\u0002\u0002\u0002\u01e9\u01ea\u0003\u0002\u0002\u0002\u01ea",
    "\u0207\u0003\u0002\u0002\u0002\u01eb\u01ec\u0007Q\u0002\u0002\u01ec",
    "\u0207\u0005Z. \u01ed\u01ee\u0007E\u0002\u0002\u01ee\u0207\u0005Z.\u001f",
    "\u01ef\u01f0\u0007=\u0002\u0002\u01f0\u0207\u0005Z.\u001e\u01f1\u01f2",
    "\u0007\u0011\u0002\u0002\u01f2\u0207\u0005Z.\u001d\u01f3\u01f4\u0007",
    "\u0012\u0002\u0002\u01f4\u0207\u0005Z.\u001c\u01f5\u01f6\u0007\u0013",
    "\u0002\u0002\u01f6\u0207\u0005Z.\u001b\u01f7\u01f8\u0007\u0014\u0002",
    "\u0002\u01f8\u0207\u0005Z.\u001a\u01f9\u01fa\u0007\u0015\u0002\u0002",
    "\u01fa\u0207\u0005Z.\u0019\u01fb\u01fc\u0007\u0016\u0002\u0002\u01fc",
    "\u0207\u0005Z.\u0018\u01fd\u0207\u0007L\u0002\u0002\u01fe\u0207\u0007",
    "d\u0002\u0002\u01ff\u0207\u0005^0\u0002\u0200\u0207\u0005D#\u0002\u0201",
    "\u0207\u0005J&\u0002\u0202\u0203\u0007\u0007\u0002\u0002\u0203\u0204",
    "\u0005X-\u0002\u0204\u0205\u0007\b\u0002\u0002\u0205\u0207\u0003\u0002",
    "\u0002\u0002\u0206\u01d8\u0003\u0002\u0002\u0002\u0206\u01e6\u0003\u0002",
    "\u0002\u0002\u0206\u01eb\u0003\u0002\u0002\u0002\u0206\u01ed\u0003\u0002",
    "\u0002\u0002\u0206\u01ef\u0003\u0002\u0002\u0002\u0206\u01f1\u0003\u0002",
    "\u0002\u0002\u0206\u01f3\u0003\u0002\u0002\u0002\u0206\u01f5\u0003\u0002",
    "\u0002\u0002\u0206\u01f7\u0003\u0002\u0002\u0002\u0206\u01f9\u0003\u0002",
    "\u0002\u0002\u0206\u01fb\u0003\u0002\u0002\u0002\u0206\u01fd\u0003\u0002",
    "\u0002\u0002\u0206\u01fe\u0003\u0002\u0002\u0002\u0206\u01ff\u0003\u0002",
    "\u0002\u0002\u0206\u0200\u0003\u0002\u0002\u0002\u0206\u0201\u0003\u0002",
    "\u0002\u0002\u0206\u0202\u0003\u0002\u0002\u0002\u0207\u024b\u0003\u0002",
    "\u0002\u0002\u0208\u0209\f\u0017\u0002\u0002\u0209\u020a\t\u0002\u0002",
    "\u0002\u020a\u024a\u0005Z.\u0018\u020b\u020c\f\u0016\u0002\u0002\u020c",
    "\u020d\t\u0003\u0002\u0002\u020d\u024a\u0005Z.\u0017\u020e\u020f\f\u0015",
    "\u0002\u0002\u020f\u0210\t\u0004\u0002\u0002\u0210\u024a\u0005Z.\u0016",
    "\u0211\u0212\f\u0014\u0002\u0002\u0212\u0213\t\u0005\u0002\u0002\u0213",
    "\u024a\u0005Z.\u0015\u0214\u0215\f\u0013\u0002\u0002\u0215\u0216\u0007",
    "<\u0002\u0002\u0216\u024a\u0005Z.\u0014\u0217\u0218\f\u0012\u0002\u0002",
    "\u0218\u0219\u0007R\u0002\u0002\u0219\u024a\u0005Z.\u0013\u021a\u021b",
    "\f\u0011\u0002\u0002\u021b\u021c\t\u0006\u0002\u0002\u021c\u024a\u0005",
    "Z.\u0012\u021d\u021e\f\u0010\u0002\u0002\u021e\u021f\u0007%\u0002\u0002",
    "\u021f\u024a\u0005Z.\u0011\u0220\u0221\f\u000f\u0002\u0002\u0221\u0222",
    "\u0007&\u0002\u0002\u0222\u024a\u0005Z.\u0010\u0223\u0224\f\u000e\u0002",
    "\u0002\u0224\u0225\u0007\'\u0002\u0002\u0225\u024a\u0005Z.\u000f\u0226",
    "\u0227\f\r\u0002\u0002\u0227\u0228\u0007(\u0002\u0002\u0228\u024a\u0005",
    "Z.\u000e\u0229\u022a\f\f\u0002\u0002\u022a\u022b\u0007)\u0002\u0002",
    "\u022b\u024a\u0005Z.\r\u022c\u022d\f\u000b\u0002\u0002\u022d\u022e\u0007",
    "\u000e\u0002\u0002\u022e\u022f\u0005Z.\u0002\u022f\u0230\u0007\u000f",
    "\u0002\u0002\u0230\u0231\u0005Z.\f\u0231\u024a\u0003\u0002\u0002\u0002",
    "\u0232\u0233\f&\u0002\u0002\u0233\u0234\u0007\u0005\u0002\u0002\u0234",
    "\u0235\u0005X-\u0002\u0235\u0236\u0007\u0006\u0002\u0002\u0236\u024a",
    "\u0003\u0002\u0002\u0002\u0237\u0238\f%\u0002\u0002\u0238\u0239\u0007",
    "\u0010\u0002\u0002\u0239\u024a\u0005b2\u0002\u023a\u023b\f$\u0002\u0002",
    "\u023b\u024a\u0005T+\u0002\u023c\u023d\f\"\u0002\u0002\u023d\u023e\u0006",
    ".\u0017\u0002\u023e\u024a\u0007\u0011\u0002\u0002\u023f\u0240\f!\u0002",
    "\u0002\u0240\u0241\u0006.\u0019\u0002\u0241\u024a\u0007\u0012\u0002",
    "\u0002\u0242\u0243\f\n\u0002\u0002\u0243\u0244\u0007\r\u0002\u0002\u0244",
    "\u024a\u0005X-\u0002\u0245\u0246\f\t\u0002\u0002\u0246\u0247\u0005\\",
    "/\u0002\u0247\u0248\u0005X-\u0002\u0248\u024a\u0003\u0002\u0002\u0002",
    "\u0249\u0208\u0003\u0002\u0002\u0002\u0249\u020b\u0003\u0002\u0002\u0002",
    "\u0249\u020e\u0003\u0002\u0002\u0002\u0249\u0211\u0003\u0002\u0002\u0002",
    "\u0249\u0214\u0003\u0002\u0002\u0002\u0249\u0217\u0003\u0002\u0002\u0002",
    "\u0249\u021a\u0003\u0002\u0002\u0002\u0249\u021d\u0003\u0002\u0002\u0002",
    "\u0249\u0220\u0003\u0002\u0002\u0002\u0249\u0223\u0003\u0002\u0002\u0002",
    "\u0249\u0226\u0003\u0002\u0002\u0002\u0249\u0229\u0003\u0002\u0002\u0002",
    "\u0249\u022c\u0003\u0002\u0002\u0002\u0249\u0232\u0003\u0002\u0002\u0002",
    "\u0249\u0237\u0003\u0002\u0002\u0002\u0249\u023a\u0003\u0002\u0002\u0002",
    "\u0249\u023c\u0003\u0002\u0002\u0002\u0249\u023f\u0003\u0002\u0002\u0002",
    "\u0249\u0242\u0003\u0002\u0002\u0002\u0249\u0245\u0003\u0002\u0002\u0002",
    "\u024a\u024d\u0003\u0002\u0002\u0002\u024b\u0249\u0003\u0002\u0002\u0002",
    "\u024b\u024c\u0003\u0002\u0002\u0002\u024c[\u0003\u0002\u0002\u0002",
    "\u024d\u024b\u0003\u0002\u0002\u0002\u024e\u024f\t\u0007\u0002\u0002",
    "\u024f]\u0003\u0002\u0002\u0002\u0250\u0253\t\b\u0002\u0002\u0251\u0253",
    "\u0005`1\u0002\u0252\u0250\u0003\u0002\u0002\u0002\u0252\u0251\u0003",
    "\u0002\u0002\u0002\u0253_\u0003\u0002\u0002\u0002\u0254\u0255\t\t\u0002",
    "\u0002\u0255a\u0003\u0002\u0002\u0002\u0256\u0259\u0007d\u0002\u0002",
    "\u0257\u0259\u0005d3\u0002\u0258\u0256\u0003\u0002\u0002\u0002\u0258",
    "\u0257\u0003\u0002\u0002\u0002\u0259c\u0003\u0002\u0002\u0002\u025a",
    "\u025e\u0005f4\u0002\u025b\u025e\u0005h5\u0002\u025c\u025e\t\n\u0002",
    "\u0002\u025d\u025a\u0003\u0002\u0002\u0002\u025d\u025b\u0003\u0002\u0002",
    "\u0002\u025d\u025c\u0003\u0002\u0002\u0002\u025ee\u0003\u0002\u0002",
    "\u0002\u025f\u0260\t\u000b\u0002\u0002\u0260g\u0003\u0002\u0002\u0002",
    "\u0261\u0262\t\f\u0002\u0002\u0262i\u0003\u0002\u0002\u0002\u0263\u0264",
    "\u00066\u001c\u0002\u0264\u0265\u0007d\u0002\u0002\u0265\u0266\u0005",
    "P)\u0002\u0266k\u0003\u0002\u0002\u0002\u0267\u0268\u00067\u001d\u0002",
    "\u0268\u0269\u0007d\u0002\u0002\u0269\u026a\u0005P)\u0002\u026am\u0003",
    "\u0002\u0002\u0002\u026b\u0270\u0007\u000b\u0002\u0002\u026c\u0270\u0007",
    "\u0002\u0002\u0003\u026d\u0270\u00068\u001e\u0002\u026e\u0270\u0006",
    "8\u001f\u0002\u026f\u026b\u0003\u0002\u0002\u0002\u026f\u026c\u0003",
    "\u0002\u0002\u0002\u026f\u026d\u0003\u0002\u0002\u0002\u026f\u026e\u0003",
    "\u0002\u0002\u0002\u0270o\u0003\u0002\u0002\u0002\u0271\u0272\u0007",
    "\u0002\u0002\u0003\u0272q\u0003\u0002\u0002\u00027u|\u0080\u0091\u0095",
    "\u009c\u00a7\u00ac\u00bc\u00cf\u00d3\u00d7\u00e1\u00e5\u00fb\u0100\u0107",
    "\u010e\u0120\u0124\u0126\u012d\u0133\u0138\u0150\u0162\u016e\u0172\u0176",
    "\u0179\u017c\u0181\u0186\u018b\u0191\u0198\u019c\u01a3\u01b9\u01be\u01c4",
    "\u01cd\u01d5\u01db\u01df\u01e9\u0206\u0249\u024b\u0252\u0258\u025d\u026f"].join("");


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
                      "UnexpectedCharacter" ];

var ruleNames =  [ "file", "program", "sourceElements", "sourceElement", 
                   "statement", "block", "statementList", "variableStatement", 
                   "variableDeclarationList", "variableDeclaration", "initialiser", 
                   "emptyStatement", "expressionStatement", "ifStatement", 
                   "iterationStatement", "continueStatement", "breakStatement", 
                   "returnStatement", "withStatement", "switchStatement", 
                   "caseBlock", "caseClauses", "caseClause", "defaultClause", 
                   "labelledStatement", "throwStatement", "tryStatement", 
                   "catchProduction", "finallyProduction", "debuggerStatement", 
                   "functionDeclaration", "formalParameterList", "functionBody", 
                   "arrayLiteral", "elementList", "elision", "objectLiteral", 
                   "propertyNameAndValueList", "propertyAssignment", "propertyName", 
                   "propertySetParameterList", "arguments", "argumentList", 
                   "expressionSequence", "singleExpression", "assignmentOperator", 
                   "literal", "numericLiteral", "identifierName", "reservedWord", 
                   "keyword", "futureReservedWord", "getter", "setter", 
                   "eos", "eof" ];

function ECMAScriptPassParser (input) {
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

ECMAScriptPassParser.prototype = Object.create(antlr4.Parser.prototype);
ECMAScriptPassParser.prototype.constructor = ECMAScriptPassParser;

Object.defineProperty(ECMAScriptPassParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ECMAScriptPassParser.EOF = antlr4.Token.EOF;
ECMAScriptPassParser.RegularExpressionLiteral = 1;
ECMAScriptPassParser.LineTerminator = 2;
ECMAScriptPassParser.OpenBracket = 3;
ECMAScriptPassParser.CloseBracket = 4;
ECMAScriptPassParser.OpenParen = 5;
ECMAScriptPassParser.CloseParen = 6;
ECMAScriptPassParser.OpenBrace = 7;
ECMAScriptPassParser.CloseBrace = 8;
ECMAScriptPassParser.SemiColon = 9;
ECMAScriptPassParser.Comma = 10;
ECMAScriptPassParser.Assign = 11;
ECMAScriptPassParser.QuestionMark = 12;
ECMAScriptPassParser.Colon = 13;
ECMAScriptPassParser.Dot = 14;
ECMAScriptPassParser.PlusPlus = 15;
ECMAScriptPassParser.MinusMinus = 16;
ECMAScriptPassParser.Plus = 17;
ECMAScriptPassParser.Minus = 18;
ECMAScriptPassParser.BitNot = 19;
ECMAScriptPassParser.Not = 20;
ECMAScriptPassParser.Multiply = 21;
ECMAScriptPassParser.Divide = 22;
ECMAScriptPassParser.Modulus = 23;
ECMAScriptPassParser.RightShiftArithmetic = 24;
ECMAScriptPassParser.LeftShiftArithmetic = 25;
ECMAScriptPassParser.RightShiftLogical = 26;
ECMAScriptPassParser.LessThan = 27;
ECMAScriptPassParser.MoreThan = 28;
ECMAScriptPassParser.LessThanEquals = 29;
ECMAScriptPassParser.GreaterThanEquals = 30;
ECMAScriptPassParser.Equals = 31;
ECMAScriptPassParser.NotEquals = 32;
ECMAScriptPassParser.IdentityEquals = 33;
ECMAScriptPassParser.IdentityNotEquals = 34;
ECMAScriptPassParser.BitAnd = 35;
ECMAScriptPassParser.BitXOr = 36;
ECMAScriptPassParser.BitOr = 37;
ECMAScriptPassParser.And = 38;
ECMAScriptPassParser.Or = 39;
ECMAScriptPassParser.MultiplyAssign = 40;
ECMAScriptPassParser.DivideAssign = 41;
ECMAScriptPassParser.ModulusAssign = 42;
ECMAScriptPassParser.PlusAssign = 43;
ECMAScriptPassParser.MinusAssign = 44;
ECMAScriptPassParser.LeftShiftArithmeticAssign = 45;
ECMAScriptPassParser.RightShiftArithmeticAssign = 46;
ECMAScriptPassParser.RightShiftLogicalAssign = 47;
ECMAScriptPassParser.BitAndAssign = 48;
ECMAScriptPassParser.BitXorAssign = 49;
ECMAScriptPassParser.BitOrAssign = 50;
ECMAScriptPassParser.NullLiteral = 51;
ECMAScriptPassParser.BooleanLiteral = 52;
ECMAScriptPassParser.DecimalLiteral = 53;
ECMAScriptPassParser.HexIntegerLiteral = 54;
ECMAScriptPassParser.OctalIntegerLiteral = 55;
ECMAScriptPassParser.Break = 56;
ECMAScriptPassParser.Do = 57;
ECMAScriptPassParser.Instanceof = 58;
ECMAScriptPassParser.Typeof = 59;
ECMAScriptPassParser.Case = 60;
ECMAScriptPassParser.Else = 61;
ECMAScriptPassParser.New = 62;
ECMAScriptPassParser.Var = 63;
ECMAScriptPassParser.Catch = 64;
ECMAScriptPassParser.Finally = 65;
ECMAScriptPassParser.Return = 66;
ECMAScriptPassParser.Void = 67;
ECMAScriptPassParser.Continue = 68;
ECMAScriptPassParser.For = 69;
ECMAScriptPassParser.Switch = 70;
ECMAScriptPassParser.While = 71;
ECMAScriptPassParser.Debugger = 72;
ECMAScriptPassParser.Function = 73;
ECMAScriptPassParser.This = 74;
ECMAScriptPassParser.With = 75;
ECMAScriptPassParser.Default = 76;
ECMAScriptPassParser.If = 77;
ECMAScriptPassParser.Throw = 78;
ECMAScriptPassParser.Delete = 79;
ECMAScriptPassParser.In = 80;
ECMAScriptPassParser.Try = 81;
ECMAScriptPassParser.Class = 82;
ECMAScriptPassParser.Enum = 83;
ECMAScriptPassParser.Extends = 84;
ECMAScriptPassParser.Super = 85;
ECMAScriptPassParser.Const = 86;
ECMAScriptPassParser.Export = 87;
ECMAScriptPassParser.Import = 88;
ECMAScriptPassParser.Implements = 89;
ECMAScriptPassParser.Let = 90;
ECMAScriptPassParser.Private = 91;
ECMAScriptPassParser.Public = 92;
ECMAScriptPassParser.Interface = 93;
ECMAScriptPassParser.Package = 94;
ECMAScriptPassParser.Protected = 95;
ECMAScriptPassParser.Static = 96;
ECMAScriptPassParser.Yield = 97;
ECMAScriptPassParser.Identifier = 98;
ECMAScriptPassParser.StringLiteral = 99;
ECMAScriptPassParser.WhiteSpaces = 100;
ECMAScriptPassParser.MultiLineComment = 101;
ECMAScriptPassParser.SingleLineComment = 102;
ECMAScriptPassParser.UnexpectedCharacter = 103;

ECMAScriptPassParser.RULE_file = 0;
ECMAScriptPassParser.RULE_program = 1;
ECMAScriptPassParser.RULE_sourceElements = 2;
ECMAScriptPassParser.RULE_sourceElement = 3;
ECMAScriptPassParser.RULE_statement = 4;
ECMAScriptPassParser.RULE_block = 5;
ECMAScriptPassParser.RULE_statementList = 6;
ECMAScriptPassParser.RULE_variableStatement = 7;
ECMAScriptPassParser.RULE_variableDeclarationList = 8;
ECMAScriptPassParser.RULE_variableDeclaration = 9;
ECMAScriptPassParser.RULE_initialiser = 10;
ECMAScriptPassParser.RULE_emptyStatement = 11;
ECMAScriptPassParser.RULE_expressionStatement = 12;
ECMAScriptPassParser.RULE_ifStatement = 13;
ECMAScriptPassParser.RULE_iterationStatement = 14;
ECMAScriptPassParser.RULE_continueStatement = 15;
ECMAScriptPassParser.RULE_breakStatement = 16;
ECMAScriptPassParser.RULE_returnStatement = 17;
ECMAScriptPassParser.RULE_withStatement = 18;
ECMAScriptPassParser.RULE_switchStatement = 19;
ECMAScriptPassParser.RULE_caseBlock = 20;
ECMAScriptPassParser.RULE_caseClauses = 21;
ECMAScriptPassParser.RULE_caseClause = 22;
ECMAScriptPassParser.RULE_defaultClause = 23;
ECMAScriptPassParser.RULE_labelledStatement = 24;
ECMAScriptPassParser.RULE_throwStatement = 25;
ECMAScriptPassParser.RULE_tryStatement = 26;
ECMAScriptPassParser.RULE_catchProduction = 27;
ECMAScriptPassParser.RULE_finallyProduction = 28;
ECMAScriptPassParser.RULE_debuggerStatement = 29;
ECMAScriptPassParser.RULE_functionDeclaration = 30;
ECMAScriptPassParser.RULE_formalParameterList = 31;
ECMAScriptPassParser.RULE_functionBody = 32;
ECMAScriptPassParser.RULE_arrayLiteral = 33;
ECMAScriptPassParser.RULE_elementList = 34;
ECMAScriptPassParser.RULE_elision = 35;
ECMAScriptPassParser.RULE_objectLiteral = 36;
ECMAScriptPassParser.RULE_propertyNameAndValueList = 37;
ECMAScriptPassParser.RULE_propertyAssignment = 38;
ECMAScriptPassParser.RULE_propertyName = 39;
ECMAScriptPassParser.RULE_propertySetParameterList = 40;
ECMAScriptPassParser.RULE_arguments = 41;
ECMAScriptPassParser.RULE_argumentList = 42;
ECMAScriptPassParser.RULE_expressionSequence = 43;
ECMAScriptPassParser.RULE_singleExpression = 44;
ECMAScriptPassParser.RULE_assignmentOperator = 45;
ECMAScriptPassParser.RULE_literal = 46;
ECMAScriptPassParser.RULE_numericLiteral = 47;
ECMAScriptPassParser.RULE_identifierName = 48;
ECMAScriptPassParser.RULE_reservedWord = 49;
ECMAScriptPassParser.RULE_keyword = 50;
ECMAScriptPassParser.RULE_futureReservedWord = 51;
ECMAScriptPassParser.RULE_getter = 52;
ECMAScriptPassParser.RULE_setter = 53;
ECMAScriptPassParser.RULE_eos = 54;
ECMAScriptPassParser.RULE_eof = 55;

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

FileContext.prototype.program = function() {
    return this.getTypedRuleContext(ProgramContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.program();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptPassParser.EOF, 0);
};

ProgramContext.prototype.sourceElements = function() {
    return this.getTypedRuleContext(SourceElementsContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitProgram(this);
	}
};




ECMAScriptPassParser.ProgramContext = ProgramContext;

ECMAScriptPassParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScriptPassParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.SemiColon) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Break - 51)) | (1 << (ECMAScriptPassParser.Do - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Var - 51)) | (1 << (ECMAScriptPassParser.Return - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Continue - 51)) | (1 << (ECMAScriptPassParser.For - 51)) | (1 << (ECMAScriptPassParser.Switch - 51)) | (1 << (ECMAScriptPassParser.While - 51)) | (1 << (ECMAScriptPassParser.Debugger - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.With - 51)) | (1 << (ECMAScriptPassParser.If - 51)) | (1 << (ECMAScriptPassParser.Throw - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)) | (1 << (ECMAScriptPassParser.Try - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
            this.state = 114;
            this.sourceElements();
        }

        this.state = 117;
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

function SourceElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_sourceElements;
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterSourceElements(this);
	}
};

SourceElementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitSourceElements(this);
	}
};




ECMAScriptPassParser.SourceElementsContext = SourceElementsContext;

ECMAScriptPassParser.prototype.sourceElements = function() {

    var localctx = new SourceElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptPassParser.RULE_sourceElements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 119;
            this.sourceElement();
            this.state = 122; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.SemiColon) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Break - 51)) | (1 << (ECMAScriptPassParser.Do - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Var - 51)) | (1 << (ECMAScriptPassParser.Return - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Continue - 51)) | (1 << (ECMAScriptPassParser.For - 51)) | (1 << (ECMAScriptPassParser.Switch - 51)) | (1 << (ECMAScriptPassParser.While - 51)) | (1 << (ECMAScriptPassParser.Debugger - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.With - 51)) | (1 << (ECMAScriptPassParser.If - 51)) | (1 << (ECMAScriptPassParser.Throw - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)) | (1 << (ECMAScriptPassParser.Try - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptPassParser.RULE_sourceElement;
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterSourceElement(this);
	}
};

SourceElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitSourceElement(this);
	}
};




ECMAScriptPassParser.SourceElementContext = SourceElementContext;

ECMAScriptPassParser.prototype.sourceElement = function() {

    var localctx = new SourceElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScriptPassParser.RULE_sourceElement);
    try {
        this.state = 126;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_statement;
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
    this.enterRule(localctx, 8, ECMAScriptPassParser.RULE_statement);
    try {
        this.state = 143;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 128;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 129;
            this.variableStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 130;
            this.emptyStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 131;
            this.expressionStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 132;
            this.ifStatement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 133;
            this.iterationStatement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 134;
            this.continueStatement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 135;
            this.breakStatement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 136;
            this.returnStatement();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 137;
            this.withStatement();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 138;
            this.labelledStatement();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 139;
            this.switchStatement();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 140;
            this.throwStatement();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 141;
            this.tryStatement();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 142;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBlock(this);
	}
};




ECMAScriptPassParser.BlockContext = BlockContext;

ECMAScriptPassParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ECMAScriptPassParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.SemiColon) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Break - 51)) | (1 << (ECMAScriptPassParser.Do - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Var - 51)) | (1 << (ECMAScriptPassParser.Return - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Continue - 51)) | (1 << (ECMAScriptPassParser.For - 51)) | (1 << (ECMAScriptPassParser.Switch - 51)) | (1 << (ECMAScriptPassParser.While - 51)) | (1 << (ECMAScriptPassParser.Debugger - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.With - 51)) | (1 << (ECMAScriptPassParser.If - 51)) | (1 << (ECMAScriptPassParser.Throw - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)) | (1 << (ECMAScriptPassParser.Try - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
            this.state = 146;
            this.statementList();
        }

        this.state = 149;
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
    this.enterRule(localctx, 12, ECMAScriptPassParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 151;
            this.statement();
            this.state = 154; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.SemiColon) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Break - 51)) | (1 << (ECMAScriptPassParser.Do - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Var - 51)) | (1 << (ECMAScriptPassParser.Return - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Continue - 51)) | (1 << (ECMAScriptPassParser.For - 51)) | (1 << (ECMAScriptPassParser.Switch - 51)) | (1 << (ECMAScriptPassParser.While - 51)) | (1 << (ECMAScriptPassParser.Debugger - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.With - 51)) | (1 << (ECMAScriptPassParser.If - 51)) | (1 << (ECMAScriptPassParser.Throw - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)) | (1 << (ECMAScriptPassParser.Try - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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

VariableStatementContext.prototype.variableDeclarationList = function() {
    return this.getTypedRuleContext(VariableDeclarationListContext,0);
};

VariableStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
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
    this.enterRule(localctx, 14, ECMAScriptPassParser.RULE_variableStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.match(ECMAScriptPassParser.Var);
        this.state = 157;
        this.variableDeclarationList();
        this.state = 158;
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
    this.enterRule(localctx, 16, ECMAScriptPassParser.RULE_variableDeclarationList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.variableDeclaration();
        this.state = 165;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 161;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 162;
                this.variableDeclaration(); 
            }
            this.state = 167;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

VariableDeclarationContext.prototype.initialiser = function() {
    return this.getTypedRuleContext(InitialiserContext,0);
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
    this.enterRule(localctx, 18, ECMAScriptPassParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(ECMAScriptPassParser.Identifier);
        this.state = 170;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 169;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_initialiser;
    return this;
}

InitialiserContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitialiserContext.prototype.constructor = InitialiserContext;

InitialiserContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

InitialiserContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterInitialiser(this);
	}
};

InitialiserContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitInitialiser(this);
	}
};




ECMAScriptPassParser.InitialiserContext = InitialiserContext;

ECMAScriptPassParser.prototype.initialiser = function() {

    var localctx = new InitialiserContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScriptPassParser.RULE_initialiser);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(ECMAScriptPassParser.Assign);
        this.state = 173;
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
    this.enterRule(localctx, 22, ECMAScriptPassParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
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

ExpressionStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
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
    this.enterRule(localctx, 24, ECMAScriptPassParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.If = function() {
    return this.getToken(ECMAScriptPassParser.If, 0);
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
    return this.getToken(ECMAScriptPassParser.Else, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitIfStatement(this);
	}
};




ECMAScriptPassParser.IfStatementContext = IfStatementContext;

ECMAScriptPassParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ECMAScriptPassParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(ECMAScriptPassParser.If);
        this.state = 180;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 181;
        this.expressionSequence();
        this.state = 182;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 183;
        this.statement();
        this.state = 186;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 184;
            this.match(ECMAScriptPassParser.Else);
            this.state = 185;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_iterationStatement;
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

ECMAScriptPassParser.DoStatementContext = DoStatementContext;

DoStatementContext.prototype.Do = function() {
    return this.getToken(ECMAScriptPassParser.Do, 0);
};

DoStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

DoStatementContext.prototype.While = function() {
    return this.getToken(ECMAScriptPassParser.While, 0);
};

DoStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

DoStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};
DoStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterDoStatement(this);
	}
};

DoStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ForVarStatementContext = ForVarStatementContext;

ForVarStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptPassParser.For, 0);
};

ForVarStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScriptPassParser.Var, 0);
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterForVarStatement(this);
	}
};

ForVarStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ForVarInStatementContext = ForVarInStatementContext;

ForVarInStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptPassParser.For, 0);
};

ForVarInStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScriptPassParser.Var, 0);
};

ForVarInStatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

ForVarInStatementContext.prototype.In = function() {
    return this.getToken(ECMAScriptPassParser.In, 0);
};

ForVarInStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ForVarInStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
ForVarInStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterForVarInStatement(this);
	}
};

ForVarInStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.WhileStatementContext = WhileStatementContext;

WhileStatementContext.prototype.While = function() {
    return this.getToken(ECMAScriptPassParser.While, 0);
};

WhileStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

WhileStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ForStatementContext = ForStatementContext;

ForStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptPassParser.For, 0);
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterForStatement(this);
	}
};

ForStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ForInStatementContext = ForInStatementContext;

ForInStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptPassParser.For, 0);
};

ForInStatementContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ForInStatementContext.prototype.In = function() {
    return this.getToken(ECMAScriptPassParser.In, 0);
};

ForInStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ForInStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
ForInStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterForInStatement(this);
	}
};

ForInStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitForInStatement(this);
	}
};



ECMAScriptPassParser.IterationStatementContext = IterationStatementContext;

ECMAScriptPassParser.prototype.iterationStatement = function() {

    var localctx = new IterationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ECMAScriptPassParser.RULE_iterationStatement);
    var _la = 0; // Token type
    try {
        this.state = 249;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DoStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.match(ECMAScriptPassParser.Do);
            this.state = 189;
            this.statement();
            this.state = 190;
            this.match(ECMAScriptPassParser.While);
            this.state = 191;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 192;
            this.expressionSequence();
            this.state = 193;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 194;
            this.eos();
            break;

        case 2:
            localctx = new WhileStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 196;
            this.match(ECMAScriptPassParser.While);
            this.state = 197;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 198;
            this.expressionSequence();
            this.state = 199;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 200;
            this.statement();
            break;

        case 3:
            localctx = new ForStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 202;
            this.match(ECMAScriptPassParser.For);
            this.state = 203;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
                this.state = 204;
                this.expressionSequence();
            }

            this.state = 207;
            this.match(ECMAScriptPassParser.SemiColon);
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
                this.state = 208;
                this.expressionSequence();
            }

            this.state = 211;
            this.match(ECMAScriptPassParser.SemiColon);
            this.state = 213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
                this.state = 212;
                this.expressionSequence();
            }

            this.state = 215;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 216;
            this.statement();
            break;

        case 4:
            localctx = new ForVarStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 217;
            this.match(ECMAScriptPassParser.For);
            this.state = 218;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 219;
            this.match(ECMAScriptPassParser.Var);
            this.state = 220;
            this.variableDeclarationList();
            this.state = 221;
            this.match(ECMAScriptPassParser.SemiColon);
            this.state = 223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
                this.state = 222;
                this.expressionSequence();
            }

            this.state = 225;
            this.match(ECMAScriptPassParser.SemiColon);
            this.state = 227;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
                this.state = 226;
                this.expressionSequence();
            }

            this.state = 229;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 230;
            this.statement();
            break;

        case 5:
            localctx = new ForInStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 232;
            this.match(ECMAScriptPassParser.For);
            this.state = 233;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 234;
            this.singleExpression(0);
            this.state = 235;
            this.match(ECMAScriptPassParser.In);
            this.state = 236;
            this.expressionSequence();
            this.state = 237;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 238;
            this.statement();
            break;

        case 6:
            localctx = new ForVarInStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 240;
            this.match(ECMAScriptPassParser.For);
            this.state = 241;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 242;
            this.match(ECMAScriptPassParser.Var);
            this.state = 243;
            this.variableDeclaration();
            this.state = 244;
            this.match(ECMAScriptPassParser.In);
            this.state = 245;
            this.expressionSequence();
            this.state = 246;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 247;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_continueStatement;
    return this;
}

ContinueStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueStatementContext.prototype.constructor = ContinueStatementContext;

ContinueStatementContext.prototype.Continue = function() {
    return this.getToken(ECMAScriptPassParser.Continue, 0);
};

ContinueStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ContinueStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

ContinueStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterContinueStatement(this);
	}
};

ContinueStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitContinueStatement(this);
	}
};




ECMAScriptPassParser.ContinueStatementContext = ContinueStatementContext;

ECMAScriptPassParser.prototype.continueStatement = function() {

    var localctx = new ContinueStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ECMAScriptPassParser.RULE_continueStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this.match(ECMAScriptPassParser.Continue);
        this.state = 254;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 252;
            if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
            }
            this.state = 253;
            this.match(ECMAScriptPassParser.Identifier);

        }
        this.state = 256;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_breakStatement;
    return this;
}

BreakStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakStatementContext.prototype.constructor = BreakStatementContext;

BreakStatementContext.prototype.Break = function() {
    return this.getToken(ECMAScriptPassParser.Break, 0);
};

BreakStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

BreakStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

BreakStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBreakStatement(this);
	}
};

BreakStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBreakStatement(this);
	}
};




ECMAScriptPassParser.BreakStatementContext = BreakStatementContext;

ECMAScriptPassParser.prototype.breakStatement = function() {

    var localctx = new BreakStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ECMAScriptPassParser.RULE_breakStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(ECMAScriptPassParser.Break);
        this.state = 261;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 259;
            if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
            }
            this.state = 260;
            this.match(ECMAScriptPassParser.Identifier);

        }
        this.state = 263;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.Return = function() {
    return this.getToken(ECMAScriptPassParser.Return, 0);
};

ReturnStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ReturnStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitReturnStatement(this);
	}
};




ECMAScriptPassParser.ReturnStatementContext = ReturnStatementContext;

ECMAScriptPassParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ECMAScriptPassParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(ECMAScriptPassParser.Return);
        this.state = 268;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 266;
            if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
            }
            this.state = 267;
            this.expressionSequence();

        }
        this.state = 270;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_withStatement;
    return this;
}

WithStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithStatementContext.prototype.constructor = WithStatementContext;

WithStatementContext.prototype.With = function() {
    return this.getToken(ECMAScriptPassParser.With, 0);
};

WithStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

WithStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

WithStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterWithStatement(this);
	}
};

WithStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitWithStatement(this);
	}
};




ECMAScriptPassParser.WithStatementContext = WithStatementContext;

ECMAScriptPassParser.prototype.withStatement = function() {

    var localctx = new WithStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ECMAScriptPassParser.RULE_withStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        this.match(ECMAScriptPassParser.With);
        this.state = 273;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 274;
        this.expressionSequence();
        this.state = 275;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 276;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_switchStatement;
    return this;
}

SwitchStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwitchStatementContext.prototype.constructor = SwitchStatementContext;

SwitchStatementContext.prototype.Switch = function() {
    return this.getToken(ECMAScriptPassParser.Switch, 0);
};

SwitchStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

SwitchStatementContext.prototype.caseBlock = function() {
    return this.getTypedRuleContext(CaseBlockContext,0);
};

SwitchStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterSwitchStatement(this);
	}
};

SwitchStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitSwitchStatement(this);
	}
};




ECMAScriptPassParser.SwitchStatementContext = SwitchStatementContext;

ECMAScriptPassParser.prototype.switchStatement = function() {

    var localctx = new SwitchStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ECMAScriptPassParser.RULE_switchStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.match(ECMAScriptPassParser.Switch);
        this.state = 279;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 280;
        this.expressionSequence();
        this.state = 281;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 282;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_caseBlock;
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCaseBlock(this);
	}
};

CaseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCaseBlock(this);
	}
};




ECMAScriptPassParser.CaseBlockContext = CaseBlockContext;

ECMAScriptPassParser.prototype.caseBlock = function() {

    var localctx = new CaseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ECMAScriptPassParser.RULE_caseBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Case) {
            this.state = 285;
            this.caseClauses();
        }

        this.state = 292;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Default) {
            this.state = 288;
            this.defaultClause();
            this.state = 290;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Case) {
                this.state = 289;
                this.caseClauses();
            }

        }

        this.state = 294;
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

function CaseClausesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_caseClauses;
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCaseClauses(this);
	}
};

CaseClausesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCaseClauses(this);
	}
};




ECMAScriptPassParser.CaseClausesContext = CaseClausesContext;

ECMAScriptPassParser.prototype.caseClauses = function() {

    var localctx = new CaseClausesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ECMAScriptPassParser.RULE_caseClauses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 296;
            this.caseClause();
            this.state = 299; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ECMAScriptPassParser.Case);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = ECMAScriptPassParser.RULE_caseClause;
    return this;
}

CaseClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseClauseContext.prototype.constructor = CaseClauseContext;

CaseClauseContext.prototype.Case = function() {
    return this.getToken(ECMAScriptPassParser.Case, 0);
};

CaseClauseContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

CaseClauseContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

CaseClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCaseClause(this);
	}
};

CaseClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCaseClause(this);
	}
};




ECMAScriptPassParser.CaseClauseContext = CaseClauseContext;

ECMAScriptPassParser.prototype.caseClause = function() {

    var localctx = new CaseClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ECMAScriptPassParser.RULE_caseClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(ECMAScriptPassParser.Case);
        this.state = 302;
        this.expressionSequence();
        this.state = 303;
        this.match(ECMAScriptPassParser.Colon);
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.SemiColon) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Break - 51)) | (1 << (ECMAScriptPassParser.Do - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Var - 51)) | (1 << (ECMAScriptPassParser.Return - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Continue - 51)) | (1 << (ECMAScriptPassParser.For - 51)) | (1 << (ECMAScriptPassParser.Switch - 51)) | (1 << (ECMAScriptPassParser.While - 51)) | (1 << (ECMAScriptPassParser.Debugger - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.With - 51)) | (1 << (ECMAScriptPassParser.If - 51)) | (1 << (ECMAScriptPassParser.Throw - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)) | (1 << (ECMAScriptPassParser.Try - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
            this.state = 304;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_defaultClause;
    return this;
}

DefaultClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultClauseContext.prototype.constructor = DefaultClauseContext;

DefaultClauseContext.prototype.Default = function() {
    return this.getToken(ECMAScriptPassParser.Default, 0);
};

DefaultClauseContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

DefaultClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterDefaultClause(this);
	}
};

DefaultClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitDefaultClause(this);
	}
};




ECMAScriptPassParser.DefaultClauseContext = DefaultClauseContext;

ECMAScriptPassParser.prototype.defaultClause = function() {

    var localctx = new DefaultClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ECMAScriptPassParser.RULE_defaultClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.match(ECMAScriptPassParser.Default);
        this.state = 308;
        this.match(ECMAScriptPassParser.Colon);
        this.state = 310;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.SemiColon) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Break - 51)) | (1 << (ECMAScriptPassParser.Do - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Var - 51)) | (1 << (ECMAScriptPassParser.Return - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Continue - 51)) | (1 << (ECMAScriptPassParser.For - 51)) | (1 << (ECMAScriptPassParser.Switch - 51)) | (1 << (ECMAScriptPassParser.While - 51)) | (1 << (ECMAScriptPassParser.Debugger - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.With - 51)) | (1 << (ECMAScriptPassParser.If - 51)) | (1 << (ECMAScriptPassParser.Throw - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)) | (1 << (ECMAScriptPassParser.Try - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
            this.state = 309;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_labelledStatement;
    return this;
}

LabelledStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelledStatementContext.prototype.constructor = LabelledStatementContext;

LabelledStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

LabelledStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

LabelledStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLabelledStatement(this);
	}
};

LabelledStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLabelledStatement(this);
	}
};




ECMAScriptPassParser.LabelledStatementContext = LabelledStatementContext;

ECMAScriptPassParser.prototype.labelledStatement = function() {

    var localctx = new LabelledStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ECMAScriptPassParser.RULE_labelledStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        this.match(ECMAScriptPassParser.Identifier);
        this.state = 313;
        this.match(ECMAScriptPassParser.Colon);
        this.state = 314;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_throwStatement;
    return this;
}

ThrowStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowStatementContext.prototype.constructor = ThrowStatementContext;

ThrowStatementContext.prototype.Throw = function() {
    return this.getToken(ECMAScriptPassParser.Throw, 0);
};

ThrowStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ThrowStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ThrowStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterThrowStatement(this);
	}
};

ThrowStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitThrowStatement(this);
	}
};




ECMAScriptPassParser.ThrowStatementContext = ThrowStatementContext;

ECMAScriptPassParser.prototype.throwStatement = function() {

    var localctx = new ThrowStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ECMAScriptPassParser.RULE_throwStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this.match(ECMAScriptPassParser.Throw);
        this.state = 317;
        if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
            throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
        }
        this.state = 318;
        this.expressionSequence();
        this.state = 319;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_tryStatement;
    return this;
}

TryStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TryStatementContext.prototype.constructor = TryStatementContext;

TryStatementContext.prototype.Try = function() {
    return this.getToken(ECMAScriptPassParser.Try, 0);
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterTryStatement(this);
	}
};

TryStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitTryStatement(this);
	}
};




ECMAScriptPassParser.TryStatementContext = TryStatementContext;

ECMAScriptPassParser.prototype.tryStatement = function() {

    var localctx = new TryStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ECMAScriptPassParser.RULE_tryStatement);
    try {
        this.state = 334;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 321;
            this.match(ECMAScriptPassParser.Try);
            this.state = 322;
            this.block();
            this.state = 323;
            this.catchProduction();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 325;
            this.match(ECMAScriptPassParser.Try);
            this.state = 326;
            this.block();
            this.state = 327;
            this.finallyProduction();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 329;
            this.match(ECMAScriptPassParser.Try);
            this.state = 330;
            this.block();
            this.state = 331;
            this.catchProduction();
            this.state = 332;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_catchProduction;
    return this;
}

CatchProductionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CatchProductionContext.prototype.constructor = CatchProductionContext;

CatchProductionContext.prototype.Catch = function() {
    return this.getToken(ECMAScriptPassParser.Catch, 0);
};

CatchProductionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

CatchProductionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

CatchProductionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCatchProduction(this);
	}
};

CatchProductionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCatchProduction(this);
	}
};




ECMAScriptPassParser.CatchProductionContext = CatchProductionContext;

ECMAScriptPassParser.prototype.catchProduction = function() {

    var localctx = new CatchProductionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ECMAScriptPassParser.RULE_catchProduction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.match(ECMAScriptPassParser.Catch);
        this.state = 337;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 338;
        this.match(ECMAScriptPassParser.Identifier);
        this.state = 339;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 340;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_finallyProduction;
    return this;
}

FinallyProductionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FinallyProductionContext.prototype.constructor = FinallyProductionContext;

FinallyProductionContext.prototype.Finally = function() {
    return this.getToken(ECMAScriptPassParser.Finally, 0);
};

FinallyProductionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FinallyProductionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFinallyProduction(this);
	}
};

FinallyProductionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFinallyProduction(this);
	}
};




ECMAScriptPassParser.FinallyProductionContext = FinallyProductionContext;

ECMAScriptPassParser.prototype.finallyProduction = function() {

    var localctx = new FinallyProductionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ECMAScriptPassParser.RULE_finallyProduction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
        this.match(ECMAScriptPassParser.Finally);
        this.state = 343;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_debuggerStatement;
    return this;
}

DebuggerStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DebuggerStatementContext.prototype.constructor = DebuggerStatementContext;

DebuggerStatementContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptPassParser.Debugger, 0);
};

DebuggerStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

DebuggerStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterDebuggerStatement(this);
	}
};

DebuggerStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitDebuggerStatement(this);
	}
};




ECMAScriptPassParser.DebuggerStatementContext = DebuggerStatementContext;

ECMAScriptPassParser.prototype.debuggerStatement = function() {

    var localctx = new DebuggerStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ECMAScriptPassParser.RULE_debuggerStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(ECMAScriptPassParser.Debugger);
        this.state = 346;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
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
    this.enterRule(localctx, 60, ECMAScriptPassParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(ECMAScriptPassParser.Function);
        this.state = 349;
        this.match(ECMAScriptPassParser.Identifier);
        this.state = 350;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 352;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Identifier) {
            this.state = 351;
            this.formalParameterList();
        }

        this.state = 354;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 355;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 356;
        this.functionBody();
        this.state = 357;
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

FormalParameterListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Identifier);
    } else {
        return this.getToken(ECMAScriptPassParser.Identifier, i);
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
    this.enterRule(localctx, 62, ECMAScriptPassParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        this.match(ECMAScriptPassParser.Identifier);
        this.state = 364;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 360;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 361;
            this.match(ECMAScriptPassParser.Identifier);
            this.state = 366;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.sourceElements = function() {
    return this.getTypedRuleContext(SourceElementsContext,0);
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
    this.enterRule(localctx, 64, ECMAScriptPassParser.RULE_functionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.SemiColon) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Break - 51)) | (1 << (ECMAScriptPassParser.Do - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Var - 51)) | (1 << (ECMAScriptPassParser.Return - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Continue - 51)) | (1 << (ECMAScriptPassParser.For - 51)) | (1 << (ECMAScriptPassParser.Switch - 51)) | (1 << (ECMAScriptPassParser.While - 51)) | (1 << (ECMAScriptPassParser.Debugger - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.With - 51)) | (1 << (ECMAScriptPassParser.If - 51)) | (1 << (ECMAScriptPassParser.Throw - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)) | (1 << (ECMAScriptPassParser.Try - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
            this.state = 367;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_arrayLiteral;
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
    this.enterRule(localctx, 66, ECMAScriptPassParser.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 370;
        this.match(ECMAScriptPassParser.OpenBracket);
        this.state = 372;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 371;
            this.elementList();

        }
        this.state = 375;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        if(la_===1) {
            this.state = 374;
            this.match(ECMAScriptPassParser.Comma);

        }
        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Comma) {
            this.state = 377;
            this.elision();
        }

        this.state = 380;
        this.match(ECMAScriptPassParser.CloseBracket);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterElementList(this);
	}
};

ElementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitElementList(this);
	}
};




ECMAScriptPassParser.ElementListContext = ElementListContext;

ECMAScriptPassParser.prototype.elementList = function() {

    var localctx = new ElementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ECMAScriptPassParser.RULE_elementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Comma) {
            this.state = 382;
            this.elision();
        }

        this.state = 385;
        this.singleExpression(0);
        this.state = 393;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 386;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ECMAScriptPassParser.Comma) {
                    this.state = 387;
                    this.elision();
                }

                this.state = 390;
                this.singleExpression(0); 
            }
            this.state = 395;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_elision;
    return this;
}

ElisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElisionContext.prototype.constructor = ElisionContext;


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
    this.enterRule(localctx, 70, ECMAScriptPassParser.RULE_elision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 396;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 399; 
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

ObjectLiteralContext.prototype.propertyNameAndValueList = function() {
    return this.getTypedRuleContext(PropertyNameAndValueListContext,0);
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
    this.enterRule(localctx, 72, ECMAScriptPassParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.state = 410;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 401;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 402;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 403;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 404;
            this.propertyNameAndValueList();
            this.state = 406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 405;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 408;
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

function PropertyNameAndValueListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_propertyNameAndValueList;
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyNameAndValueList(this);
	}
};

PropertyNameAndValueListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertyNameAndValueList(this);
	}
};




ECMAScriptPassParser.PropertyNameAndValueListContext = PropertyNameAndValueListContext;

ECMAScriptPassParser.prototype.propertyNameAndValueList = function() {

    var localctx = new PropertyNameAndValueListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ECMAScriptPassParser.RULE_propertyNameAndValueList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.propertyAssignment();
        this.state = 417;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 413;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 414;
                this.propertyAssignment(); 
            }
            this.state = 419;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_propertyAssignment;
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

ECMAScriptPassParser.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;

PropertyExpressionAssignmentContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyExpressionAssignmentContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PropertyExpressionAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyExpressionAssignment(this);
	}
};

PropertyExpressionAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.PropertySetterContext = PropertySetterContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertySetter(this);
	}
};

PropertySetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.PropertyGetterContext = PropertyGetterContext;

PropertyGetterContext.prototype.getter = function() {
    return this.getTypedRuleContext(GetterContext,0);
};

PropertyGetterContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};
PropertyGetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyGetter(this);
	}
};

PropertyGetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertyGetter(this);
	}
};



ECMAScriptPassParser.PropertyAssignmentContext = PropertyAssignmentContext;

ECMAScriptPassParser.prototype.propertyAssignment = function() {

    var localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ECMAScriptPassParser.RULE_propertyAssignment);
    try {
        this.state = 439;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PropertyExpressionAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 420;
            this.propertyName();
            this.state = 421;
            this.match(ECMAScriptPassParser.Colon);
            this.state = 422;
            this.singleExpression(0);
            break;

        case 2:
            localctx = new PropertyGetterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 424;
            this.getter();
            this.state = 425;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 426;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 427;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 428;
            this.functionBody();
            this.state = 429;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;

        case 3:
            localctx = new PropertySetterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 431;
            this.setter();
            this.state = 432;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 433;
            this.propertySetParameterList();
            this.state = 434;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 435;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 436;
            this.functionBody();
            this.state = 437;
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

PropertyNameContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};

PropertyNameContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptPassParser.StringLiteral, 0);
};

PropertyNameContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
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
    this.enterRule(localctx, 78, ECMAScriptPassParser.RULE_propertyName);
    try {
        this.state = 444;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.Break:
        case ECMAScriptPassParser.Do:
        case ECMAScriptPassParser.Instanceof:
        case ECMAScriptPassParser.Typeof:
        case ECMAScriptPassParser.Case:
        case ECMAScriptPassParser.Else:
        case ECMAScriptPassParser.New:
        case ECMAScriptPassParser.Var:
        case ECMAScriptPassParser.Catch:
        case ECMAScriptPassParser.Finally:
        case ECMAScriptPassParser.Return:
        case ECMAScriptPassParser.Void:
        case ECMAScriptPassParser.Continue:
        case ECMAScriptPassParser.For:
        case ECMAScriptPassParser.Switch:
        case ECMAScriptPassParser.While:
        case ECMAScriptPassParser.Debugger:
        case ECMAScriptPassParser.Function:
        case ECMAScriptPassParser.This:
        case ECMAScriptPassParser.With:
        case ECMAScriptPassParser.Default:
        case ECMAScriptPassParser.If:
        case ECMAScriptPassParser.Throw:
        case ECMAScriptPassParser.Delete:
        case ECMAScriptPassParser.In:
        case ECMAScriptPassParser.Try:
        case ECMAScriptPassParser.Class:
        case ECMAScriptPassParser.Enum:
        case ECMAScriptPassParser.Extends:
        case ECMAScriptPassParser.Super:
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Export:
        case ECMAScriptPassParser.Import:
        case ECMAScriptPassParser.Implements:
        case ECMAScriptPassParser.Let:
        case ECMAScriptPassParser.Private:
        case ECMAScriptPassParser.Public:
        case ECMAScriptPassParser.Interface:
        case ECMAScriptPassParser.Package:
        case ECMAScriptPassParser.Protected:
        case ECMAScriptPassParser.Static:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 441;
            this.identifierName();
            break;
        case ECMAScriptPassParser.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 442;
            this.match(ECMAScriptPassParser.StringLiteral);
            break;
        case ECMAScriptPassParser.DecimalLiteral:
        case ECMAScriptPassParser.HexIntegerLiteral:
        case ECMAScriptPassParser.OctalIntegerLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 443;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_propertySetParameterList;
    return this;
}

PropertySetParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertySetParameterListContext.prototype.constructor = PropertySetParameterListContext;

PropertySetParameterListContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
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
    this.enterRule(localctx, 80, ECMAScriptPassParser.RULE_propertySetParameterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this.match(ECMAScriptPassParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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

ArgumentsContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
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
    this.enterRule(localctx, 82, ECMAScriptPassParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 448;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 450;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RegularExpressionLiteral) | (1 << ECMAScriptPassParser.OpenBracket) | (1 << ECMAScriptPassParser.OpenParen) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.PlusPlus) | (1 << ECMAScriptPassParser.MinusMinus) | (1 << ECMAScriptPassParser.Plus) | (1 << ECMAScriptPassParser.Minus) | (1 << ECMAScriptPassParser.BitNot) | (1 << ECMAScriptPassParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptPassParser.NullLiteral - 51)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 51)) | (1 << (ECMAScriptPassParser.DecimalLiteral - 51)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptPassParser.Typeof - 51)) | (1 << (ECMAScriptPassParser.New - 51)) | (1 << (ECMAScriptPassParser.Void - 51)) | (1 << (ECMAScriptPassParser.Function - 51)) | (1 << (ECMAScriptPassParser.This - 51)) | (1 << (ECMAScriptPassParser.Delete - 51)))) !== 0) || _la===ECMAScriptPassParser.Identifier || _la===ECMAScriptPassParser.StringLiteral) {
            this.state = 449;
            this.argumentList();
        }

        this.state = 452;
        this.match(ECMAScriptPassParser.CloseParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.enterRule(localctx, 84, ECMAScriptPassParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 454;
        this.singleExpression(0);
        this.state = 459;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 455;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 456;
            this.singleExpression(0);
            this.state = 461;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_expressionSequence;
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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterExpressionSequence(this);
	}
};

ExpressionSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitExpressionSequence(this);
	}
};




ECMAScriptPassParser.ExpressionSequenceContext = ExpressionSequenceContext;

ECMAScriptPassParser.prototype.expressionSequence = function() {

    var localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, ECMAScriptPassParser.RULE_expressionSequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        this.singleExpression(0);
        this.state = 467;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 463;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 464;
                this.singleExpression(0); 
            }
            this.state = 469;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_singleExpression;
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

ECMAScriptPassParser.TernaryExpressionContext = TernaryExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLogicalAndExpression(this);
	}
};

LogicalAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.PreIncrementExpressionContext = PreIncrementExpressionContext;

PreIncrementExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PreIncrementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPreIncrementExpression(this);
	}
};

PreIncrementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;

ObjectLiteralExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};
ObjectLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterObjectLiteralExpression(this);
	}
};

ObjectLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.InExpressionContext = InExpressionContext;

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
    return this.getToken(ECMAScriptPassParser.In, 0);
};
InExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterInExpression(this);
	}
};

InExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLogicalOrExpression(this);
	}
};

LogicalOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
NotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterNotExpression(this);
	}
};

NotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.PreDecreaseExpressionContext = PreDecreaseExpressionContext;

PreDecreaseExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PreDecreaseExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPreDecreaseExpression(this);
	}
};

PreDecreaseExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ArgumentsExpressionContext = ArgumentsExpressionContext;

ArgumentsExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArgumentsExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
ArgumentsExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterArgumentsExpression(this);
	}
};

ArgumentsExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ThisExpressionContext = ThisExpressionContext;

ThisExpressionContext.prototype.This = function() {
    return this.getToken(ECMAScriptPassParser.This, 0);
};
ThisExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterThisExpression(this);
	}
};

ThisExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

FunctionExpressionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionExpressionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

FunctionExpressionContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
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


function UnaryMinusExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
UnaryMinusExpressionContext.prototype.constructor = UnaryMinusExpressionContext;

ECMAScriptPassParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

UnaryMinusExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
UnaryMinusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.PostDecreaseExpressionContext = PostDecreaseExpressionContext;

PostDecreaseExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PostDecreaseExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPostDecreaseExpression(this);
	}
};

PostDecreaseExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

AssignmentExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.TypeofExpressionContext = TypeofExpressionContext;

TypeofExpressionContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptPassParser.Typeof, 0);
};

TypeofExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
TypeofExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterTypeofExpression(this);
	}
};

TypeofExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.InstanceofExpressionContext = InstanceofExpressionContext;

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
    return this.getToken(ECMAScriptPassParser.Instanceof, 0);
};
InstanceofExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterInstanceofExpression(this);
	}
};

InstanceofExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.UnaryPlusExpressionContext = UnaryPlusExpressionContext;

UnaryPlusExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
UnaryPlusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterUnaryPlusExpression(this);
	}
};

UnaryPlusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.DeleteExpressionContext = DeleteExpressionContext;

DeleteExpressionContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptPassParser.Delete, 0);
};

DeleteExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
DeleteExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterDeleteExpression(this);
	}
};

DeleteExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.EqualityExpressionContext = EqualityExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.BitXOrExpressionContext = BitXOrExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBitXOrExpression(this);
	}
};

BitXOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.BitShiftExpressionContext = BitShiftExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBitShiftExpression(this);
	}
};

BitShiftExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

ParenthesizedExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
ParenthesizedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterParenthesizedExpression(this);
	}
};

ParenthesizedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.AdditiveExpressionContext = AdditiveExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.RelationalExpressionContext = RelationalExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.PostIncrementExpressionContext = PostIncrementExpressionContext;

PostIncrementExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PostIncrementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPostIncrementExpression(this);
	}
};

PostIncrementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.BitNotExpressionContext = BitNotExpressionContext;

BitNotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
BitNotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBitNotExpression(this);
	}
};

BitNotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.NewExpressionContext = NewExpressionContext;

NewExpressionContext.prototype.New = function() {
    return this.getToken(ECMAScriptPassParser.New, 0);
};

NewExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

NewExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
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


function LiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LiteralExpressionContext.prototype.constructor = LiteralExpressionContext;

ECMAScriptPassParser.LiteralExpressionContext = LiteralExpressionContext;

LiteralExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLiteralExpression(this);
	}
};

LiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;

ArrayLiteralExpressionContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};
ArrayLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterArrayLiteralExpression(this);
	}
};

ArrayLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.MemberDotExpressionContext = MemberDotExpressionContext;

MemberDotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberDotExpressionContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};
MemberDotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterMemberDotExpression(this);
	}
};

MemberDotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.MemberIndexExpressionContext = MemberIndexExpressionContext;

MemberIndexExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberIndexExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
MemberIndexExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterMemberIndexExpression(this);
	}
};

MemberIndexExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.BitAndExpressionContext = BitAndExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBitAndExpression(this);
	}
};

BitAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.BitOrExpressionContext = BitOrExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBitOrExpression(this);
	}
};

BitOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;

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
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignmentOperatorExpression(this);
	}
};

AssignmentOperatorExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
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

ECMAScriptPassParser.VoidExpressionContext = VoidExpressionContext;

VoidExpressionContext.prototype.Void = function() {
    return this.getToken(ECMAScriptPassParser.Void, 0);
};

VoidExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
VoidExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterVoidExpression(this);
	}
};

VoidExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitVoidExpression(this);
	}
};



ECMAScriptPassParser.prototype.singleExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SingleExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 88;
    this.enterRecursionRule(localctx, 88, ECMAScriptPassParser.RULE_singleExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 516;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Function:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 471;
            this.match(ECMAScriptPassParser.Function);
            this.state = 473;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Identifier) {
                this.state = 472;
                this.match(ECMAScriptPassParser.Identifier);
            }

            this.state = 475;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 477;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Identifier) {
                this.state = 476;
                this.formalParameterList();
            }

            this.state = 479;
            this.match(ECMAScriptPassParser.CloseParen);
            this.state = 480;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 481;
            this.functionBody();
            this.state = 482;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;
        case ECMAScriptPassParser.New:
            localctx = new NewExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 484;
            this.match(ECMAScriptPassParser.New);
            this.state = 485;
            this.singleExpression(0);
            this.state = 487;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
            if(la_===1) {
                this.state = 486;
                this.arguments();

            }
            break;
        case ECMAScriptPassParser.Delete:
            localctx = new DeleteExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 489;
            this.match(ECMAScriptPassParser.Delete);
            this.state = 490;
            this.singleExpression(30);
            break;
        case ECMAScriptPassParser.Void:
            localctx = new VoidExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 491;
            this.match(ECMAScriptPassParser.Void);
            this.state = 492;
            this.singleExpression(29);
            break;
        case ECMAScriptPassParser.Typeof:
            localctx = new TypeofExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 493;
            this.match(ECMAScriptPassParser.Typeof);
            this.state = 494;
            this.singleExpression(28);
            break;
        case ECMAScriptPassParser.PlusPlus:
            localctx = new PreIncrementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 495;
            this.match(ECMAScriptPassParser.PlusPlus);
            this.state = 496;
            this.singleExpression(27);
            break;
        case ECMAScriptPassParser.MinusMinus:
            localctx = new PreDecreaseExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 497;
            this.match(ECMAScriptPassParser.MinusMinus);
            this.state = 498;
            this.singleExpression(26);
            break;
        case ECMAScriptPassParser.Plus:
            localctx = new UnaryPlusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 499;
            this.match(ECMAScriptPassParser.Plus);
            this.state = 500;
            this.singleExpression(25);
            break;
        case ECMAScriptPassParser.Minus:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 501;
            this.match(ECMAScriptPassParser.Minus);
            this.state = 502;
            this.singleExpression(24);
            break;
        case ECMAScriptPassParser.BitNot:
            localctx = new BitNotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 503;
            this.match(ECMAScriptPassParser.BitNot);
            this.state = 504;
            this.singleExpression(23);
            break;
        case ECMAScriptPassParser.Not:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 505;
            this.match(ECMAScriptPassParser.Not);
            this.state = 506;
            this.singleExpression(22);
            break;
        case ECMAScriptPassParser.This:
            localctx = new ThisExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 507;
            this.match(ECMAScriptPassParser.This);
            break;
        case ECMAScriptPassParser.Identifier:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 508;
            this.match(ECMAScriptPassParser.Identifier);
            break;
        case ECMAScriptPassParser.RegularExpressionLiteral:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.DecimalLiteral:
        case ECMAScriptPassParser.HexIntegerLiteral:
        case ECMAScriptPassParser.OctalIntegerLiteral:
        case ECMAScriptPassParser.StringLiteral:
            localctx = new LiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 509;
            this.literal();
            break;
        case ECMAScriptPassParser.OpenBracket:
            localctx = new ArrayLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 510;
            this.arrayLiteral();
            break;
        case ECMAScriptPassParser.OpenBrace:
            localctx = new ObjectLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 511;
            this.objectLiteral();
            break;
        case ECMAScriptPassParser.OpenParen:
            localctx = new ParenthesizedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 512;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 513;
            this.expressionSequence();
            this.state = 514;
            this.match(ECMAScriptPassParser.CloseParen);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 585;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 583;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 518;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 519;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.Multiply) | (1 << ECMAScriptPassParser.Divide) | (1 << ECMAScriptPassParser.Modulus))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 520;
                    this.singleExpression(22);
                    break;

                case 2:
                    localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 521;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 522;
                    _la = this._input.LA(1);
                    if(!(_la===ECMAScriptPassParser.Plus || _la===ECMAScriptPassParser.Minus)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 523;
                    this.singleExpression(21);
                    break;

                case 3:
                    localctx = new BitShiftExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 524;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 525;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.RightShiftArithmetic) | (1 << ECMAScriptPassParser.LeftShiftArithmetic) | (1 << ECMAScriptPassParser.RightShiftLogical))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 526;
                    this.singleExpression(20);
                    break;

                case 4:
                    localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 527;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 528;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.LessThan) | (1 << ECMAScriptPassParser.MoreThan) | (1 << ECMAScriptPassParser.LessThanEquals) | (1 << ECMAScriptPassParser.GreaterThanEquals))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 529;
                    this.singleExpression(19);
                    break;

                case 5:
                    localctx = new InstanceofExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 530;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 531;
                    this.match(ECMAScriptPassParser.Instanceof);
                    this.state = 532;
                    this.singleExpression(18);
                    break;

                case 6:
                    localctx = new InExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 533;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 534;
                    this.match(ECMAScriptPassParser.In);
                    this.state = 535;
                    this.singleExpression(17);
                    break;

                case 7:
                    localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 536;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 537;
                    _la = this._input.LA(1);
                    if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (ECMAScriptPassParser.Equals - 31)) | (1 << (ECMAScriptPassParser.NotEquals - 31)) | (1 << (ECMAScriptPassParser.IdentityEquals - 31)) | (1 << (ECMAScriptPassParser.IdentityNotEquals - 31)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 538;
                    this.singleExpression(16);
                    break;

                case 8:
                    localctx = new BitAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 539;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 540;
                    this.match(ECMAScriptPassParser.BitAnd);
                    this.state = 541;
                    this.singleExpression(15);
                    break;

                case 9:
                    localctx = new BitXOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 542;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 543;
                    this.match(ECMAScriptPassParser.BitXOr);
                    this.state = 544;
                    this.singleExpression(14);
                    break;

                case 10:
                    localctx = new BitOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 545;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 546;
                    this.match(ECMAScriptPassParser.BitOr);
                    this.state = 547;
                    this.singleExpression(13);
                    break;

                case 11:
                    localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 548;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 549;
                    this.match(ECMAScriptPassParser.And);
                    this.state = 550;
                    this.singleExpression(12);
                    break;

                case 12:
                    localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 551;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 552;
                    this.match(ECMAScriptPassParser.Or);
                    this.state = 553;
                    this.singleExpression(11);
                    break;

                case 13:
                    localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 554;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 555;
                    this.match(ECMAScriptPassParser.QuestionMark);
                    this.state = 556;
                    this.singleExpression(0);
                    this.state = 557;
                    this.match(ECMAScriptPassParser.Colon);
                    this.state = 558;
                    this.singleExpression(10);
                    break;

                case 14:
                    localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 560;
                    if (!( this.precpred(this._ctx, 36))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
                    }
                    this.state = 561;
                    this.match(ECMAScriptPassParser.OpenBracket);
                    this.state = 562;
                    this.expressionSequence();
                    this.state = 563;
                    this.match(ECMAScriptPassParser.CloseBracket);
                    break;

                case 15:
                    localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 565;
                    if (!( this.precpred(this._ctx, 35))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                    }
                    this.state = 566;
                    this.match(ECMAScriptPassParser.Dot);
                    this.state = 567;
                    this.identifierName();
                    break;

                case 16:
                    localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 568;
                    if (!( this.precpred(this._ctx, 34))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
                    }
                    this.state = 569;
                    this.arguments();
                    break;

                case 17:
                    localctx = new PostIncrementExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 570;
                    if (!( this.precpred(this._ctx, 32))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
                    }
                    this.state = 571;
                    if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                        throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
                    }
                    this.state = 572;
                    this.match(ECMAScriptPassParser.PlusPlus);
                    break;

                case 18:
                    localctx = new PostDecreaseExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 573;
                    if (!( this.precpred(this._ctx, 31))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                    }
                    this.state = 574;
                    if (!( !this.here(ECMAScriptPassParser.LineTerminator))) {
                        throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptPassParser.LineTerminator)");
                    }
                    this.state = 575;
                    this.match(ECMAScriptPassParser.MinusMinus);
                    break;

                case 19:
                    localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 576;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 577;
                    this.match(ECMAScriptPassParser.Assign);
                    this.state = 578;
                    this.expressionSequence();
                    break;

                case 20:
                    localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptPassParser.RULE_singleExpression);
                    this.state = 579;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 580;
                    this.assignmentOperator();
                    this.state = 581;
                    this.expressionSequence();
                    break;

                } 
            }
            this.state = 587;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;


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
    this.enterRule(localctx, 90, ECMAScriptPassParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 588;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (ECMAScriptPassParser.MultiplyAssign - 40)) | (1 << (ECMAScriptPassParser.DivideAssign - 40)) | (1 << (ECMAScriptPassParser.ModulusAssign - 40)) | (1 << (ECMAScriptPassParser.PlusAssign - 40)) | (1 << (ECMAScriptPassParser.MinusAssign - 40)) | (1 << (ECMAScriptPassParser.LeftShiftArithmeticAssign - 40)) | (1 << (ECMAScriptPassParser.RightShiftArithmeticAssign - 40)) | (1 << (ECMAScriptPassParser.RightShiftLogicalAssign - 40)) | (1 << (ECMAScriptPassParser.BitAndAssign - 40)) | (1 << (ECMAScriptPassParser.BitXorAssign - 40)) | (1 << (ECMAScriptPassParser.BitOrAssign - 40)))) !== 0))) {
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

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptPassParser.StringLiteral, 0);
};

LiteralContext.prototype.RegularExpressionLiteral = function() {
    return this.getToken(ECMAScriptPassParser.RegularExpressionLiteral, 0);
};

LiteralContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
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
    this.enterRule(localctx, 92, ECMAScriptPassParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.state = 592;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.RegularExpressionLiteral:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 590;
            _la = this._input.LA(1);
            if(!(_la===ECMAScriptPassParser.RegularExpressionLiteral || _la===ECMAScriptPassParser.NullLiteral || _la===ECMAScriptPassParser.BooleanLiteral || _la===ECMAScriptPassParser.StringLiteral)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case ECMAScriptPassParser.DecimalLiteral:
        case ECMAScriptPassParser.HexIntegerLiteral:
        case ECMAScriptPassParser.OctalIntegerLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 591;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_numericLiteral;
    return this;
}

NumericLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;

NumericLiteralContext.prototype.DecimalLiteral = function() {
    return this.getToken(ECMAScriptPassParser.DecimalLiteral, 0);
};

NumericLiteralContext.prototype.HexIntegerLiteral = function() {
    return this.getToken(ECMAScriptPassParser.HexIntegerLiteral, 0);
};

NumericLiteralContext.prototype.OctalIntegerLiteral = function() {
    return this.getToken(ECMAScriptPassParser.OctalIntegerLiteral, 0);
};

NumericLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterNumericLiteral(this);
	}
};

NumericLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitNumericLiteral(this);
	}
};




ECMAScriptPassParser.NumericLiteralContext = NumericLiteralContext;

ECMAScriptPassParser.prototype.numericLiteral = function() {

    var localctx = new NumericLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, ECMAScriptPassParser.RULE_numericLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 594;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (ECMAScriptPassParser.DecimalLiteral - 53)) | (1 << (ECMAScriptPassParser.HexIntegerLiteral - 53)) | (1 << (ECMAScriptPassParser.OctalIntegerLiteral - 53)))) !== 0))) {
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
    this.ruleIndex = ECMAScriptPassParser.RULE_identifierName;
    return this;
}

IdentifierNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierNameContext.prototype.constructor = IdentifierNameContext;

IdentifierNameContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

IdentifierNameContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

IdentifierNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterIdentifierName(this);
	}
};

IdentifierNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitIdentifierName(this);
	}
};




ECMAScriptPassParser.IdentifierNameContext = IdentifierNameContext;

ECMAScriptPassParser.prototype.identifierName = function() {

    var localctx = new IdentifierNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, ECMAScriptPassParser.RULE_identifierName);
    try {
        this.state = 598;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 596;
            this.match(ECMAScriptPassParser.Identifier);
            break;
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.Break:
        case ECMAScriptPassParser.Do:
        case ECMAScriptPassParser.Instanceof:
        case ECMAScriptPassParser.Typeof:
        case ECMAScriptPassParser.Case:
        case ECMAScriptPassParser.Else:
        case ECMAScriptPassParser.New:
        case ECMAScriptPassParser.Var:
        case ECMAScriptPassParser.Catch:
        case ECMAScriptPassParser.Finally:
        case ECMAScriptPassParser.Return:
        case ECMAScriptPassParser.Void:
        case ECMAScriptPassParser.Continue:
        case ECMAScriptPassParser.For:
        case ECMAScriptPassParser.Switch:
        case ECMAScriptPassParser.While:
        case ECMAScriptPassParser.Debugger:
        case ECMAScriptPassParser.Function:
        case ECMAScriptPassParser.This:
        case ECMAScriptPassParser.With:
        case ECMAScriptPassParser.Default:
        case ECMAScriptPassParser.If:
        case ECMAScriptPassParser.Throw:
        case ECMAScriptPassParser.Delete:
        case ECMAScriptPassParser.In:
        case ECMAScriptPassParser.Try:
        case ECMAScriptPassParser.Class:
        case ECMAScriptPassParser.Enum:
        case ECMAScriptPassParser.Extends:
        case ECMAScriptPassParser.Super:
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Export:
        case ECMAScriptPassParser.Import:
        case ECMAScriptPassParser.Implements:
        case ECMAScriptPassParser.Let:
        case ECMAScriptPassParser.Private:
        case ECMAScriptPassParser.Public:
        case ECMAScriptPassParser.Interface:
        case ECMAScriptPassParser.Package:
        case ECMAScriptPassParser.Protected:
        case ECMAScriptPassParser.Static:
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 597;
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
    this.enterRule(localctx, 98, ECMAScriptPassParser.RULE_reservedWord);
    var _la = 0; // Token type
    try {
        this.state = 603;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Break:
        case ECMAScriptPassParser.Do:
        case ECMAScriptPassParser.Instanceof:
        case ECMAScriptPassParser.Typeof:
        case ECMAScriptPassParser.Case:
        case ECMAScriptPassParser.Else:
        case ECMAScriptPassParser.New:
        case ECMAScriptPassParser.Var:
        case ECMAScriptPassParser.Catch:
        case ECMAScriptPassParser.Finally:
        case ECMAScriptPassParser.Return:
        case ECMAScriptPassParser.Void:
        case ECMAScriptPassParser.Continue:
        case ECMAScriptPassParser.For:
        case ECMAScriptPassParser.Switch:
        case ECMAScriptPassParser.While:
        case ECMAScriptPassParser.Debugger:
        case ECMAScriptPassParser.Function:
        case ECMAScriptPassParser.This:
        case ECMAScriptPassParser.With:
        case ECMAScriptPassParser.Default:
        case ECMAScriptPassParser.If:
        case ECMAScriptPassParser.Throw:
        case ECMAScriptPassParser.Delete:
        case ECMAScriptPassParser.In:
        case ECMAScriptPassParser.Try:
            this.enterOuterAlt(localctx, 1);
            this.state = 600;
            this.keyword();
            break;
        case ECMAScriptPassParser.Class:
        case ECMAScriptPassParser.Enum:
        case ECMAScriptPassParser.Extends:
        case ECMAScriptPassParser.Super:
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Export:
        case ECMAScriptPassParser.Import:
        case ECMAScriptPassParser.Implements:
        case ECMAScriptPassParser.Let:
        case ECMAScriptPassParser.Private:
        case ECMAScriptPassParser.Public:
        case ECMAScriptPassParser.Interface:
        case ECMAScriptPassParser.Package:
        case ECMAScriptPassParser.Protected:
        case ECMAScriptPassParser.Static:
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 601;
            this.futureReservedWord();
            break;
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 602;
            _la = this._input.LA(1);
            if(!(_la===ECMAScriptPassParser.NullLiteral || _la===ECMAScriptPassParser.BooleanLiteral)) {
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
    this.ruleIndex = ECMAScriptPassParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.Break = function() {
    return this.getToken(ECMAScriptPassParser.Break, 0);
};

KeywordContext.prototype.Do = function() {
    return this.getToken(ECMAScriptPassParser.Do, 0);
};

KeywordContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScriptPassParser.Instanceof, 0);
};

KeywordContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptPassParser.Typeof, 0);
};

KeywordContext.prototype.Case = function() {
    return this.getToken(ECMAScriptPassParser.Case, 0);
};

KeywordContext.prototype.Else = function() {
    return this.getToken(ECMAScriptPassParser.Else, 0);
};

KeywordContext.prototype.New = function() {
    return this.getToken(ECMAScriptPassParser.New, 0);
};

KeywordContext.prototype.Var = function() {
    return this.getToken(ECMAScriptPassParser.Var, 0);
};

KeywordContext.prototype.Catch = function() {
    return this.getToken(ECMAScriptPassParser.Catch, 0);
};

KeywordContext.prototype.Finally = function() {
    return this.getToken(ECMAScriptPassParser.Finally, 0);
};

KeywordContext.prototype.Return = function() {
    return this.getToken(ECMAScriptPassParser.Return, 0);
};

KeywordContext.prototype.Void = function() {
    return this.getToken(ECMAScriptPassParser.Void, 0);
};

KeywordContext.prototype.Continue = function() {
    return this.getToken(ECMAScriptPassParser.Continue, 0);
};

KeywordContext.prototype.For = function() {
    return this.getToken(ECMAScriptPassParser.For, 0);
};

KeywordContext.prototype.Switch = function() {
    return this.getToken(ECMAScriptPassParser.Switch, 0);
};

KeywordContext.prototype.While = function() {
    return this.getToken(ECMAScriptPassParser.While, 0);
};

KeywordContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptPassParser.Debugger, 0);
};

KeywordContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

KeywordContext.prototype.This = function() {
    return this.getToken(ECMAScriptPassParser.This, 0);
};

KeywordContext.prototype.With = function() {
    return this.getToken(ECMAScriptPassParser.With, 0);
};

KeywordContext.prototype.Default = function() {
    return this.getToken(ECMAScriptPassParser.Default, 0);
};

KeywordContext.prototype.If = function() {
    return this.getToken(ECMAScriptPassParser.If, 0);
};

KeywordContext.prototype.Throw = function() {
    return this.getToken(ECMAScriptPassParser.Throw, 0);
};

KeywordContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptPassParser.Delete, 0);
};

KeywordContext.prototype.In = function() {
    return this.getToken(ECMAScriptPassParser.In, 0);
};

KeywordContext.prototype.Try = function() {
    return this.getToken(ECMAScriptPassParser.Try, 0);
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
    this.enterRule(localctx, 100, ECMAScriptPassParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 605;
        _la = this._input.LA(1);
        if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptPassParser.Break - 56)) | (1 << (ECMAScriptPassParser.Do - 56)) | (1 << (ECMAScriptPassParser.Instanceof - 56)) | (1 << (ECMAScriptPassParser.Typeof - 56)) | (1 << (ECMAScriptPassParser.Case - 56)) | (1 << (ECMAScriptPassParser.Else - 56)) | (1 << (ECMAScriptPassParser.New - 56)) | (1 << (ECMAScriptPassParser.Var - 56)) | (1 << (ECMAScriptPassParser.Catch - 56)) | (1 << (ECMAScriptPassParser.Finally - 56)) | (1 << (ECMAScriptPassParser.Return - 56)) | (1 << (ECMAScriptPassParser.Void - 56)) | (1 << (ECMAScriptPassParser.Continue - 56)) | (1 << (ECMAScriptPassParser.For - 56)) | (1 << (ECMAScriptPassParser.Switch - 56)) | (1 << (ECMAScriptPassParser.While - 56)) | (1 << (ECMAScriptPassParser.Debugger - 56)) | (1 << (ECMAScriptPassParser.Function - 56)) | (1 << (ECMAScriptPassParser.This - 56)) | (1 << (ECMAScriptPassParser.With - 56)) | (1 << (ECMAScriptPassParser.Default - 56)) | (1 << (ECMAScriptPassParser.If - 56)) | (1 << (ECMAScriptPassParser.Throw - 56)) | (1 << (ECMAScriptPassParser.Delete - 56)) | (1 << (ECMAScriptPassParser.In - 56)) | (1 << (ECMAScriptPassParser.Try - 56)))) !== 0))) {
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

FutureReservedWordContext.prototype.Class = function() {
    return this.getToken(ECMAScriptPassParser.Class, 0);
};

FutureReservedWordContext.prototype.Enum = function() {
    return this.getToken(ECMAScriptPassParser.Enum, 0);
};

FutureReservedWordContext.prototype.Extends = function() {
    return this.getToken(ECMAScriptPassParser.Extends, 0);
};

FutureReservedWordContext.prototype.Super = function() {
    return this.getToken(ECMAScriptPassParser.Super, 0);
};

FutureReservedWordContext.prototype.Const = function() {
    return this.getToken(ECMAScriptPassParser.Const, 0);
};

FutureReservedWordContext.prototype.Export = function() {
    return this.getToken(ECMAScriptPassParser.Export, 0);
};

FutureReservedWordContext.prototype.Import = function() {
    return this.getToken(ECMAScriptPassParser.Import, 0);
};

FutureReservedWordContext.prototype.Implements = function() {
    return this.getToken(ECMAScriptPassParser.Implements, 0);
};

FutureReservedWordContext.prototype.Let = function() {
    return this.getToken(ECMAScriptPassParser.Let, 0);
};

FutureReservedWordContext.prototype.Private = function() {
    return this.getToken(ECMAScriptPassParser.Private, 0);
};

FutureReservedWordContext.prototype.Public = function() {
    return this.getToken(ECMAScriptPassParser.Public, 0);
};

FutureReservedWordContext.prototype.Interface = function() {
    return this.getToken(ECMAScriptPassParser.Interface, 0);
};

FutureReservedWordContext.prototype.Package = function() {
    return this.getToken(ECMAScriptPassParser.Package, 0);
};

FutureReservedWordContext.prototype.Protected = function() {
    return this.getToken(ECMAScriptPassParser.Protected, 0);
};

FutureReservedWordContext.prototype.Static = function() {
    return this.getToken(ECMAScriptPassParser.Static, 0);
};

FutureReservedWordContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptPassParser.Yield, 0);
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
    this.enterRule(localctx, 102, ECMAScriptPassParser.RULE_futureReservedWord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 607;
        _la = this._input.LA(1);
        if(!(((((_la - 82)) & ~0x1f) == 0 && ((1 << (_la - 82)) & ((1 << (ECMAScriptPassParser.Class - 82)) | (1 << (ECMAScriptPassParser.Enum - 82)) | (1 << (ECMAScriptPassParser.Extends - 82)) | (1 << (ECMAScriptPassParser.Super - 82)) | (1 << (ECMAScriptPassParser.Const - 82)) | (1 << (ECMAScriptPassParser.Export - 82)) | (1 << (ECMAScriptPassParser.Import - 82)) | (1 << (ECMAScriptPassParser.Implements - 82)) | (1 << (ECMAScriptPassParser.Let - 82)) | (1 << (ECMAScriptPassParser.Private - 82)) | (1 << (ECMAScriptPassParser.Public - 82)) | (1 << (ECMAScriptPassParser.Interface - 82)) | (1 << (ECMAScriptPassParser.Package - 82)) | (1 << (ECMAScriptPassParser.Protected - 82)) | (1 << (ECMAScriptPassParser.Static - 82)) | (1 << (ECMAScriptPassParser.Yield - 82)))) !== 0))) {
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
    this.ruleIndex = ECMAScriptPassParser.RULE_getter;
    return this;
}

GetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetterContext.prototype.constructor = GetterContext;

GetterContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

GetterContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

GetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterGetter(this);
	}
};

GetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitGetter(this);
	}
};




ECMAScriptPassParser.GetterContext = GetterContext;

ECMAScriptPassParser.prototype.getter = function() {

    var localctx = new GetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, ECMAScriptPassParser.RULE_getter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 609;
        if (!( this._input.LT(1).text.startsWith("get"))) {
            throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).text.startsWith(\"get\")");
        }
        this.state = 610;
        this.match(ECMAScriptPassParser.Identifier);
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

function SetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_setter;
    return this;
}

SetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetterContext.prototype.constructor = SetterContext;

SetterContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptPassParser.Identifier, 0);
};

SetterContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

SetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterSetter(this);
	}
};

SetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitSetter(this);
	}
};




ECMAScriptPassParser.SetterContext = SetterContext;

ECMAScriptPassParser.prototype.setter = function() {

    var localctx = new SetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, ECMAScriptPassParser.RULE_setter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 613;
        if (!( this._input.LT(1).text.startsWith("set"))) {
            throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).text.startsWith(\"set\")");
        }
        this.state = 614;
        this.match(ECMAScriptPassParser.Identifier);
        this.state = 615;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

EosContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptPassParser.EOF, 0);
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
    this.enterRule(localctx, 108, ECMAScriptPassParser.RULE_eos);
    try {
        this.state = 621;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 617;
            this.match(ECMAScriptPassParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 618;
            this.match(ECMAScriptPassParser.EOF);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 619;
            if (!( this.lineTerminatorAhead())) {
                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 620;
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
    this.ruleIndex = ECMAScriptPassParser.RULE_eof;
    return this;
}

EofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EofContext.prototype.constructor = EofContext;

EofContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptPassParser.EOF, 0);
};

EofContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterEof(this);
	}
};

EofContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitEof(this);
	}
};




ECMAScriptPassParser.EofContext = EofContext;

ECMAScriptPassParser.prototype.eof = function() {

    var localctx = new EofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, ECMAScriptPassParser.RULE_eof);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 623;
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


ECMAScriptPassParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 15:
			return this.continueStatement_sempred(localctx, predIndex);
	case 16:
			return this.breakStatement_sempred(localctx, predIndex);
	case 17:
			return this.returnStatement_sempred(localctx, predIndex);
	case 25:
			return this.throwStatement_sempred(localctx, predIndex);
	case 44:
			return this.singleExpression_sempred(localctx, predIndex);
	case 52:
			return this.getter_sempred(localctx, predIndex);
	case 53:
			return this.setter_sempred(localctx, predIndex);
	case 54:
			return this.eos_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ECMAScriptPassParser.prototype.continueStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptPassParser.prototype.breakStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptPassParser.prototype.returnStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptPassParser.prototype.throwStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return !this.here(ECMAScriptPassParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptPassParser.prototype.singleExpression_sempred = function(localctx, predIndex) {
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

ECMAScriptPassParser.prototype.getter_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 26:
			return this._input.LT(1).text.startsWith("get");
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptPassParser.prototype.setter_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 27:
			return this._input.LT(1).text.startsWith("set");
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptPassParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 28:
			return this.lineTerminatorAhead();
		case 29:
			return this._input.LT(1).type == ECMAScriptPassParser.CloseBrace;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ECMAScriptPassParser = ECMAScriptPassParser;
