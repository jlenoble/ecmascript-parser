/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar IfStatement;

// IfStatement[Yield, Await, Return]:
//    if ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return] else Statement[?Yield, ?Await, ?Return]
//    if ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
ifStatement
: If OpenParen expressionList CloseParen statement (Else statement)?
;
