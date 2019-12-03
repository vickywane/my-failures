<template>
	<div id="form">
		<Input placeholder="Add a new Failure" />

		<button>Add Failure</button>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Input } from '../styled/styled-components'

@Component
export default class Form extends Vue {}
</script>

<style>
#form {
	padding: 0.7em;
	width: 100%;
	color: #fff;
}

a {
	padding-left: 15px;
	color: #fff;
	font-weight: 22px;
}
</style>
