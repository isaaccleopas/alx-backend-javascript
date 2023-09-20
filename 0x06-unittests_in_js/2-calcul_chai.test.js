const expect = require("chai").expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it('should perform SUM operation', function () {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });

  it('should perform SUBTRACT operation', function () {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });

  it('should perform DIVIDE operation when b is not rounded to 0', function () {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });

  it('should return "Error" when DIVIDE operation with b rounded to 0', function () {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });

  it('should throw an error for an invalid type', function () {
    expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.');
  });
});
