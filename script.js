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

// 🎵 MUSIC (mobile safe)
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


//////////////// RANDOM HEART BURSTS ON YES PAGE ////////////////////
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


//////////////////// CREATE EASTER EGG LETTER ////////////////////
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

letter.innerHTML=`
<div id="letterCard" style="position:relative; overflow:hidden; background:#fffafc;width:92%;max-width:420px;max-height:82vh;overflow:auto;padding:26px;border-radius:26px;font-family:Poppins;line-height:1.7;text-align:justify;">

<h2 style="color:#ff4fa3;text-align:center;">Hallu, my babyyy! 💖</h2>

<p>So ayun… sobrang HS-coded nito for me baby. Ang nostalgic niya sobra. Naluluha nga ako habang ginagawa ko to e, si OA na naman ako hahaha 😭🤣</p>
<p>Ito pala yung sinasabi ko baby na may na-realize ako. Dito talaga nagsimula yung interest ko sa computers. Dati akala ko puro games lang siya… pero hindi pala. This was my first love. Ito yung bumuhay sakin noon, at dito ko rin nakuha yung first paycheck ko.</p>
<p>Kung ano man narating ko ngayon, nagsimula lahat sa basic HTML na to 🥹</p>
<p>Kaya thank you talaga baby. Thank you sa buhay mo, at thank you rin sa dad mo na hindi ka niya pinutok sa tiyan ng mom mo 🤣</p>
<p>Thank you kasi dumating ka sa buhay ko. Thank you kasi kahit nabuburnout ako sa work, nung naalala ko to parang gusto ko pang mag-extend ng mga five years eme haha.</p>
<p>Thank you… binuhay mo ako. Thank you for making me do this kahit hindi mo naman ako inutusan. Thank you for being my inspiration without even trying.</p>
<p>Sobrang mais ko na ba? HAHAHAHAHA OKI BYE NA GAROD!</p>
<p style="font-weight:bold;">I love you, my baby abby! 💗😚😚😚</p>
<p>Love,<br>Cebby — baliw na baliw pa rin sayo 😵‍💫</p>

<button id="closeLetter" style="margin-top:20px;width:100%;padding:12px;border:none;border-radius:30px;background:#ff4fa3;color:white;">Close 💌</button>
</div>`;
document.body.appendChild(letter);


//////////////// PERFECT LETTER-FIT PETALS ////////////////////
function spawnPetal(){

 if(!letterOpen) return;

 const card = document.getElementById("letterCard");
 if(!card) return;

 const cardHeight = card.scrollHeight; // full letter height

 const petal=document.createElement("div");
 petal.innerHTML="🌸";

 card.appendChild(petal);

 petal.style.position="absolute";
 petal.style.left=Math.random()*100+"%";
 petal.style.top="-40px";
 petal.style.fontSize=(Math.random()*6+18)+"px";
 petal.style.pointerEvents="none";
 petal.style.zIndex="0";

 const drift=(Math.random()*70)-35;   // soft left/right drift
 const rotate=Math.random()*720;

 /* ⭐ IMPORTANT FIX — stop inside letter */
 const fallDistance = cardHeight - 40;

 petal.animate([
   { transform:"translate(0,0) rotate(0deg)", opacity:0.95 },
   { transform:`translate(${drift}px,${fallDistance}px) rotate(${rotate}deg)`, opacity:0 }
 ],{
   duration:20000,
   easing:"linear"
 });

 setTimeout(()=>petal.remove(),20000);
}


//////////////// BUTTERFLY ////////////////////
function spawnButterfly(){
 if(document.querySelector(".butterfly")) return;
 const card=document.getElementById("letterCard");
 const b=document.createElement("video");
 b.src="butterfly.webm";
 b.autoplay=true; b.loop=true; b.muted=true;
 b.className="butterfly";
 b.style.position="absolute";
 b.style.width="200px";
 b.style.left=Math.random()*70+"%";
 b.style.top=Math.random()*70+"%";
 b.style.filter=`hue-rotate(${Math.random()*360}deg) saturate(200%)`;
 card.appendChild(b);
}


//////////////// OPEN LETTER AFTER 10 TAPS ////////////////////
let taps=0;
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

};
});
