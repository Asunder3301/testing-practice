import { analyzeArray } from "../index.js";

test("Return object with array average, minimum, maximum, and length", () => {
  const testCases = [
    {
      input: [1, 2, 3],
      expected: { average: 2, min: 1, max: 3, length: 3 },
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: { average: 3, min: 1, max: 5, length: 5 },
    },
    {
      input: [1, 8, 3, 4, 2, 6],
      expected: { average: 4, min: 1, max: 8, length: 6 },
    },
    {
      input: [6, 5, 3, 6, 233],
      expected: { average: 50.6, min: 3, max: 233, length: 5 },
    },
  ];

  testCases.forEach((test) => {
    expect(analyzeArray(test.input)).toEqual(test.expected);
  });
});
