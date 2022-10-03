import { it, expect } from "vitest";

import { add } from "./math";

it("should summarize all number values in an array", () => {
  const number = [1, 2, 3, 4];
  const expectedResult = number.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  const result = add(number);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 2];
  const result = add(inputs);
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it("should throw an error of no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

it('it should throw an error if provided with multiple arguments instead of array', () => {
    const num1 = 1;
    const num2 = 2;
    const resultFn = () => {
        add(num1, num2);
    };
    expect(resultFn).toThrow(/is not iterable/);
    });


