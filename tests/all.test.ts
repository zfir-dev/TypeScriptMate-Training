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
  type: string
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

describe('All Tests', () => {
  const results: { type: string, name: string, passed: boolean, completion?: string }[] = []
  for (const s of scenarios) {
    it(`completes ${s.name}`, async () => {
      const res = await axios.post(API_URL, {
        prompt: s.prompt,
        maxTokens: 32
      })
      const completion = res.data.completion
      try {
        expect(completion.toLowerCase().includes(s.expectedStart.toLowerCase())).toBeTruthy()
        results.push({
          type: s.type,
          name: s.name,
          passed: true,
          completion: completion
        })
      } catch (e) {
        console.log("failed completion for", s.name, ": ", completion)
        results.push({
          type: s.type,
          name: s.name,
          passed: false,
          completion: completion
        })
        throw e;
      }
    })
  }

  afterAll(() => {
    // group results by type to calculate pass rate in percentage
    const passRate = results.filter(r => r.passed).length / results.length * 100
    console.log(`Pass rate: ${passRate}%`)

    // print results
    results.forEach(r => {
      console.log(`${r.type} - ${r.name} - ${r.passed ? '✅' : '❌'}`)
    })
  })
})
