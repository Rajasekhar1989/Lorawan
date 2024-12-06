<template>
    <nav aria-label="Page navigation"> <!-- v-if="totalPages > 1" -->
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" @click="emitPageChange(currentPage - 1)">Previous</a>
        </li>
        <li v-if="showFirstEllipsis" class="page-item disabled">
          <span class="page-link">...</span>
        </li>
        <li v-for="page in paginatedPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <a class="page-link" @click="emitPageChange(page)">{{ page }}</a>
        </li>
        <li v-if="showLastEllipsis" class="page-item disabled">
          <span class="page-link">...</span>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" @click="emitPageChange(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      totalPages: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      pagesToShow: {
        type: Number,
        default: 5
      }
    },
    computed: {
      paginatedPages() {
        const pages = [];
        let startPage = Math.max(1, this.currentPage - Math.floor(this.pagesToShow / 2));
        let endPage = Math.min(this.totalPages, this.currentPage + Math.floor(this.pagesToShow / 2));
  
        if (this.currentPage - Math.floor(this.pagesToShow / 2) <= 1) {
          endPage = Math.min(this.totalPages, this.pagesToShow);
        }
  
        if (this.currentPage + Math.floor(this.pagesToShow / 2) >= this.totalPages) {
          startPage = Math.max(1, this.totalPages - this.pagesToShow + 1);
        }
  
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }
  
        return pages;
      },
      showFirstEllipsis() {
        return this.pagesToShow < this.totalPages && this.paginatedPages[0] > 1;
      },
      showLastEllipsis() {
        return this.pagesToShow < this.totalPages && this.paginatedPages[this.paginatedPages.length - 1] < this.totalPages;
      }
    },
    methods: {
      emitPageChange(page) {
        if (page > 0 && page <= this.totalPages) {
          this.$emit('page-change', page);
        }
      }
    }
  };
  </script>
  