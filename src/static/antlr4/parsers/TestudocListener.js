// Generated from /home/jason/Projets/testudoc/src/static/antlr4/grammars/Testudoc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TestudocParser.
function TestudocListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TestudocListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TestudocListener.prototype.constructor = TestudocListener;

// Enter a parse tree produced by TestudocParser#file.
TestudocListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#file.
TestudocListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#stat.
TestudocListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#stat.
TestudocListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#expr.
TestudocListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#expr.
TestudocListener.prototype.exitExpr = function(ctx) {
};



exports.TestudocListener = TestudocListener;