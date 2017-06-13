grammar ECMAScript;
import
  AdditionalSyntax,
  LexicalGrammar,
  Expressions,
  Statements,
  FunctionsAndClasses,
  ScriptsAndModules;

file
: Script EOF
;

expressionStatement
: StringLiteral
| objectLiteral
| OpenParen expressionStatement CloseParen
;

eos
: SemiColon
| {this._input.LT(1).type == ECMAScriptParser.CloseBrace}?
;
