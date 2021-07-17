var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* Code */
var inhabitants = getInhabitants();
var inhabitantsTable = document.getElementById("inhabitants");
var inhabitantsTbody = inhabitantsTable.querySelector("tbody");
inhabitants.map(function (element) {
    var row = document.createElement("tr");
    for (var prop in element) {
        var celda = document.createElement("td");
        var text = document.createTextNode(element[prop]);
        celda.appendChild(text);
        row.appendChild(celda);
    }
    inhabitantsTbody.appendChild(row);
});
// Asignación por desestructuración
var inhabitant = getInhabitants()[0]; // le asigno una direccion de memoria k - 10 (ejemplo del excel)
var inhabitant2 = getInhabitants()[1];
var name = inhabitant.name;
var id = inhabitant.id, age = inhabitant.age, hair_color = inhabitant.hair_color;
console.log(id, name, age, hair_color);
// Cambiando el nombre de datos desestructurados
var newName = inhabitant2.name;
console.log(newName);
// Desestructuración anidada
var child = {
    name: "Pedro",
    email: "asd@asd.com",
    age: 15,
    father: {
        name: "Juan",
        age: 40,
        attributes: {
            weight: 39.065952,
            height: 107.75835,
            hair_color: "Pink",
            professions: [
                "Metalworker",
                "Woodcarver",
                "Stonecarver",
                " Tinker",
                "Tailor",
                "Potter",
            ],
            friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
        }
    },
    address: "Asd 3456"
};
var _a = child.father, professions = _a.attributes.professions, fatherAge = _a.age;
var father = child.father;
var fatherName = father.name;
// console.log(professions);
// child.father.attributes.professions.map(profession => {
// });
// professions.map(profession => {
//});
console.log(fatherName);
// Objetos como parámetros
var getNameMessage = function (value) {
    return "El nombre del personaje es: " + value.name;
};
var response = getNameMessage(inhabitant);
console.log(response);
// Desestructurando parámetros
var getAgeMessage = function (_a) {
    var age = _a.age;
    return "El personaje tiene: " + age + " a\u00F1os.";
};
var response2 = getAgeMessage(inhabitant);
console.log(response2);
// Operador spread
var getInhabitantInfo = function (_a) {
    var professions = _a.professions, friends = _a.friends, restoDelObjeto = __rest(_a, ["professions", "friends"]);
    console.log("-----------------------------");
    for (var prop in restoDelObjeto) {
        console.log(prop + ": " + restoDelObjeto[prop]);
    }
    console.log("-----------------------------");
    professions.map(function (profession, index) {
        console.log("Profesi\u00F3n " + (index + 1) + ": " + profession);
    });
    console.log("-----------------------------");
    friends.map(function (friend, index) {
        console.log("Amigo " + (index + 1) + ": " + friend);
    });
};
// inhabitants.map((inhabitant: Personaje)=> {
// getInhabitantInfo(inhabitant);
// });
// Operador rest
var suma = function (num1, num2, num3) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    console.log(rest);
    var result = 0;
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var num = rest_1[_a];
        result += num;
    }
    return result;
};
var resp = suma(2, 4, 5, 34, 56, 67, 34, 56, 67, 34, 56, 67, 34, 56, 67);
console.log(resp);
// Inmutabilidad
var nominaEmpleado = {
    nombre: "Adrián",
    salario: 10000,
    puesto: "developer"
};
var nominaEmpleado2 = {
    nombre: "Mati",
    salario: 12000,
    puesto: "developer"
};
Object.freeze(nominaEmpleado);
// Por error hubo un cambio en el salario de los empleados.
nominaEmpleado.salario = 30000;
nominaEmpleado.premios = 1.12;
var cobrarSalario = function (_a) {
    var salario = _a.salario;
    return salario * 1.12;
};
var aCobrar = cobrarSalario(nominaEmpleado);
console.log(aCobrar);
Object.seal(nominaEmpleado2);
nominaEmpleado2.salario = 30000;
nominaEmpleado2.premios = 1.12;
console.log(nominaEmpleado2);
// Pasaje por valor vs pasaje por referencia
// Shallow copy vs deep copy
var var1 = 34;
var var2 = 22;
var1 = var2;
console.log(var1, var2);
// Cuando asignamos por referencia, estamos modificando el dato origen
var inhabitantTest = inhabitant; // a inhabitantTest le asigno la direccion de memoria k - 10 (ejemplo del excel);
// inhabitantTest.age = 9999999999;
// console.log(inhabitantTest, inhabitant);
// Cuando asignamos por destructuración, estamos generando un nuevo dato copia.
var inhabitantTest2 = __rest(inhabitant, []);
inhabitantTest2.age = 9999999999;
console.log(inhabitantTest2, inhabitant);
// {
//    id: 0,
//    name: "Tobus Quickwhistle",
//    thumbnail:
//      "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
//    age: 306,
//    weight: 39.065952,
//    height: 107.75835,
//    hair_color: "Pink",
//    professions: [
//      "Metalworker",
//      "Woodcarver",
//      "Stonecarver",
//      " Tinker",
//      "Tailor",
//      "Potter",
//    ],
//    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
//  },
