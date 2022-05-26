<template>
  <body>
    <div class="container_head flex">
      <SetTeamName />
      <PokemonFace />
    </div>
    <div class="container">
      <div v-for="(pokemon, index) in pokemons"
        class="container_cards" :key="index">
        <Card
          :name="pokemon.name"
          :id="pokemon.url.split('/')[6]"
          :pokemons="pokemons"
          :details="getDetailsData(pokemon.url.split('/')[6])"
          :index="index"
        />
      </div>
    </div>
  </body>
</template>
<script lang="ts" setup>
import SetTeamName from "../components/SetTeamName.vue";
import Card from "../components/Card.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import DetailPokemon from "../components/DetailPokemon.vue";
import axios from "axios";
import PokemonFace from "../components/PokemonFace.vue";

const store = useStore()
const pokemons = computed(() => store.state.pokemons)

const getDetailsData = (id: Number) => {
  store.dispatch("getDetailsPokemons", id)
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
