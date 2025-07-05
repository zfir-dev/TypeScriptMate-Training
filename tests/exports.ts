export const exportTests = [
    {
        type: 'exports',
        name: 'default export function',
        prompt: 'export default function',
        expectedStart: 'void'
    },
    {
        type: 'exports',
        name: 'default export arrow function',
        prompt: 'export default (',
        expectedStart: '=>'
    },
    {
        type: 'exports',
        name: 'named export function',
        prompt: 'export function calculate',
        expectedStart: 'number'
    },
    {
        type: 'exports',
        name: 'named export const',
        prompt: 'export const API_URL =',
        expectedStart: 'http'
    },
    {
        type: 'exports',
        name: 'export interface',
        prompt: 'export interface User',
        expectedStart: '{'
    },
    {
        type: 'exports',
        name: 'export type',
        prompt: 'export type Status =',
        expectedStart: 'Success'
    },
    {
        type: 'exports',
        name: 'export class',
        prompt: 'export class Service',
        expectedStart: '{'
    },
    {
        type: 'exports',
        name: 'export enum',
        prompt: 'export enum Color',
        expectedStart: '{'
    },
    {
        type: 'exports',
        name: 'export namespace',
        prompt: 'export namespace Utils',
        expectedStart: '{'
    },
    {
        type: 'exports',
        name: 'export with type assertion',
        prompt: 'export const userData = {} as',
        expectedStart: 'User'
    },
    {
        type: 'exports',
        name: 're-export',
        prompt: 'export { Component } from',
        expectedStart: '\''
    },
    {
        type: 'exports',
        name: 're-export with alias',
        prompt: 'export { Component as MyComponent } from',
        expectedStart: '\''
    },
    {
        type: 'exports',
        name: 'export all',
        prompt: 'export * from',
        expectedStart: './'
    },
    {
        type: 'exports',
        name: 'export default object',
        prompt: 'export default {',
        expectedStart: 'name'
    }
]; 