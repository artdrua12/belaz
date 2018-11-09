<template>
  <div class="app">
    <div class="GMap">
    <div class="manager">
    <label >Поиск и добавление точки:</label> 
    <gmap-autocomplete   @place_changed="setPlace"> </gmap-autocomplete>
    <button @click="addMarker">Add</button>
    <span>M{{markers}}</span><span>P{{places}}</span>
    </div>
    <gmap-map
      language="ru"
      v-bind:center="center"
      v-bind:zoom="7"
      style="width:100%;  height: 100%;"
    >
      <gmap-marker
        v-bind:key="index"
        v-for="(item, index) in markers"
        v-bind:position="item.position"
        v-on:click="center=item.position"
        color="white"
      ></gmap-marker>
    </gmap-map>
    </div>
    <div class="table">
      <div class="carTable">
      <car-table></car-table>
      </div>
      <div class="car">car
        <p></p>
      </div>
    </div>
    
  </div>
</template>

<script>
import CarTable from '../table/Table.vue'
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Minsk to keep it simple
      // change this to whatever makes sense
      center: { lat: 53.508, lng: 27.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
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
   CarTable  
  }
};
</script>

<style scoped>
.app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
div.table{
  display: flex;
  flex-wrap: wrap;
  flex-basis: 30%;
  flex-flow: 1;
  background-color: aqua;
}
div.carTable{
flex-basis: 40%;
flex-grow: 1;
background-color: rgb(194, 190, 185);
max-width: 390px;
}
div.car{
  background-color: bisque;
  flex-basis: 30%;
  flex-grow:  1;
  height: auto;
}
div.GMap{
  flex-basis: 50%;
  flex-grow: 1;
  height: 97.8%;
}
div.manager{
  height: 20px;
}
</style>
