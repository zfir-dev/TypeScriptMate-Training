export const types = [
    {
        name: 'interface property type',
        prompt: 'interface User { id: number; name: string; active?:',
        expectedStart: ' boolean;'
    },
    {
        name: 'union literal',
        prompt: 'type Direction = "up" | "down" | "left" |',
        expectedStart: ' "right"'
    },
    {
        name: 'keyof operator',
        prompt: 'type UserKeys = keyof ',
        expectedStart: 'User'
    },
    {
        name: 'conditional type inference',
        prompt: 'type ElementType<T> = T extends (infer U)[] ?',
        expectedStart: ' U'
    },
    {
        name: 'mapped type',
        prompt: 'type ReadonlyUser = { readonly [K in keyof User]:',
        expectedStart: ' User[K]'
    },
    {
        name: 'utility type Partial',
        prompt: 'type PartialUser = Partial<',
        expectedStart: 'User>'
    },
    {
        name: 'record type',
        prompt: 'type StringMap = Record<',
        expectedStart: 'string, '
    },
    {
        name: 'intersection type',
        prompt: 'type Admin = User & { role:',
        expectedStart: ' string'
    }
]
