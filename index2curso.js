window.onload = inicio;
// variable wardar suma numeros cada recarga
let sumaCorrecta, a, b;

function inicio() {
  preguntar();
  document.querySelector("button").onclick = comprobar;
  document.querySelector(".tres").onkeydown = teclado;
}

function teclado(e) {
  //console.log(e)
  let tecla = e.key;
  //alert(tecla) me falla mirar
  if (tecla == "Enter") {
    comprobar();
  }
}

function comprobar() {
  let c = Number(document.querySelector(".tres").value);

  if (c == sumaCorrecta) {
      document.querySelector(".resultados").insertAdjacentHTML("beforeend","<div class='verde'>Es correcto</div>");
} else {

    document
      .querySelector(".resultados").insertAdjacentHTML("beforeend",`<div class="rojo">No es correcto: El resultado de ${a} + ${b} es ${sumaCorrecta}</div>`);
    }
    preguntar();
}

function preguntar() {
  a = Math.floor(Math.random() * 10);
  b = Math.floor(Math.random() * 10);
  

  //variable sume dos numeros:
  sumaCorrecta = a + b;
  //escribir valores dentro del input
  document.querySelector(".uno").value = a;
  document.querySelector(".dos").value = b;
  //le digo que vacie input
  document.querySelector(".tres").value = "";
  //mete cursor dendtro despues puldsar boton
  document.querySelector(".tres").focus();
  document.querySelector("d").focus();

}
