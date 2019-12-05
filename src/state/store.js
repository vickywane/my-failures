import Vue from "vue";
import Vuex from "vuex";
import { Failure } from './modules'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		Failure
	}
});
