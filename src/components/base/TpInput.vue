<template>
	<div class="input-group">
		<input v-model="modelValue" required="" type="text" name="text" autocomplete="off" class="input" />
		<label class="user-label">
			<slot></slot>
		</label>
	</div>
</template>

<script setup lang="ts">
const modelValue = defineModel()
</script>

<style lang="scss" scoped>
.input-group {
	position: relative;
}

.input {
	border: solid 1.5px #d9d9d9;
	border-radius: 1rem;
	background: none;
	padding: 1rem;
	font-size: 1rem;
	transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.user-label {
	position: absolute;
	left: 15px;
	color: #d9d9d9;
	pointer-events: none;
	transform: translateY(1rem);
	transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
input:valid {
	outline: none;
	border: 1.5px solid #0961cf;
}

.input:focus ~ label,
input:valid ~ label {
	transform: translateY(-50%) scale(0.8);
	background-color: #fff;
	padding: 0 0.2em;
	color: #0961cf;
}
</style>
