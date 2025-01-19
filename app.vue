<template>
  <div>
    <audio
      ref="audioElement"
      src="/sounds/ambiant-music.mp3"
      preload="auto"
      loop
    />
    <NuxtPage @start-music="startMusic" />
  </div>
</template>

<script setup lang="ts">
const audioElement = ref<HTMLAudioElement | null>(null)

const startMusic = () => {
  audioElement.value?.play()
}
</script>
