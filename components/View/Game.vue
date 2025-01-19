<template>
  <div :class="$style.wrapper">
    <audio
      ref="exitAudioElement"
      src="/sounds/exit-opened.mp3"
      preload="auto"
    />
    <TheTorchAura />
    <TheMap
      :grid="map.grid"
      :height="map.height"
      :position="player.position"
      :width="map.height"
      :is-exit-open="map.isExitOpen"
      :is-trap-active="map.isTrapActive"
    />
    <ThePlayer
      :class="$style.player"
      :direction="player.direction"
      :is-moving="player.isMoving"
      :is-sound-muted="false"
    />
    <ThePlayerControl
      :class="$style['player-control']"
      :activeButtons="player.keysPressed"
      :showInteractButton="player.showInteractButton"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  level: number
}

const { level } = defineProps<Props>()

const emits = defineEmits<{
  (e: 'end'): void
  (e: 'lose'): void
}>()

const exitAudioElement = ref<HTMLAudioElement | null>(null)

const levelFiles = [LEVEL_1, LEVEL_2, LEVEL_3]

const { map, player } = useGameEngine(levelFiles[level - 1])

watchEffect(() => {
  if (player.isDead) {
    emits('lose')
  }

  if (map.isEnd) {
    emits('end')
  }

  if (map.isExitOpen) {
    exitAudioElement.value?.play()
  }
})
</script>

<style module lang="postcss">
body {
  background-color: var(--edge);
}

.wrapper {
  height: 100vh;
  overflow: hidden;
}

.player {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.player-control {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
}
</style>
