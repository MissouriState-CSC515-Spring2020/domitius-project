<template>
	<!-- VueImage is a simple img tag wrapped in an anchor going to the detail route
	img accepts a src , alt tag, and a string of classes -->

	<a href="/detail">
		<img :src=src :alt=alt v-bind:class=classes>
	</a>
</template>

<script>
export default {
	name: 'VueImage',
	props: {
		src: String,
		alt: String,
		classes: String
	}
}
</script>

<style scoped>
</style>