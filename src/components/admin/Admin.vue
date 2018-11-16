<template>
<div class="app">
  <cards class="show"></cards>
  <table-data class="tableData"></table-data>
</div>
</template>

<script>
import tableData from './Table.vue'
import cards from './Cards.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    tableData,
    cards
   }
  }
</script>

<style scoped>
div.app{
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}
.show{
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.tableData{
  grid-column: 1 / 2;
  grid-row: 2 / 3; 
}
</style>
