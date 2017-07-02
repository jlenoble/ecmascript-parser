grammar ECMAScriptPass;
import
  AdditionalSyntax,
  Expressions,
  Statements,
  FunctionsAndClasses,
  LexicalGrammar;

@parser::members {
ECMAScriptPassParser.prototype.getHiddenToken = function () {
  var previousTokenIndex = antlr4.Parser.prototype.getCurrentToken
    .call(this).tokenIndex - 1;
  var previousToken = this._input.get(previousTokenIndex);

  return (previousToken &&
    previousToken.channel === antlr4.Lexer.HIDDEN) ? previousToken : null;
};

ECMAScriptPassParser.prototype.isEndOfStatementToken = function (token) {
// --- ECMAScript® 2018 Language Specification - Section 5.1.2
// Simple white space and single-line comments are discarded and do not appear
// in the stream of input elements for the syntactic grammar. A MultiLineComment
// (that is, a comment of the form /*…*/ regardless of whether it spans more
// than one line) is likewise simply discarded if it contains no line
// terminator; but if a MultiLineComment contains one or more line terminators,
// then it is replaced by a single line terminator, which becomes part of the
// stream of input elements for the syntactic grammar.
// --- ECMAScript® 2018 Language Specification - Annex B.1.3
// Similar to a MultiLineComment that contains a line terminator code point,
// a SingleLineHTMLCloseComment is considered to be a LineTerminator for
// purposes of parsing by the syntactic grammar.
  if (token === null)
    return false;

  var text = token.text;
  var type = token.type;

  return type === ECMAScriptPassParser.LineTerminator ||
  (
    type === ECMAScriptPassParser.MultiLineComment ||
    type === ECMAScriptPassParser.SingleLineHTMLCloseComment &&
    text.indexOf('\n') !== -1 ||
    text.indexOf('\r') !== -1 ||
    text.indexOf('\u2028') !== -1 ||
    text.indexOf('\u2029') !== -1
  );
}

ECMAScriptPassParser.prototype.isLineTerminatorEquivalent = function () {
  return this.isEndOfStatementToken(this.getHiddenToken());
};
}

file
: statementList? EOF
;

eos
: SemiColon
| {this.isLineTerminatorEquivalent()}?
| {this._input.LT(1).type === ECMAScriptPassParser.CloseBrace}?
| {this._input.LT(1).type === ECMAScriptPassParser.EOF}?
;
