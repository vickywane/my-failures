<template>
	<div id="footer">
		<p>Failures </p>

		<a> Privacy </a> 
		<a> Privacy </a> 
		<a> Privacy </a> 
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped >
#footer {
	padding: 0.7em;
	width: 100%;
	background-color: #000;
	color: #fff;
}

a {
	padding-left: 15px;
	color: #fff;
	font-weight: 22px;
}
</style>
