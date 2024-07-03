<template>
	<footer class="tp-t-white box-border bg-[#060D14] w-screen pt-21 flex flex-col gap-7">
		<div class="px-54 flex flex-col gap-25">
			<div class="flex items-start justify-between">
				<div class="flex flex-col gap-7 grid-area-[span_1/span_2/span_1/span_2]">
					<NuxtLink to="/">
						<img class="w-25 h-6" format="webp" src="~/assets/Images/common/logo.png" alt="" />
					</NuxtLink>
					<!-- <div class="flex items-center gap-1.5">
						<img src="~/assets/Images/common/langIcon.png" alt="" />
						<p>EN</p>
						<img src="~/assets/Images/common/down.png" alt="" />
					</div> -->
					<!-- <div class="text-3.5">
						General questions:
						<p class="text-[#4880ff]">Help_Service@Cartbank.com</p>
					</div> -->
					<div class="text-4.5">
						General questions:
						<p class="text-[#4880ff]">Business@cartbank.com</p>
					</div>
				</div>
				<div class="flex flex-col items-start gap-7 grid-area-[span_2/span_2/span_1/span_2]" v-for="item in footerNavList" :key="item.title">
					<div class="text-5 font-medium whitespace-nowrap">{{ item.title }}</div>
					<div class="flex flex-col gap-5 text-5 font-medium leading-7">
						<div class="text-[#cdcdcd] decoration-none text-4.5 hover:text-[#fff] cursor-pointer" v-for="nav in item.navList" @click="handleGo(nav.url)">
							{{ nav.lable }}
						</div>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<p class="text-4.5">© 2024 Toppy. All rights reserved.</p>
				<div class="flex items-center gap-5">
					<img class="w-10 h-10" src="~/assets/Images/common/home-f.png" alt="" />
					<img class="w-10 h-10" src="~/assets/Images/common/home-x.png" alt="" />
					<img class="w-10 h-10" src="~/assets/Images/common/home-in.png" alt="" />
				</div>
			</div>
		</div>
		<div class="w-full pt-8 pb-30 border-t-[#C7C7C7] border-t border-style-solid">
			<p class="text-4.5 leading-7 tp-t-white px-54 box-border">
				Cartbank, operates as a licensed third-party payment institution. Our premier product, Cartbank, represents an innovative solution for global payments,
				specifically tailored to deliver efficient and secure localized payment services to our esteemed business clients worldwide. Through Cartbank, our
				steadfast commitment lies in eliminating payment barriers that exist between businesses and users across diverse countries and regions, thereby
				facilitating seamless business expansion and fostering sustainable growth opportunities for our valued clients. We are a global company with a presence
				in Latin America, Asia, Oceania, and Africa.
			</p>
		</div>
	</footer>
</template>
<script setup lang="ts">
const footerNavList = [
	{
		title: 'PRODUCT & SOLUTIONS',
		navList: [
			{ url: '/product/Pay-ins', lable: 'Pay-ins' },
			{ url: '/product/Payouts', lable: 'Payouts' },
			{ url: '/product/Platforms', lable: 'Platform' },
		],
	},
	{
		title: 'COVERAGE',
		navList: [
			{ url: '/coverage/la', lable: 'Latin America' },
			{ url: '/coverage/as', lable: 'Asia & Oceania' },
			{ url: '/coverage/af', lable: 'Africa' },
		],
	},
	// { title: 'DOCUMENTATION', navList: [{ url: '', lable: '' }] },
	{
		title: 'COMPANY',
		navList: [
			{ url: '/company', lable: 'About Us' },
			{ url: '/company?s=2500', lable: 'Contacts' },
		],
	},
	// {
	// 	title: 'LEGAL',
	// 	navList: [
	// 		{ url: '/legal?l=pp', lable: 'Privacy Policy' },
	// 		{ url: '/legal?l=tc', lable: 'Terms & Conditions' },
	// 	],
	// },
]
</script>
<style scoped lang="scss"></style>
