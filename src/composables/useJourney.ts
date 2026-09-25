import { onBeforeUnmount, ref } from 'vue'

export const journeyFrames = [
  { target: 'hero', text: '今晚的月亮，是宇宙写给人间的情书。' },
  { target: 'orbit', text: '有些距离，月光可以替我们抵达。' },
  { target: 'romantic', text: '而我希望，明年的月亮，也有人陪你一起看。' },
  { target: 'hud', text: 'LUNAR SIGNAL · CONNECTED' },
  { target: 'final', text: '海上生明月，天涯共此时。' }
] as const

export function useJourney() {
  const playing = ref(false)
  const frame = ref(0)
  const timers: number[] = []
  const clear = () => { while (timers.length) clearTimeout(timers.pop()) }
  const start = () => {
    clear(); playing.value = true; frame.value = 0
    journeyFrames.forEach((item, index) => {
      timers.push(window.setTimeout(() => {
        frame.value = index
        document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, index * 4300))
    })
  }
  onBeforeUnmount(clear)
  return { playing, frame, start }
}
