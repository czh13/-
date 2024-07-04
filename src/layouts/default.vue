<template>
	<div>
		<BaseNavBar />
		<div class="mt-22" @click="curTitle = ''"><slot /></div>
		<ClientOnly>
			<BaseFooter></BaseFooter>
		</ClientOnly>
	</div>
</template>
<script setup lang="ts">
const curTitle = useCurTitle()
</script>
