const user1 = ["Adrián", "Solimano", "aaa@aaa.com", "asd123"];
const user2 = ["Mati", "Perez", "aaa@aaa.com", "asd123"];
const user3 = ["Juan", "Gonzalez", "aaa@aaa.com", "asd123"];

const saldos = [123, 222, user1, "Pedro", user2];

saldos[14] = 333;
saldos[28] = 909090909;
saldos[0] = "Reemplacé el primer número";

for (let i = 0; i < saldos.length; i++) {

  if (typeof saldos[i] == "object") {

    for (let j = 0; j < saldos[i].length; j++) {

    //   console.log(saldos[i][j]);

    }

  } else {

    //   console.log(saldos[i]);
      
  }
}

// saldos.shift();

saldos.push(user3);

// saldos.unshift(5);



for(let saldo of saldos) {

    console.log(saldo);

}