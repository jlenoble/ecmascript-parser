/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar CoverExpressions;

// CoverParenthesizedExpressionAndArrowParameterList[Yield, Await]:
//    ( Expression[+In, ?Yield, ?Await] )
//    ( Expression[+In, ?Yield, ?Await] , )
//    ( )
//    ( ... BindingIdentifier[?Yield, ?Await] )
//    ( ... BindingPattern[?Yield, ?Await] )
//    ( Expression[+In, ?Yield, ?Await] , ... BindingIdentifier[?Yield, ?Await] )
//    ( Expression[+In, ?Yield, ?Await] , ... BindingPattern[?Yield, ?Await] )
coverParenthesizedExpressionAndArrowParameterList
: OpenParen (expressionList Comma?)? CloseParen
// | OpenParen Spread bindingIdentifier CloseParen
// | OpenParen Spread bindingPattern CloseParen
| OpenParen expressionList Comma Spread bindingIdentifier CloseParen
// | OpenParen expressionList Comma Spread bindingPattern CloseParen
;

//    When processing an instance of the production PrimaryExpression:
// CoverParenthesizedExpressionAndArrowParameterList the interpretation of
// CoverParenthesizedExpressionAndArrowParameterList is refined using the
// following grammar:
// ParenthesizedExpression[Yield, Await]:
//    ( Expression[+In, ?Yield, ?Await] )
/* parenthesizedExpression
: OpenParen expressionList CloseParen
;*/

// CoverCallExpressionAndAsyncArrowHead[Yield, Await]:
//    MemberExpression[?Yield, ?Await] Arguments[?Yield, ?Await]
/* coverCallExpressionAndAsyncArrowHead
: memberExpression arguments
;*/

// When processing an instance of the production CallExpression:CoverCallExpressionAndAsyncArrowHead the interpretation of CoverCallExpressionAndAsyncArrowHead is refined using the following grammar:
// CallMemberExpression[Yield, Await]:
//    MemberExpression[?Yield, ?Await] Arguments[?Yield, ?Await]
/*callMemberExpression
: memberExpression arguments
;*/
