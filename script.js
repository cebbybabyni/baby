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
duration:9000,
easing:"linear"
});

setTimeout(()=>heart.remove(),9000);
},1200);


// 😈 runaway NO button
const noBtn=document.getElementById("noBtn");
const msgs=["sure na yarn, baby? 🥺","aww, that hurts my feelings, baby 😭","it's a love story, baby, just say, YES 🥰","oops, wrong button nganiii 🙄","say YES to heaven 😇","nye nyee nyeee 🤪","baby, be serious pls 😤","i love you, my princess 😍","stappph playing, baby 😆","click YES na garod 😌💕","yieee, enjoy yarn syaaa 😚","halla si oa hahaha 🤣","how are u so pretty, baby 🥹","baby, please? 🥺👉👈","wilab na wilab sayo 😝"];

function move(){
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


// 💚 YES BUTTON PAGE
document.getElementById("yesBtn").onclick=()=>{

if(navigator.vibrate) navigator.vibrate([200,100,200,100,400]);

document.body.innerHTML=`

<div style="padding:30px">  
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhia3UwN3BrOWVtczloajJycWFkbWY3dnBha2plcGxlb3BxNjhsNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"  
style="width:320px;max-width:85vw;border-radius:20px;margin-bottom:15px;box-shadow:0 5px 15px rgba(0,0,0,.2);">

<h1 id="yesText" style="font-family:Pacifico;">She said YES gaizzz!!! 💕</h1>  
<p id="loveMsg"></p>  
</div>`;

// typing love message
const msg="You just made me the happiest person alive. I can't wait to spend Valentine's Day with you 🌹 You're stuck with me now 😌💖";
let j=0;
function typeLove(){
if(j<msg.length){
document.getElementById("loveMsg").innerHTML+=msg.charAt(j);
j++;
setTimeout(typeLove,40);
}}
typeLove();


// 🎵 MUSIC
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


// 💥 RANDOM HEART BURSTS (FIXED)
setInterval(()=>{
const centerX = Math.random()*window.innerWidth;
const centerY = Math.random() * window.innerHeight * 0.8;

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
],{duration:1400,easing:"ease-out"});  

setTimeout(()=>heart.remove(),1400);
}

},1200);


// 💌 SECRET LOVE LETTER
const letter = document.createElement("div");
letter.style.position = "fixed";
letter.style.inset = "0";
letter.style.background = "rgba(0,0,0,.75)";
letter.style.display = "none";
letter.style.justifyContent = "center";
letter.style.alignItems = "center";
letter.style.zIndex = "99999";

letter.innerHTML = `

<div style="background:#fffafc;max-width:420px;padding:35px;border-radius:20px;font-family:Poppins;line-height:1.6;">  
<h2 style="color:#ff4fa3;text-align:center">To Abby 💖</h2>  
<p>So ayun, sobrang HS-coded nito for me baby. Ang nostalgic niya sobra. Naluluha nga ako habang ginagawa ko to e, si OA na naman ako hahaha 😭🤣</p>  
<p>Ito pala yung sinasabi ko baby na may na-realize ako. Dito talaga nagsimula yung interest ko sa computers. Dati akala ko puro games lang siya, pero hindi pala. This was my first love. Ito yung bumuhay sakin noon, at dito ko rin nakuha yung first paycheck ko.</p>  
<p>Kung ano man narating ko ngayon, nagsimula lahat sa basic HTML na ’to 🥹</p>  
<p>Kaya thank you talaga baby. Thank you sa buhay mo, at thank you rin sa dad mo na hindi ka niya pinutok sa tiyan ng mom mo 🤣</p>  
<p>Thank you kasi dumating ka sa buhay ko. Thank you kasi kahit nabuburnout ako sa work, nung naalala ko ’to parang gusto ko pang mag-extend ng mga five years eme haha. Thank you, binuhay mo ako. Thank you for making me do this kahit hindi mo naman ako inutusan.</p>  
<p style="font-weight:bold;text-align:center">I love you baby 💗<br>Mwaaaah mwaaah mwah</p>  
<p style="text-align:right">Swerte mo naman 😌<br>Ikaw ang kauna-unahang ginawan ko nito hahaha</p>  
<button onclick="this.parentElement.parentElement.style.display='none'" style="margin-top:15px;width:100%;padding:12px;border:none;border-radius:30px;background:#ff4fa3;color:white;">Close 💌</button>
</div>`;

document.body.appendChild(letter);

let secretTaps = 0;
setTimeout(()=>{
document.addEventListener("click", ()=>{
secretTaps++;
if(secretTaps >= 5){
letter.style.display = "flex";
}
});
},1000);

};

});