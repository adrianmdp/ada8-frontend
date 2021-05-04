const numbers = document.getElementsByClassName('number');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
const erase = document.getElementById('erase');

const addToResult = (e) => {

    value = e.target.value;

    if(result.innerText.length < 6) {
        result.innerText += value;
    }

}


/**
 * Agregar numeros
 */
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', addToResult);
}

/**
 * Limpiar
 */
reset.addEventListener('click', () => {
    result.innerText = '';
});

/**
 * Borrar
 */
erase.addEventListener('click', () => {
    result.innerText = result.innerText.slice(0, -1);
    
});