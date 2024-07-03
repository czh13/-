<template>
	<section class="flex flex-col items-center pt-30">
		<div class="max-w-372">
			<div class="flex items-start gap-6">
				<div v-for="pro in productInfo.intro.introList" :key="pro.title">
					<div class="flex items-center gap-2.5 h-20">
						<img class="h-10 w-10" :src="pro.icon" alt="" />
						<p class="w-[75%] h-fit text-6 font-medium text-[#000] leading-9">{{ pro.title }}</p>
					</div>
					<div class="w-120 min-h-50 flex items-center justify-center box-border px-7.5 leading-6 text-4.5 shadow-[0px_4px_40px_0px_#F0F4FF]">
						{{ pro.text }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const productInfo = useProductInfo()
</script>

<style scoped></style>
