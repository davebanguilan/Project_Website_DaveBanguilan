import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  hero: {
    margin: "80px 0",
    flexGrow: 1,
  },
  primaryColor: {
    color: "#19d3da",
  },
  textColor: {
    color: "#323232",
  },
  gray: {
    color: "#AAAAAA"
  },
  imgAvatar: {
    width: "275px",
    height: "275px",
    borderRadius: "50%",
  },
  buttonGroup: {
      marginTop: "50px",
  },
  button1: {
    color: "#FFFFFF",
    border: '1px solid',
    backgroundColor: "#19d3da",
    '&:hover': {
        color: "#19d3da",
        backgroundColor: "#FFFFFF"
    }
  },
  button2: {
    margin: "0 10px",
    color: "#19d3da",
    border: '1px solid',
    backgroundColor: "#FFFFFF",
    boxShadow: "#00aaaa 0px 0px 10px 0px'",
    '&:hover': {
        color: "#FFFFFF",
        backgroundColor: "#19d3da",
    }
    
  },
  
  [theme.breakpoints.down("sm")]: {
    hero: {
      margin: "50px 0",
      padding: "0px",
      flexGrow: 1,
      justifyContent: "center",
    },
    buttonGroup: {
      marginTop: "20px",
    },
    detailsContainer: {
      justifyContent: "center",
      textAlign: "center"
    },
    imgContainer: {
      justifyContent: "center",
      margin: "30px 0"
    },
    button1: {
      '&:hover': {
        color: "#FFFFFF",
      backgroundColor: "#19d3da",
      }
    },
    button2: {
      '&:hover': {
        color: "#19d3da",
        backgroundColor: "#FFFFFF",
      }
    },
    
  },

}));
