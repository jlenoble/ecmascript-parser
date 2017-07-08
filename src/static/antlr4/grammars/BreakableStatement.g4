/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar BreakableStatement;

// BreakableStatement[Yield, Await, Return]:
//    IterationStatement[?Yield, ?Await, ?Return]
//    SwitchStatement[?Yield, ?Await, ?Return]
breakableStatement
: iterationStatement
| switchStatement
;

// ContinueStatement[Yield, Await]:
// continue ;
// continue [no LineTerminator here] LabelIdentifier[?Yield, ?Await] ;
/* continueStatement
: Continue labelIdentifier eos
| Continue eos
;*/

// BreakStatement[Yield, Await]:
//    break ;
//    break [no LineTerminator here] LabelIdentifier[?Yield, ?Await] ;
breakStatement
: Break {this.noLineTerminatorHere()}? labelIdentifier eos
| Break eos
;
