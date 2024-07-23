import { describe, expect, it } from "vitest";

function add(a: number, b: number) {
  return a + b;
}

describe("vitest", () => {
  it("should add two numbers", () => {
    const actual = add(1, 2);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
