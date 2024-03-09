document.addEventListener("DOMContentLoaded", function() {
    var gradient = new Gradient();
    gradient.initGradient("#canvas");
  });

//////////

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0"; 
}
function closemenu(){
  sidemenu.style.right = "-200px"; 
}

//////////

VanillaTilt.init(document.querySelectorAll(".glass-card img"), {
  max: 15,
  speed: 400
});

//////////

var loader = document.getElementById("loading-screen");
window.addEventListener("load", function(){
  loader.style.display = "none";
})