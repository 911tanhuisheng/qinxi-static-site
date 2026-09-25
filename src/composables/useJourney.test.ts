import { describe, expect, it } from 'vitest'
import { journeyFrames } from './useJourney'

describe('journeyFrames', () => {
  it('provides a five-part moonlight story in chronological order', () => {
    expect(journeyFrames).toHaveLength(5)
    expect(journeyFrames[0].target).toBe('hero')
    expect(journeyFrames[journeyFrames.length - 1].target).toBe('final')
  })
})
