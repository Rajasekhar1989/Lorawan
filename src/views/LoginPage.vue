<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo">
        <img src="../assets/images/LoRaWAN_Logo_black.png" alt="" />
      </div>
      <form @submit.prevent="handleLogin">
          <div class="custominput">            
              <ion-item :class="{'has-error': errors.username}">
                <span class="icon" v-html="$store.state.user"></span>
                <ion-input label-placement="stacked" v-model="username" placeholder="Enter Text" @focus="clearText('username')" @input="validateUsername">                    
                  <div slot="label">Username</div>
                </ion-input>                 
              </ion-item>            
              <p v-if="errors.username" class="error-message">{{ errors.username }}</p>
          </div>
          <div class="custominput">            
              <ion-item :class="{'has-error': errors.password}">
                <span class="icon" v-html="$store.state.userpassword"></span>
                <ion-input type="password" label-placement="stacked" v-model="password" @focus="clearText('password')" @input="validatePassword" placeholder="Enter Password">
                  <div slot="label">Password</div>
                </ion-input>                 
              </ion-item>            
              <p v-if="errors.password" class="error-message">{{ errors.password }}</p>        
          </div>       
          <ion-button expand="block" type="submit">Login</ion-button>
      </form>      
    </div>
  </div>
</template>
<script>
import '../assets/css/login.css';
export default {
  name:'LoginPage',
  data() {
    return {
      username: "",
      password: "",
      errors: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    clearText(field) {
      if (field === 'username') {
        this.username = ""; // Clear the username input
        this.errors.username = null; // Clear error immediately
      } else if (field === 'password') {
        this.password = ""; // Clear the password input
        this.errors.password = null; // Clear error immediately
      }
    },
    validateUsername() {
      if (this.username) {
        this.errors.username = null; // Clear error if username is entered
      }
    },
    validatePassword() {
      if (this.password) {
        this.errors.password = null; // Clear error if password is entered
      }
    },
    handleLogin() {
      this.errors = { username: null, password: null };
      let valid = true;

      if (!this.username) {
        this.errors.username = "Username is required";
        valid = false;
      }
      if (!this.password) {
        this.errors.password = "Password is required";
        valid = false;
      }

      if (valid) {        
        sessionStorage.setItem("isLoginStatus", "Login");
        sessionStorage.setItem("LuserName", Date.now());
        localStorage.setItem("getToken" + sessionStorage.getItem("LuserName").toString(), "rksnrao");
        localStorage.setItem("isLoginStatus" + sessionStorage.getItem("LuserName").toString(), "Login");
        window.location.href = "/ten_dashboard";
      }
    },
  },
};
</script>
