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
: /*Do statement While OpenParen expression_In CloseParen SemiColon
| While OpenParen expression_In CloseParen statement
| For OpenParen expression? SemiColon expression_In? SemiColon expression_In? CloseParen statement
| For OpenParen Var variableDeclarationList SemiColon expression_In? SemiColon expression_In? CloseParen statement
| */For OpenParen lexicalDeclaration expression_In? SemiColon expression_In? CloseParen statement
/*| For OpenParen leftHandSideExpression In expression_In CloseParen statement
| For OpenParen Var forBinding In expression_In CloseParen statement
| For OpenParen forDeclaration In expression_In CloseParen statement
| For OpenParen leftHandSideExpression Of assignmentExpression_In CloseParen statement
| For OpenParen Var forBinding Of assignmentExpression_In CloseParen statement
| For OpenParen forDeclaration Of assignmentExpression_In CloseParen statement*/
;
/*iterationStatement_Yield
: Do statement_Yield While OpenParen expression_In_Yield CloseParen SemiColon
| While OpenParen expression_In_Yield CloseParen statement_Yield
| For OpenParen expression_Yield? SemiColon expression_In_Yield? SemiColon expression_In_Yield? CloseParen statement_Yield
| For OpenParen Var variableDeclarationList_Yield SemiColon expression_In_Yield? SemiColon expression_In_Yield? CloseParen statement_Yield
| For OpenParen lexicalDeclaration_Yield expression_In_Yield? SemiColon expression_In_Yield? CloseParen statement_Yield
| For OpenParen leftHandSideExpression_Yield In expression_In_Yield CloseParen statement_Yield
| For OpenParen Var forBinding_Yield In expression_In_Yield CloseParen statement_Yield
| For OpenParen forDeclaration_Yield In expression_In_Yield CloseParen statement_Yield
| For OpenParen leftHandSideExpression_Yield Of assignmentExpression_In_Yield CloseParen statement_Yield
| For OpenParen Var forBinding_Yield Of assignmentExpression_In_Yield CloseParen statement_Yield
| For OpenParen forDeclaration_Yield Of assignmentExpression_In_Yield CloseParen statement_Yield
;
iterationStatement_Await
: Do statement_Await While OpenParen expression_In_Await CloseParen SemiColon
| While OpenParen expression_In_Await CloseParen statement_Await
| For OpenParen expression_Await? SemiColon expression_In_Await? SemiColon expression_In_Await? CloseParen statement_Await
| For OpenParen Var variableDeclarationList_Await SemiColon expression_In_Await? SemiColon expression_In_Await? CloseParen statement_Await
| For OpenParen lexicalDeclaration_Await expression_In_Await? SemiColon expression_In_Await? CloseParen statement_Await
| For OpenParen leftHandSideExpression_Await In expression_In_Await CloseParen statement_Await
| For OpenParen Var forBinding_Await In expression_In_Await CloseParen statement_Await
| For OpenParen forDeclaration_Await In expression_In_Await CloseParen statement_Await
| For OpenParen leftHandSideExpression_Await Of assignmentExpression_In_Await CloseParen statement_Await
| For OpenParen Var forBinding_Await Of assignmentExpression_In_Await CloseParen statement_Await
| For OpenParen forDeclaration_Await Of assignmentExpression_In_Await CloseParen statement_Await
;
iterationStatement_Yield_Await
: Do statement_Yield_Await While OpenParen expression_In_Yield_Await CloseParen SemiColon
| While OpenParen expression_In_Yield_Await CloseParen statement_Yield_Await
| For OpenParen expression_Yield_Await? SemiColon expression_In_Yield_Await? SemiColon expression_In_Yield_Await? CloseParen statement_Yield_Await
| For OpenParen Var variableDeclarationList_Yield_Await SemiColon expression_In_Yield_Await? SemiColon expression_In_Yield_Await? CloseParen statement_Yield_Await
| For OpenParen lexicalDeclaration_Yield_Await expression_In_Yield_Await? SemiColon expression_In_Yield_Await? CloseParen statement_Yield_Await
| For OpenParen leftHandSideExpression_Yield_Await In expression_In_Yield_Await CloseParen statement_Yield_Await
| For OpenParen Var forBinding_Yield_Await In expression_In_Yield_Await CloseParen statement_Yield_Await
| For OpenParen forDeclaration_Yield_Await In expression_In_Yield_Await CloseParen statement_Yield_Await
| For OpenParen leftHandSideExpression_Yield_Await Of assignmentExpression_In_Yield_Await CloseParen statement_Yield_Await
| For OpenParen Var forBinding_Yield_Await Of assignmentExpression_In_Yield_Await CloseParen statement_Yield_Await
| For OpenParen forDeclaration_Yield_Await Of assignmentExpression_In_Yield_Await CloseParen statement_Yield_Await
;
iterationStatement_Return
: Do statement_Return While OpenParen expression_In CloseParen SemiColon
| While OpenParen expression_In CloseParen statement_Return
| For OpenParen expression? SemiColon expression_In? SemiColon expression_In? CloseParen statement_Return
| For OpenParen Var variableDeclarationList SemiColon expression_In? SemiColon expression_In? CloseParen statement_Return
| For OpenParen lexicalDeclaration expression_In? SemiColon expression_In? CloseParen statement_Return
| For OpenParen leftHandSideExpression In expression_In CloseParen statement_Return
| For OpenParen Var forBinding In expression_In CloseParen statement_Return
| For OpenParen forDeclaration In expression_In CloseParen statement_Return
| For OpenParen leftHandSideExpression Of assignmentExpression_In CloseParen statement_Return
| For OpenParen Var forBinding Of assignmentExpression_In CloseParen statement_Return
| For OpenParen forDeclaration Of assignmentExpression_In CloseParen statement_Return
;
iterationStatement_Yield_Return
: Do statement_Yield_Return While OpenParen expression_In_Yield CloseParen SemiColon
| While OpenParen expression_In_Yield CloseParen statement_Yield_Return
| For OpenParen expression_Yield? SemiColon expression_In_Yield? SemiColon expression_In_Yield? CloseParen statement_Yield_Return
| For OpenParen Var variableDeclarationList_Yield SemiColon expression_In_Yield? SemiColon expression_In_Yield? CloseParen statement_Yield_Return
| For OpenParen lexicalDeclaration_Yield expression_In_Yield? SemiColon expression_In_Yield? CloseParen statement_Yield_Return
| For OpenParen leftHandSideExpression_Yield In expression_In_Yield CloseParen statement_Yield_Return
| For OpenParen Var forBinding_Yield In expression_In_Yield CloseParen statement_Yield_Return
| For OpenParen forDeclaration_Yield In expression_In_Yield CloseParen statement_Yield_Return
| For OpenParen leftHandSideExpression_Yield Of assignmentExpression_In_Yield CloseParen statement_Yield_Return
| For OpenParen Var forBinding_Yield Of assignmentExpression_In_Yield CloseParen statement_Yield_Return
| For OpenParen forDeclaration_Yield Of assignmentExpression_In_Yield CloseParen statement_Yield_Return
;
iterationStatement_Await_Return
: Do statement_Await_Return While OpenParen expression_In_Await CloseParen SemiColon
| While OpenParen expression_In_Await CloseParen statement_Await_Return
| For OpenParen expression_Await? SemiColon expression_In_Await? SemiColon expression_In_Await? CloseParen statement_Await_Return
| For OpenParen Var variableDeclarationList_Await SemiColon expression_In_Await? SemiColon expression_In_Await? CloseParen statement_Await_Return
| For OpenParen lexicalDeclaration_Await expression_In_Await? SemiColon expression_In_Await? CloseParen statement_Await_Return
| For OpenParen leftHandSideExpression_Await In expression_In_Await CloseParen statement_Await_Return
| For OpenParen Var forBinding_Await In expression_In_Await CloseParen statement_Await_Return
| For OpenParen forDeclaration_Await In expression_In_Await CloseParen statement_Await_Return
| For OpenParen leftHandSideExpression_Await Of assignmentExpression_In_Await CloseParen statement_Await_Return
| For OpenParen Var forBinding_Await Of assignmentExpression_In_Await CloseParen statement_Await_Return
| For OpenParen forDeclaration_Await Of assignmentExpression_In_Await CloseParen statement_Await_Return
;
iterationStatement_Yield_Await_Return
: Do statement_Yield_Await_Return While OpenParen expression_In_Yield_Await CloseParen SemiColon
| While OpenParen expression_In_Yield_Await CloseParen statement_Yield_Await_Return
| For OpenParen expression_Yield_Await? SemiColon expression_In_Yield_Await? SemiColon expression_In_Yield_Await? CloseParen statement_Yield_Await_Return
| For OpenParen Var variableDeclarationList_Yield_Await SemiColon expression_In_Yield_Await? SemiColon expression_In_Yield_Await? CloseParen statement_Yield_Await_Return
| For OpenParen lexicalDeclaration_Yield_Await expression_In_Yield_Await? SemiColon expression_In_Yield_Await? CloseParen statement_Yield_Await_Return
| For OpenParen leftHandSideExpression_Yield_Await In expression_In_Yield_Await CloseParen statement_Yield_Await_Return
| For OpenParen Var forBinding_Yield_Await In expression_In_Yield_Await CloseParen statement_Yield_Await_Return
| For OpenParen forDeclaration_Yield_Await In expression_In_Yield_Await CloseParen statement_Yield_Await_Return
| For OpenParen leftHandSideExpression_Yield_Await Of assignmentExpression_In_Yield_Await CloseParen statement_Yield_Await_Return
| For OpenParen Var forBinding_Yield_Await Of assignmentExpression_In_Yield_Await CloseParen statement_Yield_Await_Return
| For OpenParen forDeclaration_Yield_Await Of assignmentExpression_In_Yield_Await CloseParen statement_Yield_Await_Return
;*/

// ForDeclaration[Yield, Await]:
//    LetOrConst ForBinding[?Yield, ?Await]
forDeclaration
: letOrConst forBinding
;
/*forDeclaration_Yield
: letOrConst forBinding_Yield
;
forDeclaration_Await
: letOrConst forBinding_Await
;
forDeclaration_Yield_Await
: letOrConst forBinding_Yield_Await
;*/

// ForBinding[Yield, Await]:
//    BindingIdentifier[?Yield, ?Await]
//    BindingPattern[?Yield, ?Await]
forBinding
: bindingIdentifier
/*| bindingPattern*/
;
/*forBinding_Yield
: bindingIdentifier_Yield
| bindingPattern_Yield
;
forBinding_Await
: bindingIdentifier_Await
| bindingPattern_Await
;
forBinding_Yield_Await
: bindingIdentifier_Yield_Await
| bindingPattern_Yield_Await
;*/
