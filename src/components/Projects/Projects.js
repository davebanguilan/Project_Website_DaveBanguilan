import React from 'react';
// import {Container, Typography, Grid} from '@material-ui/core';
import { Typography, Grid, Container } from "@material-ui/core";
import Project from './Project/Project';
import WeatherApp from '../../images/weatherapp.jpg';
import StackApp from '../../images/stackapp.jpg';
import useStyles from "./styles";


const Projects = () => {
    const classes = useStyles();
    const myProjects= [
        {   id: 1,
            imageSrc: WeatherApp, 
            description: "This project is created using React. It uses OpenWeatherMap API to get current weather in a certain city. Just type the city on the input box to search for its current temperature and weather description.",
            title:"Weather App", 
            altText:"Weather App", 
            techs: ["devicon-react-original"], 
            githubLink: "https://github.com/davebanguilan/Project_Website_WeatherApp",
            deployedSite: "https://limitless-journey-87948.herokuapp.com/" },
            
        {   id: 2,
            imageSrc: StackApp, 
            description: "Stack is a mini social media web application where you can upload post a stack(picture with description). The application has two login options: Manual login (JWT-token based) and a Google OAuthentication.",
            title:"Stack", 
            altText:"Stack", 
            techs: ["devicon-mongodb-plain", "devicon-express-original", "devicon-react-original", "devicon-nodejs-plain", "devicon-materialui-plain", "devicon-redux-original"],
            githubLink: "https://github.com/davebanguilan/Project_Website_Stack_FE",
            deployedSite: "https://stack-frontend.zeet.app/" },
    ];

    return (
        <Container className={classes.projects}>
            <Grid container justify="center">
                <Typography className={classes.primaryColor} variant="h4">Projects</Typography>
            </Grid>
            <Grid container justify="center">
                <Typography className={classes.textColor} variant="h5">Here's a list of my projects</Typography>
            </Grid>

            <Grid data-aos="zoom-in-up" container className={classes.container} spacing={3} justify="center" alignItems="center">
                {myProjects.map((proj) =>
                    <Project key={proj.id} imageSrc={proj.imageSrc} title={proj.title} description={proj.description} 
                    altText={proj.altText} techs={proj.techs} githubLink={proj.githubLink} deployedSite={proj.deployedSite}/>
                )}
            </Grid>
        </Container>
    )
}

export default Projects
