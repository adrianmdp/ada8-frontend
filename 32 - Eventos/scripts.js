const miBoton = document.getElementById('mi-boton');

const mostrarTextoEnConsola = () => {

    console.log('Hola mundo!');

}

// miBoton.addEventListener('click', mostrarTextoEnConsola);


const miFuncion1 = () => {
    
    console.log('Estoy en la función 1');

}

const miFuncion2 = (event, miCallback) => {

    if(event === 'click') {
        console.log('Este es el evento click que se produjo');
        miCallback();
    } else {
        console.log('Otro evento');
    }

}

miFuncion2('keyup', miFuncion1);


miBoton.addEventListener('click', () => {

    const suma = 4 + 5;
    console.log(suma);

})