import antlr4 from 'antlr4';

let Types;

class BaseParser {
  getHiddenToken () {
    const previousTokenIndex = antlr4.Parser.prototype.getCurrentToken
      .call(this).tokenIndex - 1;
    const previousToken = this._input.get(previousTokenIndex);

    return (previousToken &&
      previousToken.channel === antlr4.Lexer.HIDDEN) ? previousToken : null;
  }

  isEndOfStatementToken (token) {
    /*
--- ECMAScript® 2018 Language Specification - Section 5.1.2

Simple white space and single-line comments are discarded and do not appear
in the stream of input elements for the syntactic grammar.
A MultiLineComment (that is, a comment of the form /*…*\/ regardless of
whether it spans more than one line) is likewise simply discarded if it
contains no line terminator; but if a MultiLineComment contains one or more
line terminators, then it is replaced by a single line terminator, which
becomes part of the stream of input elements for the syntactic grammar.

--- ECMAScript® 2018 Language Specification - Annex B.1.3

Similar to a MultiLineComment that contains a line terminator code point,
a SingleLineHTMLCloseComment is considered to be a LineTerminator for
purposes of parsing by the syntactic grammar.
    */
    if (token === null) {
      return false;
    }

    const text = token.text;
    const type = token.type;

    return type === Types.LineTerminator ||
    (
      type === Types.MultiLineComment ||
      type === Types.SingleLineHTMLCloseComment &&
      text.indexOf('\n') !== -1 ||
      text.indexOf('\r') !== -1 ||
      text.indexOf('\u2028') !== -1 ||
      text.indexOf('\u2029') !== -1
    );
  }

  isLineTerminatorEquivalent () {
    return this.isEndOfStatementToken(this.getHiddenToken());
  }

  noLineTerminatorHere () {
    return !this.isEndOfStatementToken(this.getHiddenToken());
  }

  enterFunctionBody () {
    this.functionLevel += 1;
  }

  exitFunctionBody () {
    this.functionLevel -= 1;
  }

  canReturn () {
    return this.functionLevel > 0;
  }

  enterGeneratorBody () {
    this.generatorLevel += 1;
  }

  exitGeneratorBody () {
    this.generatorLevel -= 1;
  }

  canYield () {
    return this.generatorLevel > 0;
  }

  enableDoWhileEos () {
    this.isDoWhileEos = true;
  }

  disableDoWhileEos () {
    this.isDoWhileEos = false;
  }

  mayInsertSemiColon () {
    /*
11.9.1 Rules of Automatic Semicolon Insertion

In the following rules, “token” means the actual recognized lexical token
determined using the current lexical goal symbol as described in clause 11.

There are three basic rules of semicolon insertion:

1) When, as the source text is parsed from left to right, a token (called
   the offending token) is encountered that is not allowed by any production
   of the grammar, then a semicolon is automatically inserted before the
   offending token if one or more of the following conditions is true:
      - The offending token is separated from the previous token by at least one
        LineTerminator.
      - The offending token is }.
      - The previous token is ) and the inserted semicolon would then be parsed
        as the terminating semicolon of a do-while statement (13.7.2).
    */
    if (this.isLineTerminatorEquivalent() ||
      (this._input.LA(1) === Types.CloseBrace) || // eslint-disable-line
      this.isDoWhileEos) {
      return true;
    }

    /*
2) When, as the source text is parsed from left to right, the end of the
   input stream of tokens is encountered and the parser is unable to parse
   the input token stream as a single instance of the goal nonterminal,
   then a semicolon is automatically inserted at the end of the input
   stream.
    */
    if (this._input.LA(1) === Types.EOF) { // eslint-disable-line
      return true;
    }

    return false;
    /*
3) When, as the source text is parsed from left to right, a token is
   encountered that is allowed by some production of the grammar, but the
   production is a restricted production and the token would be the first
   token for a terminal or nonterminal immediately following the annotation
   “[no LineTerminator here]” within the restricted production (and
   therefore such a token is called a restricted token), and the restricted
   token is separated from the previous token by at least one LineTerminator,
   then a semicolon is automatically inserted before the restricted token.

   However, there is an additional overriding condition on the preceding rules:
   a semicolon is never inserted automatically if the semicolon would then be
   parsed as an empty statement or if that semicolon would become one of the
   two semicolons in the header of a for statement (see 13.7.4).
    */
  }

  isValidExpressionStatement () {
    const type = this._input.LA(1); // eslint-disable-line new-cap
    return type !== Types.OpenBrace && type !== Types.Function;
  }
}

BaseParser.addOwnMethodsTo = function (proto) {
  const keys = Object.getOwnPropertyNames(BaseParser.prototype)
    .filter(f => f !== 'constructor');

  for (let key of keys) {
    proto[key] = BaseParser.prototype[key]; // eslint-disable-line
  }

  proto.functionLevel = 0; // eslint-disable-line
  proto.generatorLevel = 0; // eslint-disable-line
  proto.isDoWhileEos = false; // eslint-disable-line

  Types = Object.assign({}, proto.constructor);
};

export default BaseParser;
