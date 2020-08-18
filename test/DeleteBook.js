// DELETE BOOK COMPONENT

function DeleteBook({ book }) {

    const classes = useStyles();

    const router = useRouter()

    async function handleDelete() {
        const url = `${baseUrl}/api/books/[id]`
        const payload = { params: { _id }}
        await axios.delete(url, payload)
        setOpen(false);
        router.push('/') 
    }

    // Manages State
    const [ open, setOpen ] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button
                className={classes.deleteButton}
                variant="contained"
                color="primary"
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
                        onClick={handleDelete}
                        variant="contained"
                        disableElevation
                    >
                        Delete
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    );
}