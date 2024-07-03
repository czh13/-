<template>
	<div class="base-button" :style="{ '--color': color, '--bg-color': bgColor }">
		<button class="tp-button" :class="[`text-${size}`, `px-${px}`, `py-${py}`]">
			<slot></slot>
		</button>
	</div>
</template>

<script setup lang="ts">
defineProps({
	px: { type: Number, default: 5 },
	py: { type: Number, default: 2 },
	color: { type: String, default: '#0961cf' },
	bgColor: { type: String, default: '#fff' },
	size: { type: Number, default: 5.5 },
})
</script>

<style lang="scss" scoped>
.base-button {
	--color: #0961cf;
	--bg-color: #fff;

	.tp-button {
		display: block;
		text-align: center;
		text-decoration: none;
		color: var(--bg-color);
		background: transparent;
		cursor: pointer;
		transition: ease-out 0.5s;
		border: 2px solid var(--bg-color);
		border-radius: 4px;
		box-shadow: inset 0 0 0 0 var(--bg-color);
		box-sizing: border-box;
	}

	.tp-button:hover {
		color: var(--color);
		box-shadow: inset 0 -100px 0 0 var(--bg-color);
	}

	.tp-button:active {
		transform: scale(0.9);
	}
}
</style>
