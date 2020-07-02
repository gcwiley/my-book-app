import React from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoIcon from '@material-ui/icons/Info';

import { makeStyles } from '@material-ui/core/styles';

// CSS Styles

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(0),
    },
  }));

export default function NavBar() {

    const classes = useStyles();

    return (
        <>
            <Link href="/index" passHref>
                <Button 
                    variant="outlined" 
                    color="primary"
                    component="a"
                    className={classes.button}
                    startIcon={<HomeIcon />}
                >
                    Home
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
                    Add Book
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
        </>
    );
}