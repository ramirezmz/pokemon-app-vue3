<template>
  <div class="popup flex">
    <div class="popup_inner">
      <slot />
      <div class="container_button">
        <button class="button_remove" @click="props.TogglePopup()">Close</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props: any = defineProps({
  TogglePopup: {
    required: true,
  },
});
</script>
<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup_inner {
  background: #fff;
  padding: 32px;
  border-radius: 15px;
}

.container_button {
  text-align: center;
  padding-top: 8px;
}
</style>
