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


// Enter a parse tree produced by ECMAScriptPassParser#program.
ECMAScriptPassListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#program.
ECMAScriptPassListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#sourceElements.
ECMAScriptPassListener.prototype.enterSourceElements = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#sourceElements.
ECMAScriptPassListener.prototype.exitSourceElements = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#sourceElement.
ECMAScriptPassListener.prototype.enterSourceElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#sourceElement.
ECMAScriptPassListener.prototype.exitSourceElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statement.
ECMAScriptPassListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statement.
ECMAScriptPassListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#block.
ECMAScriptPassListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#block.
ECMAScriptPassListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statementList.
ECMAScriptPassListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statementList.
ECMAScriptPassListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#variableStatement.
ECMAScriptPassListener.prototype.enterVariableStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#variableStatement.
ECMAScriptPassListener.prototype.exitVariableStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#variableDeclarationList.
ECMAScriptPassListener.prototype.enterVariableDeclarationList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#variableDeclarationList.
ECMAScriptPassListener.prototype.exitVariableDeclarationList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#variableDeclaration.
ECMAScriptPassListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#variableDeclaration.
ECMAScriptPassListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#initializer.
ECMAScriptPassListener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#initializer.
ECMAScriptPassListener.prototype.exitInitializer = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#ifStatement.
ECMAScriptPassListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ifStatement.
ECMAScriptPassListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#DoStatement.
ECMAScriptPassListener.prototype.enterDoStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#DoStatement.
ECMAScriptPassListener.prototype.exitDoStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#WhileStatement.
ECMAScriptPassListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#WhileStatement.
ECMAScriptPassListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ForStatement.
ECMAScriptPassListener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ForStatement.
ECMAScriptPassListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ForVarStatement.
ECMAScriptPassListener.prototype.enterForVarStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ForVarStatement.
ECMAScriptPassListener.prototype.exitForVarStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ForInStatement.
ECMAScriptPassListener.prototype.enterForInStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ForInStatement.
ECMAScriptPassListener.prototype.exitForInStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ForVarInStatement.
ECMAScriptPassListener.prototype.enterForVarInStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ForVarInStatement.
ECMAScriptPassListener.prototype.exitForVarInStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#continueStatement.
ECMAScriptPassListener.prototype.enterContinueStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#continueStatement.
ECMAScriptPassListener.prototype.exitContinueStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#breakStatement.
ECMAScriptPassListener.prototype.enterBreakStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#breakStatement.
ECMAScriptPassListener.prototype.exitBreakStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#returnStatement.
ECMAScriptPassListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#returnStatement.
ECMAScriptPassListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#withStatement.
ECMAScriptPassListener.prototype.enterWithStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#withStatement.
ECMAScriptPassListener.prototype.exitWithStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#switchStatement.
ECMAScriptPassListener.prototype.enterSwitchStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#switchStatement.
ECMAScriptPassListener.prototype.exitSwitchStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#caseBlock.
ECMAScriptPassListener.prototype.enterCaseBlock = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#caseBlock.
ECMAScriptPassListener.prototype.exitCaseBlock = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#caseClauses.
ECMAScriptPassListener.prototype.enterCaseClauses = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#caseClauses.
ECMAScriptPassListener.prototype.exitCaseClauses = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#caseClause.
ECMAScriptPassListener.prototype.enterCaseClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#caseClause.
ECMAScriptPassListener.prototype.exitCaseClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#defaultClause.
ECMAScriptPassListener.prototype.enterDefaultClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#defaultClause.
ECMAScriptPassListener.prototype.exitDefaultClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#labelledStatement.
ECMAScriptPassListener.prototype.enterLabelledStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#labelledStatement.
ECMAScriptPassListener.prototype.exitLabelledStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#throwStatement.
ECMAScriptPassListener.prototype.enterThrowStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#throwStatement.
ECMAScriptPassListener.prototype.exitThrowStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#tryStatement.
ECMAScriptPassListener.prototype.enterTryStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#tryStatement.
ECMAScriptPassListener.prototype.exitTryStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#catchProduction.
ECMAScriptPassListener.prototype.enterCatchProduction = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#catchProduction.
ECMAScriptPassListener.prototype.exitCatchProduction = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#finallyProduction.
ECMAScriptPassListener.prototype.enterFinallyProduction = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#finallyProduction.
ECMAScriptPassListener.prototype.exitFinallyProduction = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#debuggerStatement.
ECMAScriptPassListener.prototype.enterDebuggerStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#debuggerStatement.
ECMAScriptPassListener.prototype.exitDebuggerStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionDeclaration.
ECMAScriptPassListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionDeclaration.
ECMAScriptPassListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#formalParameterList.
ECMAScriptPassListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#formalParameterList.
ECMAScriptPassListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionBody.
ECMAScriptPassListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionBody.
ECMAScriptPassListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arrayLiteral.
ECMAScriptPassListener.prototype.enterArrayLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arrayLiteral.
ECMAScriptPassListener.prototype.exitArrayLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#elementList.
ECMAScriptPassListener.prototype.enterElementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#elementList.
ECMAScriptPassListener.prototype.exitElementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#elision.
ECMAScriptPassListener.prototype.enterElision = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#elision.
ECMAScriptPassListener.prototype.exitElision = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#objectLiteral.
ECMAScriptPassListener.prototype.enterObjectLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#objectLiteral.
ECMAScriptPassListener.prototype.exitObjectLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertyNameAndValueList.
ECMAScriptPassListener.prototype.enterPropertyNameAndValueList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertyNameAndValueList.
ECMAScriptPassListener.prototype.exitPropertyNameAndValueList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#PropertyExpressionAssignment.
ECMAScriptPassListener.prototype.enterPropertyExpressionAssignment = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#PropertyExpressionAssignment.
ECMAScriptPassListener.prototype.exitPropertyExpressionAssignment = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#PropertyGetter.
ECMAScriptPassListener.prototype.enterPropertyGetter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#PropertyGetter.
ECMAScriptPassListener.prototype.exitPropertyGetter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#PropertySetter.
ECMAScriptPassListener.prototype.enterPropertySetter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#PropertySetter.
ECMAScriptPassListener.prototype.exitPropertySetter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertyName.
ECMAScriptPassListener.prototype.enterPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertyName.
ECMAScriptPassListener.prototype.exitPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertySetParameterList.
ECMAScriptPassListener.prototype.enterPropertySetParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertySetParameterList.
ECMAScriptPassListener.prototype.exitPropertySetParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arguments.
ECMAScriptPassListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arguments.
ECMAScriptPassListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#argumentList.
ECMAScriptPassListener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#argumentList.
ECMAScriptPassListener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#expressionSequence.
ECMAScriptPassListener.prototype.enterExpressionSequence = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#expressionSequence.
ECMAScriptPassListener.prototype.exitExpressionSequence = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#TernaryExpression.
ECMAScriptPassListener.prototype.enterTernaryExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#TernaryExpression.
ECMAScriptPassListener.prototype.exitTernaryExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#LogicalAndExpression.
ECMAScriptPassListener.prototype.enterLogicalAndExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#LogicalAndExpression.
ECMAScriptPassListener.prototype.exitLogicalAndExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#PreIncrementExpression.
ECMAScriptPassListener.prototype.enterPreIncrementExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#PreIncrementExpression.
ECMAScriptPassListener.prototype.exitPreIncrementExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ObjectLiteralExpression.
ECMAScriptPassListener.prototype.enterObjectLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ObjectLiteralExpression.
ECMAScriptPassListener.prototype.exitObjectLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#InExpression.
ECMAScriptPassListener.prototype.enterInExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#InExpression.
ECMAScriptPassListener.prototype.exitInExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#LogicalOrExpression.
ECMAScriptPassListener.prototype.enterLogicalOrExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#LogicalOrExpression.
ECMAScriptPassListener.prototype.exitLogicalOrExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#NotExpression.
ECMAScriptPassListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#NotExpression.
ECMAScriptPassListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#PreDecreaseExpression.
ECMAScriptPassListener.prototype.enterPreDecreaseExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#PreDecreaseExpression.
ECMAScriptPassListener.prototype.exitPreDecreaseExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ArgumentsExpression.
ECMAScriptPassListener.prototype.enterArgumentsExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ArgumentsExpression.
ECMAScriptPassListener.prototype.exitArgumentsExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ThisExpression.
ECMAScriptPassListener.prototype.enterThisExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ThisExpression.
ECMAScriptPassListener.prototype.exitThisExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#FunctionExpression.
ECMAScriptPassListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#FunctionExpression.
ECMAScriptPassListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#UnaryMinusExpression.
ECMAScriptPassListener.prototype.enterUnaryMinusExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#UnaryMinusExpression.
ECMAScriptPassListener.prototype.exitUnaryMinusExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#PostDecreaseExpression.
ECMAScriptPassListener.prototype.enterPostDecreaseExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#PostDecreaseExpression.
ECMAScriptPassListener.prototype.exitPostDecreaseExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#AssignmentExpression.
ECMAScriptPassListener.prototype.enterAssignmentExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#AssignmentExpression.
ECMAScriptPassListener.prototype.exitAssignmentExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#TypeofExpression.
ECMAScriptPassListener.prototype.enterTypeofExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#TypeofExpression.
ECMAScriptPassListener.prototype.exitTypeofExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#InstanceofExpression.
ECMAScriptPassListener.prototype.enterInstanceofExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#InstanceofExpression.
ECMAScriptPassListener.prototype.exitInstanceofExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#UnaryPlusExpression.
ECMAScriptPassListener.prototype.enterUnaryPlusExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#UnaryPlusExpression.
ECMAScriptPassListener.prototype.exitUnaryPlusExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#DeleteExpression.
ECMAScriptPassListener.prototype.enterDeleteExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#DeleteExpression.
ECMAScriptPassListener.prototype.exitDeleteExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#EqualityExpression.
ECMAScriptPassListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#EqualityExpression.
ECMAScriptPassListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#BitXOrExpression.
ECMAScriptPassListener.prototype.enterBitXOrExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#BitXOrExpression.
ECMAScriptPassListener.prototype.exitBitXOrExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#MultiplicativeExpression.
ECMAScriptPassListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#MultiplicativeExpression.
ECMAScriptPassListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#BitShiftExpression.
ECMAScriptPassListener.prototype.enterBitShiftExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#BitShiftExpression.
ECMAScriptPassListener.prototype.exitBitShiftExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ParenthesizedExpression.
ECMAScriptPassListener.prototype.enterParenthesizedExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ParenthesizedExpression.
ECMAScriptPassListener.prototype.exitParenthesizedExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#AdditiveExpression.
ECMAScriptPassListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#AdditiveExpression.
ECMAScriptPassListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#RelationalExpression.
ECMAScriptPassListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#RelationalExpression.
ECMAScriptPassListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#PostIncrementExpression.
ECMAScriptPassListener.prototype.enterPostIncrementExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#PostIncrementExpression.
ECMAScriptPassListener.prototype.exitPostIncrementExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#BitNotExpression.
ECMAScriptPassListener.prototype.enterBitNotExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#BitNotExpression.
ECMAScriptPassListener.prototype.exitBitNotExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#NewExpression.
ECMAScriptPassListener.prototype.enterNewExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#NewExpression.
ECMAScriptPassListener.prototype.exitNewExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#LiteralExpression.
ECMAScriptPassListener.prototype.enterLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#LiteralExpression.
ECMAScriptPassListener.prototype.exitLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ArrayLiteralExpression.
ECMAScriptPassListener.prototype.enterArrayLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ArrayLiteralExpression.
ECMAScriptPassListener.prototype.exitArrayLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#MemberDotExpression.
ECMAScriptPassListener.prototype.enterMemberDotExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#MemberDotExpression.
ECMAScriptPassListener.prototype.exitMemberDotExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#MemberIndexExpression.
ECMAScriptPassListener.prototype.enterMemberIndexExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#MemberIndexExpression.
ECMAScriptPassListener.prototype.exitMemberIndexExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#IdentifierExpression.
ECMAScriptPassListener.prototype.enterIdentifierExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#IdentifierExpression.
ECMAScriptPassListener.prototype.exitIdentifierExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#BitAndExpression.
ECMAScriptPassListener.prototype.enterBitAndExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#BitAndExpression.
ECMAScriptPassListener.prototype.exitBitAndExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#BitOrExpression.
ECMAScriptPassListener.prototype.enterBitOrExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#BitOrExpression.
ECMAScriptPassListener.prototype.exitBitOrExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#AssignmentOperatorExpression.
ECMAScriptPassListener.prototype.enterAssignmentOperatorExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#AssignmentOperatorExpression.
ECMAScriptPassListener.prototype.exitAssignmentOperatorExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#VoidExpression.
ECMAScriptPassListener.prototype.enterVoidExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#VoidExpression.
ECMAScriptPassListener.prototype.exitVoidExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignmentOperator.
ECMAScriptPassListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignmentOperator.
ECMAScriptPassListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#literal.
ECMAScriptPassListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#literal.
ECMAScriptPassListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#numericLiteral.
ECMAScriptPassListener.prototype.enterNumericLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#numericLiteral.
ECMAScriptPassListener.prototype.exitNumericLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#identifierName.
ECMAScriptPassListener.prototype.enterIdentifierName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#identifierName.
ECMAScriptPassListener.prototype.exitIdentifierName = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#getter.
ECMAScriptPassListener.prototype.enterGetter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#getter.
ECMAScriptPassListener.prototype.exitGetter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#setter.
ECMAScriptPassListener.prototype.enterSetter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#setter.
ECMAScriptPassListener.prototype.exitSetter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#eos.
ECMAScriptPassListener.prototype.enterEos = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#eos.
ECMAScriptPassListener.prototype.exitEos = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#eof.
ECMAScriptPassListener.prototype.enterEof = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#eof.
ECMAScriptPassListener.prototype.exitEof = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalDeclaration.
ECMAScriptPassListener.prototype.enterLexicalDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalDeclaration.
ECMAScriptPassListener.prototype.exitLexicalDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#letOrConst.
ECMAScriptPassListener.prototype.enterLetOrConst = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#letOrConst.
ECMAScriptPassListener.prototype.exitLetOrConst = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingList.
ECMAScriptPassListener.prototype.enterBindingList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingList.
ECMAScriptPassListener.prototype.exitBindingList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalBinding.
ECMAScriptPassListener.prototype.enterLexicalBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalBinding.
ECMAScriptPassListener.prototype.exitLexicalBinding = function(ctx) {
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



exports.ECMAScriptPassListener = ECMAScriptPassListener;