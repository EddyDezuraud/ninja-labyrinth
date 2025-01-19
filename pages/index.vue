<template>
  <div :class="$style.wrapper">
    <ViewGame v-if="view === 'game'" :level @end="onEndGame()" />
    <ViewEnd v-else-if="view === 'end'" :level :timer @next-level="onNextLevel()" />
    <ViewStart v-else @start-game="onStartGame()" />
  </div>
</template>

<script setup lang="ts">

const view = ref<'start' | 'game' | 'end'>('start');
const level = ref<number>(1);
const timer = ref<number>(0);
let timerInterval = null as any;

const startTimer = (): void => {
  timerInterval = setInterval(() => {
    timer.value += 1;
  }, 1000);
}

const endTimer = (): void => {
  clearInterval(timerInterval);
}

const resetTimer = (): void => {
  timer.value = 0;
}

const onStartGame = (): void => {
  view.value = 'game';
  startTimer();
}

const onNextLevel = (): void => {
	level.value += 1;
	view.value = 'game';
	resetTimer();
	startTimer();
}

const onEndGame = (): void => {
  view.value = 'end';
	endTimer();
}

</script>

<style module lang="postcss">
.wrapper {
  display: block;
	font-family: Fredoka, sans-serif;
}
</style>