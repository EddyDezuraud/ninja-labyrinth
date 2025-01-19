<template>
  <div :class="$style.wrapper">
    <div :class="$style.inner">
      <div :class="$style.content">
        <h1 :class="$style.title">Game Over!</h1>
        <p :class="$style.p">
          You’ve completed level
          <strong>{{ level === 1 ? level : level - 1 }}</strong
          >, but didn't make it past this one.<br />
          Better luck next time!
        </p>
        <div :class="$style.deadPlayer"></div>
      </div>
      <UiButton :class="$style.button" @click="onClickButton">Go Home</UiButton>
    </div>

    <div :class="$style.scenery">
      <img :class="$style.darkTree" src="/images/dark-tree.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  level: number
}

defineProps<Props>()

const emits = defineEmits<{
  (e: 'back-home'): void
}>()

const onClickButton = () => {
  emits('back-home')
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

.deadPlayer {
  width: 300px;
  height: 300px;
  background-image: url('/player-rip.svg');
}
</style>
