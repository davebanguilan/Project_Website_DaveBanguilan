import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),

    },
  },
  contact: {
    margin: "20px 0",
    padding: "50px",
    flexGrow: 1,
    borderRadius: "30px",
  },
  primaryColor: {
    color: "#19d3da",
    fontWeight: 600,
  },
  textColor: {
    color: "#323232",
    fontWeight: 600,
  },
  send: {
    color: "#FFFFFF",
    border: '1px solid',
    backgroundColor: "#19d3da",
    '&:hover': {
        color: "#19d3da",
        backgroundColor: "#FFFFFF"
    },
    "&:disabled": {
      backgroundColor: "#AAAAAA"
    }
  },
  container: {
    margin: "20px 0"
  }
  ,paper: {
    padding: theme.spacing(2),
    border: '1px solid #F8F8F8',
    background: "#F8F8F8",
    boxShadow: theme.shadows[5],
    borderRadius: '20px',
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    margin: "8px",
  },
  requiredLabel: {
    color: "#f44336"
  }

}));
