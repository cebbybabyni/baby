const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle{
  constructor(x,y,color){
    this.x=x;
    this.y=y;
    this.color=color;
    this.angle=Math.random()*Math.PI*2;
    this.speed=Math.random()*5+2;
    this.life=100;
  }

  update(){
    this.x+=Math.cos(this.angle)*this.speed;
    this.y+=Math.sin(this.angle)*this.speed;
    this.speed*=0.96;
    this.life--;
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,2,0,Math.PI*2);
    ctx.fillStyle=this.color;
    ctx.fill();
  }
}

let particles=[];

function createFirework(){
  const x=Math.random()*canvas.width;
  const y=Math.random()*canvas.height/2;
  const colors=["#ff4d6d","#ffd60a","#00f5d4","#ff85a1","#c77dff"];

  for(let i=0;i<80;i++){
    particles.push(new Particle(x,y,colors[Math.floor(Math.random()*colors.length)]));
  }
}

// launch fireworks repeatedly
setInterval(createFirework,1200);

function animate(){
  ctx.fillStyle="rgba(0,0,0,0.15)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  particles.forEach((p,index)=>{
    p.update();
    p.draw();
    if(p.life<=0) particles.splice(index,1);
  });

  requestAnimationFrame(animate);
}

animate();