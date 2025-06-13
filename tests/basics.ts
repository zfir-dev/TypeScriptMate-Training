export const basics = [
    {
        name: 'simple function',
        prompt: 'function add(a: number, b: number) { return',
        expectedStart: ' a + b;'
    },
    {
        name: 'generic array filter',
        prompt: 'function filter<T>(arr: T[], fn: (x: T) => boolean) { return arr.',
        expectedStart: 'filter'
    },
    {
        name: 'generic map function',
        prompt: 'function map<T, U>(arr: T[], fn: (x: T) => U) { return arr.',
        expectedStart: 'map'
    },
    {
        name: 'arrow function body',
        prompt: 'const inc = (x: number) =>',
        expectedStart: ' {\n'
    },
    {
        name: 'optional chaining',
        prompt: 'const length = arr?.',
        expectedStart: 'length'
    },
]
