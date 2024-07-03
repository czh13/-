<template>
	<div class="w-372">
		<div class="proNav relative overflow-x-auto overflow-y-hidden">
			<div class="w-full flex items-center justify-between gap-20 mb-5">
				<div
					v-for="tptab in productInfo.tab.tabList"
					:key="tptab"
					class="flex items-center flex-col cursor-pointer relative"
					:class="[{ activeTab: curTab === tptab }]"
					@click="handleTab(tptab)"
				>
					<div class="tp-scroll-slide z-6">
						<div class="text-5.5 relative font-medium whitespace-nowrap tp-fix-title">{{ tptab }}</div>
						<div class="tp-bg-color absolute h-2 bottom--5 w-full opacity-0 rounded-1" />
					</div>
				</div>
			</div>

			<div class="w-full h-2 bg-[#D7D7D7] absolute bottom-0 right-0"></div>
		</div>

		<BaseAnimateOp v-model="isAnimate">
			<div class="mt-20">
				<div class="flex items-start gap-20 text-[#000]">
					<ClientOnly>
						<img class="h-100 w-180" :src="curTabContent.titleImg" alt="" />
					</ClientOnly>
					<div class="flex-1 flex flex-col gap-5">
						<h3 class="text-7.5 font-medium">{{ curTabContent.title }}</h3>
						<div class="flex gap-5 items-start" v-for="text in curTabContent.textList">
							<div class="bg-[#0961CF] h-5 w-5 rounded-[50%] mt-1"></div>
							<p class="flex-1 text-5 leading-7 font-medium">{{ text }}</p>
						</div>
						<!-- <div class="border border-solid tp-t-color py-3 px-5.5 w-fit rounded-1 font-medium cursor-pointer">View Documentation</div> -->
					</div>
				</div>
			</div>
		</BaseAnimateOp>
	</div>
</template>
<script setup lang="ts">
const productInfo = useProductInfo()
const isAnimate = defineModel()

const curTab = ref('')

const curTabContent = ref<any>({
	titleImg: '',
	title: '',
	textList: [],
})

type curTabType = keyof typeof productInfo.value.tab.tabContent

const handleTab = (tab: string) => {
	isAnimate.value = true
	curTab.value = tab
	curTabContent.value = productInfo.value.tab.tabContent[curTab.value as curTabType]
}

onMounted(() => {
	curTab.value = productInfo.value.tab.tabList[0]
	curTabContent.value = productInfo.value.tab.tabContent[curTab.value as curTabType]
})
</script>

<style lang="scss" scoped>
.proNav {
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
}

.activeTab {
	.tp-scroll-slide {
		transition: all 0.2s ease-in-out;
		> div:nth-child(1) {
			color: #0961cf;
			transition: color 0.2s ease-in;
		}
		> div:nth-child(2) {
			opacity: 1;
			transition: opacity 0.2s ease-in;
		}
	}
}
</style>
