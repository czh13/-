<template>
	<section class="contact-bg bg-no-repeat bg-cover flex flex-col items-center pb-47 pt-77">
		<div class="max-w-370">
			<div class="flex gap-25">
				<div class="contact-bg-sales bg-no-repeat bg-cover pl-15 pt-27 pb-15">
					<p class="font-medium text-10 leading-14 mb-20 text-[#fff]">Sales</p>
					<div class="w-[70%]">
						<span class="font-medium text-7.5 leading-10.5">Get unrivaled payments performance with the help of out dedicated teams</span>
						<div class="flex items-center cursor-pointer mt-10">
							<p class="mr-2 font-semibold text-7.5 tp-t-color">Get in touch</p>
							<img class="w-7.5 h-7.5" src="~/assets/Images/common/right.png" alt="" />
						</div>
					</div>
				</div>
				<div class="contact-bg-support bg-no-repeat bg-cover pl-15 pt-27 pb-15">
					<p class="font-medium text-10 leading-14 mb-20 text-[#fff]">Merchant Support</p>
					<div class="w-[70%]">
						<span class="font-medium text-7.5 leading-10.5">Got a technical issue or need strategic advice? Our support team is here to helps</span>
						<div class="flex items-center cursor-pointer mt-10">
							<p class="mr-2 font-semibold text-7.5 tp-t-color">Get in touch</p>
							<img class="w-7.5 h-7.5" src="~/assets/Images/common/right.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contact-bg {
	background: url('~/assets/Images/company/company-contact-bg.png');
}
.contact-bg-sales {
	background: url('~/assets/Images/company/company-contact-two.png');
}
.contact-bg-support {
	background: url('~/assets/Images/company/company-contact-one.png');
}
</style>
