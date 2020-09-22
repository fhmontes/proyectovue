import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [
      {nombre: 'Arroz', cantidad: 0},
      {nombre: 'Fideo', cantidad: 0},
      {nombre: 'Maiz', cantidad: 0},
      {nombre: 'Cereal', cantidad: 0},
    ]
  },
  mutations: {
    aumentar: function(state, index){
      state.productos[index].cantidad++;
    }
  },
  actions: {
  },
  modules: {
  }
})
