<template>
	<section class="bg-[#f6f9ff] flex flex-col items-center pt-28 pb-40 h-180 box-border">
		<div class="max-w-372">
			<div class="flex gap-10 relative">
				<div class="w-[50%]">
					<div class="text-12 font-medium leading-25 text-[#000]">LEADING PAYMENT SOLUTION PROVIDERBUILD FOR SUCCESS IN GLOBAL MARKETS</div>
					<div class="flex-1 mt-5">
						<article class="text-5 leading-9 mb-15 text-[#000]">
							Cartbank is devoted to closing the gap in payment processing and user experience between global enterprise businesses with stable performance.
							Accelerate financial inclusion in global markets with tech-powered payment solutions.
						</article>
						<BaseColorButton :size="4.5" bgColor="#0961CF" color="#fff" @click="handleContacUs()">Contact Us</BaseColorButton>
					</div>
				</div>
				<div class="home-bg w-205 h-98 absolute right--35 top-5"></div>
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
