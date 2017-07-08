/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar TryStatement;

// ThrowStatement[Yield, Await]:
// throw [no LineTerminator here] Expression[+In, ?Yield, ?Await] ;
throwStatement
: Throw expressionList eos
;

// TryStatement[Yield, Await, Return]:
//    try Block[?Yield, ?Await, ?Return] Catch[?Yield, ?Await, ?Return]
//    try Block[?Yield, ?Await, ?Return] Finally[?Yield, ?Await, ?Return]
//    try Block[?Yield, ?Await, ?Return] Catch[?Yield, ?Await, ?Return] Finally[?Yield, ?Await, ?Return]
tryStatement
: Try block catchPart
| Try block finallyPart
| Try block catchPart finallyPart
;

// Catch[Yield, Await, Return]:
//    catch ( CatchParameter[?Yield, ?Await] ) Block[?Yield, ?Await, ?Return]
catchPart
: Catch OpenParen catchParameter CloseParen block
;

// Finally[Yield, Await, Return]:
//    finally Block[?Yield, ?Await, ?Return]
finallyPart
: Finally block
;

// CatchParameter[Yield, Await]:
//    BindingIdentifier[?Yield, ?Await]
//    BindingPattern[?Yield, ?Await]
catchParameter
: bindingIdentifier
| bindingPattern
;
