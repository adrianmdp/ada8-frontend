document.body.style=`display:flex; justify-content:center; align-items: center; flex-direction:column;`

const buttonsContainer = document.querySelector('#buttonsContainer');
buttonsContainer.style=`margin:30px; display:flex; justify-content:center; align-items: center;`

const button = document.getElementsByClassName('myButton')
for(let i=0; i<button.length; i++){
    button[i].style.width="150px";
    button[i].style.fontSize="20px";
    button[i].style.margin="10px";
    button[i].style.height="40px";
    button[i].style.borderRadius="10px";
    button[i].style.border="none";
    button[i].style.backgroundColor="#66D4C2";

}

const buttons = document.getElementsByClassName('myButton');
const movies = document.getElementsByClassName('movie');

const filtrar = (event) => {

    const button = event.target;
    const genero = button.getAttribute('data-genero');

    for(let i = 0; i < movies.length; i++) {
        if(genero === movies[i].getAttribute('data-cat') || genero === 'all') {
            movies[i].style=`display:in-line;`;
        } else {
            movies[i].style=`display:none;`;
        }
    }

}

for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', filtrar)

}