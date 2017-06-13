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
: /*coverCallExpressionAndAsyncArrowHead
| superCall
| */callExpression arguments
| callExpression OpenBracket expression_In CloseBracket
| callExpression Dot IdentifierName
/*| callExpression templateLiteral*/
;
callExpression_Yield
: /*coverCallExpressionAndAsyncArrowHead_Yield
| superCall_Yield
| */callExpression_Yield arguments_Yield
| callExpression_Yield OpenBracket expression_In_Yield CloseBracket
| callExpression_Yield Dot IdentifierName
/*| callExpression_Yield templateLiteral_Yield*/
;
callExpression_Await
: /*coverCallExpressionAndAsyncArrowHead_Await
| superCall_Await
| */callExpression_Await arguments_Await
| callExpression_Await OpenBracket expression_In_Await CloseBracket
| callExpression_Await Dot IdentifierName
/*| callExpression_Await templateLiteral_Await*/
;
callExpression_Yield_Await
: /*coverCallExpressionAndAsyncArrowHead_Yield_Await
| superCall_Yield_Await
| */callExpression_Yield_Await arguments_Yield_Await
| callExpression_Yield_Await OpenBracket expression_In_Yield_Await CloseBracket
| callExpression_Yield_Await Dot IdentifierName
/*| callExpression_Yield_Await templateLiteral_Yield_Await*/
;

// Arguments[Yield, Await]:
//    ( )
//    ( ArgumentList[?Yield, ?Await] )
//    ( ArgumentList[?Yield, ?Await] , )
arguments
: OpenParen CloseParen
| OpenParen argumentList Comma? CloseParen
;
arguments_Yield
: OpenParen CloseParen
| OpenParen argumentList_Yield Comma? CloseParen
;
arguments_Await
: OpenParen CloseParen
| OpenParen argumentList_Await Comma? CloseParen
;
arguments_Yield_Await
: OpenParen CloseParen
| OpenParen argumentList_Yield_Await Comma? CloseParen
;

// ArgumentList[Yield, Await]:
//    AssignmentExpression[+In, ?Yield, ?Await]
//    ... AssignmentExpression[+In, ?Yield, ?Await]
//    ArgumentList[?Yield, ?Await] , AssignmentExpression[+In, ?Yield, ?Await]
//    ArgumentList[?Yield, ?Await] , ... AssignmentExpression[+In, ?Yield, ?Await]
argumentList
: Spread? assignmentExpression_In (Comma Spread? assignmentExpression_In)*
;
argumentList_Yield
: Spread? assignmentExpression_In_Yield (Comma Spread? assignmentExpression_In_Yield)*
;
argumentList_Await
: Spread? assignmentExpression_In_Await (Comma Spread? assignmentExpression_In_Await)*
;
argumentList_Yield_Await
: Spread? assignmentExpression_In_Yield_Await (Comma Spread? assignmentExpression_In_Yield_Await)*
;
