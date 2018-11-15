<template>
<div class="app">
  <div class="show">dsfd</div>
  <table-data class="tableData"></table-data>
</div>
</template>

<script>
import TableData from './Table.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    TableData
   }
  }
</script>

<style scoped>
div.app{
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
}
.show{
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.tableData{
  grid-column: 1 / 2;
  grid-row: 3 / 3; 
}
</style>
