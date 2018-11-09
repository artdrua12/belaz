
<template>
 <div class="app" > 
   <i class="material-icons" v-on:click.stop="max =!max">view_list</i>
 </div>  
</template>

<script>
export default {
    
}
</script>

<style scoped>

@media(min-width: 981px){
 div.app{
  border-bottom: #fcfcf9 solid 4px;
    }
}
@media(max-width: 980px){
 div.app{
  border-right: #fafaf6 solid 4px;
    }
}

div.app{
 background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);
 display: flex;
}
i{
  font-size: 30px;
  color: white;
  border-radius: 5px;
  margin: auto;
}
</style>
