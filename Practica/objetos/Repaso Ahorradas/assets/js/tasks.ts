const loadFileds = () => {

   const storage: LocalStorage = getStorage();

   const selectCategories = document.getElementById('categories');

   for(const category of storage.categories) {

      const elem = document.createElement('option');
      // <option></option>
      elem.innerText = category.name;
      // <option>Nombre de categoría</option>
      elem.value = category.id.toString();
      // <option value="">Nombre de categoría</option>
      selectCategories.appendChild(elem);

   }

}

const init = () => {
   loadFileds()
}

init();