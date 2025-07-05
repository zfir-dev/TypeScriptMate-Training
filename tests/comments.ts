export const comments = [
    {
        name: 'single line comment',
        prompt: '// This is a comment',
        expectedStart: '//'
    },
    {
        name: 'multi-line comment start',
        prompt: '/* This is a multi-line comment',
        expectedStart: '*/'
    },
    {
        name: 'JSDoc comment',
        prompt: '/**',
        expectedStart: ' *'
    },
    {
        name: 'JSDoc function description',
        prompt: '/**\n * Calculates the sum of two numbers\n * @param a',
        expectedStart: ' -'
    },
    {
        name: 'JSDoc param type',
        prompt: '/**\n * @param {number} a',
        expectedStart: ' -'
    },
    {
        name: 'JSDoc return type',
        prompt: '/**\n * @returns {number}',
        expectedStart: 'number'
    },
    {
        name: 'inline comment after code',
        prompt: 'const x = 5; //',
        expectedStart: ' '
    },
    {
        name: 'comment before function',
        prompt: '// Calculate the sum\nfunction',
        expectedStart: 'sum'
    },
    {
        name: 'block comment with code',
        prompt: '/*\n * This function adds two numbers\n * @param a first number\n * @param b second number\n */\nfunction',
        expectedStart: 'add'
    },
    {
        name: 'TODO comment',
        prompt: '// TODO:',
        expectedStart: ' '
    },
    {
        name: 'FIXME comment',
        prompt: '// FIXME:',
        expectedStart: ' '
    },
    {
        name: 'section comment',
        prompt: '// =====',
        expectedStart: ' '
    },
    {
        name: 'comment with special characters',
        prompt: '// @ts-',
        expectedStart: 'ignore'
    },
    {
        name: 'comment with URL',
        prompt: '// See: https',
        expectedStart: '://'
    },
    {
        name: 'comment with code example',
        prompt: '// Example: const add = (a, b) => {',
        expectedStart: 'a'
    }
] 