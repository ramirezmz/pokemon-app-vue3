<template>
  <body>
    <SetTeamName />
    <div
      v-for="(pokemon, index) in pokemons"
      class="container_cards flex">
     {{index += 1}}
    <Card 
      :name="pokemon.name"
      :id="index"
      />
    </div>
  </body>
</template>
<script setup lang="ts">
import SetTeamName from '../components/SetTeamName.vue'
import Card from '../components/Card.vue'
import { useStore } from 'vuex'
import { ref, onBeforeMount, reactive } from 'vue'


const store = useStore()
let pokemons = reactive({})

store.dispatch("getAllPokemons", [200, 0])

pokemons = store.state.pokemons

function getId(pokemons:any) {
  return 
}

</script>