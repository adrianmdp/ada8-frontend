import { FC } from "react";
import { useParams } from "react-router-dom";

const DetailUser: FC = () => {
  const { slug: user } = useParams<{ slug: string }>();

  return (
    <div>
      {user} <br />
      Detail User
    </div>
  );
};

export { DetailUser };
