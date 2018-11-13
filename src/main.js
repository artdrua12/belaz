import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css' 
import * as VueGoogleMaps from "vue2-google-maps";
import store from './store'


import compdefault from './components/default/Default.vue'
import googleMap  from './components/map/GoogleMap3.vue'
import googleMap2  from './components/map/GoogleMap2.vue'
import comptable  from './components/table/Table.vue'
import admin  from './components/admin/Admin.vue'
import raport from './components/raport/Raport.vue'

import YmapPlugin from 'vue-yandex-maps'
Vue.use(YmapPlugin)
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAkBWkvLQaraj01c3u-7GY6xmo4trsKLlQ",
    libraries: 'places,drawing,visualization'// necessary for places input
  }
});


var router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: compdefault},
    {path: '/map', component: googleMap},
    {path: '/admin', component: admin},
    {path: '/mmb', component: googleMap2},
    {path: '/raport', component: raport}
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  store: store
})
