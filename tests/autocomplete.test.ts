import axios from 'axios'
import { basics } from './basics'

export interface Scenario {
  name: string
  prompt: string
  expectedStart: string
}

export const API_URL = 'https://zfir-typescriptmate.hf.space/complete'

const scenarios: Scenario[] = [
  ...basics,
]

describe('Autocomplete', () => {
  for (const s of scenarios) {
    it(`completes ${s.name}`, async () => {
      const res = await axios.post(API_URL, {
        prompt: s.prompt,
        maxTokens: 32
      })
      const completion = res.data.completion
      expect(completion.startsWith(s.expectedStart)).toBeTruthy()
    })
  }
})
