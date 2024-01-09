let API = `https://opentdb.com/api.php?amount=10`;

let preguntas =[];

generarPreguntas();
function generarPreguntas() {
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
