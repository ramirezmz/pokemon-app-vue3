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
    <tbody class="tabela_corpo">
      <tr class="tabela_linha">
        <td class="tabela_valor" scope="row">001</td>
        <td class="tabela_valor">Roberto Team</td>
        <td class="tabela_valor">
          <div class="pokemon_selecionados">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg" alt="pikachu" class="pokemon_imagem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg" alt="pikachu" class="pokemon_imagem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg" alt="pikachu" class="pokemon_imagem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg" alt="pikachu" class="pokemon_imagem">
          </div>
        </td>
        <td class="tabela_botoes">
          <button class="button_editar">EDITAR</button>
          <button class="button_remover">REMOVER</button>
        </td>
      </tr>
      <tr class="tabela_linha">
        <td class="tabela_valor" scope="row">001</td>
        <td class="tabela_valor">Amanda Team</td>
        <td class="tabela_valor">
          <div class="pokemon_selecionados">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="pikachu" class="pokemon_imagem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg" alt="pikachu" class="pokemon_imagem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg" alt="pikachu" class="pokemon_imagem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/200.svg" alt="pikachu" class="pokemon_imagem">
          </div>
        </td>
        <td class="tabela_botoes">
          <button class="button_editar">EDITAR</button>
          <button class="button_remover">REMOVER</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import Vue from 'vue'

</script>

<style>

th, td {
  font-weight: unset;
  padding-right: 10px;
}


.pokemon_imagem{
  background-color: #1AAE9F;
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
  background-color: #1AAE9F;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_editar:hover {
  background-color: #0bbd40;
  color: #fff;
  transition: .5s;
}

.button_remover {
  border: 0;
  border-radius: 1rem;
  padding: 8px;
  width: 5rem;
  background-color: #D3455B;
  color: #fff;
  box-shadow: 1px 1px 5px #484848;
}

.button_remover:hover {
  background-color: #e70628;
  color: #fff;
  transition: .5s;
}

</style>