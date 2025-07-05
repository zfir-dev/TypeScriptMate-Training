export const controlFlow = [
    {
        name: 'for loop with array iteration',
        prompt: 'for (const item of',
        expectedStart: 'items'
    },
    {
        name: 'while loop with condition',
        prompt: 'while (failed ===',
        expectedStart: 'false'
    },
    {
        name: 'if-else conditional',
        prompt: 'if (user.isActive) {',
        expectedStart: 'return'
    },
    {
        name: 'switch case statement',
        prompt: 'switch (status) {',
        expectedStart: 'case'
    },
    {
        name: 'ternary operator',
        prompt: 'const message = isError ?',
        expectedStart: 'Error'
    },
    {
        name: 'for loop with index',
        prompt: 'for (let i = 0; i <',
        expectedStart: 'i++'
    },
    {
        name: 'do-while loop',
        prompt: 'do { console.log(i); i++; } while (i',
        expectedStart: '<'
    },
    {
        name: 'try-catch-finally block',
        prompt: 'try { console.log(i); i++; } catch',
        expectedStart: 'e'
    },
    {
        name: 'conditional chaining',
        prompt: 'const name = data?.user?.profile?.',
        expectedStart: 'name'
    },
    {
        name: 'early return pattern',
        prompt: 'if (!user) {',
        expectedStart: 'return'
    }
]; 