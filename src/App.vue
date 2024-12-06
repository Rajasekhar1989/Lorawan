<template>
  <ion-app v-if="isLogin">
    <Login />
  </ion-app>
  <ion-app v-else>
    <ion-page>    
      <HeaderPart />      
      <!-- <SubHeader />  -->
      <BodyPart />
    </ion-page>
  </ion-app>  
</template>
<script>
import { defineComponent } from "vue";
import { mapState } from 'vuex';
import HeaderPart from './template/MainHeader.vue';
// import SubHeader from './template/ChildHeader.vue';
import BodyPart from './template/Body.vue';
import Login from './views/LoginPage.vue';
export default defineComponent({
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      appliedTheme: (state) => state.appliedTheme
    }),
    isLogin() {
      let resp = ((sessionStorage["isLoginStatus"] != undefined) ? ((sessionStorage["isLoginStatus"] == "Login") ? false : true) : true);
      return resp;
    },
  },
  watch: {
    appliedTheme(newTheme) {
      document.body.className = newTheme;
      localStorage.setItem('previousTheme', newTheme);
    }
  },
  mounted() {
    const previousTheme = localStorage.getItem('previousTheme');
    if (previousTheme) {
      document.body.className = previousTheme;
    } 
    else {  
      document.body.className = this.appliedTheme;
      localStorage.setItem('previousTheme', this.appliedTheme);
    }
    
    if (sessionStorage["isLoginStatus"] != undefined && sessionStorage["isLoginStatus"] == "Login" && ["/", "/login", "/ten_dashboard"].indexOf(window.location.pathname) != -1) {
      if (localStorage.getItem("InfoData" + sessionStorage.getItem("LuserName").toString()) == undefined) {
        this.$router.push("/ten_dashboard");
      } else {
        if (sessionStorage.getItem("LuserName") != undefined && sessionStorage.getItem("LuserName") != null) {
          if (localStorage["rpath" + sessionStorage.getItem("LuserName").toString()] != undefined) {
            this.$router.push(localStorage["rpath" + sessionStorage.getItem("LuserName").toString()]);
          }
        } else if (localStorage["rpath"] != undefined) {
          this.$router.push(localStorage["rpath"]);
        } else {
          this.$router.push("/ten_dashboard");
        }
      }
    }
  },  
  components: {    
    HeaderPart,
    // SubHeader,
    BodyPart,
    Login,
  },
});
</script>