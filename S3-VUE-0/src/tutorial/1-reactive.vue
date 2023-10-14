<script setup>

import { ref, reactive } from 'vue'

// Reactividad con ref()

const mensaje = ref("Hola muchachos")
const contador = ref(0)

function cambiartexto(t) {
    mensaje.value = "Esto cambia inmediatamente"
}


// Reactividad con reactive()
const estado = reactive({ countador: 0 })

</script>

<template>
    <H1>{{mensaje}}</H1>

    <button @click="cambiartexto">Cambiar texto</button>
    <br><br>
    <button @click="contador++">Incrementar con ref() {{ contador }} </button>
    <br><br>
    <button @click="estado.countador++">Incrementar con reactive() {{ estado.countador }} </button>

</template>