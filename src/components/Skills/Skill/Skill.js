import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import useStyles from "./styles";

const Skill = ({icon, title}) => {
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={4} justify="center">
            <Grid container alignItems="center">
                <i className={`${icon} colored`} style={{fontSize: "70px"}}></i>
                <Typography className={classes.iconTitle} variant="h5">{title}</Typography>
            </Grid>
        </Grid>
    )
}

export default Skill
