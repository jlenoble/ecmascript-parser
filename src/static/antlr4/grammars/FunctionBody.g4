/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

grammar FunctionBody;

// FunctionBody[Yield, Await]:
//    FunctionStatementList[?Yield, ?Await]
// FunctionStatementList[Yield, Await]:
//    StatementList[?Yield, ?Await, +Return][opt]
functionBody
: {this.enterFunctionBody()} statementList? {this.exitFunctionBody()}
;

// GeneratorBody:
//    FunctionBody[+Yield, ~Await]
generatorBody
: {this.enterGeneratorBody()} functionBody {this.exitGeneratorBody()}
;

// AsyncFunctionBody:
//    FunctionBody[~Yield, +Await]
/*asyncFunctionBody
: functionBody_Await
;*/

// ConciseBody[In]:
//    [lookahead ≠ {] AssignmentExpression[?In, ~Yield, ~Await]
//    { FunctionBody[~Yield, ~Await] }
conciseBody
: OpenBrace functionBody CloseBrace
| expression
;
