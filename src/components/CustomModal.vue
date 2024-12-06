<template>
    <ion-modal :is-open="isOpen" @ionModalDidDismiss="closeWindow" :class="modalSizeClass"  class="custom-modal" :backdrop-dismiss="false">      
      <div class="modal-header">
        <ion-toolbar>
          <ion-title>{{ title }}</ion-title>
          <div slot="end" class="pageOptions">
            <a class="close" @click="closeWindow" v-html="$store.state.close"></a>           
          </div>
        </ion-toolbar>
      </div>
      <div class="modal-body">
        <component :is="bodyComponent" />            
      </div> 
    </ion-modal>
  </template>  
<script>
import { defineComponent } from 'vue';
import { useRouter } from "vue-router";
import eventBus from '../assets/scripts/eventbusnav.js';
export default defineComponent({
  name: 'CustomModal',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  computed: {
    modalSizeClass: function () {
      return this.$props.size;
    }
  },
  props: {
    isOpen: Boolean,
    title: String,
    bodyComponent: Object,   
    size: {
      type: String,
      default: 'win-600' // default size
    }
  },  
  methods: {
    closeWindow() {                       
      eventBus().emitter.emit('close');
    },
  }
});
</script>
