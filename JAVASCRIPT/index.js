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
      '../IMG/Ant-Man.webp',
      '../IMG/Iron-Man.png',
      '../IMG/Spider-Man.png',
      '../IMG/Bruja-Escarlata.png',
      '../IMG/Vision.png',
      '../IMG/Cráneo-Rojo.png',
      '../IMG/Capitan-America.webp',
      '../IMG/Dr-Strange.webp',
      '../IMG/Carnage.webp'];

  document.getElementById("tetoca").src = 
  imagenes[Math.floor(Math.random() * imagenes.length)];
}