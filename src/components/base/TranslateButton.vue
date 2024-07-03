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
	size: { type: Number, default: 4 },
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
		color: var(--color);
		background: var(--bg-color);
		cursor: pointer;
		transition: ease-out 0.5s;
		border: 2px solid var(--bg-color);
		border-radius: 4px;
		box-shadow: inset 0 0 0 0 var(--bg-color);
		box-sizing: border-box;
	}

	.tp-button:hover {
		transform: translateY(-3px);
	}

	.tp-button:active {
		box-shadow: #d6d6e7 0 3px 7px inset;
		transform: translateY(3px);
	}
}
</style>
