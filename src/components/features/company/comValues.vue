<template>
	<section class="flex flex-col items-center pt-50">
		<div class="max-w-370">
			<div>
				<ScTitle>Our Values</ScTitle>
				<div class="flex mt-25">
					<ClientOnly>
						<div
							class="va-bg bg-no-repeat bg-cover h-130 w-60 text-center flex flex-col justify-end items-center box-border pb-25"
							v-for="(va, vai) in valueImages"
							@mouseover="handleValueImage(vai, true)"
							@mouseleave="handleValueImage(vai, false)"
							:key="va.title"
							:style="{ background: curI === vai ? va.activeBg : va.bg }"
						>
							<img :src="curI === vai ? va.activeIcon : va.icon" alt="" />
							<p class="mt-7.5 text-5 font-semibold w-[80%]" :class="[curI === vai ? 'text-[#fff]' : 'text-[#000]']">{{ va.title }}</p>
						</div>
					</ClientOnly>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const valueImages = [
	{
		title: 'Customer Comes First',
		bg: `url(${getImageUrl(`home-values-bg-one.png`, 'home')})`,
		activeBg: `url(${getImageUrl(`home-values-bg-one-active.png`, 'home')})`,
		icon: getImageUrl(`home-values-icon-one.png`, 'home'),
		activeIcon: getImageUrl(`home-values-icon-one-active.png`, 'home'),
	},
	{
		title: 'Striving for Outstanding',
		bg: `url(${getImageUrl(`home-values-bg-two.png`, 'home')})`,
		activeBg: `url(${getImageUrl(`home-values-bg-two-active.png`, 'home')})`,
		icon: getImageUrl(`home-values-icon-two.png`, 'home'),
		activeIcon: getImageUrl(`home-values-icon-two-active.png`, 'home'),
	},
	{
		title: 'One Dream, Dream Big',
		bg: `url(${getImageUrl(`home-values-bg-thr.png`, 'home')})`,
		activeBg: `url(${getImageUrl(`home-values-bg-thr-active.png`, 'home')})`,
		icon: getImageUrl(`home-values-icon-thr.png`, 'home'),
		activeIcon: getImageUrl(`home-values-icon-thr-active.png`, 'home'),
	},
	{
		title: 'Open Communication',
		bg: `url(${getImageUrl(`home-values-bg-four.png`, 'home')})`,
		activeBg: `url(${getImageUrl(`home-values-bg-four-active.png`, 'home')})`,
		icon: getImageUrl(`home-values-icon-four.png`, 'home'),
		activeIcon: getImageUrl(`home-values-icon-four-active.png`, 'home'),
	},
	{
		title: 'Think Globally, Act Locally',
		bg: `url(${getImageUrl(`home-values-bg-five.png`, 'home')})`,
		activeBg: `url(${getImageUrl(`home-values-bg-five-active.png`, 'home')})`,
		icon: getImageUrl(`home-values-icon-five.png`, 'home'),
		activeIcon: getImageUrl(`home-values-icon-five-active.png`, 'home'),
	},
	{
		title: 'Taking Ownership of the Result',
		bg: `url(${getImageUrl(`home-values-bg-six.png`, 'home')})`,
		activeBg: `url(${getImageUrl(`home-values-bg-six-active.png`, 'home')})`,
		icon: getImageUrl(`home-values-icon-six.png`, 'home'),
		activeIcon: getImageUrl(`home-values-icon-six-active.png`, 'home'),
	},
]

const isHover = ref(false)
const curI = ref<number>()

const handleValueImage = (i: number, is: boolean) => {
	isHover.value = is
	curI.value = i
	if (!is) {
		curI.value = 99
	}
}
</script>

<style lang="scss" scoped>
.va-bg {
	transition: transform 0.3s ease-in-out;
	transform: scale(1);
	&:hover {
		transform: scale(1.1);
		transition: transform 0.3s ease-in-out;
		z-index: 99;
	}
}
</style>
