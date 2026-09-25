import { describe, expect, it } from 'vitest'
import { localMusicSource, startLocalMusic } from './localMusic'

describe('local background music', () => {
  it('uses the private local audio asset', () => {
    expect(localMusicSource).toBe('/local-music.mp3')
  })

  it('reports whether the browser accepted automatic playback', async () => {
    const accepted = await startLocalMusic({ play: () => Promise.resolve() })
    const blocked = await startLocalMusic({ play: () => Promise.reject(new Error('blocked')) })

    expect(accepted).toBe(true)
    expect(blocked).toBe(false)
  })
})
