const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should check type if SUM round up and return their sum', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
  });
  it('should check type if SUBTRACT round up the two and subtract b from a', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
  });
  it('should perform DIVIDE operation when b is not rounded to 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should return "Error" when DIVIDE operation with b rounded to 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw an error for an invalid type', function () {
    assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error, 'Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.');
  });
});
