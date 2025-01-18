<template>
  <div :class="$style.playerTile">
    <audio
      ref="playerAudioElement"
      src="/sounds/walking-sound.mp3"
      preload="auto"
      loop
      :muted="isSoundMuted"
    />
    <div
      :class="[
        $style.player,
        $style[`player--${direction}`],
        {
          [$style['player--moving']]: isMoving,
        },
      ]"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  direction: 'up' | 'down' | 'left' | 'right'
  isMoving: boolean
  isSoundMuted: boolean
}

const props = defineProps<Props>()

const playerAudioElement = ref<HTMLAudioElement | null>(null)
const playAudio = () => {
  if (playerAudioElement.value) {
    playerAudioElement.value.volume = 0.1
    playerAudioElement.value.play()
  }
}
const pauseAudio = () => {
  playerAudioElement.value?.pause()
}

watchEffect(() => {
  if (props.isMoving) {
    playAudio()
  } else {
    pauseAudio()
  }
})
</script>

<style module lang="postcss">
.playerTile {
  width: 150px;
  height: 150px;
  position: relative;
}

.player {
  width: 100%;
  height: 100%;
  background-image: url('/player-sprite.svg');
  background-repeat: no-repeat;
}

.player--down {
  background-position: 0px 0px;

  &.player--moving {
    animation: down 0.9s steps(1) infinite;
  }
}

.player--up {
  background-position: 0px -150px;
  /* animation: down 0.5s steps(1) infinite; */

  &.player--moving {
    animation: up 0.9s steps(1) infinite;
  }
}

.player--right {
  background-position: 0px -300px;
  /* animation: down 0.5s steps(1) infinite; */

  &.player--moving {
    animation: right 0.9s steps(1) infinite;
  }
}

.player--left {
  background-position: 0px -450px;
  /* animation: down 0.5s steps(1) infinite; */

  &.player--moving {
    animation: left 0.9s steps(1) infinite;
  }
}
@keyframes down {
  0% {
    background-position: 0px 0px;
  }
  12.5% {
    background-position: -300px 0px;
  }
  25% {
    background-position: -150px 0px;
  }
  37.5% {
    background-position: -300px 0px;
  }
  50% {
    background-position: 0px 0px;
  }
  62.5% {
    background-position: -450px 0px;
  }
  75% {
    background-position: -600px 0px;
  }
  87.5% {
    background-position: -450px 0px;
  }
  100% {
    background-position: 0px 0px;
  }
}

@keyframes up {
  0% {
    background-position: 0px -150px;
  }
  12.5% {
    background-position: -300px -150px;
  }
  25% {
    background-position: -150px -150px;
  }
  37.5% {
    background-position: -300px -150px;
  }
  50% {
    background-position: 0px -150px;
  }
  62.5% {
    background-position: -600px -150px;
  }
  75% {
    background-position: -450px -150px;
  }
  87.5% {
    background-position: -600px -150px;
  }
  100% {
    background-position: 0px -150px;
  }
}

@keyframes right {
  0% {
    background-position: 0px -300px;
  }
  12.5% {
    background-position: -300px -300px;
  }
  25% {
    background-position: -150px -300px;
  }
  37.5% {
    background-position: -300px -300px;
  }
  50% {
    background-position: 0px -300px;
  }
  62.5% {
    background-position: -450px -300px;
  }
  75% {
    background-position: -600px -300px;
  }
  87.5% {
    background-position: -450px -300px;
  }
  100% {
    background-position: 0px -300px;
  }
}

@keyframes left {
  0% {
    background-position: 0px -450px;
  }
  12.5% {
    background-position: -300px -450px;
  }
  25% {
    background-position: -150px -450px;
  }
  37.5% {
    background-position: -300px -450px;
  }
  50% {
    background-position: 0px -450px;
  }
  62.5% {
    background-position: -450px -450px;
  }
  75% {
    background-position: -600px -450px;
  }
  87.5% {
    background-position: -450px -450px;
  }
  100% {
    background-position: 0px -450px;
  }
}
</style>
