<template>
   <div>
      <div class="cartao-pokemon aberto electric" id="cartao-pikachu">
            <div class="cartao-topo">
               <div class="detalhes">
                  <h2 class="nome">{{props.name}}</h2>
                  <span>#{{props.id}}</span>
               </div>
               <span class="tipo" >Eletricidade</span>

               <div class="cartao-imagem">
                  <img src="" class="container_image_detalhe"/>
               </div>
            </div>

            <div class="cartao-informacoes">
               <div class="status">
                  <h3>Status</h3>

                  <ul>
                  <li>HP: 001</li>
                  <li>Ataque: 001</li>
                  <li>Defesa: 001</li>
                  <li>Especial: 001</li>
                  <li>Velocidade: 001</li>
                  </ul>
               </div>

               <div class="habilidades">
                  <h3>Habilidades</h3>
                  <ul>
                     <li>ASDAss</li>
                  </ul>
            </div>
         </div>
      </div>
   </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
   id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
})

</script>
<style scoped>

.cartao-pokemon {
    display: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
}

.cartao-pokemon .cartao-topo {
    padding: 30px 40px 0;
}

.cartao-pokemon .nome {
    margin-bottom: 5px;
}

.cartao-pokemon .tipo {
    font-size: 12px;
    background-color: #FFFFFF;
    opacity: 0.7;
    border-radius: 10px;
    padding: 2px 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
}

.tipo{
  margin-right: 3px;
}
.cartao-pokemon .detalhes {
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.cartao-pokemon .cartao-imagem {
    width: 350px;
    height: 350px;
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
    background-color: #FFFFFF;
    padding: 80px 30px 50px;
    margin-top: -70px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.cartao-pokemon .cartao-informacoes h3 {
    font-size: 20px;
    margin-bottom: 15px;
    border-bottom: 1px solid #6B727A;
}

.cartao-pokemon .cartao-informacoes .status, .cartao-pokemon .cartao-informacoes .habilidades {
    padding: 0 10px;
    width: 180px;
}

.cartao-pokemon .cartao-informacoes .habilidades ul li, .cartao-pokemon .cartao-informacoes .status ul li {
    border-bottom: 1px solid #C3C4C5;
    padding: 0 0 5px;
    margin-bottom: 5px;
    font-size: 15px;
}

.cartao-pokemon.aberto {
    display: block;
}

.fire {
    background-color: #ED8A8B;
}

.electric {
    background-color: #FCC719;
}

.water {
    background-color: #76BEFE;
}

.grass {
    background-color: #49D0B0;
}

.poison {
    background-color: #BA68C8;
}

.tipo-dragao {
    background-color: #C29791;
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