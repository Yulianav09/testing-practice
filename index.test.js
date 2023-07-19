const {stringLength, reverseString, sum, subtract, divide, multiply, stringcapitalize} = require('./index.js');

test('return the length of a string', () => {
  expect(stringLength("hello")).toBe(5);
});

test('take a string as an argument and return it reversed', () => {
  expect(reverseString("hello")).toBe("olleh");
});

describe('testing my sum', () => {
  test('adds 4 + 2 to equal 6', () => {
    expect(sum(4, 2)).toBe(6);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 3 + 2 to equal 5', () => {
    expect(sum(3, 2)).toBe(5);
  });
});

describe('testing my subtract', () => {

  test('subtract 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });

  test('subtract 5 - 1 to equal 4', () => {
    expect(subtract(5, 1)).toBe(4);
  });

  test('subtract 7 - 1 to equal 6', () => {
    expect(subtract(7, 1)).toBe(6);
  });
});

describe('testing my divition', () => {

  test('divide 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);
  });

 test('divide 8 / 2 to equal 4', () => {
    expect(divide(8, 2)).toBe(4);
  });

  test('divide 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });
});

describe('testing my multiplication', () => {

  test('multiply 4 * 2 to equal 8', () => {
    expect(multiply(4, 2)).toBe(8);
  });

  test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('multiply 3 * 6 to equal 18', () => {
    expect(multiply(3, 6)).toBe(18);
  });
});

test('returns that string with the first character capitalized', () => {
  expect(stringcapitalize("hello")).toBe("Hello");
});