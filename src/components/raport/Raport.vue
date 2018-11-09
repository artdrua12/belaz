<template>
    <div class="app">
        <canvas id="canvas" width="1000" height="500"></canvas>
        <h1>xxxxx</h1>
        <v-btn type="sucess" @click="onClick">ddd</v-btn>
        <v-btn type="sucess" @click="onClick2">ddd</v-btn>
    </div>
</template>

<script>
export default {
data(){
    return{ 
        angle: 90 
    } 
},
methods:{
    onClick(){
   
    },
    onClick2(){
        this.angle = 45;
    }
},
computed:{
 ang(){
     return this.angle*Math.PI;
 }
},
 mounted(){
    var canvas = document.getElementById("canvas");
    var ctx=canvas.getContext("2d"); 
    var middleX = 250;
    var middleY = 250;
    var radius =100;
        
    var arrowAngle = this.ang * Math.PI;
    var toX = middleX + (radius) * Math.cos(arrowAngle);
    var toY = middleY + (radius) * Math.sin(arrowAngle);

    ctx.beginPath();
    ctx.moveTo(middleX, middleY);
    ctx.lineTo(toX, toY);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.stroke();
   
    }
}
</script>

