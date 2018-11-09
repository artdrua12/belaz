<template>
<div class="app">
  <yandex-map class="map"
        :coords=center
        zoom="4"
        style="width: 100%; height: 100%;"
        :placemarks="mapData"
 >
    <!-- <ymap-marker v-for="(item,i) in mapArray" :key="i"
      :coords=item.coords
      marker-type="placemark"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
      :icon="{color:item.color, glyph:'Delivery'}" 
      markerId="i"
    ></ymap-marker> -->
  </yandex-map>
  <car class="car"></car>
</div>
</template>

<script>
import Car  from './Car.vue'
export default {
data() {
  return {
   }
 },
  computed:{
   mapData(){
     return this.$store.getters.allMapArray
   },
   center(){
     let lengthArray = this.mapData.length;
     if(this.mapData[lengthArray-1]){
      return this.mapData[lengthArray-1].coords
     } else return [53.508, 27.587] 
   }
 },

 components: {
   Car 
  }
}
</script>

<style scoped>
@media(min-width: 981px){
  div.app{
      display: grid;
      height: 100%;
      grid-template-columns:minmax(480px, auto) minmax(450px, 600px) ;
      grid-template-rows: 120px auto;
      grid-row-gap: 15px;
      overflow: hidden;
  }
  .map{
      grid-column: 1 / 3;
      grid-row: 1 / 3; 
  }
  .car{
      grid-column: 2 / 3;
      grid-row: 2 / 3; 
      z-index: 2;
      overflow: auto;
  }
}

@media(max-width: 980px){
   div.app{
      display: grid;
      height: 100%;
      grid-template-columns: 1fr ;
      grid-template-rows: minmax(55%, 2fr) auto;
      grid-row-gap: 15px;
      overflow: hidden;
  }
  .map{
      grid-column: 1 / 2;
      grid-row: 1 / 3; 
  }
  .car{
      grid-column: 1 / 2;
      grid-row: 2 / 3; 
      z-index: 2;
      overflow: auto;
  }
}

</style>


