<template>
  <div :class="$style.wrapper">
    <audio
      ref="exitAudioElement"
      src="/sounds/exit-opened.mp3"
      preload="auto"
    />

    <!-- <div style="position: absolute; top: 0px; z-index: 100; background: white">
      playerPosition: {{ player.position }} playerDirection:
      {{ player.direction }} isMoving: {{ player.isMoving }} TileId:
      {{ tileId }} isExitOpen:
      {{ map.isExitOpen }}
    </div> -->
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
}>()

const exitAudioElement = ref<HTMLAudioElement | null>(null)

const levelFiles = [
	LEVEL_1,
	LEVEL_2
]

const { map, player, getTileId } = useGameEngine(levelFiles[level - 1])
// const tileId = computed(() => getTileId(player.position.x, player.position.y))

watchEffect(() => {
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
