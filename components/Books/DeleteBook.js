import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(8),
    },
}));

export default function DeleteBook() {

    const classes = useStyles();

    return (
        <div>
            <Button
                variant="outlined"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete Book
            </Button>
        </div>
    )
}