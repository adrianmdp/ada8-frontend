var loadFileds = function () {
    var storage = getStorage();
    var selectCategories = document.getElementById('categories');
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        var elem = document.createElement('option');
        // <option></option>
        elem.innerText = category.name;
        // <option>Nombre de categoría</option>
        elem.value = category.id.toString();
        // <option value="">Nombre de categoría</option>
        selectCategories.appendChild(elem);
    }
};
var init = function () {
    loadFileds();
};
init();
