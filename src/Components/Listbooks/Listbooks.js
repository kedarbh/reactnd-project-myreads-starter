import React from 'react'
import Bookshelf from '../Bookshelf/Bookshelf'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Listbooks(props) {

    let bookshelf = ["wantToRead", "currentlyReading", "read"];
    let bookShelfTitle = ["Want To Read", "Currently Reading", "Read"];

    const { books, changeShelf } = props;

    let row =[];
    for (let i = 0; i < bookshelf.length; i++) {
        row.push(<Bookshelf key={i} books={books.filter(book => (
            book.shelf === bookshelf[i]
        ))}
            bookShelfTitle={bookShelfTitle[i]}
            changeShelf={changeShelf}
        />)
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {row}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )

}

Listbooks.propTypes = {
    books: PropTypes.array,
    changeShelf: PropTypes.func.isRequired

}

export default Listbooks