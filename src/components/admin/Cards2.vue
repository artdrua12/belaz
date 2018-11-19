<template>
  <div class="app">
     <div class="item" v-for="(item,i) in array" :key="i" @click="onClick">
        {{ item }} 
    </div>   
  </div>
</template>

<script>
export default {
  data(){
   return{
     oldElement:null,
     array:["Добавить новый модуль","Добавить новую машину",
            "Добавить машину","Добавить экплотирующую организацию",
            "Добавить обслуживающую организацию","Добавить пользователя",
            "Заблокировать пользователя","Разблокировать пользователя",
            "Редактировать пользователя","Удалить пользователя" ]
    }
  },
  methods:{
    onClick(event){
       this.oldElement?this.oldElement.style.opacity = '1':""; 
       let el = event.target;  
       el.style.opacity = '0';
       let xy=el.getBoundingClientRect();
       this.oldElement = el; 
       this.$emit("moved",xy);          
    }
  }
}
</script>

<style scoped>
div.app{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 7px;
}

div.item{
  height: 120px;
  background-color: aquamarine;

}

</style>


