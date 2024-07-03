<template>
	<section class="mar-bg bg-no-repeat bg-contain flex flex-col items-center mt-20 pb-56">
		<div class="max-w-370">
			<div class="flex flex-col items-center">
				<ScTitle class="mt-30">The Market</ScTitle>
				<p class="text-6 text-[#7E8FA1] mb-15 mt-2">Check out our offices worldwide</p>

				<div class="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] gap-x-22 gap-y-15">
					<div class="flex items-center" v-for="mar in marketList" :key="mar.martitle">
						<img class="w-13 h-13" :src="mar.marImg" alt="" />
						<div class="ml-3">
							<p class="font-medium text-6 mb-1.5">{{ mar.martitle }}</p>
							<span class="text-5 leading-7">{{ mar.marText }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const marketList = [
	{ marImg: getImageUrl('br.png', 'company'), martitle: 'Brazil', marText: 'Av Brig Faria Lima, 1811- Jardim Paulistano, Sao Paulo, Brazil' },
	{ marImg: getImageUrl('mx.png', 'company'), martitle: 'Mexico', marText: 'Zone D int. 302 Hogares Ferrocarrileros Tlalnepantla De Baz C.P 54090, Mexico' },
	{ marImg: getImageUrl('mx.png', 'company'), martitle: 'Nigeria', marText: '50/52, Toyin Street, Ikeja, Lagos State, Nigeria' },
	{ marImg: getImageUrl('au.png', 'company'), martitle: 'Australia', marText: 'Suite 29, 225 George Street, Sydney NSW 2000, Australia' },
	{ marImg: getImageUrl('pk.png', 'company'), martitle: 'Pakistan', marText: 'Office 1, Second Floor, 4A Utility Plaza, F-8 Markaz, Islamabad, Pakistan' },
	{
		marImg: getImageUrl('ph.png', 'company'),
		martitle: 'Philippines',
		marText: '3rd Floor Salcedo One Center 170, Salcedo Street, San Lorenzo, City of Makati, Nor, Fourth District, Philippines',
	},
	{ marImg: getImageUrl('us.png', 'company'), martitle: 'United States', marText: '11264 Playa CT. Culver City, California, 90230 USA' },
	{ marImg: getImageUrl('sg.png', 'company'), martitle: 'Singapore', marText: '391B Orchard Road #21-06, Ngee Ann City, Singapore (238874)' },
]
</script>

<style lang="scss" scoped>
.mar-bg {
	background: url('~/assets/Images/company/company-mar-bg.png');
}
</style>
