import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 101,
  },
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload;
    },
    decremento(state, payload) {
      state.contador = state.contador - payload;
    },
  },
  actions: {
    accionBoton({ commit }, objeto) {
      console.log("OBJETO EN STORE", objeto);
      if (objeto.state) {
        commit("incrementar", Number(objeto.number));
      } else {
        commit("decremento", Number(objeto.number));
      }
    },
  },
  modules: {},
});
