import { reverseString } from "../index";

test("Reverse a given string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("Reverse a given string (Case 2)", () => {
  expect(reverseString("a short string")).toBe("gnirts trohs a");
});
