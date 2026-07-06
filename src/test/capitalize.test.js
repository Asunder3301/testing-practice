import { capitalize } from "../index";

test("Capitalize the first letter of a given string", () => {
  const testCases = [
    {
      input: "string",
      expected: "String",
    },
    {
      input: "a short string",
      expected: "A short string",
    },
    {
      input: "that's one small step for man, one giant leap for mankind.",
      expected: "That's one small step for man, one giant leap for mankind.",
    }, 
    {
        input: "git commit src/test/capitalize.test.js",
        expected: "Git commit src/test/capitalize.test.js"
    }
  ];

  testCases.forEach((test) => {
    expect(capitalize(test.input)).toBe(test.expected);
  });
});
