var ganadoras = [
    {
        nombre: "Bebe Zahara Benet",
        temporada: "1",
        foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg"
    },
    {
        nombre: "Tyra Sanchez",
        temporada: "2",
        foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg"
    },
    {
        nombre: "Raja",
        temporada: "3",
        foto: "http://www.nokeynoshade.party/images/raja.jpg"
    },
    {
        nombre: "Sharon Needles",
        temporada: "4",
        foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg"
    },
    {
        nombre: "Jinkx Monsoon",
        temporada: "5",
        foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg"
    },
    {
        nombre: "Bianca Del Rio",
        temporada: "6",
        foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg"
    },
];
var fx1 = function (g) {
    var output = '';
    for (var _i = 0, g_1 = g; _i < g_1.length; _i++) {
        var persona = g_1[_i];
        var nombre = persona.nombre, temporada = persona.temporada;
        output += nombre + " gan\u00F3 la temporada " + temporada + "\n";
    }
    return output;
};
var fx2 = function (g) {
    var output = g.map(function (elem) {
        return elem.nombre + " gan\u00F3 la temporada " + elem.temporada;
    });
    return output.join('\n');
};
// console.log(fx1(ganadoras));
// console.log(fx2(ganadoras));
// `Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6`
console.log(ganadoras.length);
var resp = ganadoras.reduce(function (prev, curr) {
    return prev + (curr.nombre + " gan\u00F3 la temporada " + curr.temporada + "\n");
}, '');
console.log(resp);
