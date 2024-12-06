<template>
    <div>
        <ion-fab horizontal="start" ref="fab">
            <ion-fab-button>
                <span>
                    <span class="list-icon" v-html="$store.state.colorwheel"></span>
                </span>
            </ion-fab-button>
            <ion-fab-list side="bottom">
                <ion-fab-button @click="toggleTheme('dark')" class="black"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('light')" class="grey"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('blue')" class="blue"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('indigo')" class="indigo"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('purple')" class="purple"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('pink')" class="pink"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('red')" class="red"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('orange')" class="orange"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('yellow')" class="yellow"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('teal')" class="teal"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('green')" class="green"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('cyan')" class="cyan"></ion-fab-button>
                <ion-fab-button @click="toggleTheme('brown')" class="brown"></ion-fab-button>
            </ion-fab-list>
        </ion-fab>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
import store from '../store/index.js';
export default defineComponent({
  name: 'ThemeView',
  data() {
    return {
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    toggleTheme(theme) {       
        document.body.className = '';       
        store.state.appliedTheme = theme;
        document.body.classList.add(store.state.appliedTheme);
    },
  },
});
</script>