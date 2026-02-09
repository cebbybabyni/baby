
document.addEventListener("DOMContentLoaded", function () {

// typing intro
const text="To: Jeam Abby Keith Panganiban 😊";
let i=0;
function type(){ if(i<text.length){document.getElementById("typing").innerHTML+=text.charAt(i); i++; setTimeout(type,50);} }
type();

// hearts burst anywhere clicked
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
const msgs=["sure na yarn, baby? 🥺","aww, that hurts my feelings, baby 😭","it's a love story, baby, just say, YES 🥰","oops wrong button nganiii 😂","say YES to heaven 😇","nye nyee nyeee 🤪","baby, be serious pls 😤","i love you, baby 🥰","stop playing, baby 😆","click YES na garod 😌💕","say YES to me 😭","halla si oa hahaha 🤣","arti artiii nito 😤","baby, please? 🥺👉👈","wilablabbb 😝"];

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
<div style="
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:30px;
">

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhia3UwN3BrOWVtczloajJycWFkbWY3dnBha2plcGxlb3BxNjhsNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
 style="width:320px;max-width:85vw;border-radius:20px;margin-bottom:15px;box-shadow:0 5px 15px rgba(0,0,0,.2);">

<h1 id="yesText" style="font-family:Pacifico;">She said YES gaizzz!!! 💕</h1>

<p id="loveMsg"></p>

<p style="margin-top:25px">Tap the envelope 💌</p>

<div class="envelopeWrapper" onclick="openEnvelope()">
  <div class="envelope">
      <div class="front"></div>
      <div class="flap" id="flap"></div>
  </div>

  <div class="letter" id="letter">
      <h2>To my Baby 💕</h2>
      <p>You make my world brighter every day.</p>
      <p>I promise to love you forever 💖</p>

      <p class="secret" id="secretMsg">
      ✨ Secret message ✨  
      You are my forever person 😭💖
      </p>
  </div>
</div>

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

// 💖 heart rain
for(let i=0;i<200;i++){
 let c=document.createElement("div");
 c.innerHTML="💖";
 c.style.position="fixed";
 c.style.left=Math.random()*100+"vw";
 c.style.top="-20px";
 c.style.fontSize="24px";
 c.style.animation="float 4s linear forwards";
 document.body.appendChild(c);
}

 // 💥 RANDOM HEART BURSTS
setInterval(()=>{
  const centerX = Math.random()*window.innerWidth;
  const centerY = Math.random()*window.innerHeight*0.8;

  for(let i=0;i<20;i++){
    let heart=document.createElement("div");
    heart.innerHTML=["💓","💕","💗","💞","💖"][Math.floor(Math.random()*5)];
    heart.style.position="fixed";
    heart.style.left=centerX+"px";
    heart.style.top=centerY+"px";
    heart.style.fontSize="22px";
    heart.style.pointerEvents="none";
    document.body.appendChild(heart);

    const angle=Math.random()*2*Math.PI;
    const distance=Math.random()*200+50;
    const x=Math.cos(angle)*distance;
    const y=Math.sin(angle)*distance;

    heart.animate([
      {transform:"translate(0,0)",opacity:1},
      {transform:`translate(${x}px,${y}px) scale(1.6)`,opacity:0}
    ],{
      duration:1400,
      easing:"ease-out"
    });

    setTimeout(()=>heart.remove(),1400);
  }

},1200); 
};

});

function openYesPage(){
  document.getElementById("mainPage").style.display="none";
  document.getElementById("yesPage").style.display="block";
}

function openEnvelope(){
  document.getElementById("flap").classList.add("openFlap");
  document.getElementById("letter").classList.add("pullLetter");

  setTimeout(()=>{
    document.getElementById("secretMsg").classList.add("showSecret");
  },1200);
}