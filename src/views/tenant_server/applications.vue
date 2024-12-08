<template>
	<ion-page>
    <div class="cardwrap">      
        

      
      <ion-breadcrumbs>
        <ion-breadcrumb href="javascript:void(0)">Applications</ion-breadcrumb>
        <ion-breadcrumb href="javascript:void(0)">Menu</ion-breadcrumb>        
      </ion-breadcrumbs> 

        <div class="contentwrap">
          <aside class="devices">
            
            <ion-searchbar  show-clear-button="never" mode="ios" @ionBlur="showDefaultBar()"></ion-searchbar>
            <table class="nodetable" id="myTable">
              <tbody>
                <tr v-for="device in devices" :key="device.key" @click="btndevice(device.key)">
                  <td>
                    <div class="panel" :class="{ selected: selectedDevice === device.key }">
                      <h6 class="pan-title"><span class="pan-icon" v-html="device.icon"></span> {{device.name}}</h6>
                      <p>{{device.version}}</p>
                    </div>
                  </td>          
                </tr>                
              </tbody>
            </table>
          </aside>
          <aside class="subtree">              
            <ul class="list sub list-unstyled list-bg-dark list-icon-red mb-0">              
              <li class="list-item">
                <ul class="list-unstyled mb-2">
                  <li class="parent">
                    <a href="javascript:void(0)" class="list-link link-arrow">
                      <span class="list-icon" v-html="$store.state.home"></span>Main Menu
                      <span v-html="$store.state.svgarrow" class="angle"></span>
                    </a>
                    <ul class="list-unstyled hidden">
                      <li v-for="item in items" :key="item.key" @click="btnsubnav(item.key)">
                        <a href="javascript:void(0)" class="list-link link-arrow" :class="{ selected: selectedItem === item.key }" @click="btnmenuclick(item.key)">
                          <span class="list-icon" v-html="item.icon"></span>
                          {{ item.name }}
                        </a>
                      </li>										
                    </ul>
                  </li>                  	
                </ul>
                <ul>
                  <li class="parent">
                    <a href="#" class="list-link">Guied Setup</a>
                  </li>	
                </ul>
              </li>
            </ul>	
            <div class="menubody">
              <div class="routinfo">
                <ion-segment value="deviceinfo" mode="ios">
                  <ion-segment-button value="deviceinfo" >
                    <ion-label>Device Information</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="firmware">
                    <ion-label>Firmware Upgrade</ion-label>
                  </ion-segment-button>                  
                </ion-segment>
                  <!-- Health Status -->
                  <div class="panel clear" @click="showhealthstatus" v-if="false">
                    
                    <div v-if="true">
                      <h6 class="pan-title mb-3"><span class="pan-icon" v-html="$store.state.healthstatus"></span> Health Status </h6>
                      <div class="alarmstatus">
                        <ion-label class="error"><span v-html="$store.state.closecircle"></span> <span>Status</span></ion-label>
                      </div>

                      <ion-list mode="ios" class="alarms">                
                          <ion-row>
                            <ion-col size-sm="10">
                              <div class="custominput addnav">
                                <div style="padding-left:38px;">
                                  <ion-input label-placement="stacked" value="119.7" readonly>                    
                                    <div slot="label">VAC (V)</div>
                                  </ion-input> 
                                </div>                  
                                <span class="statusicon success" v-html="$store.state.checkcircle"></span>
                                <ion-button class="iconbtn" @click="navthresholdconfig"> <span v-html="$store.state.angleright"> </span> </ion-button>
                              </div>
                            </ion-col>
                            <ion-col size-sm="2" class="center">
                              <ion-toggle :checked="togglechk" justify="end" mode="ios"></ion-toggle>
                            </ion-col>
                          </ion-row>
                      
                        
                          <ion-row>
                            <ion-col size-sm="10">
                              <div class="custominput addnav">
                                <div style="padding-left:38px;">
                                  <ion-input label-placement="stacked" value="10.2" readonly>                    
                                    <div slot="label">24 VDC (V)</div>
                                  </ion-input> 
                                </div>                  
                                <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                              </div>
                            </ion-col>
                            <ion-col size-sm="2" class="center">
                              <ion-toggle :checked="togglechk" justify="end" mode="ios"></ion-toggle>
                            </ion-col>
                          </ion-row>
                
                      
                          <ion-row>
                            <ion-col size-sm="10">
                              <div class="custominput addnav">
                                <div style="padding-left:38px;">
                                  <ion-input label-placement="stacked" value="4.0" readonly>                    
                                    <div slot="label">5 VDC (V)</div>
                                  </ion-input> 
                                </div>                  
                                <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                              </div>
                            </ion-col>
                            <ion-col size-sm="2" class="center">
                              <ion-toggle :checked="togglechk" justify="end" mode="ios"></ion-toggle>
                            </ion-col>
                          </ion-row>
                      
                          <ion-row>
                            <ion-col size-sm="10">
                              <div class="custominput addnav">
                                <div style="padding-left:38px;">
                                  <ion-input label-placement="stacked" value="4.0" readonly>                    
                                    <div slot="label">8 VDC (V)</div>
                                  </ion-input> 
                                </div>                  
                                <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                              </div>
                            </ion-col>
                            <ion-col size-sm="2" class="center">
                              <ion-toggle :checked="togglechk" justify="end" mode="ios"></ion-toggle>
                            </ion-col>
                          </ion-row>
                      
                          <ion-row>
                            <ion-col size-sm="10">
                              <div class="custominput addnav">
                                <div style="padding-left:38px;">
                                  <ion-input label-placement="stacked" value="2.0" readonly>                    
                                    <div slot="label">Temperature (°C)</div>
                                  </ion-input> 
                                </div>                  
                                <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                              </div>
                            </ion-col>
                            <ion-col size-sm="2" class="center">
                              <ion-toggle :checked="togglechk" justify="end" mode="ios"></ion-toggle>
                            </ion-col>
                          </ion-row>
                      
                          <ion-row>
                            <ion-col size-sm="10">
                              <div class="custominput addnav">
                                <div style="padding-left:38px;">
                                  <ion-input label-placement="stacked" value="COMM Error" readonly>                    
                                    <div slot="label">SMU</div>
                                  </ion-input> 
                                </div>                  
                                <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                              </div>
                            </ion-col>
                            <ion-col size-sm="2" class="center">
                              <ion-toggle :checked="togglechk" justify="end" mode="ios"></ion-toggle>
                            </ion-col>
                          </ion-row>
                      
                          <ion-row>
                            <ion-col size-sm="10">
                              <div class="custominput addnav">
                                <div style="padding-left:38px;">
                                  <ion-input label-placement="stacked" value="204/258" readonly>                    
                                    <div slot="label">RPF ( MHz )</div>
                                  </ion-input> 
                                </div>                  
                                <span class="statusicon error" v-html="$store.state.checkcircle"></span>                  
                              </div>
                            </ion-col>
                            <ion-col size-sm="2" class="center">
                              <ion-toggle :checked="togglechk" justify="end" mode="ios"></ion-toggle>
                            </ion-col>
                          </ion-row>
                      
                      </ion-list>
                    </div>

                    <!-- Threshold Config -->
                    <div v-if="false">
                        <h6 class="pan-title mb-3"><span class="pan-icon" v-html="$store.state.healthstatus"></span> Adjust VAC Thresholds </h6>
                        <ion-list mode="ios" class="alarms mb-3">
                          <ion-row>
                            <ion-col size="9" size-sm="11">
                              <div class="custominput addnav">
                                <div style="padding-left: 38px">
                                  <ion-input label-placement="stacked" class="no-border" placeholder="169.1" readonly mode="ios">
                                    <div slot="label">VAC (V)</div>
                                  </ion-input>
                                </div> <span class="statusicon error" v-html="$store.state.closecircle"></span> </div>
                            </ion-col>
                          </ion-row>
                        </ion-list>
                    

                        <h6 class="subtitle mb-10">Alarm Thresholds</h6>
                        
                        <div class="custominput addnav">
                          <div style="padding-left: 38px">
                            <ion-input label-placement="stacked" placeholder="103.5" mode="ios">
                              <div slot="label">High Limit</div>
                            </ion-input>
                          </div> <span class="statusicon error" v-html="$store.state.closecircle"></span> </div>

                        <div class="custominput addnav mb-3">
                          <div style="padding-left: 38px">
                            <ion-input label-placement="stacked" placeholder="37.4" mode="ios">
                              <div slot="label">Low Limit</div>
                            </ion-input>
                          </div> <span class="statusicon success" v-html="$store.state.checkcircle"></span> </div>
                        <div class="setBtn center mb-3">
                          <ion-button class="btnprimary" mode="ios">Set</ion-button>
                        </div>
                        <h6 class="subtitle mb-10">Warning Thresholds</h6>
                        <div class="custominput addnav">
                          <div style="padding-left: 38px">
                            <ion-input label-placement="stacked" placeholder="99.0" mode="ios">
                              <div slot="label">High Limit</div>
                            </ion-input>
                          </div> <span class="statusicon warning" v-html="$store.state.minuscircle"></span> </div>
                        <div class="custominput addnav mb-3">
                          <div style="padding-left: 38px">
                            <ion-input label-placement="stacked" placeholder="39.6" mode="ios">
                              <div slot="label">Low Limit</div>
                            </ion-input>
                          </div> <span class="statusicon success" v-html="$store.state.checkcircle"></span> </div>
                        <div class="setBtn center">
                          <ion-button class="btnprimary" mode="ios">
                          <span>Set</span> 
                          </ion-button>
                        </div>
                    </div>
                  </div>

                  <!-- Device Configuration -->
                  <div class="panel clear" v-if="false">
                    <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.deviceconfig"></span> Device Configuration</h6>
                    

                    <div class="customselect">
                      <ion-select label="Universal Plugin" label-placement="stacked" interface="popover" placeholder="1.2GHz Enhancer" mode="md">
                          <ion-select-option value="0">1.2GHz Enhancer</ion-select-option>
                          <ion-select-option value="1">1.5GHz Enhancer</ion-select-option>
                          <ion-select-option value="2">1.4GHz Enhancer</ion-select-option>
                      </ion-select> 
                    </div>            
                    <div class="setBtn center">
                        <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
                    </div>            
                  
                  
                    <h6 class="title">Auxiliary Plug-in</h6>    
                    <div class="customselect">
                        <ion-select label="Type" label-placement="stacked" interface="popover" placeholder="2-Way" mode="md">
                            <ion-select-option value="0">2-Way</ion-select-option>
                            <ion-select-option value="1">1-Way</ion-select-option>
                            <ion-select-option value="2">4-Way</ion-select-option>
                        </ion-select> 
                    </div>     
                    <div class="customselect">
                        <ion-select label="Port 3" label-placement="stacked" interface="popover" placeholder="Through" mode="md">
                            <ion-select-option value="0">Through</ion-select-option>                
                        </ion-select> 
                    </div>             
                    <div class="customselect">
                        <ion-select label="Port 4" label-placement="stacked" interface="popover" placeholder="Through" mode="md">
                            <ion-select-option value="0">Through</ion-select-option>                
                        </ion-select> 
                    </div>             
                    <div class="setBtn center">
                        <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
                    </div>            
                  
                    <h5 class="cardtitle">Trunking pad Value</h5>
                    <SpinControl
                      :id="'control-port2'"
                      :label="'Port 2'"
                      :value="15"
                      :min="0"
                      :max="31.5"
                      :step="0.5"
                    />

                    <SpinControl
                      :id="'control-port3/4'"
                      :label="'Port 3/4'"
                      :value="15"
                      :min="0"
                      :max="31.5"
                      :step="0.5"
                    />
                    <div class="setBtn center">
                        <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
                    </div>                   
                  </div>
                


                
                  <!-- Downstream Configuration -->                
                  <div class="panel clear" v-if="false">
                    <h6 class="pan-title mb-3"><span class="pan-icon" v-html="$store.state.downstream"></span> Downstream Configuration</h6>
                    <div class="notes center">
                      <p>Manual Mode Active <span class="svgicon" v-html="$store.state.notepin"></span></p>
                    </div>
                    <div class="checkboxgroup">                     
                        <!-- v-model="isManualChecked" -->
                        <!-- @click="btnChkbox('manual',$event)" -->
                        <ion-checkbox  mode="md"><span>Manual</span></ion-checkbox> 
                        <!-- v-model="isManualChecked" -->
                        <ion-checkbox  mode="md"><span>AGC</span></ion-checkbox> 
                    </div>
                    <div>
                      <div class="configbtns">
                          <ion-button mode="ios" slot="clear"><img :src="$store.state.configbtn1" alt="" /> </ion-button>
                          <ion-button mode="ios"><img :src="$store.state.configbtn2" alt="" /> </ion-button>
                          <ion-button mode="ios"><img :src="$store.state.configbtn3" alt="" /> </ion-button>
                      </div>
                      <div>
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th>Gain/Tilt Port 2</th>
                                      <th>Value/Units</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Gain @ 1749 MHz</td>
                                      <td>0.0 dB</td>
                                  </tr>
                                  <tr>
                                      <td>Tilt @ 303 ~ 1749 MHz</td>
                                      <td>0.0 dB</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div class="configbtns">
                          <ion-button mode="ios"><img :src="$store.state.configbtn4" alt="" /> </ion-button>
                          <ion-button mode="ios"><img :src="$store.state.configbtn5" alt="" /> </ion-button>
                          <ion-button mode="ios"><img :src="$store.state.configbtn6" alt="" /> </ion-button>
                      </div>

                      <ion-row class="align-items-center">
                        <ion-col size="12" size-sm="6" class="center">                    
                            <ion-button class="btnprimary md" mode="ios" @click="navconfigsettings"> <span class="svglabel">Configure Settings</span></ion-button>                
                        </ion-col>
                        <ion-col size="12" size-sm="6" class="center">
                            <ion-button class="btnprimary md" mode="ios"> <span class="svglabel">Run Auto-Setup</span></ion-button>                
                        </ion-col>
                        <ion-col size="12" size-sm="6" class="center">
                            <ion-button class="btnprimary md" mode="ios" @click="navspectrumdisplay"> <span class="svglabel">Spectrum Display</span></ion-button>
                        </ion-col>
                      </ion-row>

                      <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Pilot Frequencies</th>
                                    <th>Value/Units</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pilot 1</td>
                                    <td>400 MHz, 0.0 dBmV/6MHz</td>
                                </tr>
                                <tr>
                                    <td>Pilot 2</td>
                                    <td>1600 MHz, 0.0 dBmV/6MHz</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Power Levels</th>
                                    <th>Value/Units</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DS Input TCP</td>
                                    <td>0.0 dB</td>
                                </tr>
                                <tr>
                                    <td>DS Output Port 2 TCP</td>
                                    <td>0.0 dB</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>



                  </div>                

                  <!-- Upstream Configuration -->
                  <div class="panel clear" v-if="false">
                    <h6 class="pan-title mb-3"><span class="pan-icon" v-html="$store.state.upstream"></span> Upstream Configuration</h6>
                    <h5 class="cardtitle">Input Attenuation</h5>
                    <SpinControl :label="'Port 2'" />  

                    <div class="configbtns">
                        <ion-button mode="ios"><img :src="$store.state.configbtn1" alt="" /> </ion-button>
                        <ion-button mode="ios"><img :src="$store.state.configbtn2" alt="" /> </ion-button>
                        <ion-button mode="ios"><img :src="$store.state.configbtn3" alt="" /> </ion-button>
                    </div>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Gain/Tilt Port 2</th>
                                    <th>Value/Units</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gain @ 1749 MHz</td>
                                    <td>0.0 dB</td>
                                </tr>
                                <tr>
                                    <td>Tilt @ 303 ~ 1749 MHz</td>
                                    <td>0.0 dB</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="configbtns mb-3">
                        <ion-button mode="ios"><img :src="$store.state.configbtn4" alt="" /> </ion-button>
                        <ion-button mode="ios"><img :src="$store.state.configbtn5" alt="" /> </ion-button>
                        <ion-button mode="ios"><img :src="$store.state.configbtn6" alt="" /> </ion-button>
                    </div>

                    <h5 class="cardtitle center">Step Size</h5>

                    <div class="mainsegment sm" style="margin: 15px 0;">
                        <ion-segment value="default" mode="ios" class="three">
                            <ion-segment-button value="default" mode="ios">
                                <ion-label class="icon-label"><span class="svglabel">Fine</span> </ion-label>
                            </ion-segment-button>
                            <ion-segment-button value="medium">
                                <ion-label><span class="svglabel"> Medium</span></ion-label>
                            </ion-segment-button>                    
                            <ion-segment-button value="coarse">
                                <ion-label><span class="svglabel"> Coarse</span></ion-label>
                            </ion-segment-button>                    
                        </ion-segment>
                    </div>                  
                  </div>
                
                  <!-- Ingress -->
                  <div class="panel clear" v-if="false">
                    <h6 class="pan-title mb-3"><span class="pan-icon" v-html="$store.state.diagnostics"></span>Ingress Control Switch</h6>
                    
                    <h6 class="cardtitle mb-1">Port 2</h6>
                      <div class="customradio">
                          <ion-radio-group value="6db" mode="ios">                
                              <ion-row>
                                  <ion-col size="6">
                                      <ion-radio value="6db">6 dB</ion-radio><br />
                                  </ion-col>
                                  <ion-col size="6">
                                      <ion-radio value="0db">0 dB</ion-radio><br />
                                  </ion-col>
                                  <ion-col size="6">
                                      <ion-radio value="max">MAX</ion-radio>
                                  </ion-col>
                              </ion-row>
                          </ion-radio-group>
                      </div>      
                      
                      <h6 class="cardtitle mb-1">Select Port 3 / 4</h6>

                      <div class="customradio">
                          <ion-radio-group value="6db" mode="ios">                
                              <ion-row>
                                  <ion-col size="6">
                                      <ion-radio value="0db">0 dB</ion-radio><br />
                                  </ion-col>
                                  <ion-col size="6">
                                      <ion-radio value="6db">6 dB</ion-radio><br />
                                  </ion-col>                        
                                  <ion-col size="6">
                                      <ion-radio value="max">MAX</ion-radio>
                                  </ion-col>
                              </ion-row>
                          </ion-radio-group>
                      </div>                  
                  </div>           









              </div>
              <!-- Select Auxilary Plug-in -->
              <div class="panel clear" v-if="false">
                <h6 class="pan-title mb-3"><span class="pan-icon" v-html="$store.state.upstream"></span> Guided Setup</h6>
                <h5 class="cardtitle mb-1">Select Auxilary Plug-in</h5>

                <div class="customradio full">
                      <ion-radio-group value="jmp" mode="ios">  
                        <ion-row>
                          <ion-col size="6">
                            <ion-radio value="jmp">JMP</ion-radio>            
                          </ion-col>
                          <ion-col size="6">
                            <ion-radio value="2way">2-Way</ion-radio>            
                          </ion-col>
                          <ion-col size="6">
                            <ion-radio value="dc08">DC-08</ion-radio>
                          </ion-col>
                          <ion-col size="6">
                            <ion-radio value="dc10">DC-10</ion-radio>
                          </ion-col>
                          <ion-col size="6">
                            <ion-radio value="dc12">DC-12</ion-radio>
                          </ion-col>
                        </ion-row> 
                      </ion-radio-group>
                  </div> 
              </div>    
            </div>
          </aside>
          
          
        </div>          
       
       
      
      

         
      
    </div>      
	</ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import {useRouter} from "vue-router";
import SpinControl from '../../components/SpinControl.vue'
export default defineComponent({
  name: 'TenantApplications',
  data() {
    return {
      selectedItem: null,      
      selectedDevice:null,
      togglechk:false,
      devices:[
        {
          key:'mb180.2536',
          name:'MB180.2536',    
          icon: this.$store.state.wifi,
          version:'23.08.02'
        },
        {
          key:'ble180.2536',
          name:'BLE180.2536',    
          icon: this.$store.state.bluetooth,
          version:'23.08.02'
        },
        {
          key:'cada',
          name:'CADA Management',    
          icon: this.$store.state.microchip,
          version:'1.08.02'
        }
      ],
      items: [
        {
          key: 'healthstatus',
          name: 'Health Status',
          icon: this.$store.state.healthstatus,
        },
        {
          key: 'deviceconfig',
          name: 'Device Configuration',
          icon: this.$store.state.deviceconfig,
        },
        {
          key: 'downstreamconfig',
          name: 'Downstream Configuration',
          icon: this.$store.state.downstream,
        },
        {
          key: 'upstreamconfig',
          name: 'Upstream Configuration',
          icon: this.$store.state.upstream,
        },
        {
          key: 'advanceddiagnostics',
          name: 'Advanced Diagnostics',
          icon: this.$store.state.diagnostics,
        },
        {
          key: 'utilities',
          name: 'Utilities',
          icon: this.$store.state.utilities,
        },
        {
          key: 'profiles',
          name: 'Profiles',
          icon: this.$store.state.profiles,
        },
        {
          key: 'spectrum',
          name: 'Spectrum Display',
          icon: this.$store.state.spectrum,
        },
        // Add more items here if needed
      ],
    }
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  components:{
    SpinControl
  },
  
  mounted(){
    window.addEventListener('resize', this.submenuactive);
  },
  unmounted(){
    window.removeEventListener('resize', this.submenuactive);
  },
  methods: {
    handleSegmentChange(event) {
      console.log('Segment changed to:', event.detail.value);
    },
    showhealthstatus: function(){
      console.log("Health status")
    },  
    btnsubnav(itemKey) {
      this.selectedItem = itemKey; // Set the selected item key
      console.log('Selected item:', itemKey); // Log for debugging
    },
    btndevice(deviceKey){
      this.selectedDevice = deviceKey; // Set the selected item key
      console.log('Selected item:', deviceKey); // Log for debugging
    },
    btnmenuclick: function(key){
      console.log("Menu name", key);
      // switch(key) {
      //   case 'healthstatus':
          
      //     break;
      //   case utilities:
          
      //     break;
      //   default:
      //     // code block
      // }
    }

  }
});
</script>
