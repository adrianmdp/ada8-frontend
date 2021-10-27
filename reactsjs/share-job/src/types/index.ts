export type User = {
  birthdate: Date;
  email: string;
  id: string;
  name: string;
  password: string;
};

export type JobOffer = {
  id: string;
  title: string;
  description: string;
  company: string;
  city: string;
  date: string;
  mod: string;
};

// export type UserProfile = User & { image: string };

// const a: UserProfile = {
//   birthdate: new Date(),
//   email: "",
//   id: "",
//   name: "",
//   image: "path a la imagen",
//   password: "",
// };

// console.log(a);
