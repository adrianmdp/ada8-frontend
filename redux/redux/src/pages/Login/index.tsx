import { useDispatch } from "react-redux";
import { precessTest } from "../../redux/actions/test";

const Login = () => {
  const disaptch = useDispatch();

  disaptch(precessTest());

  return (
    <>
      <div>Login</div>
    </>
  );
};

export { Login };
