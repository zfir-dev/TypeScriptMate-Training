export const classes = [
    {
        type: 'classes',
        name: 'simple class declaration',
        prompt: 'class Person {',
        expectedStart: 'name: string'
    },
    {
        type: 'classes',
        name: 'class with constructor body',
        prompt: 'class Person { constructor(name: string) {',
        expectedStart: 'this.'
    },
    {
        type: 'classes',
        name: 'class property initialization',
        prompt: 'class Counter { count: number =',
        expectedStart: '0'
    },
    {
        type: 'classes',
        name: 'static method call',
        prompt: 'class Utils { static log(msg: string): void { console.log(msg); } }\nUtils.',
        expectedStart: 'log('
    },
    {
        type: 'classes',
        name: 'class inheritance override',
        prompt: 'class Animal { move() {} }\nclass Bird extends Animal {',
        expectedStart: 'move()'
    },
    {
        type: 'classes',
        name: 'abstract class method',
        prompt: 'abstract class Shape { abstract area(): number; }\nclass Circle extends Shape {',
        expectedStart: 'area()'
    },
    {
        type: 'classes',
        name: 'getter in class',
        prompt: 'class Person { private _name: string;\n  constructor(name: string) { this._name = name; }\n  get name() {',
        expectedStart: 'return'
    },
    {
        type: 'classes',
        name: 'setter in class',
        prompt: 'class Person { private _age: number;\n  set age(value: number) {',
        expectedStart: 'this._age ='
    },
    {
        type: 'classes',
        name: 'class implementing interface',
        prompt: 'interface Serializable { serialize(): string; }\nclass Model implements Serializable { serialize() {',
        expectedStart: 'return'
    },
    {
        type: 'classes',
        name: 'generic class definition',
        prompt: 'class Repository<T> { items: T[] = [];\n  add(item: T) {',
        expectedStart: 'this.'
    }
];
