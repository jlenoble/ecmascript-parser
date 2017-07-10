import path from 'path';

const debug = true;

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');

export function customizeListener (grammar, methods = {}) {
  return customize(grammar, 'Listener', methods);
}

export function makeMembers (proto) {
  const name = proto.constructor.name;
  const n = /Lexer$/.test(name) ? 5 : 6;
  const processor = name.substring(name.length - n);
  const file = name.substring(0, name.length - n) + 'Base' + processor;
  require(`./${file}`).addOwnMethodsTo(proto);
}

function customize (grammar, target, methods) {
  const name = `${grammar}${target}`;
  const Processor = require(path.join(base, rel, name))[name];

  const properties = target === 'Listener' ? {
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
  } : {};

  Object.keys(methods).forEach(key => {
    Object.defineProperty(properties, key, {
      value: methods[key],
    });
  });

  Object.defineProperties(Processor, properties);

  return Processor;
}
