<template>
	<div>
		<section class="home-bg flex flex-col items-center pt-50 pb-50 h-180 box-border">
			<div class="max-w-372">
				<div class="flex gap-39">
					<div class="w-[55%] text-12 font-medium leading-25 tp-t-white">
						{{ productInfo.bg.bgTitle.toUpperCase() }}
					</div>
					<div class="flex-1 mt-5">
						<article class="text-5 leading-10 mb-15 tp-t-white">
							{{ productInfo.bg.bgText }}
						</article>
						<div class="flex gap-10">
							<BaseColorButton :size="4.5" @click="handleContacUs()">Contact Us</BaseColorButton>

							<!-- <div class="border border-solid bg-[#4e69f8] border-[#fff] tp-t-white tp-t-color py-3 px-5.5 w-fit rounded-1 font-medium cursor-pointer">
							View Documentation
						</div> -->
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const productInfo = useProductInfo()
</script>

<style lang="scss" scoped>
.home-bg {
	background: url('~/assets/Images/home/home-bg.png') no-repeat;
	background-size: cover;
	background-position: center top;
}
</style>
