/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar VariableStatement;

// VariableStatement[Yield, Await]:
//    var VariableDeclarationList[+In, ?Yield, ?Await] ;
variableStatement
: Var variableDeclarationList_In eos
;
/*variableStatement_Yield
: Var variableDeclarationList_In_Yield
;
variableStatement_Await
: Var variableDeclarationList_In_Await
;
variableStatement_Yield_Await
: Var variableDeclarationList_In_Yield_Await
;*/

// VariableDeclarationList[In, Yield, Await]:
//    VariableDeclaration[?In, ?Yield, ?Await]
//    VariableDeclarationList[?In, ?Yield, ?Await] , VariableDeclaration[?In, ?Yield, ?Await]
variableDeclarationList
: variableDeclaration (Comma variableDeclaration)*
;
variableDeclarationList_In
: variableDeclaration_In (Comma variableDeclaration_In)*
;
/*variableDeclarationList_Yield
: variableDeclaration_Yield (Comma variableDeclaration_Yield)*
;
variableDeclarationList_Await
: variableDeclaration_Await (Comma variableDeclaration_Await)*
;
variableDeclarationList_Yield_Await
: variableDeclaration_Yield_Await (Comma variableDeclaration_Yield_Await)*
;
variableDeclarationList_In_Yield
: variableDeclaration_In_Yield (Comma variableDeclaration_In_Yield)*
;
variableDeclarationList_In_Await
: variableDeclaration_In_Await (Comma variableDeclaration_In_Await)*
;
variableDeclarationList_In_Yield_Await
: variableDeclaration_In_Yield_Await (Comma variableDeclaration_In_Yield_Await)*
;*/

// VariableDeclaration[In, Yield, Await]:
//    BindingIdentifier[?Yield, ?Await] Initializer[?In, ?Yield, ?Await][opt]
//    BindingPattern[?Yield, ?Await] Initializer[?In, ?Yield, ?Await]
variableDeclaration
: bindingIdentifier initializer?
| bindingPattern initializer
;
variableDeclaration_In
: bindingIdentifier initializer_In?
| bindingPattern initializer_In
;
/*variableDeclaration_Yield
: bindingIdentifier_Yield initializer_Yield?
| bindingPattern_Yield initializer_Yield
;
variableDeclaration_Await
: bindingIdentifier_Await initializer_Await?
| bindingPattern_Await initializer_Await
;
variableDeclaration_Yield_Await
: bindingIdentifier_Yield_Await initializer_Yield_Await?
| bindingPattern_Yield_Await initializer_Yield_Await
;
variableDeclaration_In_Yield
: bindingIdentifier_Yield initializer_In_Yield?
| bindingPattern_Yield initializer_In_Yield
;
variableDeclaration_In_Await
: bindingIdentifier_Await initializer_In_Await?
| bindingPattern_Await initializer_In_Await
;
variableDeclaration_In_Yield_Await
: bindingIdentifier_Yield_Await initializer_In_Yield_Await?
| bindingPattern_Yield_Await initializer_In_Yield_Await
;*/
