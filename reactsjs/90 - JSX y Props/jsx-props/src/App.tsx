import { Header } from "./Header";
import { User } from "./types";
import { inhabitants } from "./data/inhabitants";
import { Inhabitant } from "./components/Inhabitant";

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const user: User = {
    name: "Adrian",
    email: "adrian@asd.com",
    username: "adrianmdp",
  };

  return (
    <>
      <Header userLoggedIn={user} />

      {numbers.map((num) => (
        <>
          <div>El numero es: </div>
          <div>{num}</div>
        </>
      ))}

      {inhabitants.map((inhabitant) => (
        <Inhabitant
          inhabitant={inhabitant} 
          // id={inhabitant.id}
          // name={inhabitant.name}
          // thumbnail={inhabitant.thumbnail}
          // age={inhabitant.age}
        />
      ))}
    </>
  );
};

export default App;
