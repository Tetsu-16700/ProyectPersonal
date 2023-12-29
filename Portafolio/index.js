// funcion que me aplia el estil a la opcion seleccionada en el menu
// quita el seleccionado
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  // desaparece el menu una vez que se ha seleccionado una
  // opcion en el modo responsive

  var x = document.getElementById("nav");
  x.className = "";
}
// funcion que muesta el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

// detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
// funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades() {
  var skills = documentgetElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoudingClientRect().top;
  if (distancia_skills >= 300) {
    // linea 215 de html cambiar segun corresponda el id de LENGUAJES QUE MANEJO Y CONOZCO
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("css").classList.add("barra-progreso2");
    document.getElementById("js").classList.add("barra-progreso3");
    document.getElementById("bd").classList.add("barra-progreso4");
    document.getElementById("ooo").classList.add("barra-progreso5");
  }
}
