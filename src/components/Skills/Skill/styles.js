import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  iconTitle: {
    margin: "0 10px",
    color: "#323232",
  },
  [theme.breakpoints.down("sm")]: {
    
  },

}));
