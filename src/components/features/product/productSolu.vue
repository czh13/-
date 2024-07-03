<template>
	<section class="flex flex-col items-center pt-50">
		<div class="max-w-372">
			<div>
				<div>
					<p class="tp-t-color text-6 font-medium mb-7.5">{{ route.query.p }}</p>
					<p class="text-[#000] font-medium text-7.5 mb-4">A single integration</p>
				</div>
				<div class="flex gap-15">
					<ClientOnly>
						<img v-aos="'zoom-in-right'" class="w-190 h-132.5" :src="productInfo.solu.soluImg" alt="" />
					</ClientOnly>
					<div class="grid gap-y-4 gap-x-6.5 grid-cols-[1fr_1fr] auto-cols-[1fr]">
						<div class="rounded-1 px-4 w-80 h-40 py-5 box-border bg-[#f5f8fd] text-center" v-for="solu in productInfo.solu.soluList" :key="solu.text">
							<ClientOnly>
								<img class="w-12.5 h-12.5" :src="solu.icon" alt="" />
							</ClientOnly>
							<p class="text-4.5 leading-6.5">{{ solu.text }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="pt-50">
				<p class="tp-t-color text-6 font-medium mb-6">Solutions</p>
				<p class="text-[#000] font-medium text-10 mb-6">Global Businesses Pay and Get Paid</p>
				<div class="mt-20">
					<productTab />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import productTab from '#src/components/features/product/productTab.vue'
const productInfo = useProductInfo()
const route = useRoute()
</script>

<style scoped></style>
