/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar VariableStatement;

// VariableStatement[Yield, Await]:
//    var VariableDeclarationList[+In, ?Yield, ?Await] ;
variableStatement
: Var variableDeclarationList_In eos
;

// VariableDeclarationList[In, Yield, Await]:
//    VariableDeclaration[?In, ?Yield, ?Await]
//    VariableDeclarationList[?In, ?Yield, ?Await] , VariableDeclaration[?In, ?Yield, ?Await]
variableDeclarationList
: variableDeclaration (Comma variableDeclaration)*
;
variableDeclarationList_In
: variableDeclaration_In (Comma variableDeclaration_In)*
;

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
