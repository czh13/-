<template>
	<div class="w-screen box-border flex items-center justify-center fixed z-999 top-3 left-0 transition-transform duration-[0.3s] ease-[ease-in-out]">
		<div class="tp-unfix max-w-372 w-full flex flex-col items-center px-10 py-4 text-[#fff]" :class="{ 'tp-fix': isLeaveTop }" @mouseleave="handleMouseLeave">
			<div class="w-full flex items-center gap-28.75">
				<img class="w-25 h-6.5" :src="fixChangeInfo.logoUrl" alt="" @click="handleGo('/')" />
				<nav class="flex-1">
					<div class="w-full flex items-center gap-23">
						<div class="flex-1 flex items-center justify-around">
							<div class="flex items-center" v-for="nav in navList" :key="nav.title">
								<div class="relative cursor-default" @mouseover="handleMouseOver(nav.title as TtitleType)">
									<div ref="titleRef" class="text-5 font-medium whitespace-nowrap tp-fix-title px-4 py-2">{{ nav.title }}</div>
								</div>
							</div>
						</div>
						<div class="w-fit flex items-center gap-7">
							<!-- <div class="flex items-center cursor-pointer gap-1.5">
								<img :src="fixChangeInfo.langUrl" alt="" />
								<p :class="[isLeaveTop ? 'text-[#000]' : 'text-[#fff]']" class="text-6 font-medium">EN</p>
								<img :src="fixChangeInfo.downUrl" alt="" />
							</div> -->

							<BaseColorButton :size="4.5" v-if="!isLeaveTop" @click="handleContacUs()">Contact Us</BaseColorButton>
							<BaseColorButton :size="4.5" v-if="isLeaveTop" bgColor="#0961CF" color="#fff" @click="handleContacUs()">Contact Us</BaseColorButton>
						</div>
					</div>
				</nav>
			</div>
			<ClientOnly>
				<div class="mt-5" v-show="curTitle">
					<div class="w-300 self-start">
						<BaseMenuNav :title="curTitle" />
					</div>
				</div>
			</ClientOnly>
		</div>
	</div>
</template>

<script setup lang="ts">
import LogoPng from '~/assets/Images/common/logo.png'
import LogoDarkPng from '~/assets/Images/common/logo-dark.png'
import LangPng from '~/assets/Images/common/langIcon.png'
import LangDarkPng from '~/assets/Images/common/langIcon-dark.png'
import DownPng from '~/assets/Images/common/down.png'
import DownDarkPng from '~/assets/Images/common/down-dark.png'
import type { TtitleType } from '~/config/type.js'

const navList = [
	{ path: 'product', title: 'Products & Solutions' },
	{ path: 'coverage', title: 'Coverage' },
	// { path: 'doc', title: 'Documentation' },
	{ path: 'company', title: 'Company' },
]

const isLeaveTop = useIsLeaveTop()
const curTitle = ref<TtitleType | ''>('')
const titleRef = ref<HTMLElement>()
const currentScroll = ref(0)
const fixChangeInfo = ref({
	logoUrl: LogoPng,
	langUrl: LangPng,
	downUrl: DownPng,
})

const handleScroll = () => {
	curTitle.value = ''
	currentScroll.value = window.pageYOffset || document.documentElement.scrollTop
	isLeaveTop.value = currentScroll.value > 50
	handleDarkImage(isLeaveTop.value)
}

const handleMouseOver = (title: TtitleType) => {
	isLeaveTop.value = true
	curTitle.value = title
	handleDarkImage(isLeaveTop.value)
}

const handleMouseLeave = () => {
	curTitle.value = ''
	if (currentScroll.value > 50) return
	isLeaveTop.value = false
	handleDarkImage(isLeaveTop.value)
}

const handleDarkImage = (isDark: boolean) => {
	fixChangeInfo.value.logoUrl = isDark ? LogoDarkPng : LogoPng
	fixChangeInfo.value.langUrl = isDark ? LangDarkPng : LangPng
	fixChangeInfo.value.downUrl = isDark ? DownDarkPng : DownPng
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
	isLeaveTop.value = window.scrollY > 50
	handleDarkImage(isLeaveTop.value)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.tp-fix {
	background: #fff;
	color: #000;
	border-radius: 10px;
	box-shadow: 0 0 0 1px hsl(222 11% 36% / 10%), 0 16px 44px -8px hsl(240 38% 6% / 20%);

	transition: all 0.3s ease;

	.tp-fix-title {
		&:hover {
			background: #ebf4ff;
			color: #0961cf;
			border-radius: 10px;
			transition: all 0.3s ease;
		}
	}
}

.tp-unfix {
	transition: all 0.3s ease-in-out;
}

.tp-popover {
	width: 1200px;
	height: 300px;
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
	transition: opacity 0.3s ease, transform 0.3s ease;

	position: absolute;
	top: calc(88px);
	left: 50%;
}

.tp-popover-show {
	opacity: 1;
	transform: scaleY(1) translateX(-50%);
	pointer-events: auto;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
