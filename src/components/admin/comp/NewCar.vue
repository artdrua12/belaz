<template>
  <div class="adminComp">
      <p class="top">Добавить новую машину</p>
        <div class="contx">
        <v-text-field class="inputText"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            name="login" 
            label="Введите серийный номер"
            required
            dark
        ></v-text-field> 

        <v-select
          :items="items"
          label="Выберите модуль"
        ></v-select>

        <v-menu
            ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            dark  
        >
            <v-text-field
            slot="activator"
            v-model="date"
            label="Дата производства"
            prepend-icon="event"
            readonly
            dark
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
        </v-menu>

        <v-menu
            ref="menu2"
            :close-on-content-click="false"
            v-model="menu2"
            :return-value.sync="date2"
            lazy
            transition="scale-transition"
            dark  
        >
            <v-text-field
            slot="activator"
            v-model="date2"
            label="Дата начала эксплуатации"
            prepend-icon="event"
            readonly
            ></v-text-field>
            <v-date-picker v-model="date2" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
            </v-date-picker>
        </v-menu>

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
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      date2: new Date().toISOString().substr(0, 10),
      menu2: false,
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
    margin-top: 25px;
    }
div.v-menu__content, div.menuable__content__active{
    top:0px!important;
    left:0px!important;
}
</style>







