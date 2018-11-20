<template>
<div class="app">
  <div class="screen"><div class="moved" ref="moved"></div></div>
  <cards class="cards" @moved="movedDiv"></cards>
  <table-data class="tableData"></table-data>
</div>
</template>

<script>
import tableData from './Table.vue'
import cards from './Cards2.vue'
export default {
  data () {
    return {
    oldElement:null,
    top:0,
    left:0,
    }
  },
  methods:{
    movedDiv(event){
      console.log(event);
       let moved = this.$refs.moved; 
       moved.classList.remove("slide");
       moved.style.left=(event.left-this.left) +"px";
       moved.style.top=(event.top-this.top) +"px";
       moved.style.width=(event.width) +"px";
       moved.style.height=(event.height) +"px";
       setTimeout(()=>{
            moved.classList.add("slide");
            moved.style.left=(0) +"px";
            moved.style.top=(0) +"px";
        },100)        
    }
  },
    mounted(){
        let topLeft=this.$refs.moved.getBoundingClientRect();
        this.top=topLeft.top;
        this.left=topLeft.left;
  },
  components: {
    tableData,
    cards
   }
  }
</script>

<style scoped>
div.app{
  display:grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto minmax(auto 90%) ;
  gap: 7px;
  background-color: rgb(243, 240, 233);
  align-items: start;
  overflow: hidden;
}
.screen{
 grid-column: 1 / 2;
 grid-row: 1 / 3;
 background-color: rgb(246, 255, 127);
 padding: 10px;
 height: 100%;
 min-width: 400px;
}
.cards{
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 7px;
}
.tableData{
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  height: 100%;
}
div.moved{
    position: relative;
    width: 100%;
    height: 70%;
    background-color: red;
}
.slide{
    position: relative;
    transition-property: left, top,width,height;
    transition-duration:  0.5s, 0.5s,0.5s, 0.5s;   
}

</style>
