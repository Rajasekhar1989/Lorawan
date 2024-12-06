<template>
  <ion-page>
    <div class="cardwrap">
      <h2 class="section-heading">Shifts And Weekoffs</h2>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  </ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from "vue-router";
export default defineComponent({
  name: 'ShiftsAndWeekoffs',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>