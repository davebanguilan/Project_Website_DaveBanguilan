import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {Container, Grid, TextField , Button, Typography, Paper, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;

const Contact = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError(false);
        setIsLoading(true);
        await emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, formData, REACT_APP_USER_ID)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setOpen(true);
        }, function(error) {
            setApiError(true);
            setOpen(true);
            console.log('FAILED...', error);
        });
        clear();
        setIsLoading(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clear = () => {
        setFormData({
            name: "",
            subject: "",
            email: "",
            message: ""
        });
    };

    return (
        <>
            <Container className={classes.contact}>
                <Grid container justify="center">
                    <Typography className={classes.primaryColor} variant="h4">Contact Me</Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography className={classes.textColor} variant="h5">Send me a message! ✉</Typography>
                </Grid>

                <Grid data-aos="flip-up" container justify="center" className={classes.container} spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <form autoComplete="off" className={`${classes.root} ${classes.form}`}  onSubmit={handleSubmit} method="post">
                                <TextField name="name" label="Name" variant="outlined" value={formData.name} onChange={handleChange} autofocus fullWidth />
                                <TextField name="email" label="Email" variant="outlined" value={formData.email}  onChange={handleChange} fullWidth />
                                <TextField name="subject" label="Subject" variant="outlined" value={formData.subject}  onChange={handleChange} fullWidth />
                                <TextField name="message" multiline rows={5} variant="outlined" value={formData.message} label="Message" onChange={handleChange} fullWidth />
                                <Grid container className={classes.button} justify="flex-end">
                                    {isLoading ? (<CircularProgress />) :
                                         (<Button endIcon={<SendIcon />} variant="outlined" type="submit" className={classes.send} size="large">Send</Button>)}
                                </Grid>
                            </form>
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
}

export default Contact
