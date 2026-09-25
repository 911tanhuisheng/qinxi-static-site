export const localMusicSource = '/local-music.mp3'

type PlayableAudio = Pick<HTMLAudioElement, 'play'>

export async function startLocalMusic(audio: PlayableAudio) {
  try {
    await audio.play()
    return true
  } catch {
    return false
  }
}
