
// Material UI
import Container from '@material-ui/core/Container';

// Layout Components
import NavBar from '../components/layout/NavBar';
import BookForm from '../components/Books/BookForm';

export default function About() {
    return (
        <>
        <Container>
           <NavBar />
            <BookForm />
        </Container>
        </>
    );
}
