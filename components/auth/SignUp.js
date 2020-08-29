import React from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';

// MUI Components
import { Avatar, Paper,Button, TextField, Link, Grid, Box, Typography, Container ,makeStyles } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  // Add CSS Styles here
}));

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
}

export default function SignUp() {

  const classes = useStyles();

  // Manage State
  const [ user, setUser ] = React.useState(INITIAL_USER);

  return (

      <Paper>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form>

              <TextField
                variant="outlined"
                size="small"
                label="Name"
                name="lastName"
                autoComplete="lname"
              />

              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />

              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
        </form>

      </Paper>
  );
}