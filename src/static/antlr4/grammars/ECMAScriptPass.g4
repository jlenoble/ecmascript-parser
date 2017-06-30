grammar ECMAScriptPass;
import
  AdditionalSyntax,
  Expressions,
  Statements,
  FunctionsAndClasses,
  LexicalGrammar;

@parser::members {
/**
 * Returns true if, on the current index of the parser's
 * token stream, a token exists on the HIDDEN channel which
 * either is a line terminator, or is a multi line comment that
 * contains a line terminator.
 * @returns {Boolean}
 */
ECMAScriptPassParser.prototype.lineTerminatorAhead = function() {
// ECMAScript® 2018 Language Specification - Section 5.1.2
// Simple white space and single-line comments are discarded and do not appear
// in the stream of input elements for the syntactic grammar. A MultiLineComment
// (that is, a comment of the form /*…*/ regardless of whether it spans more
// than one line) is likewise simply discarded if it contains no line
// terminator; but if a MultiLineComment contains one or more line terminators,
// then it is replaced by a single line terminator, which becomes part of the
// stream of input elements for the syntactic grammar.
  var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken
    .call(this).tokenIndex - 1;
  var ahead = this._input.get(possibleIndexEosToken);

  if (ahead.channel !== antlr4.Lexer.HIDDEN)
    return false;

  var text = ahead.text;
  var type = ahead.type;

  return (
    type === ECMAScriptPassParser.MultiLineComment &&
    text.indexOf('\r') !== -1 ||
    text.indexOf('\n') !== -1 ||
    text.indexOf('\u2028') !== -1 ||
    text.indexOf('\u2029') !== -1
  ) || (type === ECMAScriptPassParser.LineTerminator);
};
}

file
: statementList? EOF
;

eos
: SemiColon
| {this.lineTerminatorAhead()}?
| {this._input.LT(1).type === ECMAScriptPassParser.EOF}?
| {this._input.LT(1).type === ECMAScriptPassParser.CloseBrace}?
;
