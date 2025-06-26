import axios from 'axios'
import { basics } from './basics'
import { types } from './types'
import { classes } from './classes'

export interface Scenario {
  name: string
  prompt: string
  expectedStart: string
}

export const API_URL = 'https://zfir-typescriptmate.hf.space/complete'

const scenarios: Scenario[] = [
  ...basics,
  ...types,
  ...classes
]

describe('Autocomplete', () => {
  for (const s of scenarios) {
    it(`completes ${s.name}`, async () => {
      const res = await axios.post(API_URL, {
        prompt: s.prompt,
        maxTokens: 32
      })
      const completion = res.data.completion
      console.log("completion for", s.name, ": ", completion)
      expect(completion.toLowerCase().includes(s.expectedStart.toLowerCase())).toBeTruthy()
    })
  }
})
