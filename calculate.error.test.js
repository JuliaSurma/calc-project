
const calculate = require('./mycalc3');

describe('calculate', () => {
    test('when you divine 1 by 0 throw error operation is invalid', () => {
      //inputs
      const last = 1;
      const run = 0;
      const operation = '/';
  
      //test
      const value = calculate(last, run, operation);
  
      //expect
  
      expect(() => {
        value;
      }).toThrow('Invalid operation');
    });
  });
  