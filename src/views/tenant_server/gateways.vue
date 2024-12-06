<template>
  <ion-page> 
    <div class="cardwrap">
      <h2 class="section-heading">Gateways</h2>
      <TableComponent :columnsToShow="columnsToShow" :headerInfo="headerInfo" :resinfo="resinfo"
      :itemsPerPage="itemsPerPage" :pagesToShow="pagesToShow" />            
    </div>      
  </ion-page>
</template>
<script>
import TableComponent from '../../components/TableComponent.vue';
import eventBus from '../../assets/scripts/eventbusnav.js';
import store from '../../store';
import { useRouter } from "vue-router";

export default {
  name: 'CompanyInformation',
  components: {
    TableComponent
  },
  data() {
    return {
      columnsToShow: 6,
      headerInfo: [
        { label: 'Status', sort: 'status' },
        { label: 'Last Seen', sort: 'lastseen' },
        { label: 'Gateway ID', sort: 'gatewayid' },
        { label: 'Name', sort: 'name' },
        { label: 'Region ID', sort: 'regionid' },
        { label: 'Region common-name', sort: 'regioncommonname' }
      ],
      resinfo: [    
        { 
          status: 'Offline', lastseen: '2024-12-03 18:04:39', gatewayid: '0016c001f15d6606', name: '401', regionid: 'in865', regioncommonname:'IN865'
        },
      ],      
      itemsPerPage: 15,
      pagesToShow: 5,     
    };
  },
};
</script>