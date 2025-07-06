export const decorators = [
    {
        type: 'decorators',
        name: 'class decorator',
        prompt: '@Component(',
        expectedStart: ['{']
    },
    {
        type: 'decorators',
        name: 'method decorator',
        prompt: '//users api\n@Get("/api/',
        expectedStart: ['users']
    },
    {
        type: 'decorators',
        name: 'property decorator',
        prompt: '@Prop(',
        expectedStart: ['{']
    },
    {
        type: 'decorators',
        name: 'parameter decorator',
        prompt: '//inject TOKEN\nconstructor(@Inject(',
        expectedStart: ['TOKEN']
    },
    {
        type: 'decorators',
        name: 'decorator factory',
        prompt: '@Injectable(',
        expectedStart: ['{']
    },
    {
        type: 'decorators',
        name: 'multiple decorators',
        prompt: '@Component({})\n@Injectable()\nclass',
        expectedStart: ['Component']
    },
    {
        type: 'decorators',
        name: 'decorator with options',
        prompt: '@Validate({ required:',
        expectedStart: ['true']
    },
    {
        type: 'decorators',
        name: 'decorator on accessor',
        prompt: '@Computed getter<T> = (',
        expectedStart: ['value', 'T']
    },
    {
        type: 'decorators',
        name: 'decorator with metadata',
        prompt: '@Reflect.metadata(',
        expectedStart: ['\"']
    },
    {
        type: 'decorators',
        name: 'custom decorator function',
        prompt: 'function Log(msg: ',
        expectedStart: ['string']
    }
]; 