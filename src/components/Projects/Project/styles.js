import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  primaryColor: {
    color: "#19d3da",
    fontWeight: 600,
  },
  textColor: {
    color: "#323232",
    fontWeight: 600,
  },

  card: {
    maxWidth: 400,
    borderRadius: "25px",
    border: "1px solid #F9F9F9"
  },

  title: {
    color: "#323232",
    fontWeight: 600,
  },

  description: {
    fontWeight: 300
  },
  icons: {
    margin: "0 10px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  github: {
    color: "#000000",
    backgroundColor: "#FFFFFF",
    '&:hover': {
      color: "#FFFFFF",
      backgroundColor: "#000000",
    }
  },
  site: {
    color: "#0000FF",
    backgroundColor: "#FFFFFF",
    '&:hover': {
      color: "#FFFFFF",
      backgroundColor: "#0000FF",
    }
  },
  [theme.breakpoints.down("sm")]: {
  },

}));
