<template>
  <div class="formulario_container flex">
    <form class="formulario_nome_time flex">
      <label for="nome_time">Digite o nome do time: </label>
      <input class="nome_time_input" type="text" id="nome_time">
    </form>
      <button class="button_salvar">Salvar</button>
  </div>
</template>
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