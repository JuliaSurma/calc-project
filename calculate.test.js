
const calculate = require('./mycalc3');


describe('calculate', () => {
  test('adding 1 to 2 gives 3', () => {
    //inputs
    const last = 1;
    const run = 2;
    const operation = '+';

    //test
    const value = calculate(last, run, operation);

    //expect
    expect(value).toEqual(3);
  });
});

describe('calculate', () => {
  test('divine 1 to 2 gives 0,5', () => {
    //inputs
    const last = 1;
    const run = 2;
    const operation = '/';

    //test
    const value = calculate(last, run, operation);

    //expect
    expect(value).toEqual(0.5);
  });
});

describe('calculate', () => {
  test('subtraction 1 to 2 gives -1', () => {
    //inputs
    const last = 1;
    const run = 2;
    const operation = '-';

    //test
    const value = calculate(last, run, operation);

    //expect
    expect(value).toEqual(-1);
  });
});

describe('calculate', () => {
  test('multiplication 1 to 2 gives 2', () => {
    //inputs
    const last = 1;
    const run = 2;
    const operation = '*';

    //test
    const value = calculate(last, run, operation);

    //expect
    expect(value).toEqual(2);
  });
});
