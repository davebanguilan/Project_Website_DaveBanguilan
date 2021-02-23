import React from 'react';
import FileSaver from 'file-saver';
import {Container, Button, Typography, Grid} from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

import useStyles from "./styles";
import Me from '../../images/Me.jpg';


const Hero = ({scrollToComponent}) => {
    const classes = useStyles();
    const downloadCV = () => {
    FileSaver.saveAs(
        process.env.PUBLIC_URL + "assets/resume.pdf",
        "Banguilan.pdf"
    )};
    return (

        <Container className={classes.hero}>
            <Grid data-aos="fade-up" container spacing={3} justify="center" alignItems="center">
                <Grid className={classes.detailsContainer} data-aos="fade-right" item xs={12} sm={8} >
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
                        <Button startIcon={<EmailOutlinedIcon />} variant="outlined" className={classes.button1} size="large" onClick={scrollToComponent}>Contact Me</Button>
                        <Button startIcon={<GetAppOutlinedIcon />} variant="outlined" border={1} className={classes.button2} size="large" onClick={downloadCV}>Download CV</Button>
                    </div>
                </Grid>
                <Grid className={classes.imgContainer} data-aos="fade-left" item container xs={12} sm={4} justify="flex-end" >
                    <img className={classes.imgAvatar} src={Me} alt="Dave Banguilan"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero;
