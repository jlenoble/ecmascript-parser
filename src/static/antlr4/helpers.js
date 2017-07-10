import chalk from 'chalk';

const debug = process.env.DEBUG;

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
  const Processor = require(`./parsers/${name}`)[name];

  const properties = target === 'Listener' ? {
    enterFile: {
      value: function (ctx) {
        if (debug) {
          debugger;
        }
      },
    },
  } : {};

  Object.keys(methods).forEach(key => {
    properties[key] = {
      value: methods[key],
    };
  });

  Object.defineProperties(Processor.prototype, properties);

  if (debug) {
    const proto = Processor.prototype;
    proto.originalMethods = {};

    Object.getOwnPropertyNames(proto).forEach(name => {
      if (typeof proto[name] === 'function' && proto[name] !== 'constructor' &&
        /^enter/.test(name)) {
        proto.originalMethods[name] = proto[name];
        proto[name] = function (ctx) {
          console.log(chalk.yellow(`${name}:`), ctx.getText());
          proto.originalMethods[name].call(this, ctx);
        };
      }
    });
  }

  return Processor;
}
