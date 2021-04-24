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

});



// 
// Esta función esta a la espera de un llamado para mostrar en consola un mje.
const abrirPublicacion = () => {

    console.log('Esto abre la publicación');

}

// Esta función esta a la espera de un llamado para mostrar en consola un mje.
const darLike = (event) => {

    event.stopPropagation();

    console.log('Esto agrega un like a la publicación');

}
 
const cards = document.getElementsByClassName('card');

for(let i = 0; i < cards.length; i++) {

    // Al presionar una card, llamamos a una función
    cards[i].addEventListener('click', abrirPublicacion);

    const like = cards[i].getElementsByTagName('a');
    // Al presionar el botón like, llamamos a una función
    like[0].addEventListener('click', darLike);

}


// Templates String

let output = '<div>';
output = output + '<h1>Esto es un título</h1>'; // esto es igual a +=
output += '<p>Esto es un parrafo</p>';
output += '<a href="">Esto es un boton</a>';
output += '</div>';


// <div><h1>Esto es un título</h1><p>Esto es un parrafo</p>

const elem = document.getElementById('contendor');

elem.innerHTML = output;

const edad = 38;

output = `<p>Esto es un parrafo. La edad es ${edad}</p>`;

output = "<p>Esto es un parrafo. La edad es " + edad + "</p>";