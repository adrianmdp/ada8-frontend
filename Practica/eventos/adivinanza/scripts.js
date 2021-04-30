// Crear un documento html con una adivinanza (o una pregunta) y
// 3 botones con posibles respuestas. Si se clickea la respuesta correcta,
// se debe mostrar en el documento un texto que lo indique
// (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón
// seleccionado debe ponerse con un color de fondo verde.
// Si se clickea una respuesta incorrecta, se debe mostrar
// en el documento un texto que lo indique (por ejemplo:
// ¡Le erraste!) y mostrar el botón con la respuesta correcta
// con un color de fondo verde y los otros dos con un color
// de fondo rojo.

const buttons = document.getElementsByClassName('btn');
const buttonsReset = document.getElementById('reset');

const respuesta = document.getElementById("respuesta");

const evaluar = (e) => {

    const button = e.target
    const opcion = button.getAttribute("data-opcion")

    if(opcion === "true") {
        button.style.backgroundColor = "green"
        button.style.color = "white"
        respuesta.innerText = "¡Correcto!"
    }else{
        for(let i = 0; i < buttons.length; i++) {
            if(buttons[i].getAttribute('data-opcion') === 'true') {
                buttons[i].style.backgroundColor = "green"
                buttons[i].style.color = "white" 
            } else {
                buttons[i].style.backgroundColor = "red"
                buttons[i].style.color = "white"     
            }
        }
        respuesta.innerText = "¡Le erraste!"
    }
}

const reset = () => {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style = '';
        respuesta.innerText = '';
    }

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", evaluar)
}


buttonsReset.addEventListener('click', reset);
