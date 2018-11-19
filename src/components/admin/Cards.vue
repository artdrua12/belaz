<template>
  <div class="app">
      <div class="screen"></div>
      <div class="store">
         <div class="item" v-for="(item,i) in array" :key="i" @click="onClick">
            {{ item }} 
         </div>   
      </div>
      <div ref="wndws" class="wndws slide"></div>
  </div>
</template>

<script>
export default {
  data(){
   return{
     left:0,
     top:0,
     oldElement:null,
     show: false,
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
       let wndws = this.$refs.wndws;    
       el.style.opacity = '0';
       let xy=el.getBoundingClientRect();
       console.log(event);

       this.oldElement = event.target;
       wndws.style.width=xy.width +"px"; // задаем ширину блока
       wndws.style.height=xy.height +"px";
       wndws.style.left=(xy.left - this.left) +"px";
       wndws.style.top=(xy.top - this.top) +"px";
       wndws.classList.remove("slide");
       
      function func(w) {
        w.classList.add("slide");
        w.style.left="0px";
        w.style.top="0px";
       setTimeout(()=>{
           w.style.width="500px";
           w.style.height="300px"
         },500)
        } 
       setTimeout(func,100,wndws);
    }
  },
  mounted(){
        let topLeft=this.$refs.wndws.getBoundingClientRect();
        this.top=topLeft.top;
        this.left=topLeft.left;
  }
}
</script>

<style scoped>
div.app{
    display: grid;
    grid-template-columns:auto auto;
    grid-template-rows: auto;
}
.screen{
    grid-column: 1 / 2;
    grid-row: 1 / 3; 
    background-color: bisque;
    margin-right: 7px;

}
.store{
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    /* display: flex;
    flex-wrap: wrap;
    align-content: flex-start; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items:start;
    overflow: auto;
    gap: 7px;
}
div.wndws{
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    z-index: 1;
    width: 150px;
    height: 100%;
    position: relative;
    background-color:red;
}
div.item{
    height: 150px;
    background-color: aquamarine;
    /* margin: 0px 0px 5px 5px */
}
.slide{
    transition-property: left, top,width,height;
    transition-duration:  0.5s, 0.5s,0.5s, 0.5s;   
}
</style>


