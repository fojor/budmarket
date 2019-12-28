import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const RootMutations = {
    showModal(state: IRootState, componentName: string) {
        state.modalVisible = true;
        state.modalComponent = componentName;
    },
    hideModal(state: IRootState) {
        state.modalVisible = false;
    },
};

export interface IRootState {
    modalVisible: boolean,
    modalComponent: any;
}
export const RootState = <IRootState>{
    modalVisible: false,
    modalComponent: null,
};

export default new Vuex.Store({
    state: RootState,
    mutations: RootMutations,
    actions: {
    },
    modules: {
    }
})
