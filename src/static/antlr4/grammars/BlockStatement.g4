/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar BlockStatement;

// BlockStatement[Yield, Await, Return]:
//    Block[?Yield, ?Await, ?Return]
blockStatement
: block
;
blockStatement_Yield
: block_Yield
;
blockStatement_Await
: block_Await
;
blockStatement_Yield_Await
: block_Yield_Await
;
blockStatement_Return
: block_Return
;
blockStatement_Yield_Return
: block_Yield_Return
;
blockStatement_Await_Return
: block_Await_Return
;
blockStatement_Yield_Await_Return
: block_Yield_Await_Return
;

// Block[Yield, Await, Return]:
//    { StatementList[?Yield, ?Await, ?Return][opt] }
block
: OpenBrace statementList? CloseBrace
;
block_Yield
: OpenBrace statementList_Yield? CloseBrace
;
block_Await
: OpenBrace statementList_Await? CloseBrace
;
block_Yield_Await
: OpenBrace statementList_Yield_Await? CloseBrace
;
block_Return
: OpenBrace statementList_Return? CloseBrace
;
block_Yield_Return
: OpenBrace statementList_Yield_Return? CloseBrace
;
block_Await_Return
: OpenBrace statementList_Await_Return? CloseBrace
;
block_Yield_Await_Return
: OpenBrace statementList_Yield_Await_Return? CloseBrace
;
