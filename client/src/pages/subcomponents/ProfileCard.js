import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProfileCard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Paper style={{ Width: "50%" }} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk" />
              </ButtonBase>
            </Grid>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Collin Didier
                </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Full Stack Developer
                </Typography>
                  <Typography variant="body2" gutterBottom>
                    Developer keen to create better code and debug all errors.
                </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Technologies: React, Javascript, Phyton, MongoDb
                </Typography>
                </Grid>
                <Grid item>
                  <Link to="portfolio">
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      See portfolio
                </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  )
  }

export default ProfileCard