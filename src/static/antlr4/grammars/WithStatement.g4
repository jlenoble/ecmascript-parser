/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar WithStatement;

// WithStatement[Yield, Await, Return]:
//    with ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
withStatement
: With OpenParen expression_In CloseParen statement
;
