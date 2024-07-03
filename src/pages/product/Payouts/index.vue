<template>
	<div>
		<BaseNavBar />
		<main>
			<ProductBG />
			<ProductIntro />
			<ProductSolu />
			<ProductOther />
		</main>
	</div>
</template>

<script setup lang="ts">
import { products } from '~/config/product'

definePageMeta({
	scrollToTop: true,
})

useSeoMeta({
	title: 'SIMPLIFY YOUR GLOBAL PAYMENT AND SETTLEMENTS',
})

const productInfo = useProductInfo()
productInfo.value = products['Payouts']
</script>

<style lang="scss" scoped></style>
