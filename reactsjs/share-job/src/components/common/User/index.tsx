import { FC, useContext } from "react";
import { useParams } from "react-router";
import { Card } from "..";
import { AuthContext } from "../../../contexts";
import { useAccount } from "../../../hooks/useAccount";

type Props = {
  name: string;
};

const User: FC<Props> = ({ name }) => {
  // const { id } = useParams()

  const { agregarVale, descontarVale, obtenerSueldo } = useAccount();

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <Card title="Tíulo de la card">
      <div className="card-body">
        Admin = {currentUser?.name}
        <br />
        Sueldo = {obtenerSueldo()}
      </div>

      <button onClick={() => agregarVale(100)}>Agregar vale</button>

      <button onClick={() => descontarVale(100)}>Descontar vale</button>

      <button
        onClick={() =>
          setCurrentUser({
            name,
            birthdate: new Date("13-04-1983"),
            email: "asd@asd.com",
            password: "asd",
            id: "123",
          })
        }
      >
        Definir admin
      </button>
      <hr />
    </Card>
  );
};

export { User };
