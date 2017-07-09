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
require('../helpers').makeParserMembers(ECMAScriptParser.prototype);
}

@lexer::members {
require('../helpers').makeLexerMembers(ECMAScriptLexer.prototype);
}

file
: module
;

eos
: SemiColon
| {this.isSemiColonEquivalent()}?
;
