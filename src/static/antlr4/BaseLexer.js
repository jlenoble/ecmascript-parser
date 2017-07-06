import antlr4 from 'antlr4';

const nextToken = antlr4.Lexer.prototype.nextToken;
const DEFAULT = antlr4.Token.DEFAULT_CHANNEL;

const isValidContextForRegExp = (lastToken, [bbbLast, bbLast, bLast, last],
  Types) => {
  if (!lastToken) {
    return true;
  }

  switch (lastToken.type) {
  case Types.IdentifierName: case Types.NumericLiteral:
  case Types.NullLiteral: case Types.BooleanLiteral: case Types.This:
  case Types.CloseBracket:
    return false;

  case Types.PlusPlus: case Types.MinusMinus:
    let [a, b, c, d] = [bbbLast, bbLast, bLast, last];

    if (d.type === Types.LineTerminator) {
      d = c;
      c = b;
      b = a;
    }

    return !c || c.type === Types.LineTerminator ||
      isValidContextForRegExp(c, [undefined, a, b, c], Types);

  case Types.CloseBrace: case Types.CloseParen:
    return; // Ambiguous token, needs syntactic input

  default:
    return true;
  }
};

class BaseLexer {
  nextToken () {
    // Record last 3 non WhiteSpace+ tokens, but collapse LineTerminator+ into
    // a single LineTerminator record
    const next = nextToken.call(this);
    const Types = this.constructor;
    const type = next.type;

    if (type !== Types.WhiteSpace) {
      const [, a, b, c] = this.lastTokens || [undefined, undefined, undefined,
        undefined];

      if (!c || c.type !== type || type !== Types.LineTerminator) {
        this.lastTokens = [a, b, c, next];
      }
    }

    if (next.channel === DEFAULT) {
      this.lastToken = next;
    }

    return next;
  }

  isValidContextForRegExp () {
    return isValidContextForRegExp(this.lastToken,
      this.lastTokens || [], this.constructor);
  }

  isValidContextForDiv () {
    const isNotValid = this.isValidContextForRegExp();

    if (isNotValid === undefined) {
      // Ambiguous token, needs syntactic input
      return false;
    }

    return !isNotValid;
  }
}

BaseLexer.addOwnMethodsTo = function (proto) {
  const keys = Object.getOwnPropertyNames(BaseLexer.prototype)
    .filter(f => f !== 'constructor');

  for (let key of keys) {
    proto[key] = BaseLexer.prototype[key]; // eslint-disable-line
  }
};

export default BaseLexer;
