import React from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { useRouter } from 'next/router'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

// MUI Icons
import DeleteIcon from '@material-ui/icons/Delete';

export default function BookActions({ book }) {

    const { _id } = book;

    console.log(_id)

    const [ modal, setModal ] = React.useState(false)

    const router = useRouter()

    async function handleDelete() {
        const url = `${baseUrl}/api/books`
        const payload = { _id }
        await axios.delete(url, { params: { payload }} )
        router.push('/');
    }

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={() => setModal(true)}
            >
                Delete Book
            </Button>

            <Dialog
                open={modal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Delete Book</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this book from your library?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>

                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setModal(false) }
                    >
                        Cancel
                    </Button>

                    <Button
                        color="secondary"
                        variant="contained"
                        size="small"
                        startIcon={<DeleteIcon />}
                        disableElevation
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>

                </DialogActions>
            </Dialog>
        </>
    )
}