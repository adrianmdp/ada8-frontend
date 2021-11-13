import { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card } from "..";
import { User as UserType } from "../../../types";

type Props = {
  user: UserType;
};

const User: FC<Props> = ({ user }) => {
  const { push } = useHistory();

  return (
    <Card title={user.name}>
      <div className="card-body">
        <ul>
          <li>{user.email}</li>
        </ul>

        <button onClick={() => push(`/users/${user.id}`)}>Ver usuario</button>

        <Link to={`/users/${user.id}`}>Ver usuario</Link>
      </div>
    </Card>
  );
};

export { User };
