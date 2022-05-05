<template>
  <div class="container_card">
    <h3 class="container_id_card">
      #0{{props.id}}
    </h3>
    <div class="container_image_card flex" @click="detailsPokemon(props.id)">
      <img class="image_card"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`" :alt="`${name}`">
    </div>
    <h3 class="name_card">{{props.name}}</h3>
    <div class="container_buttons flex">
      <button 
        @click="[addToPokemonSelected(props.id), checkedStatus()]"
        v-if="addStatus"
        class="button_add">Add</button>
      <button 
        @click="[checkedStatus()]" 
        v-else 
        class="button_remove">Remover</button>
      
      <button class="button_info"
        @click="() => TogglePopup('buttonTrigger')"
        >Info</button>
        <Popup 
          v-if="popupTriggers.buttonTrigger"
          :TogglePopup="() => TogglePopup('buttonTrigger')"
          >
          <DetailPokemon 
            :id="props.id"
            :name="props.name"
            />
        </Popup>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex"
import { computed, defineProps, ref, watch } from "vue"
import Popup from "./Popup.vue"
import DetailPokemon from "./DetailPokemon.vue"

const store = useStore()
const addStatus = ref(true)
const popupTriggers = ref({
  buttonTrigger: false
})

const TogglePopup = (trigger: String) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger]
}
const props = defineProps({
   name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    details: {
      details: Array,
      required: true
    }
})

function showPokemon (id: any) {
   store.dispatch('getDetailsPokemons', id)
}

function addToPokemonSelected(id: any) {
 store.commit('addPokemons', id)
}

function checkedStatus() {
  addStatus.value = !addStatus.value
}

</script>
<style>
.container_image_card {
  padding: 1rem;
}

.container_id_card{
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
  background-color: #E3E6E9;
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
  background-color: #1AAE9F;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_remove {
  border: 0;
  border-radius: 1rem;
  padding: 4px;
  width: 4rem;
  background-color: #D3455B;
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
  transition: .5s;
}

.button_add:hover {
  background-color: #039e3e;
  color: #fff;
  transition: .5s;
}

</style>