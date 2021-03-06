/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar IterationStatement;

//IterationStatement[Yield, Await, Return]:
//    do statement[?Yield, ?Await, ?Return] while ( Expression[+In, ?Yield, ?Await] ) ;
//    while ( Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
//    for ( [lookahead ∉ { let [ }] Expression[~In, ?Yield, ?Await][opt] ; Expression[+In, ?Yield, ?Await][opt] ; Expression[+In, ?Yield, ?Await][opt] ) Statement[?Yield, ?Await, ?Return]
//    for ( var VariableDeclarationList[~In, ?Yield, ?Await] ; Expression[+In, ?Yield, ?Await][opt] ; Expression[+In, ?Yield, ?Await][opt] ) Statement[?Yield, ?Await, ?Return]
//    for ( LexicalDeclaration[~In, ?Yield, ?Await] Expression[+In, ?Yield, ?Await][opt] ; Expression[+In, ?Yield, ?Await][opt] ) Statement[?Yield, ?Await, ?Return]
//    for ( [lookahead ∉ { let [ }] LeftHandSideExpression[?Yield, ?Await] in Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
//    for ( var ForBinding[?Yield, ?Await] in Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
//    for ( ForDeclaration[?Yield, ?Await] in Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
//    for ( [lookahead ≠ let] LeftHandSideExpression[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
//    for ( var ForBinding[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
//    for ( ForDeclaration[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
iterationStatement
: Do statement While OpenParen expressionList CloseParen
  {this.enableDoWhileEos()} eos {this.disableDoWhileEos()}
| While OpenParen expressionList CloseParen statement
| For OpenParen expressionList? SemiColon expressionList? SemiColon expressionList? CloseParen statement
| For OpenParen Var variableDeclarationList SemiColon
  expressionList? SemiColon expressionList? CloseParen statement
| For OpenParen lexicalDeclaration expressionList? SemiColon
  expressionList? CloseParen statement
| For OpenParen expression In expressionList CloseParen statement
| For OpenParen Var forBinding In expressionList CloseParen statement
| For OpenParen forDeclaration In expressionList CloseParen statement
| For OpenParen expression Of expressionList CloseParen statement
| For OpenParen Var forBinding Of expressionList CloseParen statement
| For OpenParen forDeclaration Of expressionList CloseParen statement
;

// ForDeclaration[Yield, Await]:
//    LetOrConst ForBinding[?Yield, ?Await]
forDeclaration
: letOrConst forBinding
;

// ForBinding[Yield, Await]:
//    BindingIdentifier[?Yield, ?Await]
//    BindingPattern[?Yield, ?Await]
forBinding
: bindingIdentifier
| bindingPattern
;
