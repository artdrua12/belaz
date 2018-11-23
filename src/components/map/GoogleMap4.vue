<template>
  <div class="mapCar">
      <v-btn @click="add">Adding</v-btn>
      <div class="google-map" id="map"></div>
      <car class="car"></car> 
  </div>
</template>

<script>
import Car from "./Car4.vue";
export default {
  data() {
    return {
      map: "",
      markers: [
        {
          position: { latitude: 59.93, longitude: 30.32 }
        },
        {
          position: { latitude: 59.928, longitude: 30.32 }
        }
      ]
    };
  },
  computed: {
    mapMarkers: function() {
      return this.markers;
    }
  },
  mounted() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 59.93, lng: 30.32 }
    });
    for (let i = 0; i < this.markers.length; i++) {
      new google.maps.Marker({
        position: new google.maps.LatLng(
          // this.markers[i].position.latitude,
          // this.markers[i].position.longitude
        ),
        title: "Hello World!",
        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: {
          url: "src/components/map/icon.png",
          scaledSize: new google.maps.Size(64, 55)
        }
      });
    }
  },
  methods: {
    add() {
      this.map.setCenter({
        lat: 59.93,
        lng: 29.93
      });
      this.markers.push(
        new google.maps.Marker({
          position: new google.maps.LatLng(55.93, 29.93),
          map: this.map,
          animation: google.maps.Animation.DROP,
          icon: {
            url: "src/components/map/belaz.png",
            scaledSize: new google.maps.Size(64, 55)
          }
        })
      );
    }
  },
  components: {
    Car
  }
};
</script>
<style scoped>
@media (min-width: 981px) {
  div.mapCar {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 570px;
    grid-template-rows: 10px 1fr;
    grid-row-gap: 15px;
    overflow: hidden;
  }
  .google-map {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  .car {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    z-index: 2;
    overflow: auto;
  }
}

@media (max-width: 980px) {
  div.mapCar {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(55%, 2fr) auto;
    grid-row-gap: 15px;
    overflow: hidden;
  }
  .google-map {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  .car {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    z-index: 2;
    overflow: auto;
  }
}
</style>