<template>
  <body>
    <div class="container_head flex">
      <SetTeamName />
      <PokemonFace />
    </div>
    <div class="container">
      <div
        v-for="(pokemon, index) in pokemons"
        class="container_cards" :key="index">
        <Card 
        :name="pokemon.name"
        :id="getId(pokemon)"
        :pokemons="pokemons"
        :details="getDetailsData(getId(pokemon))"
        :index="index"
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
import PokemonFace from '../components/PokemonFace.vue';

const store = useStore()
let pokemons: any = reactive([])

store.dispatch("getAllPokemons", [50, 0])
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
}

.container {
  margin: auto;
}
.input-search {
  background-color: aqua;
}
</style>