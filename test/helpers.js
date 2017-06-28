import {translate} from '../gulp/parse';
import Muter, {muted} from 'muter';
import path from 'path';

export function makeTest ({grammar, dir, files}) {
  describe(`Testing ${grammar}`, function () {
    this.timeout(60000); // eslint-disable-line no-invalid-this

    const muter = Muter(process.stderr, 'write'); // eslint-disable-line
    const _dir = path.join(process.cwd(), 'test', dir);

    files.forEach(file => {
      it(`Parsing file ${dir}/${file}.js`, muted(muter, function () {
        return new Promise((resolve, reject) => {
          translate(`${_dir}/${file}.js`, {
            grammar: 'ECMAScriptPass',
            listener: 'TranslatorPass',
          })
            .on('error', reject)
            .on('finish', () => {
              const logs = muter.getLogs();
              muter.forget();

              if (logs) {
                reject(new Error(logs));
              } else {
                resolve();
              }
            });
        });
      }));
    });
  });
}
