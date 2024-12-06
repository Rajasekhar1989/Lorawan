<template>
  <div> 
    <input id="darkModeToggle" ref="darkModeToggle" type="checkbox" role="switch" class="themeswitch" />        
    <label for="darkModeToggle" class="switchlabel">
      <span class="lightmode" v-html="$store.state.lightmode"></span>
      <span class="darkmode" v-html="$store.state.darkmode"></span>          
    </label> 
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
import store from '../store';
export default defineComponent({
  name: 'DarkLight',
  data() {
    return {
      darkModeToggle: null,
    };
  },
  setup() {
    const router = useRouter();
    const darkModeToggle = ref(null);
    return {
      router,
      darkModeToggle,
    };
  },
  beforeUnmount() {    
    if (this.darkModeToggle) {
      this.darkModeToggle.removeEventListener('change', this.toggleDarkMode);
    }
  },
  mounted() {
    if (localStorage.getItem('darkMode') === 'enabled') {     
      if (this.darkModeToggle) 
        this.darkModeToggle.checked = true;
    }    
    if (this.darkModeToggle) {
      this.darkModeToggle.addEventListener('change', this.toggleDarkMode);
    }
  },
  methods: {
    toggleDarkMode() {     
      document.body.className = '';
      const applMode = (this.darkModeToggle.checked) ? 'dark' : 'light'; 
      localStorage.setItem('previousTheme', applMode);
      document.body.classList.add(applMode);
    },
  },
});
</script>
