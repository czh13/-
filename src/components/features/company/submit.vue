<template>
	<section class="flex flex-col items-center py-42.5">
		<div class="max-w-370">
			<div>
				<ScTitle>Get in touch with Cartbank</ScTitle>
				<h4 class="font-semibold text-11 self-start mb-15 tp-t-color">Interested in learning what we can do for your business?</h4>
				<div class="flex">
					<div class="w-[60%]">
						<h4 class="font-semibold text-10 mb-10">Our team can help you:</h4>
						<div class="flex flex-col gap-7.5 mb-9">
							<div class="flex items-start gap-4" v-for="help in helpTextList" :key="help">
								<div class="w-5.5 h-5.5 tp-bg-color rounded-[50%] mt-2"></div>
								<p class="flex-1 text-6.5 leading-9 font-medium">{{ help }}</p>
							</div>
						</div>
						<img class="h-73 w-73" src="~/assets/Images/company/company-submit-avtor.png" alt="" />
					</div>
					<div class="flex-1 h-200 box-border py-12.5 px-17.5 shadow-[0px_0px_15px_1px_#D9D9D9] rounded-3 border border-solid border-[#d9d9d9]">
						<div></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const helpTextList = [
	'Demo products of interest.',
	'Design a solution to accept and optimize payments.',
	'Access custom pricing including cost, pricing, volume discounts, and more.',
	'Get started on Cartbank faster with dedicated implementation and support services.',
]
</script>

<style scoped></style>
