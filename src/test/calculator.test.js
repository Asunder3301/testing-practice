import { calculator } from "../index.js";

const testCases = [
  {
    a: 1,
    b: 1,
    add: 2,
    subtract: 0,
    multiply: 1,
    divide: 1,
  },
  {
    a: 2,
    b: 2,
    add: 4,
    subtract: 0,
    multiply: 4,
    divide: 1,
  },
  {
    a: 5,
    b: 10,
    add: 15,
    subtract: -5,
    multiply: 50,
    divide: 0.5,
  },
  {
    a: 100,
    b: 5,
    add: 105,
    subtract: 95,
    multiply: 500,
    divide: 20,
  },
];

test("Addition", () => {
  testCases.forEach((test) => {
    expect(calculator.add(test.a, test.b)).toBe(test.add);
  });
});

test("Subtraction", () => {
  testCases.forEach((test) => {
    expect(calculator.subtract(test.a, test.b)).toBe(test.subtract);
  });
});

test("Multiplication", () => {
  testCases.forEach((test) => {
    expect(calculator.multiply(test.a, test.b)).toBe(test.multiply);
  });
});

test("Division", () => {
  testCases.forEach((test) => {
    expect(calculator.divide(test.a, test.b)).toBe(test.divide);
  });
});
