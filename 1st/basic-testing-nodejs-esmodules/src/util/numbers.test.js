import { it, expect } from "vitest";

import { transformToNumber } from "../../../basic-testing-frontend/src/util/numbers";

it("should transform a string to a number", () => {
    const value = "1";
    const result = transformToNumber(value);
    expect(result).toBeTypeOf('number');
    });

it("should return a number if a number is provided", () => {
    const value = 1;
    const result = transformToNumber(value);
    expect(result).toBe(1);
    });

it("should return a NaN if an array is provided", () => {
    const value = [1, 3, 5];
    const result = transformToNumber(value);
    expect(result).toBeNaN();
    });

it("should return NaN if non-transformable values are provided", () => {
    const value = "invalid";
    const result = transformToNumber(value);
    expect(result).toBeNaN();
    });

it("should return a NaN if an object is provided", () => {
    const value = { a: 1, b: 2 };
    const result = transformToNumber(value);
    expect(result).toBeNaN();
    });



