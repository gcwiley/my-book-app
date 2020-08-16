import React from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { useRouter } from 'next/router'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function BookActions({ _id }) {

    const [ modal, setModal ] = React.useState(false)

    const router = useRouter()

    async function handleDelete() {
        const url = `${baseUrl}/api/books`
        const payload = { params: { _id }}
        await axios.delete(url, payload)
        router.push('/');
    }

    return (
        <>
            <Button
                variant="outlined"
                color="primary"
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
                        onClick={() => setModal(false) }
                    >
                        Cancel
                    </Button>

                    <Button
                        color="secondary"
                        variant="outlined"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>

                </DialogActions>
            </Dialog>
        </>
    )
}