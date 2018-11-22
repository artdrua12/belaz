<template>
  <div class="mapCar">
      <div class="google-map" id="map"></div>
      <v-btn @click="add"></v-btn>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: "",
      markerImage: "",
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
  methods: {
    add() {
      this.map.setCenter({ lat: 59.9, lng: 30.4 });
      new google.maps.Marker({
        position: new google.maps.LatLng(59.9, 30.4),
        title: "Hello World!",
        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: {
          url: "src/components/map/belaz.png",
          scaledSize: new google.maps.Size(64, 55)
        }
      });
    }
  }
};
</script>
<style scoped>
div.mapCar {
  widows: 100%;
  height: 100%;
}
.google-map {
  width: 100%;
  height: 90%;
  margin: 0 auto;
  background: gray;
}
</style>