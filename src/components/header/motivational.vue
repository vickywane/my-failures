<template>
	<div id="home">
		<p> You gotta get up n go </p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Motivational extends Vue {}
</script>

<style>
#home {
	padding: 0.5em;
	color: #fff;
}

p {
	text-align: center;
	color: #fff;
}
</style>
