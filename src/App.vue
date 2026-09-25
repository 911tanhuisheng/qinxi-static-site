<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import StarField from './components/StarField.vue'
import { localMusicSource, startLocalMusic } from './composables/localMusic'
import { nextStoryPage, storyIntervalMs, storyPages } from './composables/story'

const page = ref(-1)
const current = computed(() => page.value < 0 ? null : storyPages[page.value])
const audio = ref<HTMLAudioElement>()
const playing = ref(false)
let startTimer = 0
let interval = 0

const start = async () => {
  if (!audio.value) return
  playing.value = await startLocalMusic(audio.value)
}

const toggle = async () => {
  if (!audio.value) return
  if (playing.value) {
    audio.value.pause()
    playing.value = false
  } else {
    await start()
  }
}

const resumeAfterGesture = () => { void start() }

onMounted(() => {
  startTimer = window.setTimeout(() => page.value = 0, 1600)
  interval = window.setInterval(() => page.value = nextStoryPage(page.value), storyIntervalMs)
  void start()
  window.addEventListener('pointerdown', resumeAfterGesture, { once: true })
})

onBeforeUnmount(() => {
  clearTimeout(startTimer)
  clearInterval(interval)
  window.removeEventListener('pointerdown', resumeAfterGesture)
})
</script>

<template>
  <main class="story-app" :class="`page-${page}`">
    <audio ref="audio" :src="localMusicSource" loop preload="auto" @play="playing = true" @pause="playing = false" />
    <StarField />
    <div class="moon-photo" aria-hidden="true" />
    <div class="veil" aria-hidden="true" />
    <button class="sound-toggle" :aria-label="playing ? '关闭背景音乐' : '开启背景音乐'" @click="toggle">{{ playing ? '音乐 · 开' : '音乐 · 点一下播放' }}</button>
    <div class="story-tap"><Transition name="page" mode="out-in"><section v-if="!current" key="cover" class="story-card cover"><p class="kicker">MOONLIGHT LETTER</p><h1>月色寄相思</h1><p class="cover-line">山海搁万里</p><p class="cover-line">中秋愿你无忧</p><span class="tap-hint">月光正在抵达</span></section><section v-else :key="page" class="story-card"><p class="kicker">{{current.kicker}}</p><div class="copy"><h2>{{current.title}}</h2><p v-for="line in current.lines" :key="line">{{line}}</p></div><footer><span>{{current.note}}</span><i>{{page+1}} / {{storyPages.length}}</i></footer></section></Transition></div>
  </main>
</template>
