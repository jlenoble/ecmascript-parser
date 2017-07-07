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
/* primaryExpression
: This
| identifierReference
| literal
| arrayLiteral
| objectLiteral
// | functionExpression
// | classExpression
// | generatorExpression
// | asyncFunctionExpression
// | RegularExpressionLiteral
// | templateLiteral
// | coverParenthesizedExpressionAndArrowParameterList
;*/

// Literal:
//    NullLiteral
//    BooleanLiteral
//    NumericLiteral
//    StringLiteral
/* literal
: NullLiteral
| BooleanLiteral
| NumericLiteral
| StringLiteral
;*/
