<template>
  <div class="app">
    <div class="wrapper" :class="{blur:watchFocus}"></div>
    <div class="text"  ></div>
    <div class="registration"  @click="onFocus">
        <i class="material-icons">verified_user</i>
        <span class="textop">Для работы пройдите авторизацию</span>
        <span class="texmain">Авторизация</span>
        <v-form v-model="valid" class="contx">  
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
       <v-btn color="red" class="but" dark> Log In > </v-btn>   
    </div>    
</div>
</template>

<script>
import Parallax from 'parallax-js'
export default {
  data () {
    return{
        watchFocus:false,
        valid: false,
        login: '',
        nameRules: [
        v => !!v || 'Введите логин',
        v => v.length <= 10 || 'Имя должно быть менее 10 симваолов'
        ],
        password:'',
        passwordRules: [
        v => !!v || 'Введите пароль',
        v => v.length <= 10 || 'Пароль должно быть не более 10 симваолов'
        ]
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
    grid-template-columns: 1fr auto 1fr ;
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
    width: 400px;
    height: 420px;
    background: linear-gradient(rgba(92, 93, 97, 0.7), rgba(56, 56, 59, 0.5)) rgba(18, 18, 19, 0.6);
    box-shadow:
    0 1px rgba(255,255,255,.2) inset,
    0 3px 5px rgba(0,1,6,.5),
    0 0 10px 10px rgba(0,1,6,.2);
    border: 1px rgb(248, 248, 245) solid;
    padding: 32px 32px 18px 32px;

    display: grid;
    grid-template-columns: 70px 1fr ;
    grid-template-rows: repeat(4,auto);
}

.material-icons{
   grid-column: 1 / 2;
   grid-row: 1 / 3; 
   padding-top: 10px;
   align-self: end;
}
.textop{
    grid-column: 2 / 3;
    grid-row: 1 / 2; 
    color: aliceblue;
    align-self: end;
}
.texmain{
    grid-column: 2 / 3;
    grid-row: 2 / 3;  
    font-size: 2.2rem;
    color: rgb(255, 217, 0); 
    align-self: end;
}
.contx{
    grid-column: 1 / 3;
    grid-row: 3 / 4;    
}
.but{
    grid-column: 2 / 3;
    grid-row: 4 / 5; 
    width: 120px;
    height: 45px;
    margin-right: 0px;
    justify-self: end;
    font-size: 15px;
}

.inputText{
   color: white;
   font-size: 1.4rem;
   background: linear-gradient(rgba(92, 93, 97, 0.7), rgba(56, 56, 59, 0.5)) rgba(18, 18, 19, 0.6);
   box-shadow:
   0 0 1px rgba(0,0,0,.5) inset,
   0 2px 3px rgba(0,0,0,.5) inset,
   0 1px 1px rgba(255,255,255,.1);
   padding: 15px 25px 5px 10px;
   margin:27px 0;
   border-radius: 12px;
}
.blur {
  filter: blur(20px); 
}

i{
    color: rgb(255, 217, 0);
    font-size: 62px;
    margin-right: 10px;
}

</style>
