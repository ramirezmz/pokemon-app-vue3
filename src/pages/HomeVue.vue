<template>
  <div>
    <h1>OIIIII</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    <router-link to="/choose" @click="startPokemons()">Bora comecar</router-link>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();

const startPokemons = () => {
  if(!store.state.pokemons.length) {
    store.dispatch("getAllPokemons", [10, 0]);
    console.log('Chamada a a API Pokemon')
  } else {
    console.log('Já foi realizado o chamado')
  }
}
</script>
