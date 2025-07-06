export const modules = [
    {
        type: 'modules',
        name: 'namespace declaration',
        prompt: 'namespace Utils {',
        expectedStart: ['export']
    },
    {
        type: 'modules',
        name: 'namespace with interface',
        prompt: 'namespace API { interface User {',
        expectedStart: ['name']
    },
    {
        type: 'modules',
        name: 'namespace export',
        prompt: 'namespace Utils { export function formatDate',
        expectedStart: ['date']
    },
    {
        type: 'modules',
        name: 'module declaration',
        prompt: 'declare module "express" {',
        expectedStart: ['express']
    },
    {
        type: 'modules',
        name: 'module augmentation',
        prompt: 'declare module "express" { interface Request {',
        expectedStart: ['body']
    },
    {
        type: 'modules',
        name: 'ambient module',
        prompt: 'declare module "*" { export interface User {',
        expectedStart: ['name']
    },
    {
        type: 'modules',
        name: 'namespace merging',
        prompt: 'namespace App { export interface User {',
        expectedStart: ['name']
    },
    {
        type: 'modules',
        name: 'triple-slash directive',
        prompt: '/// <reference path="',
        expectedStart: ['./']
    },
    {
        type: 'modules',
        name: 'module with exports',
        prompt: 'module.exports =',
        expectedStart: ['{']
    },
    {
        type: 'modules',
        name: 'require statement',
        prompt: 'const express = require(',
        expectedStart: ['express']
    },
    {
        type: 'modules',
        name: 'namespace with class',
        prompt: 'namespace Database { export class Database {',
        expectedStart: ['constructor']
    },
    {
        type: 'modules',
        name: 'module with type exports',
        prompt: 'declare module "my-module" { export type User {',
        expectedStart: ['name']
    }
]; 