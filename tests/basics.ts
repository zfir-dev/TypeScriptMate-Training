export const basics = [
    {
        type: 'basics',
        name: 'simple function',
        prompt: 'addNumbers(x: number, y: number) { return',
        expectedStart: 'x + y;'
    },
    {
        type: 'basics',
        name: 'generic array filter',
        prompt: 'filter<T>(arr: T[], fn: (x: T) => boolean) { return arr.',
        expectedStart: 'reduce'
    },
    {
        type: 'basics',
        name: 'generic map function',
        prompt: 'map<T, U>(arr: T[], fn: (x: T) => U) { return arr.',
        expectedStart: 'reduce'
    },
    {
        type: 'basics',
        name: 'arrow function body',
        prompt: 'const inc = (x: number) =>',
        expectedStart: '{\n'
    },
    {
        type: 'basics',
        name: 'optional chaining',
        prompt: 'const length = arr?.',
        expectedStart: 'length'
    },
]
