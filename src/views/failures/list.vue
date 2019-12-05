<template>
	<div id="home">
		<p>List of all failures</p>

		<div v-for="failure in allFailures" v-bind:key="failure.id" id="box">
			<p>{{ failure.name }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

export default {
	name: "List",
	computed: mapGetters(["allFailures"])
};
</script>

<style scoped>
#home {
	padding: 1em;
	width: 100%;
	color: #000;
}

#box {
	padding: 0.5em;
	background: transparent;
	border: 0.5px solid #000;
}

p {
	color: #000;
}
</style>
