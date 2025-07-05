export const imports = [
    {
        type: 'imports',
        name: 'default import',
        prompt: 'import React from',
        expectedStart: 'react'
    },
    {
        type: 'imports',
        name: 'named import',
        prompt: 'import { useState } from',
        expectedStart: 'react'
    },
    {
        type: 'imports',
        name: 'multiple named imports',
        prompt: 'import { useState, useEffect,',
        expectedStart: 'useRef'
    },
    {
        type: 'imports',
        name: 'import with alias',
        prompt: 'import { useState as',
        expectedStart: 'useState'
    },
    {
        type: 'imports',
        name: 'import type',
        prompt: 'import type { User } from',
        expectedStart: './'
    },
    {
        type: 'imports',
        name: 'import from relative path',
        prompt: 'import { Logger } from',
        expectedStart: './'
    },
    {
        type: 'imports',
        name: 'import from node_modules',
        prompt: 'import axios from',
        expectedStart: 'axios'
    },
    {
        type: 'imports',
        name: 'dynamic import',
        prompt: 'const module = await import(',
        expectedStart: './'
    },
    {
        type: 'imports',
        name: 'import with type assertion',
        prompt: 'import data from "./data.json" assert { type:',
        expectedStart: 'string'
    },
    {
        type: 'imports',
        name: 'import all as namespace',
        prompt: 'import * as',
        expectedStart: 'React'
    }
]; 