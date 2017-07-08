/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

// A.2 Expressions
grammar ECMAScript;
import
  AdditionalSyntax,
  // Expressions,
  Statements,
  FunctionsAndClasses,
  // ScriptsAndModules,
  // AssignmentPattern,
  BindingIdentifier,
  PrimaryExpression,
  CoverExpressions,
  ArrayLiteral,
  ObjectLiteral,
  CallExpression,
  LeftHandSideExpression,
  // AssignmentExpression,
  Expression,
  LexicalGrammar;

@parser::members {
var path = require('path');
require(path.join(process.cwd(), 'build/src/static/antlr4/BaseParser'))
  .addOwnMethodsTo(ECMAScriptParser.prototype);
}

@lexer::members {
var path = require('path');
require(path.join(process.cwd(), 'build/src/static/antlr4/BaseLexer'))
  .addOwnMethodsTo(ECMAScriptLexer.prototype);
}

file
: statementList? EOF
;

/* file
: (script|module)
;*/

eos
: SemiColon
| {this.mayInsertSemiColon()}?
;
