import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

// MUI Components
import { Container, AppBar, Toolbar, Typography, IconButton, Button, makeStyles } from '@material-ui/core';

// MUI Icons
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginLeft: theme.spacing(1),
    color: theme.palette.action
  },
}));

export default function MenuAppBar() {

  const classes = useStyles();

  const router = useRouter();
  
  const user = true;

  // this is a helper function
  function isActive(route) {
    return route === router.pathname
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LocalLibraryIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            My Book Library
          </Typography>

          <Link href="/">
            <Button
              variant="outlined"
              color="default"
              size="small"
              startIcon={<HomeIcon />}
              className={classes.navButton}
            >
              Home
            </Button>
          </Link>

          {user && <Link href="/create">
            <Button
              variant="outlined"
              color="default"
              size="small"
              startIcon={<LocalLibraryIcon />}
              className={classes.navButton}
            >
              New Book
            </Button>
          </Link>}

          {user ? 

          (<>
            <Link href="/account">
              <Button
                variant="outlined"
                color="default"
                size="small"
                startIcon={<InfoIcon />}
                className={classes.navButton}
              >
                My Account
              </Button>
            </Link>

            <Button
                variant="outlined"
                color="default"
                size="small"
                startIcon={<ExitToAppIcon />}
                className={classes.navButton}
              >
                Logout
            </Button>
          </>)

          :
          
          (<>
            <Link href="/signin">
              <Button
                variant="outlined"
                color="default"
                size="small"
                startIcon={<LockOpenIcon />}
                className={classes.navButton}
              >
                Sign In
              </Button>
            </Link>

            <Link href="/signup">
              <Button
                variant="outlined"
                color="default"
                size="small"
                className={classes.navButton}
              >
                Sign Up
              </Button>
            </Link>
          </>)}

        </Toolbar>
      </Container>
      </AppBar>
    </div>
  );
}