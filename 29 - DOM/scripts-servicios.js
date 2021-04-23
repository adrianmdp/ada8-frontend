/**
 * getElementById
 */
const article1 = document.getElementById('news-1');
const articles = document.getElementsByClassName('new');
const linkToAda = document.getElementById('link-to-ada');

// console.log(article1);
// console.log(articles);



/**
 * querySelector & querySelectorAll
 */
const firstNew = document.querySelector('.new');

// console.log(firstNew);

const allNews = document.querySelectorAll('.new');

// console.log(allNews);




/**
 * classList (add, remove, toggle, contains)
 */
console.log(articles.length);

for(let indice = 0; indice < articles.length; indice++) {

    console.log(articles[indice]);
    
}
// setTimeuout no es necesario. Lo utilizo solo para provocar una espera en
// milisegundos.
setTimeout(() => {

    article1.classList.add('cl-primary');

    // article1.classList.remove('bg-primary');

}, 5000);

setTimeout(() => {

    article1.classList.toggle('cl-primary');

}, 2000);

console.log(article1.classList.contains('news'));

console.log('articles[0].classList.contains("bg-primary") esto devuelve ', articles[0].classList.contains('bg-primary'))

if(articles[0].classList.contains('bg-primary')) {

    articles[0].style.backgroundColor = 'black';
    articles[0].style.color = 'white';

}


/**
 * style
 */
for(let indice = 0; indice < articles.length; indice++) {

    articles[indice].classList.add('cl-primary');
    
    articles[indice].style.fontSize = '2rem';
    
}

/**
 * setAttribute & getAttribute
 */
article1.setAttribute('data-size', 'blue');
article1.setAttribute('id', 'nuevo-id');
article1.setAttribute('class', 'nuevo-valor');

linkToAda.setAttribute('href', 'http://adaitw.org');

console.log(article1.getAttribute('data-postid'));


/**
 * data & dataset
 */
// Devuelve un objeto con sus propiedades según los atributos data que tiene el elemento.
// Cuando lleguemos a objetos, vemos como tratarlo.
console.log(article1.dataset);


/**
 * innerText & innerHTML
 */
const newWrapper = document.getElementById('new-wrapper');

const stringArticle = '<article id="news-2" class="new bg-light"><h2 class="title">Lorem, ipsum dolor.</h2><div class="article-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam quidem magnam porro aliquid aut doloribus dolorum reiciendis inventore maiores.</div><footer></footer></article>';


 linkToAda.innerText = "Accedé a ADA";
 newWrapper.innerHTML = stringArticle;