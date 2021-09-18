import { FC } from "react";
import { Inhabitant as InhabitantType } from "../../data/inhabitants";

type Props = {
  inhabitant: InhabitantType;
};

const Inhabitant: FC<Props> = (props) => {
  const { id, name, thumbnail, age, weight, height, hair_color } =
    props.inhabitant;

  return (
    <div>
      <ul>
        <li>Nombre: {id}</li>
        <li>Edad: {name}</li>
        <li>Nombre: {thumbnail}</li>
        <li>Edad: {age}</li>
        <li>Nombre: {weight}</li>
        <li>Edad: {height}</li>
        <li>Color de pelo: {hair_color}</li>
      </ul>
    </div>
  );
};

export { Inhabitant };
