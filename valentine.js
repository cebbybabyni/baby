// 💘 GINAYUMA ➜ VALENTINE TRANSITION (clean version)
document.addEventListener("DOMContentLoaded", function(){

  const typing = document.getElementById("typing");
  const textEl = document.getElementById("ginayumaText");

  if(!typing || !textEl) return;

  // wait until typing intro finishes
  const watcher = setInterval(function(){

    // typing text length when finished ≈ 30 characters
    if(typing.textContent.length < 30) return;

    clearInterval(watcher);

    // romantic pause after typing
    setTimeout(function(){

      textEl.style.opacity = "0";
      textEl.style.transform = "scale(.9)";

      setTimeout(function(){
        textEl.innerHTML = "Will you be my Valentine? 💖";
        textEl.style.opacity = "1";
        textEl.style.transform = "scale(1)";
      },800);

    },1500);

  },200);

});