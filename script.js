document.addEventListener("DOMContentLoaded", function () {

// typing intro
const text="To: Jeam Abby Keith Panganiban 😊";
let i=0;
function type(){ if(i<text.length){document.getElementById("typing").innerHTML+=text.charAt(i); i++; setTimeout(type,50);} }
type();


// 💖 hearts burst anywhere clicked
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


// floating hearts background
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


// runaway NO button
const noBtn=document.getElementById("noBtn");
const msgs=["sure na yarn, baby? 🥺","aww, that hurts my feelings, baby 😭","it's a love story, baby, just say, YES 🥰","oops, wrong button nganiii 🙄","say YES to heaven 😇","nye nyee nyeee 🤪","baby, be serious pls 😤","i love you, my princess 😍","stappph playing, baby 😆","click YES na garod 😌💕","yieee, enjoy yarn syaaa 😚","halla si oa hahaha 🤣","how are u so pretty, baby 🥹","baby, please? 🥺👉👈","wilab na wilab sayo 😝"];

function move(){
noBtn.innerText=msgs[Math.floor(Math.random()*msgs.length)];
const btnW=noBtn.offsetWidth;
const btnH=noBtn.offsetHeight;
const x=Math.random()*(window.innerWidth-btnW-20);
const y=Math.random()*(window.innerHeight-btnH-20);
noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";
}
noBtn.onmouseover=move;
noBtn.onclick=move;


// 💚 YES PAGE
document.getElementById("yesBtn").onclick=()=>{

if(navigator.vibrate) navigator.vibrate([200,100,200,100,400]);

document.body.innerHTML=`
<div style="padding:30px">  
<img src="https://media3.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" style="width:320px;max-width:85vw;border-radius:20px;margin-bottom:15px;">  
<h1 id="yesText" style="font-family:Pacifico;">She said YES gaizzz!!! 💕</h1>  
<p id="loveMsg"></p>  
</div>`;

const msg="You just made me the happiest person alive. I can't wait to spend Valentine's Day with you 🌹 You're stuck with me now 😌💖";
let j=0;
function typeLove(){ if(j<msg.length){document.getElementById("loveMsg").innerHTML+=msg.charAt(j); j++; setTimeout(typeLove,40);} }
typeLove();

const music=new Audio("music.mp3");
music.loop=true; music.volume=0; music.play();
let volume=0;
const fade=setInterval(()=>{ if(volume<0.6){volume+=0.03;music.volume=volume;} else clearInterval(fade); },300);


// 💥 heart bursts on YES page
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
],{duration:1400,easing:"ease-out"});
setTimeout(()=>heart.remove(),1400);
}},1200);


// 💌 EASTER EGG LETTER
const letter=document.createElement("div");
letter.style.position="fixed";
letter.style.inset="0";
letter.style.background="rgba(0,0,0,.65)";
letter.style.backdropFilter="blur(6px)";
letter.style.display="none";
letter.style.zIndex="99999";
letter.style.padding="20px";
letter.style.justifyContent="center";
letter.style.alignItems= window.innerWidth>=768 ? "center":"flex-end";
letter.style.overflowY="auto";

letter.innerHTML=`
<div id="letterCard" style="position:relative; z-index:100000; background:#fffafc;width:92%;max-width:420px;max-height:82vh;margin:auto;padding:26px 22px 24px;font-family:Poppins;line-height:1.7;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.25);border-radius:26px;text-align:justify;text-justify:inter-word;">
<h2 style="color:#ff4fa3;text-align:center;margin-bottom:22px;font-size:24px;">Hallu, babyyy! 💖</h2>
<p>So ayun, sobrang HS-coded nito for me baby. Ang nostalgic niya sobra. Naluluha nga ako habang ginagawa ko to e, si OA na naman ako hahaha 😭🤣</p>
<p>Ito pala yung sinasabi ko baby na may na-realize ako. Dito talaga nagsimula yung interest ko sa computers. Dati akala ko puro games lang siya, pero hindi pala. This was my first love. Ito yung bumuhay sakin noon, at dito ko rin nakuha yung first paycheck ko.</p>
<p>Kung ano man narating ko ngayon, nagsimula lahat sa basic HTML na ’to 🥹</p>
<p>Kaya thank you talaga baby. Thank you sa buhay mo, at thank you rin sa dad mo na hindi ka niya pinutok sa tiyan ng mom mo 🤣</p>
<p>Thank you kasi dumating ka sa buhay ko. Thank you kasi kahit nabuburnout ako sa work, nung naalala ko ’to parang gusto ko pang mag-extend ng mga five years eme haha. Thank you, binuhay mo ako. Thank you for making me do this kahit hindi mo naman ako inutusan.</p>
<p style="font-weight:bold;margin-top:18px;">I love you, my baby abby! 😚😚😚💗</p>
<p style="margin-top:10px;">Love, 😌<br>Cebby — baliw na baliw pa rin sayo</p>
<button id="closeLetter" style="margin-top:15px;width:100%;padding:12px;border:none;border-radius:30px;background:#ff4fa3;color:white;">Close 💌</button>
</div>`;
document.body.appendChild(letter);


// 🌸 FULL SCREEN FALLING PETALS
function spawnPetal(){
 if(!letterOpen) return;
 const petal=document.createElement("div");
 petal.innerHTML="🌸";
 petal.style.position="fixed";
 petal.style.top="-40px";
 petal.style.left=Math.random()*100+"vw";
 petal.style.fontSize=(Math.random()*10+18)+"px";
 petal.style.pointerEvents="none";
 petal.style.zIndex="99998";
 document.body.appendChild(petal);
 petal.animate([
  { transform:"translate(0,0) rotate(0deg)", opacity:1 },
  { transform:`translate(${(Math.random()*200)-100}px,110vh) rotate(${Math.random()*360}deg)`, opacity:0 }
 ],{ duration:9000, easing:"linear" });
 setTimeout(()=>petal.remove(),9000);
}


// 🦋 butterflies
function flyRealButterfly(){
 const card=document.getElementById("letterCard");
 if(!card) return;
 const butterfly=document.createElement("video");
 butterfly.src="butterfly.webm";
 butterfly.autoplay=true; butterfly.muted=true; butterfly.playsInline=true;
 const colors=[0,40,90,140,190,230,280,320];
 const hue=colors[Math.floor(Math.random()*colors.length)];
 butterfly.style.position="absolute";
 butterfly.style.width="230px";
 butterfly.style.pointerEvents="none";
 butterfly.style.background="transparent";
 butterfly.style.objectFit="contain";
 butterfly.style.filter=`hue-rotate(${hue}deg) saturate(260%) contrast(115%)`;
 butterfly.style.left=Math.random()*70+"%";
 butterfly.style.top=Math.random()*70+"%";
 card.appendChild(butterfly);
 butterfly.animate([{transform:"translate(0,0)"},{transform:`translate(${(Math.random()*80)-40}px, ${(Math.random()*80)-40}px)`}],{duration:9000});
 setTimeout(()=>butterfly.remove(),9000);
}


// ⭐ easter egg tap logic
let taps=0;
let letterOpen=false;

document.addEventListener("click", function(e){
 if(e.target && e.target.id==="closeLetter"){ letter.style.display="none"; letterOpen=false; taps=0; return; }
 if(letterOpen) return;
 taps++;
 if(taps>=10){
  letter.style.display="flex";
  letterOpen=true;
  flyRealButterfly();
  setInterval(flyRealButterfly,9000);
  setInterval(spawnPetal,400);
 }
});

};

});