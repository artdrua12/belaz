<template>
  <div class="app">
    <div class="top">
         <p><v-switch v-model="swtch" :color="color" 
         v-on:change="onChange" value="true"></v-switch></p>
    </div>
    <div class="content">
        <div class="item" v-for="(item,i) in dataitem" :key="i" v-bind:style="{'border-color': color}">       
            <v-checkbox dark v-model="selected"  color="white"  :value="item.id" class="Item1"></v-checkbox>
            <img src="./1.png" class="Item2">
            <p class="Item3">id:{{item.id}}</p>
            <p class="Item4">{{item.model}}</p>
            <p class="Item5"> SerialNumber: {{item.serial}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataitem", "color"],
  data() {
    return {
      selected: [],
      swtch: ""
    };
  },
  methods: {
    onChange() {
      if (this.swtch == "true") {
        for (let i = 0; i < this.dataitem.length; i++) {
          this.selected.push(this.dataitem[i].id);
        }
      } else if (this.swtch != "true") {
        this.selected = [];
      }
    }
  }
};
</script>

<style scoped>
div.app {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10px auto;
  position: relative;
  overflow: auto;
}
div.top {
  grid-column: 1 /2;
  grid-row: 1 / 2;
  display: flex;
}
div.content {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  justify-content: flex-start;
}
div.item {
  width: 250px;
  display: flex;
  margin-top: 40px;
  margin-right: 12px;
  border: 3px solid;
  color: white;
  background: linear-gradient(rgba(87, 88, 83, 0.4), rgba(71, 72, 77,0.5)) rgba(82, 82, 76, 0.5);
  display: grid;
    grid-template-columns:repeat(3,auto);
    grid-template-rows:repeat(4,auto);
}
.Item1{
      grid-column: 1 / 2;
      grid-row: 1 / 2; 
      padding: 0px;
      margin: 0px;
}
.Item2{
      grid-column: 1 / 3;
      grid-row: 1 / 3; 
      width: 140px;
}
.Item3{
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      align-items:start;
      
}
.Item4{
      grid-column: 3 / 4;
      grid-row: 1 / 2; 
      align-items:end;
      align-content: end;
}
.Item5{
      grid-column: 1 / 4;
      grid-row: 3 / 4; 
      height: 10px;
      justify-items:end;
}
</style>

