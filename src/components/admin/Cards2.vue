<template>
  <div class="app">
     <div class="item" v-for="(item,i) in array" :key="i" @click="onClick" :id="item.comp">
        {{ item.title }} 
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldElement: null,
      array: [       
        { title: "Добавить новый модуль", comp: "newModule", icon:"" },
        { title: "Добавить новую машину", comp: "newCar", icon:""  },
        { title: "Добавить экплотирующую организацию", comp: "exportOrganz", icon:""  },
        { title: "Добавить обслуживающую организацию", comp: "serveOrganz", icon:""  },
        { title: "Добавить пользователя", comp: "addUser", icon:""  },
        { title: "Заблокировать пользователя", comp: "blockUser", icon:""  },
        { title: "Разблокировать пользователя", comp: "anBlockUser", icon:""  },
        { title: "Редактировать пользователя", comp: "changeUser", icon:""  },
        { title: "Удалить пользователя", comp: "removeUser", icon:""  }
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
  background-color: aquamarine;
}
</style>


