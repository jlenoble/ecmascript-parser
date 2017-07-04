/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar IfStatement;

// IfStatement[Yield, Await, Return]:
//    if ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return] else Statement[?Yield, ?Await, ?Return]
//    if ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
ifStatement
: If OpenParen expression_In CloseParen statement (Else statement)?
;
