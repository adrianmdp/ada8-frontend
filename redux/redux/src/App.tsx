import { Provider } from "react-redux";
import { Login } from "./pages";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
