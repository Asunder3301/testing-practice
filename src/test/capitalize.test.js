import { capitalize } from "../index";

test("Capitalize first letter", () => {
    expect(capitalize("string")).toBe("String");
});