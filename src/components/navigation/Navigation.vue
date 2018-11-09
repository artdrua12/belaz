<template>
  <div class="wrapper"> 
    <div class=title>
       <div class="icon">
       <i class="material-icons" @click.stop="max =!max">view_list</i> 
       </div>
       <span v-show="max">ОАО"БЕЛАЗ</span>
    </div>
    <div class=item v-for="item in items"
        :key="item.title">
      
        <div class="icon">
          <router-link :to="item.to">
          <i class="material-icons">{{ item.icon }}</i>
         </router-link> 
        </div>
        <span v-ripple v-show="max">{{ item.title }}</span>
      </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'КАРТА', icon: 'public',to:"/map" },
          { title: 'АДМИН', icon: 'contacts',to:"/admin"},
          { title: 'ММБ', icon: 'dashboard',to:"/mmb" },
          { title: 'Машины', icon: 'local_shipping',to:"/d" },
          { title: 'Пользователи', icon: 'people',to:"/e" },
          { title: 'СВОБОДНЫЙ ОТЧЕТ', icon: 'poll',to:"/f" },
          { title: 'КЛАССИФИКАТОР', icon: 'category',to:"/g" },
          { title: 'ВХОД', icon: 'book',to:"/" }
        ],
        max: true
      }
    }     
  }
</script>
<style scoped>
i{
font-size: 30px;
color: white;
margin: 0px 15px 0px 12px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  float: left;
  flex-flow: 1;
  height: 100%;
  background-color: beige;
}
div.item,.title {
  display: flex;
  align-items: center;
  height: 60px;
  border-right: 1px solid rgb(95, 93, 93);
  background-color: white
  /* border-bottom: 1px solid rgb(124, 121, 121);  */
  /* padding: 5px 12px 5px 12px; */
}
.item:hover{
  background-color: rgba(150, 146, 143, 0.486);
}
div.icon{
  display: flex;
  align-items: center;
  height: 100%;
  background-color:rgba(8, 8, 8, 0.7);
}

span{
  margin: 0px 30px 0px 20px;
  font-size: 1.4rem;
  color: rgb(82, 77, 77)
}
</style>

