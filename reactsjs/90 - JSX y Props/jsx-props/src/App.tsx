import { Header } from "./Header";
import { User } from "./types";

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const a = 123;

  const user: User = {
    name: "Adrian",
    email: "adrian@asd.com",
    username: "adrianmdp",
  };

  return (
    <>
      <Header userLoggedIn={user} />
      <div>
        <div id="">App</div>
        <div id="dato">{a}</div>
        <form action="">
          <input type="text" />
        </form>
        {numbers.map((num) => (
          <>
            <div>El numero es: </div>
            <div>{num}</div>
          </>
        ))}
      </div>
      <div>Hola mundo</div>
    </>
  );
};

export default App;
