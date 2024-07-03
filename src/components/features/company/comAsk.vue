<template>
	<section class="bg-[#ECF6FF] flex flex-col items-center py-20">
		<div class="max-w-370">
			<div class="flex flex-col items-center gap-6">
				<ScTitle>Get in touch with Toppay</ScTitle>
				<h4 class="font-semibold text-9 self-start tp-t-color">Interested in learning what we can do for your business?</h4>
				<div class="self-start flex flex-col">
					<h4 class="text-10 mb-4">Our team can help you:</h4>
					<div class="flex flex-col gap-5 mb-30">
						<div class="flex items-start gap-7.5" v-for="help in helpTextList" :key="help">
							<div class="w-5.5 h-5.5 tp-bg-color rounded-[50%] mt-2"></div>
							<p class="flex-1 text-6.5 leading-9 font-medium">{{ help }}</p>
						</div>
					</div>
				</div>
				<BaseColorButton :px="10" :py="3" :size="5" bgColor="#0961CF" color="#fff" @click="handleGoEmail">Ask for more info</BaseColorButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const helpTextList = [
	'Demo products of interest.',
	'Design a solution to accept and optimize payments.',
	'Access custom pricing including cost, pricing, volume discounts, and more.',
	'Get started on Toppay faster with dedicated implementation and support services.',
]

const handleGoEmail = () => {
	window.location.href = 'mailto:business@toppay.cc?subject=Ask for more infomation about Toppay'
}
</script>

<style scoped></style>
