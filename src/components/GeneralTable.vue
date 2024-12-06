<template>
  <!-- Table Information -->  
  <table class="custom-table">
    <thead>
      <tr>         
        <th v-for="(header, idx) in headerInfo" :key="idx" @click="sort(header.sort)">
          {{ header.label }}
          <span class="sort" v-html="$store.state.sort"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-if="filteredData.length > 0">
        <template v-for="(row, rowIndex) in filteredData" :key="rowIndex">
          <tr>            
            <td data-label="Full Name" v-for="(header, idx) in headerInfo" :key="idx">
              {{ row[header.sort] }}
            </td>
          </tr>
        </template>
      </template>
      <template v-else>
        <tr>
          <td :colspan="headerInfo.length" class="no-records">No records found</td>
        </tr>
      </template>
    </tbody>
  </table>  
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    headerInfo: {
      type: Array,
      required: true,
    },
    resinfo: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortKey: '',
      sortOrder: 'asc',
    };
  },
  computed: {
    filteredData() {      
      let filtered = this.resinfo;
      if (this.sortKey) {
        filtered.sort((a, b) => {
          const aVal = a[this.sortKey];
          const bVal = b[this.sortKey];
          return this.sortOrder === 'asc' ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
        });
      }
      return filtered;
    },
  },
  methods: {
    sort(key) {
      this.sortKey = key;
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
  },
};
</script>