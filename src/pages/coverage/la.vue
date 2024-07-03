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
	title: 'LATIN AMERICA FAST-MOVING PAYMENTS CONTINUE TO THRIVE',
})

const covInfo = useCovInfo()
covInfo.value = coverages['la']

onNuxtReady(() => {
	const route = useRoute()
	window.scrollTo({
		top: Number(route.query.s) ?? 0,
		behavior: 'smooth',
	})
})
</script>

<style lang="scss" scoped></style>
