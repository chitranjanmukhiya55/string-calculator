export function add(numbers: string): number {
    if (numbers === '') return 0;

    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        const delimiter = numbers[2];
        numbers = numbers.slice(delimiterEnd + 1);
        numbers = numbers.replace(new RegExp(`\\${delimiter}`, 'g'), ',');
    }

    const numArray = numbers.split(',').map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}
