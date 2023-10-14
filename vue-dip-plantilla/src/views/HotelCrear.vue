<script setup>

import BreadCrumb  from '../components/BreadCrumb.vue'

    import { ref } from 'vue'

    const contador = ref(0)

    function incrementar(){
        contador.value++
    }

</script>


<template>

    <BreadCrumb modulo="Hotel" accion="Crear"/>


    <!-- <div>

        <button @click="incrementar()" class="bg-gray-300 p-3 hover:bg-gray-400">
            Incrementar 
        </button>   
        Valor: # {{ contador }}
    </div> -->
</template>