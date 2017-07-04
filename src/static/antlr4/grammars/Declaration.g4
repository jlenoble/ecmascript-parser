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

// HoistableDeclaration[Yield, Await, Default]:
//    FunctionDeclaration[?Yield, ?Await, ?Default]
//    GeneratorDeclaration[?Yield, ?Await, ?Default]
//    AsyncFunctionDeclaration[?Yield, ?Await, ?Default]
hoistableDeclaration
: functionDeclaration
| generatorDeclaration
/*| asyncFunctionDeclaration*/
;
hoistableDeclaration_Default
: functionDeclaration_Default
| generatorDeclaration_Default
/*| asyncFunctionDeclaration_Default*/
;
