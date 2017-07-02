/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar LabelledStatement;

// LabelledStatement[Yield, Await, Return]:
//    LabelIdentifier[?Yield, ?Await] : LabelledItem[?Yield, ?Await, ?Return]
labelledStatement
: labelIdentifier Colon labelledItem
;
/*labelledStatement_Yield
: labelIdentifier_Yield Colon labelledItem_Yield
;
labelledStatement_Await
: labelIdentifier_Await Colon labelledItem_Await
;
labelledStatement_Yield_Await
: labelIdentifier_Yield_Await Colon labelledItem_Yield_Await
;
labelledStatement_Return
: labelIdentifier Colon labelledItem_Return
;
labelledStatement_Yield_Return
: labelIdentifier_Yield Colon labelledItem_Yield_Return
;
labelledStatement_Await_Return
: labelIdentifier_Await Colon labelledItem_Await_Return
;
labelledStatement_Yield_Await_Return
: labelIdentifier_Yield_Await Colon labelledItem_Yield_Await_Return
;*/

// LabelledItem[Yield, Await, Return]:
//    Statement[?Yield, ?Await, ?Return]
//    FunctionDeclaration[?Yield, ?Await, ~Default]
labelledItem
: statement
| functionDeclaration
;
/*labelledItem_Yield
: statement_Yield
| functionDeclaration_Yield
;
labelledItem_Await
: statement_Await
| functionDeclaration_Await
;
labelledItem_Yield_Await
: statement_Yield_Await
| functionDeclaration_Yield_Await
;
labelledItem_Return
: statement_Return
| functionDeclaration
;
labelledItem_Yield_Return
: statement_Yield_Return
| functionDeclaration_Yield
;
labelledItem_Await_Return
: statement_Await_Return
| functionDeclaration_Await
;
labelledItem_Yield_Await_Return
: statement_Yield_Await_Return
| functionDeclaration_Yield_Await
;*/

/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */
// LabelIdentifier[Yield, Await]:
//    Identifier
//    [~Yield] yield
//    [~Await] await
labelIdentifier
: identifier
| Yield
| Await
;
/*labelIdentifier_Yield
: identifier
| Await
;
labelIdentifier_Await
: identifier
| Yield
;
labelIdentifier_Yield_Await
: identifier
;*/

