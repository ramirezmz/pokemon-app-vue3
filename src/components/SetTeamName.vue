<template>
  <div class="formulario_container flex">
    <form class="formulario_nome_time flex">
      <label for="nome_time">Digite o nome do time: </label>
      <input 
        class="nome_time_input" 
        v-model="nameTeam"
        >
    </form>
      <button class="button_salvar" @click="[saveTeam(nameTeam)]">Salvar</button>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const store = useStore()
const nameTeam = ref('')
const router = useRouter()

function saveTeam(value: string) {
  if(value == ''){
    window.alert('Você precisa colocar um nome ao seu time...')
  } 
  else if(store.state.team.pokemonsChoosed.length === 0) {
    window.alert('Pokemons 0, escolhe pelo menos 1')
  }
  else {
    store.commit('addUserToState', value)
    store.dispatch('getEventId')
    store.commit('fullTeam', store.state.team)
    router.push('gerenciamento')
  }
  store.commit('cleanTeam')
}
</script>
<style>
.formulario_container {
  justify-content: center;
  padding: 2rem;
}

.nome_time_input {
  border: 1px solid #484848;
  border-radius: 1rem;
  margin: 0 1rem;
  padding: .5rem 1rem;
  background-color: #f1eeee;
}

.button_salvar {
  border: 0;
  border-radius: 1rem;
  padding: 8px;
  width: 5rem;
  background-color: #1AAE9F;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_salvar:hover {
  background-color: #4ecec1;
  color: #fff;
  transition: .5s;
}

</style>