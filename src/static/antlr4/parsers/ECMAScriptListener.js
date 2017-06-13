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


// Enter a parse tree produced by ECMAScriptParser#functionDeclaration.
ECMAScriptListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionDeclaration.
ECMAScriptListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#identifier.
ECMAScriptListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#identifier.
ECMAScriptListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#functionBody.
ECMAScriptListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionBody.
ECMAScriptListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#functionStatementList.
ECMAScriptListener.prototype.enterFunctionStatementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionStatementList.
ECMAScriptListener.prototype.exitFunctionStatementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#statementList_Return.
ECMAScriptListener.prototype.enterStatementList_Return = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#statementList_Return.
ECMAScriptListener.prototype.exitStatementList_Return = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#statementListItem_Return.
ECMAScriptListener.prototype.enterStatementListItem_Return = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#statementListItem_Return.
ECMAScriptListener.prototype.exitStatementListItem_Return = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#statement_Return.
ECMAScriptListener.prototype.enterStatement_Return = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#statement_Return.
ECMAScriptListener.prototype.exitStatement_Return = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#expressionStatement.
ECMAScriptListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#expressionStatement.
ECMAScriptListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#objectLiteral.
ECMAScriptListener.prototype.enterObjectLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#objectLiteral.
ECMAScriptListener.prototype.exitObjectLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#propertyDefinitionList.
ECMAScriptListener.prototype.enterPropertyDefinitionList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#propertyDefinitionList.
ECMAScriptListener.prototype.exitPropertyDefinitionList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#propertyDefinition.
ECMAScriptListener.prototype.enterPropertyDefinition = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#propertyDefinition.
ECMAScriptListener.prototype.exitPropertyDefinition = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#eos.
ECMAScriptListener.prototype.enterEos = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#eos.
ECMAScriptListener.prototype.exitEos = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#divPunctuator.
ECMAScriptListener.prototype.enterDivPunctuator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#divPunctuator.
ECMAScriptListener.prototype.exitDivPunctuator = function(ctx) {
};



exports.ECMAScriptListener = ECMAScriptListener;