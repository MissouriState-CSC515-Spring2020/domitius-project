<template>
	<!-- VueImage is a simple img tag wrapped in a router going to the detail route
	img accepts a src , alt tag, and a string of classes -->

	<router-link :to="'/detail'">
		<img :src=src :alt=alt v-bind:class=classes>
	</router-link>
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