<template>
	<div>
		<div><slot /></div>
		<ClientOnly>
			<BaseFooter></BaseFooter>
		</ClientOnly>
	</div>
</template>
<script setup lang="ts"></script>
