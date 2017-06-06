'use strict';

// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/Testudoc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TestudocListener = require('./TestudocListener').TestudocListener;
var grammarFileName = "Testudoc.g4";

var serializedATN = ['\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964', '\x03\x02\x07\x04\x02\t\x02\x03\x02\x03\x02\x03', '\x02\x02\x02\x03\x02\x02\x02\x02\x05\x02\x04\x03', '\x02\x02\x02\x04\x05\x03\x02\x02\x02\x05\x03\x03', '\x02\x02\x02\x02'].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [];

var symbolicNames = [];

var ruleNames = ["file"];

function TestudocParser(input) {
    antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TestudocParser.prototype = Object.create(antlr4.Parser.prototype);
TestudocParser.prototype.constructor = TestudocParser;

Object.defineProperty(TestudocParser.prototype, "atn", {
    get: function get() {
        return atn;
    }
});

TestudocParser.EOF = antlr4.Token.EOF;
TestudocParser.RULE_file = 0;

function FileContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestudocParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.enterRule = function (listener) {
    if (listener instanceof TestudocListener) {
        listener.enterFile(this);
    }
};

FileContext.prototype.exitRule = function (listener) {
    if (listener instanceof TestudocListener) {
        listener.exitFile(this);
    }
};

TestudocParser.FileContext = FileContext;

TestudocParser.prototype.file = function () {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TestudocParser.RULE_file);
    try {
        this.enterOuterAlt(localctx, 1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

exports.TestudocParser = TestudocParser;