<template>
  <div class="app">
    <div class="wrapper" :class="{blur:watchFocus}"></div>
    <div class="text"  ></div>
    <div class="registration"  @click="onFocus">
        <span class="top">Пройдите авторизацию</span>
        <i class="material-icons">verified_user</i>
        <span class="center">Авторизация</span>
        <v-form v-model="valid">  
          <v-text-field class="inputText"
            v-model="login"
            :rules="nameRules"
            :counter="10"
            prepend-icon="person"
            name="login" label="Login"
            required
            dark
          ></v-text-field>
          <v-text-field class="inputText"
            v-model="password"
            :rules="passwordRules"
            :counter="10"
            prepend-icon="lock"
            label="Password"
            type="password"
            required
            dark
          ></v-text-field>     
       </v-form>    
    </div>    
</div>
</template>

<script>
import Parallax from 'parallax-js'
export default {
  data () {
    return{
        watchFocus:false
    }
  },
  methods: {
      onFocus(){
          this.watchFocus=!this.watchFocus
      }
  }
}
</script>

<style scoped>
div.app{
    display: grid;
    grid-template-columns: 1fr 450px 1fr ;
    grid-template-rows: 37% auto auto;
    overflow: hidden;
}
div.wrapper{
    grid-column: 1 / 4;
    grid-row: 1 / 4; 
    z-index: 1; 
    background-image: url(./default.jpg); 
    background-size: cover;  
}
div.text{
    grid-column: 1 / 4;
    grid-row: 1 / 2; 
    z-index: 2;
    background-image: url(./belaz-logo.png);
    background-size: 700px 90px; 
    background-position: 50% 50%;
        
}
div.registration{
    grid-column: 2 / 3;
    grid-row: 2 / 3; 
    z-index: 2;
    width: 440px;
    height: 450px;
    background: linear-gradient(rgba(92, 93, 97, 0.7), rgba(56, 56, 59, 0.5)) rgba(18, 18, 19, 0.6);
    box-shadow:
    0 1px rgba(255,255,255,.2) inset,
    0 3px 5px rgba(0,1,6,.5),
    0 0 10px 10px rgba(0,1,6,.2);
    border: 1px rgb(248, 248, 245) solid;
    padding: 35px 32px 10px 30px;
    border-radius: 12px;
}
.blur {
  filter: blur(20px); 
}
.inputText{
   color: white;
   font-size: 1.6rem;
   background: linear-gradient(rgba(92, 93, 97, 0.5), rgba(56, 56, 59, 0.5)) rgba(18, 18, 19, 0.6);
   box-shadow:
   0 0 1px rgba(0,0,0,.5) inset,
   0 2px 3px rgba(0,0,0,.5) inset,
   0 1px 1px rgba(255,255,255,.1);
   padding: 20px 25px 10px 10px;
   margin-top: 25px;
   border-radius: 12px;
}
span.top {
    color: aliceblue;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
span.center{
    font-size: 2.2rem;
    color: rgb(255, 217, 0);
    /* color: aliceblue */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

i{
    color: rgb(255, 217, 0);
    font-size: 50px;
    margin-right: 10px;
}

</style>
