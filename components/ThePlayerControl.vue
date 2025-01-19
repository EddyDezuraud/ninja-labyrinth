<template>
  <div :class="$style.wrapper">
    <div :class="$style['move-btn']">
      <div>
        <UiKeyboardKey :is-active="activeButtons?.includes('z')">
          Z
        </UiKeyboardKey>
      </div>
      <div :class="$style['bottom-row-btn']">
        <UiKeyboardKey :is-active="activeButtons?.includes('q')">
          Q
        </UiKeyboardKey>
        <UiKeyboardKey :is-active="activeButtons?.includes('s')">
          S
        </UiKeyboardKey>
        <UiKeyboardKey :is-active="activeButtons?.includes('d')">
          D
        </UiKeyboardKey>
      </div>
    </div>
    <div
      v-show="showInteractButton"
      :class="[$style['interaction-btn'], $style['interaction-btn--blink']]"
    >
      <span>Appuyer sur</span><UiKeyboardKey is-active>E</UiKeyboardKey>
      <span>pour intéragir</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  activeButtons: string[]
  showInteractButton: boolean
}

defineProps<Props>()
</script>

<style module lang="postcss">
.wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: white;
}

.move-btn {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & .bottom-row-btn {
    flex-direction: row;
    display: flex;
    gap: 5px;
  }
}

.interaction-btn {
  align-items: center;
  display: flex;
  gap: 5px;

  &.interaction-btn--blink {
    animation: slow-blink 2s ease-in-out infinite;
  }
}

@keyframes slow-blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
