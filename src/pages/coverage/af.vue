<template>
	<main>
		<CovBG />
		<CovReason />
	</main>
</template>

<script setup lang="ts">
import { coverages } from '@/config/coverage'

useSeoMeta({
	title: 'AFRICA RAPIDLY EVOLVING STAGE FOR PAYMENT INNOVATION',
})

const covInfo = useCovInfo()
covInfo.value = coverages['af']

onNuxtReady(() => {
	const route = useRoute()
	window.scrollTo({
		top: Number(route.query.s) ?? 0,
		behavior: 'smooth',
	})
})
</script>

<style lang="scss" scoped></style>
