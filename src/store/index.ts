import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './state'
import { RootMutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: RootState,
    mutations: RootMutations,
    actions: {
    },
    modules: {
    }
})
