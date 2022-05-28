<template>
  <header>
    <div class="container_home">
    <h2>Escolhe teus proprios pokemons</h2>
    <div class="line"></div>
    <h1>POKEMON CRUD</h1>
      <router-link class="button_start" to="/choose" @click="startPokemons()">Bora comecar!?</router-link>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();

const startPokemons = () => {
  if(!store.state.pokemons.length) {
    store.dispatch("getAllPokemons", [10, 0]);
    console.log('Chamada a a API Pokemon')
  } else {
    console.log('Já foi realizado o chamado')
  }
}
</script>
<style scoped>
header {
  width: 100vw;
  height: 100vh;
  background-image: url("../../public/pokemon_bg.png");
  background-position: bottom;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container_home {
  color: #304D63;
  text-align: center;
  margin-bottom: 150px;
}
.container_home h2 {
  font-size: 4vmin;
}

.line {
  width: 150px;
  height: 4px;
  background: #ED8975;
  margin: 10px auto;
  border-radius: 5px;
}

.container_home h1 {
  font-size: 7vmin;
  margin-top: 50px;
  margin-bottom: 30px;
}
.container_text {
  max-width: 30rem;
  padding: 5rem;
}

.container_button {
  margin: 2rem;
}
.button_start {
  height: 60px;
  width: 200px;
  padding: 10px;
  margin: 0 35px;
  border-radius: 50px;
  border: none;
  outline: none;
  background: #304D63;
  color: #fff;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  position: relative;
}

.button_start:hover {
  background: linear-gradient(90deg, #B2e7E8, #8FB9AA, #F2D096, #ED8975, #B2e7E8);
  background-size: 400%;
}

.button_start::before {
  content: '';
  position: absolute;
  background: inherit;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  border-radius: 50px;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s;
}

.button_start:hover:before {
  opacity: 1;
  z-index: -1;
}

.button_start:hover {
  z-index: 1;
  animation: glow 8s linear infinite;
  color: #fff;
}

@keyframes glow {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}

</style>
