/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

// A.3 Statements
grammar Statements;
import
  BindingElement,
  BindingPattern,
  LexicalDeclaration,
  Declaration,
  TryStatement,
  WithStatement,
  LabelledStatement,
  SwitchStatement,
  IterationStatement,
  IfStatement,
  BreakableStatement,
  BlockStatement,
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
: blockStatement
| variableStatement
| emptyStatement
| expressionStatement
| ifStatement
| breakableStatement
| continueStatement
| breakStatement
| {this.canReturn()}? returnStatement
| withStatement
| labelledStatement
| throwStatement
| tryStatement
| debuggerStatement
;
/*
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
/*statement_Await_Return
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
: statementListItem+
;
/*statementList_Yield
: statementListItem_Yield+
;
statementList_Await
: statementListItem_Await+
;
statementList_Yield_Await
: statementListItem_Yield_Await+
;*/
/*statementList_Await_Return
: statementListItem_Await_Return+
;
statementList_Yield_Await_Return
: statementListItem_Yield_Await_Return+
;*/

// StatementListItem[Yield, Await, Return]:
//    Statement[?Yield, ?Await, ?Return]
//    Declaration[?Yield, ?Await]
statementListItem
: declaration
| statement
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
/*statementListItem_Await_Return
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

// ReturnStatement[Yield, Await]:
//    return ;
//    return [no LineTerminator here] Expression[+In, ?Yield, ?Await] ;
returnStatement
: Return expression_In? eos
;
/*returnStatement_Await
: Return expression_In_Await? eos
;
returnStatement_Yield_Await
: Return expression_In_Yield_Await? eos
;*/

// DebuggerStatement:
//    debugger ;
debuggerStatement
: Debugger eos
;

// ExpressionStatement[Yield, Await]:
//    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }] Expression[+In, ?Yield, ?Await] ;
expressionStatement
: expression_In eos
;
/*expressionStatement_Await
: expression_In_Await
;
expressionStatement_Yield_Await
: expression_In_Yield_Await
;*/
