<template>
	<section class="flex flex-col items-center pb-50 pt-30">
		<div class="max-w-366">
			<!-- <div class="flex mb-30">
				<div class="font-semibold text-8.5 leading-14 w-[40%] mt-5">In 2023 Cartbank has processed $17.7 billionworth of payments</div>
				<div class="flex-1 flex gap-3.5">
					<div class="flex flex-col relative" v-for="desc in descList" :key="desc.text">
						<img class="w-70 h-87.5" :src="desc.descImg" alt="" />
						<span class="absolute bottom-8 left-[50%] transform-translate-x--50% font-semibold text-5 tp-t-white leading-7 whitespace-nowrap">
							{{ desc.text }}
						</span>
					</div>
				</div>
			</div> -->
			<div class="flex flex-col text-center">
				<p class="text-10 font-semibold self-center w-[40%] mb-9">Payment Solutions Across Industries and Requirements</p>
				<div class="flex self-center gap-18">
					<div
						class="tp-t-color text-5 border-[2px] border-[#0961CF] border-solid rounded-2 py-2 px-5 box-border leading-7 cursor-pointer"
						v-for="(service, serviceKey) in services"
						:key="serviceKey"
						:class="{ 'tp-t-white': serviceKey === serviceSign, 'bg-[#0961CF]': serviceKey === serviceSign }"
						@click="handleService(serviceKey)"
					>
						{{ serviceKey }}
					</div>
				</div>
			</div>
			<BaseAnimateOp v-model="isAnimate">
				<div class="flex items-start gap-43 mt-22">
					<ClientOnly>
						<div v-aos="'zoom-in'" class="flex flex-col gap-7.5">
							<div class="tp-t-color text-6 font-semibold">{{ currentServices.sign }}</div>
							<div class="text-7.5 leading-10.5 font-semibold">{{ currentServices.title }}</div>
							<div class="text-5 leading-7">{{ currentServices.text }}</div>
							<div class="flex items-center cursor-pointer translate-hover-img">
								<p class="mr-2 font-semibold text-5 tp-t-color" @click="handleGo(currentServices.url)">To know more about {{ serviceSign }} service</p>
								<img class="w-6 h-6" src="~/assets/Images/common/right.png" alt="" />
							</div>
						</div>
						<img class="h-103 w-172" :src="currentServices.servicePic" alt="" />
					</ClientOnly>
				</div>
			</BaseAnimateOp>
		</div>
	</section>
</template>
<script setup lang="ts">
import Descone from '~/assets/Images/home/home-desc-one.png'
import Desctwo from '~/assets/Images/home/home-desc-two.png'
import Descthr from '~/assets/Images/home/home-desc-thr.png'
import Descfour from '~/assets/Images/home/home-desc-four.png'

const services = {
	'Pay-ins': {
		sign: 'Pay-ins',
		title: 'Accept local payment methods and boost conversion rates',
		text: 'With no transfer limits, and support for multiple alternative and instant local payment methods, allow your business in global markets to pay they know how, and unlock new growth opportunities.',
		servicePic: getImageUrl('home-service-one.png', 'home'),
		url: '/product/Pay-ins',
	},
	Payouts: {
		sign: 'Payouts',
		title: 'Send funds within the framework required by laws in the local market',
		text: 'No more stress: payments with simple integration.',
		servicePic: getImageUrl('home-service-two.png', 'home'),
		url: '/product/Payouts',
	},
	Platforms: {
		sign: 'Platforms',
		title: 'Unify your platform’s payment solution',
		text: 'Allows global marketplaces and platforms to onboard users and accept, send funds throughout local markets.',
		servicePic: getImageUrl('home-service-thr.png', 'home'),
		url: '/product/Pay-ins',
	},
}

const isAnimate = defineModel()
const serviceSign = ref('Pay-ins')
const currentServices = ref(services[serviceSign.value as keyof typeof services])

const descList = [
	{ descImg: Descone, text: 'One API - 2 core products' },
	{ descImg: Desctwo, text: '600+ Merchants' },
	{ descImg: Descthr, text: '1000+ Payment methods' },
	{ descImg: Descfour, text: 'Multiple Countries' },
]

const handleService = (key: string) => {
	isAnimate.value = true
	serviceSign.value = key
	currentServices.value = services[serviceSign.value as keyof typeof services]
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
