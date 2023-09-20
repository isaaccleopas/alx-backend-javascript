const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round two integers and return their sum', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should round one integer and one float and return their sum', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should round two floats and return their sum', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should round two floats and return their sum', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
