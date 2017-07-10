class ECMAScriptPreprocessorBaseLexer {
}

ECMAScriptPreprocessorBaseLexer.addOwnMethodsTo = function (proto) {
  const keys = Object.getOwnPropertyNames(ECMAScriptPreprocessorBaseLexer
    .prototype).filter(f => f !== 'constructor');

  for (let key of keys) {
    proto[key] = ECMAScriptPreprocessorBaseLexer // eslint-disable-line
      .prototype[key];
  }
};

export default ECMAScriptPreprocessorBaseLexer;
