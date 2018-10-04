import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../.././BooksAPI'
import sortBy from 'sort-by'
import Book from '../Book/Book'
//TODO: use of react debounce input
//TODO: use of background image, either provide fallback or no image


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
                    // set the shelf to none to books not in shelf
                    book.shelf = 'none'
                )
                searchedBooks.map((book)=> (
                    this.props.books.forEach((books) => {
                        // console.log(book.id, books.id);
                        if (book.id === books.id) {
                            book.shelf = books.shelf;
                        }
                    })
                ))
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
                            <Book book={book} key={book.id} changeShelf={changeShelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}

export default Search