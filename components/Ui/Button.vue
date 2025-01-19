<template>
  <button :class="$style.wrapper" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(['click'])

const onClick = () => {
  emits('click')
}
</script>

<style module>
.wrapper {
  padding: 30px 60px 20px;
  color: white;
  font-family: Jomhuria, sans-serif;
  font-size: 68px;
  text-transform: uppercase;
  background-color: var(--color-600);
  border-radius: 20px;
  border: solid 4px var(--color-800);
  line-height: 42%;
  cursor: pointer;
  box-shadow: inset 0px -4px 2px rgba(255, 255, 255, 0.02);
  transition: box-shadow 0.2s;
  text-shadow: 0 0 10px black;

  &:hover {
    box-shadow: inset 0px -10px 6px rgba(255, 255, 255, 0.02);
  }
}
</style>
