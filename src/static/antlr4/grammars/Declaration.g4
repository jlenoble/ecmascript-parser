/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar Declaration;

// Declaration[Yield, Await]:
//    HoistableDeclaration[?Yield, ?Await, ~Default]
//    ClassDeclaration[?Yield, ?Await, ~Default]
//    LexicalDeclaration[+In, ?Yield, ?Await]
declaration
: hoistableDeclaration
| classDeclaration
| lexicalDeclaration_In
;
/*declaration_Yield
: hoistableDeclaration_Yield
| classDeclaration_Yield
| lexicalDeclaration_In_Yield
;
declaration_Await
: hoistableDeclaration_Await
| classDeclaration_Await
| lexicalDeclaration_In_Await
;
declaration_Yield_Await
: hoistableDeclaration_Yield_Await
| classDeclaration_Yield_Await
| lexicalDeclaration_In_Yield_Await
;*/

// HoistableDeclaration[Yield, Await, Default]:
//    FunctionDeclaration[?Yield, ?Await, ?Default]
//    GeneratorDeclaration[?Yield, ?Await, ?Default]
//    AsyncFunctionDeclaration[?Yield, ?Await, ?Default]
hoistableDeclaration
: functionDeclaration
/*| generatorDeclaration
| asyncFunctionDeclaration*/
;
/*hoistableDeclaration_Yield
: functionDeclaration_Yield
| generatorDeclaration_Yield
| asyncFunctionDeclaration_Yield
;
hoistableDeclaration_Await
: functionDeclaration_Await
| generatorDeclaration_Await
| asyncFunctionDeclaration_Await
;
hoistableDeclaration_Yield_Await
: functionDeclaration_Yield_Await
| generatorDeclaration_Yield_Await
| asyncFunctionDeclaration_Yield_Await
;
hoistableDeclaration_Default
: functionDeclaration_Default
| generatorDeclaration_Default
| asyncFunctionDeclaration_Default
;
hoistableDeclaration_Yield_Default
: functionDeclaration_Yield_Default
| generatorDeclaration_Yield_Default
| asyncFunctionDeclaration_Yield_Default
;
hoistableDeclaration_Await_Default
: functionDeclaration_Await_Default
| generatorDeclaration_Await_Default
| asyncFunctionDeclaration_Await_Default
;
hoistableDeclaration_Yield_Await_Default
: functionDeclaration_Yield_Await_Default
| generatorDeclaration_Yield_Await_Default
| asyncFunctionDeclaration_Yield_Await_Default
;*/
