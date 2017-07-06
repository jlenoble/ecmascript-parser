import antlr4 from 'antlr4';

const nextToken = antlr4.Lexer.prototype.nextToken;
const DEFAULT_CHANNEL = antlr4.Token.DEFAULT_CHANNEL;

class BaseLexer {
  nextToken () {
    const next = nextToken.call(this);

    if (next.channel === DEFAULT_CHANNEL) {
      this.lastToken = next;
    }

    return next;
  }

  isValidContextForRegExp () {
    if (this.lastToken == null) {
      return true;
    }

    const Types = this.constructor;

    switch (this.lastToken.type) {
    case Types.IdentifierName: case Types.NumericLiteral:
      return false;

    default:
      return true;
    }
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
