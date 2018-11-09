<template>
  <div class="app">
    <table class="top">
       <tr>
        <th width="50px"><v-switch v-model="swtch" :color="color" 
         v-on:change="onChange" value="true"></v-switch></th>
        <th width="30px">Id</th>
        <th width="100px">model</th>
        <th width="90px">serial</th> 
        <th width="60px">status</th> 
        <th width="50px">coordinats</th>
        <th width="40px">time</th>
      </tr>
    </table>

    <table class="content">
      <tr v-for="(item,i) in dataitem" :key="i" v-bind:style="{'background-color': color}">
         <td width="50px" ><v-checkbox dark v-model="selected" @change="onChangetd" color="white"
          :value="item.coordinats"></v-checkbox></td>
         <td width="25px" >{{item.id}}</td> 
         <td width="100px">{{item.model}}</td> 
         <td width="120px">{{item.serial}}</td> 
         <td width="50px" >{{item.status}}</td>
         <td width="50px" >lat:{{item.coordinats.lat}} lnd:{{item.coordinats.lng}} </td> 
         <td width="40px" >{{item.time}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props:["dataitem","color","number"],
  data(){
    return{
      swtch:"",
      selected:[]
    }
  }, 
  methods:{
  onChange(){
    if(this.swtch=="true"){
      for (let i = 0; i < this.dataitem.length; i++) {
        this.selected.push(this.dataitem[i].coordinats);     
      }
    } else if(this.swtch!="true"){
      this.selected=[];
    }
    this.$store.commit('MAP_ARRAY',{colorArray:this.colorArray,number:this.number});  
   },
   onChangetd(){
    this.dataitem.length == this.selected.length?this.swtch="true":this.swtch="" ; 
    this.$store.commit('MAP_ARRAY',{colorArray:this.colorArray,number:this.number});   
   }
  },
  computed:{
   colorArray(){
     let temp=[];
        for (let i= 0; i < this.selected.length; i++) {  
        temp[i]={coords:[this.selected[i].lat,this.selected[i].lng], options: {iconColor:this.color}}   
       }
       return temp
   },
   alt(){
     return this.$route.path
   }
   
  }

}
</script>

<style scoped>
table.top{ 
  width: 100%;
  font-size: 1.0rem;
  text-align: left;
  background-color:rgba(241, 241, 237,0.7);
  }

table.content { 
  width: 100%;
  font-size: 1.0rem;
  border-spacing: 0px 20px;
  color: rgb(240, 235, 235);
  }
 td{ 
  border-bottom: 3px solid;
 }

 td:first-child{
   padding-left: 20px;
 }
 th:first-child{
   padding-left: 10px;
 }
</style>

