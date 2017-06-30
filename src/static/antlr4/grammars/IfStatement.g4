/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar IfStatement;

// IfStatement[Yield, Await, Return]:
//    if ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return] else Statement[?Yield, ?Await, ?Return]
//    if ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
ifStatement
: If OpenParen expression_In CloseParen statement (Else statement)?
;
/*ifStatement_Yield
: If OpenParen expression_In_Yield CloseParen statement_Yield (Else statement_Yield)?
;
ifStatement_Await
: If OpenParen expression_In_Await CloseParen statement_Await (Else statement_Await)?
;
ifStatement_Yield_Await
: If OpenParen expression_In_Yield_Await CloseParen statement_Yield_Await (Else statement_Yield_Await)?
;
ifStatement_Return
: If OpenParen expression_In CloseParen statement_Return (Else statement_Return)?
;
ifStatement_Yield_Return
: If OpenParen expression_In_Yield CloseParen statement_Yield_Return (Else statement_Yield_Return)?
;
ifStatement_Await_Return
: If OpenParen expression_In_Await CloseParen statement_Await_Return (Else statement_Await_Return)?
;
ifStatement_Yield_Await_Return
: If OpenParen expression_In_Yield_Await CloseParen statement_Yield_Await_Return (Else statement_Yield_Await_Return)?
;*/
