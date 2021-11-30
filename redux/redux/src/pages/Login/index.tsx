import { useDispatch, useSelector, useStore } from "react-redux";
import { processTest } from "../../redux/actions/test";
import { login } from "../../redux/actions/users";
import {store} from '../../redux/store'


type Store = {
  test: {
    data: any[]
  },
  user: {
    accessToken: string
  }
}

const Login = () => {
  const dispatch = useDispatch();


  const getTest = () => {
    dispatch(processTest());
    dispatch(login());
  }

  // Ejemplo 1
  const user = useSelector((state: Store) => state.user.accessToken)

  // Ejemplo 2
  const {test} = useSelector((state: Store) => state)

  return (
    <>
      <div>Login</div>
      {test.data.map(movie => {
        return <div>{movie.backdrop_path}</div>
      })}

      {user}
      <button onClick={() => getTest()}></button>
    </>
  );
};

export { Login };
