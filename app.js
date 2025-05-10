let game_seq=[];
let user_seq=[];
let started=false;
let level =0;
let h2=document.querySelector("h2");
let color=["red","yellow","green","purple"]


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup()
recent();
    }
    
})

function game_flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
btn.classList.remove("flash");
    },250);
    
}

function levelup(){
    user_seq=[]
    level++;
h2.innerText=`Level ${level}`;

let random=Math.floor(Math.random()*4  );
let random_color=color[random];
let rand_btn=document.querySelector(`.${random_color}`);;
// console.log(random);
// console.log(random_color);
// console.log(rand_btn);
game_flash(rand_btn);
game_seq.push(random_color);
console.log(`Game sequence is ${game_seq}`)

}

function user_flash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
btn.classList.remove("userflash");
    },250);
    
}

 function check_ans(idx){
// console.log(`current level is ${level}`)

if(user_seq[idx]==game_seq[idx]){
   if(user_seq.length==game_seq.length){
   setTimeout(levelup,1000)
   }
   
   }
   else{
document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="black";
},200)
h2.innerHTML=`Game Over!!<b> Your score was ${level} </b> <br>Press any key to start the game.`;
reset();


}}



function btnpressed(){
    // console.log(this)
let btn=this;
user_flash(btn)
user_color=btn.getAttribute("id")
// console.log(user_color)
user_seq.push(user_color);
console.log(`User sequence is  ${user_seq}`)
check_ans(user_seq.length-1); 
}


let albtns=document.querySelectorAll(".btn")
function recent(){
for(btn of albtns){
    btn.addEventListener("click",btnpressed)
}}
function reset(){
    level=0;
    started=false;
    user_seq=[];
    game_seq=[];
}




