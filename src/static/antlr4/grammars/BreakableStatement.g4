/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar BreakableStatement;

// BreakableStatement[Yield, Await, Return]:
//    IterationStatement[?Yield, ?Await, ?Return]
//    SwitchStatement[?Yield, ?Await, ?Return]
breakableStatement
: iterationStatement
/*| switchStatement*/
;
/*breakableStatement_Yield
: iterationStatement_Yield
| switchStatement_Yield
;
breakableStatement_Await
: iterationStatement_Await
| switchStatement_Await
;
breakableStatement_Yield_Await
: iterationStatement_Yield_Await
| switchStatement_Yield_Await
;
breakableStatement_Return
: iterationStatement_Return
| switchStatement_Return
;
breakableStatement_Yield_Return
: iterationStatement_Yield_Return
| switchStatement_Yield_Return
;
breakableStatement_Await_Return
: iterationStatement_Await_Return
| switchStatement_Await_Return
;
breakableStatement_Yield_Await_Return
: iterationStatement_Yield_Await_Return
| switchStatement_Yield_Await_Return
;*/

// ContinueStatement[Yield, Await]:
// continue ;
// continue [no LineTerminator here] LabelIdentifier[?Yield, ?Await] ;
continueStatement
: Continue labelIdentifier eos
| Continue eos
;
/*continueStatement_Yield
: Continue eos
| Continue labelIdentifier_Yield eos
;
continueStatement_Await
: Continue eos
| Continue labelIdentifier_Await eos
;
continueStatement_Yield_Await
: Continue eos
| Continue labelIdentifier_Yield_Await eos
;*/

// BreakStatement[Yield, Await]:
//    break ;
//    break [no LineTerminator here] LabelIdentifier[?Yield, ?Await] ;
breakStatement
: Break labelIdentifier eos
| Break eos
;
/*breakStatement_Yield
: Break eos
| Break labelIdentifier_Yield eos
;
breakStatement_Await
: Break eos
| Break labelIdentifier_Await eos
;
breakStatement_Yield_Await
: Break eos
| Break labelIdentifier_Yield_Await eos
;*/
