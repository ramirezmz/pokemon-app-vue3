<template>
  <div
    class="container_face"
    v-for="pokemon in pokemonsChoosedFace"
    :key="pokemon.name"
  >
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        pokemon.url.split('/')[6]
      }.svg`"
      alt="bulbasaur"
      class="pokemon_imagem"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

const pokemonsChoosedFace = computed(() => store.state.team.pokemonsChoosed);
</script>
<style scoped>
.pokemon_imagem {
  background-color: #d7ffeb;
  width: 3rem;
  height: 3rem;
  border: 1px solid #484848;
  border-radius: 3rem;
  margin: 6px;
}
</style>
