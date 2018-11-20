<template>
   <div class="google-map" id="map"></div>
</template>

<script>
export default {
 data() {
   return {
       map: '',
       markers: [
           {
            position: {latitude: 59.93, longitude: 30.32 }
           },
           {
            position: {latitude: 59.928,longitude: 30.32}
           }
       ]
   }
        },
    computed: {
            mapMarkers: function () {
                return this.markers
            }
        },
    mounted() {
            const element = document.getElementById("map")
            const options = {
                zoom: 14,
                center: new google.maps.LatLng(59.93, 30.32)
            }
            this.map = new google.maps.Map(element, options)
            this.markers.forEach((marker) => {
                marker.map = this.map
                marker.position = new google.maps.LatLng(marker.position.latitude, marker.position.longitude)
                new google.maps.Marker(marker)
            })
        },
    methods: {

        }
    }
</script>
<style scoped>
    .google-map {
        width: 940px;
        height: 780px;
        margin: 0 auto;
        background: gray;
    }
</style>