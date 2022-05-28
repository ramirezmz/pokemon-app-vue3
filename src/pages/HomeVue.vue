<template>
  <div class="container_home flex">
    <img class="image_person" src="../assets/ash.png" alt="ash and pikachu">
    <div class="container_text">
      <h1>POKEMON CRUD</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <div class="container_button">
        <router-link class="button_start" to="/choose" @click="startPokemons()">Bora comecar!?</router-link>
      </div>
    </div>

  </div>
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
.container_home {
  background-image: url("../../public/pokemon_bg.png");
  background-size: contain;
}
.image_person{
  max-width: 10rem;
  transition: max-width 100ms ease-in-out;
  padding-right: 1rem;
}

.image_person:hover {
  max-width: 10.5rem;
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
  background: #111;
  color: #fff;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  position: relative;
}

.button_start:hover {
  background: linear-gradient(90deg, #03a9f4, #f331a5, #ffeb3b, #03a9f4);
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
