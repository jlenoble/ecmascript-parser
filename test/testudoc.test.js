import Muter, {captured} from 'muter';
import {expect} from 'chai';
import Testudoc from '../src/testudoc';

describe('Testing Testudoc', function () {
  const muter = Muter(console, 'log'); // eslint-disable-line new-cap

  it(`Class Testudoc says 'Hello world!'`, captured(muter, function () {
    new Testudoc();
    expect(muter.getLogs()).to.equal('Hello world!\n');
  }));
});
