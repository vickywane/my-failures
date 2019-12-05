<template>
	<div id="header">
		<div id="home">
			<a href="/">Failures</a>
			<a href="/">Home</a>
			<a href="/">Profile</a>
		</div>

	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	components: {
	}
})

export default class Header extends Vue {}
</script>

<style scoped >
#header {
	padding: 1em;
	box-shadow: 0px 10px 10px #05156b;
	width: 100%;
	background-color: #2fc87b ;
}

a {
	padding-left: 15px;
	color: #fff;
	font-weight: 22px;
}
</style>
