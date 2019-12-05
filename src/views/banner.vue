<template>
	<div id="home">
		<h3>12 total failures</h3>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<style scoped >
#home {
	padding: 1em;
	width: 100%;
	background-color: #000;
	color: #fff;
}

h3 {
	font-weight: normal;
	text-align: center;
}
</style>