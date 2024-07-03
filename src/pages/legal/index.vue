<template>
	<div>
		<BaseNavBar />
		<main class="flex flex-col items-center mt-22" @click="handleLeaveNav">
			<div class="max-w-372 flex flex-col items-center gap-25 py-37.5">
				<h1 class="text-center text-15">LEGAL</h1>
				<p class="text-center leading-13 text-9">
					Transparency is a recurring Checkout.com value that is reflected in our pricing promise, our security protocol and our legal agreements.
				</p>
				<section class="w-full">
					<div class="covTab relative">
						<div class="flex items-center justify-around">
							<div
								v-for="tptab in tabList"
								:key="tptab.t"
								class="flex items-center flex-col cursor-pointer relative"
								:class="[{ activeTab: curTab === tptab.t }]"
								@click="handleTab(tptab.t)"
							>
								<div class="tp-scroll-slide z-99">
									<div class="text-5.5 relative font-medium whitespace-nowrap tp-fix-title">{{ tptab.content }}</div>
									<div class="tp-bg-color absolute h-2 bottom--5 w-full opacity-0"></div>
								</div>
							</div>
						</div>

						<div class="w-full h-2 bg-[#D7D7D7] absolute bottom--5 right-0"></div>
					</div>
				</section>
				<div class="self-start">
					<h1 class="font-medium text-12 text-[#0961CF] mb-5">{{ curTabContent.content }}</h1>
					<article class="flex flex-col gap-10" v-if="curTabContent.t === 'Disclaimer'">
						<span class="text-5.5 leading-7">
							Any information contained in this or any other Checkout.com website should not be construed as legal advice and is not intended to be a substitute
							for legal counsel on any subject matter. The contents of this site are for general information purposes only. Whilst we endeavour to ensure that
							the information on this site is correct, no warranty, express or implied, is given as to its accuracy and we do not accept any liability for error
							or omission. We shall not be liable for any damage (including, without limitation, damage for loss of business or loss of profits) arising in
							contract, tort or otherwise from the use of, or inability to use, this site or any material contained in it, or from any action or decision taken
							as a result of using this site or any such material. Some of the material on this site may have been prepared some time ago.
						</span>
						<span class="text-5.5 leading-7">
							Certain parts of this site may link to external internet sites, and other external internet sites may link to this website. Checkout.com is not
							responsible for the content of any external internet sites and has no control over the nature, content and availability of those sites. The use of
							any links to external internal sites does not constitute an endorsement, guarantee or approval by Checkout.com for any of the products, services,
							information, opinions or any other contents contained. Checkout.com bears no responsibility for the accuracy, legality or content of the external
							site or for that of subsequent links.
						</span>
					</article>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
const tabList = [
	{
		t: 'pp',
		content: 'Privacy Policy',
	},
	{
		t: 'tc',
		content: 'Terms & Conditions',
	},
	{
		t: 'dis',
		content: 'Disclaimer',
	},
]

const route = useRoute()
const curTab = ref('')
const curTabContent = ref({
	t: '',
	content: '',
})

const handleTab = (tab: string) => {
	curTab.value = tab
	curTabContent.value = tabList.find(i => i.t === curTab.value) as any
}

onMounted(() => {
	curTab.value = route.query.l as string
	curTabContent.value = tabList.find(i => i.t === curTab.value) as any
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
	.tp-scroll-content {
		opacity: 1;
		transition: opacity 0.2s ease-in;
	}
}
</style>
