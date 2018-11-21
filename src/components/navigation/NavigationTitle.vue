
<template>
 <div class="app" > 
   <i class="material-icons" v-on:click.stop="max =!max">view_list</i>
 </div>  
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 981px) {
  div.app {
    border-bottom: #fcfcf9 solid 4px;
  }
}
@media (max-width: 980px) {
  div.app {
    border-right: #fafaf6 solid 4px;
  }
}

div.app {
  background: linear-gradient(rgb(76, 77, 82), rgb(56, 57, 62)) rgb(76, 77, 82);
  display: flex;
  box-shadow: 0 2px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),
    0 0 1px 1px rgba(0, 1, 6, 0.2);
}
i {
  font-size: 30px;
  color: white;
  border-radius: 5px;
  margin: auto;
}
</style>
