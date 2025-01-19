<template>
  <div :class="[$style.wrapper, { [$style.inGame]: view === 'game' }]">
    <div :class="$style.views">
      <ViewGame
        v-if="view === 'game'"
        :level
        @lose="onLoseGame()"
        @end="onEndGame()"
      />
      <ViewNextLevel
        v-else-if="view === 'next'"
        :level
        :timer
        @next-level="onNextLevel()"
      />
      <ViewEndGame
        v-else-if="view === 'end'"
        :timesHistory
        @back-home="onBackHome()"
      />
      <ViewLoseGame
        v-else-if="view === 'lose'"
        :level
        @back-home="onBackHome()"
      />
      <ViewStart v-else @start-game="onStartGame()" />
    </div>
    <div :class="$style.ui">
      <UiTag :class="$style.levelTag">Level {{ level }}</UiTag>
      <UiTag :class="$style.timerTag" size="small">Timer: {{ timer }}s</UiTag>
    </div>
    <audio
      ref="backgroundAudioElement"
      src="/sounds/ambiant-music.mp3"
      preload="auto"
      loop
    />
    <audio
      ref="teleportingAudioElement"
      src="/sounds/portal-transition-sound.mp3"
      preload="auto"
    />
    <audio
      ref="ripAudioElement"
      src="/sounds/rip-sound.mp3"
      preload="auto"
    />
  </div>
</template>

<script setup lang="ts">
const { getPlayerLevel, savePlayerLevel, resetGameSave } = useGameSave()

const view = ref<'start' | 'game' | 'lose' | 'next' | 'end'>('start')
const level = ref(1)
const timer = ref(0)
let timerInterval = null as any
const timesHistory = ref<number[]>([])
const backgroundAudioElement = ref<HTMLAudioElement | null>(null)
const teleportingAudioElement = ref<HTMLAudioElement | null>(null)
const ripAudioElement = ref<HTMLAudioElement | null>(null)

const startAudio = (): void => {
  if (backgroundAudioElement.value) {
    backgroundAudioElement.value.play()
  }
}

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
  level.value = getPlayerLevel() ?? 1
  startAudio()
  view.value = 'game'
  startTimer()
}

const onNextLevel = (): void => {
  level.value += 1
  savePlayerLevel(level.value)
  view.value = 'game'
  resetTimer()
  startTimer()
}

const onEndGame = (): void => {
  if (teleportingAudioElement.value) {
    teleportingAudioElement.value.volume = 0.3
    teleportingAudioElement.value?.play()
  }

  saveTime()
  endTimer()
  resetGameSave()

  if (level.value === MAX_LEVEL) {
    view.value = 'end'
  } else {
    view.value = 'next'
  }
}

const onLoseGame = (): void => {
  if (ripAudioElement.value) {
    ripAudioElement.value?.play()
  }

  endTimer()
  resetGameSave()

  if (level.value === MAX_LEVEL) {
    view.value = 'lose'
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
