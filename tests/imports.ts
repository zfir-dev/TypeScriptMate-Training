export const imports = [
    {
        name: 'default import',
        prompt: 'import React from',
        expectedStart: 'react'
    },
    {
        name: 'named import',
        prompt: 'import { useState } from',
        expectedStart: 'react'
    },
    {
        name: 'multiple named imports',
        prompt: 'import { useState, useEffect,',
        expectedStart: 'useRef'
    },
    {
        name: 'import with alias',
        prompt: 'import { useState as',
        expectedStart: 'useState'
    },
    {
        name: 'import type',
        prompt: 'import type { User } from',
        expectedStart: './'
    },
    {
        name: 'import from relative path',
        prompt: 'import { Logger } from',
        expectedStart: './'
    },
    {
        name: 'import from node_modules',
        prompt: 'import axios from',
        expectedStart: 'axios'
    },
    {
        name: 'dynamic import',
        prompt: 'const module = await import(',
        expectedStart: './'
    },
    {
        name: 'import with type assertion',
        prompt: 'import data from "./data.json" assert { type:',
        expectedStart: 'string'
    },
    {
        name: 'import all as namespace',
        prompt: 'import * as',
        expectedStart: 'React'
    }
]; 