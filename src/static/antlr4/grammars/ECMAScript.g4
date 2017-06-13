grammar ECMAScript;
import
  AdditionalSyntax,
  LexicalGrammar,
  Expressions,
  Statements,
  FunctionsAndClasses;

file
: functionDeclaration EOF
| NumericLiteral EOF
;

statementList_Return
: statementListItem_Return+
;
statementList_Yield_Return
: statementListItem_Return+
;
statementList_Await_Return
: statementListItem_Return+
;
statementList_Yield_Await_Return
: statementListItem_Return+
;

statementListItem_Return
: statement_Return
//| declaration
;

statement_Return
: /*blockStatement_Return
| variableStatement
| emptyStatement
| */expressionStatement
/*| ifStatement_Return
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

expressionStatement
: StringLiteral
| objectLiteral
| OpenParen expressionStatement CloseParen
;

eos
: SemiColon
| {this._input.LT(1).type == ECMAScriptParser.CloseBrace}?
;
