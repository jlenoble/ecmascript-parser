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
: Do statement While OpenParen expression_In CloseParen eos
| While OpenParen expression_In CloseParen statement
| For OpenParen expression? SemiColon expression_In? SemiColon expression_In? CloseParen statement
| For OpenParen Var variableDeclarationList SemiColon expression_In? SemiColon expression_In? CloseParen statement
| For OpenParen lexicalDeclaration expression_In? SemiColon expression_In? CloseParen statement
| For OpenParen leftHandSideExpression In expression_In CloseParen statement
| For OpenParen Var forBinding In expression_In CloseParen statement
| For OpenParen forDeclaration In expression_In CloseParen statement
| For OpenParen leftHandSideExpression Of assignmentExpression_In CloseParen statement
| For OpenParen Var forBinding Of assignmentExpression_In CloseParen statement
| For OpenParen forDeclaration Of assignmentExpression_In CloseParen statement
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
