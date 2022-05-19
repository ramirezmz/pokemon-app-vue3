<template>
   <div class="popup">
      <div class="popup_inner">
         <slot />
         <button class="button_remove" @click="props.TogglePopup()">
            Close
         </button>
      </div>
   </div>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue'

const props: any = defineProps({
   TogglePopup: {
      required: true 
   }
})

</script>
<style scoped>
.popup{
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
.popup_inner{
   background: #fff;
   padding: 32px;
}
</style>