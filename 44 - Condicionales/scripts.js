/**
 * Operador ternario
 */

let accion;
let color = "verde";

if(color === 'rojo') 
    accion = 'no pasar';
 else 
    accion = 'pasar';


// condicion ? cuando es true pasa esto : cuando es false pasa esto

accion = color === 'rojo' ? 'no pasar' : 'pasar'

/**
 * **********************************************************************
 */

if(color === 'rojo') 
    accion = true;
 else 
    accion = false;


accion = color === 'rojo' ? true : false


accion = color === 'rojo'


console.log(accion);


/**
 * Switch casos agrupados
 */

switch(color) {
    case 'amarillo' :
    case 'rojo' : accion = 'no pasar'
    break;

    case 'verde' : accion = 'pasar'
    break;

    default : accion = 'off';
}