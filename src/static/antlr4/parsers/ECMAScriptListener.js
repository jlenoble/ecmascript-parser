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


// Enter a parse tree produced by ECMAScriptParser#eos.
ECMAScriptListener.prototype.enterEos = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#eos.
ECMAScriptListener.prototype.exitEos = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#statement.
ECMAScriptListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#statement.
ECMAScriptListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#statementList.
ECMAScriptListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#statementList.
ECMAScriptListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#statementListItem.
ECMAScriptListener.prototype.enterStatementListItem = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#statementListItem.
ECMAScriptListener.prototype.exitStatementListItem = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#emptyStatement.
ECMAScriptListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#emptyStatement.
ECMAScriptListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#returnStatement.
ECMAScriptListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#returnStatement.
ECMAScriptListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#debuggerStatement.
ECMAScriptListener.prototype.enterDebuggerStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#debuggerStatement.
ECMAScriptListener.prototype.exitDebuggerStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#expressionStatement.
ECMAScriptListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#expressionStatement.
ECMAScriptListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingElement.
ECMAScriptListener.prototype.enterBindingElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingElement.
ECMAScriptListener.prototype.exitBindingElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingRestElement.
ECMAScriptListener.prototype.enterBindingRestElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingRestElement.
ECMAScriptListener.prototype.exitBindingRestElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#singleNameBinding.
ECMAScriptListener.prototype.enterSingleNameBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#singleNameBinding.
ECMAScriptListener.prototype.exitSingleNameBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#ifStatement.
ECMAScriptListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#ifStatement.
ECMAScriptListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#variableStatement.
ECMAScriptListener.prototype.enterVariableStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#variableStatement.
ECMAScriptListener.prototype.exitVariableStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#variableDeclarationList.
ECMAScriptListener.prototype.enterVariableDeclarationList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#variableDeclarationList.
ECMAScriptListener.prototype.exitVariableDeclarationList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#variableDeclaration.
ECMAScriptListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#variableDeclaration.
ECMAScriptListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#uniqueFormalParameters.
ECMAScriptListener.prototype.enterUniqueFormalParameters = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#uniqueFormalParameters.
ECMAScriptListener.prototype.exitUniqueFormalParameters = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#formalParameters.
ECMAScriptListener.prototype.enterFormalParameters = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#formalParameters.
ECMAScriptListener.prototype.exitFormalParameters = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#formalParameterList.
ECMAScriptListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#formalParameterList.
ECMAScriptListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#functionRestParameter.
ECMAScriptListener.prototype.enterFunctionRestParameter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionRestParameter.
ECMAScriptListener.prototype.exitFunctionRestParameter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#formalParameter.
ECMAScriptListener.prototype.enterFormalParameter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#formalParameter.
ECMAScriptListener.prototype.exitFormalParameter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arrowParameters.
ECMAScriptListener.prototype.enterArrowParameters = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arrowParameters.
ECMAScriptListener.prototype.exitArrowParameters = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#functionBody.
ECMAScriptListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionBody.
ECMAScriptListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#conciseBody.
ECMAScriptListener.prototype.enterConciseBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#conciseBody.
ECMAScriptListener.prototype.exitConciseBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#methodDefinition.
ECMAScriptListener.prototype.enterMethodDefinition = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#methodDefinition.
ECMAScriptListener.prototype.exitMethodDefinition = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#propertySetParameterList.
ECMAScriptListener.prototype.enterPropertySetParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#propertySetParameterList.
ECMAScriptListener.prototype.exitPropertySetParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#identifierReference.
ECMAScriptListener.prototype.enterIdentifierReference = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#identifierReference.
ECMAScriptListener.prototype.exitIdentifierReference = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingIdentifier.
ECMAScriptListener.prototype.enterBindingIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingIdentifier.
ECMAScriptListener.prototype.exitBindingIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#identifier.
ECMAScriptListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#identifier.
ECMAScriptListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#coverParenthesizedExpressionAndArrowParameterList.
ECMAScriptListener.prototype.enterCoverParenthesizedExpressionAndArrowParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#coverParenthesizedExpressionAndArrowParameterList.
ECMAScriptListener.prototype.exitCoverParenthesizedExpressionAndArrowParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arrayLiteral.
ECMAScriptListener.prototype.enterArrayLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arrayLiteral.
ECMAScriptListener.prototype.exitArrayLiteral = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#propertyName.
ECMAScriptListener.prototype.enterPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#propertyName.
ECMAScriptListener.prototype.exitPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#literalPropertyName.
ECMAScriptListener.prototype.enterLiteralPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#literalPropertyName.
ECMAScriptListener.prototype.exitLiteralPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#coverInitializedName.
ECMAScriptListener.prototype.enterCoverInitializedName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#coverInitializedName.
ECMAScriptListener.prototype.exitCoverInitializedName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#callExpression.
ECMAScriptListener.prototype.enterCallExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#callExpression.
ECMAScriptListener.prototype.exitCallExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arguments.
ECMAScriptListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arguments.
ECMAScriptListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#argumentList.
ECMAScriptListener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#argumentList.
ECMAScriptListener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#initializer.
ECMAScriptListener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#initializer.
ECMAScriptListener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#expressionList.
ECMAScriptListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#expressionList.
ECMAScriptListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#expression.
ECMAScriptListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#expression.
ECMAScriptListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#unaryOperator.
ECMAScriptListener.prototype.enterUnaryOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#unaryOperator.
ECMAScriptListener.prototype.exitUnaryOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#identifierName.
ECMAScriptListener.prototype.enterIdentifierName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#identifierName.
ECMAScriptListener.prototype.exitIdentifierName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#reservedWord.
ECMAScriptListener.prototype.enterReservedWord = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#reservedWord.
ECMAScriptListener.prototype.exitReservedWord = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#keyword.
ECMAScriptListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#keyword.
ECMAScriptListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#futureReservedWord.
ECMAScriptListener.prototype.enterFutureReservedWord = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#futureReservedWord.
ECMAScriptListener.prototype.exitFutureReservedWord = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#miscIdentifier.
ECMAScriptListener.prototype.enterMiscIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#miscIdentifier.
ECMAScriptListener.prototype.exitMiscIdentifier = function(ctx) {
};



exports.ECMAScriptListener = ECMAScriptListener;