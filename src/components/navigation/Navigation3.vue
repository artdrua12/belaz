<template>
  <div class="app" > 
    <router-link :to="item.to" tag="div" class="item" 
      v-for="(item,i) in items"
      :key="i"
      v-bind:class="{active_item:cyrentPath==item.to}"> 
          <i class="material-icons"  v-bind:class="{ active_i:cyrentPath==item.to}">{{ item.icon }}</i>      
          <span v-show="cyrentPath==item.to">{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'ВХОД', icon: 'pages',to:"/"},
          { title: 'КАРТА', icon: 'location_on',to:"/map"},
          { title: 'АДМИН', icon: 'how_to_reg',to:"/admin"},
          { title: 'ММБ', icon: 'dashboard',to:"/mmb"},
          { title: 'Машины', icon: 'local_shipping',to:"/d"},
          { title: 'Польз', icon: 'people',to:"/e"},
          { title: 'ОТЧЕТ', icon: 'poll',to:"/raport" },
          { title: 'КЛАСС', icon: 'category',to:"/g" }
        ],
        max: true
      }
    },
    methods: {
    },
    computed:{
      cyrentPath(){
         return this.$route.path
       } 
    }   
  }
</script>
<style scoped>
@media(min-width: 981px){
  div.app{
  flex-direction: column;
  }
  div.item{
    width: 59px;
    height: 59px;
    transition-property: height;
    transition-duration: 0.5s;
  }
  div.active_item{
    transition-property: height;
    transition-duration: 0.5s;
    height: 120px;
  }
}
@media(max-width: 980px){
  div.app{
   flex-direction: row;
   align-items: center;
  }
  div.item{
    width: 59px;
    height: 55px;
    transition-property: width;
    transition-duration: 0.5s;
  }
  div.active_item{
    transition-property: width;
    transition-duration: 0.5s;
    width: 120px;
  } 
}

div.app{
  display: flex;
  /* background-color:rgba(8, 8, 8, 1); */
  background: linear-gradient(rgb(71, 72, 77), rgb(56,57,62)) rgb(64, 65, 70);
    box-shadow:
   0 0 1px rgba(0,0,0,.5) inset,
   0 2px 3px rgba(0,0,0,.5) inset,
   0 1px 1px rgba(255,255,255,.1);
}
div.item{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgb(83, 84, 88), rgb(71, 72, 77)) rgb(76,77,82);
  box-shadow:
   0 2px rgba(255,255,255,.2) inset,
   0 3px 5px rgba(0,1,6,.5),
   0 0 1px 1px rgba(0,1,6,.2);
   
   -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
i{
  transition-property: font-size;
  transition-duration: 0.5s, 1s;
  font-size: 25px;
  color:white;
  border-radius: 5px;
}
span{
color: white;
font-size: 12px;
margin-top: -4px;
color: rgb(255, 255, 0);
  text-shadow: 0 1px rgba(255,255,255,.2), 0 -1px rgba(0,0,0,.8);
}
a {
   outline: none;
   display: flex;
   flex-wrap: wrap;
}
div.item:hover{
  background: linear-gradient(rgb(76,77,82), rgb(82, 83, 87)) rgb(76,77,82); 
}
div.item:active{
  background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);
  box-shadow:
   0 0 1px rgba(0,0,0,.5) inset,
   0 5px 7px rgba(0,0,0,.5) inset,
   0 1px 1px rgba(255,255,255,.1);
}

.active_i{
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: 47px;
  color: rgb(255, 255, 0);
  
}

</style>

