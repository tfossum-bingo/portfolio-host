// import SignInSignUpForm from "./subcomponents/SignInSignUpForm"
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const formSubmit = (e) => {
//   e.target.push('/main');
// }

const SignInPage = (props) => {
  const classes = useStyles();

const signInSubmit = async (event) => {
    console.log(event)
    // event.preventDefault()
    // try {
    //   const loginData = await __LoginUser(this.state)
    //   console.log(loginData)
    //   this.props.toggleAuthenticated(true, loginData.user, () =>
    //     this.props.history.push('/main')
    //   )
    // } catch (error) {
    //   this.setState({ formError: true })
    // }
  }

  return (
    <div>
      <Link to="/">
        <Button color="#fce4ec">Back</Button>
      </Link>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div className={classes.buttonWrapper}>
              <Button type="button" onSubmit={signInSubmit} variant="contained" color="primary" className={classes.submit}> Sign In </Button>
            </div>
            <Box mt={5}>
            </Box>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    </div>
  );
}

export default SignInPage