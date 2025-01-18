<template>
  <div :class="$style.wrapper">
    <audio
      ref="audioElement"
      src="/sounds/ambiant-music.mp3"
      preload="auto"
      loop
    />
    <button
      @click="startMusic"
      style="
        position: absolute;
        right: 0;
        background-color: white;
        z-index: 100;
      "
    >
      Démarrer la musique
    </button>

    <div style="position: absolute; top: 0px; z-index: 100; background: white">
      playerPosition: {{ player.position }} playerDirection:
      {{ player.direction }} isMoving: {{ player.isMoving }} TileId:
      {{ tileId }}
    </div>
    <TheTorchAura />
    <TheMap
      :grid="level1"
      :height="map.height"
      :position="player.position"
      :width="map.height"
    />
    <ThePlayer
      :class="$style.player"
      :direction="player.direction"
      :is-moving="player.isMoving"
      :is-sound-muted="false"
    />
  </div>
</template>

<script setup lang="ts">
import level1 from '~/assets/levels/level1.json'

const audioElement = ref<HTMLAudioElement | null>(null)
const { map, player, getTileId } = useMap(level1)
const tileId = computed(() => getTileId(player.position.x, player.position.y))

const startMusic = () => {
  audioElement.value?.play()
}
</script>

<style module lang="postcss">
body {
  background-color: var(--ground);
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
</style>
