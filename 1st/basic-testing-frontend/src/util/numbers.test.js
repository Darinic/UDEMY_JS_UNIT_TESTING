import { describe, it, expect } from "vitest";

import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {

    it('should return an array of number values if an array of string number values is provided', () => {
        const value = ['1', '2'];
        const result = cleanNumbers(value);
        expect(result).toContain(1);
        expect(result).toContain(2);
        expect(result[0]).toBeTypeOf('number');
        expect(result).toEqual([1, 2]);
});
 
    it('should throw an error if an array with at least one empty string is provided', () => {
        const value = ['1', ''];
        const resultFn = () => {
            cleanNumbers(value);
        };
        expect(resultFn).toThrow(/Invalid input/);
    });
});

