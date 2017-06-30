/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar IfStatement;

// IfStatement[Yield, Await, Return]:
//    if ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return] else Statement[?Yield, ?Await, ?Return]
//    if ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
ifStatement
: 'if' '(' expression_In ')' statement ('else' statement)?
;
/*ifStatement_Yield
: 'if' '(' expression_In_Yield ')' statement_Yield ('else' statement_Yield)?
;
ifStatement_Await
: 'if' '(' expression_In_Await ')' statement_Await ('else' statement_Await)?
;
ifStatement_Yield_Await
: 'if' '(' expression_In_Yield_Await ')' statement_Yield_Await ('else' statement_Yield_Await)?
;
ifStatement_Return
: 'if' '(' expression_In ')' statement_Return ('else' statement_Return)?
;
ifStatement_Yield_Return
: 'if' '(' expression_In_Yield ')' statement_Yield_Return ('else' statement_Yield_Return)?
;
ifStatement_Await_Return
: 'if' '(' expression_In_Await ')' statement_Await_Return ('else' statement_Await_Return)?
;
ifStatement_Yield_Await_Return
: 'if' '(' expression_In_Yield_Await ')' statement_Yield_Await_Return ('else' statement_Yield_Await_Return)?
;*/
