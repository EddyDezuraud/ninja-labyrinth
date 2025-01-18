<template>
  <div :class="[$style.tile, $style[`tile--${id}`]]"></div>
</template>

<script setup lang="ts">
interface Props {
  id: string
}

defineProps<Props>()
</script>

<style module lang="postcss">
.tile {
  width: 100px;
  height: 100px;
  background-image: url('/tile-sprite.svg');
}

.tile--D0 {
  background-position: 0 0;
}

.tile--D1 {
  background-position: -100px 0;
}

.tile--P0 {
  background-position: 0 -100px;
}

.tile--P1 {
  background-position: -100px -100px;
}

.tile--P2 {
  background-position: -200px -100px;
}

.tile--P3 {
  background-position: -300px -100px;
}

.tile--P4 {
  background-position: -400px -100px;
}

.tile--P5 {
  background-position: -500px -100px;
}

.tile--P6 {
  background-position: -600px -100px;
}

.tile--P7 {
  background-position: -700px -100px;
}

.tile--W0 {
  background-position: 0px -200px;
}

.tile--W1 {
  background-position: -100px -200px;
}

.tile--W2 {
  background-position: -200px -200px;
}

.tile--W3 {
  background-position: -300px -200px;
}

.tile--W4 {
  background-position: -400px -200px;
}

.tile--W5 {
  background-position: -500px -200px;
}

.tile--W6 {
  background-position: -600px -200px;
}

.tile--W7 {
  background-position: -700px -200px;
}

.tile--W8 {
  background-position: -800px -200px;
}

.tile--W9 {
  background-position: -900px -200px;
}

.tile--W10 {
  background-position: -1000px -200px;
}

.tile--W11 {
  background-position: -1100px -200px;
}

.tile--W12 {
  background-position: -1200px -200px;
}

.tile--X0 {
  background-position: 0px -300px;
}

.tile--S0 {
  background-position: 0px -400px;
}
</style>
