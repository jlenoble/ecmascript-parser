/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar PrimaryExpression;

// PrimaryExpression[Yield, Await]:
//    this
//    IdentifierReference[?Yield, ?Await]
//    Literal
//    ArrayLiteral[?Yield, ?Await]
//    ObjectLiteral[?Yield, ?Await]
//    FunctionExpression
//    ClassExpression[?Yield, ?Await]
//    GeneratorExpression
//    AsyncFunctionExpression
//    RegularExpressionLiteral
//    TemplateLiteral[?Yield, ?Await]
//    CoverParenthesizedExpressionAndArrowParameterList[?Yield, ?Await]
primaryExpression
: This
| identifierReference
| literal
| arrayLiteral
| objectLiteral
| classExpression
/*| generatorExpression
| asyncFunctionExpression*/
| RegularExpressionLiteral
| templateLiteral
| coverParenthesizedExpressionAndArrowParameterList
;
/*primaryExpression_Yield
: This
| identifierReference_Yield
| literal
| arrayLiteral_Yield
| objectLiteral_Yield
| functionExpression
| classExpression_Yield
| generatorExpression
| asyncFunctionExpression
| RegularExpressionLiteral
| templateLiteral_Yield
| coverParenthesizedExpressionAndArrowParameterList_Yield
;
primaryExpression_Await
: This
| identifierReference_Await
| literal
| arrayLiteral_Await
| objectLiteral_Await
| functionExpression
| classExpression_Await
| generatorExpression
| asyncFunctionExpression
| RegularExpressionLiteral
| templateLiteral_Await
| coverParenthesizedExpressionAndArrowParameterList_Await
;
primaryExpression_Yield_Await
: This
| identifierReference_Yield_Await
| literal
| arrayLiteral_Yield_Await
| objectLiteral_Yield_Await
| functionExpression
| classExpression_Yield_Await
| generatorExpression
| asyncFunctionExpression
| RegularExpressionLiteral
| templateLiteral_Yield_Await
| coverParenthesizedExpressionAndArrowParameterList_Yield_Await
;*/

// Literal:
//    NullLiteral
//    BooleanLiteral
//    NumericLiteral
//    StringLiteral
literal
: NullLiteral
| BooleanLiteral
| NumericLiteral
| StringLiteral
;
