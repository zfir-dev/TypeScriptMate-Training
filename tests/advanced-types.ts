export const advancedTypes = [
    {
        type: 'advanced-types',
        name: 'template literal type',
        prompt: 'type EventName = `on${',
        expectedStart: ['Click']
    },
    {
        type: 'advanced-types',
        name: 'infer in conditional type',
        prompt: 'type ReturnType<T> = T extends (...args: any[]) => infer R ?',
        expectedStart: ['R']
    },
    {
        type: 'advanced-types',
        name: 'mapped type with key remapping',
        prompt: 'type Getters<T> = { [K in keyof T as `get${',
        expectedStart: ['K']
    },
    {
        type: 'advanced-types',
        name: 'recursive type',
        prompt: 'type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]:',
        expectedStart: ['JsonValue']
    },
    {
        type: 'advanced-types',
        name: 'const assertion',
        prompt: 'const colors = ["red", "blue",',
        expectedStart: ['green']
    },
    {
        type: 'advanced-types',
        name: 'satisfies operator',
        prompt: 'const apiConfig: { apiUrl: string, apiKey: string } = {',
        expectedStart: ['apiUrl']
    },
    {
        type: 'advanced-types',
        name: 'never type in union',
        prompt: 'type NonNullable<T> = T extends null | undefined ?',
        expectedStart: ['never']
    },
    {
        type: 'advanced-types',
        name: 'branded type',
        prompt: 'type UserId = string & { readonly brand: unique symbol };',
        expectedStart: ['const']
    },
    {
        type: 'advanced-types',
        name: 'distributive conditional type',
        prompt: 'type ToArray<T> = T extends any ?',
        expectedStart: ['T']
    },
    {
        type: 'advanced-types',
        name: 'tuple type with rest',
        prompt: 'type Concat<T extends readonly any[], U extends readonly any[]> = [...',
        expectedStart: ['T']
    },
    {
        type: 'advanced-types',
        name: 'indexed access type',
        prompt: 'type UserName = User["',
        expectedStart: ['name']
    },
    {
        type: 'advanced-types',
        name: 'keyof with mapped type',
        prompt: 'type Optional<T> = { [K in keyof T]?:',
        expectedStart: ['T']
    },
    {
        type: 'advanced-types',
        name: 'conditional type with union',
        prompt: 'type IsString<T> = T extends string ?',
        expectedStart: ['true']
    },
    {
        type: 'advanced-types',
        name: 'utility type Pick',
        prompt: 'type UserName = Pick<',
        expectedStart: ['User']
    },
    {
        type: 'advanced-types',
        name: 'utility type Omit',
        prompt: 'type UserWithoutId = Omit<',
        expectedStart: ['User']
    }
]; 