/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar WithStatement;

// WithStatement[Yield, Await, Return]:
//    with ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
withStatement
: With OpenParen expression_In CloseParen statement
;
/*withStatement_Yield
: With OpenParen expression_In_Yield CloseParen statement_Yield
;
withStatement_Await
: With OpenParen expression_In_Await CloseParen statement_Await
;
withStatement_Yield_Await
: With OpenParen expression_In_Yield_Await CloseParen statement_Yield_Await
;
withStatement_Return
: With OpenParen expression_In CloseParen statement_Return
;
withStatement_Yield_Return
: With OpenParen expression_In_Yield CloseParen statement_Yield_Return
;
withStatement_Await_Return
: With OpenParen expression_In_Await CloseParen statement_Await_Return
;
withStatement_Yield_Await_Return
: With OpenParen expression_In_Yield_Await CloseParen statement_Yield_Await_Return
;*/
