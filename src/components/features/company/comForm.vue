<template>
	<form class="flex flex-col gap-4">
		<div class="flex gap-6">
			<BaseTpInput>First Name</BaseTpInput>
			<BaseTpInput>Last Name</BaseTpInput>
		</div>
		<BaseTpInput>Email</BaseTpInput>
		<BaseTpInput>Last Name</BaseTpInput>
		<div>
			<p class="tp-t-color text-5 whitespace-nowrap">Which region(s) are you looking to process with Toppay？</p>
			<div class="flex flex-col gap-3 pt-3">
				<BaseTpCheckbox>Latin America</BaseTpCheckbox>
				<BaseTpCheckbox>Oceania</BaseTpCheckbox>
				<BaseTpCheckbox>Africa</BaseTpCheckbox>
			</div>
		</div>
		<BaseTpInput>Company Name</BaseTpInput>
		<BaseTpSelect></BaseTpSelect>

		<BaseColorButton :size="4.5" bgColor="#0961CF" color="#fff">Submit</BaseColorButton>
	</form>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
