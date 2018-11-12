<template>
    <div class="app">
        <canvas id="canvas" width="500" height="500"></canvas>
        <canvas id="canvas2" width="500" height="500"></canvas>
        <v-btn type="sucess" @click="onClick">ddd</v-btn>
        <v-text-field
            v-model="angle"
            :counter="10"
            label="Name"

        ></v-text-field>
       <p>{{angle}}</p>
    </div>
</template>

<script>
export default {
data(){
    return{ 
        angle:295,
        arcArray:[
           {x:250,y:250,r:175,angleStart:180,angleEnd:290,color:'green'},
           {x:250,y:250,r:175,angleStart:290,angleEnd:320,color:'yellow'},
           {x:250,y:250,r:175,angleStart:320,angleEnd:360,color:'red'},           
        ]
    } 
},
methods:{
    onClick(){
        var canvas = document.getElementById("canvas2");
        var sky = canvas.getContext("2d"); 
        sky.clearRect(0, 0, canvas.width, canvas.height);
        sky.save();
        sky.translate(250,250); // устанавливаем начало координат в конец отрезка
        sky.rotate(this.radian) // поворачиваем начало координат
        this.Line(sky);
        sky.restore();
    },
    Line(context){
        context.beginPath();
        context.lineWidth = 7; //
        context.strokeStyle = "red";
        context.moveTo(0, 0);
        context.lineTo(140, 0);
        context.stroke();
    },
    Arc(context,x,y,r,angleStart,angleEnd,color){
        context.beginPath();
        context.arc(x,y,r,(Math.PI/180)*angleStart,(Math.PI/180)*angleEnd);
        context.lineWidth = 17;
        context.strokeStyle = color;
        context.stroke();
    }
},
computed:{
 radian(){
     return Number(this.angle)*(Math.PI/180);
 }
},
 mounted(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    for (let i=0; i<this.arcArray.length; i++) {
      this.Arc(context, this.arcArray[i].x, this.arcArray[i].y,
               this.arcArray[i].r, this.arcArray[i].angleStart,
               this.arcArray[i].angleEnd, this.arcArray[i].color);
    }

  
    
  
    context.beginPath();
    context.arc(250,250,5,(Math.PI/180)*0,(Math.PI/180)*360);
    context.lineWidth = 12;
    context.strokeStyle = 'red';
    context.stroke();
    }
}
</script>

<style scoped>
.app{
    display: grid;
    grid-template-columns: 500px 700px;
    grid-template-rows:auto;
}
#canvas{
border: 3px dotted #14acac;
grid-column: 1 / 2;
grid-row: 1 / 2; 
z-index: 1;
}
#canvas2{
border: 3px dashed #14acac; 
grid-column: 1 / 2;
grid-row: 1 / 2; 
z-index: 2; 
}
</style>

