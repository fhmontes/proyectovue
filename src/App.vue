<template>
  <div id="app" class="container">
    <Cabecera></Cabecera>
    <ListaProductos></ListaProductos>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import ListaProductos from './components/ListaProductos.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    ListaProductos
  }
}
</script>
