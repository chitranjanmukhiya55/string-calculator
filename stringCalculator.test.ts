import { add } from './stringCalculator';

test('Empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('Single number returns the number', () => {
    expect(add('1')).toBe(1);
});
