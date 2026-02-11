
document.addEventListener("DOMContentLoaded", function () {

// ================= START MATTER PHYSICS =================
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Runner = Matter.Runner;

const engine = Engine.create();
const world = engine.world;

const canvas = document.getElementById("world");

const render = Render.create({
  canvas: canvas,
  engine: engine,
  options:{
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes:false,
    background:"transparent"
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// ground so hearts bounce
const ground = Bodies.rectangle(
  window.innerWidth/2,
  window.innerHeight + 60,
  window.innerWidth,
  120,
  { isStatic:true }
);
World.add(world, ground);

// spawn physics heart
function spawnHeart(x,y){
 const heart = Bodies.circle(x, y, 15,{
  restitution:0.9,
  render:{
   sprite:{
    texture:"https://i.imgur.com/Qp9Z1Zm.png",
    xScale:0.08,
    yScale:0.08
   }
  }
 });
 World.add(world, heart);
}

// typing intro
const text="To: Jeam Abby Keith Panganiban 😊";
let i=0;
function type(){ if(i<text.length){document.getElementById("typing").innerHTML+=text.charAt(i); i++; setTimeout(type,50);} }
type();

// physics hearts when clicking anywhere 💖
document.addEventListener("click", function(e){
  for(let i=0;i<6;i++){
    spawnHeart(e.clientX, e.clientY);
  }
});

// 💖 Slow floating hearts in background
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
  ],{
    duration:9000,   // slow movement
    easing:"linear"
  });

  setTimeout(()=>heart.remove(),9000);
},1200); // new heart every 1.2 sec

// runaway NO button
const noBtn=document.getElementById("noBtn");
const msgs=["sure na yarn, baby? 🥺","aww, that hurts my feelings, baby 😭","it's a love story, baby, just say, YES 🥰","oops, wrong button nganiii 🙄","say YES to heaven 😇","nye nyee nyeee 🤪","baby, be serious pls 😤","i love you, my princess 😍","stappph playing, baby 😆","click YES na garod 😌💕","yieee, enjoy yarn syaaa 😚","halla si oa hahaha 🤣","how are u so pretty, baby 🥹","baby, please? 🥺👉👈","wilab na wilab sayo 😝"];

function move(){

  // change text FIRST so width updates
  noBtn.innerText = msgs[Math.floor(Math.random()*msgs.length)];

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const x = Math.random() * (window.innerWidth - btnW - 20);
  const y = Math.random() * (window.innerHeight - btnH - 20);

  noBtn.style.position="fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top  = y + "px";
}
noBtn.onmouseover=move;
noBtn.onclick=move;

// YES click message + confetti
document.getElementById("yesBtn").onclick=()=>{

// 📳 vibration
if(navigator.vibrate) navigator.vibrate([200,100,200,100,400]);

document.body.innerHTML=`
<div style="padding:30px">

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhia3UwN3BrOWVtczloajJycWFkbWY3dnBha2plcGxlb3BxNjhsNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
 style="width:320px;max-width:85vw;border-radius:20px;margin-bottom:15px;box-shadow:0 5px 15px rgba(0,0,0,.2);">

<h1 id="yesText" style="font-family:Pacifico;">She said YES gaizzz!!! 💕</h1>
<p id="loveMsg"></p>
</div>`;

// 💌 typing love message
const msg="You just made me the happiest person alive. I can't wait to spend Valentine's Day with you 🌹 You're stuck with me now 😌💖";
let j=0;
function typeLove(){
 if(j<msg.length){
  document.getElementById("loveMsg").innerHTML+=msg.charAt(j);
  j++;
  setTimeout(typeLove,40);
 }
}
typeLove();

const music = new Audio("music.mp3");
music.loop = true;
music.volume = 0;
music.play();

let volume = 0;
const fade = setInterval(()=>{
  if(volume < 0.6){
    volume += 0.03;
    music.volume = volume;
  } else {
    clearInterval(fade);
  }
},300);

// MASSIVE PHYSICS HEART CELEBRATION 💥
for(let i=0;i<80;i++){
 spawnHeart(Math.random()*window.innerWidth, -50);
}

 // random falling physics hearts forever 💕
setInterval(()=>{
 spawnHeart(Math.random()*window.innerWidth, -30);
}, 500);
