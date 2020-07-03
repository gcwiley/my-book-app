
// Material UI Components
import Container from '@material-ui/core/Container'

// Layout Components
import NavBar from '../components/layout/NavBar';

export default function About() {
    return (
    <>
        <Container>
            <NavBar />
            <h1>This is the About Page</h1> 
        </Container>
    </>
    );
}