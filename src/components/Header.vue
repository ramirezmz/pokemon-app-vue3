<template>
  <nav class="navbar">
    <router-link to="/">
      <img class="logo" src="../../public/poke_icon.png" alt="poke_icon">
    </router-link>
    <ul class="nav_links">
      <li class="active"><router-link class="a_router" to="/">Inicio</router-link></li>
      <li><router-link class="a_router" to="/choose">Pokemons</router-link></li>
      <li><router-link class="a_router" to="/gerenciamento">Times</router-link></li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
</script>
<style>
.a_router {
  text-decoration: none;
  color: #304D63;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
}

.nav_links {
  display: flex;
  align-items: center;
}

.nav_links li {
  margin: 0 30px;
}

.active {
  color: #304D63;
  text-decoration: underline;
  font-weight: bold;
}

.logo {
  width: 2rem;
}
</style>
