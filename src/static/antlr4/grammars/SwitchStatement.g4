/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar SwitchStatement;

// SwitchStatement[Yield, Await, Return]:
//    switch ( Expression[+In, ?Yield, ?Await] ) CaseBlock[?Yield, ?Await, ?Return]
switchStatement
: Switch OpenParen expression_In CloseParen caseBlock
;
/*switchStatement_Yield
: Switch OpenParen expression_In_Yield CloseParen caseBlock_Yield
;
switchStatement_Await
: Switch OpenParen expression_In_Await CloseParen caseBlock_Await
;
switchStatement_Yield_Await
: Switch OpenParen expression_In_Yield_Await CloseParen caseBlock_Yield_Await
;
switchStatement_Return
: Switch OpenParen expression_In CloseParen caseBlock_Return
;
switchStatement_Yield_Return
: Switch OpenParen expression_In_Yield CloseParen caseBlock_Yield_Return
;
switchStatement_Await_Return
: Switch OpenParen expression_In_Await CloseParen caseBlock_Await_Return
;
switchStatement_Yield_Await_Return
: Switch OpenParen expression_In_Yield_Await CloseParen caseBlock_Yield_Await_Return
;*/

// CaseBlock[Yield, Await, Return]:
//    { CaseClauses[?Yield, ?Await, ?Return][opt] }
//    { CaseClauses[?Yield, ?Await, ?Return][opt] DefaultClause[?Yield, ?Await, ?Return] CaseClauses[?Yield, ?Await, ?Return][opt] }
caseBlock
: OpenBrace caseClauses? CloseBrace
| OpenBrace caseClauses? defaultClause caseClauses? CloseBrace
;
/*caseBlock_Yield
: OpenBrace caseClauses_Yield? CloseBrace
| OpenBrace caseClauses_Yield? defaultClause_Yield caseClauses_Yield? CloseBrace
;
caseBlock_Await
: OpenBrace caseClauses_Await? CloseBrace
| OpenBrace caseClauses_Await? defaultClause_Await caseClauses_Await? CloseBrace
;
caseBlock_Yield_Await
: OpenBrace caseClauses_Yield_Await? CloseBrace
| OpenBrace caseClauses_Yield_Await? defaultClause_Yield_Await caseClauses_Yield_Await? CloseBrace
;
caseBlock_Return
: OpenBrace caseClauses_Return? CloseBrace
| OpenBrace caseClauses_Return? defaultClause_Return caseClauses_Return? CloseBrace
;
caseBlock_Yield_Return
: OpenBrace caseClauses_Yield_Return? CloseBrace
| OpenBrace caseClauses_Yield_Return? defaultClause_Yield_Return caseClauses_Yield_Return? CloseBrace
;
caseBlock_Await_Return
: OpenBrace caseClauses_Await_Return? CloseBrace
| OpenBrace caseClauses_Await_Return? defaultClause_Await_Return caseClauses_Await_Return? CloseBrace
;
caseBlock_Yield_Await_Return
: OpenBrace caseClauses_Yield_Await_Return? CloseBrace
| OpenBrace caseClauses_Yield_Await_Return? defaultClause_Yield_Await_Return caseClauses_Yield_Await_Return? CloseBrace
;*/

// CaseClauses[Yield, Await, Return]:
//    CaseClause[?Yield, ?Await, ?Return]
//    CaseClauses[?Yield, ?Await, ?Return] CaseClause[?Yield, ?Await, ?Return]
caseClauses
: caseClause+
;
/*caseClauses_Yield
: caseClause_Yield+
;
caseClauses_Await
: caseClause_Await+
;
caseClauses_Yield_Await
: caseClause_Yield_Await+
;
caseClauses_Return
: caseClause_Return+
;
caseClauses_Yield_Return
: caseClause_Yield_Return+
;
caseClauses_Await_Return
: caseClause_Await_Return+
;
caseClauses_Yield_Await_Return
: caseClause_Yield_Await_Return+
;*/

// CaseClause[Yield, Await, Return]:
//    case Expression[+In, ?Yield, ?Await] : StatementList[?Yield, ?Await, ?Return][opt]
caseClause
: Case expression_In Colon statementList?
;
/*caseClause_Yield
: Case expression_In_Yield Colon statementList_Yield?
;
caseClause_Await
: Case expression_In_Await Colon statementList_Await?
;
caseClause_Yield_Await
: Case expression_In_Yield_Await Colon statementList_Yield_Await?
;
caseClause_Return
: Case expression_In Colon statementList_Return?
;
caseClause_Yield_Return
: Case expression_In_Yield Colon statementList_Yield_Return?
;
caseClause_Await_Return
: Case expression_In_Await Colon statementList_Await_Return?
;
caseClause_Yield_Await_Return
: Case expression_In_Yield_Await Colon statementList_Yield_Await_Return?
;*/

// DefaultClause[Yield, Await, Return]:
//    default : StatementList[?Yield, ?Await, ?Return][opt]
defaultClause
: Default Colon statementList?
;
/*defaultClause_Yield
: Default Colon statementList_Yield?
;
defaultClause_Await
: Default Colon statementList_Await?
;
defaultClause_Yield_Await
: Default Colon statementList_Yield_Await?
;
defaultClause_Return
: Default Colon statementList_Return?
;
defaultClause_Yield_Return
: Default Colon statementList_Yield_Return?
;
defaultClause_Await_Return
: Default Colon statementList_Await_Return?
;
defaultClause_Yield_Await_Return
: Default Colon statementList_Yield_Await_Return?
;*/
