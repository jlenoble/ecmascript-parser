/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

// A.3 Statements
grammar Statements;
import
  BindingElement,
  // BindingPattern,
  // LexicalDeclaration,
  // Declaration,
  // TryStatement,
  // WithStatement,
  // LabelledStatement,
  // SwitchStatement,
  // IterationStatement,
  IfStatement,
  // BreakableStatement,
  // BlockStatement,
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
: /* blockStatement
| */variableStatement
// | emptyStatement
| expressionStatement
| ifStatement
// | breakableStatement
// | continueStatement
// | breakStatement
| {this.canReturn()}? returnStatement
// | withStatement
// | labelledStatement
// | throwStatement
// | tryStatement
// | debuggerStatement
;

// StatementList[Yield, Await, Return]:
//    StatementListItem[?Yield, ?Await, ?Return]
//    StatementList[?Yield, ?Await, ?Return] StatementListItem[?Yield, ?Await, ?Return]
statementList
: statementListItem+
;

// StatementListItem[Yield, Await, Return]:
//    Statement[?Yield, ?Await, ?Return]
//    Declaration[?Yield, ?Await]
statementListItem
: /* declaration
| */statement
;

// EmptyStatement:
//    ;
emptyStatement
: SemiColon
;

// ReturnStatement[Yield, Await]:
//    return ;
//    return [no LineTerminator here] Expression[+In, ?Yield, ?Await] ;
returnStatement
: Return {this.noLineTerminatorHere()}? expression? eos
;

// DebuggerStatement:
//    debugger ;
debuggerStatement
: Debugger eos
;

// ExpressionStatement[Yield, Await]:
//    [lookahead ∉ { {, function, async [no LineTerminator here] function,
//        class, let [ }] Expression[+In, ?Yield, ?Await] ;
expressionStatement
: {this.isValidExpressionStatement()}? expressionList eos
;
