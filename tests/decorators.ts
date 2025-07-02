export const decorators = [
    {
        name: 'class decorator',
        prompt: '@Component(',
        expectedStart: '{'
    },
    {
        name: 'method decorator',
        prompt: '//users api\n@Get("/api/',
        expectedStart: 'users'
    },
    {
        name: 'property decorator',
        prompt: '@Prop(',
        expectedStart: '{'
    },
    {
        name: 'parameter decorator',
        prompt: '//inject TOKEN\nconstructor(@Inject(',
        expectedStart: 'TOKEN'
    },
    {
        name: 'decorator factory',
        prompt: '@Injectable(',
        expectedStart: '{'
    },
    {
        name: 'multiple decorators',
        prompt: '@Component({})\n@Injectable()\nclass',
        expectedStart: 'Component'
    },
    {
        name: 'decorator with options',
        prompt: '@Validate({ required:',
        expectedStart: 'true'
    },
    {
        name: 'decorator on accessor',
        prompt: '@Computed getter<T> = (',
        expectedStart: 'value'
    },
    {
        name: 'decorator with metadata',
        prompt: '@Reflect.metadata(',
        expectedStart: '"design:type"'
    },
    {
        name: 'custom decorator function',
        prompt: 'function Log(msg: ',
        expectedStart: 'string'
    }
]; 