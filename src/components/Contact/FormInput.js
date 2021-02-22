import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import useStyles from './styles';

function FormInput(props) {
  const classes = useStyles();
  const { control } = useFormContext();
  const { name, label, errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  return (
    <Controller
      as={TextField}
      name={name}
      control={control}
      defaultValue=""
      label={label}
      className={classes.requiredLabel}
      error={isError}
      fullWidth={true}
      helperText={errorMessage}
      {...props}
    />
  );
}

export default FormInput;
