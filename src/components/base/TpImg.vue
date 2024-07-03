<template>
	<ClientOnly>
		<img :src="src" alt="" />
	</ClientOnly>
</template>

<script setup lang="ts">
defineProps({
	src: {
		type: String,
		default: 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/x8AAqMB0Fk+W34AAAAASUVORK5CYII=',
	},
})
</script>

<style scoped></style>
