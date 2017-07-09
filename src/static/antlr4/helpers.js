export function makeTranslator (grammar) {

}

export function makeLexerMembers (proto) {
  const name = proto.constructor.name.replace(/Lexer/, 'BaseLexer');
  require(`./${name}`).addOwnMethodsTo(proto);
}

export function makeParserMembers (proto) {
  const name = proto.constructor.name.replace(/Parser/, 'BaseParser');
  require(`./${name}`).addOwnMethodsTo(proto);
}
