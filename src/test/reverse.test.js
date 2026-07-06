import { reverseString } from "../index";

test("Reverse a given string", () => {
  const testCases = [
    {
      input: "string",
      expected: "gnirts",
    },
    {
      input: "a short string",
      expected: "gnirts trohs a",
    },
  ];

  testCases.forEach((test) => {
    expect(reverseString(test.input)).toBe(test.expected);
  });
});
