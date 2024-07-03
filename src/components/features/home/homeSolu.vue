<template>
	<section class="home-solu w-screen box-border flex flex-col items-center py-26">
		<div class="max-w-389 text-center">
			<div class="mb-10">
				<p class="font-medium text-10 text-[#000] mb-2">Solutions</p>
				<p class="text-6 text-[#7E8FA1]">Global Businesses Pay and Get Paid</p>
			</div>
			<div class="grid grid-cols-[1fr_1fr_1fr_1fr] cursor-default">
				<div class="tp-solu h-104 pt-18 text-center px-8 box-border border border-solid border-[#E9EDF4]" v-for="solu in soluList" :key="solu.title">
					<ClientOnly >
						<img class="w-25 h-25" :src="solu.url"></img>
					</ClientOnly>
					<p class="text-6 font-semibold mb-3 mt-12.5 whitespace-nowrap">{{ solu.title }}</p>
					<span class="text-5 leading-7 text-[#000] ">{{ solu.text }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const soluList = [
	{
		url: getImageUrl('home-solu-one.png', 'home'),
		title: 'Financial Institutions',
		text: 'Move money across borders for banks, fintechs, and money service businesses',
	},
	{
		url: getImageUrl('home-solu-two.png', 'home'),
		title: 'Global Payroll',
		text: 'Scale effortlessly with real-time and local currency payments',
	},
	{
		url: getImageUrl('home-solu-thr.png', 'home'),
		title: 'Marketplaces',
		text: 'Accelerate business growth with payout solutions for global marketplace platforms',
	},
	{
		url: getImageUrl('home-solu-four.png', 'home'),
		title: 'Ecommerce',
		text: 'Enhance your customers’ shopping experience through integrated payment solutions',
	},
	{
		url: getImageUrl('home-solu-five.png', 'home'),
		title: 'Gaming',
		text: 'Sports, esports, game streaming, virtual reality',
	},
	{ url: getImageUrl('home-solu-six.png', 'home'), title: 'Crypto', text: 'Exchanges, wallets' },
	{
		url: getImageUrl('home-solu-sev.png', 'home'),
		title: 'Payment Facilitators',
		text: 'Use Cartbank’s local entities to process payments in different countries',
	},
	{
		url: getImageUrl('home-solu-eig.png', 'home'),
		title: 'Digital Media, Entertainment',
		text: 'Seamlessly embrace global payments with versatile online checkout',
	},
]
</script>

<style lang="scss" scoped>
.home-solu {
	background: url('@/assets/Images/home/home-solu-bg.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	.tp-solu {
		transition: background 0.3s ease-in-out;
		&:hover {
			background: #fff;
			border-radius: 4px;
			border-bottom: 4px solid #0961cf;
			box-shadow: 0px 14px 50px 4px #0000001a;
			transition: background 0.3s ease;
		}
	}
	.tp-solu:nth-child(1),
	.tp-solu:nth-child(5) {
		border-left: none;
	}
	.tp-solu:nth-child(4),
	.tp-solu:nth-child(8) {
		border-right: none;
	}
	.tp-solu:nth-child(-n + 4) {
		border-top: none;
	}
	// .tp-solu:nth-child(n + 4) {
	// 	border-bottom: none;
	// }
}
</style>
