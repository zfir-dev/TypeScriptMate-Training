export const modules = [
    {
        name: 'namespace declaration',
        prompt: 'namespace Utils {',
        expectedStart: 'export'
    },
    {
        name: 'namespace with interface',
        prompt: 'namespace API { interface User {',
        expectedStart: 'name'
    },
    {
        name: 'namespace export',
        prompt: 'namespace Utils { export function formatDate',
        expectedStart: 'date'
    },
    {
        name: 'module declaration',
        prompt: 'declare module "express" {',
        expectedStart: 'express'
    },
    {
        name: 'module augmentation',
        prompt: 'declare module "express" { interface Request {',
        expectedStart: 'body'
    },
    {
        name: 'ambient module',
        prompt: 'declare module "*" { export interface User {',
        expectedStart: 'name'
    },
    {
        name: 'namespace merging',
        prompt: 'namespace App { export interface User {',
        expectedStart: 'name'
    },
    {
        name: 'triple-slash directive',
        prompt: '/// <reference path="',
        expectedStart: './'
    },
    {
        name: 'module with exports',
        prompt: 'module.exports =',
        expectedStart: '{'
    },
    {
        name: 'require statement',
        prompt: 'const express = require(',
        expectedStart: 'express'
    },
    {
        name: 'namespace with class',
        prompt: 'namespace Database { export class Database {',
        expectedStart: 'constructor'
    },
    {
        name: 'module with type exports',
        prompt: 'declare module "my-module" { export type User {',
        expectedStart: 'name'
    }
]; 