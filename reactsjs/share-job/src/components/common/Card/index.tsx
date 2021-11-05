import { FC } from "react";
import { useStyles } from "./styles";

type Props = {
  title: string;
};

const Card: FC<Props> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardTitle}>
        <h1>{title}</h1>
        <h2>Título 2</h2>
      </div>
      <div className={classes.cardBody}>{children}</div>
      <footer className={classes.cardFooter}>Footer</footer>
    </div>
  );
};

export { Card };
