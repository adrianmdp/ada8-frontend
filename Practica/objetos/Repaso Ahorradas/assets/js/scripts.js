var getStorage = function () {
    var locStor = JSON.parse(localStorage.getItem('todo-storage'));
    if (!locStor) {
        locStor = {
            categories: [],
            users: [],
            tasks: []
        };
    }
    return locStor;
};
var usuario1 = {
    id: 1,
    email: 'asd@asd.com',
    name: 'Adrián',
    pass: 'asd123'
};
for (var prop in usuario1) {
    console.log(prop, usuario1[prop]);
}
var props = Object.keys(usuario1);
for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
    var prop = props_1[_i];
    console.log(prop, usuario1[prop]);
}
