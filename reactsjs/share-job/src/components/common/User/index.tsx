import { FC, useContext } from "react";
import { useParams } from "react-router";
import { Card } from "..";
import { AuthContext } from "../../../contexts";
import { useAccount } from "../../../hooks/useAccount";

type Props = {
	name: string
}

const User: FC<Props> = ({name}) => {
  // const { id } = useParams()

  const { agregarVale, descontarVale, obtenerSueldo } = useAccount();

	const { currentUser, cambiarAdmin } = useContext(AuthContext)

  return (
    <Card title="Tíulo de la card">
		<div className="card-body">
			Admin = {currentUser?.name}
			<br />
			Sueldo = {obtenerSueldo()}
		</div>

		<button onClick={() => agregarVale(100)}>
			Agregar vale
		</button>

		<button onClick={() => descontarVale(100)}>
			Descontar vale
		</button>

		<button onClick={() => {
			cambiarAdmin({
				name, 
				birthdate: new Date('13-04-83'), 
				email: 'asd@asd.com',
				id: '1234',
				password: 'asdasd' 
			})
		}}>
			Definir usuario
		</button>
		<hr />
	</Card>
  );
};

export { User };
