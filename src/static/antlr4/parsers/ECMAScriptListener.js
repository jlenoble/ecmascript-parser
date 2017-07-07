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


// Enter a parse tree produced by ECMAScriptParser#expression.
ECMAScriptListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#expression.
ECMAScriptListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#expression_In.
ECMAScriptListener.prototype.enterExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#expression_In.
ECMAScriptListener.prototype.exitExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentPattern.
ECMAScriptListener.prototype.enterAssignmentPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentPattern.
ECMAScriptListener.prototype.exitAssignmentPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#objectAssignmentPattern.
ECMAScriptListener.prototype.enterObjectAssignmentPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#objectAssignmentPattern.
ECMAScriptListener.prototype.exitObjectAssignmentPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arrayAssignmentPattern.
ECMAScriptListener.prototype.enterArrayAssignmentPattern = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arrayAssignmentPattern.
ECMAScriptListener.prototype.exitArrayAssignmentPattern = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentPropertyList.
ECMAScriptListener.prototype.enterAssignmentPropertyList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentPropertyList.
ECMAScriptListener.prototype.exitAssignmentPropertyList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentElementList.
ECMAScriptListener.prototype.enterAssignmentElementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentElementList.
ECMAScriptListener.prototype.exitAssignmentElementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentElisionElement.
ECMAScriptListener.prototype.enterAssignmentElisionElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentElisionElement.
ECMAScriptListener.prototype.exitAssignmentElisionElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentProperty.
ECMAScriptListener.prototype.enterAssignmentProperty = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentProperty.
ECMAScriptListener.prototype.exitAssignmentProperty = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentElement.
ECMAScriptListener.prototype.enterAssignmentElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentElement.
ECMAScriptListener.prototype.exitAssignmentElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentRestElement.
ECMAScriptListener.prototype.enterAssignmentRestElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentRestElement.
ECMAScriptListener.prototype.exitAssignmentRestElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#destructuringAssignmentTarget.
ECMAScriptListener.prototype.enterDestructuringAssignmentTarget = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#destructuringAssignmentTarget.
ECMAScriptListener.prototype.exitDestructuringAssignmentTarget = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#identifierReference.
ECMAScriptListener.prototype.enterIdentifierReference = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#identifierReference.
ECMAScriptListener.prototype.exitIdentifierReference = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#identifierReference_Yield.
ECMAScriptListener.prototype.enterIdentifierReference_Yield = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#identifierReference_Yield.
ECMAScriptListener.prototype.exitIdentifierReference_Yield = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingIdentifier.
ECMAScriptListener.prototype.enterBindingIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingIdentifier.
ECMAScriptListener.prototype.exitBindingIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bindingIdentifier_Yield.
ECMAScriptListener.prototype.enterBindingIdentifier_Yield = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingIdentifier_Yield.
ECMAScriptListener.prototype.exitBindingIdentifier_Yield = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#identifier.
ECMAScriptListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#identifier.
ECMAScriptListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#primaryExpression.
ECMAScriptListener.prototype.enterPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#primaryExpression.
ECMAScriptListener.prototype.exitPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#literal.
ECMAScriptListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#literal.
ECMAScriptListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#coverParenthesizedExpressionAndArrowParameterList.
ECMAScriptListener.prototype.enterCoverParenthesizedExpressionAndArrowParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#coverParenthesizedExpressionAndArrowParameterList.
ECMAScriptListener.prototype.exitCoverParenthesizedExpressionAndArrowParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#parenthesizedExpression.
ECMAScriptListener.prototype.enterParenthesizedExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#parenthesizedExpression.
ECMAScriptListener.prototype.exitParenthesizedExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#coverCallExpressionAndAsyncArrowHead.
ECMAScriptListener.prototype.enterCoverCallExpressionAndAsyncArrowHead = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#coverCallExpressionAndAsyncArrowHead.
ECMAScriptListener.prototype.exitCoverCallExpressionAndAsyncArrowHead = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arrayLiteral.
ECMAScriptListener.prototype.enterArrayLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arrayLiteral.
ECMAScriptListener.prototype.exitArrayLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#elementList.
ECMAScriptListener.prototype.enterElementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#elementList.
ECMAScriptListener.prototype.exitElementList = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#callExpression.
ECMAScriptListener.prototype.enterCallExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#callExpression.
ECMAScriptListener.prototype.exitCallExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#superCall.
ECMAScriptListener.prototype.enterSuperCall = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#superCall.
ECMAScriptListener.prototype.exitSuperCall = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#leftHandSideExpression.
ECMAScriptListener.prototype.enterLeftHandSideExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#leftHandSideExpression.
ECMAScriptListener.prototype.exitLeftHandSideExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#newExpression.
ECMAScriptListener.prototype.enterNewExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#newExpression.
ECMAScriptListener.prototype.exitNewExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#memberExpression.
ECMAScriptListener.prototype.enterMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#memberExpression.
ECMAScriptListener.prototype.exitMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#superProperty.
ECMAScriptListener.prototype.enterSuperProperty = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#superProperty.
ECMAScriptListener.prototype.exitSuperProperty = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#metaProperty.
ECMAScriptListener.prototype.enterMetaProperty = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#metaProperty.
ECMAScriptListener.prototype.exitMetaProperty = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#newTarget.
ECMAScriptListener.prototype.enterNewTarget = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#newTarget.
ECMAScriptListener.prototype.exitNewTarget = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#initializer.
ECMAScriptListener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#initializer.
ECMAScriptListener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#initializer_In.
ECMAScriptListener.prototype.enterInitializer_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#initializer_In.
ECMAScriptListener.prototype.exitInitializer_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#templateExpression.
ECMAScriptListener.prototype.enterTemplateExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#templateExpression.
ECMAScriptListener.prototype.exitTemplateExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bitwiseORExpression.
ECMAScriptListener.prototype.enterBitwiseORExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bitwiseORExpression.
ECMAScriptListener.prototype.exitBitwiseORExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#argumentsExpression.
ECMAScriptListener.prototype.enterArgumentsExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#argumentsExpression.
ECMAScriptListener.prototype.exitArgumentsExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#taggedTemplateExpression.
ECMAScriptListener.prototype.enterTaggedTemplateExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#taggedTemplateExpression.
ECMAScriptListener.prototype.exitTaggedTemplateExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#clsExpression.
ECMAScriptListener.prototype.enterClsExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#clsExpression.
ECMAScriptListener.prototype.exitClsExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#additiveExpression.
ECMAScriptListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#additiveExpression.
ECMAScriptListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#relationalExpression.
ECMAScriptListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#relationalExpression.
ECMAScriptListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#parenExpression.
ECMAScriptListener.prototype.enterParenExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#parenExpression.
ECMAScriptListener.prototype.exitParenExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#coverExpression.
ECMAScriptListener.prototype.enterCoverExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#coverExpression.
ECMAScriptListener.prototype.exitCoverExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#superExpression.
ECMAScriptListener.prototype.enterSuperExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#superExpression.
ECMAScriptListener.prototype.exitSuperExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#indexedMemberExpression.
ECMAScriptListener.prototype.enterIndexedMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#indexedMemberExpression.
ECMAScriptListener.prototype.exitIndexedMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#idExpression.
ECMAScriptListener.prototype.enterIdExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#idExpression.
ECMAScriptListener.prototype.exitIdExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#stringExpression.
ECMAScriptListener.prototype.enterStringExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#stringExpression.
ECMAScriptListener.prototype.exitStringExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#numExpression.
ECMAScriptListener.prototype.enterNumExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#numExpression.
ECMAScriptListener.prototype.exitNumExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#regexpExpression.
ECMAScriptListener.prototype.enterRegexpExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#regexpExpression.
ECMAScriptListener.prototype.exitRegexpExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bitwiseXORExpression.
ECMAScriptListener.prototype.enterBitwiseXORExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bitwiseXORExpression.
ECMAScriptListener.prototype.exitBitwiseXORExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#logicalANDExpression.
ECMAScriptListener.prototype.enterLogicalANDExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#logicalANDExpression.
ECMAScriptListener.prototype.exitLogicalANDExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#nullExpression.
ECMAScriptListener.prototype.enterNullExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#nullExpression.
ECMAScriptListener.prototype.exitNullExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#unaryExpression.
ECMAScriptListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#unaryExpression.
ECMAScriptListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#instanceOfExpression.
ECMAScriptListener.prototype.enterInstanceOfExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#instanceOfExpression.
ECMAScriptListener.prototype.exitInstanceOfExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bitwiseANDExpression.
ECMAScriptListener.prototype.enterBitwiseANDExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bitwiseANDExpression.
ECMAScriptListener.prototype.exitBitwiseANDExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#fatArrowExpression.
ECMAScriptListener.prototype.enterFatArrowExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#fatArrowExpression.
ECMAScriptListener.prototype.exitFatArrowExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#boolExpression.
ECMAScriptListener.prototype.enterBoolExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#boolExpression.
ECMAScriptListener.prototype.exitBoolExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#shiftExpression.
ECMAScriptListener.prototype.enterShiftExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#shiftExpression.
ECMAScriptListener.prototype.exitShiftExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#conditionalExpression.
ECMAScriptListener.prototype.enterConditionalExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#conditionalExpression.
ECMAScriptListener.prototype.exitConditionalExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignExpression.
ECMAScriptListener.prototype.enterAssignExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignExpression.
ECMAScriptListener.prototype.exitAssignExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#genExpression.
ECMAScriptListener.prototype.enterGenExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#genExpression.
ECMAScriptListener.prototype.exitGenExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#objectLiteralExpression.
ECMAScriptListener.prototype.enterObjectLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#objectLiteralExpression.
ECMAScriptListener.prototype.exitObjectLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#metaExpression.
ECMAScriptListener.prototype.enterMetaExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#metaExpression.
ECMAScriptListener.prototype.exitMetaExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#multiplicativeExpression.
ECMAScriptListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#multiplicativeExpression.
ECMAScriptListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#superExpressionExpression.
ECMAScriptListener.prototype.enterSuperExpressionExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#superExpressionExpression.
ECMAScriptListener.prototype.exitSuperExpressionExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#funcExpression.
ECMAScriptListener.prototype.enterFuncExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#funcExpression.
ECMAScriptListener.prototype.exitFuncExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#newMemberExpression.
ECMAScriptListener.prototype.enterNewMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#newMemberExpression.
ECMAScriptListener.prototype.exitNewMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#dotMemberExpression.
ECMAScriptListener.prototype.enterDotMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#dotMemberExpression.
ECMAScriptListener.prototype.exitDotMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#inExpression.
ECMAScriptListener.prototype.enterInExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#inExpression.
ECMAScriptListener.prototype.exitInExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arrayLiteralExpression.
ECMAScriptListener.prototype.enterArrayLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arrayLiteralExpression.
ECMAScriptListener.prototype.exitArrayLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#destructuringExpression.
ECMAScriptListener.prototype.enterDestructuringExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#destructuringExpression.
ECMAScriptListener.prototype.exitDestructuringExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#yieldExpression.
ECMAScriptListener.prototype.enterYieldExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#yieldExpression.
ECMAScriptListener.prototype.exitYieldExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#thisExpression.
ECMAScriptListener.prototype.enterThisExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#thisExpression.
ECMAScriptListener.prototype.exitThisExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#equalityExpression.
ECMAScriptListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#equalityExpression.
ECMAScriptListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#updateExpression.
ECMAScriptListener.prototype.enterUpdateExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#updateExpression.
ECMAScriptListener.prototype.exitUpdateExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#exponentiationExpression.
ECMAScriptListener.prototype.enterExponentiationExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#exponentiationExpression.
ECMAScriptListener.prototype.exitExponentiationExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentOperatorExpression.
ECMAScriptListener.prototype.enterAssignmentOperatorExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentOperatorExpression.
ECMAScriptListener.prototype.exitAssignmentOperatorExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#logicalORExpression.
ECMAScriptListener.prototype.enterLogicalORExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#logicalORExpression.
ECMAScriptListener.prototype.exitLogicalORExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#logicalANDExpression_In.
ECMAScriptListener.prototype.enterLogicalANDExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#logicalANDExpression_In.
ECMAScriptListener.prototype.exitLogicalANDExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bitwiseANDExpression_In.
ECMAScriptListener.prototype.enterBitwiseANDExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bitwiseANDExpression_In.
ECMAScriptListener.prototype.exitBitwiseANDExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arrowFunction_In.
ECMAScriptListener.prototype.enterArrowFunction_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arrowFunction_In.
ECMAScriptListener.prototype.exitArrowFunction_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#clsExpression_In.
ECMAScriptListener.prototype.enterClsExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#clsExpression_In.
ECMAScriptListener.prototype.exitClsExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bitwiseORExpression_In.
ECMAScriptListener.prototype.enterBitwiseORExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bitwiseORExpression_In.
ECMAScriptListener.prototype.exitBitwiseORExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#conditionalExpression_In.
ECMAScriptListener.prototype.enterConditionalExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#conditionalExpression_In.
ECMAScriptListener.prototype.exitConditionalExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#parenExpression_In.
ECMAScriptListener.prototype.enterParenExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#parenExpression_In.
ECMAScriptListener.prototype.exitParenExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#additiveExpression_In.
ECMAScriptListener.prototype.enterAdditiveExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#additiveExpression_In.
ECMAScriptListener.prototype.exitAdditiveExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#relationalExpression_In.
ECMAScriptListener.prototype.enterRelationalExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#relationalExpression_In.
ECMAScriptListener.prototype.exitRelationalExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignmentOperatorExpression_In.
ECMAScriptListener.prototype.enterAssignmentOperatorExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignmentOperatorExpression_In.
ECMAScriptListener.prototype.exitAssignmentOperatorExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#destructuringExpression_In.
ECMAScriptListener.prototype.enterDestructuringExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#destructuringExpression_In.
ECMAScriptListener.prototype.exitDestructuringExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#thisExpression_In.
ECMAScriptListener.prototype.enterThisExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#thisExpression_In.
ECMAScriptListener.prototype.exitThisExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#inExpression_In.
ECMAScriptListener.prototype.enterInExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#inExpression_In.
ECMAScriptListener.prototype.exitInExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#dotMemberExpression_In.
ECMAScriptListener.prototype.enterDotMemberExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#dotMemberExpression_In.
ECMAScriptListener.prototype.exitDotMemberExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#superExpressionExpression_In.
ECMAScriptListener.prototype.enterSuperExpressionExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#superExpressionExpression_In.
ECMAScriptListener.prototype.exitSuperExpressionExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#shiftExpression_In.
ECMAScriptListener.prototype.enterShiftExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#shiftExpression_In.
ECMAScriptListener.prototype.exitShiftExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#argumentsExpression_In.
ECMAScriptListener.prototype.enterArgumentsExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#argumentsExpression_In.
ECMAScriptListener.prototype.exitArgumentsExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#regexpExpression_In.
ECMAScriptListener.prototype.enterRegexpExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#regexpExpression_In.
ECMAScriptListener.prototype.exitRegexpExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#coverExpression_In.
ECMAScriptListener.prototype.enterCoverExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#coverExpression_In.
ECMAScriptListener.prototype.exitCoverExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#bitwiseXORExpression_In.
ECMAScriptListener.prototype.enterBitwiseXORExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bitwiseXORExpression_In.
ECMAScriptListener.prototype.exitBitwiseXORExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#boolExpression_In.
ECMAScriptListener.prototype.enterBoolExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#boolExpression_In.
ECMAScriptListener.prototype.exitBoolExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#updateExpression_In.
ECMAScriptListener.prototype.enterUpdateExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#updateExpression_In.
ECMAScriptListener.prototype.exitUpdateExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#funcExpression_In.
ECMAScriptListener.prototype.enterFuncExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#funcExpression_In.
ECMAScriptListener.prototype.exitFuncExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#equalityExpression_In.
ECMAScriptListener.prototype.enterEqualityExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#equalityExpression_In.
ECMAScriptListener.prototype.exitEqualityExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#indexedMemberExpression_In.
ECMAScriptListener.prototype.enterIndexedMemberExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#indexedMemberExpression_In.
ECMAScriptListener.prototype.exitIndexedMemberExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#multiplicativeExpression_In.
ECMAScriptListener.prototype.enterMultiplicativeExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#multiplicativeExpression_In.
ECMAScriptListener.prototype.exitMultiplicativeExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#superExpression_In.
ECMAScriptListener.prototype.enterSuperExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#superExpression_In.
ECMAScriptListener.prototype.exitSuperExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#objectLiteralExpression_In.
ECMAScriptListener.prototype.enterObjectLiteralExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#objectLiteralExpression_In.
ECMAScriptListener.prototype.exitObjectLiteralExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#exponentiationExpression_In.
ECMAScriptListener.prototype.enterExponentiationExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#exponentiationExpression_In.
ECMAScriptListener.prototype.exitExponentiationExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#genExpression_In.
ECMAScriptListener.prototype.enterGenExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#genExpression_In.
ECMAScriptListener.prototype.exitGenExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#numExpression_In.
ECMAScriptListener.prototype.enterNumExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#numExpression_In.
ECMAScriptListener.prototype.exitNumExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#assignExpression_In.
ECMAScriptListener.prototype.enterAssignExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#assignExpression_In.
ECMAScriptListener.prototype.exitAssignExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#newMemberExpression_In.
ECMAScriptListener.prototype.enterNewMemberExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#newMemberExpression_In.
ECMAScriptListener.prototype.exitNewMemberExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#stringExpression_In.
ECMAScriptListener.prototype.enterStringExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#stringExpression_In.
ECMAScriptListener.prototype.exitStringExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#instanceOfExpression_In.
ECMAScriptListener.prototype.enterInstanceOfExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#instanceOfExpression_In.
ECMAScriptListener.prototype.exitInstanceOfExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#logicalORExpression_In.
ECMAScriptListener.prototype.enterLogicalORExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#logicalORExpression_In.
ECMAScriptListener.prototype.exitLogicalORExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#yieldExpression_In.
ECMAScriptListener.prototype.enterYieldExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#yieldExpression_In.
ECMAScriptListener.prototype.exitYieldExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#nullExpression_In.
ECMAScriptListener.prototype.enterNullExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#nullExpression_In.
ECMAScriptListener.prototype.exitNullExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#taggedTemplateExpression_In.
ECMAScriptListener.prototype.enterTaggedTemplateExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#taggedTemplateExpression_In.
ECMAScriptListener.prototype.exitTaggedTemplateExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#metaExpression_In.
ECMAScriptListener.prototype.enterMetaExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#metaExpression_In.
ECMAScriptListener.prototype.exitMetaExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#templateExpression_In.
ECMAScriptListener.prototype.enterTemplateExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#templateExpression_In.
ECMAScriptListener.prototype.exitTemplateExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#idExpression_In.
ECMAScriptListener.prototype.enterIdExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#idExpression_In.
ECMAScriptListener.prototype.exitIdExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#unaryExpression_In.
ECMAScriptListener.prototype.enterUnaryExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#unaryExpression_In.
ECMAScriptListener.prototype.exitUnaryExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#arrayLiteralExpression_In.
ECMAScriptListener.prototype.enterArrayLiteralExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#arrayLiteralExpression_In.
ECMAScriptListener.prototype.exitArrayLiteralExpression_In = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#lexicalDeclaration_In.
ECMAScriptListener.prototype.enterLexicalDeclaration_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#lexicalDeclaration_In.
ECMAScriptListener.prototype.exitLexicalDeclaration_In = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#bindingList_In.
ECMAScriptListener.prototype.enterBindingList_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#bindingList_In.
ECMAScriptListener.prototype.exitBindingList_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#lexicalBinding.
ECMAScriptListener.prototype.enterLexicalBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#lexicalBinding.
ECMAScriptListener.prototype.exitLexicalBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#lexicalBinding_In.
ECMAScriptListener.prototype.enterLexicalBinding_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#lexicalBinding_In.
ECMAScriptListener.prototype.exitLexicalBinding_In = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#hoistableDeclaration_Default.
ECMAScriptListener.prototype.enterHoistableDeclaration_Default = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#hoistableDeclaration_Default.
ECMAScriptListener.prototype.exitHoistableDeclaration_Default = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#continueStatement.
ECMAScriptListener.prototype.enterContinueStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#continueStatement.
ECMAScriptListener.prototype.exitContinueStatement = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#variableDeclarationList_In.
ECMAScriptListener.prototype.enterVariableDeclarationList_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#variableDeclarationList_In.
ECMAScriptListener.prototype.exitVariableDeclarationList_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#variableDeclaration.
ECMAScriptListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#variableDeclaration.
ECMAScriptListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#variableDeclaration_In.
ECMAScriptListener.prototype.enterVariableDeclaration_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#variableDeclaration_In.
ECMAScriptListener.prototype.exitVariableDeclaration_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#functionDeclaration.
ECMAScriptListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionDeclaration.
ECMAScriptListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#functionDeclaration_Default.
ECMAScriptListener.prototype.enterFunctionDeclaration_Default = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionDeclaration_Default.
ECMAScriptListener.prototype.exitFunctionDeclaration_Default = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#functionExpression.
ECMAScriptListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#functionExpression.
ECMAScriptListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#classDeclaration.
ECMAScriptListener.prototype.enterClassDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#classDeclaration.
ECMAScriptListener.prototype.exitClassDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#classExpression.
ECMAScriptListener.prototype.enterClassExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#classExpression.
ECMAScriptListener.prototype.exitClassExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#classTail.
ECMAScriptListener.prototype.enterClassTail = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#classTail.
ECMAScriptListener.prototype.exitClassTail = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#classHeritage.
ECMAScriptListener.prototype.enterClassHeritage = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#classHeritage.
ECMAScriptListener.prototype.exitClassHeritage = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#classBody.
ECMAScriptListener.prototype.enterClassBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#classBody.
ECMAScriptListener.prototype.exitClassBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#classElementList.
ECMAScriptListener.prototype.enterClassElementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#classElementList.
ECMAScriptListener.prototype.exitClassElementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#classElement.
ECMAScriptListener.prototype.enterClassElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#classElement.
ECMAScriptListener.prototype.exitClassElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#generatorDeclaration.
ECMAScriptListener.prototype.enterGeneratorDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#generatorDeclaration.
ECMAScriptListener.prototype.exitGeneratorDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#generatorDeclaration_Default.
ECMAScriptListener.prototype.enterGeneratorDeclaration_Default = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#generatorDeclaration_Default.
ECMAScriptListener.prototype.exitGeneratorDeclaration_Default = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#generatorExpression.
ECMAScriptListener.prototype.enterGeneratorExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#generatorExpression.
ECMAScriptListener.prototype.exitGeneratorExpression = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#generatorBody.
ECMAScriptListener.prototype.enterGeneratorBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#generatorBody.
ECMAScriptListener.prototype.exitGeneratorBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#conciseBody.
ECMAScriptListener.prototype.enterConciseBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#conciseBody.
ECMAScriptListener.prototype.exitConciseBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#conciseBody_In.
ECMAScriptListener.prototype.enterConciseBody_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#conciseBody_In.
ECMAScriptListener.prototype.exitConciseBody_In = function(ctx) {
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


// Enter a parse tree produced by ECMAScriptParser#generatorMethod.
ECMAScriptListener.prototype.enterGeneratorMethod = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#generatorMethod.
ECMAScriptListener.prototype.exitGeneratorMethod = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#script.
ECMAScriptListener.prototype.enterScript = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#script.
ECMAScriptListener.prototype.exitScript = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#scriptBody.
ECMAScriptListener.prototype.enterScriptBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#scriptBody.
ECMAScriptListener.prototype.exitScriptBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#module.
ECMAScriptListener.prototype.enterModule = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#module.
ECMAScriptListener.prototype.exitModule = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#moduleBody.
ECMAScriptListener.prototype.enterModuleBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#moduleBody.
ECMAScriptListener.prototype.exitModuleBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#moduleItemList.
ECMAScriptListener.prototype.enterModuleItemList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#moduleItemList.
ECMAScriptListener.prototype.exitModuleItemList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#moduleItem.
ECMAScriptListener.prototype.enterModuleItem = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#moduleItem.
ECMAScriptListener.prototype.exitModuleItem = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#importDeclaration.
ECMAScriptListener.prototype.enterImportDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#importDeclaration.
ECMAScriptListener.prototype.exitImportDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#importClause.
ECMAScriptListener.prototype.enterImportClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#importClause.
ECMAScriptListener.prototype.exitImportClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#importedDefaultBinding.
ECMAScriptListener.prototype.enterImportedDefaultBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#importedDefaultBinding.
ECMAScriptListener.prototype.exitImportedDefaultBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#nameSpaceImport.
ECMAScriptListener.prototype.enterNameSpaceImport = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#nameSpaceImport.
ECMAScriptListener.prototype.exitNameSpaceImport = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#namedImports.
ECMAScriptListener.prototype.enterNamedImports = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#namedImports.
ECMAScriptListener.prototype.exitNamedImports = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#fromClause.
ECMAScriptListener.prototype.enterFromClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#fromClause.
ECMAScriptListener.prototype.exitFromClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#importsList.
ECMAScriptListener.prototype.enterImportsList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#importsList.
ECMAScriptListener.prototype.exitImportsList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#importSpecifier.
ECMAScriptListener.prototype.enterImportSpecifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#importSpecifier.
ECMAScriptListener.prototype.exitImportSpecifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#moduleSpecifier.
ECMAScriptListener.prototype.enterModuleSpecifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#moduleSpecifier.
ECMAScriptListener.prototype.exitModuleSpecifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#importedBinding.
ECMAScriptListener.prototype.enterImportedBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#importedBinding.
ECMAScriptListener.prototype.exitImportedBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#exportDeclaration.
ECMAScriptListener.prototype.enterExportDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#exportDeclaration.
ECMAScriptListener.prototype.exitExportDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#exportClause.
ECMAScriptListener.prototype.enterExportClause = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#exportClause.
ECMAScriptListener.prototype.exitExportClause = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#exportsList.
ECMAScriptListener.prototype.enterExportsList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#exportsList.
ECMAScriptListener.prototype.exitExportsList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#exportSpecifier.
ECMAScriptListener.prototype.enterExportSpecifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#exportSpecifier.
ECMAScriptListener.prototype.exitExportSpecifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#templateLiteral.
ECMAScriptListener.prototype.enterTemplateLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#templateLiteral.
ECMAScriptListener.prototype.exitTemplateLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#templateSpans.
ECMAScriptListener.prototype.enterTemplateSpans = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#templateSpans.
ECMAScriptListener.prototype.exitTemplateSpans = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptParser#templateMiddleList.
ECMAScriptListener.prototype.enterTemplateMiddleList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptParser#templateMiddleList.
ECMAScriptListener.prototype.exitTemplateMiddleList = function(ctx) {
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