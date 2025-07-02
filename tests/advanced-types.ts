export const advancedTypes = [
    {
        name: 'template literal type',
        prompt: 'type EventName = `on${',
        expectedStart: 'Click'
    },
    {
        name: 'infer in conditional type',
        prompt: 'type ReturnType<T> = T extends (...args: any[]) => infer R ?',
        expectedStart: 'R'
    },
    {
        name: 'mapped type with key remapping',
        prompt: 'type Getters<T> = { [K in keyof T as `get${',
        expectedStart: 'K'
    },
    {
        name: 'recursive type',
        prompt: 'type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]:',
        expectedStart: 'JsonValue'
    },
    {
        name: 'const assertion',
        prompt: 'const colors = ["red", "blue",',
        expectedStart: 'green'
    },
    {
        name: 'satisfies operator',
        prompt: 'const apiConfig: { apiUrl: string, apiKey: string } = {',
        expectedStart: 'apiUrl'
    },
    {
        name: 'never type in union',
        prompt: 'type NonNullable<T> = T extends null | undefined ?',
        expectedStart: 'never'
    },
    {
        name: 'branded type',
        prompt: 'type UserId = string & { readonly brand: unique symbol };',
        expectedStart: 'const'
    },
    {
        name: 'distributive conditional type',
        prompt: 'type ToArray<T> = T extends any ?',
        expectedStart: 'T'
    },
    {
        name: 'tuple type with rest',
        prompt: 'type Concat<T extends readonly any[], U extends readonly any[]> = [...',
        expectedStart: 'T'
    },
    {
        name: 'indexed access type',
        prompt: 'type UserName = User["',
        expectedStart: 'name'
    },
    {
        name: 'keyof with mapped type',
        prompt: 'type Optional<T> = { [K in keyof T]?:',
        expectedStart: 'T'
    },
    {
        name: 'conditional type with union',
        prompt: 'type IsString<T> = T extends string ?',
        expectedStart: 'true'
    },
    {
        name: 'utility type Pick',
        prompt: 'type UserName = Pick<',
        expectedStart: 'User'
    },
    {
        name: 'utility type Omit',
        prompt: 'type UserWithoutId = Omit<',
        expectedStart: 'User'
    }
]; 