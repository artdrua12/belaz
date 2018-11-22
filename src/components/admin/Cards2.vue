<template>
  <div class="app">
     <div class="item" v-for="(item,i) in array" :key="i" @click="onClick(item.comp)" :id="item.comp">
        <i class="material-icons">{{item.icon}}</i>
        <p>{{ item.title }}</p> 
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
    onClickOLD(event) {
      this.oldElement ? (this.oldElement.style.opacity = "1") : "";
      let el = event.target;
      el.style.opacity = "0";
      this.$emit("moved", el);
      this.oldElement = el;
    },
    onClick(id) {
      let element = document.getElementById(id);
      this.oldElement ? (this.oldElement.style.opacity = "1") : "";
      element.style.opacity = "0";
      this.$emit("moved", element);
      this.oldElement = element;
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
  background: linear-gradient(rgba(131, 130, 126, 0.7), rgba(75, 75, 70, 0.2))
    rgba(19, 19, 18, 0.6);
  box-shadow: 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),
    0 0 5px 3px rgba(0, 1, 6, 0.2),
    0px 0px 12px -5px #ffffff inset;
  border: 1px rgb(248, 248, 245) solid;
  padding: 20px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>


