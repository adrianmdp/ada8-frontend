import Cabecera, { Algo } from "./components/layout/header/index";

const unaFuncion = () => {
  return 2 + 2;
};

const App = () => {
  const unaFuncion2 = () => {
    return 3 + 3;
  };

  unaFuncion2();
  unaFuncion();

  return (
    <div>
      <Cabecera />

      <Algo />

      <nav>Nav</nav>

      <aside>aside</aside>

      <main>main</main>

      <footer>footer</footer>
    </div>
  );
};

export default App;
