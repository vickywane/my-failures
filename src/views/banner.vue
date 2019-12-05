<template>
	<div id="home">
		<Motivational />
		<h3>12 total failures</h3>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Motivational from "./motivational.vue";

@Component({
	components: {
		Motivational
	}
})
export default class Banner extends Vue {}
</script>

<style scoped>
#home {
	padding: 0.5em;
	width: 100%;
	background-color: #234364;
	color: #fff;
}

h3 {
	font-weight: normal;
	text-align: center;
}
</style>
