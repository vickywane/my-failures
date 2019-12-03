<template>
	<div id="form">
		<input placeholder="Add a new failure" />

		<button>Add Failure</button>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {}
</script>

<style>
#form {
	padding: 0.7em;
	width: 100%
;	background-color: #000;
	color: #fff;
}

a {
	padding-left: 15px;
	color: #fff;
	font-weight: 22px;
}
</style>
