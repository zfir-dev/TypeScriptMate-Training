export const asyncTests = [
    {
        type: 'async',
        name: 'async function declaration',
        prompt: 'async fetchData(url: string): ',
        expectedStart: 'Promise'
    },
    {
        type: 'async',
        name: 'async arrow function',
        prompt: 'const fetchDataFromUrl = async (',
        expectedStart: 'url'
    },
    {
        type: 'async',
        name: 'await expression',
        prompt: 'const fetchData = await',
        expectedStart: 'fetch'
    },
    {
        type: 'async',
        name: 'Promise.resolve',
        prompt: 'return Promise.resolve(',
        expectedStart: 'undefined'
    },
    {
        type: 'async',
        name: 'Promise.reject',
        prompt: 'return Promise.reject(new',
        expectedStart: 'Error'
    },
    {
        type: 'async',
        name: 'Promise.all',
        prompt: 'const results = await Promise.all([',
        expectedStart: 'Promise'
    },
    {
        type: 'async',
        name: 'Promise.race',
        prompt: 'const result = await Promise.race([',
        expectedStart: 'Promise'
    },
    {
        type: 'async',
        name: 'try-catch with async',
        prompt: 'try { const fetchData = await',
        expectedStart: 'fetch'
    },
    {   
        type: 'async',
        name: 'async class method',
        prompt: 'class ApiService { async',
        expectedStart: 'get'
    },
    {
        type: 'async',
        name: 'Promise type annotation',
        prompt: 'function fetchData(): Promise<',
        expectedStart: 'any'
    },
    {
        type: 'async',
        name: 'for await loop',
        prompt: 'for await (const item of',
        expectedStart: 'items'
    }
]; 