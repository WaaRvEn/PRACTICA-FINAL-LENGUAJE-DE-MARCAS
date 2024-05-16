// TEMPLATE BOOTSTRAP W3SCHOOL

var mySidebar = document.getElementById("mySidebar");


var overlayBg = document.getElementById("myOverlay");


function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}


function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

// STEVEN NATA

function añadir(){

  let elemento = document.createElement("p");

  let nombre = document.getElementById("form");
  
  elemento.innerHTML = "<br> Bienvenido "+ form.value +". Estas son las reglas: <br> <br> Cada jugador elige un personaje misterioso, y luego haciendo preguntas que tengan como respuesta sí o no, intenta adivinar el personaje misterioso del otro jugador. Cuando piensa que saben quién es el personaje misterioso de su adversario, el jugador puede intentar adivinarlo." ;

  document.getElementById("nombre").appendChild(elemento); 
}

function desaparece(k){
  document.getElementById(k).style.display="none";

}

function elige(){

  var imagenes=[
    'https://static.wikia.nocookie.net/disneyypixar/images/4/4a/Ant-Man.png/revision/latest?cb=20190403174734&path-prefix=es',
    'https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c052.png',
    'https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c05d.png',
    'https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c058.png',
    'https://assets.stickpng.com/images/580b57fbd9996e24bc43c083.png',
    'https://images.vectorhq.com/images/previews/4a0/red-skull-psd-440481.png',
    'https://static.wikia.nocookie.net/disney/images/f/fa/Captain-America-AOU-Render.png/revision/latest?cb=20180420015558&path-prefix=es',
    'https://static.wikia.nocookie.net/disneyypixar/images/d/de/Dr_Strange.png/revision/latest?cb=20190426034812&path-prefix=es',
    'https://static.wikia.nocookie.net/death-battle-en-espanol/images/4/4f/Carnage.png/revision/latest?cb=20180725052518&path-prefix=es'];

  document.getElementById("tetoca").src = 
  imagenes[Math.floor(Math.random() * imagenes.length)];
}