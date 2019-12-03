<template>
	<div>
		<div id="home">
			<a href="/">Failures</a>
			<a href="/">Home</a>
			<a href="/">Profile</a>
		</div>

		<Motivational />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Motivational from './motivational.vue'

@Component({
	components: {
	Motivational
	}
})

export default class Header extends Vue {}
</script>

<style>
#home {
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
