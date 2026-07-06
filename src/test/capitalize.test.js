import { capitalize } from "../index";

test("Capitalize first letter", () => {
  expect(capitalize("string")).toBe("String");
});

test("Capitalize first letter", () => {
  expect(capitalize("a short string")).toBe("A short string");
});
