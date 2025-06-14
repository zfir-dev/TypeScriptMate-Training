export const classes = [
    {
        name: 'simple class declaration',
        prompt: 'class Person {',
        expectedStart: '\n  name: string'
    },
    {
        name: 'class with constructor body',
        prompt: 'class Person { constructor(name: string) {',
        expectedStart: '\n    this.'
    },
    {
        name: 'class property initialization',
        prompt: 'class Counter { count: number =',
        expectedStart: ' 0'
    },
    {
        name: 'static method call',
        prompt: 'class Utils { static log(msg: string): void { console.log(msg); } }\nUtils.',
        expectedStart: 'log('
    },
    {
        name: 'class inheritance override',
        prompt: 'class Animal { move() {} }\nclass Bird extends Animal { move() {',
        expectedStart: '\n    super.'
    },
    {
        name: 'abstract class method',
        prompt: 'abstract class Shape { abstract area(): number; }\nclass Circle extends Shape { area() {',
        expectedStart: '\n    return'
    },
    {
        name: 'getter in class',
        prompt: 'class Person { private _name: string;\n  constructor(name: string) { this._name = name; }\n  get name() {',
        expectedStart: '\n    return'
    },
    {
        name: 'setter in class',
        prompt: 'class Person { private _age: number;\n  set age(value: number) {',
        expectedStart: '\n    this._age ='
    },
    {
        name: 'class implementing interface',
        prompt: 'interface Serializable { serialize(): string; }\nclass Model implements Serializable { serialize() {',
        expectedStart: '\n    return'
    },
    {
        name: 'generic class definition',
        prompt: 'class Repository<T> { items: T[] = [];\n  add(item: T) {',
        expectedStart: '\n    this.'
    }
];
