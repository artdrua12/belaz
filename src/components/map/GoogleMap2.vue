<template>
<div class="app">
    <gmap-map class="map"
          map-type-id="satellite"
          language="ru"
          v-bind:center="center"
          v-bind:zoom="7"
          style="width:100%;  height: 100%;"
        >
        <gmap-marker
        v-for="(item, index) in markers"
            v-bind:key="index"
            label="location_on"
            v-bind:position="item"
            v-on:click="center=item"

        ></gmap-marker>
    </gmap-map>
    <car class="car"> </car>
</div>      
</template>

<script>
import Car  from './Car.vue'
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 53.508, lng: 27.587 },
      markers: [{ "lat": 53.9045398, "lng": 27.561524400000053 } ]
    }
  },
  methods: {
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    }
  },
  components: {
   Car 
  }
};
</script>

<style scoped>
@media(min-width: 981px){
  div.app{
      display: grid;
      height: 100%;
      grid-template-columns: minmax(100px, 100%)  570px ;
      grid-template-rows: repeat(2, auto);
      grid-row-gap: 15px;
      overflow: hidden;
  }
  .map{
      grid-column: 1 / 3;
      grid-row: 1 / 3; 
  }
  .car{
      grid-column: 2 / 3;
      grid-row: 1 / 2; 
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
      overflow: auto;
  }
}
</style>

