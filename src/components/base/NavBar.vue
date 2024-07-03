<template>
	<div
		class="z-100 w-screen h-22 py-4 bg-[#ffffff] z-999 border-b-1 border-[#ececec] border-solid box-border flex items-center justify-center fixed top-0 left-0 transition-transform duration-[0.5s] ease-[ease-in-out]"
		:class="{ '-translate-y-full': navHidden }"
	>
		<div class="max-w-372 w-full flex items-center">
			<div class="w-full flex items-center gap-28.75">
				<img class="w-25 h-6" src="~/assets/Images/common/logo-dark.png" alt="" @click="handleGo('/')" />
				<nav class="flex-1">
					<div class="w-full flex items-center gap-23">
						<div class="flex-1 flex items-center justify-around">
							<div class="flex items-center" v-for="nav in navList" :key="nav.title">
								<div class="bg-[#fff] relative cursor-pointer" @click="togglePopover(nav.title as TtitleType)">
									<div class="text-[#272728] text-5 font-medium hover:text-[#0961CF] whitespace-nowrap">{{ nav.title }}</div>
									<div :class="[{ 'block!': curTitle === nav.title }]" class="tp-bg-color rounded-1 h-1 absolute bottom--8 w-full hidden"></div>
								</div>
								<div class="tp-popover top-22 w-300 h-75" :class="[{ 'tp-popover-show': curTitle === nav.title }]">
									<BaseMenuNav :title="nav.title as TtitleType" />
								</div>
							</div>
						</div>
						<div class="w-fit flex items-center gap-7">
							<!-- <div class="flex items-center cursor-pointer gap-1.5">
								<img src="~/assets/Images/common/langicon-dark.png" alt="" />
								<p class="text-6 font-medium">EN</p>
								<img src="~/assets/Images/common/down-dark.png" alt="" />
							</div> -->

							<BaseColorButton :size="4.5" bgColor="#0961CF" color="#fff" @click="handleContacUs()">Contact Us</BaseColorButton>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { TtitleType } from '~/config/type.js'

const navList = [
	{ path: 'product', title: 'Products & Solutions' },
	{ path: 'coverage', title: 'Coverage' },
	// { path: 'doc', title: 'Documentation' },
	{ path: 'company', title: 'Company' },
]

const curTitle = useCurTitle()
const navHidden = ref(false)
const lastScrollTop = ref(0)

const togglePopover = (title: TtitleType) => {
	curTitle.value = curTitle.value === title ? '' : title
}

const handleScroll = () => {
	curTitle.value = ''
	const currentScroll = window.pageYOffset || document.documentElement.scrollTop
	navHidden.value = currentScroll > lastScrollTop.value && currentScroll > 50
	lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll
}

const handleLeaveNav = () => {
	curTitle.value = ''
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.tp-popover {
	background: white;
	color: black;
	border: 1px solid #ddd;
	border-top: none;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 0 0 40px 40px;
	opacity: 0;
	pointer-events: none;
	padding: 30px 50px;

	transform: scaleY(0) translateX(-50%);
	transform-origin: top;
	transition: opacity 0.8s ease, transform 0.5s ease;

	position: absolute;
	left: 50%;
}

.tp-popover-show {
	opacity: 1;
	transform: scaleY(1) translateX(-50%);
	pointer-events: auto;
}
</style>
