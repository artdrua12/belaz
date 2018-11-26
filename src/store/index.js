import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 const store = new Vuex.Store({
     state: {
         mapArray:[[],[],[],[],[],[],[]],
         mapArray4:[[],[],[],[],[],[],[]]
     },
     getters:{
        allMapArray: state =>{
            let temp = [];
            for (let index = 0; index < state.mapArray.length; index++) {
                temp.push(...state.mapArray[index]);
            }
            return temp
        },
        allMapArray4: state =>{
            let temp = [];
            for (let index = 0; index < state.mapArray4.length; index++) {
                temp.push(...state.mapArray4[index]);
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
        },
        MAP_ARRAY4(state,{colorArray,number}){
            Vue.set(state.mapArray4,Number(number),colorArray); 
            // особенности реактивности 
            //state.mapArray[Number(number)]=colorArray
           }
     },
     actions:{
     }
 })

 export default store