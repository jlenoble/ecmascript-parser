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
methodDefinition_Yield
: propertyName_Yield OpenParen uniqueFormalParameters CloseParen OpenBrace functionBody CloseBrace
/*| generatorMethod_Yield
| asyncMethod_Yield*/
| Get propertyName_Yield OpenParen CloseParen OpenBrace functionBody CloseBrace
| Set propertyName_Yield OpenParen propertySetParameterList CloseParen OpenBrace functionBody CloseBrace
;
/*methodDefinition_Await
: propertyName_Await OpenParen uniqueFormalParameters CloseParen OpenBrace functionBody CloseBrace
| generatorMethod_Await
| asyncMethod_Await
| Get propertyName_Await OpenParen CloseParen OpenBrace functionBody CloseBrace
| Set propertyName_Await OpenParen propertySetParameterList CloseParen OpenBrace functionBody CloseBrace
;
methodDefinition_Yield_Await
: propertyName_Yield_Await OpenParen uniqueFormalParameters CloseParen OpenBrace functionBody CloseBrace
| generatorMethod_Yield_Await
| asyncMethod_Yield_Await
| Get propertyName_Yield_Await OpenParen CloseParen OpenBrace functionBody CloseBrace
| Set propertyName_Yield_Await OpenParen propertySetParameterList CloseParen OpenBrace functionBody CloseBrace
;*/

// PropertySetParameterList:
//    FormalParameter[~Yield, ~Await]
propertySetParameterList
: formalParameter
;

// GeneratorMethod[Yield, Await]:
//    * PropertyName[?Yield, ?Await] ( UniqueFormalParameters[+Yield, ~Await] ) { GeneratorBody }
generatorMethod
: Multiply propertyName OpenParen uniqueFormalParameters_Yield CloseParen OpenBrace generatorBody CloseBrace
;
/*generatorMethod_Yield
: Multiply propertyName_Yield OpenParen uniqueFormalParameters_Yield CloseParen OpenBrace generatorBody CloseBrace
;
generatorMethod_Await
: Multiply propertyName_Await OpenParen uniqueFormalParameters_Yield CloseParen OpenBrace generatorBody CloseBrace
;
generatorMethod_Yield_Await
: Multiply propertyName_Yield_Await OpenParen uniqueFormalParameters_Yield CloseParen OpenBrace generatorBody CloseBrace
;*/

// AsyncMethod[Yield, Await]:
//    async [no LineTerminator here] PropertyName[?Yield, ?Await] ( UniqueFormalParameters[~Yield, +Await] ) { AsyncFunctionBody }
/*asyncMethod
: Async propertyName OpenParen uniqueFormalParameters CloseParen OpenBrace asyncFunctionBody CloseBrace
;
asyncMethod_Yield
: Async propertyName_Yield OpenParen uniqueFormalParameters_Await CloseParen OpenBrace asyncFunctionBody CloseBrace
;
asyncMethod_Await
: Async propertyName_Await OpenParen uniqueFormalParameters_Await CloseParen OpenBrace asyncFunctionBody CloseBrace
;
asyncMethod_Yield_Await
: Async propertyName_Yield_Await OpenParen uniqueFormalParameters_Await CloseParen OpenBrace asyncFunctionBody CloseBrace
;*/
