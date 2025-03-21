import { add } from './stringCalculator';

test('Empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('Single number returns the number', () => {
    expect(add('1')).toBe(1);
});

test('Two numbers returns their sum', () => {
    expect(add('1,2')).toBe(3);
});

test('Handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('Handles custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
});

test('Throws exception on negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
});
