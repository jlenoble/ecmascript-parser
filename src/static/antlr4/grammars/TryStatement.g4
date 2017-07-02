/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar TryStatement;

// ThrowStatement[Yield, Await]:
// throw [no LineTerminator here] Expression[+In, ?Yield, ?Await] ;
throwStatement
: Throw expression_In eos
;
/*throwStatement_Yield
: Throw expression_In_Yield eos
;
throwStatement_Await
: Throw expression_In_Await eos
;
throwStatement_Yield_Await
: Throw expression_In_Yield_Await eos
;*/

// TryStatement[Yield, Await, Return]:
//    try Block[?Yield, ?Await, ?Return] Catch[?Yield, ?Await, ?Return]
//    try Block[?Yield, ?Await, ?Return] Finally[?Yield, ?Await, ?Return]
//    try Block[?Yield, ?Await, ?Return] Catch[?Yield, ?Await, ?Return] Finally[?Yield, ?Await, ?Return]
tryStatement
: Try block catchPart
| Try block finallyPart
| Try block catchPart finallyPart
;
/*tryStatement_Yield
: Try block_Yield catchPart_Yield
| Try block_Yield finallyPart_Yield
| Try block_Yield catchPart_Yield finallyPart_Yield
;
tryStatement_Await
: Try block_Await catchPart_Await
| Try block_Await finallyPart_Await
| Try block_Await catchPart_Await finallyPart_Await
;
tryStatement_Yield_Await
: Try block_Yield_Await catchPart_Yield_Await
| Try block_Yield_Await finallyPart_Yield_Await
| Try block_Yield_Await catchPart_Yield_Await finallyPart_Yield_Await
;
tryStatement_Return
: Try block_Return catchPart_Return
| Try block_Return finallyPart_Return
| Try block_Return catchPart_Return finallyPart_Return
;
tryStatement_Yield_Return
: Try block_Yield_Return catchPart_Yield_Return
| Try block_Yield_Return finallyPart_Yield_Return
| Try block_Yield_Return catchPart_Yield_Return finallyPart_Yield_Return
;
tryStatement_Await_Return
: Try block_Await_Return catchPart_Await_Return
| Try block_Await_Return finallyPart_Await_Return
| Try block_Await_Return catchPart_Await_Return finallyPart_Await_Return
;
tryStatement_Yield_Await_Return
: Try block_Yield_Await_Return catchPart_Yield_Await_Return
| Try block_Yield_Await_Return finallyPart_Yield_Await_Return
| Try block_Yield_Await_Return catchPart_Yield_Await_Return finallyPart_Yield_Await_Return
;*/

// Catch[Yield, Await, Return]:
//    catch ( CatchParameter[?Yield, ?Await] ) Block[?Yield, ?Await, ?Return]
catchPart
: Catch OpenParen catchParameter CloseParen block
;
/*catchPart_Yield
: Catch OpenParen catchParameter_Yield CloseParen block_Yield
;
catchPart_Await
: Catch OpenParen catchParameter_Await CloseParen block_Await
;
catchPart_Yield_Await
: Catch OpenParen catchParameter_Yield_Await CloseParen block_Yield_Await
;
catchPart_Return
: Catch OpenParen catchParameter CloseParen block_Return
;
catchPart_Yield_Return
: Catch OpenParen catchParameter_Yield CloseParen block_Yield_Return
;
catchPart_Await_Return
: Catch OpenParen catchParameter_Await CloseParen block_Await_Return
;
catchPart_Yield_Await_Return
: Catch OpenParen catchParameter_Yield_Await CloseParen block_Yield_Await_Return
;*/

// Finally[Yield, Await, Return]:
//    finally Block[?Yield, ?Await, ?Return]
finallyPart
: Finally block
;
/*finallyPart_Yield
: Finally block_Yield
;
finallyPart_Await
: Finally block_Await
;
finallyPart_Yield_Await
: Finally block_Yield_Await
;
finallyPart_Return
: Finally block_Return
;
finallyPart_Yield_Return
: Finally block_Yield_Return
;
finallyPart_Await_Return
: Finally block_Await_Return
;
finallyPart_Yield_Await_Return
: Finally block_Yield_Await_Return
;*/

// CatchParameter[Yield, Await]:
//    BindingIdentifier[?Yield, ?Await]
//    BindingPattern[?Yield, ?Await]
catchParameter
: bindingIdentifier
/*| bindingPattern*/
;
/*catchParameter_Yield
: bindingIdentifier_Yield
| bindingPattern_Yield
;
catchParameter_Await
: bindingIdentifier_Await
| bindingPattern_Await
;
catchParameter_Yield_Await
: bindingIdentifier_Yield_Await
| bindingPattern_Yield_Await
;*/
