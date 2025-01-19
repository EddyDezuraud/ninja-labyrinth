<template>
  <div
    :class="[
      $style.wrapper,
      { [$style.leaving]: isLeaving },
      { [$style.initialized]: isInitialized },
    ]"
  >
    <div :class="$style.inner">
      <h1 :class="$style.title">Huescape</h1>
      <div :class="$style.characterWrapper">
        <ThePlayer
          :class="$style.character"
          :isMoving
          :direction="movingDirection"
          is-sound-muted
        />
      </div>
      <UiButton :class="$style.button" @click="onClickButton">Start</UiButton>
			<UiTag v-if="highestScore && highestScore > 0" :class="$style.highestScore" size="medium">Highest score: {{ readableTimer }}</UiTag>
    </div>

    <div :class="$style.scenery">
      <img :class="$style.darkTree" src="/images/dark-tree.svg" alt="" />
			<span :class="$style.copyrights">Developped by CSS NINJAS</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: 'start-game'): void
}>()

const isMoving = ref(true)
const movingDirection = ref<'up' | 'down' | 'left' | 'right'>('down')
const isLeaving = ref(false)
let timer = null
const isInitialized = ref(false)
const highestScore = ref<number>(0)

const getHighestScore = (): void => {
	const storedScore = localStorage.getItem('highestScore')
	if (storedScore) {
		highestScore.value = parseInt(storedScore, 10)
	}
}

const readableTimer = computed<string>(() => {
	// return xx minutes xx seconds of all completed levels
	const minutes = Math.floor(highestScore.value / 60);
	const seconds = highestScore.value % 60;
	return `${minutes}m ${seconds}s`;
})

onMounted(() => {
	getHighestScore();

  timer = setTimeout(() => {
    isMoving.value = false
  }, 11500) // 10 secondes

  setTimeout(() => {
    isInitialized.value = true
  }, 500) // 10 secondes
})

const start = async () => {
  emits('start-game')
}

const onClickButton = () => {
  if (timer) {
    clearTimeout(timer)
  }
  isLeaving.value = true
  isMoving.value = true
  movingDirection.value = 'up'

  timer = setTimeout(() => {
    isMoving.value = false
    movingDirection.value = 'down'

    setTimeout(() => {
      start()
    }, 300) // 10 secondes
  }, 2000) // 2 secondes
}
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

.character {
  position: relative;
  top: -15px;
  transform: scale(1);
  transition: transform 10s;
}

.initialized {
  .wrapper::before {
    opacity: 0.13;
    transition: opacity 4s;
  }

  .character {
    transition: transform 10s;
    transform: scale(1.6);
  }
}

.leaving {
  .character {
    transform: scale(1);
    transition: transform 2s;
  }

  .scenery,
  .button,
  .title {
    opacity: 0;
    transition: opacity 0.5s;
  }
}

.highestScore {
	position: absolute;
	top: 20px;
	left: 20px;
}

.copyrights {
	position: absolute;
	bottom: 20px;
	right: 20px;
	font-size: 10px;
	opacity: 0.5;
}

@media (max-height: 550px) {
	.title {
		font-size: 48px;
	}

	.inner {
		gap: 20px;
	}
}
</style>
