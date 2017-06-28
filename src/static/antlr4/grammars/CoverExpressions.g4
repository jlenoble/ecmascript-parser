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
//    When processing an instance of the production PrimaryExpression:CoverParenthesizedExpressionAndArrowParameterList the interpretation of CoverParenthesizedExpressionAndArrowParameterList is refined using the following grammar:
coverParenthesizedExpressionAndArrowParameterList
: OpenParen expression_In Comma? CloseParen
| OpenParen CloseParen
/*| OpenParen Spread bindingIdentifier CloseParen
| OpenParen Spread bindingPattern CloseParen
| OpenParen expression_In Comma Spread bindingIdentifier CloseParen
| OpenParen expression_In Comma Spread bindingPattern CloseParen*/
;
/*coverParenthesizedExpressionAndArrowParameterList_Yield
: OpenParen expression_In_Yield Comma? CloseParen
| OpenParen CloseParen
| OpenParen Spread bindingIdentifier_Yield CloseParen
| OpenParen Spread bindingPattern_Yield CloseParen
| OpenParen expression_In_Yield Comma Spread bindingIdentifier_Yield CloseParen
| OpenParen expression_In_Yield Comma Spread bindingPattern_Yield CloseParen
;
coverParenthesizedExpressionAndArrowParameterList_Await
: OpenParen expression_In_Await Comma? CloseParen
| OpenParen CloseParen
| OpenParen Spread bindingIdentifier_Await CloseParen
| OpenParen Spread bindingPattern_Await CloseParen
| OpenParen expression_In_Await Comma Spread bindingIdentifier_Await CloseParen
| OpenParen expression_In_Await Comma Spread bindingPattern_Await CloseParen
;
coverParenthesizedExpressionAndArrowParameterList_Yield_Await
: OpenParen expression_In_Yield_Await Comma? CloseParen
| OpenParen CloseParen
| OpenParen Spread bindingIdentifier_Yield_Await CloseParen
| OpenParen Spread bindingPattern_Yield_Await CloseParen
| OpenParen expression_In_Yield_Await Comma Spread bindingIdentifier_Yield_Await CloseParen
| OpenParen expression_In_Yield_Await Comma Spread bindingPattern_Yield_Await CloseParen
;*/

// ParenthesizedExpression[Yield, Await]:
//    ( Expression[+In, ?Yield, ?Await] )
/*parenthesizedExpression
: OpenParen expression_In CloseParen
;
parenthesizedExpression_Yield
: OpenParen expression_In_Yield CloseParen
;
parenthesizedExpression_Await
: OpenParen expression_In_Await CloseParen
;
parenthesizedExpression_Yield_Await
: OpenParen expression_In_Yield_Await CloseParen
;*/

// CoverCallExpressionAndAsyncArrowHead[Yield, Await]:
//    MemberExpression[?Yield, ?Await] Arguments[?Yield, ?Await]
/*coverCallExpressionAndAsyncArrowHead
: memberExpression arguments
;
coverCallExpressionAndAsyncArrowHead_Yield
: memberExpression_Yield arguments_Yield
;
coverCallExpressionAndAsyncArrowHead_Await
: memberExpression_Await arguments_Await
;
coverCallExpressionAndAsyncArrowHead_Yield_Await
: memberExpression_Yield_Await arguments_Yield_Await
;*/

// When processing an instance of the production CallExpression:CoverCallExpressionAndAsyncArrowHead the interpretation of CoverCallExpressionAndAsyncArrowHead is refined using the following grammar:
// CallMemberExpression[Yield, Await]:
//    MemberExpression[?Yield, ?Await] Arguments[?Yield, ?Await]
/*callMemberExpression
: memberExpression arguments
;
callMemberExpression_Yield
: memberExpression_Yield arguments_Yield
;
callMemberExpression_Await
: memberExpression_Await arguments_Await
;
callMemberExpression_Yield_Await
: memberExpression_Yield_Await arguments_Yield_Await
;*/
