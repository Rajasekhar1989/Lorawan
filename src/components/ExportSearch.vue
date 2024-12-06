<template>
  <div class="mb-1">
    <ion-row class="justify-content-between align-items-center">   
      <ion-col size-md="5" size="12" class="ps-md-0">
          <div class="d-flex align-items-center">
            <div style="width: 120px;">
              <ion-select class="entries" @ionChange="updateItemsPerPage" label="Entries" v-model="localItemsPerPage" interface="popover" :interface-options="customPopoverOptions">
                <ion-select-option :value="15">15</ion-select-option>
                <ion-select-option :value="25">25</ion-select-option>
                <ion-select-option :value="50">50</ion-select-option>
                <ion-select-option :value="100">100</ion-select-option>
                <ion-select-option :value="200">200</ion-select-option>
                <ion-select-option :value="500">500</ion-select-option>
              </ion-select>
            </div>        
            <div class="exportOptions">                
              <a class="pdf" v-html="$store.state.pdf" @click="handleExport('pdf')"></a>
              <a class="excel" v-html="$store.state.xls" @click="handleExport('excel')"></a>
              <a class="csv" v-html="$store.state.csv" @click="handleExport('csv')"></a>
            </div>
          </div>   
      </ion-col>      
      <ion-col size-md="7" size="12">
        <div class="d-sm-flex justify-content-end align-items-center">
          <div class="addOptions mb-2 mb-sm-0 mb-md-0 text-sm-center">
            <ion-button v-if="isadd" @click="handleClicks('add')" class="btnmain"> <span v-html="$store.state.plus"></span> Add</ion-button>
            <ion-button v-if="isupload" @click="handleClicks('upload')" class="btnmain"> <span v-html="$store.state.upload"></span>Upload</ion-button>
          </div>
          <div class="searchbox">
            <ion-input type="text" class="form-control" placeholder="Search..." v-model="localSearchQuery" @ionInput="updateSearchQuery" />
          </div>
        </div>        
      </ion-col>      
    </ion-row>
  </div>
</template>
<script>
export default {
  name: "ExportSearch",
  props: {
    searchQuery: String,
    itemsPerPage: {
      type: Number,
      default: 15 // Ensure a default value for itemsPerPage
    }
  },
  setup(){
    const customPopoverOptions = {      
        cssClass : 'customPop'
      };
    return{
      customPopoverOptions
    };
  },  
  data() {
    return {
      localSearchQuery: this.searchQuery,
      localItemsPerPage: this.itemsPerPage || 15, // Set default to 10 if itemsPerPage is not provided
    };
  },
  computed: {
    displayButtons() {    
      return JSON.parse(localStorage.getItem('displayButtons')) || [];
    },    
    isadd() {
      return this.displayButtons.includes('add');
    },    
    isupload() {
      return this.displayButtons.includes('upload');
    },
  },
  watch: {
    searchQuery(newVal) {
      this.localSearchQuery = newVal;
    },
    itemsPerPage(newVal) {
      this.localItemsPerPage = newVal;
    }
  },
  methods: {
    handleExport(format) {
      this.$emit('export', format);
    },
    updateSearchQuery(event) {
      this.localSearchQuery = event.detail.value;
      this.$emit('search', this.localSearchQuery);
    },
    updateItemsPerPage(event) {
      this.localItemsPerPage = parseInt(event.detail.value, 10);
      this.$emit('items-per-page-change', this.localItemsPerPage);
    },
    handleClicks(clicktype) {
      this.$emit('btnclicks', clicktype);
    }
  }
};
</script>