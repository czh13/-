<template>
	<div>
		<div>123123</div>
		<div>{{ $t('message') }}</div>
		<div>
			<NuxtLink :to="switchLocalePath('en-US')">English</NuxtLink>
			<NuxtLink :to="switchLocalePath('zh-CN')">繁體中文</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped></style>
