<template>
<div class="app">
  <div class="screen">
     <div class="moved" ref="moved"><component v-bind:is="currentComp" class="compt"></component></div>
     
  </div>
  <cards class="cards" @moved="movedDiv"></cards>
  <table-data class="tableData"></table-data>
</div>
</template>

<script>
import tableData from "./Table.vue";
import cards from "./Cards2.vue";

import newModule from "./comp/NewModule.vue";
import newCar from "./comp/NewCar.vue";
import exportOrganz from "./comp/ExportOrganization.vue";
import serveOrganz from "./comp/ServeOrganization.vue";
import addUser from "./comp/AddUser.vue";
import blockUser from "./comp/BlockUser.vue";
import anBlockUser from "./comp/AnBlockUser.vue";
import changeUser from "./comp/ChangeUser.vue";
import removeUser from "./comp/RemoveUser.vue";

export default {
  data() {
    return {
      oldElement: null,
      top: 0,
      left: 0,
      currentComp: ""
    };
  },
  methods: {
    movedDiv(event) {
      let xy = event.getBoundingClientRect(); //  получаем координаты блока по которому кликнули
      this.currentComp = "";
      let moved = this.$refs.moved;
      moved.classList.remove("slide");
      moved.style.left = xy.left - this.left + "px";
      moved.style.top = xy.top - this.top + "px";
      moved.style.width = xy.width + "px";
      moved.style.height = xy.height + "px";
      setTimeout(() => {
        moved.classList.add("slide");
        moved.style.left = 0 + "px";
        moved.style.top = 0 + "px";
      }, 100);
      setTimeout(() => {
        moved.style.width = 450 + "px";
        moved.style.height = 100 + "%";
      }, 200);
      setTimeout(() => {
        this.currentComp = event.id;
      }, 370);
    }
  },
  mounted() {
    let topLeft = this.$refs.moved.getBoundingClientRect();
    this.top = topLeft.top;
    this.left = topLeft.left;
  },
  components: {
    tableData,
    cards,
    newModule,
    newCar,
    exportOrganz,
    serveOrganz,
    addUser,
    blockUser,
    anBlockUser,
    changeUser,
    removeUser
  }
};
</script>

<style scoped>
div.app {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 2px;
  grid-row-gap: 7px;
  background-color: rgb(243, 240, 233);
  align-items: start;
  overflow: hidden;
}
.screen {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-image: url(./image.jpg);
  background-repeat: repeat;
  height: 100%;
  width: 450px;
}
.cards {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 7px;
}
.tableData {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  height: 100%;
}
div.moved {
  position: relative;
  background: linear-gradient(rgba(131, 130, 126, 0.7), rgba(75, 75, 70, 0.2))
    rgba(19, 19, 18, 0.6);
  box-shadow: 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),
    0 0 10px 10px rgba(0, 1, 6, 0.2);
  border: 1px rgb(248, 248, 245) solid;
  box-shadow: 0px 0px 20px -5px #ffffff inset
}
.slide {
  position: relative;
  transition-property: left, top, width, height;
  transition-duration: 0.5s, 0.5s, 0.7s, 0.7s;
}
</style>
