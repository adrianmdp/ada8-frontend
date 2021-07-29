type Persona = {
   nombre: string,
   temporada: string
   foto: string
}

let ganadoras: Persona[] = [
   {
     nombre: "Bebe Zahara Benet",
     temporada: "1",
     foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
   },
   {
     nombre: "Tyra Sanchez",
     temporada: "2",
     foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
   },
   {
     nombre: "Raja",
     temporada: "3",
     foto: "http://www.nokeynoshade.party/images/raja.jpg",
   },
   {
     nombre: "Sharon Needles",
     temporada: "4",
     foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
   },
   {
     nombre: "Jinkx Monsoon",
     temporada: "5",
     foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
   },
   {
     nombre: "Bianca Del Rio",
     temporada: "6",
     foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
   },
];


const fx1 = (g) => {
   let output = '';

   for(const persona of g) {
      const { nombre, temporada } = persona
      output += `${nombre} ganó la temporada ${temporada}\n`
   }

   return output
}

const fx2 = (g) => {

   const output = g.map((elem) => {
      return `${elem.nombre} ganó la temporada ${elem.temporada}`;
   });

   return output.join('\n');
}

// console.log(fx1(ganadoras));
// console.log(fx2(ganadoras));

// `Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6`


console.log(ganadoras.length);


const resp =  ganadoras.reduce((prev, curr) => {

  return prev + `${curr.nombre} ganó la temporada ${curr.temporada}\n`

}, '');

console.log(resp)