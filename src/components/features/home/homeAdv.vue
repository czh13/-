<template>
	<section class="flex flex-col items-center pt-50">
		<div>
			<div class="flex flex-col items-center">
				<h3 class="text-10 leading-14 font-medium mb-20">Our advantages</h3>
				<ClientOnly>
					<div class="flex flex-col gap-30">
						<div v-aos="'fade-right'" class="flex gap-30">
							<div>
								<h4 class="font-semibold text-10 leading-21 tp-t-color mb-5">Intelligent Acceptance</h4>
								<div class="flex flex-col text-7 leading-11">
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Automatic Performance Optimization</span>
									</div>
									<span></span>
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Increase Revenue with AI and Big Data</span>
									</div>
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Dedicated Account Manager</span>
									</div>
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Provide 24*7 Support</span>
									</div>
								</div>
							</div>
							<img class="w-125 h-92" src="~/assets/Images/home/home-adv-one.png" alt="" />
						</div>
						<div v-aos="'fade-left'" class="flex gap-36">
							<img class="w-125 h-85" src="~/assets/Images/home/home-adv-two.png" alt="" />
							<div>
								<h4 class="font-semibold text-10 leading-21 tp-t-color mb-5">Compliance & High Standard</h4>
								<div class="flex flex-col text-7 leading-11">
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Safeguarded Funds</span>
									</div>
									<span></span>
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Authorised by ASIC</span>
									</div>
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>PCI Compliance Included</span>
									</div>
								</div>
							</div>
						</div>
						<div class="flex gap-47">
							<div v-aos="'fade-right'">
								<h4 class="font-semibold text-10 leading-21 tp-t-color mb-5">Secure Every Aspect</h4>
								<div class="flex flex-col text-7 leading-11">
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Ultimate Data Encryption</span>
									</div>
									<span></span>
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Bulletproof Security</span>
									</div>
									<div class="flex items-center gap-5">
										<div class="w-5 h-5 rounded-[50%] bg-[#0961CF]"></div>
										<span>Fraud Protection</span>
									</div>
								</div>
							</div>
							<img class="w-115 h-110" src="~/assets/Images/home/home-adv-thr.png" alt="" />
						</div>
					</div>
				</ClientOnly>

				<div class="self-center flex flex-col items-center py-50">
					<h3 class="text-10 leading-14 font-medium mb-10">Ready to speed up the business with Cartbank?</h3>
					<BaseColorButton bgColor="#0961CF" color="#fff" @click="handleContacUs()">Contact Us</BaseColorButton>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
