<template>
  <div class="app">
    <v-text-field class="serch"
        v-model="search"
        append-icon="search"
        label="Search"
        hide-details
    ></v-text-field>

    <select v-model="pagination.rowsPerPage" class="selct">
      <option value="5">5</option>
      <option value="7">7</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>

    <v-pagination color="rgb(92, 93, 97)" v-model="pagination.page"
    class="pagnt" :length="pages"></v-pagination>
    <v-data-table class="tbl"
      :hide-actions="true"
      :headers="headers"
      :items="desserts"
      :search="search"
      :pagination.sync="pagination"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="red" icon="warning">
       Искомая комбинация "{{ search }}" в таблице не найдена.
      </v-alert>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        selected:"",
        pagination: {
            descending: true,
            page: 1,
            rowsPerPage: 5,
            sortBy:"",
            totalItems: 20
        },
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
                    {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  }
</script>

<style scoped>

div.app{
    display: grid;
    grid-template-columns: 300px auto 1fr ;
    grid-template-rows: 50px auto;
    overflow: auto;
}
.pagnt{
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-items: end; 
}
.selct{
    grid-column: 2 / 3;
    grid-row: 1 / 2; 
    width: 50px;
    height: 40px;
    align-items: end; 
    border-radius: 5px;
    margin-top: 7px;
    font-size: 1.2rem;
    text-align: center;
    box-shadow:
   0 1px rgba(255,255,255,.2) inset,
   0 1px 3px rgba(0,1,6,.5),
   0 0 1px 1px rgba(0,1,6,.2);
}
.serch{
    grid-column: 3 / 4;
    grid-row: 1 / 2; 
    overflow: hidden;
    margin-left: 20px;
    margin-right: 20px;
}
.tbl{
    grid-column: 1 / 4;
    grid-row: 2 / 3;  
}
table.v-table tbody td, tbody th{
  font-size: 18px;
}

.v-pagination__item:active, .v-pagination__item--active{ 
  border: none !important;
  outline: none !important;
}
</style>
