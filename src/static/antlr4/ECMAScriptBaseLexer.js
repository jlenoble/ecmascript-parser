import antlr4 from 'antlr4';
// import chalk from 'chalk';

const nextToken = antlr4.Lexer.prototype.nextToken;
const DEFAULT = antlr4.Token.DEFAULT_CHANNEL;

const isPropertyName = (lastTokens, Types) => {
  let [a, b, c, d] = lastTokens;

  if (!d || !c) {
    return false;
  }

  if (d.type === Types.EOS) {
    if (!b) {
      return false;
    }
    d = c;
    c = b;
    b = a;
  }

  if (c.type === Types.EOS) {
    if (!b) {
      return false;
    }
    c = b;
  }

  return c && d && c.type === Types.Dot && (d.type === Types.IdentifierName ||
    /[A-Za-z]+/.test(d.text)); // Takes care of all keywords
};

const isValidContextForRegExp = (lastToken, lastTokens, Types) => {
  /* console.log(lastTokens.map(t => t && t.text).join('|'),
    chalk.blue(context));*/
  if (!lastToken) {
    return true;
  }

  // First eliminate keywords as properties
  if (isPropertyName(lastTokens, Types)) {
    return false;
  }

  switch (lastToken.type) {
  case Types.This:
  case Types.IdentifierName:
  case Types.NumericLiteral:
  case Types.NullLiteral:
  case Types.BooleanLiteral:
    return false;

  case Types.OpenBrace:
  // case Types.CloseBrace: Ambiguous! go to default
  case Types.OpenParen:
  // case Types.CloseParen: Ambiguous! go to default
  case Types.OpenBracket:
  case Types.CloseBracket:

  case Types.Dot:
  case Types.Spread:
  case Types.SemiColon:
  case Types.Comma:

  case Types.LessThan:
  case Types.GreaterThan:
  case Types.LessThanEquals:
  case Types.GreaterThanEquals:

  case Types.Equals:
  case Types.NotEquals:
  case Types.IdentityEquals:
  case Types.IdentityNotEquals:

  case Types.Plus:
  case Types.Minus:
  case Types.Multiply:
  case Types.Modulo:
  case Types.Power:

  case Types.LeftShiftArithmetic:
  case Types.RightShiftArithmetic:
  case Types.RightShiftLogical:

  case Types.BitAnd:
  case Types.BitOr:
  case Types.BitXor:

  case Types.Not:
  case Types.BitNot:

  case Types.And:
  case Types.Or:

  case Types.QuestionMark:
  case Types.Colon:

  case Types.Assign:
  case Types.PlusAssign:
  case Types.MinusAssign:
  case Types.MultiplyAssign:
  case Types.ModuloAssign:
  case Types.PowerAssign:

  case Types.LeftShiftArithmeticAssign:
  case Types.RightShiftArithmeticAssign:
  case Types.RightShiftLogicalAssign:

  case Types.BitAndAssign:
  case Types.BitOrAssign:
  case Types.BitXorAssign:

  case Types.FatArrow:

  case Types.Divide:
  case Types.DivideAssign:
    return true;

  case Types.PlusPlus:
  case Types.MinusMinus:
    let [a, b, c, d] = lastTokens;

    if (d && d.type === Types.EOS) {
      // make sure d === lastToken
      d = c;
      c = b;
      b = a;
    }

    return !c || c.type === Types.EOS ||
      isValidContextForRegExp(c, [undefined, a, b, c], Types);

  case Types.New:
  case Types.Delete:
  case Types.Void:
  case Types.Typeof:
  case Types.Instanceof:
  case Types.In:
  case Types.Do:
  case Types.Return:
  case Types.Yield:
  case Types.Await:
  case Types.Case:
  case Types.Throw:
  case Types.Else:
    // Here it doesn't matter whether the production is restricted or not
    return true;

  default:
    return true;
  }
};

class ECMAScriptBaseLexer {
  nextToken () {
    // Record last 3 non Discardable tokens
    const next = nextToken.call(this);
    const Types = this.constructor;
    const type = next.type;

    if (this.lastTokens === undefined) {
      this.lastTokens = [undefined, undefined, undefined, undefined];
    }

    if (type !== Types.Discard) {
      const [, a, b, c] = this.lastTokens;
      this.lastTokens = [a, b, c, next];
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
    return !this.isValidContextForRegExp();
  }

  isStartOfFile () {
    return !this.lastTokens;
  }
}

ECMAScriptBaseLexer.addOwnMethodsTo = function (proto) {
  const keys = Object.getOwnPropertyNames(ECMAScriptBaseLexer.prototype)
    .filter(f => f !== 'constructor');

  for (let key of keys) {
    proto[key] = ECMAScriptBaseLexer.prototype[key]; // eslint-disable-line
  }
};

export default ECMAScriptBaseLexer;
