import { calculator } from "../index.js";

test("Addition", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Subtraction", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("Multiplication", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Division", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
