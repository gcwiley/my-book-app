// FIX THIS
import BookForm from '../test/BookForm';

const NewBook = () => {
    const bookForm = {
        title: '',
        author: '',
        number_of_pages: '',
        isbn: '',
        year_published: '',
        genre: '',
        summary: '',
    }

    return <BookForm formId="add-book-form" bookForm={bookForm} />
}

export default NewBook