<template>
	<ion-page>
    <div class="cardwrap">
      <ion-row>
        <ion-col size="3">
          <div class="mycard"></div>
        </ion-col>
        <ion-col size="3">
          <div class="mycard"></div>
        </ion-col>
        <ion-col size="3">
          <div class="mycard"></div>
        </ion-col>
      </ion-row>      
    </div>      
	</ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import {useRouter} from "vue-router";
export default defineComponent({
  name: 'TenantDashboard',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>
