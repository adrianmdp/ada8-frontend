
const miControl = document.getElementById('name-control');
const emailControl = document.getElementById('email');
const miFormulario = document.getElementById('my-form');

const mostrarEnConsola = (event) => {

    console.log(event.target.value);

}

const mostrarEnConsolaSubmit = (event) => {

    event.preventDefault();

    console.log(event.target.name.value);
    console.log(event.target.email.value);

    console.log('se produjo un evento');

}

// focus - Se hace foco sobre un elemento cuando se le clickea y queda pendiente de alguna acción.

// miControl.addEventListener('focus', mostrarEnConsola);

// blur - Cuando se saca el foco de un control de formulario.
// miControl.addEventListener('blur', mostrarEnConsola);

// change - Cuando se saca el foco de un control pero su contenido cambió

// emailControl.addEventListener('change', mostrarEnConsola);

// keyup - Cuando se levanta una tecla. también podriamos probar cuando se aprieta

// emailControl.addEventListener('keyup', mostrarEnConsola);

// input

// miControl.addEventListener('input', mostrarEnConsola);

// submit

miFormulario.addEventListener('submit', mostrarEnConsolaSubmit);

// value
// preventDefault
