<template>
	<section class="flex flex-col items-center pt-50">
		<div class="max-w-370">
			<div class="flex">
				<ClientOnly>
					<div v-aos="'fade-up-right'">
						<h4 class="font-semibold text-7.5 leading-11 mb-7.5">
							Time to expand into global
							<br />
							markets
						</h4>
						<p class="w-[70%] text-5 leading-7.5">
							Toppay devotes to local payment methods for billions of untapped consumers in Africa, Asia, Oceania, and Latin America.
						</p>
					</div>
				</ClientOnly>
				<div class="flex gap-6.5">
					<div
						class="relative cursor-pointer transform-scale-100 transition hover:transform-scale-110 hover:transition"
						v-for="mar in marketList"
						:key="mar.title"
						@click="handleGo(mar.path)"
					>
						<ClientOnly>
							<img class="w-75 h-107.5" :src="mar.markerImg" :alt="mar.title" />
						</ClientOnly>
						<span class="absolute bottom-7 left-[50%] transform-translate-x--50% font-semibold text-5 tp-t-white leading-7 whitespace-nowrap">
							{{ mar.title }}
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const marketList = [
	{ markerImg: getImageUrl('home-market-one.png', 'home'), title: 'LATIN AMERICA', path: '/coverage/la' },
	{ markerImg: getImageUrl('home-market-two.png', 'home'), title: 'ASIA', path: '/coverage/as' },
	{ markerImg: getImageUrl('home-market-thr.png', 'home'), title: 'AFRICA', path: '/coverage/af' },
]
</script>

<style lang="scss" scoped></style>
