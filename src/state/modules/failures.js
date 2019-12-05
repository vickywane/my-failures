const state = {
	failures: [
	{	id: 1,
		name: "Failed Jamb",
		retries: 1
	}  ,

	{	id: 2,
		name: "Failed Jamb",
		retries: 2
	}  ,  
] 
}

const getters = {
	allFailures: state => state.failures
};

const actions = {};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations
};
