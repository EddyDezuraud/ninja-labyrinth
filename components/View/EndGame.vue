<template>
  <div :class="[$style.wrapper, {[$style.leaving] : isLeaving}, {[$style.initialized] : isInitialized}]">

      <div :class="$style.inner">
          <div :class="$style.content">
              <h1 :class="$style.title">Victory Achieved!</h1>
              <p :class="$style.p">
								You’ve conquered the game in <strong>{{ readableTimer }}! </strong><br/>
								Thanks for playing and see you on your next adventure!
              </p>
          </div>
          <UiButton :class="$style.button" @click="onClickButton" >Go Home</UiButton>
      </div>

      <div :class="$style.scenery">
          <img :class="$style.darkTree" src="/images/dark-tree.svg" alt="">
      </div>

  </div>
</template>

<script setup lang="ts">
interface Props {
	timesHistory: number[];
}

const { timesHistory } = defineProps<Props>();

const emits = defineEmits<{
	(e: 'next-level'): void
}>()

const setHighestScore = () => {
	const storedScore = localStorage.getItem('highestScore');
	const score = timesHistory.reduce((acc, time) => acc + time, 0);
	if (storedScore) {
		// additionner l'ensemble des temps
		if (score < parseInt(storedScore, 10)) {
			localStorage.setItem('highestScore', score.toString());
		}
	} else {
		localStorage.setItem('highestScore', score.toString());
	}
}

const readableTimer = computed<number>(() => {
	// return xx minutes xx seconds of all completed levels
	const totalSeconds = timesHistory.reduce((acc, time) => acc + time, 0);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes} minutes and ${seconds} seconds`;
})

const onClickButton = () => {
	emits('back-home');
}

onMounted(() => setHighestScore())
</script>


<style module lang="postcss">
.wrapper {
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-900);
  color: white;
  width: 100vw;
  position: relative;

  &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, var(--color-200) 0%, black 60%);
      background-repeat: no-repeat;
      background-position: center center;
      opacity: 0.04;
  }
}

.inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  position: relative;
  z-index: 4;
}

.title {
  font-size: 78px;
  /* Or font-size: 6vw; */
  text-align: center;
  font-family: 'Bahiana', cursive;
}

.darkTree {
  position: absolute;
  bottom: 0;
  left: calc(50% - 400px);
  transform: translateX(-50%);
  z-index: 3;
}

.p {
	text-align: center;
  font-size: 18px;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 20px;
}

</style>