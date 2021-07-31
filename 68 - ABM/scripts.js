/**
 * Clonar objetos
 */
// const user = { 
//    firstname: 'Ada', 
//    lastname: 'Lovelace' 
// }

// // Asignación por referencia "No genera una copia";
// const user2 = user; 
// user2.firstname = "Adri"

// // Clone del objeto user "Es una copia que puedo alterar sin modificar al original"
// const newUser = { ...user } 
// newUser.firstname = "Mati"

// console.log(newUser, user, user2);


/**
 * Clonar objetos anidados
 */
// const user = {
//    fullname: {
//      firstname: 'Ada', 
//      lastname: 'Lovelace'
//    },
//    account: {
//       email: 'asd@email.com',
//       pass: 'asdasdasd'
//    },
//    isActive: true
// }
// const newUser = { 
//    account: {
//      ...user.fullname,
//      ...user.account
//    },
//    isActive: user.isActive
// }

// console.log(newUser);


/**
 * Unir objetos
 */
// const personalInfo = { 
//   firstname: 'Ada', 
//   lastname: 'Lovelace' 
// }
// const contactInfo = { 
//   email: 'adalovelace@gmail.com' 
// }
// const user = { 
//   ...personalInfo, 
//   ...contactInfo 
// }

// console.log(user);

/**
 * Agregar propiedades a un objeto clonado
 */
// const personalInfo = { 
//    firstname: 'Ada', 
//    lastname: 'Lovelace' 
// }
// const user = { 
//    ...personalInfo, 
//    email: 'adalovelace@gmail.com'  
// }

/**
 * Actualizar propiedades
 */
// const user = { 
//    firstname: 'Ada', 
//    lastname: 'Lovelace', 
//    email: 'adalovelace2002@yahoo.com' 
// }
// const updatedUser = {
//    ...user,
//    email: 'adalovelace@gmail.com'
// }

// console.log(updatedUser)

/**
 * Eliminar propiedades
 */
// const data = { 
//    firstname: 'Ada', 
//    lastname: 'Lovelace', 
//    email: 'adalovelace2002@yahoo.com' 
// }
// const { email, lastname, ...user } = data

// console.log(user);

/**
 * Clonar array (slice)
 */
// const original = [0, 1, 2, 3, 4]
// const copy = [...original]

// const [...copy] = original

// console.log(copy)

/**
 * Concatenar arrays (concat)
 */
// const arr1 = [0, 1, 2]
// const arr2 = [3, 4, 5]
// const arr3 = [6, 7, 8]
// const mergedArr = [
//    ...arr1,
//    ...arr2,
//    ...arr3,
// ]
// console.log(mergedArr);
/**
 * Agregar item(s) al final (push)
 */
// const numbers = [0, 1, 2, 3]
// const updatedNumbers = [...numbers, 4, 5]

/**
 * Agregar item(s) al principio (unshift)
 */
// const numbers = [1, 2, 3]
// const updatedNumbers = [0, ...numbers]

/**
 * Agregar items al principio y final (unshift y push)
 */
// const numbers = [1, 2, 3]
// const updatedNumbers = [0, ...numbers, 4, 5]

/**
 * Remover item(s) al principio (shift)
 */
// const numbers = [0, 1, 2, 3, 4, 5]
// const [first, second, ...others] = numbers

// console.log(others);


/**
 * Funciones puras e impuras
 */


// const suma = (a, b) => {
//    return a + b;
// }

// const getDay = () => {
//    return new Date().getDate();
// }

// console.log(getDay());


// const setName = (num) => {
//    let dato = 0;
//    return dato = dato + num;
// }

// console.log(setName(43));
// console.log(setName(43));


const array = [1, 2, 3, 4, 5]

/**
 * Map
 */
 const res1 = array.map((elem) => {
   return elem * 10
})

console.log(res1);

/**
 * Reduce
 */

array.reduce(() => {}, 300)


const res2 = array.reduce((prev, curr, i, arr) => {
   // console.log(prev);
   console.log(prev, curr, i, arr)

   return prev + curr

}, 100)

console.log(res2);





// console.log(res)

// console.log('-------------------------------------------');

// const res3 = array.reduce((prev, curr, i, arr) => {

//    console.log(prev, curr, i, arr)

// }, 30)



// Ejemplo de uso real de clonado profundo

const response = {
   name: 'Adrian',
   email: 'asd@asd.com',
   address: {
      name: 'asd',
      number: '23432',
      zip: 123123,
      city: 'MdP'
   }
}


const user = {
   name: 'Adrian',
   email: 'asd@asd.com',
   location: {
      ...response.address
   }
}

// console.log(user)