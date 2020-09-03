import Link from "next/link";
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoIcon from '@material-ui/icons/Info';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(0),
    },
    newBookButton: {
        color: theme.palette.error.dark,
    }
  }));

export default function NavBar() {

    const classes = useStyles();

    const router = useRouter();
    
    const user = false;

    return (
        <>
            <Link href="/" passHref>
                <Button 
                    variant="outlined" 
                    color="primary"
                    component="a"
                    className={classes.button}
                    startIcon={<HomeIcon />}
                >
                    My Library
                </Button>
            </Link>

            <Link href="/create" passHref>
                <Button 
                    variant="outlined"
                    color="primary"
                    component="a"
                    className={classes.button}
                    startIcon={<AddBoxIcon />}
                >
                    Add a Book
                </Button>
            </Link> 

            <Link href="/about" passHref>
                <Button 
                    variant="outlined" 
                    color="primary"
                    component="a"
                    className={classes.button}
                    startIcon={<InfoIcon />}
                >
                About
                </Button>
            </Link>

            <Link href="/signin" passHref>
                <Button 
                    variant="outlined" 
                    color="primary"
                    component="a"
                    className={classes.button}
                    startIcon={<InfoIcon />}
                >
                Sign In
                </Button>
            </Link>

            <Link href="/signup" passHref>
                <Button 
                    variant="outlined" 
                    color="primary"
                    component="a"
                    className={classes.button}
                    startIcon={<InfoIcon />}
                >
                Sign Up
                </Button>
            </Link>
        </>
    );
}