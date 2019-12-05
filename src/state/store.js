import Vue from "vue";
import Vuex from "vuex";
import failure from "./modules/failure";

Vue.use(Vuex);

export default new Vuex.store({
	modules: {
		failure
	}
});
