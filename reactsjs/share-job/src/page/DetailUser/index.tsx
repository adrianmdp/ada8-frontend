import { FC, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUser } from "../../api";
import { User } from "../../types";

type ParamsType = {
  pepe: string;
};

const DetailUser: FC = () => {
  const [user, setUser] = useState<User>();

  const { pepe } = useParams<ParamsType>();

  const { goBack } = useHistory();

  useEffect(() => {
    getUser(pepe).then((response) => {
      setUser(response);
    });
  }, [pepe]);

  return (
    <div>
      <button onClick={goBack}>{"<-"}</button>
      <ul>
        <li>{user?.name}</li>
        <li>{user?.email}</li>
        <li>{user?.birthdate}</li>
        <li>{user?.password}</li>
        <li>{user?.sessionToken}</li>
      </ul>
      {/* Detail User */}
    </div>
  );
};

export { DetailUser };
