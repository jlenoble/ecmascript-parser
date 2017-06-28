import {translate} from '../gulp/parse';
import Muter, {muted} from 'muter';

export function makeTest ({grammar, dir, files}) {
  describe(`Testing ${grammar}`, function () {
    this.timeout(60000); // eslint-disable-line no-invalid-this

    const muter = Muter(process.stderr, 'write'); // eslint-disable-line

    files.forEach(file => {
      it(`Parsing file ${dir}/${file}`, muted(muter, function () {
        return new Promise((resolve, reject) => {
          translate(`${dir}/${file}`, {
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
