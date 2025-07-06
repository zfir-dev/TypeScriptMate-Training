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
    console.log('\n=== All Test Results by Type ===')
    
    // Group results by type
    const groupedResults = results.reduce((acc, result) => {
      if (!acc[result.type]) {
        acc[result.type] = []
      }
      acc[result.type].push(result)
      return acc
    }, {} as Record<string, typeof results>)

    // Calculate and display results for each type
    Object.entries(groupedResults).forEach(([type, typeResults]) => {
      const passedCount = typeResults.filter(r => r.passed).length
      const totalCount = typeResults.length
      const percentage = ((passedCount / totalCount) * 100).toFixed(2)
      
      console.log(`\n${type.toUpperCase()} (${passedCount}/${totalCount} - ${percentage}%)`)
      console.log('─'.repeat(50))
      
      // typeResults.forEach(result => {
      //   const status = result.passed ? '✅ PASS' : '❌ FAIL'
      //   console.log(`${status} ${result.name}`)
      // })
    })

    // Overall statistics
    const totalPassed = results.filter(r => r.passed).length
    const totalTests = results.length
    const overallPercentage = ((totalPassed / totalTests) * 100).toFixed(2)
    
    console.log('\n' + '='.repeat(50))
    console.log(`OVERALL RESULTS: ${totalPassed}/${totalTests} (${overallPercentage}%)`)
    console.log('='.repeat(50))

    // Show failed completions for debugging
    // const failedResults = results.filter(r => !r.passed)
    // if (failedResults.length > 0) {
    //   console.log('\n=== Failed Completions ===')
    //   failedResults.forEach(result => {
    //     console.log(`${result.type} - ${result.name}: "${result.completion}"`)
    //   })
    // }
  })
})
