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

.tile--D0,
.tile-D1 {
  background-position: 0 0;
}

.tile--P0 {
  background-position: -100px 0;
}

.tile--P1 {
  background-position: -200px 0;
}

.tile--P2 {
  background-position: -300px 0;
}

.tile--P3 {
  background-position: -400px 0;
}

.tile--P4 {
  background-position: -500px 0;
}

.tile--P5 {
  background-position: -600px 0;
}

.tile--P6 {
  background-position: -700px 0;
}

.tile--P7 {
  background-position: -800px 0;
}

.tile--W0 {
  background-position: -900px 0;
}

.tile--W1 {
  background-position: -1000px 0;
}

.tile--W2 {
  background-position: -1100px 0;
}

.tile--W3 {
  background-position: -1200px 0;
}

.tile--W4 {
  background-position: -1300px 0;
}

.tile--W5 {
  background-position: -1400px 0;
}

.tile--W6 {
  background-position: -1500px 0;
}

.tile--W7 {
  background-position: -1600px 0;
}

.tile--W8 {
  background-position: -1700px 0;
}

.tile--W9 {
  background-position: -1800px 0;
}

.tile--W10 {
  background-position: -1900px 0;
}

.tile--W11 {
  background-position: -2000px 0;
}

.tile--W12 {
  background-position: -2100px 0;
}

.tile--X0 {
  background-position: -2200px 0;
}
</style>
