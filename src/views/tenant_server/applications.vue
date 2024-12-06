<template>
	<ion-page>
    <div class="cardwrap">
      <ion-breadcrumbs>
        <ion-breadcrumb href="#home">Applications</ion-breadcrumb>
        <ion-breadcrumb href="#electronics">MB180.25356</ion-breadcrumb>        
      </ion-breadcrumbs>      
      <ion-row>
        <ion-col size-sm="6" size-md="4" size-lg="3" size="12">
          <div class="panel" @click="navmbdevice">
            <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.wifi"></span> MB180.25356</h6>
            <p>Version 24.08.02</p>
          </div>
        </ion-col>
        <ion-col size-sm="6" size-md="4" size-lg="3" size="12">
          <div class="panel">
            <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.bluetooth"></span> BL180.25356</h6>
            <p>Version 23.08.02</p>
          </div>
        </ion-col>
        <ion-col size-sm="6" size-md="4" size-lg="3" size="12">
          <div class="panel">
            <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.microchip"></span> CADA Management</h6>
            <p>Version 1.08.02</p>
          </div>
        </ion-col>
      </ion-row>

      <div class="mainsegment">
        <ion-segment class="mb-3" color="primary" value="mainmenu" mode="ios" v-model="segmentValue" @ionChange="handleSegmentChange">
          <ion-segment-button value="mainmenu" content-id="mainmenu">
            <ion-label>Main Menu</ion-label>
          </ion-segment-button>
          <ion-segment-button value="guidedsetup" content-id="guidedsetup">
            <ion-label>Guided Setup</ion-label>
          </ion-segment-button>
        </ion-segment>

        <ion-row v-show="segmentValue === 'mainmenu'" content-id="mainmenu">
              <ion-col size-sm="4">
                <div class="panel clear" @click="showhealthstatus">
                  <!-- Health Status -->
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
              </ion-col>


              <ion-col size-sm="4">
                <!-- Device Configuration -->
                <div class="panel clear">
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
              </ion-col>


              <ion-col size-sm="4">
                <!-- Downstream Configuration -->
                <div class="panel clear">
                  <h6 class="pan-title mb-3"><span class="pan-icon" v-html="$store.state.downstream"></span> Downstream Configuration</h6>
                  <div class="notes">
                    <p>Manual Mode Active <span class="svgicon" v-html="$store.state.notepin"></span></p>
                  </div>
                  <div class="checkboxgroup">
                      <!-- <ion-item>
                          <ion-label>Manual</ion-label>
                          <ion-checkbox @click="btnChkbox('manual',$event)"  v-model="isManualChecked" mode="md"></ion-checkbox>                
                      </ion-item>
                      <ion-item>
                          <ion-label>AGC</ion-label>
                          <ion-checkbox @click="btnChkbox('manual',$event)"  v-model="isManualChecked" mode="md"></ion-checkbox>                
                      </ion-item> -->
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
                </div>



                </div>                
              </ion-col>
              <ion-col size-sm="4">
                <div class="panel clear">
                  <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.upstream"></span> Upstream Configuration</h6>
                  
                  <p>Info</p>
                </div>
              </ion-col>
              <ion-col size-sm="4">
                <div class="panel clear">
                  <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.diagnostics"></span> Advanced Diagnostics</h6>
                  <p>Info</p>
                </div>                
              </ion-col>
              <ion-col size-sm="4">
                <div class="panel clear">
                  <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.utilities"></span> Utilities</h6>
                  <p>Info</p>
                </div>                
              </ion-col>
              <ion-col size-sm="4">
                <div class="panel clear">
                  <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.profiles"></span> Profiles</h6>
                  <p>Info</p>
                </div>                
              </ion-col>
              <ion-col size-sm="4">
                <div class="panel clear">
                  <h6 class="pan-title"><span class="pan-icon" v-html="$store.state.spectrum"></span> Spectrum Display</h6>
                  <p>Info</p>
                </div>
              </ion-col>
            
              
            
            
              
            
            
             
            
            
              
            
            
              
            
            
              
            
            
              
            
            
              
          
          <ion-col size-sm="6">

          </ion-col>
          
            
          
        </ion-row>

        <ion-row v-show="segmentValue === 'guidedsetup'" content-id="guidedsetup">
          
        </ion-row>
        


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
      segmentValue: 'mainmenu',
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
  methods: {
    handleSegmentChange(event) {
      console.log('Segment changed to:', event.detail.value);
    },
    showhealthstatus: function(){
      console.log("Health status")
    }

  }
});
</script>
