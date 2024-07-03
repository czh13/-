<template>
	<section class="w-screen flex flex-col items-center pt-30">
		<div class="max-w-370 w-full box-border px-6">
			<div class="relative overflow-hidden z-1 flex items-center">
				<div ref="logoSwiperRef" class="tp-logo-swiper flex items-center">
					<div class="logo-item w-32 h-8 flex items-center justify-center mr-16" v-for="item in 20">
						<img
							class="object-contain"
							src="https://cdn.prod.website-files.com/6527a0e632583907665bb3e6/6645b7e679d473391c975d8b_Property%201%3Dklarna.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="tp-swiper-left z-1 left-0 top-0 bottom-0 absolute w-24 h-8"></div>
				<div class="tp-swiper-right z-1 right-0 top-0 bottom-0 absolute w-24 h-8"></div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
const logoSwiperRef = ref<HTMLElement | null>(null)

onMounted(() => {
	const totalWidth = Array.from(logoSwiperRef.value!.children).reduce((acc, item) => acc + (item as HTMLElement).offsetWidth + 64, 0) // 20 is the margin-right

	Array.from(logoSwiperRef.value!.children).forEach((item, index) => {
		const clone = item.cloneNode(true)
		logoSwiperRef.value!.appendChild(clone)
	})

	gsap.to(logoSwiperRef.value, {
		x: -totalWidth / 2,
		duration: 60,
		ease: 'linear',
		repeat: -1,
	})
})
</script>

<style lang="scss" scoped>
.tp-swiper-left {
	background-image: linear-gradient(to right, rgba(255, 255, 255), rgba(255, 255, 255, 0));
}
.tp-swiper-right {
	background-image: linear-gradient(270deg, rgba(255, 255, 255), rgba(255, 255, 255, 0));
}
</style>
