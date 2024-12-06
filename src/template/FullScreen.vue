<template>
  <div>
    <div class="fullscreen-toggle">
      <a @click="toggleFullScreen">
        <span class="list-icon" v-html="$store.state.svgmax"></span>
      </a>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import {useRouter} from "vue-router";
export default defineComponent({
  name: 'FullScreen',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {  
    toggleFullScreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    }
  },
});
</script>
