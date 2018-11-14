<template>
  <div class="app">
      <div class="title">
      <span> Авторизация </span>
      <span><i class="material-icons md-38">vpn_key</i></span>
      </div>
    <v-app id="inspire">
        <v-form v-model="valid">  
          <v-text-field
            v-model="login"
            :rules="nameRules"
            :counter="10"
            prepend-icon="person"
            name="login"
            label="Login"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="10"
            prepend-icon="lock"
            label="Password"
            type="password"
            required
          ></v-text-field>     
      </v-form>
      <v-btn color="success">Login</v-btn>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
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
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.login + this.password));
    }
  }
}
</script>

<style scoped>

div.app{
    width: 100%;
    height: 100%;
    background-image: url(./default.jpg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
div.title{
background-color:rgba(8, 8, 8, 0.7);
width: 450px;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
}

#inspire{
  width: 450px;
  height: 240px;
  font-size: 1.8rem;
  padding: 20px 22px 0px 18px;
}
span{
  color: white;
  font-size: 2.0rem;
  margin: 0px 20px
}
button{
  width: 120px;
  height: 45px;
  align-self: flex-end;
  font-size: 1.2rem;
  margin-right: 0px;
  margin-top: 15px;
}

.material-icons.md-38 { font-size: 38px; }
</style>
