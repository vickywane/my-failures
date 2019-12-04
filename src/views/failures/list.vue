<template>
	<div id="home">
		<p> List of all failures </p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class List extends Vue {}
</script>

<style scoped >
#home {
	padding: 3em;
	width: 100%;
	color: #000;
}

p  { 
	color: #000;
}
</style>
