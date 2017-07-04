/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

grammar MethodDefinition;

// MethodDefinition[Yield, Await]:
//    PropertyName[?Yield, ?Await] ( UniqueFormalParameters[~Yield, ~Await] ) { FunctionBody[~Yield, ~Await] }
//    GeneratorMethod[?Yield, ?Await]
//    AsyncMethod[?Yield, ?Await]
//    get PropertyName[?Yield, ?Await] ( ) { FunctionBody[~Yield, ~Await] }
//    set PropertyName[?Yield, ?Await] ( PropertySetParameterList ) { FunctionBody[~Yield, ~Await] }
methodDefinition
: Get propertyName OpenParen CloseParen OpenBrace functionBody CloseBrace
| Set propertyName OpenParen propertySetParameterList CloseParen OpenBrace functionBody CloseBrace
| propertyName OpenParen uniqueFormalParameters CloseParen OpenBrace functionBody CloseBrace
| generatorMethod
/*| asyncMethod*/;

// PropertySetParameterList:
//    FormalParameter[~Yield, ~Await]
propertySetParameterList
: formalParameter
;

// GeneratorMethod[Yield, Await]:
//    * PropertyName[?Yield, ?Await] ( UniqueFormalParameters[+Yield, ~Await] ) { GeneratorBody }
generatorMethod
: Multiply propertyName OpenParen uniqueFormalParameters CloseParen OpenBrace generatorBody CloseBrace
;

// AsyncMethod[Yield, Await]:
//    async [no LineTerminator here] PropertyName[?Yield, ?Await] ( UniqueFormalParameters[~Yield, +Await] ) { AsyncFunctionBody }
/*asyncMethod
: Async propertyName OpenParen uniqueFormalParameters CloseParen OpenBrace asyncFunctionBody CloseBrace
;
asyncMethod_Await
: Async propertyName_Await OpenParen uniqueFormalParameters_Await CloseParen OpenBrace asyncFunctionBody CloseBrace
;
asyncMethod_Yield_Await
: Async propertyName_Yield_Await OpenParen uniqueFormalParameters_Await CloseParen OpenBrace asyncFunctionBody CloseBrace
;*/
