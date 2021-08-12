
const getDisplay = require('./mycalc3');


describe('getDisplay', () => {
  test('check what if write 1 return a string', () => {

    //inputs

    const isInteger = 1;
    const isDecimal = null;

    //test

    const value = getDisplay(isInteger, isDecimal);

    //expect
    expect(value).toEqual('1');
  });
});

describe('getDisplay', () => {
  test('check what if write 1, dot and 5 return a string decimal number', () => {
    //inputs

    const isInteger = 1;
    const isDecimal = 5;

    //test
    const value = getDisplay(isInteger, isDecimal);

    //expect
    expect(value).toEqual('1.5');
  });
});


