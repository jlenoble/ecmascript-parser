// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScript.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ECMAScriptParser.
function ECMAScriptListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ECMAScriptListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ECMAScriptListener.prototype.constructor = ECMAScriptListener;

// Enter a parse tree produced by ECMAScriptParser#file.
ECMAScriptListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#file.
ECMAScriptListener.prototype.exitFile = function(ctx) {
};



exports.ECMAScriptListener = ECMAScriptListener;