<template>
  <body>
    <Header />
    <router-view />
  </body>
</template>
<script lang="ts" setup>
import Header from "./components/Header.vue"
</script>
<style>
/* reset */
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  font-family: "Source Sans Pro", sans-serif;
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
