<template>
  <div class="adminComp">
     <i class="material-icons iconColor">local_shipping</i> <p class="top">Добавить эксплуатирующую организацию</p>
        <div class="contx">
        <v-text-field class="inputText"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            name="name" 
            label="Введите имя контракта"
            required
            dark
        ></v-text-field> 

        <v-select
          :items="items"
          label="Выберите заинтересованную сторону"
          dark
        ></v-select>

        <v-select
          :items="items"
          label="Выберите бенефециара"
          dark
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
            label="Дата начала"
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
            label="Дата окончания"
            prepend-icon="event"
            readonly
            dark
            ></v-text-field>
            <v-date-picker v-model="date2" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu2.save(date)">OK</v-btn>
            </v-date-picker>
        </v-menu>

        <v-text-field class="inputText"
            v-model="description"
            :counter="10"
            name="description" 
            label="Введите описание"
            dark
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
  color: rgb(255, 217, 0);
}
button {
  float: right;
  margin-right: -5px;
  margin-top: 25px;
}

.iconColor {
  font-size: 50px;
  color: red;
}
</style>







