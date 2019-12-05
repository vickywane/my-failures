<template>
	<div id="home">
		<p>List of all failures</p>

		<div v-for="failure in allFailures" v-bind:key="failure.id" id="box">
		<div id="list" >
			<div id="failure" >
				<p>{{ failure.name }}</p>
			</div>

			<div id="retry" >
				<p> {{failure.retries}} retries </p>
			</div>

			<div id="delete" >
				<p> Delete </p>
			</div>
		</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters  , mapActions} from "vuex";

export default {
	name: "List",
	computed: mapGetters(["allFailures"]), 
	methods: {
		...mapActions([''])
	}, 
	created() {
 // eslint-disable-next-line
	console.log('a vue lifecycle method')
	}
};
</script>

<style scoped>
#home {
	padding: 0.3em;
	width: 100%;
	color: #000;
}

#box {
	margin : 0em 1em;
	background: transparent;
	border: 0.5px solid #000;
	margin-bottom : 20px;
} 

#list { 
	display : flex;
}

p {
	padding-left : 15px;
}

#retry {
	padding-right : 12px;
	background-color : blue ; 
	color : #fff ; 
}

#delete { 
	padding-right : 12px;
	background-color : red ; 
	color : #fff ; 
	cursor: pointer;
}

#failure { 
	padding-right  : 20px;
	flex : 1;
}

</style>
