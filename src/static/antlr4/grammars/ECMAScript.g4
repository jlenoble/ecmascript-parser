/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

// A.2 Expressions
grammar ECMAScript;
import
  EOS,
  AdditionalSyntax,
  Expressions,
  Statements,
  FunctionsAndClasses,
  ScriptsAndModules,
  LexicalGrammar;

@parser::members {
require('../helpers').makeMembers(ECMAScriptParser.prototype);
}

@lexer::members {
require('../helpers').makeMembers(ECMAScriptLexer.prototype);
}

file
: module
;

eos
: SemiColon
| {this.isSemiColonEquivalent()}?
;
