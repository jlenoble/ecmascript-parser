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


// Enter a parse tree produced by ECMAScriptPassParser#expression.
ECMAScriptPassListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#expression.
ECMAScriptPassListener.prototype.exitExpression = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#identifierReference_Yield.
ECMAScriptPassListener.prototype.enterIdentifierReference_Yield = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#identifierReference_Yield.
ECMAScriptPassListener.prototype.exitIdentifierReference_Yield = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingIdentifier.
ECMAScriptPassListener.prototype.enterBindingIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingIdentifier.
ECMAScriptPassListener.prototype.exitBindingIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingIdentifier_Yield.
ECMAScriptPassListener.prototype.enterBindingIdentifier_Yield = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingIdentifier_Yield.
ECMAScriptPassListener.prototype.exitBindingIdentifier_Yield = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#parenthesizedExpression.
ECMAScriptPassListener.prototype.enterParenthesizedExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#parenthesizedExpression.
ECMAScriptPassListener.prototype.exitParenthesizedExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#coverCallExpressionAndAsyncArrowHead.
ECMAScriptPassListener.prototype.enterCoverCallExpressionAndAsyncArrowHead = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#coverCallExpressionAndAsyncArrowHead.
ECMAScriptPassListener.prototype.exitCoverCallExpressionAndAsyncArrowHead = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#spreadElement.
ECMAScriptPassListener.prototype.enterSpreadElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#spreadElement.
ECMAScriptPassListener.prototype.exitSpreadElement = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#computedPropertyName.
ECMAScriptPassListener.prototype.enterComputedPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#computedPropertyName.
ECMAScriptPassListener.prototype.exitComputedPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#callExpression.
ECMAScriptPassListener.prototype.enterCallExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#callExpression.
ECMAScriptPassListener.prototype.exitCallExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#superCall.
ECMAScriptPassListener.prototype.enterSuperCall = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#superCall.
ECMAScriptPassListener.prototype.exitSuperCall = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#superProperty.
ECMAScriptPassListener.prototype.enterSuperProperty = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#superProperty.
ECMAScriptPassListener.prototype.exitSuperProperty = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#metaProperty.
ECMAScriptPassListener.prototype.enterMetaProperty = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#metaProperty.
ECMAScriptPassListener.prototype.exitMetaProperty = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#newTarget.
ECMAScriptPassListener.prototype.enterNewTarget = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#newTarget.
ECMAScriptPassListener.prototype.exitNewTarget = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#initializer.
ECMAScriptPassListener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#initializer.
ECMAScriptPassListener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#initializer_In.
ECMAScriptPassListener.prototype.enterInitializer_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#initializer_In.
ECMAScriptPassListener.prototype.exitInitializer_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#templateExpression.
ECMAScriptPassListener.prototype.enterTemplateExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#templateExpression.
ECMAScriptPassListener.prototype.exitTemplateExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bitwiseORExpression.
ECMAScriptPassListener.prototype.enterBitwiseORExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bitwiseORExpression.
ECMAScriptPassListener.prototype.exitBitwiseORExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#argumentsExpression.
ECMAScriptPassListener.prototype.enterArgumentsExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#argumentsExpression.
ECMAScriptPassListener.prototype.exitArgumentsExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#taggedTemplateExpression.
ECMAScriptPassListener.prototype.enterTaggedTemplateExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#taggedTemplateExpression.
ECMAScriptPassListener.prototype.exitTaggedTemplateExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#clsExpression.
ECMAScriptPassListener.prototype.enterClsExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#clsExpression.
ECMAScriptPassListener.prototype.exitClsExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#additiveExpression.
ECMAScriptPassListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#additiveExpression.
ECMAScriptPassListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#relationalExpression.
ECMAScriptPassListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#relationalExpression.
ECMAScriptPassListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#parenExpression.
ECMAScriptPassListener.prototype.enterParenExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#parenExpression.
ECMAScriptPassListener.prototype.exitParenExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#superExpression.
ECMAScriptPassListener.prototype.enterSuperExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#superExpression.
ECMAScriptPassListener.prototype.exitSuperExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#indexedMemberExpression.
ECMAScriptPassListener.prototype.enterIndexedMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#indexedMemberExpression.
ECMAScriptPassListener.prototype.exitIndexedMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#idExpression.
ECMAScriptPassListener.prototype.enterIdExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#idExpression.
ECMAScriptPassListener.prototype.exitIdExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#stringExpression.
ECMAScriptPassListener.prototype.enterStringExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#stringExpression.
ECMAScriptPassListener.prototype.exitStringExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#numExpression.
ECMAScriptPassListener.prototype.enterNumExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#numExpression.
ECMAScriptPassListener.prototype.exitNumExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#regexpExpression.
ECMAScriptPassListener.prototype.enterRegexpExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#regexpExpression.
ECMAScriptPassListener.prototype.exitRegexpExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bitwiseXORExpression.
ECMAScriptPassListener.prototype.enterBitwiseXORExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bitwiseXORExpression.
ECMAScriptPassListener.prototype.exitBitwiseXORExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#logicalANDExpression.
ECMAScriptPassListener.prototype.enterLogicalANDExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#logicalANDExpression.
ECMAScriptPassListener.prototype.exitLogicalANDExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#nullExpression.
ECMAScriptPassListener.prototype.enterNullExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#nullExpression.
ECMAScriptPassListener.prototype.exitNullExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#unaryExpression.
ECMAScriptPassListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#unaryExpression.
ECMAScriptPassListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#instanceOfExpression.
ECMAScriptPassListener.prototype.enterInstanceOfExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#instanceOfExpression.
ECMAScriptPassListener.prototype.exitInstanceOfExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bitwiseANDExpression.
ECMAScriptPassListener.prototype.enterBitwiseANDExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bitwiseANDExpression.
ECMAScriptPassListener.prototype.exitBitwiseANDExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#boolExpression.
ECMAScriptPassListener.prototype.enterBoolExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#boolExpression.
ECMAScriptPassListener.prototype.exitBoolExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#shiftExpression.
ECMAScriptPassListener.prototype.enterShiftExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#shiftExpression.
ECMAScriptPassListener.prototype.exitShiftExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#conditionalExpression.
ECMAScriptPassListener.prototype.enterConditionalExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#conditionalExpression.
ECMAScriptPassListener.prototype.exitConditionalExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignExpression.
ECMAScriptPassListener.prototype.enterAssignExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignExpression.
ECMAScriptPassListener.prototype.exitAssignExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#genExpression.
ECMAScriptPassListener.prototype.enterGenExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#genExpression.
ECMAScriptPassListener.prototype.exitGenExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#objectLiteralExpression.
ECMAScriptPassListener.prototype.enterObjectLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#objectLiteralExpression.
ECMAScriptPassListener.prototype.exitObjectLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#metaExpression.
ECMAScriptPassListener.prototype.enterMetaExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#metaExpression.
ECMAScriptPassListener.prototype.exitMetaExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arrowFunction.
ECMAScriptPassListener.prototype.enterArrowFunction = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arrowFunction.
ECMAScriptPassListener.prototype.exitArrowFunction = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#multiplicativeExpression.
ECMAScriptPassListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#multiplicativeExpression.
ECMAScriptPassListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#funcExpression.
ECMAScriptPassListener.prototype.enterFuncExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#funcExpression.
ECMAScriptPassListener.prototype.exitFuncExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#newMemberExpression.
ECMAScriptPassListener.prototype.enterNewMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#newMemberExpression.
ECMAScriptPassListener.prototype.exitNewMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#dotMemberExpression.
ECMAScriptPassListener.prototype.enterDotMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#dotMemberExpression.
ECMAScriptPassListener.prototype.exitDotMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#inExpression.
ECMAScriptPassListener.prototype.enterInExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#inExpression.
ECMAScriptPassListener.prototype.exitInExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arrayLiteralExpression.
ECMAScriptPassListener.prototype.enterArrayLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arrayLiteralExpression.
ECMAScriptPassListener.prototype.exitArrayLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#yieldExpression.
ECMAScriptPassListener.prototype.enterYieldExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#yieldExpression.
ECMAScriptPassListener.prototype.exitYieldExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#thisExpression.
ECMAScriptPassListener.prototype.enterThisExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#thisExpression.
ECMAScriptPassListener.prototype.exitThisExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#equalityExpression.
ECMAScriptPassListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#equalityExpression.
ECMAScriptPassListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#updateExpression.
ECMAScriptPassListener.prototype.enterUpdateExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#updateExpression.
ECMAScriptPassListener.prototype.exitUpdateExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#exponentiationExpression.
ECMAScriptPassListener.prototype.enterExponentiationExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#exponentiationExpression.
ECMAScriptPassListener.prototype.exitExponentiationExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignmentOperatorExpression.
ECMAScriptPassListener.prototype.enterAssignmentOperatorExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignmentOperatorExpression.
ECMAScriptPassListener.prototype.exitAssignmentOperatorExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#logicalORExpression.
ECMAScriptPassListener.prototype.enterLogicalORExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#logicalORExpression.
ECMAScriptPassListener.prototype.exitLogicalORExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#logicalANDExpression_In.
ECMAScriptPassListener.prototype.enterLogicalANDExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#logicalANDExpression_In.
ECMAScriptPassListener.prototype.exitLogicalANDExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bitwiseANDExpression_In.
ECMAScriptPassListener.prototype.enterBitwiseANDExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bitwiseANDExpression_In.
ECMAScriptPassListener.prototype.exitBitwiseANDExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arrowFunction_In.
ECMAScriptPassListener.prototype.enterArrowFunction_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arrowFunction_In.
ECMAScriptPassListener.prototype.exitArrowFunction_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#clsExpression_In.
ECMAScriptPassListener.prototype.enterClsExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#clsExpression_In.
ECMAScriptPassListener.prototype.exitClsExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bitwiseORExpression_In.
ECMAScriptPassListener.prototype.enterBitwiseORExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bitwiseORExpression_In.
ECMAScriptPassListener.prototype.exitBitwiseORExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#conditionalExpression_In.
ECMAScriptPassListener.prototype.enterConditionalExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#conditionalExpression_In.
ECMAScriptPassListener.prototype.exitConditionalExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#parenExpression_In.
ECMAScriptPassListener.prototype.enterParenExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#parenExpression_In.
ECMAScriptPassListener.prototype.exitParenExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#additiveExpression_In.
ECMAScriptPassListener.prototype.enterAdditiveExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#additiveExpression_In.
ECMAScriptPassListener.prototype.exitAdditiveExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#relationalExpression_In.
ECMAScriptPassListener.prototype.enterRelationalExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#relationalExpression_In.
ECMAScriptPassListener.prototype.exitRelationalExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignmentOperatorExpression_In.
ECMAScriptPassListener.prototype.enterAssignmentOperatorExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignmentOperatorExpression_In.
ECMAScriptPassListener.prototype.exitAssignmentOperatorExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#thisExpression_In.
ECMAScriptPassListener.prototype.enterThisExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#thisExpression_In.
ECMAScriptPassListener.prototype.exitThisExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#inExpression_In.
ECMAScriptPassListener.prototype.enterInExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#inExpression_In.
ECMAScriptPassListener.prototype.exitInExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#dotMemberExpression_In.
ECMAScriptPassListener.prototype.enterDotMemberExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#dotMemberExpression_In.
ECMAScriptPassListener.prototype.exitDotMemberExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#shiftExpression_In.
ECMAScriptPassListener.prototype.enterShiftExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#shiftExpression_In.
ECMAScriptPassListener.prototype.exitShiftExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#argumentsExpression_In.
ECMAScriptPassListener.prototype.enterArgumentsExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#argumentsExpression_In.
ECMAScriptPassListener.prototype.exitArgumentsExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#regexpExpression_In.
ECMAScriptPassListener.prototype.enterRegexpExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#regexpExpression_In.
ECMAScriptPassListener.prototype.exitRegexpExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bitwiseXORExpression_In.
ECMAScriptPassListener.prototype.enterBitwiseXORExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bitwiseXORExpression_In.
ECMAScriptPassListener.prototype.exitBitwiseXORExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#boolExpression_In.
ECMAScriptPassListener.prototype.enterBoolExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#boolExpression_In.
ECMAScriptPassListener.prototype.exitBoolExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#updateExpression_In.
ECMAScriptPassListener.prototype.enterUpdateExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#updateExpression_In.
ECMAScriptPassListener.prototype.exitUpdateExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#funcExpression_In.
ECMAScriptPassListener.prototype.enterFuncExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#funcExpression_In.
ECMAScriptPassListener.prototype.exitFuncExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#equalityExpression_In.
ECMAScriptPassListener.prototype.enterEqualityExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#equalityExpression_In.
ECMAScriptPassListener.prototype.exitEqualityExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#indexedMemberExpression_In.
ECMAScriptPassListener.prototype.enterIndexedMemberExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#indexedMemberExpression_In.
ECMAScriptPassListener.prototype.exitIndexedMemberExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#multiplicativeExpression_In.
ECMAScriptPassListener.prototype.enterMultiplicativeExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#multiplicativeExpression_In.
ECMAScriptPassListener.prototype.exitMultiplicativeExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#superExpression_In.
ECMAScriptPassListener.prototype.enterSuperExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#superExpression_In.
ECMAScriptPassListener.prototype.exitSuperExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#objectLiteralExpression_In.
ECMAScriptPassListener.prototype.enterObjectLiteralExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#objectLiteralExpression_In.
ECMAScriptPassListener.prototype.exitObjectLiteralExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#exponentiationExpression_In.
ECMAScriptPassListener.prototype.enterExponentiationExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#exponentiationExpression_In.
ECMAScriptPassListener.prototype.exitExponentiationExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#genExpression_In.
ECMAScriptPassListener.prototype.enterGenExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#genExpression_In.
ECMAScriptPassListener.prototype.exitGenExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#numExpression_In.
ECMAScriptPassListener.prototype.enterNumExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#numExpression_In.
ECMAScriptPassListener.prototype.exitNumExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignExpression_In.
ECMAScriptPassListener.prototype.enterAssignExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignExpression_In.
ECMAScriptPassListener.prototype.exitAssignExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#newMemberExpression_In.
ECMAScriptPassListener.prototype.enterNewMemberExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#newMemberExpression_In.
ECMAScriptPassListener.prototype.exitNewMemberExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#stringExpression_In.
ECMAScriptPassListener.prototype.enterStringExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#stringExpression_In.
ECMAScriptPassListener.prototype.exitStringExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#instanceOfExpression_In.
ECMAScriptPassListener.prototype.enterInstanceOfExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#instanceOfExpression_In.
ECMAScriptPassListener.prototype.exitInstanceOfExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#logicalORExpression_In.
ECMAScriptPassListener.prototype.enterLogicalORExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#logicalORExpression_In.
ECMAScriptPassListener.prototype.exitLogicalORExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#yieldExpression_In.
ECMAScriptPassListener.prototype.enterYieldExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#yieldExpression_In.
ECMAScriptPassListener.prototype.exitYieldExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#nullExpression_In.
ECMAScriptPassListener.prototype.enterNullExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#nullExpression_In.
ECMAScriptPassListener.prototype.exitNullExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#taggedTemplateExpression_In.
ECMAScriptPassListener.prototype.enterTaggedTemplateExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#taggedTemplateExpression_In.
ECMAScriptPassListener.prototype.exitTaggedTemplateExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#metaExpression_In.
ECMAScriptPassListener.prototype.enterMetaExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#metaExpression_In.
ECMAScriptPassListener.prototype.exitMetaExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#templateExpression_In.
ECMAScriptPassListener.prototype.enterTemplateExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#templateExpression_In.
ECMAScriptPassListener.prototype.exitTemplateExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#idExpression_In.
ECMAScriptPassListener.prototype.enterIdExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#idExpression_In.
ECMAScriptPassListener.prototype.exitIdExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#unaryExpression_In.
ECMAScriptPassListener.prototype.enterUnaryExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#unaryExpression_In.
ECMAScriptPassListener.prototype.exitUnaryExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arrayLiteralExpression_In.
ECMAScriptPassListener.prototype.enterArrayLiteralExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arrayLiteralExpression_In.
ECMAScriptPassListener.prototype.exitArrayLiteralExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#unaryOperator.
ECMAScriptPassListener.prototype.enterUnaryOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#unaryOperator.
ECMAScriptPassListener.prototype.exitUnaryOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#multiplicativeOperator.
ECMAScriptPassListener.prototype.enterMultiplicativeOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#multiplicativeOperator.
ECMAScriptPassListener.prototype.exitMultiplicativeOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#additiveOperator.
ECMAScriptPassListener.prototype.enterAdditiveOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#additiveOperator.
ECMAScriptPassListener.prototype.exitAdditiveOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#shiftOperator.
ECMAScriptPassListener.prototype.enterShiftOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#shiftOperator.
ECMAScriptPassListener.prototype.exitShiftOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#relationalOperator.
ECMAScriptPassListener.prototype.enterRelationalOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#relationalOperator.
ECMAScriptPassListener.prototype.exitRelationalOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#equalityOperator.
ECMAScriptPassListener.prototype.enterEqualityOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#equalityOperator.
ECMAScriptPassListener.prototype.exitEqualityOperator = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#returnStatement.
ECMAScriptPassListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#returnStatement.
ECMAScriptPassListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#debuggerStatement.
ECMAScriptPassListener.prototype.enterDebuggerStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#debuggerStatement.
ECMAScriptPassListener.prototype.exitDebuggerStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#expressionStatement.
ECMAScriptPassListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#expressionStatement.
ECMAScriptPassListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingElement.
ECMAScriptPassListener.prototype.enterBindingElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingElement.
ECMAScriptPassListener.prototype.exitBindingElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingRestElement.
ECMAScriptPassListener.prototype.enterBindingRestElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingRestElement.
ECMAScriptPassListener.prototype.exitBindingRestElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#singleNameBinding.
ECMAScriptPassListener.prototype.enterSingleNameBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#singleNameBinding.
ECMAScriptPassListener.prototype.exitSingleNameBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingPattern.
ECMAScriptPassListener.prototype.enterBindingPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingPattern.
ECMAScriptPassListener.prototype.exitBindingPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#objectBindingPattern.
ECMAScriptPassListener.prototype.enterObjectBindingPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#objectBindingPattern.
ECMAScriptPassListener.prototype.exitObjectBindingPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arrayBindingPattern.
ECMAScriptPassListener.prototype.enterArrayBindingPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arrayBindingPattern.
ECMAScriptPassListener.prototype.exitArrayBindingPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingPropertyList.
ECMAScriptPassListener.prototype.enterBindingPropertyList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingPropertyList.
ECMAScriptPassListener.prototype.exitBindingPropertyList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingProperty.
ECMAScriptPassListener.prototype.enterBindingProperty = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingProperty.
ECMAScriptPassListener.prototype.exitBindingProperty = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalDeclaration.
ECMAScriptPassListener.prototype.enterLexicalDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalDeclaration.
ECMAScriptPassListener.prototype.exitLexicalDeclaration = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#bindingList.
ECMAScriptPassListener.prototype.enterBindingList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingList.
ECMAScriptPassListener.prototype.exitBindingList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingList_In.
ECMAScriptPassListener.prototype.enterBindingList_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingList_In.
ECMAScriptPassListener.prototype.exitBindingList_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalBinding.
ECMAScriptPassListener.prototype.enterLexicalBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalBinding.
ECMAScriptPassListener.prototype.exitLexicalBinding = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#hoistableDeclaration.
ECMAScriptPassListener.prototype.enterHoistableDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#hoistableDeclaration.
ECMAScriptPassListener.prototype.exitHoistableDeclaration = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#catchPart.
ECMAScriptPassListener.prototype.enterCatchPart = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#catchPart.
ECMAScriptPassListener.prototype.exitCatchPart = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#finallyPart.
ECMAScriptPassListener.prototype.enterFinallyPart = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#finallyPart.
ECMAScriptPassListener.prototype.exitFinallyPart = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#catchParameter.
ECMAScriptPassListener.prototype.enterCatchParameter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#catchParameter.
ECMAScriptPassListener.prototype.exitCatchParameter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#withStatement.
ECMAScriptPassListener.prototype.enterWithStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#withStatement.
ECMAScriptPassListener.prototype.exitWithStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#labelledStatement.
ECMAScriptPassListener.prototype.enterLabelledStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#labelledStatement.
ECMAScriptPassListener.prototype.exitLabelledStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#labelledItem.
ECMAScriptPassListener.prototype.enterLabelledItem = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#labelledItem.
ECMAScriptPassListener.prototype.exitLabelledItem = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#labelIdentifier.
ECMAScriptPassListener.prototype.enterLabelIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#labelIdentifier.
ECMAScriptPassListener.prototype.exitLabelIdentifier = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#iterationStatement.
ECMAScriptPassListener.prototype.enterIterationStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#iterationStatement.
ECMAScriptPassListener.prototype.exitIterationStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#forDeclaration.
ECMAScriptPassListener.prototype.enterForDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#forDeclaration.
ECMAScriptPassListener.prototype.exitForDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#forBinding.
ECMAScriptPassListener.prototype.enterForBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#forBinding.
ECMAScriptPassListener.prototype.exitForBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#ifStatement.
ECMAScriptPassListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#ifStatement.
ECMAScriptPassListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#breakableStatement.
ECMAScriptPassListener.prototype.enterBreakableStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#breakableStatement.
ECMAScriptPassListener.prototype.exitBreakableStatement = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#blockStatement.
ECMAScriptPassListener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#blockStatement.
ECMAScriptPassListener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#block.
ECMAScriptPassListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#block.
ECMAScriptPassListener.prototype.exitBlock = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#variableDeclarationList_In.
ECMAScriptPassListener.prototype.enterVariableDeclarationList_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#variableDeclarationList_In.
ECMAScriptPassListener.prototype.exitVariableDeclarationList_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#variableDeclaration.
ECMAScriptPassListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#variableDeclaration.
ECMAScriptPassListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#variableDeclaration_In.
ECMAScriptPassListener.prototype.enterVariableDeclaration_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#variableDeclaration_In.
ECMAScriptPassListener.prototype.exitVariableDeclaration_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionDeclaration.
ECMAScriptPassListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionDeclaration.
ECMAScriptPassListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionExpression.
ECMAScriptPassListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionExpression.
ECMAScriptPassListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#classDeclaration.
ECMAScriptPassListener.prototype.enterClassDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#classDeclaration.
ECMAScriptPassListener.prototype.exitClassDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#classExpression.
ECMAScriptPassListener.prototype.enterClassExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#classExpression.
ECMAScriptPassListener.prototype.exitClassExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#classTail.
ECMAScriptPassListener.prototype.enterClassTail = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#classTail.
ECMAScriptPassListener.prototype.exitClassTail = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#classHeritage.
ECMAScriptPassListener.prototype.enterClassHeritage = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#classHeritage.
ECMAScriptPassListener.prototype.exitClassHeritage = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#classBody.
ECMAScriptPassListener.prototype.enterClassBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#classBody.
ECMAScriptPassListener.prototype.exitClassBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#classElementList.
ECMAScriptPassListener.prototype.enterClassElementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#classElementList.
ECMAScriptPassListener.prototype.exitClassElementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#classElement.
ECMAScriptPassListener.prototype.enterClassElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#classElement.
ECMAScriptPassListener.prototype.exitClassElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#generatorDeclaration.
ECMAScriptPassListener.prototype.enterGeneratorDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#generatorDeclaration.
ECMAScriptPassListener.prototype.exitGeneratorDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#generatorExpression.
ECMAScriptPassListener.prototype.enterGeneratorExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#generatorExpression.
ECMAScriptPassListener.prototype.exitGeneratorExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#uniqueFormalParameters.
ECMAScriptPassListener.prototype.enterUniqueFormalParameters = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#uniqueFormalParameters.
ECMAScriptPassListener.prototype.exitUniqueFormalParameters = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#formalParameters.
ECMAScriptPassListener.prototype.enterFormalParameters = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#formalParameters.
ECMAScriptPassListener.prototype.exitFormalParameters = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#formalParameterList.
ECMAScriptPassListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#formalParameterList.
ECMAScriptPassListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionRestParameter.
ECMAScriptPassListener.prototype.enterFunctionRestParameter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionRestParameter.
ECMAScriptPassListener.prototype.exitFunctionRestParameter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#formalParameter.
ECMAScriptPassListener.prototype.enterFormalParameter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#formalParameter.
ECMAScriptPassListener.prototype.exitFormalParameter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arrowParameters.
ECMAScriptPassListener.prototype.enterArrowParameters = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arrowParameters.
ECMAScriptPassListener.prototype.exitArrowParameters = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionBody.
ECMAScriptPassListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionBody.
ECMAScriptPassListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#generatorBody.
ECMAScriptPassListener.prototype.enterGeneratorBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#generatorBody.
ECMAScriptPassListener.prototype.exitGeneratorBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#conciseBody.
ECMAScriptPassListener.prototype.enterConciseBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#conciseBody.
ECMAScriptPassListener.prototype.exitConciseBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#conciseBody_In.
ECMAScriptPassListener.prototype.enterConciseBody_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#conciseBody_In.
ECMAScriptPassListener.prototype.exitConciseBody_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#methodDefinition.
ECMAScriptPassListener.prototype.enterMethodDefinition = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#methodDefinition.
ECMAScriptPassListener.prototype.exitMethodDefinition = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertySetParameterList.
ECMAScriptPassListener.prototype.enterPropertySetParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertySetParameterList.
ECMAScriptPassListener.prototype.exitPropertySetParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#generatorMethod.
ECMAScriptPassListener.prototype.enterGeneratorMethod = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#generatorMethod.
ECMAScriptPassListener.prototype.exitGeneratorMethod = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#script.
ECMAScriptPassListener.prototype.enterScript = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#script.
ECMAScriptPassListener.prototype.exitScript = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#scriptBody.
ECMAScriptPassListener.prototype.enterScriptBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#scriptBody.
ECMAScriptPassListener.prototype.exitScriptBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#module.
ECMAScriptPassListener.prototype.enterModule = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#module.
ECMAScriptPassListener.prototype.exitModule = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#moduleBody.
ECMAScriptPassListener.prototype.enterModuleBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#moduleBody.
ECMAScriptPassListener.prototype.exitModuleBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#moduleItemList.
ECMAScriptPassListener.prototype.enterModuleItemList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#moduleItemList.
ECMAScriptPassListener.prototype.exitModuleItemList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#moduleItem.
ECMAScriptPassListener.prototype.enterModuleItem = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#moduleItem.
ECMAScriptPassListener.prototype.exitModuleItem = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#importDeclaration.
ECMAScriptPassListener.prototype.enterImportDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#importDeclaration.
ECMAScriptPassListener.prototype.exitImportDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#importClause.
ECMAScriptPassListener.prototype.enterImportClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#importClause.
ECMAScriptPassListener.prototype.exitImportClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#importedDefaultBinding.
ECMAScriptPassListener.prototype.enterImportedDefaultBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#importedDefaultBinding.
ECMAScriptPassListener.prototype.exitImportedDefaultBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#nameSpaceImport.
ECMAScriptPassListener.prototype.enterNameSpaceImport = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#nameSpaceImport.
ECMAScriptPassListener.prototype.exitNameSpaceImport = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#namedImports.
ECMAScriptPassListener.prototype.enterNamedImports = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#namedImports.
ECMAScriptPassListener.prototype.exitNamedImports = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#fromClause.
ECMAScriptPassListener.prototype.enterFromClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#fromClause.
ECMAScriptPassListener.prototype.exitFromClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#importsList.
ECMAScriptPassListener.prototype.enterImportsList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#importsList.
ECMAScriptPassListener.prototype.exitImportsList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#importSpecifier.
ECMAScriptPassListener.prototype.enterImportSpecifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#importSpecifier.
ECMAScriptPassListener.prototype.exitImportSpecifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#moduleSpecifier.
ECMAScriptPassListener.prototype.enterModuleSpecifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#moduleSpecifier.
ECMAScriptPassListener.prototype.exitModuleSpecifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#importedBinding.
ECMAScriptPassListener.prototype.enterImportedBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#importedBinding.
ECMAScriptPassListener.prototype.exitImportedBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#exportDeclaration.
ECMAScriptPassListener.prototype.enterExportDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#exportDeclaration.
ECMAScriptPassListener.prototype.exitExportDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#exportClause.
ECMAScriptPassListener.prototype.enterExportClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#exportClause.
ECMAScriptPassListener.prototype.exitExportClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#exportsList.
ECMAScriptPassListener.prototype.enterExportsList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#exportsList.
ECMAScriptPassListener.prototype.exitExportsList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#exportSpecifier.
ECMAScriptPassListener.prototype.enterExportSpecifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#exportSpecifier.
ECMAScriptPassListener.prototype.exitExportSpecifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#templateLiteral.
ECMAScriptPassListener.prototype.enterTemplateLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#templateLiteral.
ECMAScriptPassListener.prototype.exitTemplateLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#templateSpans.
ECMAScriptPassListener.prototype.enterTemplateSpans = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#templateSpans.
ECMAScriptPassListener.prototype.exitTemplateSpans = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#templateMiddleList.
ECMAScriptPassListener.prototype.enterTemplateMiddleList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#templateMiddleList.
ECMAScriptPassListener.prototype.exitTemplateMiddleList = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptPassParser#miscIdentifier.
ECMAScriptPassListener.prototype.enterMiscIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#miscIdentifier.
ECMAScriptPassListener.prototype.exitMiscIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#identifierName.
ECMAScriptPassListener.prototype.enterIdentifierName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#identifierName.
ECMAScriptPassListener.prototype.exitIdentifierName = function(ctx) {
};



exports.ECMAScriptPassListener = ECMAScriptPassListener;