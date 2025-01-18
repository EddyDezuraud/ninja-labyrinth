<template>
  <div :class="$style.torchAura"></div>
</template>

<style module lang="postcss">
.torchAura {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(
    circle,
    transparent 20%,
    var(--torch-aura) 40%,
    var(--torch-aura) 100%
  );
  animation: torch-aura 0.7s linear infinite;
}

@keyframes torch-aura {
  0% {
    background: radial-gradient(
      circle 200px,
      transparent 80px,
      var(--torch-aura) 200px,
      var(--torch-aura) 100%
    );
  }
  10% {
    background: radial-gradient(
      circle 200px,
      transparent 82px,
      var(--torch-aura) 198px,
      var(--torch-aura) 100%
    );
  }
  20% {
    background: radial-gradient(
      circle 200px,
      transparent 84px,
      var(--torch-aura) 196px,
      var(--torch-aura) 100%
    );
  }
  30% {
    background: radial-gradient(
      circle 200px,
      transparent 86px,
      var(--torch-aura) 194px,
      var(--torch-aura) 100%
    );
  }
  40% {
    background: radial-gradient(
      circle 200px,
      transparent 88px,
      var(--torch-aura) 192px,
      var(--torch-aura) 100%
    );
  }
  50% {
    background: radial-gradient(
      circle 200px,
      transparent 86px,
      var(--torch-aura) 194px,
      var(--torch-aura) 100%
    );
  }
  60% {
    background: radial-gradient(
      circle 200px,
      transparent 84px,
      var(--torch-aura) 196px,
      var(--torch-aura) 100%
    );
  }
  70% {
    background: radial-gradient(
      circle 200px,
      transparent 82px,
      var(--torch-aura) 198px,
      var(--torch-aura) 100%
    );
  }
  80% {
    background: radial-gradient(
      circle 200px,
      transparent 80px,
      var(--torch-aura) 200px,
      var(--torch-aura) 100%
    );
  }
  90% {
    background: radial-gradient(
      circle 200px,
      transparent 81px,
      var(--torch-aura) 199px,
      var(--torch-aura) 100%
    );
  }
  100% {
    background: radial-gradient(
      circle 200px,
      transparent 80px,
      var(--torch-aura) 200px,
      var(--torch-aura) 100%
    );
  }
}
</style>
