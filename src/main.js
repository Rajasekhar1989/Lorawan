import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue, isPlatform } from '@ionic/vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import store from './store';
import '../src/assets/css/sidebarmenu.css';
import '../src/assets/scripts/sidebarmenu.js';
import '../src/assets/scripts/exportoptions.js';
import '../src/assets/css/layoutstructure.css';
import '../src/assets/css/tablestructure.css';
import '../src/assets/css/modalpopup.css';
import '../src/assets/css/defaultcolor.css';

import {
  IonCheckbox,
  IonPage,
  IonHeader, 
  IonContent, 
  IonInput,
  IonTextarea,
  IonButton,
  IonButtons,
  IonLabel, 
  IonToolbar, 
  IonTitle, 
  IonRouterOutlet, 
  IonAccordion, 
  IonAccordionGroup,  
  IonItem,
  IonSelect,
  IonSelectOption,
  IonFooter,
  IonTabBar, 
  IonTabButton, 
  IonTabs,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRadio,
  IonRadioGroup,
  IonRefresher, 
  IonRefresherContent,
  IonChip,
  IonAvatar,
  IonProgressBar,
  IonModal,
  IonToggle,
  IonSegment,
  IonSegmentButton,
  // IonSegmentView,
  // IonSegmentContent,
  IonCard,
  IonFab,
  IonFabList,
  IonFabButton,
  IonApp,  
  IonIcon,
  IonListHeader,
  IonNote,  
  IonSplitPane,
} 
from "@ionic/vue";

const app = createApp(App)
.use(IonicVue)
.use(router)
.use(store)
.component("isPlatform", isPlatform)
.component("IonApp", IonApp)
.component("IonIcon", IonIcon)
.component("IonListHeader", IonListHeader)
.component("IonNote", IonNote)
.component("IonSplitPane", IonSplitPane)
.component("IonCheckbox", IonCheckbox)
.component("IonPage", IonPage)
.component("IonHeader", IonHeader)
.component("IonContent", IonContent)
.component("IonLabel", IonLabel)
.component("IonInput", IonInput)
.component("IonTextarea", IonTextarea)  
.component("IonButton", IonButton)
.component("IonButtons", IonButtons)
.component("IonToolbar", IonToolbar)
.component("IonTitle", IonTitle)
.component("IonRouterOutlet", IonRouterOutlet)
// .component("Header", Header)
// .component("BodyContainer", BodyContainer)  
// .component("Footer", Footer)
.component("IonAccordion", IonAccordion)
.component("IonAccordionGroup", IonAccordionGroup)
.component("IonItem", IonItem)
.component("IonSelect", IonSelect)
.component("IonSelectOption", IonSelectOption)
.component("IonFooter", IonFooter)
.component("IonTabBar", IonTabBar)
.component("IonTabButton", IonTabButton)
.component("IonTabs", IonTabs)
.component("IonImg", IonImg)
.component("IonGrid", IonGrid)
.component("IonRow", IonRow)
.component("IonCol", IonCol)
.component("IonList", IonList)
.component("IonMenu", IonMenu)
.component("IonMenuButton", IonMenuButton)  
.component("IonMenuToggle", IonMenuToggle)
.component("IonRadio", IonRadio)
.component("IonRadioGroup", IonRadioGroup)  
.component("IonRefresher", IonRefresher)  
.component("IonRefresherContent", IonRefresherContent) 
.component("IonChip", IonChip)
.component("IonAvatar", IonAvatar)  
.component("IonProgressBar", IonProgressBar)   
.component("IonModal", IonModal)  
.component("IonToggle", IonToggle)  
.component("IonSegment", IonSegment)
.component("IonSegmentButton", IonSegmentButton)
// .component("IonSegmentView", IonSegmentView)
// .component("IonSegmentContent", IonSegmentContent)

.component("IonCard", IonCard)
.component("IonFab", IonFab)  
.component("IonFabList", IonFabList)  
.component("IonFabButton", IonFabButton);

router.isReady().then(() => {
  app.mount('#app');
});
