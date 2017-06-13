/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

// A.4 Functions and Classes
grammar FunctionsAndClasses;
import
  FormalParameter;

// FunctionDeclaration[Yield, Await, Default]:
// function BindingIdentifier[?Yield, ?Await] ( FormalParameters[~Yield, ~Await] ) { FunctionBody[~Yield, ~Await] }
// [+Default] function ( FormalParameters[~Yield, ~Await]) { FunctionBody[~Yield, ~Await] }
functionDeclaration
: Function bindingIdentifier OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
functionDeclaration_Yield
: Function bindingIdentifier_Yield OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
functionDeclaration_Await
: Function bindingIdentifier_Await OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
functionDeclaration_Yield_Await
: Function bindingIdentifier_Yield_Await OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
functionDeclaration_Default
: Function bindingIdentifier OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
| Function OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
functionDeclaration_Yield_Default
: Function bindingIdentifier_Yield OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
| Function OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
functionDeclaration_Await_Default
: Function bindingIdentifier_Await OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
| Function OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
functionDeclaration_Yield_Await_Default
: Function bindingIdentifier_Yield_Await OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
| Function OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
