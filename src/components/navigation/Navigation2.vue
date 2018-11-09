<template>
  <div class="app"> 
    <div class="title">
      <i class="material-icons" v-on:click.stop="max =!max">view_list</i>
    </div>
    <div class="content">
      <div class="item"
        v-for="(item,i) in items"
        :key="i"
        v-on:click="onClick(i)">
          <router-link :to="item.to">
          <i class="material-icons" 
           v-bind:class="{ active: item.click}">{{ item.icon }}</i>
          </router-link> 
          <span v-show="item.click">{{ item.title }}</span>
      </div>
    </div>
    <div class=footer>
      <p> ОАО "БЕЛАЗ"</p>
      <p> управляющая компания холдинга "БЕЛАЗ"</p>
    </div>  
  </div>
</template>


<script>
  export default {
    data () {
      return {
        oldI:0,
        items: [
          { title: 'ВХОД', icon: 'book',to:"/" },
          { title: 'КАРТА', icon: 'public',to:"/map",click:false },
          { title: 'АДМИН', icon: 'contacts',to:"/admin",click:false },
          { title: 'ММБ', icon: 'dashboard',to:"/mmb",click:false  },
          { title: 'Машины', icon: 'local_shipping',to:"/d",click:false  },
          { title: 'Польз', icon: 'people',to:"/e",click:false  },
          { title: 'ОТЧЕТ', icon: 'poll',to:"/f",click:false  },
          { title: 'КЛАСС', icon: 'category',to:"/g",click:false  }
        ],
        max: true
      }
    },
    methods: {
      onClick(i){
        this.items[this.oldI].click=false;
        this.items[i].click=true;
        this.oldI=i;
      }
    }     
  }
</script>
<style scoped>
div.app{
  width: 74px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
div.content, div.title,div.footer{
  flex-grow: 1;
  background-color:rgba(8, 8, 8, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
div.title{
border-bottom: #ffff00 solid 4px;
align-items: center;
}
div.title>i{
  font-size: 50px;
}
div.item{
  padding: 8px 10px 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
i{
  transition-property: font-size, margin-top,color,box-shadow;
  transition-duration: 0.5s, 0.5s,0.7s,1s;
  font-size: 30px;
  color: white;
  box-shadow:none;
  border-radius: 5px;
}
span{
color: white;
margin: auto;
}
div.item:hover{
background-color: rgb(100, 100, 97); 
}
.active{
  transition-property: font-size, margin-top,color,box-shadow;
  transition-duration: 0.5s, 0.5s,0.7s,2s;
  font-size: 50px;
  margin-top: 20px;
  color: rgb(241, 215, 67);
  box-shadow: 0px 0px 14px -2px #ffff00;
}
a {
   outline: none;
}


</style>

