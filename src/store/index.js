import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 const store = new Vuex.Store({
     state: {
         mapArray:[[],[],[],[],[],[],[]],
         googleArray:[]
     },
     getters:{
        allMapArray: state =>{
            let temp = [];
            for (let index = 0; index < state.mapArray.length; index++) {
                temp.push(...state.mapArray[index]);
            }
            return temp
        }
     },
     mutations: {
         set(state,{type,items}){
            state[type] = items 
         },
         MAP_ARRAY(state,{colorArray,number}){
         Vue.set(state.mapArray,Number(number),colorArray); 
         // особенности реактивности 
         //state.mapArray[Number(number)]=colorArray
        }
     },
     actions:{
     }
 })

 export default store