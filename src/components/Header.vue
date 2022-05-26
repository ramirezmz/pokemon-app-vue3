<template>
  <header class="cabecalho">
    <router-link to="/">
      <img class="titulo_pokemon_img" src="../assets/pokemon_name.png" />
    </router-link>
  </header>
</template>
<script lang="ts" setup>
</script>
<style>
.cabecalho {
  background-color: #4b5c6b;
  text-align: center;
  padding: 1rem;
}

.titulo_principal {
  color: #fff;
}

.titulo_pokemon_img {
  width: 12rem;
}
</style>
