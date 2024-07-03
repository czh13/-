<template>
	<section class="home-bg flex flex-col items-center pt-50 pb-40 h-200 box-border">
		<div class="max-w-372">
			<div class="flex gap-15">
				<div class="w-[60%] text-12 font-medium leading-25 tp-t-white">LEADING PAYMENT SOLUTION PROVIDERBUILD FOR SUCCESS IN GLOBAL MARKETS</div>
				<div class="flex-1 mt-5">
					<article class="text-5 leading-9 mb-15 tp-t-white">
						Toppay is devoted to closing the gap in payment processing and user experience between global enterprise businesses with stable performance.
						Accelerate financial inclusion in global markets with tech-powered payment solutions.
					</article>
					<BaseColorButton :size="4.5" @click="handleContacUs()">Contact Us</BaseColorButton>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-bg {
	background: url('~/assets/Images/home/home-bg.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
}
</style>
