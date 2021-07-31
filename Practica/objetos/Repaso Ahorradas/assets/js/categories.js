var formAddCategory = document.getElementById('form-add-category');
var storage = getStorage();
var getId = function () {
    var storage = getStorage();
    if (storage.categories.length > 0) {
        var lastItem = storage.categories[storage.categories.length - 1];
        return lastItem.id + 1;
    }
    return 1;
};
var createCategory = function (e) {
    e.preventDefault();
    var form = e.target;
    var newCategoryName = form.name.value;
    var newCategory = {
        id: getId(),
        name: newCategoryName,
        slug: slugify(newCategoryName)
    };
    storage.categories.push(newCategory);
    localStorage.setItem('todo-storage', JSON.stringify(storage));
};
formAddCategory.addEventListener('submit', createCategory);
