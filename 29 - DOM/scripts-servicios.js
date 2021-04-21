/**
 * 
 */
const article1 = document.getElementById('news-1');
const articles = document.getElementsByClassName('new');

// console.log(article1);
// console.log(articles);

/**
 * 
 */
const firstNew = document.querySelector('.new');

// console.log(firstNew);

const allNews = document.querySelectorAll('.new');

// console.log(allNews);

/**
 * 
 */
// console.log(articles.length);

// for(let indice = 0; indice < articles.length; indice++) {

//     console.log(articles[indice]);
    
// }
// setTimeuout no es necesario. Lo utilizo solo para provocar una espera en
// milisegundos.
setTimeout(() => {

    article1.classList.add('cl-primary');

    article1.classList.remove('bg-primary');

}, 5000);

setTimeout(() => {

    article1.classList.toggle('cl-primary');

}, 2000);



console.log(article1.classList.contains('news'));


if(document.body.classList.contains('dark')) {

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

}

for(let indice = 0; indice < articles.length; indice++) {

    articles[indice].classList.add('cl-primary');
    articles[indice].style.fontSize = '2rem';
    
}

