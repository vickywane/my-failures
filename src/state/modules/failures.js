const state = {
	failures: [
	{	id: 1,
		name: "Failed Jamb",
		retries: 0
	}  ,

	{	id: 2,
		name: "Failed Jamb",
		retries: 0
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
