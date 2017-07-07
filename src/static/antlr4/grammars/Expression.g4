grammar Expression;

// Initializer[In, Yield, Await]:
//    = AssignmentExpression[?In, ?Yield, ?Await]
initializer
: Assign expression
;

// Expression[In, Yield, Await]:
//    AssignmentExpression[?In, ?Yield, ?Await]
//    Expression[?In, ?Yield, ?Await] , AssignmentExpression[?In, ?Yield, ?Await]
expressionList
: expression (Comma expression)*
;

// AssignmentExpression[In, Yield, Await]:
//    ConditionalExpression[?In, ?Yield, ?Await]
//    [+Yield] YieldExpression[?In, ?Await]
//    ArrowFunction[?In, ?Yield, ?Await]
//    AsyncArrowFunction[?In, ?Yield, ?Await]
//    LeftHandSideExpression[?Yield, ?Await] =
//        AssignmentExpression[?In, ?Yield, ?Await]
//    LeftHandSideExpression[?Yield, ?Await] AssignmentOperator
//        AssignmentExpression[?In, ?Yield, ?Await]
// ArrowFunction[In, Yield, Await]: From Annex B4 - Functions And Classes
//    ArrowParameters[?Yield, ?Await] [no LineTerminator here] =>
//        ConciseBody[?In]
expression
: This
| identifierReference
// | NullLiteral
// | BooleanLiteral
| NumericLiteral
// | StringLiteral
| arrayLiteral
| OpenBrace (propertyDefinitionList Comma?)? CloseBrace
| Function bindingIdentifier? OpenParen formalParameters CloseParen
  OpenBrace functionBody CloseBrace
// | classExpression
// | generatorExpression
// | asyncFunctionExpression
// | RegularExpressionLiteral
// | templateLiteral
| OpenParen expressionList CloseParen
| expression arguments
| expression OpenBracket expressionList CloseBracket
| New expression arguments?
| unaryOperator expression
| arrowParameters {this.noLineTerminatorHere()}? FatArrow conciseBody
| expression Assign expression
;

unaryOperator
: (Delete|Void|Typeof|PlusPlus|MinusMinus|Plus|Minus|BitNot|Not)
;
