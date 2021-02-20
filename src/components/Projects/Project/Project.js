import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import useStyles from "./styles";
const Project = ({imageSrc, description, title, altText, techs, githubLink, deployedSite}) => {
    const classes = useStyles();
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return (
        <Grid item xs={12} sm={6} justify="center">
            <Grid container alignItems="center">
                <Card className={classes.card}>
                    <CardMedia className={classes.media} 
                        component="img"
                        alt={altText}
                        src={imageSrc}
                        title={title}/>

                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h4" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.description} color="textSecondary" variant="h6" gutterBottom>
                            {description}
                        </Typography>
                        <Grid className={classes.stacks} spacing={2} alignItems="center">
                            <Grid container alignItems="center" >
                                <Typography variant="h6" component="p">
                                    Frameworks used:
                                </Typography>
                                {techs.map((tech) => (<i className={`${tech} colored`} style={{fontSize: "25px", margin: "0 3px"}}></i>))}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                            <Button className={classes.github} startIcon={<GitHubIcon />} size="small" onClick={() => openInNewTab(githubLink)}>GitHub</Button>
                            <Button className={classes.site} startIcon={<LanguageOutlinedIcon />} size="small" color="primary" onClick={() => openInNewTab(deployedSite)}>Deployed Site</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

    )
}

export default Project
