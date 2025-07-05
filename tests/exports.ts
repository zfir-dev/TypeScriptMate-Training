export const exportTests = [
    {
        name: 'default export function',
        prompt: 'export default function',
        expectedStart: 'void'
    },
    {
        name: 'default export arrow function',
        prompt: 'export default (',
        expectedStart: '=>'
    },
    {
        name: 'named export function',
        prompt: 'export function calculate',
        expectedStart: 'number'
    },
    {
        name: 'named export const',
        prompt: 'export const API_URL =',
        expectedStart: 'http'
    },
    {
        name: 'export interface',
        prompt: 'export interface User',
        expectedStart: '{'
    },
    {
        name: 'export type',
        prompt: 'export type Status =',
        expectedStart: 'Success'
    },
    {
        name: 'export class',
        prompt: 'export class Service',
        expectedStart: '{'
    },
    {
        name: 'export enum',
        prompt: 'export enum Color',
        expectedStart: '{'
    },
    {
        name: 'export namespace',
        prompt: 'export namespace Utils',
        expectedStart: '{'
    },
    {
        name: 'export with type assertion',
        prompt: 'export const userData = {} as',
        expectedStart: 'User'
    },
    {
        name: 're-export',
        prompt: 'export { Component } from',
        expectedStart: '\''
    },
    {
        name: 're-export with alias',
        prompt: 'export { Component as MyComponent } from',
        expectedStart: '\''
    },
    {
        name: 'export all',
        prompt: 'export * from',
        expectedStart: './'
    },
    {
        name: 'export default object',
        prompt: 'export default {',
        expectedStart: 'name'
    }
]; 