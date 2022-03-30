import { split, sum } from "../src";

describe("sum tests", () => {
  it("should sum", () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);
    expect(result).toStrictEqual(a + b);
  });
});

describe("split tests", () => {
  it("should sum", () => {
    const text = "string,with,commas";
    const expected = text.split(",");

    const result = split(text);
    expect(result).toEqual(expected);
  });
});
