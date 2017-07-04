/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

grammar Generator;

// GeneratorDeclaration[Yield, Await, Default]:
// function * BindingIdentifier[?Yield, ?Await] ( FormalParameters[+Yield, ~Await] ) { GeneratorBody }
// [+Default] function * ( FormalParameters[+Yield, ~Await] ) { GeneratorBody }
generatorDeclaration
: Function Multiply bindingIdentifier OpenParen formalParameters CloseParen OpenBrace generatorBody CloseBrace
;
/*generatorDeclaration_Default
: Function Multiply bindingIdentifier OpenParen formalParameters_Yield CloseParen OpenBrace generatorBody CloseBrace
| Function Multiply OpenParen formalParameters_Yield CloseParen OpenBrace generatorBody CloseBrace
;*/
