<template>
    <v-tabs class="app"
      v-model="active"
      :color="color"
      dark
      show-arrows
      slider-color="yellow"
      width="450px"
    >
      <v-tab class="top"
         v-for="(item,n) in dataBelaz"
         :key="n"
         ripplei>
         {{item.name}}
      </v-tab>

      <v-tab-item class="content"
         v-for="(item,n) in dataBelaz"
         :key="n" > 
         <car-item :dataitem="item.mapArray" :color="color" :number="active"></car-item>
      </v-tab-item>

    </v-tabs> 
</template>

<script>
import CarItem from './CarItem4.vue'
  export default {
    data () {
      return {
        active: null,
        dataBelaz:[
          {name:"Changet",mapArray:[{id:1,model:"БЕЛАЗ 7540",serial:"YYY25644555",status:"true",coordinats:{lat: 40.508, lng: 25.587 },time:"12:00"}]},
          {name:"Сибирь",mapArray:[{id:2,model:"БЕЛАЗ 8840",serial:"YYY25644555",status:"true",coordinats:{ lat: 31.508, lng: 26.587 },time:"12:00"},
                                 {id:3,model:"БЕЛАЗ 1540",serial:"YYY25644555",status:"true",coordinats:{ lat: 61.508, lng: 26.577 },time:"12:00"},
                                 {id:4,model:"БЕЛАЗ 7570",serial:"YYY25644555",status:"true",coordinats:{ lat: 62.508, lng: 26.587 },time:"12:00"},
                                 {id:5,model:"БЕЛАЗ 1122",serial:"YYY25855855",status:"true",coordinats:{ lat: 47.508, lng: 26.587 },time:"12:00"},
                                 {id:6,model:"БЕЛАЗ 5472",serial:"YYY25644555",status:"true",coordinats:{ lat: 53.508, lng: 26.587 },time:"12:00"}]},
          {name:"ЧитаУголь",mapArray:[{id:7,model:"БЕЛАЗ 5465",serial:"YYY25644555",status:"true",coordinats:{ lat: 51.508, lng: 26.587 },time:"12:00"},
                                  {id:8,model:"БЕЛАЗ 7930",serial:"YYY25822555",status:"true",coordinats:{ lat: 51.508, lng: 27.587 },time:"12:00"},
                                  {id:9,model:"БЕЛАЗ 9132",serial:"YYY25644555",status:"true",coordinats:{ lat: 51.508, lng: 28.587 },time:"12:00"},
                                  {id:10,model:"БЕЛАЗ 2872",serial:"YYY25644555",status:"true",coordinats:{ lat: 51.508, lng: 29.587 },time:"12:00"},
                                  {id:11,model:"БЕЛАЗ 858",serial:"YYY25644555",status:"true",coordinats:{ lat: 31.508, lng: 30.587 },time:"12:00"}]},
          {name:"Африка",mapArray:[{id:12,model:"БЕЛАЗ 5465",serial:"YYY25644555",status:"true",coordinats:{ lat: 54.508, lng: 26.587 },time:"12:00"},
                                  {id:13,model:"БЕЛАЗ 7930",serial:"YYY35822555",status:"true",coordinats:{ lat: 56.508, lng: 27.587 },time:"12:00"},
                                  {id:14,model:"БЕЛАЗ 9132",serial:"YYY75644555",status:"true",coordinats:{ lat: 57.508, lng: 28.587 },time:"12:00"},
                                  {id:15,model:"БЕЛАЗ 2872",serial:"YYY85644555",status:"true",coordinats:{ lat: 58.508, lng: 27.587 },time:"12:00"},
                                  {id:16,model:"БЕЛАЗ 858",serial:"YYY19644555",status:"true",coordinats:{ lat: 59.508, lng: 30.587 },time:"12:00"},
                                  {id:17,model:"БЕЛАЗ 7930",serial:"YYY35822555",status:"true",coordinats:{ lat: 56.508, lng: 27.787 },time:"12:00"},
                                  {id:18,model:"БЕЛАЗ 9132",serial:"YYY75644555",status:"true",coordinats:{ lat: 57.508, lng: 28.887 },time:"12:00"},
                                  {id:19,model:"БЕЛАЗ 2872",serial:"YYY85644555",status:"true",coordinats:{ lat: 58.508, lng: 27.987 },time:"12:00"},
                                  {id:20,model:"БЕЛАЗ 858",serial:"YYY19644555",status:"true",coordinats:{ lat: 59.508, lng: 30.187 },time:"12:00"}]},
          {name:"БЕЛАЗ",mapArray:[{id:21,model:"БЕЛАЗ 9132",serial:"YYY75644к55",status:"true",coordinats:{ lat: 57.98, lng: 28.987 },time:"12:00"},
                                  {id:22,model:"БЕЛАЗ 2872",serial:"YYY85644555",status:"true",coordinats:{ lat: 60.508, lng: 27.987 },time:"12:00"},
                                  {id:23,model:"БЕЛАЗ 858",serial:"YYY19644555",status:"true",coordinats:{ lat: 61.508, lng: 30.187 },time:"12:00"}]},
          {name:"ОАО БЕЛАЗ",mapArray:[{id:24,model:"БЕЛАЗ 7540",serial:"YYY25644555",status:"true",coordinats:{ lat: 62.508, lng: 25.587 },time:"12:00"}]},
          {name:"КАТОКА",mapArray:[{id:25,model:"БЕЛАЗ 7540",serial:"YYY25644555",status:"true",coordinats:{ lat: 50.508, lng: 31.587 },time:"12:00"}]},
          ]
      }
    },
    computed: {
      color () {
        switch (this.active) {
          case 0: return 'black'
          case 1: return 'teal'
          case 2: return '#751111'
          case 3: return '#11328d'
          case 4: return 'purple'
          case 5: return '#ee0b0b'
          case 6: return '#b46f06'
        }
      }
    },
   components: {
   CarItem
  }
  }
</script>

<style scoped>
.content{
  height: 0%;
  padding-right:  10px
}
</style>
