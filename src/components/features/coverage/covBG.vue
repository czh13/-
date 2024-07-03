<template>
	<section class="cov-bg flex flex-col items-center pt-50 pb-47 w-full max-h-180 box-border" :style="{ background: `url(${covInfo.bg.img})` }">
		<div class="max-w-370">
			<div class="flex flex-col gap-6">
				<div class="w-[50%] text-12 leading-16 font-medium tp-t-white">
					<p>{{ covInfo.bg.c.toUpperCase() }}</p>
					<p>{{ covInfo.bg.title.toUpperCase() }}</p>
				</div>
				<article class="w-[54%] text-5 leading-8 tp-t-white">
					{{ covInfo.bg.text }}
				</article>
				<BaseColorButton :size="4.5" @click="handleContacUs()">Contact Us</BaseColorButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const covInfo = useCovInfo()
</script>

<style lang="scss" scoped>
.cov-bg {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
}
</style>
