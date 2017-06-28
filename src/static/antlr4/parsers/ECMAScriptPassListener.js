// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ECMAScriptPassParser.
function ECMAScriptPassListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ECMAScriptPassListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ECMAScriptPassListener.prototype.constructor = ECMAScriptPassListener;

// Enter a parse tree produced by ECMAScriptPassParser#file.
ECMAScriptPassListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#file.
ECMAScriptPassListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#eos.
ECMAScriptPassListener.prototype.enterEos = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#eos.
ECMAScriptPassListener.prototype.exitEos = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#expression_In.
ECMAScriptPassListener.prototype.enterExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#expression_In.
ECMAScriptPassListener.prototype.exitExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#identifierReference.
ECMAScriptPassListener.prototype.enterIdentifierReference = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#identifierReference.
ECMAScriptPassListener.prototype.exitIdentifierReference = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingIdentifier.
ECMAScriptPassListener.prototype.enterBindingIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingIdentifier.
ECMAScriptPassListener.prototype.exitBindingIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#identifier.
ECMAScriptPassListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#identifier.
ECMAScriptPassListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#primaryExpression.
ECMAScriptPassListener.prototype.enterPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#primaryExpression.
ECMAScriptPassListener.prototype.exitPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#literal.
ECMAScriptPassListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#literal.
ECMAScriptPassListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#coverParenthesizedExpressionAndArrowParameterList.
ECMAScriptPassListener.prototype.enterCoverParenthesizedExpressionAndArrowParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#coverParenthesizedExpressionAndArrowParameterList.
ECMAScriptPassListener.prototype.exitCoverParenthesizedExpressionAndArrowParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#objectLiteral.
ECMAScriptPassListener.prototype.enterObjectLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#objectLiteral.
ECMAScriptPassListener.prototype.exitObjectLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertyDefinitionList.
ECMAScriptPassListener.prototype.enterPropertyDefinitionList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertyDefinitionList.
ECMAScriptPassListener.prototype.exitPropertyDefinitionList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertyDefinition.
ECMAScriptPassListener.prototype.enterPropertyDefinition = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertyDefinition.
ECMAScriptPassListener.prototype.exitPropertyDefinition = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertyName.
ECMAScriptPassListener.prototype.enterPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertyName.
ECMAScriptPassListener.prototype.exitPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#literalPropertyName.
ECMAScriptPassListener.prototype.enterLiteralPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#literalPropertyName.
ECMAScriptPassListener.prototype.exitLiteralPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#leftHandSideExpression.
ECMAScriptPassListener.prototype.enterLeftHandSideExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#leftHandSideExpression.
ECMAScriptPassListener.prototype.exitLeftHandSideExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#newExpression.
ECMAScriptPassListener.prototype.enterNewExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#newExpression.
ECMAScriptPassListener.prototype.exitNewExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#memberExpression.
ECMAScriptPassListener.prototype.enterMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#memberExpression.
ECMAScriptPassListener.prototype.exitMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lhsExpression_In.
ECMAScriptPassListener.prototype.enterLhsExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lhsExpression_In.
ECMAScriptPassListener.prototype.exitLhsExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignmentOperator.
ECMAScriptPassListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignmentOperator.
ECMAScriptPassListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statement.
ECMAScriptPassListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statement.
ECMAScriptPassListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statementList.
ECMAScriptPassListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statementList.
ECMAScriptPassListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statementListItem.
ECMAScriptPassListener.prototype.enterStatementListItem = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statementListItem.
ECMAScriptPassListener.prototype.exitStatementListItem = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#emptyStatement.
ECMAScriptPassListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#emptyStatement.
ECMAScriptPassListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#expressionStatement.
ECMAScriptPassListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#expressionStatement.
ECMAScriptPassListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalDeclaration_In.
ECMAScriptPassListener.prototype.enterLexicalDeclaration_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalDeclaration_In.
ECMAScriptPassListener.prototype.exitLexicalDeclaration_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#letOrConst.
ECMAScriptPassListener.prototype.enterLetOrConst = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#letOrConst.
ECMAScriptPassListener.prototype.exitLetOrConst = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingList_In.
ECMAScriptPassListener.prototype.enterBindingList_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingList_In.
ECMAScriptPassListener.prototype.exitBindingList_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalBinding_In.
ECMAScriptPassListener.prototype.enterLexicalBinding_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalBinding_In.
ECMAScriptPassListener.prototype.exitLexicalBinding_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#declaration.
ECMAScriptPassListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#declaration.
ECMAScriptPassListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#reservedWord.
ECMAScriptPassListener.prototype.enterReservedWord = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#reservedWord.
ECMAScriptPassListener.prototype.exitReservedWord = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#keyword.
ECMAScriptPassListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#keyword.
ECMAScriptPassListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#futureReservedWord.
ECMAScriptPassListener.prototype.enterFutureReservedWord = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#futureReservedWord.
ECMAScriptPassListener.prototype.exitFutureReservedWord = function(ctx) {
};



exports.ECMAScriptPassListener = ECMAScriptPassListener;