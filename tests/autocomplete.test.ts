import axios from 'axios'
import { basics } from './basics'
import { types } from './types'
import { classes } from './classes'
import { imports } from './imports'
import { exportTests } from './exports'
import { asyncTests } from './async'
import { decorators } from './decorators'
import { modules } from './modules'
import { advancedTypes } from './advanced-types'
import { controlFlow } from './control-flow'
import { comments } from './comments'

export interface Scenario {
  name: string
  prompt: string
  expectedStart: string
}

export const API_URL = 'https://zfir-typescriptmate.hf.space/complete'

const scenarios: Scenario[] = [
  ...basics,
  ...types,
  ...classes,
  ...imports,
  ...exportTests,
  ...asyncTests,
  ...decorators,
  ...modules,
  ...advancedTypes,
  ...controlFlow,
  ...comments,
]

describe('Autocomplete', () => {
  for (const s of scenarios) {
    it(`completes ${s.name}`, async () => {
      const res = await axios.post(API_URL, {
        prompt: s.prompt,
        maxTokens: 32
      })
      const completion = res.data.completion
      try {
        expect(completion.toLowerCase().includes(s.expectedStart.toLowerCase())).toBeTruthy()
      } catch (e) {
        console.log("failed completion for", s.name, ": ", completion)
        throw e;
      }
    })
  }
})
