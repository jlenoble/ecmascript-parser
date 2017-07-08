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


// Enter a parse tree produced by ECMAScriptParser#bindingElementList.
ECMAScriptListener.prototype.enterBindingElementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingElementList.
ECMAScriptListener.prototype.exitBindingElementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingElisionElement.
ECMAScriptListener.prototype.enterBindingElisionElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingElisionElement.
ECMAScriptListener.prototype.exitBindingElisionElement = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#bindingPattern.
ECMAScriptListener.prototype.enterBindingPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingPattern.
ECMAScriptListener.prototype.exitBindingPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#objectBindingPattern.
ECMAScriptListener.prototype.enterObjectBindingPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#objectBindingPattern.
ECMAScriptListener.prototype.exitObjectBindingPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arrayBindingPattern.
ECMAScriptListener.prototype.enterArrayBindingPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arrayBindingPattern.
ECMAScriptListener.prototype.exitArrayBindingPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingPropertyList.
ECMAScriptListener.prototype.enterBindingPropertyList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingPropertyList.
ECMAScriptListener.prototype.exitBindingPropertyList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingProperty.
ECMAScriptListener.prototype.enterBindingProperty = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingProperty.
ECMAScriptListener.prototype.exitBindingProperty = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#lexicalDeclaration.
ECMAScriptListener.prototype.enterLexicalDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#lexicalDeclaration.
ECMAScriptListener.prototype.exitLexicalDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#letOrConst.
ECMAScriptListener.prototype.enterLetOrConst = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#letOrConst.
ECMAScriptListener.prototype.exitLetOrConst = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingList.
ECMAScriptListener.prototype.enterBindingList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingList.
ECMAScriptListener.prototype.exitBindingList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#lexicalBinding.
ECMAScriptListener.prototype.enterLexicalBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#lexicalBinding.
ECMAScriptListener.prototype.exitLexicalBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#declaration.
ECMAScriptListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#declaration.
ECMAScriptListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#hoistableDeclaration.
ECMAScriptListener.prototype.enterHoistableDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#hoistableDeclaration.
ECMAScriptListener.prototype.exitHoistableDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#throwStatement.
ECMAScriptListener.prototype.enterThrowStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#throwStatement.
ECMAScriptListener.prototype.exitThrowStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#tryStatement.
ECMAScriptListener.prototype.enterTryStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#tryStatement.
ECMAScriptListener.prototype.exitTryStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#catchPart.
ECMAScriptListener.prototype.enterCatchPart = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#catchPart.
ECMAScriptListener.prototype.exitCatchPart = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#finallyPart.
ECMAScriptListener.prototype.enterFinallyPart = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#finallyPart.
ECMAScriptListener.prototype.exitFinallyPart = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#catchParameter.
ECMAScriptListener.prototype.enterCatchParameter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#catchParameter.
ECMAScriptListener.prototype.exitCatchParameter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#withStatement.
ECMAScriptListener.prototype.enterWithStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#withStatement.
ECMAScriptListener.prototype.exitWithStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#labelledStatement.
ECMAScriptListener.prototype.enterLabelledStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#labelledStatement.
ECMAScriptListener.prototype.exitLabelledStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#labelledItem.
ECMAScriptListener.prototype.enterLabelledItem = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#labelledItem.
ECMAScriptListener.prototype.exitLabelledItem = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#labelIdentifier.
ECMAScriptListener.prototype.enterLabelIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#labelIdentifier.
ECMAScriptListener.prototype.exitLabelIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#switchStatement.
ECMAScriptListener.prototype.enterSwitchStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#switchStatement.
ECMAScriptListener.prototype.exitSwitchStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#caseBlock.
ECMAScriptListener.prototype.enterCaseBlock = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#caseBlock.
ECMAScriptListener.prototype.exitCaseBlock = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#caseClauses.
ECMAScriptListener.prototype.enterCaseClauses = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#caseClauses.
ECMAScriptListener.prototype.exitCaseClauses = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#caseClause.
ECMAScriptListener.prototype.enterCaseClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#caseClause.
ECMAScriptListener.prototype.exitCaseClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#defaultClause.
ECMAScriptListener.prototype.enterDefaultClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#defaultClause.
ECMAScriptListener.prototype.exitDefaultClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#iterationStatement.
ECMAScriptListener.prototype.enterIterationStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#iterationStatement.
ECMAScriptListener.prototype.exitIterationStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#forDeclaration.
ECMAScriptListener.prototype.enterForDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#forDeclaration.
ECMAScriptListener.prototype.exitForDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#forBinding.
ECMAScriptListener.prototype.enterForBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#forBinding.
ECMAScriptListener.prototype.exitForBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#ifStatement.
ECMAScriptListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#ifStatement.
ECMAScriptListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#breakableStatement.
ECMAScriptListener.prototype.enterBreakableStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#breakableStatement.
ECMAScriptListener.prototype.exitBreakableStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#breakStatement.
ECMAScriptListener.prototype.enterBreakStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#breakStatement.
ECMAScriptListener.prototype.exitBreakStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#blockStatement.
ECMAScriptListener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#blockStatement.
ECMAScriptListener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#block.
ECMAScriptListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#block.
ECMAScriptListener.prototype.exitBlock = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#functionDeclaration.
ECMAScriptListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionDeclaration.
ECMAScriptListener.prototype.exitFunctionDeclaration = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#elision.
ECMAScriptListener.prototype.enterElision = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#elision.
ECMAScriptListener.prototype.exitElision = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#spreadElement.
ECMAScriptListener.prototype.enterSpreadElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#spreadElement.
ECMAScriptListener.prototype.exitSpreadElement = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#computedPropertyName.
ECMAScriptListener.prototype.enterComputedPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#computedPropertyName.
ECMAScriptListener.prototype.exitComputedPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#coverInitializedName.
ECMAScriptListener.prototype.enterCoverInitializedName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#coverInitializedName.
ECMAScriptListener.prototype.exitCoverInitializedName = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#multiplicativeOperator.
ECMAScriptListener.prototype.enterMultiplicativeOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#multiplicativeOperator.
ECMAScriptListener.prototype.exitMultiplicativeOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#additiveOperator.
ECMAScriptListener.prototype.enterAdditiveOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#additiveOperator.
ECMAScriptListener.prototype.exitAdditiveOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#shiftOperator.
ECMAScriptListener.prototype.enterShiftOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#shiftOperator.
ECMAScriptListener.prototype.exitShiftOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#relationalOperator.
ECMAScriptListener.prototype.enterRelationalOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#relationalOperator.
ECMAScriptListener.prototype.exitRelationalOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#equalityOperator.
ECMAScriptListener.prototype.enterEqualityOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#equalityOperator.
ECMAScriptListener.prototype.exitEqualityOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentOperator.
ECMAScriptListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentOperator.
ECMAScriptListener.prototype.exitAssignmentOperator = function(ctx) {
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