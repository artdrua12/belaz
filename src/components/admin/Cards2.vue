<template>
  <div class="app">
     <div class="item" v-for="(item,i) in array" :key="i" @click="onClick" :id="item.comp">
        <p>{{ item.title }}</p> 
        <i class="material-icons">{{item.icon}}</i>
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldElement: null,
      array: [
        {
          title: "Добавить новый модуль",
          comp: "newModule",
          icon: "dashboard"
        },
        {
          title: "Добавить новую машину",
          comp: "newCar",
          icon: "local_shipping"
        },
        {
          title: "Добавить экплотирующую организацию",
          comp: "exportOrganz",
          icon: "local_shipping"
        },
        {
          title: "Добавить обслуживающую организацию",
          comp: "serveOrganz",
          icon: "local_shipping"
        },
        { title: "Добавить пользователя", comp: "addUser", icon: "people" },
        {
          title: "Заблокировать пользователя",
          comp: "blockUser",
          icon: "people"
        },
        {
          title: "Разблокировать пользователя",
          comp: "anBlockUser",
          icon: "people"
        },
        {
          title: "Редактировать пользователя",
          comp: "changeUser",
          icon: "people"
        },
        { title: "Удалить пользователя", comp: "removeUser", icon: "people" }
      ]
    };
  },
  methods: {
    onClick(event) {
      this.oldElement ? (this.oldElement.style.opacity = "1") : "";
      let el = event.target;
      el.style.opacity = "0";
      this.$emit("moved", el);
      this.oldElement = el;
    }
  }
};
</script>

<style scoped>
div.app {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 7px;
}

div.item {
  height: 120px;
  color: white;
  background: linear-gradient(rgb(71, 72, 77), rgb(56, 57, 62)) rgb(64, 65, 70);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5) inset,
    0 2px 3px rgba(0, 0, 0, 0.5) inset, 0 1px 1px rgba(255, 255, 255, 0.1);
}
</style>


