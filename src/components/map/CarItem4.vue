<template>
  <div class="app">
    <v-switch v-model="swtch" :color="color" class="switch" 
         v-on:change="onChange" value="true" width="150px"></v-switch>
    <div class="content">
        <div class="item" v-for="(item,i) in dataitem" :key="i" v-bind:style="{'border-color': color}">       
            <v-checkbox dark v-model="selected"  color="white"  :value="item.id" class="Item1"></v-checkbox>
            <img src="./1.png" class="Item2">
            <p class="Item3">id:{{item.id}}</p>
            <p class="Item4">{{item.model}}</p>
            <p class="Item5"> SerialNumber: {{item.serial}}</p>
            <div class="Item6" v-bind:style="{'background-color': color}"></div>
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
  grid-template-rows: 20px auto;
  position: relative;
}
.switch {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 0px;
  margin: 7px 0px 0px 0px;
  padding-left: 10px;
}
div.content {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  /* border: 1px solid red; */
  display: inline-flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: space-between;
}
div.item {
  width: 260px;
  height: 100px;
  margin-top: 25px;
  /* margin-right: 16px; */
  border: 2px solid;
  color: white;
  background: linear-gradient(
      rgba(118, 119, 112, 0.4),
      rgba(109, 108, 103, 0.5)
    )
    rgba(104, 104, 98, 0.5);
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
}
.Item1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 0px;
  margin: 0px;
}
.Item2 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  width: 140px;
  margin-left: 15px;
}
.Item3 {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  align-self: start;
}
.Item4 {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  align-self: end;
}
.Item5 {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  height: 10px;
  justify-items: end;
}
.Item6 {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 90%;
  justify-items: end;
}
</style>

