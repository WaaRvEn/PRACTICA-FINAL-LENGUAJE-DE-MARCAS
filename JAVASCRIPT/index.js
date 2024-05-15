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

// STEVEN NATA QesQ

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