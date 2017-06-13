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

functionBody
: functionStatementList
;

functionStatementList
: statementList_Return
;

statementList_Return
: (statementListItem_Return eos)+
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

objectLiteral
: OpenBrace propertyDefinitionList CloseBrace
;

propertyDefinitionList
: propertyDefinition (Comma propertyDefinition)*
;

propertyDefinition
: IdentifierName Colon NumericLiteral
/*identifierReference
| coverInitializedName
| propertyName
| propertyName Colon assignmentExpression_In
| methodDefinition*/
;

eos
: SemiColon
| {this._input.LT(1).type == ECMAScriptParser.CloseBrace}?
;
