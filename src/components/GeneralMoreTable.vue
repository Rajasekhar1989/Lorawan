<template>
  <div class="general-table-area">
    <table class="custom-table">
      <thead>
        <tr>
          <th v-for="(header, idx) in limitedHeaders" :key="idx" @click="sort(header.sort)">
            {{ header.label }}            
            <span class="sort" v-html="$store.state.sort"></span>
          </th>          
          <th v-if="headerInfo.length >columnsToShow">More</th>
          <th class="tblexport">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!hasData">
          <td :colspan="headerInfo.length + 2" class="text-center">No records found</td>
        </tr>
        <template v-else v-for="(row, rowIndex) in getPaginatedData" :key="rowIndex">
          <tr>
            <td data-label="Full Name" v-for="(header, idx) in limitedHeaders" :key="idx">
              {{ row[header.sort] }}
            </td>
            <td class="moreicon" v-if="headerInfo.length > columnsToShow" @click="toggleChildRow(rowIndex)">              
              <span class="moreicon-label">More</span> <span v-html="expandedRows.includes(rowIndex) ? $store.state.downarrow : $store.state.uparrow"></span> 
            </td>
            <td>
              <div class="pageOptions">
                <a v-if="isdelete" class="delete" @click="exportRow(row, 'delete')" v-html="$store.state.delete"></a>
              </div>
            </td>
          </tr>
          <tr v-if="expandedRows.includes(rowIndex)">
            <td :colspan="headerInfo.length + 2" class="morecol">
              <div class="moreinfo">
                <div v-for="header in extraHeaders" :key="header.sort">
                  <span class="morelabel">{{ header.label }}</span> 
                  <span class="moredata">{{ row[header.sort] }}</span>
                </div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>   
</template>
<script>
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import Pagination from '../components/Pagination.vue';
import ExportSearch from '../components/ExportSearch.vue';
import { exportToPDFwithWatermark } from '../assets/scripts/exportoptions';
import eventBus from '../assets/scripts/eventbusnav.js';

export default {
  name: 'TableComponent',
  components: { Pagination, ExportSearch },
  props: {
    columnsToShow: {
      type: Number,
      default: 5,
    },
    headerInfo: {
      type: Array,
      required: true,
    },
    resinfo: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    pagesToShow: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      searchQuery: '',
      sortKey: '',
      sortOrder: 'asc',
      currentPage: 1,
      expandedRows: [],
      localItemsPerPage: this.itemsPerPage,
    };
  },
  computed: {
    displayButtons() {    
      return JSON.parse(localStorage.getItem('displayButtons')) || [];
    },    
    isview() {
      return this.displayButtons.includes('view');
    },    
    isedit() {
      return this.displayButtons.includes('edit');
    },    
    isdelete() {
      return this.displayButtons.includes('delete');
    },
    limitedHeaders() {
      return this.headerInfo.slice(0, this.columnsToShow);
    },
    extraHeaders() {
      return this.headerInfo.slice(this.columnsToShow);
    },
    hasData() {
      return this.filteredData.length > 0;
    },
    filteredData() {
      // Filter through all data
      let filtered = this.resinfo.filter((item) =>
        Object.values(item).some((value) =>
          typeof value === 'string' && value.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );

      // Sort if a sort key is set
      if (this.sortKey) {
        filtered.sort((a, b) => {
          const aVal = a[this.sortKey];
          const bVal = b[this.sortKey];
          return this.sortOrder === 'asc' ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
        });
      }

      return filtered;
    },
    totalPages() {
      return this.filteredData.length > 0 
        ? Math.ceil(this.filteredData.length / this.localItemsPerPage) 
        : 0; // Return 0 if no filtered data
    },
    // totalPages() {
    //   return Math.ceil(this.filteredData.length / this.localItemsPerPage); 
    // },
    getPaginatedData() {
      const start = (this.currentPage - 1) * this.localItemsPerPage;
      const end = start + this.localItemsPerPage;
      return this.filteredData.slice(start, end);
    },
  },
  methods: {
    handleExport(format) {
      if (format === 'pdf') this.exportToPDF();
      else if (format === 'excel') this.exportToExcel();
      else if (format === 'csv') this.exportToCSV();
    },
    handleSearch(query) {
      this.searchQuery = query;
      this.currentPage = 1; // Reset to first page on search
    },
    handleItemsPerPageChange(value) {
      this.localItemsPerPage = value;
      this.currentPage = 1; // Reset to first page
    },
    sort(key) {
      this.sortKey = key;
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
    changePage(page) {
      this.currentPage = page;
    },
    toggleChildRow(index) {
      if (this.expandedRows.includes(index)) {
        this.expandedRows = this.expandedRows.filter(i => i !== index);
      } else {
        this.expandedRows.push(index);
      }
    },
    exportRow(row, action) {
      let getRoute = this.$route.path.split("/")[1];  
      eventBus().emitter.emit(action + "_" + getRoute);
      // console.log('Export Row clicked', row, action);
    },
    exportToPDF() {
      const columns = this.headerInfo.map((info) => info.label);
      const rows = this.filteredData.map((item) =>
        this.headerInfo.map((info) => item[info.sort])
      );
      exportToPDFwithWatermark({columns,rows});
    },
    exportToExcel() {
      const fn = this.$route.path.slice(1)+'.xlsx';
      const ws = XLSX.utils.json_to_sheet(this.filteredData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, fn);
    },
    exportToCSV() {
      const fn = this.$route.path.slice(1)+'.csv';
      const csv = Papa.unparse(this.filteredData);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fn;
      a.click();
      URL.revokeObjectURL(url);
    },
    handleClicks(action) {
      let getRoute = this.$route.path.split("/")[1];  
      eventBus().emitter.emit(action + "_" + getRoute);
      // eventBus().emitter.on("add_companyinfo",()=>{
      // });
      // eventBus().emitter.off("add_companyinfo");
    },
  },
};
</script>