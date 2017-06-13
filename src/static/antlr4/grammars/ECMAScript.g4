grammar ECMAScript;
import
  AdditionalSyntax,
  LexicalGrammar,
  Expressions,
  Statements,
  FunctionsAndClasses,
  ScriptsAndModules;

file
: script EOF
;

eos
: SemiColon
| {this._input.LT(1).type == ECMAScriptParser.EOF}?
| {this._input.LT(1).type == ECMAScriptParser.CloseBrace}?
;
