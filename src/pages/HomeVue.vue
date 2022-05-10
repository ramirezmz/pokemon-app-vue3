<template>
  <body>
    <SetTeamName />
        <!-- {{ store.state.pokemonSelected }} -->
    <div class="">
      <div
        v-for="(pokemon, index) in pokemons"
        class="container_cards" :key="index">
        <Card 
        :name="pokemon.name"
        :id="getId(pokemon)"
        :pokemons="pokemons"
        :details="getDetailsData(getId(pokemon))"
        />
      </div>
    </div>
  </body>
</template>
<script setup lang="ts">
import SetTeamName from '../components/SetTeamName.vue'
import Card from '../components/Card.vue'
import { useStore } from 'vuex'
import { ref, onBeforeMount, reactive } from 'vue'
import DetailPokemon from '../components/DetailPokemon.vue';
import axios from 'axios';

const store = useStore()
let pokemons = reactive([])

store.dispatch("getAllPokemons", [10, 0])
pokemons = store.state.pokemons

function getId(pokemons:any) {
  return pokemons.url.split("/")[6]
}

function getDetailsData(id: Number) {
  store.dispatch('getDetailsPokemons', id)
}
</script>
<style>
.container_cards {
  float: left;
  /* margin: auto; */
}

.container {
  margin: auto;
}
.input-search {
  background-color: aqua;
}
</style>