<template>
  <div class="app">
      <div class="screen"></div>
      <div class="store">
         <div class="item" v-for="n in 9" :key="n" @click="onClick">
            {{ n }} 
         </div>   
      </div>
      <div ref="wndws" class="wndws slide"></div>

  </div>
</template>

<script>
export default {
  data(){
   return{
     oldElement:null,
     show: false
    }
  },
  methods:{
    onClick(event){
       this.oldElement?this.oldElement.style.opacity = '1':""; 
       let el = event.target;
       let wndws = this.$refs.wndws;    
       el.style.opacity = '0';
       let xy=el.getBoundingClientRect();

       this.oldElement = event.target;
       wndws.style.width=el.clientWidth +"px";
       wndws.style.height=el.clientHeight +"px";
       wndws.classList.remove("slide");
       wndws.style.left=(xy.left) +"px";
       wndws.style.top=(xy.top) +"px";
       
      function func(w) {
        w.classList.add("slide");
        w.style.left="0px";
        w.style.top="0px";
        } 
       setTimeout(func,100,wndws);
    }
  }
}
</script>

<style scoped>
div.app{
    display: grid;
    grid-template-columns:auto auto;
    grid-template-rows: auto;
}
.screen{
    grid-column: 1 / 2;
    grid-row: 1 / 3; 
    background-color: bisque;
    margin-right: 7px;

}
.store{
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    /* display: flex;
    flex-wrap: wrap;
    align-content: flex-start; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items:start;
    overflow: auto;
    gap: 7px;
}
div.wndws{
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    z-index: 3;
    width: 150px;
    height: 150px;
    position:relative;
    background-color:red;
}
div.item{
    height: 150px;
    background-color: aquamarine;
    /* margin: 0px 0px 5px 5px */
}
.slide{
    transition-property: left, top;
    transition-duration:  0.5s, 0.5s;   
}
</style>


