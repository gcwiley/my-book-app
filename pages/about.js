// Material UI Components
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

// Layout Components
import NavBar from '../components/layout/NavBar';

export default function About() {
    return (
    <>
        <Container maxWidth="md">
            <NavBar />
    
            <Typography variant="h5" gutterBottom>
                About My Book Library
            </Typography>

            <Typography variant='body1'>
                My Book Library is a simple web application that allows users to create and delete thier favorite books to a Mongo database.
                The web application uses React, NextJS, Mongoose, MongoDB and Material UI.
            </Typography>

        </Container>
    </>
    );
}