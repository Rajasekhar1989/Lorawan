<template>
	<ion-page>
    <div class="cardwrap">
      <h2 class="section-heading">Regions</h2>              
    </div>      
	</ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import {useRouter} from "vue-router";
export default defineComponent({
  name: 'NetworkRegions',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>
