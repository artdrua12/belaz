<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    v-model="selected"
    item-key="name"
    select-all
  >
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">
      <td>
        <v-checkbox
          v-model="props.selected"
        ></v-checkbox>
      </td>
      <td>{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.model }}</td>
      <td class="text-xs-right">{{ props.item.serial }}</td>
      <td class="text-xs-right">{{ props.item.status }}</td>
      <td class="text-xs-right">{{ props.item.coordinats }}</td>
      <td class="text-xs-right">{{ props.item.time }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    props: ['desserts'],
    data () {
      return {
        search: '',
        selected: [],
        headers: [
          { text: 'Id', value: 'id',sortable:true },
          { text: 'Модель', value: 'model',sortable:true  },
          { text: 'Серийный номер', value: 'serial',sortable:true  },
          { text: 'Статус машины', value: 'status',sortable:true  },
          { text: 'Координаты', value: 'coordinats',sortable:true  },
          { text: 'Время', value: 'time',sortable:true  }
        ]
      }
    },
       methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
     }
  }
</script>

<style scoped>
td{
  width: 20px;
}
v-card{
    background-color:rgba(41, 40, 33, 0.3);
}
</style>
