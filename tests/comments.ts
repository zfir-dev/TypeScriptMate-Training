export const comments = [
    {
        type: 'comments',
        name: 'single line comment',
        prompt: '// This is a comment',
        expectedStart: '//'
    },
    {
        type: 'comments',
        name: 'multi-line comment start',
        prompt: '/* This is a multi-line comment',
        expectedStart: '*/'
    },
    {
        type: 'comments',
        name: 'JSDoc comment',
        prompt: '/**',
        expectedStart: ' *'
    },
    {
        type: 'comments',
        name: 'JSDoc function description',
        prompt: '/**\n * Calculates the sum of two numbers\n * @param a',
        expectedStart: ' -'
    },
    {
        type: 'comments',
        name: 'JSDoc param type',
        prompt: '/**\n * @param {number} a',
        expectedStart: ' -'
    },
    {
        type: 'comments',
        name: 'JSDoc return type',
        prompt: '/**\n * @returns {number}',
        expectedStart: 'number'
    },
    {
        type: 'comments',
        name: 'inline comment after code',
        prompt: 'const x = 5; //',
        expectedStart: ' '
    },
    {
        type: 'comments',
        name: 'comment before function',
        prompt: '// Calculate the sum\nfunction',
        expectedStart: 'sum'
    },
    {
        type: 'comments',
        name: 'block comment with code',
        prompt: '/*\n * This function adds two numbers\n * @param a first number\n * @param b second number\n */\nfunction',
        expectedStart: 'add'
    },
    {
        type: 'comments',
        name: 'TODO comment',
        prompt: '// TODO:',
        expectedStart: ' '
    },
    {
        type: 'comments',
        name: 'FIXME comment',
        prompt: '// FIXME:',
        expectedStart: ' '
    },
    {
        type: 'comments',
        name: 'section comment',
        prompt: '// =====',
        expectedStart: ' '
    },
    {
        type: 'comments',
        name: 'comment with special characters',
        prompt: '// @ts-',
        expectedStart: 'ignore'
    },
    {
        type: 'comments',
        name: 'comment with URL',
        prompt: '// See: https',
        expectedStart: '://'
    },
    {
        type: 'comments',
        name: 'comment with code example',
        prompt: '// Example: const add = (a, b) => {',
        expectedStart: 'a'
    }
] 