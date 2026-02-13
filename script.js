document.addEventListener("DOMContentLoaded", function () {

// typing intro
const text="To: Jeam Abby Keith Panganiban 😊";
let i=0;
function type(){
 const el=document.getElementById("typing");
 if(!el) return;
 if(i<text.length){
   el.innerHTML+=text.charAt(i);
   i++;
   setTimeout(type,50);
 }}
type();


// 💖 hearts burst anywhere clicked (FIRST PAGE)
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


// runaway NO button
const noBtn=document.getElementById("noBtn");
if(noBtn){
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
}


// ⭐ GLOBAL CLICK HANDLER
document.addEventListener("click", function(e){

// 💚 YES BUTTON
if(e.target && e.target.id==="yesBtn"){

 document.body.innerHTML=`
 <div style="padding:30px">  
 <img src="https://media3.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" style="width:320px;max-width:85vw;border-radius:20px;margin-bottom:15px;">  
 <h1 id="yesText" style="font-family:Pacifico;">She said YES gaizzz!!! 💕</h1>  
 <p id="loveMsg"></p>  
 </div>`;

 // typing love message
 const msg="You just made me the happiest person alive. I can't wait to spend Valentine's Day with you 🌹 You're stuck with me now 😌💖";
 let j=0;
 function typeLove(){ if(j<msg.length){document.getElementById("loveMsg").innerHTML+=msg.charAt(j); j++; setTimeout(typeLove,40);} }
 typeLove();

 // music
 const music=new Audio("music.mp3");
 music.loop=true; music.volume=0; music.play();
 let volume=0;
 setInterval(()=>{ if(volume<0.6){volume+=0.03;music.volume=volume;} },300);

 // 💥 heart bursts on YES page
 function heartBurst(){
  const centerX=Math.random()*window.innerWidth;
  const centerY=Math.random()*window.innerHeight*0.8;
  for(let i=0;i<15;i++){
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
   heart.animate([{transform:"translate(0,0)"},{transform:`translate(${x}px,${y}px) scale(1.6)`,opacity:0}],{duration:1400});
   setTimeout(()=>heart.remove(),1400);
  }
 }
 setInterval(heartBurst,2000);

 // 💌 LETTER
 const letter=document.createElement("div");
 letter.style.position="fixed";
 letter.style.inset="0";
 letter.style.background="rgba(0,0,0,.65)";
 letter.style.backdropFilter="blur(6px)";
 letter.style.display="none";
 letter.style.zIndex="99999";
 letter.style.justifyContent="center";
 letter.style.alignItems="center";
 letter.innerHTML=`<div id="letterCard" style="position:relative; z-index:100001; background:#fffafc;width:92%;max-width:420px;padding:26px;border-radius:26px;font-family:Poppins;text-align:justify;">
 <h2 style="text-align:center;color:#ff4fa3">Hallu, babyyy! 💖</h2>
 <p>So ayun, sobrang HS-coded nito for me baby...</p>
 <button id="closeLetter" style="width:100%;padding:12px;border:none;border-radius:30px;background:#ff4fa3;color:white;">Close 💌</button>
 </div>`;
 document.body.appendChild(letter);

 // 🌈 COLORFUL BUTTERFLY
 function flyButterfly(){
  if(!letterOpen) return;
  const card=document.getElementById("letterCard");
  const butterfly=document.createElement("video");
  butterfly.src="butterfly.webm";
  butterfly.autoplay=true; butterfly.muted=true; butterfly.playsInline=true;

  const hue=Math.floor(Math.random()*360); // random color
  butterfly.style.filter=`hue-rotate(${hue}deg) saturate(260%) brightness(105%)`;

  butterfly.style.position="absolute";
  butterfly.style.width="230px";
  butterfly.style.left=Math.random()*70+"%";
  butterfly.style.top=Math.random()*70+"%";
  card.appendChild(butterfly);

  butterfly.animate([{transform:"translate(0,0)"},{transform:`translate(${(Math.random()*120)-60}px, ${(Math.random()*120)-60}px)`}],{duration:9000});
  setTimeout(()=>butterfly.remove(),9000);
 }

 let taps=0;
 let letterOpen=false;

 document.addEventListener("click", function(e){
  if(e.target && e.target.id==="closeLetter"){letter.style.display="none";letterOpen=false;taps=0;return;}
  if(letterOpen) return;
  taps++;
  if(taps>=10){
   letter.style.display="flex";
   letterOpen=true;
   flyButterfly();
   setInterval(flyButterfly,9000);
  }
 });

}

});

});