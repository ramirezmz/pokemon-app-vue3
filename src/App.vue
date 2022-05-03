<template>
  <body>
    <Header />
    <router-view></router-view>
  </body>
</template>
<script setup lang="ts">
import Header from './components/Header.vue';
import HomeVue from './pages/HomeVue.vue';
</script>
<style>
/* reset */
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
}
/* flexbox */
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
}

</style>
