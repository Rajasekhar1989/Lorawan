<template>
  <div>
    <ion-menu-button @click="toggleMenu" auto-hide="false" class="togglemenubutton">
      <span v-html="$store.state.menuicon"></span>
    </ion-menu-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import {useRouter} from "vue-router";
import store from '../store/index.js';
export default defineComponent({
  name: 'MenuToggle',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {  
  toggleMenu: function(){
    let resW = parseInt(window.innerWidth);
    /* console.log(resW); */  
    if( resW > 991 ){        
      store.state.leftmenuToggle = !store.state.leftmenuToggle;
    } else {
      store.state.leftmenuToggle = true;
    }
  }
},
});
</script>