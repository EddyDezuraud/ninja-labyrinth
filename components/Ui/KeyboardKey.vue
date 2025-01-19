<template>
  <div
    :class="[
      $style.wrapper,
      {
        [$style['wrapper--active']]: isActive,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isActive: boolean
}

defineProps<Props>()
</script>

<style module>
.wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bahiana', cursive;
  font-size: 24px;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  opacity: 0.5;

  &.wrapper--active {
    opacity: 1;
  }
}
</style>
