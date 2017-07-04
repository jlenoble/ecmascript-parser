/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar LabelledStatement;

// LabelledStatement[Yield, Await, Return]:
//    LabelIdentifier[?Yield, ?Await] : LabelledItem[?Yield, ?Await, ?Return]
labelledStatement
: labelIdentifier Colon labelledItem
;

// LabelledItem[Yield, Await, Return]:
//    Statement[?Yield, ?Await, ?Return]
//    FunctionDeclaration[?Yield, ?Await, ~Default]
labelledItem
: statement
| functionDeclaration
;

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
