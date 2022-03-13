import { sum } from "../src";

describe("sum tests", () => {
  it("should sum", () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);
    expect(result).toBe(a + b);
  });
});
