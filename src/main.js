import Vue from 'vue'
// Componente PRINCIPAL
import App from './App.vue'
// Importar store de Vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
