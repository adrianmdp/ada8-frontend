const filas = 6;
const col = 6;
const cellSize = 70

let pos_x = 0;

for(let i = 0; i < filas; i++) {

    let pos_y = 0;

    for(let j = 0; j < col; j++) {

        const celda = document.createElement('div');
        celda.style.width = `${cellSize}px`;
        celda.style.height = `${cellSize}px`;

        celda.style.position = 'absolute';
        celda.style.left = `${pos_y}px`;
        celda.style.top = `${pos_x}px`;
        celda.style.border = '1px solid #000';

        celda.setAttribute('data-x', i);
        celda.setAttribute('data-y', j);

        pos_y = pos_y + cellSize;

        document.body.appendChild(celda);

    }

    pos_x = pos_x + cellSize;

}

document.body.style.position = 'relative';



const devolverFruta = () => {
    const num = Math.floor(Math.random()*10)
    
    console.log(num);

    if(num < 3.6) {
        return 'limon';
    } 
}

console.log(devolverFruta());