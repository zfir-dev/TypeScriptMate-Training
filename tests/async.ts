export const asyncTests = [
    {
        name: 'async function declaration',
        prompt: 'async fetchData(url: string): ',
        expectedStart: 'Promise'
    },
    {
        name: 'async arrow function',
        prompt: 'const fetchDataFromUrl = async (',
        expectedStart: 'url'
    },
    {
        name: 'await expression',
        prompt: 'const fetchData = await',
        expectedStart: 'fetch'
    },
    {
        name: 'Promise.resolve',
        prompt: 'return Promise.resolve(',
        expectedStart: 'undefined'
    },
    {
        name: 'Promise.reject',
        prompt: 'return Promise.reject(new',
        expectedStart: 'Error'
    },
    {
        name: 'Promise.all',
        prompt: 'const results = await Promise.all([',
        expectedStart: 'Promise'
    },
    {
        name: 'Promise.race',
        prompt: 'const result = await Promise.race([',
        expectedStart: 'Promise'
    },
    {
        name: 'try-catch with async',
        prompt: 'try { const fetchData = await',
        expectedStart: 'fetch'
    },
    {
        name: 'async class method',
        prompt: 'class ApiService { async',
        expectedStart: 'get'
    },
    {
        name: 'Promise type annotation',
        prompt: 'function fetchData(): Promise<',
        expectedStart: 'any'
    },
    {
        name: 'for await loop',
        prompt: 'for await (const item of',
        expectedStart: 'items'
    }
]; 