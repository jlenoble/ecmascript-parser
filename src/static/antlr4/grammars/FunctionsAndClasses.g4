/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

// A.4 Functions and Classes
grammar FunctionsAndClasses;
import
  Class,
  Generator,
  FormalParameter,
  FunctionBody,
  MethodDefinition;

// FunctionDeclaration[Yield, Await, Default]:
// function BindingIdentifier[?Yield, ?Await] ( FormalParameters[~Yield, ~Await] ) { FunctionBody[~Yield, ~Await] }
// [+Default] function ( FormalParameters[~Yield, ~Await]) { FunctionBody[~Yield, ~Await] }
functionDeclaration
: Function bindingIdentifier OpenParen formalParameters CloseParen OpenBrace functionBody CloseBrace
;
