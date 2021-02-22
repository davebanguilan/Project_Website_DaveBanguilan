import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {Container, Grid, Button, Typography, Paper, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import FormInput from "./FormInput";

import { useForm, FormProvider } from "react-hook-form";


import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;


const validationSchema = yup.object().shape({
    name: yup.string().required("Required").matches(/^[\.a-zA-Z\s]*$/, 'Please enter valid name').max(35, "Is that really a name?"),
    email: yup.string().email("Enter valid email").required("Required"),
    subject: yup.string().max(40, "Subject is too long").required('Required'),
    message: yup.string().min(8, "Your message is too short").required('Required')
  });

const Contact = ({scrollDiv}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(false);

    const methods = useForm({
        resolver: yupResolver(validationSchema)
      });
      const { handleSubmit, reset, errors } = methods;


    const onSubmit = async (data) => {
        setApiError(false);
        setIsLoading(true);
        await emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, data, REACT_APP_USER_ID)
        .then(function(response) {
            setOpen(true);
        }, function(error) {
            setApiError(true);
            setOpen(true);
        });

        //FOR testing
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        // console.log(data);

        reset();
        setIsLoading(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container ref={scrollDiv} className={classes.contact}>
                <Grid container justify="center">
                    <Typography className={classes.primaryColor} variant="h4">Contact Me</Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography className={classes.textColor} variant="h5">Send me a message! ✉</Typography>
                </Grid>

                <Grid data-aos="flip-up" container justify="center" className={classes.container} spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <FormProvider {...methods}>
                                <form autoComplete="off" className={`${classes.root} ${classes.form}`}  onSubmit={handleSubmit(onSubmit)} method="post">
                                    <FormInput name="name" label="Name" variant="outlined" autofocus={true}  errorobj={errors} />
                                    <FormInput name="email" label="Email" variant="outlined" errorobj={errors} />
                                    <FormInput name="subject" label="Subject" variant="outlined" errorobj={errors} />
                                    <FormInput name="message" multiline rows={5} label="Message" variant="outlined" errorobj={errors} />
                                    <Grid container className={classes.button} justify="flex-end">
                                        {isLoading ? (<CircularProgress />) :
                                            (<Button endIcon={<SendIcon />} variant="outlined" type="submit" className={classes.send} size="large">Send</Button>)}
                                    </Grid>
                                </form>
                            </FormProvider>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert variant="filled" onClose={handleClose} severity= {apiError ? "error" : "success"} >
                    { apiError ? "Error Occured in sending message, please try again later." : "Message Succesfully Sent!"}
                </Alert>
            </Snackbar>
        </>
    )
};

export default Contact;
