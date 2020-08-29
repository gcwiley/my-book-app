import React from 'react';

// Material UI Components Go here
import { Paper, Button, TextField, Typography, Container, makeStyles, useRadioGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 // CSS Styles go here
}));

const INITIAL_USER = {
  email: "",
  password: ""
}

export default function SignIn() {

  const classes = useStyles();

  // Manage Initial State Here
  const [ user, setUser ] = React.useState()

  React.useEffect(() => {
    // Run Code here
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      
    } catch (error) {
      
    }
  }

  // varient
  // size
  // label
  // type
  // name
  // value

  // autoFocus - if first
  // autoComplete
  // helper text - if required

  // onChange

  return (

    <Container component="main" maxWidth="xs">
      <Paper>
        <Typography>
          Sign In
        </Typography>

        <form>

            <TextField
              variant="outlined"
              size="small"
              label="Email"
              type="text"
              name="email"
              value={user.email}

              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              size="medium"
              type="text"
              label="Name"

              
            />

            <Button>
            Sign In
          </Button>

        </form>
    
      </Paper>
     
    </Container>
  );
}