<template>
	<div>
		<NuxtLayout>
			<NuxtLoadingIndicator />
			<NuxtPage></NuxtPage>
		</NuxtLayout>
	</div>
</template>
<style>
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s ease;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
	transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
	filter: grayscale(1);
}
</style>
