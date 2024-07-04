<template>
	<main>
		<ProductBG />
		<ProductIntro />
		<ProductSolu />
		<ProductOther />
	</main>
</template>

<script setup lang="ts">
import { products } from '~/config/product'

definePageMeta({
	scrollToTop: true,
})

useSeoMeta({
	title: 'EXCEL AT RECEIVING PAYMENTS IN GLOBAL MARKETS',
})

const productInfo = useProductInfo()
productInfo.value = products['Pay-ins']
</script>

<style lang="scss" scoped></style>
