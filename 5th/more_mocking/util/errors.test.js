import { describe, it, expect } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('HttpError()', () => {
it('should create a HttpError', () => {
    const testStatus = 1;
    const testMessage = "test message";
    const testData = { key: 'test' };

    const error = new HttpError(testStatus, testMessage, testData);

    expect(error.statusCode).toBe(testStatus);
    expect(error.message).toBe(testMessage);
    expect(error.data).toBe(testData);
    });

    it('should contain undefined as data if no data is provided', () => {
        const testStatus= 1;
        const testMessage = "test message";

        const error = new HttpError(testStatus, testMessage);

        expect(error.data).toBeUndefined();
    });
});

describe('ValidationError()', () => {
it('should create a ValidationError', () => {
    const errorText = 'invalid input'
    const error = new ValidationError(errorText);
    expect(error.message).toEqual(errorText);
});

});