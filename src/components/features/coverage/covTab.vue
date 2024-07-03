<template>
	<div>
		<div class="covTab relative overflow-x-scroll overflow-y-hidden">
			<div class="flex items-center justify-between mb-5">
				<div
					v-for="tptab in covInfo.tab.tabList"
					:key="tptab"
					class="flex items-center flex-col cursor-pointer relative"
					:class="[{ activeTab: curTab === tptab }]"
					@click="handleTab(tptab)"
				>
					<div class="tp-scroll-slide z-6">
						<div class="text-5.5 relative font-medium whitespace-nowrap tp-fix-title">{{ tptab }}</div>
						<div class="tp-bg-color absolute h-2 bottom--5 w-full opacity-0 rounded-1"></div>
					</div>
				</div>
			</div>

			<div class="w-full h-2 bg-[#D7D7D7] absolute bottom-0 right-0"></div>
		</div>

		<BaseAnimateOp v-model="isAnimate">
			<div class="mt-20">
				<div class="flex gap-20 text-[#fff]">
					<div
						class="w-150 h-110 px-10 py-10 box-border rounded-2 bg-no-repeat bg-cover flex flex-col gap-2.5"
						:style="{ background: `url(${curTabContent.img})` }"
					>
						<h3 class="text-7.5 font-semibold">{{ curTabContent.tabTitle }}</h3>
						<p v-if="curTabContent.tabSpan" class="text-5.5 leading-8 font-semibold">{{ curTabContent.tabSpan }}</p>
						<span class="text-5 leading-7.5">{{ curTabContent.tabText }}</span>
					</div>
					<div class="flex-1 flex flex-col gap-3.5 mb-7.5 text-[#000]">
						<div class="flex flex-col gap-3" v-if="curTabContent.isCard">
							<div class="flex flex-col gap-3" v-for="i in curTabContent.payImages">
								<p class="text-6 font-medium">{{ i.title }}</p>
								<div class="flex items-center flex-wrap gap-3">
									<img class="w-25 h-19 border-solid border border-[#e4e4e4] rounded-2" v-for="image in i.images" :src="image" alt="" />
								</div>
							</div>
						</div>
						<div v-else class="text-7.5 text-10 mb-3.5">Market construction, coming soon</div>
						<!-- <div class="border border-solid tp-t-color py-3 px-5.5 w-fit rounded-1 font-medium cursor-pointer">View Documentation</div> -->
					</div>
				</div>
			</div>
		</BaseAnimateOp>
	</div>
</template>
<script setup lang="ts">
const covInfo = useCovInfo()
const route = useRoute()
const curTab = ref()
const curTabContent = ref({
	isCard: false,
	tabTitle: '',
	tabSpan: '',
	tabText: '',
	img: '',
	payImages: [
		{
			title: '',
			images: [],
		},
	],
})
const isAnimate = defineModel()

type CurTabType = keyof typeof covInfo.value.tab.tabContent

const handleTab = (tab: string) => {
	isAnimate.value = true
	curTab.value = tab
	curTabContent.value = covInfo.value.tab.tabContent[curTab.value as CurTabType]
}

onMounted(() => {
	curTab.value = route.query.c ? route.query.c : covInfo.value.tab.tabList[0]

	if (route.fullPath.includes('af') && !route.query.c) {
		curTab.value = 'Nigeria'
	}
	if (route.fullPath.includes('as') && !route.query.c) {
		curTab.value = 'Philippines'
	}
	if (route.fullPath.includes('la') && !route.query.c) {
		curTab.value = 'Brazil'
	}

	curTabContent.value = covInfo.value.tab.tabContent[curTab.value as CurTabType]
})
</script>

<style lang="scss" scoped>
.covTab {
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

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.animated {
	animation: fadeIn 0.5s ease-in-out;
}
</style>
