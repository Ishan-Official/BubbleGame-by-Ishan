 var timer = 6;
 var score = 0;
 var hitrn =0;
 function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
 }
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn ;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    clickednum = Number(dets.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        getNewHit();
        makeNewBubble();
    }
})

function makeNewBubble(){
    var clutter = "";

for(var i=1; i<=102; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble"> ${rn} </div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
     var timerint = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timervalue").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
            clearInterval(timerint);
        }
    },1000);
}

getNewHit();
runTimer();
makeNewBubble();
