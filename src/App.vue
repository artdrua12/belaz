<template>
  <div id="app">
    <navigation-title class="navigationTitle"></navigation-title>
    <navigation class="navigation"></navigation>
    <transition name="fade">

    <router-view class="content"></router-view>

    </transition>
  </div>
</template>

<script>
import Navigation from './components/navigation/Navigation3.vue'
import NavigationTitle from './components/navigation/NavigationTitle.vue'
import Navigation2 from './components/navigation/Navigation2.vue'
export default {
  name: 'app',
  data () {
    return {
    }
   },
  components: {
     NavigationTitle,
     Navigation, 
     Navigation2 
  }
}
</script>

<style>
html{
  overflow: hidden;
}
div#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  overflow: auto;
  }
  .navigationTitle{
    grid-column: 1 / 2;
    grid-row: 1 / 2; 
    z-index: 2;
  }
 @media(min-width: 981px){
 div#app {
  grid-template-columns: 60px 1fr;
  grid-template-rows: 60px auto; 
  }
  .navigation{
    grid-column: 1 / 2;
    grid-row: 2 / 3; 
    z-index: 2;
  }
  .content{
    grid-column: 2 / 3;
    grid-row: 1 / 3; 
  }
}

@media(max-width: 980px){
 div#app {
  grid-template-columns: 60px auto;
    grid-template-rows: 60px auto; 
  }
   .navigation{
    grid-column: 2 / 3;
    grid-row: 1 / 2; 
    z-index: 2;
  }
  .content{
    grid-column: 1 / 3;
    grid-row: 2 / 3; 
  }
}

</style>
