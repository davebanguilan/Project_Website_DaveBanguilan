import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  skills: {
    margin: "20px 0",
    background: "#F8F8F8",
    padding: "50px",
    flexGrow: 1,
    borderRadius: "30px",

  },
  skill: {
    margin: "20px 0",
  },
  primaryColor: {
    color: "#19d3da",
    fontWeight: 600,
  },
  textColor: {
    color: "#323232",
    fontWeight: 600,
  },
  iconTitle: {
    margin: "0 5px",
    color: "#323232",
  }
}));
