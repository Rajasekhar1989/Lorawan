<template> 
  <ion-content class="parent-body">
    <ion-split-pane content-id="main-content">        
      <ion-menu content-id="main-content" type="overlay" v-show="store.state.leftmenuToggle" >
        <Menu />
      </ion-menu>
      <div class="resize-handle"></div> 
      <ion-content class="mainBody" main>           
        <ion-router-outlet id="main-content" :animated="false"></ion-router-outlet>                
        <!-- <Footer /> -->
      </ion-content>      
    </ion-split-pane>    
  </ion-content>
</template>
<script setup>
import Menu from '../template/SideMenu.vue'
import { onMounted } from 'vue';
import store from '../store/index';
// import Footer from './MainFooter.vue';

const handleResize = () => {
  const handle = document.querySelector('.resize-handle');
  const menu = document.querySelector('ion-menu');
  let startX, startWidth;

  const onMouseMove = (event) => {
    const newWidth = startWidth + (event.clientX - startX);
    menu.style.width = `${newWidth}px`;
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  handle.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    startWidth = parseInt(window.getComputedStyle(menu).width, 10);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
};

onMounted(() => {
  handleResize();
});
</script>