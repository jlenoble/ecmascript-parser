/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar SwitchStatement;

// SwitchStatement[Yield, Await, Return]:
//    switch ( Expression[+In, ?Yield, ?Await] ) CaseBlock[?Yield, ?Await, ?Return]
switchStatement
: Switch OpenParen expressionList CloseParen caseBlock
;

// CaseBlock[Yield, Await, Return]:
//    { CaseClauses[?Yield, ?Await, ?Return][opt] }
//    { CaseClauses[?Yield, ?Await, ?Return][opt] DefaultClause[?Yield, ?Await, ?Return] CaseClauses[?Yield, ?Await, ?Return][opt] }
caseBlock
: OpenBrace caseClauses? CloseBrace
| OpenBrace caseClauses? defaultClause caseClauses? CloseBrace
;

// CaseClauses[Yield, Await, Return]:
//    CaseClause[?Yield, ?Await, ?Return]
//    CaseClauses[?Yield, ?Await, ?Return] CaseClause[?Yield, ?Await, ?Return]
caseClauses
: caseClause+
;

// CaseClause[Yield, Await, Return]:
//    case Expression[+In, ?Yield, ?Await] : StatementList[?Yield, ?Await, ?Return][opt]
caseClause
: Case expressionList Colon statementList?
;

// DefaultClause[Yield, Await, Return]:
//    default : StatementList[?Yield, ?Await, ?Return][opt]
defaultClause
: Default Colon statementList?
;
