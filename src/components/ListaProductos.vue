<template>
  <ul class="list-group">
      <!-- Iterar objetos -->
    <li v-for="(prod, index) of productos"
        :key="prod.id"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center">
      {{ index }} - {{ prod.nombre }}
      <span class="badge badge-primary badge-pill">{{ prod.cantidad }}</span>
    </li>
  </ul>
</template>

<script>
// 1. Importar mapState
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'

export default {
    name: 'ListaProductos',
    computed: {
        // 2. Mapear estados del store
        ...mapState(['productos'])
    },
    methods: {
        ...mapMutations(['aumentar'])
    }
};
</script>