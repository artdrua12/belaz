<template>
  <div class="mapCar">
      <v-btn @click="add2">Adding</v-btn>
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
        // {
        //   position: { latitude: 60.93, longitude: 28.32 }
        // },
        // {
        //   position: { latitude: 54.928, longitude: 32.32 }
        // }
      ],
      m: ""
    };
  },
  computed: {
    mapData() {
      return this.$store.getters.allMapArray4;
    }
  },
  mounted() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 59.93, lng: 30.32 }
    });
    for (let i = 0; i < this.markers.length; i++) {
      this.m = new google.maps.Marker({
        position: new google.maps.LatLng(
          this.markers[i].position.latitude,
          this.markers[i].position.longitude
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
  watch: {
    mapData() {
      this.add2();
      for (let i = 0; i < this.mapData.length; i++) {
        this.map.setCenter(
          new google.maps.LatLng(
            this.mapData[i].position.lat,
            this.mapData[i].position.lng
          )
        );
        this.markers.push(
          new google.maps.Marker({
            position: new google.maps.LatLng(
              this.mapData[i].position.lat,
              this.mapData[i].position.lng
            ),
            map: this.map,
            animation: google.maps.Animation.DROP,
            icon: {
              url: "src/components/map/belaz.png",
              scaledSize: new google.maps.Size(64, 55)
            }
          })
        );
      }
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
    },
    add2() {
      for (let i = 0; i < this.markers.length; i++) {
         this.markers[i].setMap(null);       
      }
      // this.markers[2].setMap(null);
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