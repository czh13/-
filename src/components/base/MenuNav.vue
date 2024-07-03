<template>
	<nav class="h-80">
		<p class="text-7.5 font-medium leading-10.5 mb-3">{{ title }}</p>
		<Transition name="fade">
			<div v-show="title === 'Products & Solutions' || title === 'Company'" class="flex items-center gap-7.5">
				<div
					class="menu-item w-90 h-58.5 rounded-2 box-border flex flex-col justify-between border border-solid border-[#d2d8ec] px-5.5 py-3"
					v-for="m in curMenu"
					:key="m.menuPath"
				>
					<div>
						<p class="text-5.5 leading-7.5 font-medium mb-1">{{ m.menuTitle }}</p>
						<span class="text-4.5 leading-6.5">{{ m.menuText }}</span>
					</div>
					<div class="flex items-center cursor-pointer translate-hover-img" @click="handleTo(m.menuPath)">
						<p class="mr-2 text-5 tp-t-color">More info</p>
						<img class="w-5 h-5" src="~/assets/Images/common/right.png" alt="" />
					</div>
				</div>
			</div>
		</Transition>
		<div v-show="title === 'Coverage'">
			<div class="flex gap-40 items-start">
				<div class="flex flex-col items-start" v-for="c in countryList" :key="c.continent">
					<p class="text-5.5 font-medium mb-2 cursor-pointer mb-3 hover:text-[#0961CF]" @click="handleToCoverage(c.code)">{{ c.continent }}</p>
					<div class="flex flex-col gap-3">
						<div
							class="w-50 flex items-center box-border border border-solid border-[#d2d8ec] hover:border-[#6283f8] text-center text-5.5 font-medium pl-8 py-3 cursor-pointer rounded-2 hover:transform-translate-y--2px hover:shadow-[0px_4px_40px_0px_#F0F4FF] transition-all"
							v-for="i in c.list"
							@click="handleToCoverage(c.code, i.name)"
						>
							<ClientOnly>
								<img class="w-5.5 h-5.5" :src="i.img" alt="" />
							</ClientOnly>
							<span class="ml-1 text-5">{{ i.name }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import type { TtitleType } from '~/config/type.ts'

const props = defineProps<{ title: TtitleType }>()

const titleMenu = {
	'Products & Solutions': [
		{
			menuTitle: 'Pay-ins',
			menuText: 'All-in-one payment process for entrepreneurial business, to offer customers in global markets a seamless and secure payment experience.',
			menuPath: '/product/Pay-ins',
		},
		{
			menuTitle: 'Payouts',
			menuText: 'Pay your staff, customers, and partners in local currency. Payouts enhances customer satisfaction and streamlines your payment process.',
			menuPath: '/product/Payouts',
		},
		{
			menuTitle: 'Platforms',
			menuText: 'Handling pay-ins and payouts in local currency through a quick integration. A simple and easy to operate management dashboard.',
			menuPath: '/product/Platforms',
		},
	],
	Coverage: [],
	Documentation: [
		{ menuTitle: 'Documentation', menuText: 'Explore step-by-step guides and technical know-how.', menuPath: '' },
		{ menuTitle: 'API Reference', menuText: 'Get started with a comprehensive API guide.', menuPath: '' },
		{ menuTitle: 'Test Account', menuText: 'Play, test, simulate, and access the lastest features.', menuPath: '' },
	],
	Company: [
		{
			menuTitle: 'About Us',
			menuText: 'Learn how Toppay helps global merchants to thrive in the local payment solutions. See what Toppay does for the world’s leading businesses.',
			menuPath: '/company',
		},
	],
}

const countryList = [
	{
		continent: 'Latin America',
		code: 'la',
		list: [
			{ name: 'Brazil', img: getImageUrl('BR.png', 'home') },
			{ name: 'Mexico', img: getImageUrl('MX.png', 'home') },
			{ name: 'Colombia', img: getImageUrl('CL.png', 'home') },
		],
	},
	{
		continent: 'Asia & Oceania',
		code: 'as',
		list: [
			{ name: 'Philippines', img: getImageUrl('PH.png', 'home') },
			{ name: 'Australia', img: getImageUrl('AU.png', 'home') },
		],
	},
	{
		continent: 'Africa',
		code: 'af',
		list: [
			{ name: 'Nigeria', img: getImageUrl('NG.png', 'home') },
			{ name: 'Ghana', img: getImageUrl('GH.png', 'home') },
		],
	},
]

const curTitle = useCurTitle()
const curMenu = ref(titleMenu[props.title])
const isLeaveTop = useIsLeaveTop()

watch(
	() => props.title,
	newTitle => {
		curMenu.value = titleMenu[newTitle]
	}
)

const handleTo = (path: string) => {
	curTitle.value = ''
	isLeaveTop.value = false
	handleGo(path)
}

const handleToCoverage = (i: string, sub?: string) => {
	curTitle.value = ''
	handleGo(`/coverage/${i}${sub ? `?c=${sub}&s=1400` : ''}`)
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.menu-active {
	.menu-item {
		border-color: #0961cf;
	}
}
</style>
