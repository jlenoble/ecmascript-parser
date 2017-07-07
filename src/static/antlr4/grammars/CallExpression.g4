/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar CallExpression;

// CallExpression[Yield, Await]:
//    CoverCallExpressionAndAsyncArrowHead[?Yield, ?Await]
//    SuperCall[?Yield, ?Await]
//    CallExpression[?Yield, ?Await] Arguments[?Yield, ?Await]
//    CallExpression[?Yield, ?Await] [ Expression[+In, ?Yield, ?Await] ]
//    CallExpression[?Yield, ?Await] . IdentifierName
//    CallExpression[?Yield, ?Await] TemplateLiteral[?Yield, ?Await]
callExpression
: // coverCallExpressionAndAsyncArrowHead
// | superCall
// | callExpression arguments
// | callExpression OpenBracket expressionList CloseBracket
// | callExpression Dot identifierName
// | callExpression templateLiteral
;

// SuperCall[Yield, Await]:
//    super Arguments[?Yield, ?Await]
/* superCall
: Super arguments
;*/

// Arguments[Yield, Await]:
//    ( )
//    ( ArgumentList[?Yield, ?Await] )
//    ( ArgumentList[?Yield, ?Await] , )
arguments
: OpenParen (argumentList Comma?)? CloseParen
;

// ArgumentList[Yield, Await]:
//    AssignmentExpression[+In, ?Yield, ?Await]
//    ... AssignmentExpression[+In, ?Yield, ?Await]
//    ArgumentList[?Yield, ?Await] , AssignmentExpression[+In, ?Yield, ?Await]
//    ArgumentList[?Yield, ?Await] , ... AssignmentExpression[+In, ?Yield, ?Await]
argumentList
: Spread? expressionList (Comma Spread expressionList)*
;
