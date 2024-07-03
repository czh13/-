<template>
	<div>
		<div class="flex justify-center flex-col items-center h-screen text-center">
			<h2>{{ error.statusCode }}</h2>
			<h4 class="break-all">{{ error.message }}</h4>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	error: {
		type: Object,
		required: true,
	},
})
</script>
