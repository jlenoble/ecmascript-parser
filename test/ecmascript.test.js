import {translate} from '../gulp/parse';
import Muter, {muted} from 'muter';

describe('Testing ECMAScript', function () {
  this.timeout(60000); // eslint-disable-line no-invalid-this

  const muter = Muter(process.stderr, 'write'); // eslint-disable-line

  for (let i = 0; i < 300 /*1956*/; i++) {
    let file;

    if (
      i === 397 ||
      i === 398 ||
      (i >= 400 && i <= 409) ||
      (i >= 411 && i <= 420) ||
      i === 422 ||
      i === 423 ||
      i === 523 ||
      i === 546 ||
      i === 551 ||
      (i >= 1051 && i <= 1070) ||
      (i >= 1116 && i <= 1127) ||
      i === 1132 ||
      i === 1333 ||
      (i >= 1686 && i <= 1695) ||
      (i >= 1698 && i <= 1701)
    ) {
      file = `${i}.module.js`;
    } else {
      file = `${i}.script.js`;
    }

    it(`Parsing file pass/${file}`, muted(muter, function () {
      return new Promise((resolve, reject) => {
        translate(`node_modules/test262-parser-tests/pass/${file}`, {
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
  }
});
