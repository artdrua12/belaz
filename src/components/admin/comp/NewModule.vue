<template>
  <div class="adminComp">
      <p class="top">Добавить новый модуль</p>
        <div class="contx">
        <v-text-field class="inputText"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            name="login" 
            label="Введите серийный номер"
            required
        ></v-text-field> 

        <v-select
          :items="items"
          label="Выберите тип модуля"
        ></v-select>


        <v-text-field class="inputText"
            v-model="description"
            :counter="10"
            name="description" 
            label="Введите описание"
        ></v-text-field>
        </div>
        <v-btn color="red" dark>Добавить</v-btn>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameRules: [
        v => !!v || "Введите значение",
        v => v.length <= 10 || "Значение должно быть не более 10 симваолов"
      ],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      description: ""
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
div.v-menu__content, div.menuable__content__active{
    top:0px!important;
    left:0px!important;
}
</style>







