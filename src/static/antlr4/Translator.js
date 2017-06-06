import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {TestudocListener} = require(path.join(base, rel,
  'TestudocListener'));

export class Translator extends TestudocListener {
  enterFile () {
    process.stdout.write('hello');
  }

  exitFile () {
    process.stdout.write('bye');
  }
}
