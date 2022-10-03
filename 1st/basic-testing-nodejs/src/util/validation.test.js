import { it, expect, describe } from 'vitest';    

import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {

    it('should throw an error if an empty string is provided', () => {
        const value = '';
        const resultFn = () => {
            validateStringNotEmpty(value);
        };
        expect(resultFn).toThrow(/must not be empty/);
        });
    
    it('should throw an error if any other value than a string is provided', () => {
        const inputNum = 1;
        const inputBool = true;
        const inputObj = { a: 1, b: 2 };
    
        const validationFnNum = () => {
            validateStringNotEmpty(inputNum);
        }
        const validationFnBool = () => {
            validateStringNotEmpty(inputBool);
        }
        const validationFnObj = () => {
            validateStringNotEmpty(inputObj);
        }
    
        expect(validationFnNum).toThrow();
        expect(validationFnBool).toThrow();
        expect(validationFnObj).toThrow();
        });
    
    it('should not throw an error, if a non-empty string is provided', () => {
        const value = 'test';
        const resultFn = () => {
            validateStringNotEmpty(value);
        };
        expect(resultFn).not.toThrow();
        });

});

describe('validateNumber()', () => {

    it('should throw an error if NaN is provided, should throw invalid number input', () => {
        const value = NaN;
        const resultFn = () => {
            validateNumber(value);
        };
        expect(resultFn).toThrow(/Invalid number input/);
        });
    
    it('should throw an error of a non-numeric value is provided', () => {
        const value = 'invalid';
        const resultFn = () => {
            validateNumber(value);
        };
        expect(resultFn).toThrow(/Invalid number input/);
        });
    
    it('should not throw an error of a number is provided', () => {
        const value = 1;
        const resultFn = () => {
            validateNumber(value);
        };
        expect(resultFn).not.toThrow();
        });
})
