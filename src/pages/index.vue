<template>
	<main>
		<HomeBG />
		<HomeService />
		<HomeSolu />
		<HomeMarket />
		<HomeValues />
		<HomeAdv />
	</main>
</template>

<script setup lang="ts">
import HomeValues from '~/components/features/Values.vue'
import HomeLogoSwiper from '~/components/features/LogoSwiper.vue'

useSeoMeta({
	title: 'LEADING PAYMENT SOLUTION PROVIDERBUILD FOR SUCCESS IN GLOBAL MARKETS',
})

definePageMeta({
	scrollToTop: true,
})
</script>

<style lang="scss" scoped></style>
