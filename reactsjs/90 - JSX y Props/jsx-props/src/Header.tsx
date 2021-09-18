import { FC } from "react";
import { User } from "./types";

type Props = {
  userLoggedIn: User;
  title?: string;
};

const Header: FC<Props> = (props) => {
  console.log(props);

  return <div>Este es el Header</div>;
};

export { Header };
