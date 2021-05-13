const edad = prompt("Ingrese un dato");

switch (edad) {
  case "1":
    alert("Se ejecuto el caso 1");
    break;

  case "2":
    alert("Se ejecuto el caso 2");
    break;

  case "3":
    alert("Se ejecuto el caso 3");
    break;

  default:
    alert("Se ejecuto el default");
}

/**
 * Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION.
 * y luego de elegida, ingresar dos números y hacer dicha operación con ella.
 */
// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const op = document.getElementById("operacion");

const form = document.getElementById("calculadora");

console.log();

const calcular = (event) => {
  event.preventDefault();

  const num1 = parseInt(event.target.num1.value);
  const num2 = parseInt(event.target.num2.value);
  const op = event.target.operacion.value;

  let respuesta;

  switch (op) {
    case "suma":
      respuesta = num1 + num2;
      break;

    case "resta":
      respuesta = num1 - num2;
      break;

    case "multiplicacion":
      respuesta = num1 * num2;
      break;

    default:
      respuesta = num1 / num2;
  }

  rta.innerText = respuesta;
};

form.addEventListener("submit", calcular);
