<template>
	<div id="home">
		<h2> You gotta get up n go </h2>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Motivational extends Vue {}
</script>

<style scoped >
#home {
	padding: 0.2em;
	color: #fff;
}

h2 {
	text-align: center;
	color: #fff;
	font-weight : normal;
}
</style>
