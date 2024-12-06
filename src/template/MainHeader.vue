<template>
  <ion-header>
      <ion-row class="main-header">
        <ion-col size-lg="2"> 
          <ion-buttons>
            <figure class="logo">
              <img src="../assets/images/logo_new.webp" alt="Logo" />
            </figure>   
            <PMenuToggle />           
          </ion-buttons>          
        </ion-col>
        <ion-col size-lg="9">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link pe-0" @click="btnClick('refresh')">
                    <span class="nav-icon" v-html="$store.state.refresh"></span> Refresh
                  </a>
                </li>
                <li>
                  <div tabindex="0" class="dropmenu">
                    <div class="user-wrap">
                      <div class="user-img">
                        <span v-html="$store.state.user1"></span>
                        <!-- <img src="../assets/images/user-sample.png" alt="User Image"> -->
                      </div>
                      <div class="user-content">
                        <h6 class="mb-0">User Name</h6>
                        <span class="role">
                          Admin
                          <span class="dropdownIcon" v-html="$store.state.svgarrow"></span>
                        </span>
                      </div>
                    </div>
                    <div class="menu-dropdown">
                      <a href="javascript:void"><span v-html="$store.state.user"></span> Account</a>
                      <a href="javascript:void" @click="btnClick('logout')"><span v-html="$store.state.logout"></span> Logout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </ion-col>
            
        
      </ion-row>    
  </ion-header>
</template>
<script>
import { logout } from '../assets/scripts/functionality';
import { confirmMsg, getEvtName } from '../assets/scripts/modalwindow';
import eventBus from '../assets/scripts/eventbusnav';
import PMenuToggle from '../template/MenuToggle.vue';
export default {
name: "MainHeader",
components: {
  PMenuToggle,
},
mounted() {
  eventBus().emitter.on("evtLogoutconfirmYes",()=>{
    logout();
  });
},
unmounted() {
  eventBus().emitter.off("evtLogoutconfirmYes");
},
methods: {
  btnClick: function (type) {
    if(type == "refresh") {
      getEvtName();
    }
    else if(type == "logout") {
      confirmMsg("", "Are you sure you want to Logout?");
    }
  }
},
};
</script>
