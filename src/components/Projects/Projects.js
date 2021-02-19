import React from 'react';
import {Container, Typography, Grid} from '@material-ui/core';
import useStyles from "./styles";

const Projects = () => {
    const classes = useStyles();
    return (
        <Container className={classes.projects}>
            <Grid container justify="center">
                <Typography className={classes.primaryColor} variant="h4">Projects</Typography>
            </Grid>
        </Container>
    )
}

export default Projects
