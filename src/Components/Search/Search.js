import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../.././BooksAPI'
import sortBy from 'sort-by'

class Search extends React.Component {
    state = {
        query: '',
        results: []
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })

        if (query) {
            this.searchBooks(query)
        } else if (query === '') {
            this.setState({ results: [] })
        }
    }

    searchBooks = (query) => {
        BooksAPI.search(query).then((searchedBooks) => {
            if (searchedBooks.length > 0) {
                searchedBooks.forEach((book) =>
                    // set the shelf to none to every books
                    book.shelf = 'none'
                )
                this.props.books.forEach((books) => {
                    if (searchedBooks.id === books.id) {
                        searchedBooks.shelf = books.shelf;
                    }
                })
                this.setState({ results: searchedBooks })
            }
        })
    }

    render() {
        const {results} = this.state;
        const {changeShelf} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {results.sort(sortBy('title')).map((book) => (
                            <li key={book.id} className='books-grid'>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(event) => changeShelf(book, event)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}

export default Search