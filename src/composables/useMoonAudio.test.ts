import { describe, expect, it } from 'vitest'
import { moonFrequencies } from './useMoonAudio'

describe('moon ambience', () => {
  it('uses a soft three-note minor atmosphere', () => {
    expect(moonFrequencies).toEqual([146.83, 174.61, 220])
  })
})
