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
    {
      input: "that's one small step for man, one giant leap for mankind.",
      expected: ".dniknam rof pael tnaig eno ,nam rof pets llams eno s'taht",
    },
  ];

  testCases.forEach((test) => {
    expect(reverseString(test.input)).toBe(test.expected);
  });
});
