<template>
	<div>
		<BaseNavBar />
		<main class="mt-22" @click="handleLeaveNav">
			<CovBG />
			<CovReason />
		</main>
	</div>
</template>

<script setup lang="ts">
import CovBG from '@/components/features/coverage/covBG.vue'
import CovReason from '#src/components/features/coverage/covReason.vue'
import { coverages } from '@/config/coverage'

useSeoMeta({
	title: 'ASIA & OCEANIA PAGE WORLD’S LEADER IN ECOMMERCE MARKET SALES',
})

const covInfo = useCovInfo()
covInfo.value = coverages['as']

onNuxtReady(() => {
	const route = useRoute()
	window.scrollTo({
		top: Number(route.query.s) ?? 0,
		behavior: 'smooth',
	})
})
</script>

<style lang="scss" scoped></style>
