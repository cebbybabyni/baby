document.addEventListener("DOMContentLoaded", function () {

//////////////////// TYPING INTRO ////////////////////
const text="To: Jeam Abby Keith Panganiban 😊";
let i=0;
function type(){
 if(i<text.length){
   document.getElementById("typing").innerHTML+=text.charAt(i);
   i++;
   setTimeout(type,50);
 }}
type();

//////////////////// HEART BURST CLICK ////////////////////
document.addEventListener("click", function(e){
for(let i=0;i<10;i++){
let heart=document.createElement("div");
heart.innerHTML=["💖","💗","💕","💘","❤️"][Math.floor(Math.random()*5)];
heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.fontSize=(Math.random()*10+18)+"px";
heart.style.pointerEvents="none";
document.body.appendChild(heart);

const x=(Math.random()-0.5)*200;
const y=(Math.random()-0.5)*200;

heart.animate([
{transform:"translate(0,0) scale(1)",opacity:1},
{transform:`translate(${x}px,${y}px) scale(1.8)`,opacity:0}
],{duration:1200,easing:"ease-out"});

setTimeout(()=>heart.remove(),1200);
}
});

//////////////////// FLOATING HEARTS ////////////////////
setInterval(()=>{
let heart=document.createElement("div");
heart.innerHTML=["💖","💕","💗","💘"][Math.floor(Math.random()*4)];
heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-30px";
heart.style.fontSize=(Math.random()*12+16)+"px";
heart.style.opacity="0.6";
heart.style.pointerEvents="none";
document.body.appendChild(heart);

heart.animate([
{ transform:"translateY(0)", opacity:0.6 },
{ transform:"translateY(-120vh)", opacity:0 }
],{duration:9000,easing:"linear"});

setTimeout(()=>heart.remove(),9000);
},1200);

//////////////////// BUTTONS ////////////////////
const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");

// 💖 FADE SWITCH QUESTION
setTimeout(() => {
  const first = document.getElementById("ginayumaQuestion");
  const second = document.getElementById("valentineQuestion");
  if(first && second){
    first.classList.remove("show");
    setTimeout(()=>second.classList.add("show"),1200);
  }
},2500);

const msgs=[
"sure na yarn, baby? 🥺","aww, that hurts my feelings, baby 😭",
"it's a love story, baby, just say, YES 🥰","oops, wrong button nganiii 🙄",
"say YES to heaven 😇","nye nyee nyeee 🤪","baby, be serious pls 😤",
"i love you, my princess 😍","stappph playing, baby 😆",
"click YES na garod 😌💕","yieee, enjoy yarn syaaa 😚",
"halla si oa hahaha 🤣","how are u so pretty, baby 🥹",
"baby, please? 🥺👉👈","wilab na wilab sayo 😝"
];

function move(){
noBtn.innerText=msgs[Math.floor(Math.random()*msgs.length)];
const x=Math.random()*(window.innerWidth-noBtn.offsetWidth-20);
const y=Math.random()*(window.innerHeight-noBtn.offsetHeight-20);
noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";
}
noBtn.onmouseover=move;
noBtn.onclick=move;

//////////////////// YES PAGE ////////////////////
yesBtn.onclick=()=>{

const music=new Audio("music.mp3");
music.loop=true;
music.volume=0;
music.play().then(()=>{
 let volume=0;
 const fade=setInterval(()=>{
   if(volume<0.6){volume+=0.03;music.volume=volume;}
   else clearInterval(fade);
 },300);
}).catch(()=>{document.addEventListener("click",()=>music.play(),{once:true});});

document.body.innerHTML=`
<div style="padding:30px">  
<img src="https://media3.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" style="width:320px;max-width:85vw;border-radius:20px;margin-bottom:15px;">  
<h1 id="yesText" style="font-family:Pacifico;">She said YES gaizzz!!! 💕</h1>  
<p id="loveMsg"></p>  
</div>`;

const msg="You just made me the happiest person alive. I can't wait to spend Valentine's Day with you 🌹 You're stuck with me now 😌💖";
let j=0;
function typeLove(){
 if(j<msg.length){
   document.getElementById("loveMsg").innerHTML+=msg.charAt(j);
   j++; setTimeout(typeLove,40);
 }}
typeLove();

setInterval(()=>{
 const centerX=Math.random()*window.innerWidth;
 const centerY=Math.random()*window.innerHeight*0.8;
 for(let i=0;i<20;i++){
  let heart=document.createElement("div");
  heart.innerHTML=["💓","💕","💗","💞","💖"][Math.floor(Math.random()*5)];
  heart.style.position="fixed";
  heart.style.left=centerX+"px";
  heart.style.top=centerY+"px";
  heart.style.fontSize="22px";
  document.body.appendChild(heart);
  const angle=Math.random()*2*Math.PI;
  const distance=Math.random()*200+50;
  const x=Math.cos(angle)*distance;
  const y=Math.sin(angle)*distance;
  heart.animate([
   {transform:"translate(0,0)",opacity:1},
   {transform:`translate(${x}px,${y}px) scale(1.6)`,opacity:0}
  ],{duration:1400});
  setTimeout(()=>heart.remove(),1400);
 }
},2000);

};

//////////////////// EASTER EGG LETTER ////////////////////
let letterOpen=false;
let taps=0;

const letter=document.createElement("div");
letter.style.position="fixed";
letter.style.inset="0";
letter.style.background="rgba(0,0,0,.65)";
letter.style.backdropFilter="blur(6px)";
letter.style.display="none";
letter.style.zIndex="99999";
letter.style.padding="20px";
letter.style.justifyContent="center";
letter.style.alignItems="center";

letter.innerHTML=`... YOUR FULL LETTER HERE (unchanged) ...`;
document.body.appendChild(letter);

function spawnPetal(){ if(!letterOpen) return; }
function spawnButterfly(){}

document.addEventListener("click",function(e){
 if(e.target.id==="closeLetter"){letter.style.display="none";letterOpen=false;taps=0;return;}
 taps++;
 if(taps>=10){
  letter.style.display="flex";
  letterOpen=true;
  spawnButterfly();
  setInterval(spawnPetal,5000);
 }
});

});