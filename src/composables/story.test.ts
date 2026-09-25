import { describe, expect, it } from 'vitest'
import { nextStoryPage, storyPages } from './story'

describe('moonlight story navigation', () => {
  it('returns to the cover after the last portrait page', () => {
    expect(storyPages).toHaveLength(5)
    expect(nextStoryPage(4)).toBe(-1)
    expect(nextStoryPage(-1)).toBe(0)
  })
})
