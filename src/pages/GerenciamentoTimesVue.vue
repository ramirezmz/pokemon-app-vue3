<template>
  <table class="tabela table">
    <thead class="tabela_cabecalho">
      <tr class="tabela_linha">
        <td class="tabela_categoria" scope="col">ID</td>
        <td class="tabela_categoria" scope="col">NOME</td>
        <td class="tabela_categoria" scope="col">POKEMONS</td>
        <td class="tabela_categoria" scope="col">OPCOES</td>
      </tr>
    </thead>
    <tbody class="tabela_corpo" v-for="(user, index) in users" :key="index">
      <tr class="tabela_linha">
        <td class="tabela_valor" scope="row">{{ index + 1 }}</td>
        <td class="tabela_valor">{{ user.name }}</td>
        <td class="tabela_valor flex">
          <div
            class="pokemon_selecionados flex"
            v-for="(pokemons, id) in user.pokemonsChoosed"
            :key="id"
          >
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                pokemons.url.split('/')[6]
              }.svg`"
              alt="user.pokemonsChoosed[0].name"
              class="pokemon_imagem"
            />
          </div>
        </td>
        <td class="tabela_botoes">
          <router-link to="/choose">
            <button class="button_editar" @click="editTeam(index)">
              EDITAR
            </button>
          </router-link>
          <button class="button_remover" @click="deleteSavedTeam(index)">
            REMOVER
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const users = computed(() => store.state.teamList);

const deleteSavedTeam = (user: number) => {
  store.commit("deleteSavedTeam", user);
};

const editTeam = (teamId: any) => {
  store.commit("editTeam", store.state.teamList[teamId])
}
</script>

<style>
th,
td {
  font-weight: unset;
  padding-right: 10px;
}

.pokemon_imagem {
  background-color: #1aae9f;
  width: 6rem;
  height: 6rem;
  border: 1px solid #484848;
  border-radius: 3rem;
  margin: 6px;
}

.button_editar {
  margin: 0.5rem;
  border: 0;
  border-radius: 1rem;
  padding: 8px;
  width: 5rem;
  background-color: #1aae9f;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_editar:hover {
  background-color: #0bbd40;
  color: #fff;
  transition: 0.5s;
}

.button_remover {
  border: 0;
  border-radius: 1rem;
  padding: 8px;
  width: 5rem;
  background-color: #d3455b;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_remover:hover {
  background-color: #e70628;
  color: #fff;
  transition: 0.5s;
}
</style>
