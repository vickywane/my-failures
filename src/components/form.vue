<template>
	<div id="form">
		<input type="text" placeholder="Add a new Failure"  />

		<button>Add Failure</button>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Input } from '../styled/styled-components'

@Component
export default class Form extends Vue {}

</script>

<style scoped >
#form {
	padding: 0.7em;
	width: 100%;
	color: #fff;
	text-align : center;
}
 
input {
	width : 25em ; 
	height : 5vh ; 
	border : 1px solid #000 ; 
	border-radius : 3px ; 
	padding-left : 10px ; 
}

button { 
	margin-left : 10px;
	padding : 0.7em 1em ;
	background : transparent ; 
	border : 1px solid #000 ; 
	border-radius : 3px ; 
}

</style>
