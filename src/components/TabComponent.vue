<template>
  <ion-page>
    <div class="cardwrap">
      <h2 class="section-heading">TAB Information</h2>
      <ul class="nav nav-tabs d-none d-lg-flex" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-1' }" id="custab-tab-1"
                @click="setActiveTab('custab-tabcontent-1')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-1" type="button"
                role="tab" aria-controls="custab-tabcontent-1" :aria-selected="activeTab === 'custab-tabcontent-1'">
                Personal Info
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-2' }" id="custab-tab-2"
                @click="setActiveTab('custab-tabcontent-2')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-2" type="button"
                role="tab" aria-controls="custab-tabcontent-2" :aria-selected="activeTab === 'custab-tabcontent-2'">
                Dependent Info
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-3' }" id="custab-tab-3"
                @click="setActiveTab('custab-tabcontent-3')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-3" type="button"
                role="tab" aria-controls="custab-tabcontent-3" :aria-selected="activeTab === 'custab-tabcontent-3'">
                Qualification
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-4' }" id="custab-tab-4"
                @click="setActiveTab('custab-tabcontent-4')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-4" type="button"
                role="tab" aria-controls="custab-tabcontent-4" :aria-selected="activeTab === 'custab-tabcontent-4'">
                Experience
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-5' }" id="custab-tab-5"
                @click="setActiveTab('custab-tabcontent-5')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-5" type="button"
                role="tab" aria-controls="custab-tabcontent-5" :aria-selected="activeTab === 'custab-tabcontent-5'">
                Salary
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-6' }" id="custab-tab-6"
                @click="setActiveTab('custab-tabcontent-6')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-6" type="button"
                role="tab" aria-controls="custab-tabcontent-6" :aria-selected="activeTab === 'custab-tabcontent-6'">
                Background Verification
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-7' }" id="custab-tab-7"
                @click="setActiveTab('custab-tabcontent-7')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-7" type="button"
                role="tab" aria-controls="custab-tabcontent-7" :aria-selected="activeTab === 'custab-tabcontent-7'">
                Documents
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-8' }" id="custab-tab-8"
                @click="setActiveTab('custab-tabcontent-8')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-8" type="button"
                role="tab" aria-controls="custab-tabcontent-8" :aria-selected="activeTab === 'custab-tabcontent-8'">
                Separation
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === 'custab-tabcontent-9' }" id="custab-tab-9"
                @click="setActiveTab('custab-tabcontent-9')" data-bs-toggle="tab" data-bs-target="#custab-tabcontent-9" type="button"
                role="tab" aria-controls="custab-tabcontent-9" :aria-selected="activeTab === 'custab-tabcontent-9'">
                Additional Logins
            </button>
        </li>
      </ul>
      <div class="tab-content accordion" id="custabTabContent">
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-1', active: activeTab === 'custab-tabcontent-1' }" id="custab-tabcontent-1" role="tabpanel" aria-labelledby="custab-tabcontent-1" tabindex="1">
              <h2 class="accordion-header d-lg-none" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Personal Information
                  </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show d-lg-block" aria-labelledby="headingOne" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-2', active: activeTab === 'custab-tabcontent-2' }" id="custab-tabcontent-2" role="tabpanel" aria-labelledby="custab-tabcontent-2" tabindex="2">
              <h2 class="accordion-header d-lg-none" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Dependent Information
                  </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingTwo" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-3', active: activeTab === 'custab-tabcontent-3' }" id="custab-tabcontent-3" role="tabpanel" aria-labelledby="custab-tabcontent-3" tabindex="3">
              <h2 class="accordion-header d-lg-none" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Qualification Information
                  </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-4', active: activeTab === 'custab-tabcontent-4' }" id="custab-tabcontent-4" role="tabpanel" aria-labelledby="custab-tabcontent-4" tabindex="4">
              <h2 class="accordion-header d-lg-none" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Experience Information
                  </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingFour" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-5', active: activeTab === 'custab-tabcontent-5' }" id="custab-tabcontent-5" role="tabpanel" aria-labelledby="custab-tabcontent-5" tabindex="5">
              <h2 class="accordion-header d-lg-none" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Salary Information
                  </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingFive" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-6', active: activeTab === 'custab-tabcontent-6' }" id="custab-tabcontent-6" role="tabpanel" aria-labelledby="custab-tabcontent-6" tabindex="6">
              <h2 class="accordion-header d-lg-none" id="headingSix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Background Verification Check
                  </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingSix" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-7', active: activeTab === 'custab-tabcontent-7' }" id="custab-tabcontent-7" role="tabpanel" aria-labelledby="custab-tabcontent-7" tabindex="7">
              <h2 class="accordion-header d-lg-none" id="headingSeven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      Documents
                  </button>
              </h2>
              <div id="collapseSeven" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingSeven" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-8', active: activeTab === 'custab-tabcontent-8' }" id="custab-tabcontent-8" role="tabpanel" aria-labelledby="custab-tabcontent-8" tabindex="8">
              <h2 class="accordion-header d-lg-none" id="headingEight">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      Separation
                  </button>
              </h2>
              <div id="collapseEight" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingEight" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
          <div class="tab-pane fade accordion-item" :class="{ show: activeTab === 'custab-tabcontent-9', active: activeTab === 'custab-tabcontent-9' }" id="custab-tabcontent-9" role="tabpanel" aria-labelledby="custab-tabcontent-9" tabindex="9">
              <h2 class="accordion-header d-lg-none" id="headingNine">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      Additional Logins
                  </button>
              </h2>
              <div id="collapseNine" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingNine" data-bs-parent="#custabTabContent">
                  <div class="accordion-body">
                      DATA
                  </div>
              </div>
          </div>
      </div>
    </div>
  </ion-page>
</template><script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TabComponent',  
  data() {
    return {
      activeTab: "custab-tabcontent-1",
      customPopoverOptions: {
        cssClass: 'customPop'
      },
      formattedDate: '', 
    };
  },  
  mounted() {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      this.activeTab = savedTab;
    }
  },  
  methods: {
    navClicks(urlinfo = '') {
      this.$router.push(urlinfo);
    },
    startDate(event) {
      const selectedDate = new Date(event.detail.value);
      const formattedDate = `${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}-${selectedDate.getFullYear()}`;
      this.formattedDate = formattedDate; // Update the local data property
      this.$store.commit('updateDate', formattedDate); // Update the store with the formatted date
    }
  }
});
</script>