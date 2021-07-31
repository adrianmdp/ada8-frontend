const formAddCategory = document.getElementById('form-add-category');
let storage = getStorage();

const getId = () => {

   const storage: LocalStorage = getStorage();

   if(storage.categories.length > 0) {
      const lastItem = storage.categories[storage.categories.length -1];
      return lastItem.id + 1;
   } 

   return 1;
}

const createCategory = (e) => {
   e.preventDefault();

     const form = e.target;

     const newCategoryName: string = form.name.value;

     const newCategory: Category = {
        id: getId(),
        name: newCategoryName,
        slug: slugify(newCategoryName)
     }

     storage.categories.push(newCategory);

     localStorage.setItem('todo-storage', JSON.stringify(storage));

}

formAddCategory.addEventListener('submit', createCategory);