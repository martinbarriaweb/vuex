import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 101,
  },
  mutations: {
    incrementar(state) {
      state.contador = state.contador + 10;
    },
  },
  actions: {},
  modules: {},
});
