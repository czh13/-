<template>
	<main>
		<ComAbout />
		<ComValues />
		<ComMarket />
		<ComAsk />
	</main>
</template>

<script setup lang="ts">
import ComValues from '~/components/features/Values.vue'

definePageMeta({
	scrollToTop: true,
})

useSeoMeta({
	title: 'HELPING YOUR GLOBAL BUSINESS THRIVE IN THE DIGITAL ECONOMY',
})

onNuxtReady(() => {
	const route = useRoute()
	window.scrollTo({
		top: Number(route.query.s),
		behavior: 'smooth',
	})
})
</script>

<style lang="scss" scoped></style>
