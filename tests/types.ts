export const types = [
    {
        type: 'types',
        name: 'interface property type',
        prompt: 'interface User { id: number; name: string; active?:',
        expectedStart: ['boolean']
    },
    {
        type: 'types',
        name: 'union literal',
        prompt: 'type Direction = "up" | "down" | "left" |',
        expectedStart: ['"right"']
    },
    {
        type: 'types',
        name: 'keyof operator',
        prompt: 'export type UserKeys = keyof ',
        expectedStart: ['User']
    },
    {
        type: 'types',
        name: 'conditional type inference',
        prompt: 'type ElementType<T> = T extends (infer U)[] ?',
        expectedStart: ['U']
    },
    {
        type: 'types',
        name: 'mapped type',
        prompt: 'type ReadonlyUser = { readonly [K in keyof User]:',
        expectedStart: ['User']
    },
    {
        type: 'types',
        name: 'utility type Partial',
        prompt: 'type PartialUser = Partial<',
        expectedStart: ['User>']
    },
    {
        type: 'types',
        name: 'record type',
        prompt: 'type StringMap = Record<',
        expectedStart: ['string,']
    },
    {
        type: 'types',
        name: 'intersection type',
        prompt: 'type Admin = User & { role:',
        expectedStart: ['string']
    }
]
