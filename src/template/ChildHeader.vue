<template>
  <div class="subheader">
    <div class="childleftsuboptions">     
      <!-- <div class="menutogglepos"><MenuToggle /></div> -->
      <div class="darklightpos"><DarkLight /></div>
      <div><FullScreen /></div>  
      <div><Theme /></div> 
    </div>
    <div class="childrightsuboptions">
     <div class="datetime">{{ formattedDate }}</div>    
    </div>
  </div>
</template>
<script>
// import MenuToggle from '../template/MenuToggle.vue';
import DarkLight from '../template/DarkLightMode.vue';
import FullScreen from '../template/FullScreen.vue';
import Theme from '../template/ThemeView.vue';
export default {
  name: "ChildHeader",
  components: {
    // MenuToggle,
    DarkLight,
    FullScreen,
    Theme
  },
  data() {
    return {
      currentDate: new Date()
    };
  },
  computed: {
    formattedDate() {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      return this.currentDate.toLocaleString('en-US', options);
    }
  },
  mounted() {   
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
</script>