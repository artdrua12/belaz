<template>
  <div class="app">
      <div class="screen"></div>
      <div class="store">
         <div class="item" v-for="n in 10" :key="n" @click="onClick">
            {{ n }} 
         </div>   
      </div>
      <div ref="wndws" class="frame"></div>
  </div>
</template>

<script>
export default {
  data(){
   return{
     oldElement:null
    }
  },
  methods:{
    onClick(event){
       this.oldElement?this.oldElement.style.opacity = '1':"";       
       event.target.style.opacity = '0';
       let xy=event.target.getBoundingClientRect();
       this.oldElement = event.target ;
       this.$refs.wndws.style.left=(xy.left) +"px";
       this.$refs.wndws.style.top=(xy.top) +"px";
    }
  }
}
</script>

<style scoped>
div.app{
    display: grid;
    grid-template-columns:350px auto;
    grid-template-rows: auto;
}
.screen{
    grid-column: 1 / 2;
    grid-row: 1 / 2; 
}
.store{
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow: auto;
}
div.frame{
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    z-index: 2;
    width: 100px;
    height: 150px;
    position:absolute;
    background-color: bisque;
    top:10px;
    left:700px;
}
div.item{
    flex-basis: 150px;
    height: 200px;
    background-color: aquamarine;
    margin: 0px 0px 5px 5px
}
</style>


