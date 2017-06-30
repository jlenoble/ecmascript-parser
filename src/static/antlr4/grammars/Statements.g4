/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

// A.3 Statements
grammar Statements;
import
  BindingElement,
  /*BindingPattern,*/
  LexicalDeclaration,
  Declaration,
  IterationStatement,
  BreakableStatement/*,
  BlockStatement*/,
  VariableStatement;

// Statement[Yield, Await, Return]:
//    BlockStatement[?Yield, ?Await, ?Return]
//    VariableStatement[?Yield, ?Await]
//    EmptyStatement
//    ExpressionStatement[?Yield, ?Await]
//    IfStatement[?Yield, ?Await, ?Return]
//    BreakableStatement[?Yield, ?Await, ?Return]
//    ContinueStatement[?Yield, ?Await]
//    BreakStatement[?Yield, ?Await]
//    [+Return] ReturnStatement[?Yield, ?Await]
//    WithStatement[?Yield, ?Await, ?Return]
//    LabelledStatement[?Yield, ?Await, ?Return]
//    ThrowStatement[?Yield, ?Await]
//    TryStatement[?Yield, ?Await, ?Return]
//    DebuggerStatement
statement
: /*blockStatement
| */variableStatement
| emptyStatement
| expressionStatement/*
| ifStatement*/
| breakableStatement
/*| continueStatement
| breakStatement
| withStatement
| labelledStatement
| throwStatement
| tryStatement
| debuggerStatement*/
;
/*statement_Yield
: blockStatement_Yield
| variableStatement_Yield
| emptyStatement
| expressionStatement_Yield
| ifStatement_Yield
| breakableStatement_Yield
| continueStatement_Yield
| breakStatement_Yield
| withStatement_Yield
| labelledStatement_Yield
| throwStatement_Yield
| tryStatement_Yield
| debuggerStatement
;
statement_Await
: blockStatement_Await
| variableStatement_Await
| emptyStatement
| expressionStatement_Await
| ifStatement_Await
| breakableStatement_Await
| continueStatement_Await
| breakStatement_Await
| withStatement_Await
| labelledStatement_Await
| throwStatement_Await
| tryStatement_Await
| debuggerStatement
;
statement_Yield_Await
: blockStatement_Yield_Await
| variableStatement_Yield_Await
| emptyStatement
| expressionStatement_Yield_Await
| ifStatement_Yield_Await
| breakableStatement_Yield_Await
| continueStatement_Yield_Await
| breakStatement_Yield_Await
| withStatement_Yield_Await
| labelledStatement_Yield_Await
| throwStatement_Yield_Await
| tryStatement_Yield_Await
| debuggerStatement
;*/
statement_Return
: /*blockStatement_Return
| variableStatement
| emptyStatement
| */expressionStatement/*
| ifStatement_Return
| breakableStatement_Return
| continueStatement
| breakStatement
| returnStatement
| withStatement_Return
| labelledStatement_Return
| throwStatement
| tryStatement_Return
| debuggerStatement*/
;
/*statement_Yield_Return
: blockStatement_Yield_Return
| variableStatement_Yield
| emptyStatement
| expressionStatement_Yield
| ifStatement_Yield_Return
| breakableStatement_Yield_Return
| continueStatement_Yield
| breakStatement_Yield
| returnStatement_Yield
| withStatement_Yield_Return
| labelledStatement_Yield_Return
| throwStatement_Yield
| tryStatement_Yield_Return
| debuggerStatement
;
statement_Await_Return
: blockStatement_Await_Return
| variableStatement_Await
| emptyStatement
| expressionStatement_Await
| ifStatement_Await_Return
| breakableStatement_Await_Return
| continueStatement_Await
| breakStatement_Await
| returnStatement_Await
| withStatement_Await_Return
| labelledStatement_Await_Return
| throwStatement_Await
| tryStatement_Await_Return
| debuggerStatement
;
statement_Yield_Await_Return
: blockStatement_Yield_Await_Return
| variableStatement_Yield_Await
| emptyStatement
| expressionStatement_Yield_Await
| ifStatement_Yield_Await_Return
| breakableStatement_Yield_Await_Return
| continueStatement_Yield_Await
| breakStatement_Yield_Await
| returnStatement_Yield_Await
| withStatement_Yield_Await_Return
| labelledStatement_Yield_Await_Return
| throwStatement_Yield_Await
| tryStatement_Yield_Await_Return
| debuggerStatement
;*/

// StatementList[Yield, Await, Return]:
//    StatementListItem[?Yield, ?Await, ?Return]
//    StatementList[?Yield, ?Await, ?Return] StatementListItem[?Yield, ?Await, ?Return]
statementList
: (statementListItem eos)+
;
/*statementList_Yield
: (statementListItem_Yield eos)+
;
statementList_Await
: (statementListItem_Await eos)+
;
statementList_Yield_Await
: (statementListItem_Yield_Await eos)+
;*/
statementList_Return
: (statementListItem_Return eos)+
;
/*statementList_Yield_Return
: (statementListItem_Yield_Return eos)+
;
statementList_Await_Return
: (statementListItem_Await_Return eos)+
;
statementList_Yield_Await_Return
: (statementListItem_Yield_Await_Return eos)+
;*/

// StatementListItem[Yield, Await, Return]:
//    Statement[?Yield, ?Await, ?Return]
//    Declaration[?Yield, ?Await]
statementListItem
: statement
| declaration
;
/*statementListItem_Yield
: statement_Yield
| declaration_Yield
;
statementListItem_Await
: statement_Await
| declaration_Await
;
statementListItem_Yield_Await
: statement_Yield_Await
| declaration_Yield_Await
;*/
statementListItem_Return
: statement_Return
| declaration
;
/*statementListItem_Yield_Return
: statement_Yield_Return
| declaration_Yield
;
statementListItem_Await_Return
: statement_Await_Return
| declaration_Await
;
statementListItem_Yield_Await_Return
: statement_Yield_Await_Return
| declaration_Yield_Await
;*/

// EmptyStatement:
//    ;
emptyStatement
: SemiColon
;

// ExpressionStatement[Yield, Await]:
//    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }] Expression[+In, ?Yield, ?Await];
expressionStatement
: expression_In
;
/*expressionStatement_Yield
: expression_In_Yield
;
expressionStatement_Await
: expression_In_Await
;
expressionStatement_Yield_Await
: expression_In_Yield_Await
;*/
