import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(4),
        color: theme.palette.error.dark
    },
}));

export default function DeleteBook() {

    const classes = useStyles();

    // Manages State
    const [ open, setOpen ] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={handleClickOpen}
                size="small"
            >
                Delete Book
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Book"}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this book from your library?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button 
                        onClick={handleClose} 
                        variant="outlined" 
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleClose} 
                        variant="contained"
                        color="secondary"
                        disableElevation
                    >
                        Delete
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}