<template>
	<section class="flex flex-col items-center pt-30 pb-50">
		<div class="max-w-372">
			<div class="flex flex-col">
				<div>
					<p class="tp-t-color text-6 font-medium mb-7.5">The Reasons</p>
					<p class="text-[#000] font-medium text-7.5 mb-4">{{ covInfo.reason.title }}</p>
				</div>
				<div class="flex items-start gap-7.5">
					<div class="h-62.5 w-87.5 p-6 rounded-1 box-border shadow-[0px_4px_40px_0px_#F0F4FF]" v-for="rea in covInfo.reason.list" :key="rea.afasTitle">
						<p class="font-medium text-6 mb-2 tp-t-color whitespace-nowrap">{{ rea.afasTitle }}</p>
						<p class="text-4.5 leading-7.5">{{ rea.afasText }}</p>
					</div>
				</div>
				<ClientOnly>
					<div v-aos="'zoom-in'" class="text-10 self-center mt-50">{{ covInfo.reason.soluTitle }}</div>
				</ClientOnly>

				<div class="mt-20">
					<CovTab />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import CovTab from '#src/components/features/coverage/covTab.vue'

const covInfo = useCovInfo()
</script>

<style scoped></style>
