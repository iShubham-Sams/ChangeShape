var cur ="square"
let shape=['trangle-right','trangle-left','oval','inner-cir','rectangle','square']
var color =['brown','lime','bronze','crimson','wheat']


document.getElementById('shape').onclick=function (){
    var rand=shape[Math.floor(Math.random()*shape.length)]
    document.getElementById(cur).setAttribute("id",rand);
    cur=rand;
      }

document.getElementById('color').addEventListener('click',function rand(){
let randColor =color[Math.floor(Math.random()*color.length)]
document.getElementById('block').style.backgroundColor=randColor;
})




