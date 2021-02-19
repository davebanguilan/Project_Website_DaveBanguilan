import {Container, Typography, Grid} from '@material-ui/core';
import React from 'react';
import Skill from './Skill/Skill';
import useStyles from "./styles";

const Skills = () => {
    const classes = useStyles();

    const skills = [
        {icon: "devicon-html5-plain", title: "HTML"},
        {icon: "devicon-css3-plain", title: "CSS"},
        {icon: "devicon-javascript-plain", title: "JavaScript"},
        {icon: "devicon-bootstrap-plain", title: "Bootstrap"},
        {icon: "devicon-mongodb-plain", title: "MongoDB"},
        {icon: "devicon-express-original", title: "ExpressJS"},
        {icon: "devicon-react-original", title: "ReactJS"},
        {icon: "devicon-nodejs-plain", title: "NodeJS"},
        {icon: "devicon-materialui-plain", title: "Material-UI"},
        {icon: "devicon-csharp-plain", title: "C#"},
        {icon: "devicon-dot-net-plain", title: ".NET"},
        {icon: "devicon-microsoftsqlserver-plain", title: "MS SQL"},
    ];

    return (
        <Container className={classes.skills} >   
            <Grid container justify="center">
                <Typography className={classes.primaryColor} variant="h4">Technical Skills</Typography>
            </Grid>
            <Grid container justify="center">
                <Typography className={classes.textColor} variant="h5">Programming Languages / Frameworks</Typography>
            </Grid>

            <Grid data-aos="fade-down" container className={classes.skill} spacing={3} justify="center" alignItems="center">
                {skills.map((skill) => <Skill data-aos="fade-down" icon={skill.icon} title={skill.title} />)}
            </Grid>
        </Container>
    )
}

export default Skills;
