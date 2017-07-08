/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar BlockStatement;

// BlockStatement[Yield, Await, Return]:
//    Block[?Yield, ?Await, ?Return]
blockStatement
: block
;

// Block[Yield, Await, Return]:
//    { StatementList[?Yield, ?Await, ?Return][opt] }
block
: OpenBrace statementList? CloseBrace
;
