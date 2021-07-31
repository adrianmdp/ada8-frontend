type LocalStorage = {
   categories?: Category[]
   users?: User[]
   tasks?: Task[]
}

type User = {
   id: number,
   name: string,
   email: string,
   pass: string
}

type Category = {
   id: number,
   name: string,
   slug: string
}

type Task = {
   id: number,
   title: string,
   date_start: string,
   date_end: string,
   categories: Category[],
   user: User,
   description: string,
   status: "done" | "in progress" | "canceled" | "to do"
}

const getStorage = (): LocalStorage => {
   let locStor: LocalStorage = JSON.parse(localStorage.getItem('todo-storage'));

   if(!locStor) {
      locStor = {
         categories: [],
         users: [],
         tasks: []
      } 
   }

   return locStor;
}


const usuario1: User = {
   id: 1,
   email: 'asd@asd.com',
   name: 'Adrián',
   pass: 'asd123'
}

for(const prop in usuario1) {
   console.log(prop, usuario1[prop]);
}

const props = Object.keys(usuario1);

for(const prop of props) {
   console.log(prop, usuario1[prop]);
}