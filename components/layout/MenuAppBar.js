import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1)
    },
}));

export default function MenuAppBar() {

    const user = false;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <LocalLibraryIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        My Book App
                    </Typography>

                    {/* HOME PAGE */}
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        startIcon={<HomeIcon />}
                        href="/"
                    >
                    HOME PAGE
                    </Button>

                    {/* CREATE BOOK */}
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AddIcon />}
                        href="/create"
                    >
                    ADD A BOOK
                    </Button>

                    {/* ACCOUNT PAGE */}
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AddIcon />}
                        href="/account"
                    >
                    MY ACCOUNT
                    </Button>

                    {/* LOG IN */}
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        startIcon={<LockOpenIcon />}
                        href="/signin"
                    >
                    LOG IN
                    </Button>

                    {/* SIGN UP */}
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        startIcon={<PersonAddIcon />}
                        href="/signup"
                    >
                    SIGN UP
                    </Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}