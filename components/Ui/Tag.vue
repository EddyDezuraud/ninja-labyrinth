<template>
	<div :class="[$style.wrapper, $style[size]]">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
interface Props {
	size?: 'small' | 'medium' | 'large';
}

withDefaults(defineProps<Props>(), {
	size: 'medium'
});
</script>

<style lang="postcss" module>
.wrapper {
	font-weight: 700;
	padding: 10px 20px;
	border-radius: 10px;
	border: solid 1px rgba(255,255,255,0.05);
	background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
	box-shadow: 0 0 10px rgba(0,0,0,0.1);
	color: white;
	font-size: 16px;
}

.small {
	font-size: 12px;
	padding: 5px 10px;
}
</style>