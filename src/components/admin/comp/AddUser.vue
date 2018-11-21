<template>
  <div class="adminComp">
      <p class="top">Добавить пользователя</p>
        <div class="contx">
        <v-text-field class="inputText"
            v-model="login"
            :rules="nameRules"
            :counter="10"
            name="login" 
            label="Введите login"
            required
        ></v-text-field> 

        <v-text-field class="inputText"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            name="name" 
            label="Введите имя"
        ></v-text-field> 

        <v-text-field class="inputText"
            v-model="surname"
            :rules="nameRules"
            :counter="10"
            name="surname" 
            label="Введите фамилию"
        ></v-text-field> 

        <v-text-field class="inputText"
            v-model="password"
            :rules="nameRules"
            :counter="10"
            name="password" 
            label="Введите пароль"
        ></v-text-field> 

        <v-select
          :items="items"
          label="Выберите роль пользователя"
        ></v-select>

        <v-select
          :items="items"
          label="Выберите организацию пользователя"
        ></v-select>

        </div>
        <v-btn color="red" dark>Добавить</v-btn>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      surname:"",  
      login:"",
      name: "",
      password:"",
      nameRules: [
        v => !!v || "Введите значение",
        v => v.length <= 10 || "Значение должно быть не более 10 симваолов"
      ],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  }
};
</script>

<style scoped>
div.adminComp {
  padding: 15px;
}
p {
  font-size: 24px;
  width: 100%;
  text-align: center;
}
button {
    float:right;
    margin-right: -5px;
    }

</style>







