<template>
  <div>
    <div
      class="cartao-pokemon aberto"
      :class="store.state.detailPokemon[props.id - 1].types[0].type.name"
      id="cartao-pikachu"
    >
      <div class="cartao-topo">
        <div class="detalhes">
          <h2 class="nome">{{ props.name }}</h2>
          <span>#{{ props.id }}</span>
        </div>
        <span class="tipo">{{
          store.state.detailPokemon[props.id - 1].types[0].type.name
        }}</span>

        <div class="cartao-imagem">
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`"
            :alt="`${props.name}`"
            class="container_image_detalhe"
          />
        </div>
      </div>

      <div class="cartao-informacoes">
        <div class="status">
          <h3>Status</h3>

          <ul>
            <li>
              HP: 0{{
                store.state.detailPokemon[props.id - 1].stats[0].base_stat
              }}
            </li>
            <li>
              Ataque: 0{{
                store.state.detailPokemon[props.id - 1].stats[1].base_stat
              }}
            </li>
            <li>
              Defesa: 0{{
                store.state.detailPokemon[props.id - 1].stats[2].base_stat
              }}
            </li>
            <li>
              Especial: 0{{
                store.state.detailPokemon[props.id - 1].stats[3].base_stat
              }}
            </li>
            <li>
              Velocidade: 0{{
                store.state.detailPokemon[props.id - 1].stats[5].base_stat
              }}
            </li>
          </ul>
        </div>

        <div class="habilidades">
          <h3>Habilidades</h3>
          <ul>
            <li>
              {{
                store.state.detailPokemon[props.id - 1].abilities[0].ability
                  .name
              }}
            </li>
            <li>
              {{
                store.state.detailPokemon[props.id - 1].abilities[1].ability
                  .name
              }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props: any = defineProps({
  id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  }
});
</script>
<style scoped>
.cartao-pokemon {
  display: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 30px;
}

.cartao-pokemon .cartao-topo {
  padding: 15px 25px 0;
}

.cartao-pokemon .nome {
  margin-bottom: 5px;
}

.cartao-pokemon .tipo {
  font-size: 12px;
  background-color: #ffffff;
  opacity: 0.7;
  border-radius: 10px;
  padding: 2px 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.tipo {
  margin-right: 3px;
}
.cartao-pokemon .detalhes {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cartao-pokemon .cartao-imagem {
  width: 300px;
  height: 250px;
}

.cartao-imagem {
  margin-left: 80px;
}

.cartao-pokemon img {
  max-height: 100%;
}

.cartao-pokemon .cartao-informacoes {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 80px 30px 50px;
  margin-top: -70px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.cartao-pokemon .cartao-informacoes h3 {
  font-size: 20px;
  margin-bottom: 15px;
  border-bottom: 1px solid #6b727a;
}

.cartao-pokemon .cartao-informacoes .status,
.cartao-pokemon .cartao-informacoes .habilidades {
  padding: 0 10px;
  width: 180px;
}

.cartao-pokemon .cartao-informacoes .habilidades ul li,
.cartao-pokemon .cartao-informacoes .status ul li {
  border-bottom: 1px solid #c3c4c5;
  padding: 0 0 5px;
  margin-bottom: 5px;
  font-size: 15px;
}

.cartao-pokemon.aberto {
  display: block;
}

.fire {
  background-color: #ed8a8b;
}

.electric {
  background-color: #fcc719;
}

.water {
  background-color: #76befe;
}

.grass {
  background-color: #49d0b0;
}

.poison {
  background-color: #ba68c8;
}

.tipo-dragao {
  background-color: #c29791;
}

.ground {
  background-color: #8a6d5a;
}

.bug {
  background-color: #c5e48c;
}

.normal {
  background-color: #f5a7b4;
}

.fairy {
  background-color: #ffe0ce;
}

.fighting {
  background-color: #f75540;
}

.ice {
  background-color: #7bf8d3;
}

.psychic {
  background-color: #9658fc;
}

.dragon {
  background-color: #616e79;
}

.rock {
  background-color: #523715;
}
</style>
