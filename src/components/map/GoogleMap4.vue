<template>
  <div class="app">
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

    this.markers.forEach(marker => {
      marker.map = this.map;
      marker.position = new google.maps.LatLng(
        marker.position.latitude,
        marker.position.longitude
      );
      new google.maps.Marker(marker);
    });

    this.markerImage = new google.maps.MarkerImage(
      "http://filter.euroelement.com/upload/iblock/896/896bea54c8ca2b753a5e62f86f64da90.png",
      new google.maps.Size(50, 32),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 32)
    );
  },
  methods: {
    add() {
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
.google-map {
  width: 940px;
  height: 780px;
  margin: 0 auto;
  background: gray;
}
</style>