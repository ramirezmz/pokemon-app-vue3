<template>
  <div class="container_card">
    <h3 class="container_id_card">#0{{ props.id }}</h3>
    <div class="container_image_card flex">
      <img
        class="image_card"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`"
        :alt="`${props.name}`"
      />
    </div>
    <h3 class="name_card">{{ props.name }}</h3>
    <div class="container_buttons flex">
      <button @click="addToPokemonSelected(props.id)"
        v-if="addStatus" class="button_add">Add</button>
      <button @click="removePokemonSelected(1)"
        v-else class="button_remove">Remover</button>
      <button class="button_info" @click="TogglePopup('buttonTrigger', props.id)">
        Info
      </button>
      <Popup
        v-if="popupTriggers.buttonTrigger"
        :TogglePopup="() => TogglePopup('buttonTrigger')">
        <DetailPokemon
          :id="props.id"
          :name="props.name"/>
      </Popup>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { defineProps, ref } from "vue";
import Popup from "./Popup.vue";
import DetailPokemon from "./DetailPokemon.vue";
import axios from "axios";

const store = useStore();
const addStatus = ref(true);
const props: any = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
});
const popupTriggers: any = ref({
  buttonTrigger: false,
});

const TogglePopup = (trigger: string, id: number) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger];
  const detailPokemon = store.state.detailPokemon[id - 1]
  console.log(detailPokemon)
};

const showPokemon = (id: any) => {
  store.dispatch("getDetailsPokemons", id);
}

const addToPokemonSelected = (id: any) => {
  if(store.state.team.pokemonsChoosed.length <= 2) {
    store.commit("addPokemons", store.state.pokemons[id - 1]);
    addStatus.value = !addStatus.value
  } else {
    window.alert('Voce ja escolheu 3 pokemons!')
    addStatus.value = addStatus.value
  }
}

const removePokemonSelected = (id: number) => {
  addStatus.value = !addStatus.value
  store.commit("deletePokemonTeamSelected", id);
}
</script>
<style>
.container_image_card {
  padding: 1rem;
}

.container_id_card {
  margin: 5px;
  padding: 0 7px;
  border: 1px solid #484848;
  border-radius: 1rem;
  width: 3rem;
  font-weight: 350;
  font-size: 1rem;
}

.container_card {
  border: 1px solid #788896;
  border-radius: 0.5rem;
  width: 13rem;
  height: 16rem;
  background-color: #e3e6e9;
  margin: 1rem;
}

.image_card {
  max-width: 7rem;
  max-height: 7rem;
}

.name_card {
  text-align: center;
}

.button_add {
  margin: 5px;
  border: 0;
  border-radius: 1rem;
  padding: 4px;
  width: 3rem;
  background-color: #1aae9f;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_remove {
  border: 0;
  border-radius: 1rem;
  padding: 4px;
  width: 4rem;
  background-color: #d3455b;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_info {
  border: 0;
  border-radius: 1rem;
  padding: 4px;
  width: 4rem;
  background-color: #456bd3;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_info:hover {
  background-color: #042c9b;
  color: #fff;
  transition: 0.5s;
}

.button_add:hover {
  background-color: #039e3e;
  color: #fff;
  transition: 0.5s;
}
</style>
