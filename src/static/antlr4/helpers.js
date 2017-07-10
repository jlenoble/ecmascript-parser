import path from 'path';

const debug = true;

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');

export function customizeListener (grammar, methods = {}) {
  const listener = `${grammar}Listener`;
  const Listener = require(path.join(base, rel, listener))[listener];

  const properties = {
    enterFile: {
      value: function (ctx) {
        if (debug) {
          debugger;
        }
      },
    },
    exitFile: {
      value: function (ctx) {
        if (debug) {
          console.log('file:', ctx.getText());
        }
      },
    },
  };

  Object.keys(methods).forEach(key => {
    Object.defineProperty(properties, key, {
      value: methods[key],
    });
  });

  Object.defineProperties(Listener, properties);

  return Listener;
}

export function makeLexerMembers (proto) {
  const name = proto.constructor.name.replace(/Lexer/, 'BaseLexer');
  require(`./${name}`).addOwnMethodsTo(proto);
}

export function makeParserMembers (proto) {
  const name = proto.constructor.name.replace(/Parser/, 'BaseParser');
  require(`./${name}`).addOwnMethodsTo(proto);
}
