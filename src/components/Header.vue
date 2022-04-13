<template>
  <header class="cabecalho">
    <h1 class="titulo_principal">Pokemon App</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/gerenciamento">Lista de Times</router-link>
  </header>
</template>
<style>
.cabecalho {
  background-color: #4B5C6B;
  text-align: center;
  padding: 1rem;
}

.titulo_principal {
  color: #fff;
}

</style>