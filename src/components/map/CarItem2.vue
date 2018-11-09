<template>
  <div class="app">
    <div class="top">
         <p><v-switch v-model="swtch" :color="color" 
         v-on:change="onChange" value="true"></v-switch></p>
         <p>Id</p>
         <p>model</p>
         <p>serial</p>
         <p>status</p>
         <p>coordinats</p>
         <p>time</p>
    </div>
    <div class="content">
        <div class="item" v-for="(item,i) in dataitem" :key="i" v-bind:style="{'background-color': color}">
            <p><v-checkbox dark v-model="selected"  color="white" :value="item.id"></v-checkbox></p>
            <p>{{item.id}}</p>
            <p>{{item.model}}</p>
            <p>{{item.serial}}</p>
            <p>{{item.status}}</p>
            <p>{{item.coordinats}}</p>
            <p>{{item.time}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["dataitem","color"],
  data(){
    return{
      selected:[],
      swtch:""
    }
  },
methods:{
  onChange(){
    if(this.swtch=="true"){
      for (let i = 0; i < this.dataitem.length; i++) {
        this.selected.push(this.dataitem[i].id);     
      }
    } else if(this.swtch!="true"){
      this.selected=[];
    }
  }
}
}
</script>

<style scoped>
div.app{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 50px auto;
    position: relative;
    overflow: auto;
}
div.top{
  	grid-column: 1 /2 ;
    grid-row: 1 / 2; 
    display: flex;
}
div.content{
    grid-column: 1 / 2;
    grid-row: 2 / 3; 
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
      overflow: auto;
      height: 100%;
    justify-content: flex-start;
}
div.item{
    display: flex;
    align-items: center;
    margin-top: 40px;
}
</style>

