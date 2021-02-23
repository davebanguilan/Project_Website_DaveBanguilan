import {Container, Typography, Grid} from '@material-ui/core';
import React from 'react';
import Skill from './Skill/Skill';
import useStyles from "./styles";

const Skills = () => {
    const classes = useStyles();

    const skills = [
        {id: 1, icon: "devicon-html5-plain", title: "HTML"},
        {id: 2, icon: "devicon-css3-plain", title: "CSS"},
        {id: 3, icon: "devicon-javascript-plain", title: "JavaScript"},
        {id: 4, icon: "devicon-bootstrap-plain", title: "Bootstrap"},
        {id: 5, icon: "devicon-mongodb-plain", title: "MongoDB"},
        {id: 6, icon: "devicon-express-original", title: "ExpressJS"},
        {id: 7, icon: "devicon-react-original", title: "ReactJS"},
        {id: 8, icon: "devicon-nodejs-plain", title: "NodeJS"},
        {id: 9, icon: "devicon-materialui-plain", title: "Material-UI"},
        {id: 10, icon: "devicon-csharp-plain", title: "C#"},
        {id: 11, icon: "devicon-dot-net-plain", title: ".NET"},
        {id: 12, icon: "devicon-microsoftsqlserver-plain", title: "MS SQL"},
    ];

    return (
        <Container className={classes.skills} >   
            <Grid container justify="center">
                <Typography className={classes.primaryColor} variant="h4">Technical Skills</Typography>
            </Grid>
            <Grid container justify="center">
                <Typography className={classes.textColor} variant="h5">Programming Languages / Frameworks</Typography>
            </Grid>

            <Grid container className={classes.skill} spacing={3} justify="center" alignItems="center">
                {skills.map((skill) => 
                    <Grid data-aos="fade-down" key={skill.id} item xs={6} sm={4}>
                        <Grid container alignItems="center">
                            <Skill data-aos="fade-down" icon={skill.icon} title={skill.title} />
                        </Grid>
                </Grid>)}
            </Grid>
        </Container>
    )
}

export default Skills;
