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
	title: 'EXPAND WORLDWIDE WITH A SEAMLESS SINGLE INTEGRATION',
})

const productInfo = useProductInfo()
productInfo.value = products['Platforms']
</script>

<style lang="scss" scoped></style>
