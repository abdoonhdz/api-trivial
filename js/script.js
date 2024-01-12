let API = "https://opentdb.com/api.php?amount=10";

let preguntas = [];
var respuesta_rellena = 0;
let numPregunta = 0;
let modalModal = document.getElementById("modalModal");
let modalTitulo = document.getElementById("modalTitulo");
let modalPregunta = document.getElementById("modalPregunta");
let respuesta_1 = document.getElementById("respuesta_1");
let respuesta_2 = document.getElementById("respuesta_2");
let respuesta_3 = document.getElementById("respuesta_3");
let respuesta_4 = document.getElementById("respuesta_4");
const infoRespuesta = document.getElementById("infoRespuesta");

generarPreguntas();
async function generarPreguntas() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      data.results.forEach(pregunta => {
        console.log(pregunta)
        preguntas.push(pregunta);
      });
      console.log(preguntas)
    });
}

siguientePregunta = function () {
  alert("test");
}

generarPregunta = function () {
  respuesta_rellena = 0;
  modalTitulo.innerHTML = preguntas[numPregunta].category;

  // Generar un número aleatorio entre 1 y 4
  var numeroAleatorio = Math.floor(Math.random() * 4) + 1;

  document.getElementById(`respuesta_${numeroAleatorio}`).innerHTML = preguntas[numPregunta].correct_answer;
  respuesta_rellena = numeroAleatorio;

  modalPregunta.innerHTML = preguntas[numPregunta].question;

  var respuesta_incorrecta = 0;
  // Bucle for que se ejecuta 4 veces
  for (var i = 1; i <= 4; i++) {
    if (i != respuesta_rellena) {
      document.getElementById(`respuesta_${i}`).innerHTML = preguntas[numPregunta].incorrect_answers[respuesta_incorrecta];
      respuesta_incorrecta++;
    }
  }

  numPregunta++;
}

comprobarRespuesta = function(id){

  if(id == respuesta_rellena){
    infoRespuesta.innerHTML = '<h3 class=" text-center"><b class="text-success">¡Respuesta correcta!</b></h3>';
  } else {
    infoRespuesta.innerHTML = '<h3 class=" text-center"><b class="text-danger">¡Respuesta incorrecta!</b></h3>';
  }

}