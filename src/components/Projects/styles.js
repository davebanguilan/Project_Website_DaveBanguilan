import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  projects: {
    margin: "20px 0",
    padding: "50px",
    flexGrow: 1,

  },
  primaryColor: {
    color: "#19d3da",
    fontWeight: 600,
  },
  textColor: {
    color: "#323232",
    fontWeight: 600,
  },
}));
