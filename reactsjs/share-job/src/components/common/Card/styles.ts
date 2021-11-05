import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  card: {
    border: "1px solid blue",
    color: "red",
  },
  cardTitle: {
    color: "black",
    "& h1": {
      color: "blue",
    },
  },
  cardBody: {},
  cardFooter: {},
});
