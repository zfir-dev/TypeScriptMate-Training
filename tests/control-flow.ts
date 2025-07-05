export const controlFlow = [
    {
        type: 'control-flow',
        name: 'for loop with array iteration',
        prompt: 'for (const item of',
        expectedStart: 'items'
    },
    {
        type: 'control-flow',
        name: 'while loop with condition',
        prompt: 'while (failed ===',
        expectedStart: 'false'
    },
    {
        type: 'control-flow',
        name: 'if-else conditional',
        prompt: 'if (user.isActive) {',
        expectedStart: 'return'
    },
    {
        type: 'control-flow',
        name: 'switch case statement',
        prompt: 'switch (status) {',
        expectedStart: 'case'
    },
    {
        type: 'control-flow',
        name: 'ternary operator',
        prompt: 'const message = isError ?',
        expectedStart: 'Error'
    },
    {
        type: 'control-flow',
        name: 'for loop with index',
        prompt: 'for (let i = 0; i <',
        expectedStart: 'i++'
    },
    {
        type: 'control-flow',
        name: 'do-while loop',
        prompt: 'do { console.log(i); i++; } while (i',
        expectedStart: '<'
    },
    {
        type: 'control-flow',
        name: 'try-catch-finally block',
        prompt: 'try { console.log(i); i++; } catch',
        expectedStart: 'e'
    },
    {
        type: 'control-flow',
        name: 'conditional chaining',
        prompt: 'const name = data?.user?.profile?.',
        expectedStart: 'name'
    },
    {
        type: 'control-flow',
        name: 'early return pattern',
        prompt: 'if (!user) {',
        expectedStart: 'return'
    }
]; 