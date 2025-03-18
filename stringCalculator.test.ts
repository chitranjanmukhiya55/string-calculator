import {add} from './stringCalculator'

test('Empty string returns 0', () => {
    expect(add('')).toBe(0);
});
