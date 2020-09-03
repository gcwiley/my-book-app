import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';

// Material UI Components Go here
import { Avatar, Paper, Button, TextField, Typography, Container, Grid, makeStyles} from '@material-ui/core';
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const INITIAL_USER = {
  email: "",
  password: ""
}

export default function SignIn() {

  const classes = useStyles();

  // Manage Initial State Here
  const [ user, setUser ] = useState(INITIAL_USER);
  const [ disabled, setDisabled ] = useState(true);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState('');


  useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true)
  }, [user])

  function handleChange(event) {
    const { name, value } = event.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      setError('')
      console.log(user)
      const url = 'URL GOES HERE'
      const payload = { ...user }
      await axios.post(url, payload)
    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return (

    <Container component="main" maxWidth="xs">

      <Paper variant="outlined" className={classes.paper} >

        <Avatar className={classes.avatar}>
          <LockedOutlinedIcon />
        </Avatar>

        <Typography component="h3" variant="h5">
          Sign In
        </Typography>

        <form
          onSubmit={handleSubmit}
          className={classes.form}
        >

            <TextField
              variant="outlined"
              size="small"
              label="Email"
              type="text"
              fullWidth
              margin="dense"
              name="email"
              value={user.email}

              autoFocus
              autoComplete="off"
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              size="medium"
              label="Name"
              type="password"
              fullWidth
              margin="dense"
              name="password"
              value={user.password}

              autoComplete="off"
              onChange={handleChange}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              className={classes.submitButton}
              disabled={disabled || loading }
            >
            Sign In
          </Button>

        </form>
      </Paper>

      <Grid container>

        <Grid item xs>
          <Link href="/forgot">
            <Typography>
              {"Forgot Password?"}
            </Typography>
          </Link>
        </Grid>

        <Grid item xs>
          <Link href="/signup">
            <Typography variant="body2">
              {"Don't have an account? Sign Up"}
            </Typography>
          </Link>
        </Grid>

      </Grid>

    </Container>
  );
}