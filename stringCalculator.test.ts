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
