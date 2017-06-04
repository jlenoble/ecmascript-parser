import {expect} from 'chai';
import {translate} from '../gulp/parse';

describe('Testing Testudoc', function () {
  it(``, function () {
    return new Promise((resolve, reject) => {
      translate().on('error', reject).on('finish', resolve);
    });
  });
});
