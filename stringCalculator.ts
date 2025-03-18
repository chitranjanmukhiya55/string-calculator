export function add(numbers: string): number {
    if (numbers === '') return 0;

    const negatives: number[] = [];
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        const delimiter = numbers[2];
        numbers = numbers.slice(delimiterEnd + 1); // Get the numbers part
        numbers = numbers.replace(new RegExp(`\\${delimiter}`, 'g'), ',');
    }

    const numArray = numbers.split(',').map(Number);
    numArray.forEach((num) => {
        if (num < 0) negatives.push(num);
    });

    if (negatives.length > 0) {
        throw new Error(
            `Negative numbers not allowed: ${negatives.join(', ')}`,
        );
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
