<template>
  <body>
    <SetTeamName />    
    <div
      v-for="(pokemon, index) in pokemons"
      class="container_cards flex" :key="index">
    <Card 
      :name="pokemon.name"
      :id="getId(pokemon)"
      :pokemons="pokemons"
      />

      
    </div>
    {{ store.state.pokemonSelected }}
  </body>
</template>
<script setup lang="ts">
import SetTeamName from '../components/SetTeamName.vue'
import Card from '../components/Card.vue'
import { useStore } from 'vuex'
import { ref, onBeforeMount, reactive } from 'vue'


const store = useStore()
const search = ref('')
let pokemons = reactive([])

store.dispatch("getAllPokemons", [100, 0])
pokemons = store.state.pokemons

function getId(pokemons:any) {
  return pokemons.url.split("/")[6]
}

</script>
<style>
.container_cards {
  float: left;
}
.input-search {
  background-color: aqua;
}
</style>