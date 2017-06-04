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


// Enter a parse tree produced by TestudocParser#program.
TestudocListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#program.
TestudocListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#sourceElements.
TestudocListener.prototype.enterSourceElements = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#sourceElements.
TestudocListener.prototype.exitSourceElements = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#sourceElement.
TestudocListener.prototype.enterSourceElement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#sourceElement.
TestudocListener.prototype.exitSourceElement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#statement.
TestudocListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#statement.
TestudocListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#block.
TestudocListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#block.
TestudocListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#statementList.
TestudocListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#statementList.
TestudocListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#variableStatement.
TestudocListener.prototype.enterVariableStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#variableStatement.
TestudocListener.prototype.exitVariableStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#variableDeclarationList.
TestudocListener.prototype.enterVariableDeclarationList = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#variableDeclarationList.
TestudocListener.prototype.exitVariableDeclarationList = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#variableDeclaration.
TestudocListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#variableDeclaration.
TestudocListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#initialiser.
TestudocListener.prototype.enterInitialiser = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#initialiser.
TestudocListener.prototype.exitInitialiser = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#emptyStatement.
TestudocListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#emptyStatement.
TestudocListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#expressionStatement.
TestudocListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#expressionStatement.
TestudocListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ifStatement.
TestudocListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ifStatement.
TestudocListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#DoStatement.
TestudocListener.prototype.enterDoStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#DoStatement.
TestudocListener.prototype.exitDoStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#WhileStatement.
TestudocListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#WhileStatement.
TestudocListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ForStatement.
TestudocListener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ForStatement.
TestudocListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ForVarStatement.
TestudocListener.prototype.enterForVarStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ForVarStatement.
TestudocListener.prototype.exitForVarStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ForInStatement.
TestudocListener.prototype.enterForInStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ForInStatement.
TestudocListener.prototype.exitForInStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ForVarInStatement.
TestudocListener.prototype.enterForVarInStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ForVarInStatement.
TestudocListener.prototype.exitForVarInStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#continueStatement.
TestudocListener.prototype.enterContinueStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#continueStatement.
TestudocListener.prototype.exitContinueStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#breakStatement.
TestudocListener.prototype.enterBreakStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#breakStatement.
TestudocListener.prototype.exitBreakStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#returnStatement.
TestudocListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#returnStatement.
TestudocListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#withStatement.
TestudocListener.prototype.enterWithStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#withStatement.
TestudocListener.prototype.exitWithStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#switchStatement.
TestudocListener.prototype.enterSwitchStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#switchStatement.
TestudocListener.prototype.exitSwitchStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#caseBlock.
TestudocListener.prototype.enterCaseBlock = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#caseBlock.
TestudocListener.prototype.exitCaseBlock = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#caseClauses.
TestudocListener.prototype.enterCaseClauses = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#caseClauses.
TestudocListener.prototype.exitCaseClauses = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#caseClause.
TestudocListener.prototype.enterCaseClause = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#caseClause.
TestudocListener.prototype.exitCaseClause = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#defaultClause.
TestudocListener.prototype.enterDefaultClause = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#defaultClause.
TestudocListener.prototype.exitDefaultClause = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#labelledStatement.
TestudocListener.prototype.enterLabelledStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#labelledStatement.
TestudocListener.prototype.exitLabelledStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#throwStatement.
TestudocListener.prototype.enterThrowStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#throwStatement.
TestudocListener.prototype.exitThrowStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#tryStatement.
TestudocListener.prototype.enterTryStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#tryStatement.
TestudocListener.prototype.exitTryStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#catchProduction.
TestudocListener.prototype.enterCatchProduction = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#catchProduction.
TestudocListener.prototype.exitCatchProduction = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#finallyProduction.
TestudocListener.prototype.enterFinallyProduction = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#finallyProduction.
TestudocListener.prototype.exitFinallyProduction = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#debuggerStatement.
TestudocListener.prototype.enterDebuggerStatement = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#debuggerStatement.
TestudocListener.prototype.exitDebuggerStatement = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#functionDeclaration.
TestudocListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#functionDeclaration.
TestudocListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#formalParameterList.
TestudocListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#formalParameterList.
TestudocListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#functionBody.
TestudocListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#functionBody.
TestudocListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#arrayLiteral.
TestudocListener.prototype.enterArrayLiteral = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#arrayLiteral.
TestudocListener.prototype.exitArrayLiteral = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#elementList.
TestudocListener.prototype.enterElementList = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#elementList.
TestudocListener.prototype.exitElementList = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#elision.
TestudocListener.prototype.enterElision = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#elision.
TestudocListener.prototype.exitElision = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#objectLiteral.
TestudocListener.prototype.enterObjectLiteral = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#objectLiteral.
TestudocListener.prototype.exitObjectLiteral = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#propertyNameAndValueList.
TestudocListener.prototype.enterPropertyNameAndValueList = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#propertyNameAndValueList.
TestudocListener.prototype.exitPropertyNameAndValueList = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#PropertyExpressionAssignment.
TestudocListener.prototype.enterPropertyExpressionAssignment = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#PropertyExpressionAssignment.
TestudocListener.prototype.exitPropertyExpressionAssignment = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#PropertyGetter.
TestudocListener.prototype.enterPropertyGetter = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#PropertyGetter.
TestudocListener.prototype.exitPropertyGetter = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#PropertySetter.
TestudocListener.prototype.enterPropertySetter = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#PropertySetter.
TestudocListener.prototype.exitPropertySetter = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#propertyName.
TestudocListener.prototype.enterPropertyName = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#propertyName.
TestudocListener.prototype.exitPropertyName = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#propertySetParameterList.
TestudocListener.prototype.enterPropertySetParameterList = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#propertySetParameterList.
TestudocListener.prototype.exitPropertySetParameterList = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#arguments.
TestudocListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#arguments.
TestudocListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#argumentList.
TestudocListener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#argumentList.
TestudocListener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#expressionSequence.
TestudocListener.prototype.enterExpressionSequence = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#expressionSequence.
TestudocListener.prototype.exitExpressionSequence = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#TernaryExpression.
TestudocListener.prototype.enterTernaryExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#TernaryExpression.
TestudocListener.prototype.exitTernaryExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#LogicalAndExpression.
TestudocListener.prototype.enterLogicalAndExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#LogicalAndExpression.
TestudocListener.prototype.exitLogicalAndExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#PreIncrementExpression.
TestudocListener.prototype.enterPreIncrementExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#PreIncrementExpression.
TestudocListener.prototype.exitPreIncrementExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ObjectLiteralExpression.
TestudocListener.prototype.enterObjectLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ObjectLiteralExpression.
TestudocListener.prototype.exitObjectLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#InExpression.
TestudocListener.prototype.enterInExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#InExpression.
TestudocListener.prototype.exitInExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#LogicalOrExpression.
TestudocListener.prototype.enterLogicalOrExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#LogicalOrExpression.
TestudocListener.prototype.exitLogicalOrExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#NotExpression.
TestudocListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#NotExpression.
TestudocListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#PreDecreaseExpression.
TestudocListener.prototype.enterPreDecreaseExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#PreDecreaseExpression.
TestudocListener.prototype.exitPreDecreaseExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ArgumentsExpression.
TestudocListener.prototype.enterArgumentsExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ArgumentsExpression.
TestudocListener.prototype.exitArgumentsExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ThisExpression.
TestudocListener.prototype.enterThisExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ThisExpression.
TestudocListener.prototype.exitThisExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#FunctionExpression.
TestudocListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#FunctionExpression.
TestudocListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#UnaryMinusExpression.
TestudocListener.prototype.enterUnaryMinusExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#UnaryMinusExpression.
TestudocListener.prototype.exitUnaryMinusExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#PostDecreaseExpression.
TestudocListener.prototype.enterPostDecreaseExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#PostDecreaseExpression.
TestudocListener.prototype.exitPostDecreaseExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#AssignmentExpression.
TestudocListener.prototype.enterAssignmentExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#AssignmentExpression.
TestudocListener.prototype.exitAssignmentExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#TypeofExpression.
TestudocListener.prototype.enterTypeofExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#TypeofExpression.
TestudocListener.prototype.exitTypeofExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#InstanceofExpression.
TestudocListener.prototype.enterInstanceofExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#InstanceofExpression.
TestudocListener.prototype.exitInstanceofExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#UnaryPlusExpression.
TestudocListener.prototype.enterUnaryPlusExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#UnaryPlusExpression.
TestudocListener.prototype.exitUnaryPlusExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#DeleteExpression.
TestudocListener.prototype.enterDeleteExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#DeleteExpression.
TestudocListener.prototype.exitDeleteExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#EqualityExpression.
TestudocListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#EqualityExpression.
TestudocListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#BitXOrExpression.
TestudocListener.prototype.enterBitXOrExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#BitXOrExpression.
TestudocListener.prototype.exitBitXOrExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#MultiplicativeExpression.
TestudocListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#MultiplicativeExpression.
TestudocListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#BitShiftExpression.
TestudocListener.prototype.enterBitShiftExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#BitShiftExpression.
TestudocListener.prototype.exitBitShiftExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ParenthesizedExpression.
TestudocListener.prototype.enterParenthesizedExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ParenthesizedExpression.
TestudocListener.prototype.exitParenthesizedExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#AdditiveExpression.
TestudocListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#AdditiveExpression.
TestudocListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#RelationalExpression.
TestudocListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#RelationalExpression.
TestudocListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#PostIncrementExpression.
TestudocListener.prototype.enterPostIncrementExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#PostIncrementExpression.
TestudocListener.prototype.exitPostIncrementExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#BitNotExpression.
TestudocListener.prototype.enterBitNotExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#BitNotExpression.
TestudocListener.prototype.exitBitNotExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#NewExpression.
TestudocListener.prototype.enterNewExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#NewExpression.
TestudocListener.prototype.exitNewExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#LiteralExpression.
TestudocListener.prototype.enterLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#LiteralExpression.
TestudocListener.prototype.exitLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#ArrayLiteralExpression.
TestudocListener.prototype.enterArrayLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#ArrayLiteralExpression.
TestudocListener.prototype.exitArrayLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#MemberDotExpression.
TestudocListener.prototype.enterMemberDotExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#MemberDotExpression.
TestudocListener.prototype.exitMemberDotExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#MemberIndexExpression.
TestudocListener.prototype.enterMemberIndexExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#MemberIndexExpression.
TestudocListener.prototype.exitMemberIndexExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#IdentifierExpression.
TestudocListener.prototype.enterIdentifierExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#IdentifierExpression.
TestudocListener.prototype.exitIdentifierExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#BitAndExpression.
TestudocListener.prototype.enterBitAndExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#BitAndExpression.
TestudocListener.prototype.exitBitAndExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#BitOrExpression.
TestudocListener.prototype.enterBitOrExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#BitOrExpression.
TestudocListener.prototype.exitBitOrExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#AssignmentOperatorExpression.
TestudocListener.prototype.enterAssignmentOperatorExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#AssignmentOperatorExpression.
TestudocListener.prototype.exitAssignmentOperatorExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#VoidExpression.
TestudocListener.prototype.enterVoidExpression = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#VoidExpression.
TestudocListener.prototype.exitVoidExpression = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#assignmentOperator.
TestudocListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#assignmentOperator.
TestudocListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#literal.
TestudocListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#literal.
TestudocListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#numericLiteral.
TestudocListener.prototype.enterNumericLiteral = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#numericLiteral.
TestudocListener.prototype.exitNumericLiteral = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#identifierName.
TestudocListener.prototype.enterIdentifierName = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#identifierName.
TestudocListener.prototype.exitIdentifierName = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#reservedWord.
TestudocListener.prototype.enterReservedWord = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#reservedWord.
TestudocListener.prototype.exitReservedWord = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#keyword.
TestudocListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#keyword.
TestudocListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#futureReservedWord.
TestudocListener.prototype.enterFutureReservedWord = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#futureReservedWord.
TestudocListener.prototype.exitFutureReservedWord = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#getter.
TestudocListener.prototype.enterGetter = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#getter.
TestudocListener.prototype.exitGetter = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#setter.
TestudocListener.prototype.enterSetter = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#setter.
TestudocListener.prototype.exitSetter = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#eos.
TestudocListener.prototype.enterEos = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#eos.
TestudocListener.prototype.exitEos = function(ctx) {
};


// Enter a parse tree produced by TestudocParser#eof.
TestudocListener.prototype.enterEof = function(ctx) {
};

// Exit a parse tree produced by TestudocParser#eof.
TestudocListener.prototype.exitEof = function(ctx) {
};



exports.TestudocListener = TestudocListener;