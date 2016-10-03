import { expect } from 'chai';
import { describe, it } from 'mocha';
import td from 'testdouble';

describe('testdouble-chai shim', function() {
  it('called works', function() {
    let result = td.function();

    result();

    expect(result).to.be.called;
  });

  it('calledWith works', function() {
    let result = td.function();

    result('foo');

    expect(result).to.be.calledWith('foo');
  });
});
