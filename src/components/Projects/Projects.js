import React from 'react';
// import {Container, Typography, Grid} from '@material-ui/core';
import { Typography, Grid, Container } from "@material-ui/core";
import Project from './Project/Project';
import WeatherApp from '../../images/weatherapp.jpg';
import StackApp from '../../images/stackapp.jpg';
import EcommerceApp from '../../images/ecommerceapp.jpg';
import ChatApp from '../../images/chatapp.jpg';
import useStyles from "./styles";


const Projects = () => {
    const classes = useStyles();
    const myProjects= [

        // {   id: 4,
        //     imageSrc: EcommerceApp, 
        //     description: "This ecommerce store is created using React for the frontend, Flexible eCommerce APIs for any frontend framework, CMS or PWA. Developer-first, API-first, headless eCommerce infrastructure for growing businesses.",
        //     title:"Ecommerce", 
        //     altText:"Ecommerce",
        //     techs: [{id: 1, icon: "devicon-react-original", iconText:"React"}], 
        //     githubLink: "https://github.com/davebanguilan/Project_Website_ECommerce",
        //     deployedSite: "https://davebanguilan-ecommerce.netlify.app/" },
        {   id: 4,
            imageSrc: StackApp, 
            description: "Stack is a mini social media web application where you can upload post a stack(picture with description). The application has two login options: Manual login (JWT-token based) and a Google OAuthentication.",
            title:"Stack", 
            altText:"Stack",
            techs: [{id: 1, icon: "devicon-mongodb-plain", iconText:"MongoDB"},{id: 2, icon: "devicon-express-original", iconText:"ExpressJS"} , {id: 3, icon: "devicon-react-original", iconText:"React"}, {id: 4, icon: "devicon-nodejs-plain", iconText:"NodeJS"} , {id: 5, icon: "devicon-materialui-plain", iconText:"MaterialUI"}, {id: 6, icon: "devicon-redux-original", iconText:"Redux"}],
            githubLink: "https://github.com/davebanguilan/Project_Website_Stack_FE",
            deployedSite: "https://stack-frontend.zeet.app/" },
        {   id: 3,
            imageSrc: ChatApp, 
            description: "Chat application is created using React for the frontend and ChatEngine.io for the backend. ChatEngine is an API which makes it easy to build chat services. It provides a Rest API to host chats and components to for user interface.",
            title:"Chat App", 
            altText:"Chat App",
            techs: [{id: 1, icon: "devicon-react-original", iconText:"React"}], 
            githubLink: "https://github.com/davebanguilan/Project_Website_ChatApp",
            deployedSite: "https://davebanguilan-chatapp.netlify.app/" },
        {   id: 2,
            imageSrc: EcommerceApp, 
            description: "This ecommerce store is created using React for the frontend, Flexible eCommerce APIs for any frontend framework, CMS or PWA. Developer-first, API-first, headless eCommerce infrastructure for growing businesses.",
            title:"Ecommerce", 
            altText:"Ecommerce",
            techs: [{id: 1, icon: "devicon-react-original", iconText:"React"}], 
            githubLink: "https://github.com/davebanguilan/Project_Website_ECommerce",
            deployedSite: "https://davebanguilan-ecommerce.netlify.app/" },
        {   id: 1,
            imageSrc: WeatherApp, 
            description: "This project is created using React. It uses OpenWeatherMap API to get current weather in a certain city. Just type the city on the input box to search for its current temperature and weather description.",
            title:"Weather App", 
            altText:"Weather App", 
            techs: [{id: 1, icon: "devicon-react-original", iconText:"React"}], 
            githubLink: "https://github.com/davebanguilan/Project_Website_WeatherApp",
            deployedSite: "https://limitless-journey-87948.herokuapp.com/" },
        
    ];

    return (
        <Container className={classes.projects}>
            <Grid container justify="center">
                <Typography className={classes.primaryColor} variant="h4">Projects</Typography>
            </Grid>
            <Grid container justify="center">
                <Typography className={classes.textColor} variant="h5">Here's a list of my projects</Typography>
            </Grid>

            <Grid container className={classes.container} justify="center">
                {myProjects.map((proj) =>
                    <Grid className={classes.indivGrid} data-aos="zoom-in-up" key={proj.id} item xs={12} sm={6} >
                        <Project imageSrc={proj.imageSrc} title={proj.title} description={proj.description} 
                        altText={proj.altText} techs={proj.techs} githubLink={proj.githubLink} deployedSite={proj.deployedSite}/>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default Projects
