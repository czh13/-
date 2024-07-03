<template>
	<section class="flex flex-col items-center py-50">
		<div class="max-w-372">
			<div class="flex">
				<ClientOnly>
					<div v-aos="'zoom-out'" class="flex flex-col gap-13 mr-20">
						<p class="text-7.5 font-medium">Get to Know our product</p>
						<div class="w-94 h-52">
							<img class="w-94 h-52" src="~/assets/Images/product/other-pic.png" alt="" />
						</div>
					</div>
				</ClientOnly>
				<div class="flex">
					<div
						class="w-115 h-75 box-border flex flex-col justify-between p-10 mr-7.5 shadow-[0px_4px_40px_0px_#F0F4FF] rounded-2 cursor-pointer"
						v-for="item in productInfo.other.otherList"
						:key="item.path"
						@click="handleGo(item.path)"
					>
						<div>
							<p class="mb-5 text-6 font-medium">{{ item.title }}</p>
							<span class="text-5 leading-7 text-[#000]">{{ item.text }}</span>
						</div>
						<div class="flex items-center cursor-pointer translate-hover-img">
							<p class="mr-2 text-5 tp-t-color">More info</p>
							<img class="w-7.5 h-7.5" src="~/assets/Images/common/right.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const productInfo = useProductInfo()
</script>

<style scoped></style>
