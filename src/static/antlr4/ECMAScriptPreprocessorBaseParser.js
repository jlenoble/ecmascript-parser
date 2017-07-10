class ECMAScriptPreprocessorBaseParser {
}

ECMAScriptPreprocessorBaseParser.addOwnMethodsTo = function (proto) {
  const keys = Object.getOwnPropertyNames(ECMAScriptPreprocessorBaseParser
    .prototype).filter(f => f !== 'constructor');

  for (let key of keys) {
    proto[key] = ECMAScriptPreprocessorBaseParser // eslint-disable-line
      .prototype[key];
  }
};

export default ECMAScriptPreprocessorBaseParser;
