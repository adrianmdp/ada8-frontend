const calcularPorcentaje = (param1, param2) => {

    return param1 * param2 / 100;

}


// const rta = calcularPorcentaje(10, 50);


const sumarPorcentaje = (pp, ee) => {
       
    return pp + calcularPorcentaje(pp, ee);
    
} 

const rta = sumarPorcentaje(10, 50);

console.log(rta);

