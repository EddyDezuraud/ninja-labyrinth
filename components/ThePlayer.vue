<template>
  <div :class="$style.playerTile">
    <div
      :class="[
        $style.player,
        $style[`player--${direction}`],
        {
          [$style['player--moving']]: isMoving,
          [$style['player--stopped']]: !isMoving,
        },
      ]"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  direction: 'up' | 'down' | 'left' | 'right'
  isMoving: boolean
}

defineProps<Props>()
</script>

<style module lang="postcss">
.playerTile {
  width: 130px;
  height: 130px;
  position: relative;
}

.player {
  width: 100%;
  height: 100%;
  background-image: url('/public/player-sprite.svg');
  background-repeat: no-repeat;
}

.player--moving {
  animation: bounce 0.3s ease-in-out infinite;
}

.player--down {
  animation: down 0.5s steps(1) infinite;

  &.player--moving {
    animation:
      down 0.5s steps(1) infinite,
      bounce 0.3s ease-in-out infinite;
  }
}

.player--up {
  animation: down 0.5s steps(1) infinite;

  &.player--moving {
    animation:
      down 0.5s steps(1) infinite,
      bounce 0.3s ease-in-out infinite;
  }
}

.player--right {
  animation: down 0.5s steps(1) infinite;

  &.player--moving {
    animation:
      down 0.5s steps(1) infinite,
      bounce 0.3s ease-in-out infinite;
  }
}

.player--left {
  animation: down 0.5s steps(1) infinite;

  &.player--moving {
    animation:
      down 0.5s steps(1) infinite,
      bounce 0.3s ease-in-out infinite;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes down {
  0% {
    background-position: 0px 0px;
  }
  25% {
    background-position: 0px -130px;
  }
  50% {
    background-position: 0px -260px;
  }
  75% {
    background-position: 0px -390px;
  }
  100% {
    background-position: 0px 0px;
  }
}
</style>
