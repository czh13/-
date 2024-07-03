<template>
	<div :class="{ animated: isAnimate }" @animationend="onAnimationEnd">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
const isAnimate = defineModel()

const onAnimationEnd = () => {
	isAnimate.value = false
}
</script>

<style scoped>
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.animated {
	animation: fadeIn 0.5s ease-in-out;
}
</style>
