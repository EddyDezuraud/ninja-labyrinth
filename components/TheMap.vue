<template>
  <div
    :class="$style.map"
    :style="`width: ${width}px; height: ${height}px; transform: translateX(${(position.x - initialPositionOffset.x) * -1}px) translateY(${(position.y - initialPositionOffset.y) * -1}px);`"
  >
    <GridTile
      v-for="(id, index) in grid"
      :id="id"
      :key="`tile-${id}-${index}`"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  grid: string[]
  width: number
  height: number
  position: {
    x: number
    y: number
  }
}

defineProps<Props>()

const initialPositionOffset = reactive({
  x: 0,
  y: 0,
})

const updateScreenSize = () => {
  initialPositionOffset.x = window.innerWidth / 2 - 75
  initialPositionOffset.y = window.innerHeight / 2 - 75
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<style module lang="postcss">
.map {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  background-color: var(--ground);
  transition: transform 0.2s linear;
}
</style>
