import React from 'react';

import {Container, Button, Typography, Grid} from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

import useStyles from "./styles";
import Me from '../../images/Me.jpg';

const Hero = () => {
    const classes = useStyles();
    return (
        <Container className={classes.hero}>
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} sm={8} justify="center">
                    <Typography variant="h4">
                        <span variant="h4" className={classes.primaryColor}>Hey there,</span> I'm Dave Banguilan
                    </Typography>
                    <Typography className={classes.textColor} variant="h2">
                        Software Developer
                    </Typography>
                    <Typography className={classes.gray} variant="h5">
                        5th year student 🎓 | Night Owl 🌃
                    </Typography>
                    <div className={classes.buttonGroup}>
                        <Button startIcon={<EmailOutlinedIcon />} variant="outlined" className={classes.button1} size="large">Contact Me</Button>
                        <Button startIcon={<GetAppOutlinedIcon />} variant="outlined" border={1} className={classes.button2} size="large">Download CV</Button>
                    </div>
                </Grid>
                <Grid item container xs={12} sm={4} justify="flex-end" alignItems="flex-end">
                    <img className={classes.imgAvatar} src={Me} alt="Dave Banguilan"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero;
