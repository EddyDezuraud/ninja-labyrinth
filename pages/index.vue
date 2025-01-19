<template>
  <div :class="[$style.wrapper, { [$style.inGame]: view === 'game' }]">
    <div :class="$style.views">
      <ViewGame v-if="view === 'game'" :level @end="onEndGame()" />
      <ViewNextLevel
        v-else-if="view === 'next'"
        :level
        :timesHistory
        @next-level="onNextLevel()"
      />
      <ViewEndGame
        v-else-if="view === 'end'"
        :level
        :timer
        @back-home="onBackHome()"
      />
      <ViewStart v-else @start-game="onStartGame()" />
    </div>
    <div :class="$style.ui">
      <UiTag :class="$style.levelTag">Level {{ level }}</UiTag>
      <UiTag :class="$style.timerTag" size="small">Timer: {{ timer }}s</UiTag>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: 'start-music'): void
}>()

const view = ref<'start' | 'game' | 'next' | 'end'>('start')
const level = ref<number>(1)
const timer = ref<number>(0)
const maxLevel = 3
let timerInterval = null as any
const timesHistory = ref<number[]>([])

const startTimer = (): void => {
  timerInterval = setInterval(() => {
    timer.value += 1
  }, 1000)
}

const saveTime = (): void => {
  timesHistory.value.push(timer.value)
}

const endTimer = (): void => {
  clearInterval(timerInterval)
}

const resetTimer = (): void => {
  timer.value = 0
}

const resetHistory = (): void => {
  timesHistory.value = []
}

const onStartGame = (): void => {
  emits('start-music')
  view.value = 'game'
  startTimer()
}

const onNextLevel = (): void => {
  level.value += 1
  view.value = 'game'
  resetTimer()
  startTimer()
}

const onEndGame = (): void => {
  saveTime()
  endTimer()

  if (level.value === maxLevel) {
    view.value = 'end'
  } else {
    view.value = 'next'
  }
}

const onBackHome = (): void => {
  view.value = 'start'
  level.value = 1
  resetTimer()
  resetHistory()
}
</script>

<style module lang="postcss">
.wrapper {
  display: block;
  font-family: Fredoka, sans-serif;
}

.ui {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}

.levelTag {
  position: fixed;
  top: 20px;
  left: 20px;
  opacity: 0;
  transition: opacity 0.7s;
}

.timerTag {
  position: fixed;
  top: 20px;
  right: 20px;
}

.timerTag,
.levelTag {
  opacity: 0;
}

.inGame {
  .timerTag,
  .levelTag {
    opacity: 1;
  }
}
</style>
