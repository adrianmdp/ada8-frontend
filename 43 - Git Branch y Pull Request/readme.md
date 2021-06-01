##### 1 - Lo primero es definir la tarea y crear una branch con un nombre claro que ayude a entender lo que resuelve y a identificarla con facilidad.

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown.png?raw=true)

##### 2 - Al hacer el checkout -b creamos la branch y nos posicionamos en ella. Ahora, en esta nueva branch, ya podemos realizar todos los cambios que requiere la tarea. En la siguiente imagen, al hacer git status podemos ver que tenemos una modificación en un rachivo existente y uno que aún no tiene seguimiento xq no existe en nuestro repositorio, osea que se trata de un nuevo archivo.

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown2.png?raw=true)

##### 3 - En este paso vamos a stagear los cambios con el comando git add. Podemos hacerlo archivo por archivo escribiendo git add /ruta/al/archivo/nombre.ext. O masivamente con git add . (atención al punto del final). Al hacer git status, ahora vemos los archivos con color verde, listos para crear el commit.

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown3.png?raw=true)

##### 4 - Hacemos el commit con un mensaje claro de la tarea realizada.

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown4.png?raw=true)

##### 5 - Nos vamos a la rama main y hacemos git pull para trabajar con la última actualización.

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown5.png?raw=true)

##### 6 - Con la seguridad de que ya tenemos main actualizado, volvemos a la branch que estuvimos editando, hacemos git merge para juntar el proyecto principal a los nuevos cambios (ojo xq esto esta pasando en la branch update-users-form, main no va a tener estos nuevos cambios)

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown6.png?raw=true)

##### 7 - Ya estamos listos para hacer el push de nuestra branch con el commando git push. Como la estamos subiendo por primera vez al repositorio, al comando debemos agregarle --set-upstream origin nombre-branch

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown7.png?raw=true)

##### 8 - Ya en github, procedemos a crear la pull request haciendo click en el botón verde "Compare & pull request"

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown8.png?raw=true)

##### 9 - Presionamos el botón verde "Create pull request"

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown9.png?raw=true)

##### 10 - Dentro de la solapa pull request en la solapa "Files changed" podemos hacer una revisión de los cambios para asegurarnos de que todo esta correcto previo a mergear a main.

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown10.png?raw=true)

##### 11 - Antes de hacer el merge a main, vamos a realizar modificaciones en una nueva branch. Antes que nada, tenemos que volver siempre a la rama main para crear nuevas branchs. Es importante, ante la duda, partir siempre desde main cuando creamos nuevas branchs. Vamos crear branchs a partir de otra branch en el caso de que necesitemos cambios de ella que aún no han sido mergeados a main.

##### Hacemos de una vez el cambio a main, creamos la nueva branch, hacemos los cambios necesarios para resolver la tarea, stageamos los cambios y creamos el nuevo commit

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown11.png?raw=true)

##### 12 - Supongamos que mientras estamos haciendo cambios en esta branch, aprobamos los cambios de la branch anterior y hacemos el merge de la pull request.

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown12.png?raw=true)

##### 13 - Ahora en la rama main tenemos los cambios de la branch update-users-form pero en la branch add-layout-styles no tenemos esos cambios. Esto podemos o no saberlo y de hecho no debería preocuparnos. Lo importante es adotpar un paso a paso que garantice que antes de crear nuestro nuevo pull request, tenemos lo nuevo que hicimos sumado a todo lo último que hay en main y que no existen conflictos.

##### Para garantizar este paso a paso volvemos al paso 5 y avanzamos hasta ralizar el "merge pull request" del último paso en github.

![](https://github.com/adrianmdp/ada8-frontend/blob/main/43%20-%20Git%20Branch%20y%20Pull%20Request/images/unknown13.png?raw=true)
