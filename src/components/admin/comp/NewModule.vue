<template>
    <div class="app">
        <v-text-field class="inputText"
            v-model="login"
            :rules="nameRules"
            :counter="10"
            prepend-icon="person"
            name="login" label="Login"
            required
            dark
        ></v-text-field> 
    </div>
</template>
